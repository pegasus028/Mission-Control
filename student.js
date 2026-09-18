/* ===========================================================================
   MISSION CONTROL — student.js
   =========================================================================== */
(function () {
  'use strict';
  var C = window.CONTENT, E = window.Engine, P = E.Progress, api = window.API;
  var $ = function (s) { return document.querySelector(s); };
  var esc = E.esc;

  var S = {
    p: null,
    sessItems: 0, sessCorrect: 0,
    run: null,          /* practice run */
    exam: null,         /* mock paper run */
    simple: false,
    sysOpen: null, lvlOpen: null, celebrateTimer: null
  };

  /* ------------------------------------------------------------- helpers */
  function toast(msg, ms) {
    $('#toast-slot').innerHTML = '<div class="toast">' + esc(msg) + '</div>';
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { $('#toast-slot').innerHTML = ''; }, ms || 2600);
  }
  function modal(html) {
    var slot = $('#modal-slot');
    slot.innerHTML = '<div class="modal"><div class="modal-card">' + html + '</div></div>';
    slot.querySelector('.modal').addEventListener('click', function (ev) {
      if (ev.target === this) slot.innerHTML = '';
    });
    var b = slot.querySelector('[data-close]');
    if (b) b.addEventListener('click', function () { slot.innerHTML = ''; });
  }
  function pct(x) { return Math.round((x || 0) * 100); }
  function mmss(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* --------------------------------------------------------------- sync */
  function sync() {
    if (!S.p) return Promise.resolve();
    S.p._readiness = P.readiness(S.p);
    S.p._rank = P.rank(S.p).name;
    return api.save(S.p).catch(function () { return { ok: false }; });
  }
  var syncSoon = (function () {
    var t;
    return function () { clearTimeout(t); t = setTimeout(sync, 10000); };
  })();

  /* Students are never shown connection state. A dropped network is not their
     problem to solve: answers queue on the device the moment they are given,
     the app retries on its own, and a genuine outage surfaces on the teacher
     console where it belongs. Settings names the backlog if anyone looks. */
  api.onModeChange = function () {};
  setInterval(function () {
    if (!S.p) return;
    if (api.mode !== 'cloud') api.retryCloud();
    if (api.pendingCount()) sync();
  }, 15000);

  /* =====================================================================
     LOGIN
     ===================================================================== */
  var mode = 'in';
  function setMode(m) {
    mode = m;
    $('#tab-in').classList.toggle('on', m === 'in');
    $('#tab-new').classList.toggle('on', m === 'new');
    $('#wrap-name').classList.toggle('hidden', m !== 'new');
    $('#btn-go').textContent = m === 'in' ? 'Log in' : 'Create my account';
    $('#f-pw').setAttribute('autocomplete', m === 'in' ? 'current-password' : 'new-password');
    say('');
  }
  function say(text, bad) {
    var m = $('#login-msg');
    m.className = 'msg ' + (bad ? 'bad' : 'info') + (text ? '' : ' hidden');
    m.textContent = text;
  }
  $('#tab-in').addEventListener('click', function () { setMode('in'); });
  $('#tab-new').addEventListener('click', function () { setMode('new'); });

  function go() {
    var id = $('#f-id').value.trim().toLowerCase();
    var pw = $('#f-pw').value;
    var name = $('#f-name').value.trim();
    if (!id) return say('Enter a student ID.', true);
    if (!/^[a-z0-9._-]{3,24}$/.test(id)) return say('Use 3-24 letters, numbers, dots or dashes, with no spaces.', true);
    if (pw.length < 4) return say('Your password needs at least 4 characters.', true);
    if (mode === 'new' && !name) return say('Enter the name your teacher will see.', true);
    $('#btn-go').disabled = true;
    say(mode === 'new' ? 'Creating your account…' : 'Checking…');
    var slow = setTimeout(function () {
      say('Still working — the class server is waking up. This can take a few seconds.');
    }, 4000);
    var req = mode === 'new' ? api.register(id, pw, name) : api.login(id, pw);
    req.then(function (r) {
      clearTimeout(slow);
      $('#btn-go').disabled = false;
      if (!r || !r.ok) return say((r && r.error) || 'Something went wrong. Try again.', true);
      start(r.progress || P.blank(id, name || id));
    }).catch(function (e) {
      clearTimeout(slow);
      $('#btn-go').disabled = false;
      say('Could not reach the server: ' + e.message, true);
    });
  }
  $('#btn-go').addEventListener('click', go);
  ['f-id', 'f-pw', 'f-name'].forEach(function (k) {
    $('#' + k).addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
  });

  /* =====================================================================
     START
     ===================================================================== */
  function start(progress) {
    S.p = progress;
    if (!S.p.stats) S.p.stats = { seen: 0, correct: 0, byTag: {} };
    if (!S.p.review) S.p.review = {};
    if (!S.p.badges) S.p.badges = [];
    if (!S.p.subs) S.p.subs = {};
    if (!S.p.checks) S.p.checks = {};
    if (!S.p.mocks) S.p.mocks = {};
    if (!S.p.media) S.p.media = {};
    var newDay = P.touchDay(S.p);
    $('#screen-login').classList.add('hidden');
    $('#screen-app').classList.remove('hidden');
    paintHeader();
    show('map');
    api.startSession(S.p.studentId);
    var earned = P.checkBadges(S.p);
    sync();
    if (newDay && S.p.streak > 1) toast('Day ' + S.p.streak + ' in a row. Keep the streak alive.');
    if (earned.length) S.celebrateTimer = setTimeout(function () { celebrate(earned[0]); }, 900);
  }

  function logout() {
    if (S.exam && !confirm('You are in the middle of a simulation. Leaving now will lose it. Log out anyway?')) return;
    api.endSession(S.p.studentId, S.sessItems, S.sessCorrect);
    sync().then(function () { api.clearToken(); location.reload(); });
  }
  $('#btn-out').addEventListener('click', logout);
  function flushOnExit() {
    if (!S.p) return;
    api.endSession(S.p.studentId, S.sessItems, S.sessCorrect);
    if (!api.flushBeacon(S.p)) sync();
  }
  window.addEventListener('pagehide', flushOnExit);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && S.p && api.pendingCount()) api.flushBeacon(S.p);
  });

  /* ----------------------------------------------------------- header UI */
  function paintHeader() {
    var p = S.p, r = P.rank(p), ready = P.readiness(p);
    $('#hdr-name').textContent = p.displayName;
    $('#hdr-rank').textContent = r.name + ' · ' + P.checksCleared(p) + '/' + E.Bank.allLevels().length + ' checks';
    $('#hdr-ready').textContent = ready + '%';
    $('#hdr-bar').style.width = ready + '%';
    $('#hdr-streak').textContent = p.streak || 0;
    $('#hdr-xp').textContent = p.xp || 0;
    var due = P.dueReview(p).length;
    $('#nav-faults').textContent = due ? ' (' + due + ')' : '';
    $('#nav-record').textContent = p.assignment && !p.assignment.done ? ' •' : '';
  }

  /* --------------------------------------------------------------- views */
  var VIEWS = ['map', 'play', 'faults', 'sims', 'record', 'settings'];
  function show(v) {
    /* An award card left open would sit on top of whatever comes next and
       swallow every click, so changing view clears it — and cancels any award
       still queued behind it. */
    clearTimeout(S.celebrateTimer);
    $('#modal-slot').innerHTML = '';
    VIEWS.forEach(function (x) { $('#view-' + x).classList.toggle('hidden', x !== v); });
    document.querySelectorAll('.nav button[data-view]').forEach(function (b) {
      b.classList.toggle('on', b.dataset.view === v);
    });
    if (v === 'map') paintMap();
    if (v === 'faults') paintFaults();
    if (v === 'sims') paintSims();
    if (v === 'record') paintRecord();
    if (v === 'settings') paintSettings();
    window.scrollTo({ top: 0 });
  }
  document.querySelectorAll('.nav button[data-view]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (S.exam && !confirm('Leave the simulation? Your answers so far will be lost.')) return;
      S.exam = null;
      show(b.dataset.view);
    });
  });

  /* =====================================================================
     SYSTEMS MAP
     ===================================================================== */
  function nextAction(p) {
    if (p.assignment && !p.assignment.done) {
      return { kind: 'set', label: 'Take the paper your teacher set',
               sub: p.assignment.itemIds.length + ' questions' };
    }
    for (var i = 0; i < C.TOPICS.length; i++) {
      var t = C.TOPICS[i];
      for (var j = 0; j < t.levels.length; j++) {
        var lv = t.levels[j];
        for (var k = 0; k < lv.subs.length; k++) {
          var s = lv.subs[k], rec = p.subs[s.id];
          if (!rec || rec.best < E.PASS_SUB) {
            return { kind: 'sub', t: t, lv: lv, id: s.id, label: s.name,
                     sub: t.code + ' · Level ' + lv.n + ' · ' + s.cefr };
          }
        }
        var ch = p.checks[lv.check.id];
        if (!ch || ch.best < E.PASS_CHECK) {
          return { kind: 'check', t: t, lv: lv, id: lv.id, label: lv.check.name,
                   sub: t.code + ' · pass at 75% to turn this level green' };
        }
      }
    }
    var due = P.dueReview(p).length;
    if (due) return { kind: 'faults', label: 'Clear your fault list',
                      sub: due + (due === 1 ? ' question is' : ' questions are') + ' due' };
    var un = (C.MOCKS || []).filter(function (m) { return !(p.mocks || {})[m.id]; })[0];
    if (un) return { kind: 'sim', id: un.id, label: un.name, sub: '50 questions · 60 minutes · the real shape of the paper' };
    return null;
  }

  function paintMap() {
    var p = S.p;
    var next = nextAction(p);
    if (S.sysOpen === null && next && next.t) { S.sysOpen = next.t.id; S.lvlOpen = next.lv.id; }

    var html = '';
    if (next) {
      html += '<button class="resume" id="resume">' +
        (next.t ? E.artBand(next.t.art, 'resume-art') : E.artBand('sim', 'resume-art')) +
        '<span class="resume-t">' +
          '<span class="kicker">' +
            (next.kind === 'check' ? 'Next systems check' : next.kind === 'set' ? 'From your teacher' :
             next.kind === 'faults' ? 'Fault list' : next.kind === 'sim' ? 'Simulation' : 'Pick up where you left off') +
          '</span>' +
          '<span class="resume-n">' + esc(next.label) + '</span>' +
          '<span class="resume-s">' + esc(next.sub) + '</span>' +
        '</span><span class="resume-go">Start →</span></button>';
    } else {
      html += '<div class="resume done"><span class="resume-t">' +
        '<span class="kicker">Every system green</span>' +
        '<span class="resume-n">Mission Director</span>' +
        '<span class="resume-s">Nothing is outstanding. Replay a simulation to push the score higher.</span>' +
        '</span></div>';
    }

    html += '<div class="sect-h"><div><h2>Eight systems</h2>' +
      '<p style="color:var(--ink-2);font-size:.92rem;margin-top:4px">' + esc(P.rank(p).note) + '</p></div>' +
      '<span class="pill on">' + P.checksCleared(p) + ' of ' + E.Bank.allLevels().length + ' checks cleared</span></div>';

    html += '<div class="systems">';
    C.TOPICS.forEach(function (t) {
      var tp = P.topicPct(p, t);
      var allGreen = t.levels.every(function (lv) {
        var c = p.checks[lv.check.id]; return c && c.best >= E.PASS_CHECK;
      });
      var open = S.sysOpen === t.id;
      html += '<div class="sys' + (allGreen ? ' done' : '') + (open ? ' exp' : '') + '">';
      html += '<button class="sys-head" data-sys="' + t.id + '">' +
        E.artBand(t.art, 'sys-art') +
        '<span class="sys-meta">' +
          '<span class="sys-line1">' +
            '<span class="sys-code">' + esc(t.code) + '</span>' +
            '<span class="sys-name">' + esc(t.name) + '</span>' +
            '<span class="pill">' + esc(t.cefr) + '</span>' +
            (allGreen ? '<span class="pill good">Green</span>' : '') +
          '</span>' +
          '<span class="sys-blurb">' + esc(t.blurb) + '</span>' +
          '<span class="sys-prog"><span class="bar-line"><span style="width:' + tp + '%"></span></span>' +
          '<span class="sys-pct">' + tp + '%</span></span>' +
        '</span><span class="caret">›</span></button>';

      /* The introduction for this system. Buttons appear only for the media
         that exists, and the whole strip disappears if a system has none, so
         episodes can be added one at a time. */
      if (t.podcast || t.slides || t.video) {
        var md = (p.media || {})[t.id] || {};
        html += '<div class="sys-res">';
        if (t.video) {
          html += '<button class="res' + (md.videoOpens ? ' done' : '') + '" data-act="yt" data-topic="' + t.id + '">' +
            '<span class="res-i">\u25B6</span>Video</button>';
        }
        if (t.slides) {
          html += '<a class="res' + (md.slidesOpens ? ' done' : '') + '" href="' + esc(t.slides) + '" ' +
            'target="_blank" rel="noopener" data-act="pdf" data-topic="' + t.id + '">' +
            '<span class="res-i">\u2630</span>Slides</a>';
        }
        if (t.podcast) {
          html += '<button class="res' + (md.done ? ' done' : '') + '" data-act="pod" data-topic="' + t.id + '">' +
            '<span class="res-i">' + (md.done ? '\u2713' : '\u266A') + '</span>Introduction' +
            (md.done ? '' : md.seconds ? '<span class="res-x">' + Math.round(md.seconds / 60) + 'm in</span>' : '') +
            '</button>';
        }
        html += '<div class="res-drop" id="drop-' + t.id + '"></div></div>';
      }

      if (open) {
        html += '<div class="sys-body">';
        t.levels.forEach(function (lv) {
          var lp = P.levelPct(p, lv);
          var ck = p.checks[lv.check.id];
          var green = ck && ck.best >= E.PASS_CHECK;
          var lopen = S.lvlOpen === lv.id;
          html += '<div class="lvl' + (green ? ' done' : '') + '">';
          html += '<button class="lvl-head" data-lvl="' + lv.id + '">' +
            '<span class="lvl-n">' + lv.n + '</span>' +
            '<span class="lvl-t"><span class="lvl-name">' + esc(lv.name) + '</span>' +
            '<span class="lvl-sub">' + esc(lv.cefr) + ' · ' + lv.subs.length + ' modules · ' +
              (green ? 'check cleared' : 'check ' + (ck ? pct(ck.best) + '%' : 'not taken')) + '</span></span>' +
            '<span class="lvl-pct">' + lp + '%</span></button>';
          if (lopen) {
            html += '<div class="lvl-body">';
            lv.subs.forEach(function (s) {
              var rec = p.subs[s.id];
              var done = rec && rec.best >= E.PASS_SUB;
              html += '<button class="mrow' + (done ? ' done' : '') + '" data-sub="' + s.id + '">' +
                '<span class="mrow-tick"></span>' +
                '<span class="mrow-txt"><span class="mrow-name">' + esc(s.name) + '</span>' +
                '<span class="mrow-sub">' + esc(s.cefr) + ' · ' + s.items.length + ' questions</span></span>' +
                '<span class="mrow-score">' + (rec ? pct(rec.best) + '%' : '') + '</span></button>';
            });
            var cu = P.checkUnlocked(p, lv);
            html += '<button class="mrow check' + (green ? ' done' : '') + '" data-check="' + lv.id + '"' + (cu ? '' : ' disabled') + '>' +
              '<span class="mrow-tick"></span>' +
              '<span class="mrow-txt"><span class="mrow-name">' + esc(lv.check.name) + '</span>' +
              '<span class="mrow-sub">' + (cu ? lv.check.items.length + ' questions · pass at 75%' : 'Clear all three modules to unlock') + '</span></span>' +
              '<span class="mrow-score">' + (ck ? pct(ck.best) + '%' : '') + '</span></button>';
            html += '</div>';
          }
          html += '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    $('#view-map').innerHTML = html;

    var res = $('#resume');
    if (res) res.addEventListener('click', function () {
      if (next.kind === 'sub') openSub(next.id);
      else if (next.kind === 'check') startCheck(next.id);
      else if (next.kind === 'faults') show('faults');
      else if (next.kind === 'sim') show('sims');
      else if (next.kind === 'set') show('record');
    });
    wireResources();
    $('#view-map').querySelectorAll('[data-sys]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.sysOpen = S.sysOpen === b.dataset.sys ? null : b.dataset.sys;
        paintMap();
      });
    });
    $('#view-map').querySelectorAll('[data-lvl]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.lvlOpen = S.lvlOpen === b.dataset.lvl ? null : b.dataset.lvl;
        paintMap();
      });
    });
    $('#view-map').querySelectorAll('[data-sub]').forEach(function (b) {
      b.addEventListener('click', function () { openSub(b.dataset.sub); });
    });
    $('#view-map').querySelectorAll('[data-check]').forEach(function (b) {
      b.addEventListener('click', function () { startCheck(b.dataset.check); });
    });
  }

  /* ------------------------------------------------------- stage media
     Listening is progress too. A student stuck on a system who never played
     its introduction is a different teaching problem from one who did. */
  function mediaRec(topicId) {
    if (!S.p.media) S.p.media = {};
    return S.p.media[topicId] || (S.p.media[topicId] = { plays: 0, seconds: 0, done: false });
  }

  function ytId(url) {
    var m = String(url || '').match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : '';
  }
  function openVideo(t) {
    var id = ytId(t.video);
    modal('<p class="kicker">' + esc(t.code) + ' \u00b7 video</p>' +
      '<h3 style="font-size:1.2rem">' + esc(t.name) + '</h3>' +
      (id ? '<div class="ytbox"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(id) + '?rel=0" ' +
        'title="' + esc(t.name) + '" frameborder="0" allowfullscreen ' +
        'allow="accelerometer; encrypted-media; picture-in-picture"></iframe></div>' : '') +
      '<a class="btn wide" href="' + esc(t.video) + '" target="_blank" rel="noopener">Open on YouTube</a>' +
      '<button class="btn ghost wide" data-close>Close</button>');
  }

  function wireResources() {
    $('#view-map').querySelectorAll('.res[data-act]').forEach(function (btn) {
      var tid = btn.dataset.topic, act = btn.dataset.act;
      var t = E.Bank.topic(tid);
      if (!t) return;

      if (act === 'pdf') {
        btn.addEventListener('click', function () {
          var r = mediaRec(tid);
          r.slidesOpens = (r.slidesOpens || 0) + 1;
          r.last = new Date().toISOString();
          syncSoon();
        });
        return;
      }

      btn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        var drop = $('#drop-' + tid);
        var r = mediaRec(tid);

        if (act === 'yt') {
          r.videoOpens = (r.videoOpens || 0) + 1;
          r.last = new Date().toISOString();
          syncSoon();
          openVideo(t);
          return;
        }

        /* the podcast: an inline player under the strip, toggled */
        if (drop.dataset.open === 'pod') { drop.dataset.open = ''; drop.innerHTML = ''; return; }
        drop.dataset.open = 'pod';
        drop.innerHTML = '<div class="pod"><div class="pod-t">' +
          '<span class="pod-n">' + esc(t.name) + ' \u2014 the introduction</span>' +
          '<span class="pod-s">' + (r.done ? 'You have listened to this one' :
            r.seconds ? 'Picked up ' + Math.round(r.seconds / 60) + ' min in' :
            'Listen before you start the modules') + '</span></div>' +
          '<audio class="pod-a" controls preload="none" src="' + esc(t.podcast) + '"></audio></div>';

        var a = drop.querySelector('audio');
        var mark = 0;
        a.addEventListener('error', function () {
          drop.querySelector('.pod-s').textContent = 'This episode has not been recorded yet';
          a.style.display = 'none';
        });
        if (r.seconds && !r.done) {
          a.addEventListener('loadedmetadata', function () {
            if (r.seconds < a.duration - 5) { a.currentTime = r.seconds; mark = r.seconds; }
          });
        }
        a.addEventListener('play', function () {
          r.plays = (r.plays || 0) + 1; r.last = new Date().toISOString(); syncSoon();
        });
        a.addEventListener('pause', syncSoon);
        a.addEventListener('timeupdate', function () {
          if (a.currentTime - mark < 10) return;
          r.seconds = Math.round((r.seconds || 0) + (a.currentTime - mark));
          mark = a.currentTime;
        });
        a.addEventListener('ended', function () {
          r.done = true; sync(); toast('Episode finished. Now try the modules.');
        });
        a.play().catch(function () {});
      });
    });
  }

  /* =====================================================================
     THEORY
     ===================================================================== */
  function openSub(subId) {
    var s = E.Bank.sub(subId);
    var t = E.Bank.topic(s.topicId);
    var lv = E.Bank.level(s.levelId);
    var paras = (S.simple && s.theory.simple) ? s.theory.simple : s.theory.body;
    var html = '<div class="play">' +
      '<div class="play-top"><button class="btn ghost sm" id="p-back">← Systems</button>' +
      '<span style="flex:1"></span><span class="qcount">' + esc(t.code) + ' · Level ' + lv.n + '</span></div>' +
      '<div class="card theory">' +
      E.artBand(t.art) +
      '<p class="kicker">' + esc(s.cefr) + ' · Module</p>' +
      '<h3>' + esc(s.name) + '</h3>' +
      '<p class="key">' + s.theory.key + '</p>' +
      '<button class="btn sm simple-btn" id="p-simple">' +
        (S.simple ? 'Show the full explanation' : 'Explain this more simply') + '</button>' +
      '<div class="prose">' + paras.map(function (x) { return '<p>' + x + '</p>'; }).join('') + '</div>';
    if (s.theory.examples) {
      html += '<div class="exlist">' + s.theory.examples.map(function (x) {
        return '<div><div class="s">' + x.s + '</div><div class="g">' + esc(x.g) + '</div></div>';
      }).join('') + '</div>';
    }
    html += '<button class="btn primary wide" id="p-start">Start the ' + s.items.length + ' questions →</button>' +
      '</div></div>';
    $('#view-play').innerHTML = html;
    show('play');
    $('#p-back').addEventListener('click', function () { show('map'); });
    $('#p-simple').addEventListener('click', function () { S.simple = !S.simple; openSub(subId); });
    $('#p-start').addEventListener('click', function () {
      startRun('module', s.items, { subId: subId, title: s.name });
    });
  }

  /* =====================================================================
     PRACTICE RUNNER
     ===================================================================== */
  function startRun(kind, items, meta) {
    S.run = {
      kind: kind, items: items.slice(), i: 0, results: [],
      subId: meta.subId, checkId: meta.checkId, title: meta.title,
      hintedAny: false, t0: 0
    };
    if (kind === 'check' || kind === 'set') S.run.items = E.shuffle(S.run.items);
    show('play');
    renderQ();
  }
  function startCheck(levelId) {
    var lv = E.Bank.level(levelId);
    startRun('check', lv.check.items, { checkId: lv.check.id, title: lv.check.name });
  }

  var TIMED_TYPES = { choose: 1, equiv: 1, judge: 1, gap: 1, cloze: 1, table: 1, spot: 1 };

  function renderQ() {
    var r = S.run, item = r.items[r.i];
    if (r.cleanup) { r.cleanup(); r.cleanup = null; }
    var prog = Math.round(100 * r.i / r.items.length);
    var canHint = r.kind === 'module' || r.kind === 'faults';
    /* Reading items are never raced: the passage takes longer than the ring. */
    var timed = r.kind !== 'set' && !!TIMED_TYPES[item.type] && !item.passage;
    var combo = r.combo || 0;

    $('#view-play').innerHTML = '<div class="play">' +
      '<div class="play-top">' +
        '<button class="btn ghost sm" id="p-quit">✕</button>' +
        '<div class="bar-line thin"><span style="width:' + prog + '%"></span></div>' +
        (combo >= 3 ? '<span class="combo">▲ ' + combo + ' in a row</span>' : '') +
        '<span class="qcount">' + (r.i + 1) + ' / ' + r.items.length + '</span>' +
        (timed ?
          '<div class="timer" id="timer" title="Answer inside 7 seconds for a time bonus">' +
            '<svg width="38" height="38" viewBox="0 0 38 38">' +
              '<circle class="track" cx="19" cy="19" r="15" fill="none" stroke-width="4"></circle>' +
              '<circle class="run" id="timer-run" cx="19" cy="19" r="15" fill="none" stroke-width="4" ' +
                'stroke-linecap="round" stroke-dasharray="94.2" stroke-dashoffset="0"></circle>' +
            '</svg><b id="timer-n">7</b></div>' : '') +
      '</div>' +
      '<div class="card qcard">' +
        '<div class="qtype"><span>' + esc(E.TYPE_LABEL[item.type] || 'Question') + '</span><span class="lv">' + esc(item.level) + '</span></div>' +
        '<div id="qhost"></div>' +
        '<div id="feedback" role="status" aria-live="polite"></div>' +
        '<div class="qfoot">' +
          (canHint ? '<button class="btn sm" id="p-hint">Hint</button>' : '') +
          '<span class="grow"></span>' +
          '<button class="btn primary" id="p-check" disabled>Check</button>' +
        '</div>' +
      '</div></div>';

    var host = $('#qhost');
    var view = E.mount(item, host);
    r.t0 = Date.now();
    var answered = false, tick = null;

    if (timed) {
      var ring = $('#timer-run'), num = $('#timer-n'), box = $('#timer');
      var CIRC = 94.2;
      tick = setInterval(function () {
        var left = Math.max(0, E.SPEED_MS - (Date.now() - r.t0));
        ring.setAttribute('stroke-dashoffset', String(CIRC * (1 - left / E.SPEED_MS)));
        if (left > 0) num.textContent = Math.ceil(left / 1000);
        else { box.classList.add('cold'); num.textContent = '—'; clearInterval(tick); tick = null; }
      }, 100);
    }
    function stopTimer() { if (tick) { clearInterval(tick); tick = null; } }

    host.addEventListener('respond', function () {
      if (!answered) $('#p-check').disabled = !view.hasResponse();
    });

    $('#p-quit').addEventListener('click', function () {
      if (r.results.length && !confirm('Leave now? This attempt will not be saved.')) return;
      stopTimer(); S.run = null; show('map');
    });

    var hintBtn = $('#p-hint');
    if (hintBtn) hintBtn.addEventListener('click', function () {
      var rem = C.REMEDIATION[item.tag] || {};
      hintBtn.disabled = true;
      r.hintedAny = true; r.thisHinted = true;
      $('#feedback').innerHTML = '<div class="verdict" style="background:var(--gold-soft);border:1px solid var(--gold)">' +
        '<div class="verdict-h" style="color:var(--gold)">The principle behind this one</div>' +
        '<div class="verdict-w">' + (rem.principle || '') + '</div></div>';
    });

    $('#p-check').addEventListener('click', function () {
      if (answered) return next();
      answered = true;
      var ms = Date.now() - r.t0;
      stopTimer();
      var out = view.check();
      view.lock();
      var hinted = !!r.thisHinted; r.thisHinted = false;
      var fast = timed && !hinted && out.correct && ms <= E.SPEED_MS;

      var row = P.recordAttempt(S.p, item, out.correct, ms, hinted, fast);
      row.given = String(out.givenText).slice(0, 180);
      row.expected = String(out.expectedText).slice(0, 180);
      row.mode = r.kind;
      api.enqueue([row]);
      S.sessItems++;
      if (out.correct) { S.sessCorrect++; r.combo = (r.combo || 0) + 1; } else { r.combo = 0; }
      r.results.push({ item: item, correct: out.correct, given: out.givenText, expected: out.expectedText });

      $('#feedback').innerHTML =
        '<div class="verdict ' + (out.correct ? 'ok' : 'no') + '">' +
          '<div class="verdict-h">' + (out.correct ? '✓ Correct' : '✕ Not quite') +
            (fast ? '<span class="bonus-note">time bonus +' + E.XP_SPEED + '</span>' : '') + '</div>' +
          (out.correct ? '' : '<div class="verdict-exp">You chose: ' + esc(out.givenText) +
            '<br>Answer: ' + esc(out.expectedText) + '</div>') +
          '<div class="verdict-w">' + item.why + '</div>' +
        '</div>';

      if (out.correct && S.p.lastGain) {
        var f = E.el('span', 'xpfloat' + (fast ? '' : ' plain'), '+' + S.p.lastGain);
        $('.qfoot').appendChild(f);
        setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 1200);
      }

      var btn = $('#p-check');
      btn.textContent = r.i + 1 >= r.items.length ? 'See your result' : 'Next →';
      btn.disabled = false;
      paintHeader();
      syncSoon();
      $('#feedback').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });

    function next() {
      stopTimer();
      r.i++;
      if (r.i >= r.items.length) finishRun(); else renderQ();
    }
    function onKey(e) {
      if (e.key !== 'Enter' || e.target.tagName === 'INPUT') return;
      var btn = $('#p-check');
      if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
    }
    document.addEventListener('keydown', onKey);
    r.cleanup = function () { document.removeEventListener('keydown', onKey); };
  }

  /* =====================================================================
     PRACTICE RESULT
     ===================================================================== */
  function finishRun() {
    var r = S.run;
    if (r.cleanup) { r.cleanup(); r.cleanup = null; }
    var correct = r.results.filter(function (x) { return x.correct; }).length;
    var score = correct / r.results.length;
    var passed, head, note;

    if (r.kind === 'module') {
      P.finishSub(S.p, r.subId, score);
      passed = score >= E.PASS_SUB;
      head = passed ? 'Module cleared' : 'Not yet — run it again';
      note = passed
        ? 'You need 60% to clear a module, and you have it. Anything you missed has gone onto your fault list and will come back.'
        : 'You need 60% to clear this one. Read the explanation again and retry — the questions stay the same, so the misses are worth studying.';
    } else if (r.kind === 'check') {
      P.finishCheck(S.p, r.checkId, score, r.hintedAny);
      passed = score >= E.PASS_CHECK;
      head = score >= 1 ? 'All green. Perfect check.' : passed ? 'Systems check cleared' : 'Check held';
      note = passed ? 'That level is green. Your rank has been recalculated.'
                    : 'You need 75% to clear a systems check. The modules you lost marks on are listed below.';
    } else if (r.kind === 'set') {
      if (!S.p.assignment) S.p.assignment = { itemIds: [] };
      S.p.assignment.done = true;
      S.p.assignment.score = score;
      S.p.assignment.completedAt = new Date().toISOString();
      passed = score >= 0.7;
      head = 'Paper submitted';
      note = 'Your teacher can see this result and the full breakdown.';
    } else {
      passed = true;
      head = 'Fault list cleared';
      note = 'A question you get right twice in a row leaves the list for good.';
    }

    var misses = r.results.filter(function (x) { return !x.correct; });
    var html = '<div class="play"><div class="card result">' +
      '<div class="score-ring" style="--p:' + pct(score) + '"><i>' + pct(score) + '%</i></div>' +
      '<h3>' + esc(head) + '</h3><p>' + esc(note) + '</p>';
    if (misses.length) {
      html += '<div class="misslist">' + misses.map(function (m) {
        var rem = C.REMEDIATION[m.item.tag];
        return '<div class="miss"><b>' + esc(rem ? rem.name : m.item.tag) + '</b>' + m.item.why + '</div>';
      }).join('') + '</div>';
    }
    html += '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">' +
      '<button class="btn primary" id="r-map">Back to the systems</button>' +
      (r.kind === 'module' || r.kind === 'check' ? '<button class="btn" id="r-again">Try again</button>' : '') +
      '</div></div></div>';

    $('#view-play').innerHTML = html;
    var earned = P.checkBadges(S.p);
    paintHeader();
    sync();
    $('#r-map').addEventListener('click', function () { S.run = null; show('map'); });
    var again = $('#r-again');
    if (again) again.addEventListener('click', function () {
      if (r.kind === 'module') startRun('module', E.Bank.sub(r.subId).items, { subId: r.subId, title: r.title });
      else startRun('check', r.items, { checkId: r.checkId, title: r.title });
    });
    if (earned.length) S.celebrateTimer = setTimeout(function () { celebrate(earned[0], earned.slice(1)); }, 600);
  }

  function celebrate(badge, rest) {
    modal('<div class="seal">★</div>' +
      '<p class="kicker">Award unlocked</p>' +
      '<h3 style="font-size:1.4rem">' + esc(badge.name) + '</h3>' +
      '<p style="color:var(--ink-2);font-size:.95rem">' + esc(badge.perk) + '</p>' +
      '<p class="tiny">' + esc(badge.how) + '</p>' +
      '<button class="btn primary wide" data-close>Collect</button>');
    if (rest && rest.length) {
      var b = document.querySelector('[data-close]');
      b.addEventListener('click', function () {
        S.celebrateTimer = setTimeout(function () { celebrate(rest[0], rest.slice(1)); }, 260);
      });
    }
  }

  /* =====================================================================
     FAULT LIST
     ===================================================================== */
  function paintFaults() {
    var due = P.dueReview(S.p);
    var all = Object.keys(S.p.review).filter(function (id) { return E.Bank.item(id); });
    var html = '<div class="sect-h"><div><h2>Fault list</h2>' +
      '<p style="color:var(--ink-2);font-size:.92rem;margin-top:4px">Every question you get wrong is logged here and comes back a session or two later. Get one right twice in a row and it clears for good. The gap is the point.</p></div></div>';

    if (!all.length) {
      html += '<div class="card empty">Nothing logged. Every question you have answered wrong has been cleared.</div>';
    } else {
      html += '<div class="card" style="padding:var(--pad);display:flex;flex-direction:column;gap:12px">' +
        '<div style="display:flex;gap:14px;flex-wrap:wrap">' +
        '<span class="pill' + (due.length ? ' bad' : ' good') + '">' + due.length + ' due now</span>' +
        '<span class="pill">' + all.length + ' on the list</span>' +
        '<span class="pill gold">' + (S.p.reclaimed || 0) + ' cleared</span></div>';
      var tagCount = {};
      all.forEach(function (id) { var t = E.Bank.item(id).tag; tagCount[t] = (tagCount[t] || 0) + 1; });
      html += '<div style="display:flex;flex-direction:column;gap:7px">' +
        Object.keys(tagCount).sort(function (a, b) { return tagCount[b] - tagCount[a]; }).map(function (t) {
          return '<div style="display:flex;justify-content:space-between;gap:12px;font-size:.9rem">' +
            '<span>' + esc((C.REMEDIATION[t] || {}).name || t) + '</span>' +
            '<span style="color:var(--ink-3);font-family:var(--f-mono);font-size:.82rem">' + tagCount[t] + '</span></div>';
        }).join('') + '</div>';
      html += due.length
        ? '<button class="btn primary wide" id="fx-go">Clear ' + Math.min(due.length, 12) + ' now</button>'
        : '<p class="tiny">Nothing is due yet. Questions come back after a session or two.</p>';
      html += '</div>';
    }
    $('#view-faults').innerHTML = html;
    var g = $('#fx-go');
    if (g) g.addEventListener('click', function () {
      startRun('faults', E.shuffle(due).slice(0, 12).map(E.Bank.item), { title: 'Fault list' });
    });
  }

  /* =====================================================================
     SIMULATIONS  (mock papers)
     ===================================================================== */
  function paintSims() {
    var p = S.p;
    var html = '<div class="sect-h"><div><h2>Full simulations</h2>' +
      '<p style="color:var(--ink-2);font-size:.92rem;margin-top:4px">Three complete papers in the shape of the real one: 50 questions, three parts, 30 marks, 60 minutes. No hints, no feedback until you submit.</p></div></div>';

    (C.MOCKS || []).forEach(function (m) {
      var rec = (p.mocks || {})[m.id];
      html += '<div class="simcard">' + E.artBand('sim', 'simart') +
        '<div class="simbody">' +
        '<h3>' + esc(m.name) + '</h3>' +
        '<p>' + esc(m.blurb || '') + '</p>' +
        '<div class="simmeta">' +
          '<span class="pill">50 questions</span>' +
          '<span class="pill">' + m.total + ' marks</span>' +
          '<span class="pill">' + m.minutes + ' minutes</span>' +
          (rec ? '<span class="pill ' + (rec.best >= 0.7 ? 'good' : 'bad') + '">best ' + pct(rec.best) + '%</span>' : '') +
        '</div>' +
        '<div class="simgo">' +
          '<button class="btn primary sm" data-sim="' + m.id + '">' + (rec ? 'Sit it again' : 'Start') + '</button>' +
          (rec ? '<span class="tiny" style="align-self:center">Last sat ' + esc(new Date(rec.at).toLocaleDateString()) + ' · ' + rec.marks + '/' + rec.total + '</span>' : '') +
        '</div></div></div>';
    });

    html += '<p class="tiny" style="margin-top:12px">Sit a simulation in one go, with a clock and no notes. The point is not the score on its own — it is the section breakdown, which tells you where the next week of work should go.</p>';
    $('#view-sims').innerHTML = html;
    $('#view-sims').querySelectorAll('[data-sim]').forEach(function (b) {
      b.addEventListener('click', function () { confirmSim(b.dataset.sim); });
    });
  }

  function confirmSim(mockId) {
    var m = E.Bank.mock(mockId);
    modal('<p class="kicker">Before you start</p>' +
      '<h3 style="font-size:1.25rem">' + esc(m.name) + '</h3>' +
      '<p style="color:var(--ink-2);font-size:.93rem">' + m.minutes + ' minutes for 50 questions. ' +
      'The clock runs from the moment you press start and does not stop. You can move between questions freely, ' +
      'and the paper submits itself when the time is up.</p>' +
      '<button class="btn primary wide" id="sim-start">Start the clock</button>' +
      '<button class="btn ghost wide" data-close>Not now</button>');
    $('#sim-start').addEventListener('click', function () {
      $('#modal-slot').innerHTML = '';
      startExam(mockId);
    });
  }

  function startExam(mockId) {
    var m = E.Bank.mock(mockId);
    var items = E.Bank.mockItems(m);
    S.exam = {
      mock: m, items: items, i: 0,
      answers: new Array(items.length),
      endAt: Date.now() + m.minutes * 60000,
      startedAt: Date.now(), tick: null
    };
    show('play');
    renderExam();
    S.exam.tick = setInterval(function () {
      if (!S.exam) return;
      var left = Math.max(0, Math.round((S.exam.endAt - Date.now()) / 1000));
      var c = $('#exam-clock');
      if (c) { c.textContent = mmss(left); c.classList.toggle('low', left <= 300); }
      if (left <= 0) { submitExam(true); }
    }, 1000);
  }

  function sectionFor(item) {
    var m = S.exam.mock, out = null;
    m.sections.forEach(function (s) { if (s.items.indexOf(item) >= 0) out = s; });
    return out;
  }

  function renderExam() {
    var x = S.exam, item = x.items[x.i];
    var sec = sectionFor(item);
    var left = Math.max(0, Math.round((x.endAt - Date.now()) / 1000));

    var nav = '<div class="examnav">' + x.items.map(function (it, i) {
      var cls = i === x.i ? 'here' : (x.answers[i] != null ? 'ans' : '');
      return '<button class="' + cls + '" data-jump="' + i + '">' + (i + 1) + '</button>';
    }).join('') + '</div>';

    $('#view-play').innerHTML = '<div class="play">' +
      '<div class="examtop">' +
        '<span class="sec">' + esc(sec.part) + ' · ' + esc(sec.title) + '</span>' +
        '<span class="qcount">Question ' + (x.i + 1) + ' of ' + x.items.length + '</span>' +
        '<span class="clock' + (left <= 300 ? ' low' : '') + '" id="exam-clock">' + mmss(left) + '</span>' +
      '</div>' +
      '<div class="instr"><b>Instructions</b>' + esc(sec.instructions) + '</div>' +
      '<div class="card qcard">' +
        '<div class="qtype"><span>' + esc(E.TYPE_LABEL[item.type] || 'Question') + '</span>' +
        '<span class="lv">' + (sec.points === 1 ? '1 mark' : sec.points + ' marks') + '</span></div>' +
        '<div id="qhost"></div>' +
        '<div class="qfoot">' +
          '<button class="btn sm" id="x-prev"' + (x.i === 0 ? ' disabled' : '') + '>← Back</button>' +
          '<span class="grow"></span>' +
          '<button class="btn sm ghost" id="x-submit">Submit paper</button>' +
          '<button class="btn primary" id="x-next">' + (x.i + 1 >= x.items.length ? 'Review' : 'Next →') + '</button>' +
        '</div>' +
      '</div>' + nav + '</div>';

    var host = $('#qhost');
    E.mount(item, host);
    /* Restore a previous choice. Every mock item is a four-option or
       four-segment click, so the selection can simply be replayed. */
    var buttons = host.querySelectorAll('.opt, .seg');
    if (x.answers[x.i] != null && buttons[x.answers[x.i]]) buttons[x.answers[x.i]].click();
    host.addEventListener('respond', function () {
      var bs = host.querySelectorAll('.opt.sel, .seg.sel');
      if (!bs.length) return;
      var all = host.querySelectorAll('.opt, .seg');
      for (var i = 0; i < all.length; i++) if (all[i] === bs[0]) x.answers[x.i] = i;
      document.querySelectorAll('.examnav button')[x.i].classList.add('ans');
    });

    $('#x-prev').addEventListener('click', function () { if (x.i > 0) { x.i--; renderExam(); } });
    $('#x-next').addEventListener('click', function () {
      if (x.i + 1 >= x.items.length) reviewExam(); else { x.i++; renderExam(); }
    });
    $('#x-submit').addEventListener('click', function () { reviewExam(); });
    $('#view-play').querySelectorAll('[data-jump]').forEach(function (b) {
      b.addEventListener('click', function () { x.i = +b.dataset.jump; renderExam(); });
    });
    window.scrollTo({ top: 0 });
  }

  function reviewExam() {
    var x = S.exam;
    var blank = [];
    x.answers.forEach(function (a, i) { if (a == null) blank.push(i + 1); });
    modal('<p class="kicker">Before you submit</p>' +
      '<h3 style="font-size:1.2rem">' + (blank.length ? blank.length + ' unanswered' : 'All 50 answered') + '</h3>' +
      '<p style="color:var(--ink-2);font-size:.92rem">' +
      (blank.length ? 'Questions ' + blank.slice(0, 14).join(', ') + (blank.length > 14 ? '…' : '') +
        ' are still blank. In the real paper there is no penalty for a guess.'
        : 'Nothing is blank. You can still go back and change an answer.') + '</p>' +
      '<button class="btn primary wide" id="x-final">Submit and mark</button>' +
      '<button class="btn ghost wide" data-close>Keep working</button>');
    $('#x-final').addEventListener('click', function () {
      $('#modal-slot').innerHTML = '';
      submitExam(false);
    });
  }

  function submitExam(timedOut) {
    var x = S.exam;
    if (!x) return;
    clearInterval(x.tick);
    var rows = [], results = [];
    x.items.forEach(function (item, i) {
      var given = x.answers[i];
      var correct = given != null && given === item.answer;
      var row = P.recordAttempt(S.p, item, correct, 0, false, false);
      row.given = given == null ? '(blank)' : String(given + 1);
      row.expected = String(item.answer + 1);
      row.mode = 'mock:' + x.mock.id;
      rows.push(row);
      results.push({ item: item, correct: correct, given: given });
    });
    var scored = P.scoreMock(x.mock, results);
    var durationSec = Math.round((Date.now() - x.startedAt) / 1000);
    rows.push({
      kind: 'mock', ts: new Date().toISOString(), studentId: S.p.studentId,
      mockId: x.mock.id, marks: scored.got, total: scored.total,
      pct: Math.round(scored.pct * 1000) / 1000, durationSec: durationSec,
      sections: scored.bySection
    });
    api.enqueue(rows);
    S.sessItems += x.items.length;
    S.sessCorrect += results.filter(function (r) { return r.correct; }).length;
    P.finishMock(S.p, x.mock.id, scored);
    var earned = P.checkBadges(S.p);
    paintHeader();
    sync();
    showExamResult(x.mock, scored, results, durationSec, timedOut);
    S.exam = null;
    if (earned.length) S.celebrateTimer = setTimeout(function () { celebrate(earned[0], earned.slice(1)); }, 700);
  }

  function showExamResult(mock, scored, results, durationSec, timedOut) {
    var order = [];
    mock.sections.forEach(function (s) {
      var b = scored.bySection[s.code] || { got: 0, total: 0, right: 0, n: 0 };
      order.push({ s: s, b: b });
    });
    var wrong = results.filter(function (r) { return !r.correct; });

    var html = '<div class="play"><div class="card result">' +
      '<div class="score-ring" style="--p:' + pct(scored.pct) + '"><i>' + pct(scored.pct) + '%</i></div>' +
      '<h3>' + esc(mock.name) + ' · ' + scored.got + ' / ' + scored.total + '</h3>' +
      '<p>' + (timedOut ? 'Time ran out and the paper submitted itself. ' : '') +
      'You took ' + mmss(durationSec) + ' of the ' + mock.minutes + ' minutes allowed. ' +
      (scored.pct >= 0.8 ? 'That is a strong paper.' : scored.pct >= 0.6 ? 'A solid pass with clear gaps — see the breakdown.' :
       'Work through the weakest section below before sitting another simulation.') + '</p>';

    html += '<table class="sectable"><thead><tr><th>Section</th><th>Marks</th><th>Correct</th><th>%</th></tr></thead><tbody>';
    order.forEach(function (o) {
      var p2 = o.b.total ? o.b.got / o.b.total : 0;
      html += '<tr' + (p2 < 0.6 ? ' class="low"' : '') + '><td>' + esc(o.s.part.replace('PART ', '')) + ' — ' + esc(o.s.title) + '</td>' +
        '<td class="n">' + o.b.got + '/' + o.b.total + '</td>' +
        '<td class="n">' + o.b.right + '/' + o.b.n + '</td>' +
        '<td class="n">' + pct(p2) + '%</td></tr>';
    });
    html += '</tbody></table>';

    if (wrong.length) {
      html += '<p class="kicker" style="align-self:flex-start;margin-top:8px">Every question you missed</p>';
      html += '<div class="misslist">' + wrong.map(function (r) {
        var it = r.item, n = mock.sections.length;
        var num = String(it.id).split('-')[1];
        var rem = C.REMEDIATION[it.tag] || {};
        return '<div class="miss"><b>Q' + esc(num) + ' · ' + esc(rem.name || it.tag) + '</b>' +
          '<div style="font-family:var(--f-mono);font-size:.8rem;color:var(--ink-3);margin-bottom:6px">' +
          'You: ' + (r.given == null ? 'blank' : r.given + 1) + ' &nbsp;·&nbsp; Answer: ' + (it.answer + 1) + '</div>' +
          it.why + '</div>';
      }).join('') + '</div>';
      html += '<p class="tiny">Each of these has been added to your fault list, so they will come back in ordinary practice.</p>';
    }

    html += '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:6px">' +
      '<button class="btn primary" id="x-done">Back to the systems</button>' +
      '<button class="btn" id="x-sims">The other simulations</button></div>' +
      '</div></div>';
    $('#view-play').innerHTML = html;
    $('#x-done').addEventListener('click', function () { show('map'); });
    $('#x-sims').addEventListener('click', function () { show('sims'); });
  }

  /* =====================================================================
     RECORD
     ===================================================================== */
  function paintRecord() {
    var p = S.p;
    var a = p.assignment;
    var html = '<div class="sect-h"><div><h2>Record</h2>' +
      '<p style="color:var(--ink-2);font-size:.92rem;margin-top:4px">Where each of the eight systems stands, and what you have earned.</p></div>' +
      '<span class="pill gold">' + p.badges.length + ' of ' + C.BADGES.length + ' awards</span></div>';

    if (a) {
      html += '<div class="card" style="padding:var(--pad);margin-bottom:16px;display:flex;flex-direction:column;gap:10px">' +
        '<p class="kicker">Set by your teacher</p>' +
        (a.done
          ? '<h3 style="font-size:1.2rem">You scored ' + pct(a.score) + '%</h3><p class="tiny">Submitted ' +
            esc(new Date(a.completedAt).toLocaleDateString()) + ' · ' + a.itemIds.length + ' questions.</p>'
          : '<h3 style="font-size:1.2rem">' + a.itemIds.length + ' questions are waiting for you</h3>' +
            '<p style="color:var(--ink-2);font-size:.92rem">No hints on this one. Take it when you have twenty quiet minutes.</p>' +
            '<button class="btn primary" id="set-go" style="align-self:flex-start">Start</button>') +
        '</div>';
    }

    html += '<div class="card" style="padding:var(--pad);margin-bottom:16px">' +
      '<p class="kicker" style="margin-bottom:6px">Rank</p>' +
      '<h3 style="font-size:1.3rem">' + esc(P.rank(p).name) + '</h3>' +
      '<p style="color:var(--ink-2);font-size:.93rem;margin-top:4px">' + esc(P.rank(p).note) + '</p>' +
      '<div style="margin-top:12px"><div class="bar-line gold"><span style="width:' +
      (P.checksCleared(p) / E.Bank.allLevels().length * 100) + '%"></span></div></div></div>';

    html += '<div class="card" style="padding:var(--pad);margin-bottom:16px">' +
      '<p class="kicker" style="margin-bottom:12px">Systems</p><div class="sysgrid">';
    P.systemScores(p).forEach(function (r) {
      html += '<div class="systile' + (r.pct >= 90 ? ' done' : '') + '">' +
        '<span>' + esc(r.code) + '</span><b>' + esc(r.name) + '</b>' +
        '<div class="bar-line"><span style="width:' + r.pct + '%"></span></div>' +
        '<span>' + r.pct + '%</span></div>';
    });
    html += '</div></div>';

    html += '<p class="kicker" style="margin-bottom:10px">Awards</p><div class="awards">';
    C.BADGES.forEach(function (b) {
      var got = p.badges.indexOf(b.id) >= 0;
      html += '<div class="award ' + (got ? 'got' : 'locked') + '">' +
        '<span class="award-i">' + (got ? '★' : '·') + '</span>' +
        '<span><span class="award-n">' + esc(b.name) + '</span>' +
        '<span class="award-p">' + esc(b.perk) + '</span>' +
        '<span class="award-h">' + esc(b.how) + '</span></span></div>';
    });
    html += '</div>';
    $('#view-record').innerHTML = html;
    var g = $('#set-go');
    if (g) g.addEventListener('click', function () {
      var items = S.p.assignment.itemIds.map(E.Bank.item).filter(Boolean);
      startRun('set', items, { title: 'Set paper' });
    });
  }

  /* =====================================================================
     SETTINGS
     ===================================================================== */
  function paintSettings() {
    var pending = api.pendingCount();
    $('#view-settings').innerHTML = '<div class="sect-h"><h2>Settings</h2></div>' +
      '<div class="card settings">' +
        '<div class="field"><label>Signed in as</label>' +
        '<p style="font-weight:600">' + esc(S.p.displayName) + ' <span style="color:var(--ink-3);font-weight:400">(' + esc(S.p.studentId) + ')</span></p></div>' +
        '<div class="field"><label>Reading level</label>' +
        '<button class="btn sm" id="s-simple" style="align-self:flex-start">' +
        (S.simple ? 'Explanations are in simple English — switch back' : 'Use simpler English in the explanations') + '</button></div>' +
        '<div class="field"><label>Saving</label>' +
        '<p style="font-size:.9rem;color:var(--ink-2)">' +
        (!pending ? 'Everything you have answered has been sent to your teacher.'
          : 'You have ' + pending + ' answer' + (pending === 1 ? '' : 's') +
            ' waiting to be sent. They are saved on this device and go up on their own — you do not need to do anything.') +
        '</p></div>' +
        '<div class="field"><label>Account</label>' +
        '<button class="btn sm" id="s-out" style="align-self:flex-start">Log out</button></div>' +
      '</div>';
    $('#s-simple').addEventListener('click', function () { S.simple = !S.simple; paintSettings(); });
    $('#s-out').addEventListener('click', logout);
  }

  /* The ribbon is fixed, so the page starts below it — and it wraps to two
     lines on a narrow phone, so measure rather than assume. */
  function sizeRibbon() {
    var r = document.querySelector('.ribbon');
    if (r) document.documentElement.style.setProperty('--ribbon-h', r.offsetHeight + 'px');
  }
  sizeRibbon();
  window.addEventListener('resize', sizeRibbon);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeRibbon);

  setMode('in');
})();
