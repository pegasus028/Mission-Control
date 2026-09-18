/* ===========================================================================
   SYSTEM 04 — Tenses, states and suffixes
   Three levels. Which forms a verb is even allowed to take, which tense the
   time phrase has already chosen for you, and what -ing and -ed do to the
   state of a word: heat and liquid against gravity and solid.
   =========================================================================== */

var T4 = {
  id: 't4', n: 4, code: 'System 04', art: 'clock',
  name: 'Tenses, States and Suffixes',
  cefr: 'B1+–B2+',
  blurb: 'Tense is decided by evidence in the sentence — the kind of verb, the time phrase, the ending on the word — never by how recent something feels. The endings themselves mark state, not time.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T4.levels.push({
  id: 't4l1', n: 1, name: 'Dynamic and stative', cefr: 'B1+',
  blurb: 'Whether a verb has an engine to run or names a standing state decides, before anything else, which forms are available to it at all.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't4l1s1', name: 'Verbs that resist the continuous', cefr: 'B1+',
      theory: {
        key: 'A verb that names a state has no engine for the continuous to start, so the <em>-ing</em> form has nothing to put in motion.',
        body: [
          'Sort verbs into tiers before you do anything else. A <strong>dynamic</strong> verb has an internal engine burning fuel — <em>walk, build, drain, repair, repaint</em>. Add <em>-ing</em> and you simply switch that engine on: the action melts into a process you can stand inside and watch. A <strong>stative</strong> verb has zero kinetic energy. <em>Own, contain, belong, resemble</em> report how things stand; there is no engine there, so there is nothing for the heat of <em>-ing</em> to melt.',
          'The continuous carries two ideas at once: <strong>in progress</strong> and <strong>temporary</strong>. <em>She is repainting the pavilion</em> tells you the work is running now and that it will finish. Both ideas need fuel to burn. A state has neither: it simply holds, for as long as it holds, with no middle and no end in view. The test is interruption. <em>Repainting</em> can be stopped halfway — you can walk in and find half a wall done. <em>Owning</em> cannot. There is no halfway point in owning a field, believing a forecast or containing four thousand objects.',
          'Learn them in families rather than as one long list. Mental: <em>know, believe, doubt, understand, remember, love, think</em>. Possession: <em>own, belong, possess</em>. Relation: <em>contain, consist of, include, resemble</em>. Appearance: <em>seem, appear</em>. Preference and need: <em>prefer, want, need, deserve, matter</em>.',
          'One warning before the next sub-topic, because it decides half the marks. A few statives can be shoved into the continuous anyway, and when that happens the brain rewrites the verb into a temporary action to resolve the paradox — that is the <strong>quantum shift</strong>, and it is why <em>I am loving this</em> and <em>she is having trouble</em> work. Where no temporary action can be found on the other side, the form simply fails: there is no behaviour that <em>I am knowing</em> could describe, and none that <em>the gallery is containing</em> could describe either. The error this prevents is a specific one. Students reach for the continuous because they want to say "right now", and the present simple looks to them like a habit. It is not: with a stative verb the present simple already means right now.'
        ],
        simple: [
          'Some verbs have an engine: <em>walk, build, drain, repair</em>. The <em>-ing</em> form starts that engine and the action runs. Other verbs have no engine at all. They name states — things that are simply true.',
          'Ask one question: could you stop it halfway? You can stop painting a wall. You cannot stop owning a field halfway. If you cannot, the verb is stative and the continuous has nothing to describe.',
          'Common ones: know, believe, understand, own, belong, contain, consist of, resemble, seem, appear, prefer, need. With these verbs the present simple already means "now". A few of them can be forced into <em>-ing</em>, but only when a temporary action exists on the other side — <em>I am loving this</em> works, <em>I am knowing</em> does not.'
        ],
        examples: [
          { s: 'The upper store <b>contains</b> every map printed before 1900.', g: 'contain is a relation, not an engine — present simple means now.' },
          { s: '<s>The upper store is containing every map printed before 1900.</s>', g: 'no temporary action exists for the -ing to mutate it into.' },
          { s: 'The orchard <b>has belonged</b> to the same family since 1890.', g: 'stative verbs still take the perfect; it is only the continuous they refuse.' },
          { s: 'The technicians <b>are draining</b> the reservoir this week.', g: 'drain has an engine with a middle and an end, so the -ing form has something to start.' }
        ]
      },
      items: [
        { id: 't4l1s1-1', type: 'choose', tag: 'tense-stative', level: 'B1+',
          stem: 'The new east gallery, which opens to the public on Friday, ______ more than four thousand objects from the harbour excavation.',
          options: ['is containing', 'contains', 'has been containing', 'contained'],
          answer: 1,
          why: '<em>Contain</em> names a relation between the gallery and the objects, so there is no engine for the continuous to start. The past simple is excluded too: the gallery has not opened yet, so this is a statement about now.' },

        { id: 't4l1s1-2', type: 'choose', tag: 'tense-stative', level: 'B1+',
          stem: 'Which sentence is correct?',
          options: [
            'The farm is belonging to the same family since 1890.',
            'The farm belongs to the same family since 1890.',
            'The farm was belonging to the same family since 1890.',
            'The farm has belonged to the same family since 1890.'
          ],
          answer: 3,
          why: '<em>Belong</em> has zero kinetic energy, so every continuous option fails at once. <em>Since 1890</em> then rules out the present simple, because <em>since</em> measures from a past point up to now and needs the perfect.' },

        { id: 't4l1s1-3', type: 'sort', tag: 'tense-stative', level: 'B1+',
          stem: 'Ask of each verb: could it be stopped halfway through? Sort them accordingly.',
          bins: [
            { key: 's', label: 'State — no continuous', hint: 'it cannot be interrupted' },
            { key: 'a', label: 'Activity — continuous is fine', hint: 'it has a middle and an end' }
          ],
          items: [
            { text: '<b>own</b> three hectares of orchard', bin: 's' },
            { text: '<b>plant</b> the winter barley', bin: 'a' },
            { text: '<b>believe</b> the long-range forecast', bin: 's' },
            { text: '<b>resemble</b> its parent stock', bin: 's' },
            { text: '<b>repair</b> the greenhouse roof', bin: 'a' },
            { text: '<b>irrigate</b> the upper terraces', bin: 'a' }
          ],
          why: 'The three states describe how things stand and have no engine to run; the three activities burn fuel from a beginning to an end, which is exactly what the continuous needs.' },

        { id: 't4l1s1-4', type: 'spot', tag: 'tense-stative', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The county archive', 'is owning', 'every parish register', 'printed before 1840.'],
          answer: 1,
          fix: 'owns',
          why: '<em>Own</em> names possession, which is a standing state. Possession burns no fuel and will not run out this afternoon, so the continuous has nothing to describe.' },

        { id: 't4l1s1-5', type: 'choose', tag: 'tense-stative', level: 'B2',
          stem: 'One of these four verbs refuses the continuous. Which sentence contains it?',
          options: [
            'The county dictionary is consisting of two heavy volumes.',
            'The librarian is cataloguing the donated atlases.',
            'The engineers are draining the upper reservoir.',
            'The surveyor is measuring the depth of the old well.'
          ],
          answer: 0,
          why: '<em>Consist of</em> states how a thing is made up, and a composition cannot be halfway through. The other three have engines and can be watched running.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't4l1s2', name: 'Verbs with two lives', cefr: 'B1+',
      theory: {
        key: 'Force <em>-ing</em> onto a stative verb and the verb itself mutates: the static meaning is rewritten as a temporary action, and only that second meaning may take the continuous.',
        body: [
          'Grammar is not as rigid as the stative list makes it look. When a speaker pushes an <em>-ing</em> onto a verb with no engine, the brain refuses to accept the contradiction and quietly rewrites the word instead — a <strong>type coercion</strong>, or as the class calls it, a quantum shift. <em>Have</em> means static possession; <em>having</em> mutates into actively hosting or going through something. <em>Love</em> is a fixed coordinate in the heart; <em>I am loving this</em> injects artificial kinetic energy into it and turns it into a behaviour that will run out. That mutation is exactly what the advertisers borrowed for <em>I\'m lovin\' it</em>.',
          'So these verbs are not on one list or the other; they are on both, depending on what they mean at the time. <em>Think</em> is an opinion in <em>I think the roof will hold</em> and a mental activity in <em>I am thinking about the roof</em>. <em>Have</em> is possession in <em>she has two brothers</em> and an experience in <em>she is having lunch in town</em>. The state meaning reports something that is simply true of the subject; the coerced meaning reports something the subject is doing, deliberately, for a while.',
          'The main pairs are <em>think</em> (opinion / consider), <em>have</em> (possess / experience), <em>see</em> (perceive / meet by arrangement), <em>taste</em> and <em>smell</em> (have a flavour or odour / sample it deliberately), <em>weigh</em> and <em>measure</em> (be so heavy or long / find out how heavy or long), <em>feel</em> and <em>appear</em> (be, in the speaker\'s judgement / behave or perform). Even <em>be</em> joins them: <em>he is rude</em> is character, <em>he is being rude</em> is a costume worn this afternoon.',
          'The test is whether a temporary action exists on the other side of the mutation. For <em>have</em>, <em>taste</em> and <em>be</em> it does, which is why the continuous is available. For <em>know</em>, <em>own</em> and <em>contain</em> it does not, which is why nothing can be rescued there. Work in the right order: decide the meaning first, then choose the form. Students who choose the form first produce <em>I am thinking it is a good idea</em>, which turns a firm opinion into unfinished mental work and reads as evasive.'
        ],
        simple: [
          'Some verbs have two meanings. One is a state, one is an action. The continuous is open only to the action meaning.',
          'When you force <em>-ing</em> onto a state verb, the verb changes meaning to survive it. <em>She has a car</em> is possession; <em>she is having trouble</em> is an experience. <em>I think it works</em> is an opinion; <em>I am thinking about it</em> is mental work. <em>He is rude</em> is his character; <em>he is being rude</em> is only today.',
          'This works only when a temporary action exists to change into. <em>I am loving this</em> works. <em>I am knowing</em> does not, because there is no action of knowing to mutate into.'
        ],
        examples: [
          { s: 'The soup <b>tastes</b> of smoke.', g: 'a property of the soup — state, so no continuous.' },
          { s: 'The cook <b>is tasting</b> the soup before it goes out.', g: 'deliberate sampling — an activity.' },
          { s: 'The harbour officer <b>is weighing</b> the crate now.', g: 'finding out the weight is work in progress.' },
          { s: '<s>The crate is weighing nine kilos.</s>', g: 'here weigh reports a fact about the crate: it weighs nine kilos.' }
        ]
      },
      items: [
        { id: 't4l1s2-1', type: 'choose', tag: 'tense-twolives', level: 'B1+',
          stem: 'The stock ______ far too salty, so the kitchen has sent it back to be diluted.',
          options: ['is tasting', 'tastes', 'has been tasting', 'was tasting'],
          answer: 1,
          why: 'Here <em>taste</em> reports a property of the stock rather than anything the stock is doing. In that meaning it is stative, so the present simple carries the sense of "now".' },

        { id: 't4l1s2-2', type: 'choose', tag: 'tense-twolives', level: 'B1+',
          stem: 'The curator has asked for a quiet hour this morning because she ______ about which portraits to move into the new hall.',
          options: ['is thinking', 'has thought', 'thinks', 'thought'],
          answer: 0,
          why: '<em>Think about</em> is mental work with a beginning and an end, which is why she wants the hour. In that meaning the continuous is not only allowed but required by <em>this morning</em>.' },

        { id: 't4l1s2-3', type: 'gap', tag: 'tense-twolives', level: 'B1+',
          lines: [
            { who: 'Driver', text: 'Why is the fish crate still standing on the platform?' },
            { who: 'Foreman', text: 'The port officer ___ it now, and the lorry cannot leave until she finishes.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['weighs', 'is weighing', 'has weighed', 'weighed'],
          answer: 1,
          why: '<em>Weigh</em> here means finding out the weight, which is an activity. <em>Now</em> and <em>until she finishes</em> put it in progress, so the continuous is the only fit.' },

        { id: 't4l1s2-4', type: 'sort', tag: 'tense-twolives', level: 'B1+',
          stem: 'Each phrase uses a verb that has two lives. Sort by the meaning it carries here.',
          bins: [
            { key: 'st', label: 'State meaning', hint: 'it reports how things are' },
            { key: 'ac', label: 'Activity meaning', hint: 'somebody is doing something' }
          ],
          items: [
            { text: 'the soup <b>tastes</b> of smoke', bin: 'st' },
            { text: 'the cook <b>is tasting</b> the soup', bin: 'ac' },
            { text: 'she <b>has</b> two younger brothers', bin: 'st' },
            { text: 'she <b>is having</b> lunch in town', bin: 'ac' },
            { text: 'the parcel <b>weighs</b> nine kilos', bin: 'st' },
            { text: 'the vet <b>is weighing</b> the lambs', bin: 'ac' }
          ],
          why: 'The same three verbs appear twice each. The form in the phrase has already told you which life the verb is living.' },

        { id: 't4l1s2-5', type: 'equiv', tag: 'tense-twolives', level: 'B2',
          given: 'The estate manager is seeing the auctioneers on Thursday.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The estate manager has an appointment with the auctioneers on Thursday.',
            'The estate manager can make out the auctioneers from her office window.',
            'The estate manager understands the position the auctioneers have taken.',
            'The estate manager has been visited by the auctioneers since Thursday.'
          ],
          answer: 0,
          why: 'The continuous forces the activity meaning of <em>see</em>, which is "meet by arrangement". Options 2 and 3 use the two stative meanings, perceive and understand, neither of which allows the continuous.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't4l1s3', name: 'Time markers that fix the tense', cefr: 'B1+',
      theory: {
        key: 'Find the time phrase first: a closed time forces the past simple, an open one calls for the present perfect.',
        body: [
          'Every time expression is either <strong>closed</strong> or <strong>open</strong>. A closed one names a period that has finished and cannot be added to: <em>in 2019, last winter, three summers ago, when the old pier stood, yesterday, last quarter</em>. An open one runs up to this moment and is still running: <em>since the spring floods, for eleven years, so far, up to now, recently, this term, already</em>.',
          'Notice where the time information actually lives. It is not in the ending: <em>-ing</em> and <em>-ed</em> mark the state of the action, liquid or solid, and say nothing about when. What fixes the time is the auxiliary in front of the verb and the time phrase in the sentence, which is why the phrase can overrule everything your ear is telling you. Closed time takes the past simple. Open time takes the present perfect. The reason is mechanical rather than mysterious: the present perfect deliberately refuses to say when. That refusal is its whole job, which is why it cannot sit beside a phrase that says exactly when.',
          'So the time phrase decides the verb, and it decides it before you have read the rest of the sentence. In an error-identification item, underline the time phrase first. Half the time the answer is settled by that one mark on the page.',
          'The trap runs in both directions. <em>Last quarter … has reduced</em> is wrong because the window is shut. <em>Since the plant opened … received</em> is wrong because the window is open. Thai learners meet the first far more often, because a recent event feels present even when its time phrase is firmly closed.'
        ],
        simple: [
          'Look at the time phrase before you look at the verb.',
          'Closed time — <em>in 2019</em>, <em>last winter</em>, <em>two years ago</em>, <em>last quarter</em> — means past simple. The time is finished.',
          'Open time — <em>since</em>, <em>for</em>, <em>so far</em>, <em>up to now</em>, <em>recently</em> — means present perfect. The time is still running. The present perfect never says exactly when, so it can never sit next to a date.'
        ],
        examples: [
          { s: 'The water board <b>replaced</b> nine kilometres of pipe <b>last winter</b>.', g: 'closed time, so past simple.' },
          { s: 'The seed bank <b>has collected</b> eleven new varieties <b>since the flood</b>.', g: 'open time, so present perfect.' },
          { s: '<s>Last winter the water board has replaced nine kilometres of pipe.</s>', g: 'the perfect refuses to name a time; this phrase names one.' },
          { s: '<s>Since the flood the seed bank collected eleven new varieties.</s>', g: 'the window is still open: has collected.' }
        ]
      },
      items: [
        { id: 't4l1s3-1', type: 'choose', tag: 'tense-marker', level: 'B1+',
          stem: 'The harbour authority ______ the old lighthouse in 2019, two years before the new beacon was lit.',
          options: ['has decommissioned', 'has been decommissioning', 'is decommissioning', 'decommissioned'],
          answer: 3,
          why: '<em>In 2019</em> is a closed window. The present perfect refuses to name a time, so it cannot stand beside a date, however important the result still is.' },

        { id: 't4l1s3-2', type: 'spot', tag: 'tense-marker', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Last winter', 'the water board has replaced', 'nine kilometres of pipe', 'under the market square.'],
          answer: 1,
          fix: 'the water board replaced',
          why: 'Underline the time phrase first. <em>Last winter</em> is finished, so the verb must be the past simple <em>replaced</em>.' },

        { id: 't4l1s3-3', type: 'choose', tag: 'tense-marker', level: 'B1+',
          stem: 'The seed bank ______ eleven new varieties of upland rice since the flood of 2021.',
          options: ['has collected', 'collected', 'was collecting', 'collects'],
          answer: 0,
          why: '<em>Since</em> opens a window at a past point and leaves it open to now. Only the present perfect can describe a run of events inside an open window.' },

        { id: 't4l1s3-4', type: 'sort', tag: 'tense-marker', level: 'B1+',
          stem: 'Which tense does each time phrase demand?',
          bins: [
            { key: 'ps', label: 'Past simple', hint: 'the window is shut' },
            { key: 'pp', label: 'Present perfect', hint: 'the window is still open' }
          ],
          items: [
            { text: 'in 2014', bin: 'ps' },
            { text: 'so far this term', bin: 'pp' },
            { text: 'last Tuesday', bin: 'ps' },
            { text: 'since the spring floods', bin: 'pp' },
            { text: 'three summers ago', bin: 'ps' },
            { text: 'up to now', bin: 'pp' }
          ],
          why: 'Each phrase on the left names a period that has ended; each one on the right measures from a point in the past up to this moment.' },

        { id: 't4l1s3-5', type: 'gap', tag: 'tense-marker', level: 'B2',
          lines: [
            { who: 'Curator', text: 'When did the Roman coins arrive in the collection?' },
            { who: 'Registrar', text: 'They ___ here in 1978, long before the gallery was rebuilt.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['have come', 'have been coming', 'came', 'come'],
          answer: 2,
          why: 'The question itself names a finished time, and the answer names a year. A date and a present perfect cannot share a clause.' }
      ]
    }
  ],

  check: {
    id: 't4l1ck', name: 'Systems Check · Dynamic and stative',
    items: [
      { id: 't4l1ck-1', type: 'choose', tag: 'tense-stative', level: 'B1+',
        stem: 'Every crate in the dockside store ______ to a single importer in Songkhla.',
        options: ['is belonging', 'has been belonging', 'was belonging', 'belongs'],
        answer: 3,
        why: '<em>Belong</em> names a state of ownership, which cannot be in progress. The present simple already means "as things stand now".' },

      { id: 't4l1ck-2', type: 'choose', tag: 'tense-marker', level: 'B1+',
        stem: 'The upland vineyard ______ its first commercial harvest in 2018, three years after the terraces were cut.',
        options: ['has produced', 'has been producing', 'produced', 'is producing'],
        answer: 2,
        why: '<em>In 2018</em> closes the window, and a closed window takes the past simple. The result may still matter, but the time phrase decides the form.' },

      { id: 't4l1ck-3', type: 'spot', tag: 'tense-twolives', level: 'B1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The tasting panel', 'is seeing no reason', 'to change the blend', 'before the autumn pressing.'],
        answer: 1,
        fix: 'sees no reason',
        why: '<em>See</em> here means "judge" or "understand", which is the stative life of the verb. Only the other life, meeting somebody by arrangement, allows the continuous.' },

      { id: 't4l1ck-4', type: 'gap', tag: 'tense-twolives', level: 'B2',
        lines: [
          { who: 'Steward', text: 'Why is the pavilion locked at this hour?' },
          { who: 'Groundsman', text: 'The junior squad ___ its end-of-season supper in there until eight.' }
        ],
        stem: 'Choose the option that fits the gap.',
        options: ['is having', 'has', 'has had', 'had'],
        answer: 0,
        why: '<em>Have</em> means "experience" here, which is the activity life of the verb. <em>Until eight</em> shows the event is running, so the continuous is required.' },

      { id: 't4l1ck-5', type: 'choose', tag: 'tense-stative', level: 'B2',
        stem: 'Which sentence is correct?',
        options: [
          'The ferry company is owning the slipway since 2004.',
          'The ferry company owns the slipway since 2004.',
          'The ferry company has owned the slipway since 2004.',
          'The ferry company has been owning the slipway since 2004.'
        ],
        answer: 2,
        why: 'Two rules meet. <em>Own</em> is stative, which kills both continuous options, and <em>since</em> opens a window that only the perfect can fill.' },

      { id: 't4l1ck-6', type: 'equiv', tag: 'tense-marker', level: 'B2',
        given: 'The trust has managed the water meadows since the flood defence was built.',
        stem: 'Choose the closest meaning to the original sentence.',
        options: [
          'The trust stopped managing the water meadows when the defence was built.',
          'The trust still manages the water meadows today.',
          'The trust managed the water meadows only in the years before the defence was built.',
          'The trust will begin managing the water meadows once the defence is finished.'
        ],
        answer: 1,
        why: 'The present perfect with <em>since</em> runs from a past point up to now and does not stop there, which is why the arrangement is still in force.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T4.levels.push({
  id: 't4l2', n: 2, name: 'Background and event', cefr: 'B2',
  blurb: 'Two decisions that carry most of the narrative marks: what was already running when the story began, and whether the time window is shut.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't4l2s1', name: 'Past continuous as background', cefr: 'B2',
      theory: {
        key: 'The past continuous is the camera inside a process that was already running; the past simple is the single finished event dropped into it.',
        body: [
          'Draw it once and you will not forget it. The past continuous is a long horizontal line: <em>the conservators were moving the largest frame</em>. The past simple is a cross somewhere on that line: <em>one of the wall fixings gave way</em>. The line was there first; the cross interrupts it. In the vocabulary of the slides, the <em>-ing</em> clause builds a simultaneous kinetic environment — heat, motion, no edges — and the main verb happens inside it.',
          'The joining words announce which is which. <em>While</em> and <em>as</em> introduce the line. <em>When</em> and <em>suddenly</em> introduce the cross. A sentence that puts the sudden event in the continuous — <em>while the team was working, the drain was bursting</em> — melts a single moment back into liquid and stretches it over an afternoon, which is not what the writer means. The same environment can be built without an auxiliary at all: <em>testing the system, the engineers found a flaw</em> borrows its time from the main clause, which is why the participle must belong to the same subject.',
          'The pairing also has a structural use that the exam rewards. In a paragraph-ordering question, the sentence with <em>was doing</em> is nearly always <strong>earlier</strong> than the sentence with the simple past, because background is laid down before the event that breaks it. Find the continuous clause and you have found the opening of the narrative.',
          'The order of ideas is fixed even when the order of words is not. <em>The rope snapped while the ferry was approaching</em> says exactly what the other order says: the approach was the setting, the snap was the news.'
        ],
        simple: [
          'Past continuous = a long line. Past simple = a cross on the line.',
          '<em>While the conservators were moving the frame</em> (line), <em>a fixing gave way</em> (cross). The long action was already happening. The short action interrupted it.',
          'In ordering questions, the sentence with <em>was doing</em> normally comes first, because the background is set before the event happens.'
        ],
        examples: [
          { s: 'While the divers <b>were surveying</b> the wreck, the current <b>shifted</b>.', g: 'line, then cross.' },
          { s: '<s>While the divers were surveying the wreck, the current was shifting.</s>', g: 'a sudden event is a cross, not a second line.' },
          { s: 'As the museum <b>was rehanging</b> its watercolours, the plaster <b>cracked</b>.', g: 'as introduces the background.' },
          { s: 'The plaster <b>cracked</b> while the museum <b>was rehanging</b> its watercolours.', g: 'same two ideas, reversed word order, identical meaning.' }
        ]
      },
      items: [
        { id: 't4l2s1-1', type: 'choose', tag: 'tense-background', level: 'B2',
          stem: 'While the survey team was recording the rock carvings, a sudden downpour ______ the trench in under a minute.',
          options: ['was flooding', 'would flood', 'has flooded', 'flooded'],
          answer: 3,
          why: 'The recording is the line and the downpour is the cross. <em>In under a minute</em> marks it as a single completed event, which is the past simple.' },

        { id: 't4l2s1-2', type: 'order', tag: 'tense-background', level: 'B2',
          stem: 'Put the four sentences in the order that makes a logical paragraph.',
          items: [
            'The county museum was rehanging its watercolour gallery during the half-term closure.',
            'While the conservators were moving the largest frame, one of the wall fixings gave way.',
            'The painting itself was undamaged, but the plaster beneath it cracked from cornice to skirting.',
            'The gallery therefore reopened a fortnight later than the notices had promised.'
          ],
          why: 'Two continuous clauses set the scene, the past simple drops the event into it, and the last two sentences carry the result and the consequence in that order.' },

        { id: 't4l2s1-3', type: 'spot', tag: 'tense-background', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['While the harvest team was loading the last trailer,', 'the storm drain', 'was bursting', 'under the yard gate.'],
          answer: 2,
          fix: 'burst',
          why: 'The loading is the background line; the drain gives way at a single point on it. A cross cannot be written in the continuous.' },

        { id: 't4l2s1-4', type: 'build', tag: 'tense-background', level: 'B2',
          stem: 'Two facts: the library was moving its reference stock into the annexe; during that work the roof began to leak. Say it in one sentence beginning "While".',
          tiles: ['While', 'the library', 'was moving', 'its reference stock', 'into the annexe', 'the roof', 'began', 'to leak'],
          solution: 'While the library was moving its reference stock into the annexe the roof began to leak',
          alt: [],
          why: 'The longer action takes the past continuous after <em>while</em>; the event that interrupts it takes the past simple.' },

        { id: 't4l2s1-5', type: 'choose', tag: 'tense-background', level: 'B2+',
          stem: 'Which sentence uses the past continuous for the background and the past simple for the event?',
          options: [
            'While the ferry approached the pier, the mooring rope was snapping.',
            'While the ferry was approaching the pier, the mooring rope snapped.',
            'While the ferry was approaching the pier, the mooring rope was snapping.',
            'While the ferry approached the pier, the mooring rope snapped.'
          ],
          answer: 1,
          why: 'Only option 2 puts the long approach on the line and the single snap on the cross. Option 1 reverses the two, option 3 draws two lines and option 4 draws two crosses.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't4l2s2', name: 'Present perfect or past simple', cefr: 'B2',
      theory: {
        key: 'Ask whether the time window is shut: a shut window takes the past simple, an open window or a present result takes the present perfect.',
        body: [
          'The question is never how long ago something happened. A thing that happened this morning takes the past simple if the sentence says <em>at seven o\'clock</em>, and a thing that happened in 1978 takes the present perfect if the sentence says <em>since the war</em>. Recency has no vote.',
          'It helps to know what <em>have</em> is doing there. <em>Have</em> is an accumulative locator: it needs a discrete object to possess, and what it possesses is the crystallized result the <em>-ed</em> form has left behind. <em>The hospital has replaced its ward lighting</em> hands you the finished artifact and lets you hold it in the present. The present perfect does two jobs. It reports events inside a window that is still open — <em>the wildlife trust has counted twelve pairs of ospreys this season</em>, and the season is not over. And it reports a past event for the sake of its present result — <em>the hospital has replaced its ward lighting</em>, meaning the lighting is new now. In neither job does it tell you when.',
          'That silence about time is the point, and it is also the diagnostic. If a sentence needs to say when, the perfect is the wrong tool and the past simple is the right one: <em>the archive received three flood-damaged ledgers last October</em>.',
          'The error this prevents is a default. Thai learners reach for <em>has done</em> whenever an event feels recent or still matters emotionally. Neither feeling is evidence. Look for the window, and if the sentence does not give you one, ask whether the present result is what you are actually reporting.'
        ],
        simple: [
          'Ask one question: is the time window still open?',
          'Open window, or a result that matters now → present perfect. <em>The trust has counted twelve pairs this season.</em> The season has not finished.',
          'Shut window → past simple. <em>The archive received the ledgers last October.</em> October is over. How recent it feels makes no difference.'
        ],
        examples: [
          { s: 'The wildlife trust <b>has counted</b> twelve pairs of ospreys <b>this season</b>.', g: 'the season is still running.' },
          { s: 'The city archive <b>received</b> three damaged ledgers <b>last October</b>.', g: 'October is shut.' },
          { s: 'The regional hospital <b>has replaced</b> all of its ward lighting.', g: 'no date given; the present result is the point.' },
          { s: '<s>The regional hospital has replaced its ward lighting in March.</s>', g: 'the perfect cannot name a date: replaced.' }
        ]
      },
      items: [
        { id: 't4l2s2-1', type: 'choose', tag: 'tense-perfect-simple', level: 'B2',
          stem: 'The city archive ______ three flood-damaged ledgers last October, and the conservation work is still unfinished.',
          options: ['has received', 'has been receiving', 'had received', 'received'],
          answer: 3,
          why: 'The arrival is dated and therefore shut. That the work continues is beside the point: the time phrase governs the verb it sits with.' },

        { id: 't4l2s2-2', type: 'choose', tag: 'tense-perfect-simple', level: 'B2',
          stem: 'The wildlife trust ______ twelve pairs of ospreys on the estuary so far this season.',
          options: ['has counted', 'counted', 'was counting', 'had counted'],
          answer: 0,
          why: '<em>So far this season</em> is an open window: more pairs may yet be counted. That is precisely the case the present perfect exists to describe.' },

        { id: 't4l2s2-3', type: 'judge', tag: 'tense-perfect-simple', level: 'B2',
          given: 'The regional hospital has replaced all of its ward lighting.',
          stem: 'True, false, or impossible to tell: the replacement was finished before this year began.',
          answer: 2,
          why: 'The present perfect reports the result and deliberately withholds the date. Nothing in the sentence places the work in one year rather than another.' },

        { id: 't4l2s2-4', type: 'equiv', tag: 'tense-perfect-simple', level: 'B2+',
          given: 'The publisher brought out the atlas in 2016 and has not reprinted it since.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The atlas has been reprinted several times since 2016.',
            'The publisher is preparing a new edition of the atlas this year.',
            'The atlas appeared once, in 2016, and no new printing has followed.',
            'The atlas was withdrawn from sale shortly after 2016.'
          ],
          answer: 2,
          why: 'The dated clause is shut and takes the past simple; the <em>since</em> clause is open and takes the perfect. Together they say one printing, and nothing after it.' },

        { id: 't4l2s2-5', type: 'spot', tag: 'tense-perfect-simple', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Since the new filtration plant opened,', 'the water board received', 'fewer complaints about taste', 'than in any previous year.'],
          answer: 1,
          fix: 'the water board has received',
          why: '<em>Since</em> opens a window that runs up to now, so the verb inside it must be the present perfect. The comparison at the end does not close it.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't4l2s3', name: 'The "last quarter" trap', cefr: 'B2+',
      theory: {
        key: 'A closed time phrase and a present perfect cannot share a clause, however recent or important the event feels.',
        body: [
          'This is the most reliable planted error in the whole paper, and it is planted in one shape: a phrase such as <em>last quarter</em>, <em>in 2021</em> or <em>three winters ago</em> at the front of the sentence, and a present perfect several words later, where the two are far enough apart that the ear stops objecting.',
          'The distance is the trick. <em>Last quarter the shipping line has cut its fuel bill</em> sounds tolerable read aloud because eight words separate the offence from the evidence. Read the time phrase and the verb together, with everything between them covered, and it collapses at once: <em>last quarter … has cut</em>.',
          'A closed time phrase is a fence, and the present perfect is built to refuse fences: it hands you a result without telling you where the event began or ended. Two fences round one event is one too many, and that is all the rule amounts to. The procedure is two marks on the page. Underline the time phrase. Circle the main verb. Then read only those two things. If the phrase is closed, the verb must be a past simple; if it is open, a present perfect. Nothing else in the sentence gets a say.',
          'The same trap runs in reverse, less often but for full marks: <em>since the bypass opened, accident numbers fell sharply</em>. The window is open, so the verb has to be <em>have fallen</em>. Students who have learned only the first direction miss this one every time.'
        ],
        simple: [
          'A finished time phrase and <em>has done</em> can never be in the same clause.',
          'The exam hides this by putting the time phrase at the start and the verb a long way after it. Cover everything in between and read them together: <em>last quarter … has cut</em>. Wrong.',
          'Two marks on the paper: underline the time phrase, circle the verb. Closed time needs the past simple. Open time — <em>since</em>, <em>so far</em> — needs the present perfect.'
        ],
        examples: [
          { s: '<s>Last quarter the shipping line has cut its fuel bill by a fifth.</s>', g: 'closed time: cut.' },
          { s: '<b>Last quarter</b> the shipping line <b>cut</b> its fuel bill by a fifth.', g: 'time phrase and verb now agree.' },
          { s: '<s>Since the bypass opened, accident numbers fell sharply.</s>', g: 'the window is open: have fallen.' },
          { s: 'The council <b>has repainted</b> every crossing on the ring road.', g: 'no date, present result — the perfect is right.' }
        ]
      },
      items: [
        { id: 't4l2s3-1', type: 'spot', tag: 'tense-marker', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Last quarter', 'the shipping line has cut', 'its fuel bill', 'by nearly a fifth.'],
          answer: 1,
          fix: 'the shipping line cut',
          why: 'Cover the middle of the sentence and read the two ends together: <em>last quarter … has cut</em>. A closed period cannot hold a present perfect.' },

        { id: 't4l2s3-2', type: 'choose', tag: 'tense-perfect-simple', level: 'B2+',
          stem: 'When the reservoir was surveyed in 2019, the engineers ______ a crack in the spillway that had been there for decades.',
          options: ['found', 'have found', 'have been finding', 'are finding'],
          answer: 0,
          why: 'The main clause is anchored to a dated survey, so the verb reporting what happened at that survey must be a past simple.' },

        { id: 't4l2s3-3', type: 'choose', tag: 'tense-marker', level: 'B2+',
          stem: 'Two years ago the dairy co-operative ______ its milk round to four villages, and the route has not changed since.',
          options: ['has reduced', 'has been reducing', 'reduced', 'had reduced'],
          answer: 2,
          why: '<em>Two years ago</em> is closed, so the first verb is a past simple. The second clause uses <em>since</em> and quite correctly takes a perfect — two windows, two tenses.' },

        { id: 't4l2s3-4', type: 'cloze', tag: 'tense-marker', level: 'B2+',
          passage: 'The town water board ___(1)___ its Victorian mains since the drought of 2019. Last winter alone it ___(2)___ eleven kilometres of pipe under the old market quarter. Engineers say the programme ___(3)___ leakage by a third so far.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['has replaced', 'has been replacing', 'replaced', 'replaces'],
          answer: 2,
          why: '<em>Last winter alone</em> shuts the window for this sentence only. Blanks (1) and (3) sit with <em>since</em> and <em>so far</em> and take perfect forms; the middle sentence does not.' },

        { id: 't4l2s3-5', type: 'choose', tag: 'tense-perfect-simple', level: 'B2+',
          stem: 'Which sentence is correct?',
          options: [
            'Since the bypass opened, accident numbers at the junction fell sharply.',
            'In March the council has repainted every crossing on the ring road.',
            'Three winters ago the council has repainted every crossing on the ring road.',
            'Since the bypass opened, accident numbers at the junction have fallen sharply.'
          ],
          answer: 3,
          why: 'Options 2 and 3 put a date beside a perfect. Option 1 puts a past simple inside an open window. Only option 4 matches the tense to the window.' }
      ]
    }
  ],

  check: {
    id: 't4l2ck', name: 'Systems Check · Background and event',
    items: [
      { id: 't4l2ck-1', type: 'choose', tag: 'tense-background', level: 'B2',
        stem: 'While the ringers were testing the bells for the evening practice, a slate ______ from the tower roof into the churchyard.',
        options: ['was sliding', 'slid', 'has slid', 'would slide'],
        answer: 1,
        why: 'The testing is the line and the slate is the cross. A single fall into the churchyard is one completed event, so it takes the past simple.' },

      { id: 't4l2ck-2', type: 'spot', tag: 'tense-marker', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The ferry operator has added', 'two extra sailings', 'to the island timetable', 'last summer.'],
        answer: 0,
        fix: 'The ferry operator added',
        why: 'Here the closed phrase is at the end rather than the beginning, but it governs the verb just as firmly. <em>Last summer</em> is shut, so the verb is <em>added</em>.' },

      { id: 't4l2ck-3', type: 'choose', tag: 'tense-perfect-simple', level: 'B2',
        stem: 'The village seed library ______ more than two hundred varieties since it opened in the old creamery.',
        options: ['collected', 'was collecting', 'has collected', 'had collected'],
        answer: 2,
        why: '<em>Since</em> runs from the opening up to this moment, and the count is still rising. An open window takes the present perfect.' },

      { id: 't4l2ck-4', type: 'order', tag: 'tense-background', level: 'B2+',
        stem: 'Put the four sentences in the order that makes a logical paragraph.',
        items: [
          'The coastal path above the quarry was closed for resurfacing throughout February.',
          'While the contractors were laying the new gravel, a section of the cliff edge slipped.',
          'Nobody was hurt, but the diversion around the slip added a mile to the walk.',
          'The county council has now agreed to fund a permanent fence along the whole stretch.'
        ],
        why: 'The scene is set, the continuous clause holds the background, the past simple drops the event in, and the present perfect at the end reports where matters stand now.' },

      { id: 't4l2ck-5', type: 'judge', tag: 'tense-perfect-simple', level: 'B2+',
        given: 'The estate has sold timber from the northern plantation since the storm of 2018.',
        stem: 'True, false, or impossible to tell: the estate sold no timber from that plantation before 2018.',
        answer: 2,
        why: '<em>Since</em> fixes when the reported run of sales begins; it says nothing whatever about the years before that point.' },

      { id: 't4l2ck-6', type: 'spot', tag: 'tense-background', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['While the archivists were sorting the deeds,', 'they have discovered', 'a map of the old tin workings', 'that nobody had catalogued.'],
        answer: 1,
        fix: 'they discovered',
        why: 'The <em>while</em> clause plants the whole sentence in past narrative. An event on that background line must be a past simple, never a present perfect.' }
    ]
  }
});


/* ---------------------------------------------------------------- LEVEL 3 */
T4.levels.push({
  id: 't4l3', n: 3, name: 'The suffix matrix: -ing and -ed', cefr: 'B2+',
  blurb: 'The two endings do not mark time at all. One melts a word into a running process, the other freezes it into a finished result, and every marking decision in the paper follows from that.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't4l3s1', name: 'The -ing constellation — the liquid state', cefr: 'B2+',
      theory: {
        key: 'The <em>-ing</em> ending does not say "present". It melts a word into a process that is still running and marks whatever it is attached to as the thing doing the action.',
        body: [
          'Think of <em>-ing</em> as heat. It applies energy to a concept and the concept goes <strong>liquid</strong>: it loses its edges and becomes a process. Two things are encoded in that, and both can be tested on paper. The first is <strong>ongoing duration</strong> — the event is shown from the inside, running, with its beginning and its end deliberately hidden. The second is <strong>active agency</strong> — the thing carrying the <em>-ing</em> is the one emitting the action, never the one receiving it.',
          'The agency half decides adjective questions outright. A word ending in <em>-ing</em> in front of a noun says that the noun <strong>does</strong> the action: a <em>leaking</em> culvert leaks, an <em>approaching</em> ferry approaches, a <em>frustrating</em> delay frustrates the people waiting for it. Test it by saying the noun and the verb aloud as a clause. If <em>the delay frustrates us</em> is what you mean, the ending is <em>-ing</em>; if you mean the passengers received the feeling, you need the other constellation.',
          'The duration half decides noun questions. An <em>-ing</em> word used as a noun names the process while it is still running, and it keeps the grammar of a verb with it: it takes a direct object straight after it. <em>Irrigating the upper terraces</em> is a legal noun phrase. Its bounded cousin is not — <em>irrigation</em> has to reach its object through <em>of</em>. That one difference settles a great many gap-fills before you have thought about meaning at all.',
          'The same heat applies to <em>be</em>. <em>He is rude</em> reports a permanent fact about the man; <em>he is being rude</em> melts that fact into a temporary performance he is putting on this afternoon. Name the error this prevents: students read <em>-ing</em> as a label for "now" and then write <em>the delay was frustrated</em>. The ending carries state, not time. Time is carried by the auxiliary in front of it and by the time phrase in the sentence.'
        ],
        simple: [
          '<em>-ing</em> is the hot, liquid state. It turns a word into a process that is still running, with no start and no finish in view.',
          'In front of a noun, <em>-ing</em> means the noun <strong>does</strong> the action: <em>a leaking culvert</em> leaks, <em>a frustrating delay</em> frustrates you.',
          'Used as a noun, the <em>-ing</em> form still takes an object: <em>irrigating the terraces</em>. The <em>-ion</em> noun cannot — it needs <em>of</em>. And <em>be</em> plus <em>-ing</em> makes a permanent fact temporary: <em>he is being rude</em> means only today.'
        ],
        examples: [
          { s: 'The <b>leaking</b> culvert has undercut ten metres of the towpath.', g: 'the culvert emits the action, so the ending is -ing.' },
          { s: '<b>Shelving</b> the returns by hand took two volunteers a whole morning.', g: 'the -ing noun keeps its object directly after it.' },
          { s: 'The duty officer <b>is being</b> awkward about the mooring fees.', g: 'be plus -ing turns a fixed character into this week\'s behaviour.' },
          { s: '<s>The wait on the platform was frustrated.</s>', g: 'the wait caused the feeling, so it was frustrating.' }
        ]
      },
      items: [
        { id: 't4l3s1-1', type: 'choose', tag: 'tense-suffix-state', level: 'B2',
          stem: 'The delay at the ferry terminal was deeply ______, since nobody on the quay could say when the next sailing would leave.',
          options: ['frustrate', 'frustrating', 'frustrated', 'frustration'],
          answer: 1,
          why: 'The delay emits the feeling rather than receiving it, and an emitter takes <em>-ing</em>. <em>Frustrated</em> would describe the passengers, who are the ones the delay acts on.' },

        { id: 't4l3s1-2', type: 'choose', tag: 'tense-suffix-state', level: 'B2+',
          stem: '______ the upper terraces through the dry months costs the estate more than any other task on the farm.',
          options: ['Irrigating', 'Irrigate', 'Irrigated', 'Irrigation'],
          answer: 0,
          why: 'The slot is a subject, and it is followed straight away by an object. Only the <em>-ing</em> noun keeps the verb\'s grammar; <em>irrigation</em> would need <em>of</em> before <em>the upper terraces</em>.' },

        { id: 't4l3s1-3', type: 'sort', tag: 'tense-suffix-state', level: 'B2+',
          stem: 'The same ending does three jobs. Sort each phrase by the job it is doing here.',
          bins: [
            { key: 'v', label: 'Verb — the continuous', hint: 'there is a form of be in front' },
            { key: 'a', label: 'Adjective — it does the action', hint: 'the noun is the emitter' },
            { key: 'n', label: 'Noun — the process itself', hint: 'it can take an object' }
          ],
          items: [
            { text: 'the cellar is <b>flooding</b> again', bin: 'v' },
            { text: 'the divers are <b>surveying</b> the wreck', bin: 'v' },
            { text: 'the <b>rising</b> damp in the vestry', bin: 'a' },
            { text: 'a <b>puzzling</b> entry in the ledger', bin: 'a' },
            { text: '<b>rewiring</b> the pavilion', bin: 'n' },
            { text: '<b>shelving</b> the returns by hand', bin: 'n' }
          ],
          why: 'One ending, three resulting parts of speech. A form of <em>be</em> marks the verb job, a following noun marks the adjective job, and a following object marks the noun job.' },

        { id: 't4l3s1-4', type: 'spot', tag: 'tense-suffix-state', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The long wait on the platform', 'was so frustrated', 'that half the passengers', 'went back to the booking hall.'],
          answer: 1,
          fix: 'was so frustrating',
          why: 'The wait produced the feeling, so it is the emitter and takes <em>-ing</em>. <em>Frustrated</em> would mean somebody had done the frustrating to the wait itself.' },

        { id: 't4l3s1-5', type: 'equiv', tag: 'tense-suffix-state', level: 'B2+',
          given: 'The harbour master is being difficult about the mooring fees.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The harbour master has always been an awkward man to deal with.',
            'The harbour master finds the mooring fees difficult to work out.',
            'The harbour master has been made awkward by the new mooring fees.',
            'The harbour master is behaving awkwardly over the mooring fees today.'
          ],
          answer: 3,
          why: '<em>Be</em> plus <em>-ing</em> melts a permanent quality into a temporary performance. Option 1 restores the permanent reading the <em>-ing</em> has just removed.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't4l3s2', name: 'The -ed constellation — the solid state', cefr: 'B2+',
      theory: {
        key: 'The <em>-ed</em> ending takes the heat out: it freezes an action into a finished result and marks whatever it is attached to as the receiver of that action.',
        body: [
          'If <em>-ing</em> is heat, <em>-ed</em> is gravity. The energy collapses, the process hardens, and what is left is the <strong>solid</strong> object the action produced. The camera moves with it: instead of standing inside the event, you are pulled back to look at the finished fact and the mark it left behind. That is why <em>-ed</em> encodes two things together — <strong>completion</strong> and <strong>receptivity</strong>.',
          'Receptivity settles the adjective pair that the paper tests most often. A word in <em>-ed</em> in front of a noun says the noun <strong>had the action done to it</strong>: a <em>resurfaced</em> path was resurfaced by a contractor, a <em>known</em> variable has been established by somebody, a <em>loved</em> child receives the loving. Run the two endings against each other every time: <em>the wait was frustrating</em> but <em>the passengers were frustrated</em>. Emitter takes <em>-ing</em>, receiver takes <em>-ed</em>, and no sentence lets you choose freely.',
          'Completion explains the passive. <em>Be</em> plus <em>-ed</em> says only this: the subject currently exists in a completed end state. <em>The north wing was proofed against damp</em> reports the condition of the wing and says nothing at all about who did the work, because the collapse has already removed the agent from the sentence. If the doer still matters, you have to put it back with <em>by</em>.',
          'The same freeze works at the front of a sentence. <em>Fired in the same kiln as the originals, the tiles have kept their colour</em> gives you a finished condition that was already in place before the main verb started — a foundation the sentence then stands on. Open the same sentence with <em>-ing</em> and you claim the tiles are doing the firing, which is the crash students know as the dangling participle.'
        ],
        simple: [
          '<em>-ed</em> is the cold, solid state. The action is over and you are looking at the result it left.',
          'In front of a noun, <em>-ed</em> means somebody did the action <strong>to</strong> that noun: <em>a resurfaced path</em>, <em>a known variable</em>, <em>a loved child</em>.',
          'Always test the pair: <em>the wait was frustrating</em> (it caused the feeling) against <em>the passengers were frustrated</em> (they received it). And <em>be</em> plus <em>-ed</em> is the passive — it reports a finished condition and drops the doer unless you add <em>by</em>.'
        ],
        examples: [
          { s: 'The <b>resurfaced</b> footpath above the quarry reopened last week.', g: 'the path received the work, so the ending is -ed.' },
          { s: 'The volunteers were <b>discouraged</b> by the number of boxes still in the yard.', g: 'the people receive the feeling; the boxes would be discouraging.' },
          { s: '<b>Fired</b> in the same kiln as the originals, the tiles have kept their colour.', g: 'a finished condition already in place before the main verb starts.' },
          { s: '<s>The museum reopened with a fully restoring gallery.</s>', g: 'the gallery had the work done to it: restored.' }
        ]
      },
      items: [
        { id: 't4l3s2-1', type: 'choose', tag: 'tense-suffix-state', level: 'B2',
          stem: 'The ______ footpath above the quarry reopened last week after eight months of work.',
          options: ['resurface', 'resurfaced', 'resurfacing', 'resurfaces'],
          answer: 1,
          why: 'The path received the work, and a receiver takes <em>-ed</em>. <em>Resurfacing</em> would claim the path was doing the resurfacing to something else.' },

        { id: 't4l3s2-2', type: 'choose', tag: 'tense-suffix-state', level: 'B2+',
          stem: 'The volunteers were thoroughly ______ by the number of boxes still waiting in the yard at dusk.',
          options: ['discouraged', 'discouraging', 'discourage', 'discouragement'],
          answer: 0,
          why: 'The volunteers are on the receiving end of the feeling, so the ending is <em>-ed</em>. The boxes are the emitter, and they would be <em>discouraging</em>.' },

        { id: 't4l3s2-3', type: 'sort', tag: 'tense-suffix-state', level: 'B2+',
          stem: 'In each phrase, is the noun sending the action out or taking it in?',
          bins: [
            { key: 'em', label: 'Emitter — it does the action', hint: 'the -ing form' },
            { key: 'rc', label: 'Receiver — it had the action done to it', hint: 'the -ed form' }
          ],
          items: [
            { text: 'a <b>known</b> variable', bin: 'rc' },
            { text: 'the <b>approaching</b> ferry', bin: 'em' },
            { text: 'the <b>loaded</b> trailer', bin: 'rc' },
            { text: 'the <b>rising</b> tide', bin: 'em' },
            { text: 'a <b>loved</b> child', bin: 'rc' },
            { text: 'a <b>puzzling</b> entry', bin: 'em' }
          ],
          why: 'Three emitters and three receivers. The ending has already told you which way the action runs, before you know anything about the noun.' },

        { id: 't4l3s2-4', type: 'spot', tag: 'tense-suffix-state', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The museum reopened', 'with a fully restoring gallery', 'of harbour photographs', 'taken before 1914.'],
          answer: 1,
          fix: 'with a fully restored gallery',
          why: 'The gallery had the work done to it, which is the receiver role and takes <em>-ed</em>. <em>Restoring</em> would make the gallery the one carrying out the restoration.' },

        { id: 't4l3s2-5', type: 'choose', tag: 'tense-suffix-state', level: 'B2+',
          stem: '______ in the same kiln as the originals, the replacement tiles have kept their colour for thirty years.',
          options: ['Fire', 'Firing', 'To fire', 'Fired'],
          answer: 3,
          why: 'The tiles received the firing before the main clause begins, so the opening clause is a finished condition in <em>-ed</em>. <em>Firing</em> would say the tiles were firing something themselves.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't4l3s3', name: 'Forging bounded nouns: -ment and -ion', cefr: 'B2+',
      theory: {
        key: '<em>-ment</em> and <em>-ion</em> are the noun equivalents of <em>-ed</em>: they fence a process off into a countable thing, and the person who did it disappears behind the fence.',
        body: [
          'Walk one root through its four slots and the system is visible at once. <em>Automate</em> is the plain verb. <em>Automating</em> is the process while it runs. <em>Automated</em> is the result carried by a noun — an <em>automated</em> belt had the work done to it. <em>Automation</em> is that same finished result standing alone as a thing you can count, qualify and make the subject of the next sentence. The fourth slot takes <em>-ion</em> here and <em>-ment</em> elsewhere: <em>governing</em> gives <em>government</em>, <em>developing</em> gives <em>the development</em>, <em>entertaining</em> gives <em>entertainment</em>.',
          'The practical difference is <strong>boundedness</strong>. <em>-ion</em> and <em>-ment</em> draw a fence round the process and leave behind a discrete entity, which is why these nouns take <em>a</em>, take numbers and take plurals: <em>three adjustments</em>, <em>two settlements</em>, <em>a replacement</em>. <em>-ing</em> removes the fence and hides where the process starts and stops, which is why it resists all of those. Any slot with <em>a</em>, <em>every</em> or a number in front of it is asking for the bounded noun.',
          'The second difference is the object. The <em>-ing</em> noun keeps the verb\'s grammar and takes its object directly: <em>developing the goods yard</em>. The bounded noun has to reach its object through <em>of</em>: <em>the development of the goods yard</em>. A bare verb can sit in neither frame, and <em>the enlarge of the sports hall</em> is the single commonest suffix error in the error-identification section — visible without reading the rest of the sentence.',
          'Now the consequence the class calls the architecture of accountability: whoever controls the suffix controls the blame. <em>A person is coercing</em> names somebody who could be put on trial. Turn it into <em>coercion</em> and the human being leaves the sentence: what is left is an object nobody can indict. The same happens quietly in ordinary prose — <em>the council developed the water meadow</em> becomes <em>the development of the water meadow</em>, and the council is gone. When a question asks you to nominalise a clause, decide deliberately whether the doer still has to be there.'
        ],
        simple: [
          'One root, four slots: <em>automate</em> (verb), <em>automating</em> (the process), <em>automated</em> (the result on a noun), <em>automation</em> (the result as a thing). <em>-ment</em> does the same job as <em>-ion</em>: <em>develop</em> gives <em>the development</em>.',
          'These nouns are fenced, so you can count them: <em>a replacement</em>, <em>three adjustments</em>. You cannot count an <em>-ing</em> process in the same way.',
          'The <em>-ing</em> noun takes its object straight away — <em>developing the goods yard</em>. The <em>-ment</em> noun needs <em>of</em> — <em>the development of the goods yard</em>. And notice what the change costs: once you say <em>the development</em>, nobody knows who did it.'
        ],
        examples: [
          { s: 'Since <b>automation</b> arrived, returned books reach the shelves twice as fast.', g: '-ion names the finished result as a thing, so it can be the subject.' },
          { s: 'The archive has asked for a full <b>replacement</b> of the basement shelving.', g: 'after "a full" the slot must be a countable bounded noun.' },
          { s: 'The minutes record the <b>diversion</b> of the footpath but name no committee.', g: 'the bounded noun has erased the people who decided it.' },
          { s: '<s>The governors approved the enlarge of the sports hall.</s>', g: 'a bare verb cannot sit in the "the … of" frame: enlargement.' }
        ]
      },
      items: [
        { id: 't4l3s3-1', type: 'choose', tag: 'tense-suffix-make', level: 'B2+',
          stem: 'Once ______ arrived in the sorting room, returned books reached the shelves twice as fast as before.',
          options: ['automate', 'automation', 'automated', 'automating'],
          answer: 1,
          why: 'The slot is the subject of <em>arrived</em> and has no object of its own, so it needs the bounded noun that names the finished result as a thing.' },

        { id: 't4l3s3-2', type: 'build', tag: 'tense-suffix-make', level: 'B2+',
          stem: 'Two facts: the council developed the old goods yard; the town now has forty more homes. Say it in one sentence beginning "The development".',
          tiles: ['The', 'development', 'of', 'the old goods yard', 'has given', 'the town', 'forty more homes'],
          solution: 'The development of the old goods yard has given the town forty more homes',
          alt: [],
          why: 'The bounded noun reaches its object through <em>of</em>, and notice the cost of the move: the council, which did the work, has vanished from the sentence.' },

        { id: 't4l3s3-3', type: 'sort', tag: 'tense-suffix-make', level: 'B2+',
          stem: 'Is the fence up or down? Sort each phrase by what its ending has done to the process.',
          bins: [
            { key: 'p', label: 'Fence down — a process still running', hint: 'the -ing form' },
            { key: 'e', label: 'Fence up — a countable entity', hint: 'the -ment or -ion form' }
          ],
          items: [
            { text: '<b>developing</b> the water meadows', bin: 'p' },
            { text: 'the new <b>development</b> on the ridge', bin: 'e' },
            { text: '<b>entertaining</b> the coach parties', bin: 'p' },
            { text: 'an evening of <b>entertainment</b>', bin: 'e' },
            { text: '<b>settling</b> the boundary dispute', bin: 'p' },
            { text: 'a written <b>settlement</b>', bin: 'e' }
          ],
          why: 'Each pair shares a root. The <em>-ing</em> member keeps its object and stays open at both ends; the bounded member takes an article and can be counted.' },

        { id: 't4l3s3-4', type: 'spot', tag: 'tense-suffix-make', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The county archive has asked', 'for a full replace', 'of the basement shelving', 'before the winter.'],
          answer: 1,
          fix: 'for a full replacement',
          why: 'The frame <em>a full … of</em> is a noun slot, and a bare verb cannot stand in it. The bounded noun built from this root ends in <em>-ment</em>.' },

        { id: 't4l3s3-5', type: 'equiv', tag: 'tense-suffix-make', level: 'B2+',
          given: 'The report refers only to the cancellation of the evening service.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The report names the manager who cancelled the evening service.',
            'The report treats the cancellation as a plan that may still be reversed.',
            'The report states the cancellation as a fact and names nobody behind it.',
            'The report asks the operator to cancel the evening service next winter.'
          ],
          answer: 2,
          why: 'Nominalising the verb fences the event off as a thing and takes the agent out with it. Nothing in <em>the cancellation</em> tells you who decided it, which is exactly the point of the form.' }
      ]
    }
  ],

  check: {
    id: 't4l3ck', name: 'Systems Check · The suffix matrix',
    items: [
      { id: 't4l3ck-1', type: 'choose', tag: 'tense-suffix-state', level: 'B2',
        stem: 'The volunteers described the wait for the tide as the most ______ part of the whole shoreline survey.',
        options: ['tiring', 'tired', 'tire', 'tiredness'],
        answer: 0,
        why: 'The wait produces the feeling, so it is the emitter and takes <em>-ing</em>. <em>Tired</em> would describe the volunteers, who receive it.' },

      { id: 't4l3ck-2', type: 'choose', tag: 'tense-suffix-state', level: 'B2+',
        stem: 'Every ______ crate in the dockside store carries a customs seal on the upper edge.',
        options: ['inspect', 'inspecting', 'inspected', 'inspection'],
        answer: 2,
        why: 'The crates had the inspecting done to them, which is the receiver role. <em>Inspecting</em> would make each crate the thing carrying out the inspection.' },

      { id: 't4l3ck-3', type: 'sort', tag: 'tense-suffix-state', level: 'B2+',
        stem: 'Sort each phrase by what its ending has done to the action.',
        bins: [
          { key: 'p', label: 'Running process', hint: 'the noun does the action' },
          { key: 'r', label: 'Result carried by the noun', hint: 'the noun received it' },
          { key: 'e', label: 'Countable entity', hint: 'you can put a number in front' }
        ],
        items: [
          { text: 'the <b>leaking</b> culvert', bin: 'p' },
          { text: 'a <b>welcoming</b> notice', bin: 'p' },
          { text: 'a <b>flooded</b> cellar', bin: 'r' },
          { text: 'the <b>repointed</b> chimney', bin: 'r' },
          { text: 'two <b>improvements</b> to the path', bin: 'e' },
          { text: 'the <b>installation</b> of new gates', bin: 'e' }
        ],
        why: 'Three endings, three jobs: <em>-ing</em> keeps the action running, <em>-ed</em> hands the finished result to a noun, and <em>-ment</em> or <em>-ion</em> makes the result itself countable.' },

      { id: 't4l3ck-4', type: 'choose', tag: 'tense-suffix-make', level: 'B2+',
        stem: 'Three separate ______ to the bus timetable have been posted since the bypass opened.',
        options: ['adjusting', 'adjusted', 'adjustment', 'adjustments'],
        answer: 3,
        why: '<em>Three separate</em> and the plural <em>have</em> both demand a countable noun. Only the bounded <em>-ment</em> form can be counted; an <em>-ing</em> process has no edges to count.' },

      { id: 't4l3ck-5', type: 'spot', tag: 'tense-suffix-make', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The governors approved', 'the enlarge of the sports hall', 'in the same week', 'as the swimming timetable changed.'],
        answer: 1,
        fix: 'the enlargement of the sports hall',
        why: 'The frame <em>the … of</em> is a noun slot and a bare verb cannot fill it. This root builds its bounded noun with <em>-ment</em>.' },

      { id: 't4l3ck-6', type: 'equiv', tag: 'tense-suffix-state', level: 'B2+',
        given: 'Being new to the district, the locum did not know which pharmacy stayed open late.',
        stem: 'Choose the closest meaning to the original sentence.',
        options: [
          'The locum behaved strangely because the district was unfamiliar to him.',
          'Since he had only recently come to the district, the locum did not know which pharmacy stayed open late.',
          'Although he had lived in the district for years, the locum did not know which pharmacy stayed open late.',
          'Once the locum had learned the district, he found out which pharmacy stayed open late.'
        ],
        answer: 1,
        why: '<em>Being</em> melts <em>be</em> into a radiating state that the main clause borrows, and it compresses a clause of reason: <em>because he was new</em>. It does not report behaviour, which is what option 1 claims.' }
    ]
  }
});

TOPICS.push(T4);
