/* ===========================================================================
   SYSTEM 05 — Inversion, conditionals and reporting
   Three levels. The three formal structures the grammar paper tests together:
   the sentence that opens with a negative, the conditional that has thrown
   away its if, and the claim reported without a source.
   =========================================================================== */

var T5 = {
  id: 't5', n: 5, code: 'System 05', art: 'signal',
  name: 'Inversion, Conditionals and Reporting',
  cefr: 'B2+–C1',
  blurb: 'Three formal structures that look strange until you see they are all built from a question shape: the negative opener, the conditional with no if, and the claim with no source.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T5.levels.push({
  id: 't5l1', n: 1, name: 'Inversion after a negative opener', cefr: 'B2+',
  blurb: 'When a negative or restrictive adverbial is moved to the front of a sentence, the subject and the auxiliary change places.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't5l1s1', name: 'Rarely, seldom, never, little', cefr: 'B2+',
      theory: {
        key: 'Move a negative adverbial to the front and the rest of the clause turns into a question shape, though the meaning stays a statement.',
        body: [
          'Start with the plain sentence: <em>A survey team has rarely mapped so much of the reef in one season.</em> Now move <em>rarely</em> to the front. English will not let the ordinary subject-verb order stand after it, so the auxiliary jumps in front of the subject: <em>Rarely <b>has a survey team</b> mapped so much of the reef in one season.</em> The shape is the shape of a question; nothing about the meaning is a question.',
          'Build it in two steps and you will never get it wrong. <strong>Step one:</strong> write the plain sentence. <strong>Step two:</strong> move the adverbial to the front and turn what follows into a question. The adverbials that do this are the negative and restrictive ones — <em>rarely, seldom, never, little, nowhere, at no time, under no circumstances, on no account, not once</em>.',
          'If the plain sentence has no auxiliary, one appears, exactly as it would in a question. <em>A supply boat seldom reaches the island clinic in September</em> becomes <em>Seldom <b>does</b> a supply boat reach the island clinic in September</em> — and, because <em>does</em> now carries the tense, the main verb goes back to its bare form. <em>Seldom does a supply boat reaches</em> marks the tense twice and is the commonest slip here.',
          'Two things to watch. The auxiliary that moves is the whole auxiliary, never a contraction: write <em>Rarely had the river not risen</em>, never <em>Rarely hadn\'t the river risen</em>. And after an auxiliary such as <em>has</em> or <em>had</em>, the slot that follows the subject takes a <u>past participle</u> — <em>mapped</em>, not <em>map</em>, <em>mapping</em> or <em>to map</em>. An inverted opener does not change what the auxiliary demands.'
        ],
        simple: [
          'If a sentence begins with <em>rarely</em>, <em>seldom</em>, <em>never</em> or <em>little</em>, you must swap the subject and the auxiliary, like a question: <em>Rarely has the school team won away from home.</em>',
          'If there is no auxiliary, use <em>do</em>, <em>does</em> or <em>did</em>, and then the main verb has no ending: <em>Seldom does the boat run in rough weather.</em>',
          'Never use a short form such as <em>hasn\'t</em> or <em>didn\'t</em> in this structure. And remember that after <em>has</em> or <em>had</em> you still need the third form of the verb.'
        ],
        examples: [
          { s: 'Rarely <b>has a survey team mapped</b> so much of the reef in one season.', g: 'has + subject + past participle; the auxiliary has not changed its demands.' },
          { s: 'Seldom <b>does a supply boat reach</b> the island clinic before the swell drops.', g: 'no auxiliary in the plain sentence, so DO appears and the verb goes bare.' },
          { s: 'Little <b>did the volunteers realise</b> that the beach had already lost thirty metres.', g: 'little is negative in force, so it triggers the inversion too.' },
          { s: '<s>Rarely has a dive team returning with so complete a record.</s>', g: 'after has the slot takes the past participle: has returned.' }
        ]
      },
      items: [
        { id: 't5l1s1-1', type: 'choose', tag: 'inv-negative', level: 'B2+',
          stem: 'Rarely has a survey team ______ so much of the reef in a single diving season.',
          options: ['mapped', 'map', 'mapping', 'to map'],
          answer: 0,
          why: 'Moving <em>rarely</em> to the front changes the word order and nothing else. <em>Has</em> still demands a past participle, so the slot takes <em>mapped</em>. <em>Map</em> is the bare form and would need <em>did</em> or a modal in front of it; <em>mapping</em> would need <em>has been</em>; and <em>to map</em> is an infinitive, which no perfect auxiliary ever takes.' },

        { id: 't5l1s1-2', type: 'choose', tag: 'inv-negative', level: 'B2+',
          stem: 'Seldom ______ the island clinic before the monsoon swell drops.',
          options: ['a supply boat reaches', 'does a supply boat reaches', 'a supply boat does reach', 'does a supply boat reach'],
          answer: 3,
          why: 'There is no auxiliary in the plain sentence, so <em>does</em> appears and moves in front of the subject, and because <em>does</em> now carries the tense the main verb is bare. Option 1 leaves ordinary statement order standing after a negative opener; option 2 inverts but marks the tense twice; option 3 is the emphatic <em>do</em>, which is real English but leaves the subject where it was.' },

        { id: 't5l1s1-3', type: 'spot', tag: 'inv-negative', level: 'B2+',
          words: ['Rarely has the district office', 'approve a new night market', 'without first commissioning', 'a full traffic survey.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 1,
          fix: 'approved a new night market',
          why: 'The inversion has been made correctly, but <em>has</em> still governs the verb that follows the subject, and <em>has</em> takes a past participle.' },

        { id: 't5l1s1-4', type: 'build', tag: 'inv-negative', level: 'B2+',
          stem: 'Fact: the school band has almost never played this piece with its original drum parts. Say it as one sentence beginning "Rarely".',
          tiles: ['Rarely', 'has', 'the school band', 'performed', 'this piece', 'with its original', 'drum parts'],
          solution: 'Rarely has the school band performed this piece with its original drum parts',
          alt: [],
          why: 'The negative adverbial goes first, the auxiliary follows it, the subject comes next, and the past participle comes last.' },

        { id: 't5l1s1-5', type: 'choose', tag: 'inv-negative', level: 'B2+',
          stem: 'Little ______ that the beach they were surveying had already lost thirty metres to the sea.',
          options: ['the volunteers realised', 'realised the volunteers', 'did the volunteers realise', 'the volunteers did realise'],
          answer: 2,
          why: '<em>Little</em> here means "not at all", so it counts as a negative opener and forces the inversion. Without an auxiliary in the plain sentence, <em>did</em> appears and the main verb goes bare. Option 1 keeps ordinary statement order; option 2 moves the lexical verb itself, which English never allows; option 4 is the emphatic <em>do</em> with the subject still in front of it.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't5l1s2', name: 'Not only … but also; no sooner … than; hardly … when', cefr: 'B2+',
      theory: {
        key: 'These openers invert the half of the sentence they sit in, and leave the other half alone.',
        body: [
          'All three are two-part structures, and students lose marks by inverting both halves. <em>Not only <b>did the crew unblock</b> the canal, but they <b>also rebuilt</b> the pump house.</em> The first clause carries the negative word, so the first clause inverts. The second clause is an ordinary statement with <em>also</em> inside it, and it stays in ordinary order.',
          '<em>No sooner … than</em> and <em>Hardly … when</em> report two events in immediate sequence. The earlier event goes in the inverted clause and takes the <u>past perfect</u>; the later event follows <em>than</em> or <em>when</em> in the past simple. <em>No sooner <b>had the rain eased</b> than the skipper brought the boat in.</em> The pairings are fixed: <em>no sooner</em> goes with <em>than</em>, <em>hardly</em> and <em>scarcely</em> go with <em>when</em>. Crossing them over is the second commonest error in this family.',
          'The negative is never contracted. When the inverted clause itself needs a negative, <em>not</em> goes after the subject: <em>Not only <b>had the badminton club not entered</b> a team for three seasons, but it had also given up its court booking.</em> <em>Not only hadn\'t the badminton club entered</em> is the form students reach for and the form that costs the mark.',
          'One reason to learn these properly: they are the cheapest way to sound formal in writing. A paragraph that opens <em>No sooner had the cold store been sealed than the standby generator failed</em> is doing work that <em>The generator failed just after they sealed the cold store</em> cannot do.'
        ],
        simple: [
          'Only the half of the sentence with the negative word changes its order. The <em>but also</em> half stays normal.',
          '<em>No sooner</em> always pairs with <em>than</em>. <em>Hardly</em> and <em>scarcely</em> always pair with <em>when</em>. The first event uses <em>had</em> + third form, the second uses the past simple.',
          'Do not use short forms such as <em>hadn\'t</em> here. If you need a negative, put <em>not</em> after the subject: <em>Not only had the club not entered a team…</em>'
        ],
        examples: [
          { s: 'Not only <b>did the crew unblock</b> the canal, but they <b>also rebuilt</b> the pump house.', g: 'first half inverted, second half in ordinary order.' },
          { s: 'No sooner <b>had the rain eased</b> <b>than</b> the skipper brought the boat in.', g: 'no sooner pairs with than; past perfect first, past simple second.' },
          { s: 'Hardly <b>had the drummers come in</b> <b>when</b> the teacher stopped the rehearsal.', g: 'hardly pairs with when.' },
          { s: '<s>Not only hadn\'t the club entered a team, but it had also given up its court.</s>', g: 'never contract: Not only had the club not entered a team.' }
        ]
      },
      items: [
        { id: 't5l1s2-1', type: 'choose', tag: 'inv-negative', level: 'B2+',
          stem: 'Not only ______ the bus timetable, but it also rebuilt three bus shelters along the ring road.',
          options: ['the district office redrew', 'did the district office redraw', 'did the district office redrew', 'the district office did redraw'],
          answer: 1,
          why: '<em>Not only</em> at the front of a clause forces the inversion, and with no auxiliary in the plain sentence <em>did</em> appears with a bare verb after it. Option 1 leaves ordinary order after a negative opener, option 3 marks the past tense twice, and option 4 is the emphatic <em>do</em>, which stresses the verb but inverts nothing.' },

        { id: 't5l1s2-2', type: 'sort', tag: 'inv-negative', level: 'B2+',
          stem: 'Each strip is half of a two-part sentence. Which half has the inverted order?',
          bins: [
            { key: 'inv', label: 'Inverted', hint: 'auxiliary in front of the subject' },
            { key: 'norm', label: 'Ordinary order', hint: 'subject in front of the verb' }
          ],
          items: [
            { text: 'Not only <b>did the crew unblock</b> the canal', bin: 'inv' },
            { text: 'but they <b>also rebuilt</b> the pump house', bin: 'norm' },
            { text: 'No sooner <b>had the rain eased</b>', bin: 'inv' },
            { text: 'than the skipper <b>brought</b> the boat in', bin: 'norm' },
            { text: 'Hardly <b>had the drummers come in</b>', bin: 'inv' },
            { text: 'when the teacher <b>stopped</b> the rehearsal', bin: 'norm' }
          ],
          why: 'Only the half carrying the negative adverbial inverts. What follows <em>but also</em>, <em>than</em> or <em>when</em> is an ordinary clause.' },

        { id: 't5l1s2-3', type: 'equiv', tag: 'inv-negative', level: 'B2+',
          given: 'No sooner had the cold-store doors been sealed than the standby generator failed.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The generator failed while the doors were still being sealed.',
            'The doors were sealed some hours after the generator failed.',
            'The generator failed a moment after the doors had been sealed.',
            'The doors were sealed because the generator had already failed.'
          ],
          answer: 2,
          why: '<em>No sooner … than</em> puts two completed events in immediate sequence, and the past perfect marks the earlier one, so the sealing came first and the failure followed at once. Option 1 makes the sealing unfinished; options 2 and 4 both reverse the order, and option 4 invents a cause the sentence never states.' },

        { id: 't5l1s2-4', type: 'choose', tag: 'inv-negative', level: 'B2+',
          stem: 'Hardly had the last crate of mangoes been weighed ______ the power to the chillers cut out.',
          options: ['when', 'than', 'that', 'then'],
          answer: 0,
          why: 'The pairings are fixed: <em>hardly</em> and <em>scarcely</em> take <em>when</em>; only <em>no sooner</em> takes <em>than</em>, so option 2 crosses the pair over. <em>That</em> introduces a noun clause, not a second event, and <em>then</em> is an adverb and cannot join two clauses on its own.' },

        { id: 't5l1s2-5', type: 'spot', tag: 'inv-negative', level: 'B2+',
          words: ['Not only hadn\'t the badminton club', 'entered a team', 'for three seasons,', 'but it had also given up its court booking.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 0,
          fix: 'Not only had the badminton club not entered',
          why: 'The negative is never contracted in an inverted clause. The auxiliary moves in front of the subject on its own, and <em>not</em> stays behind the subject.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't5l1s3', name: 'Only after, only when, only if', cefr: 'B2+',
      theory: {
        key: 'Only after, Only when and Only if invert the clause that follows them, never the clause inside them.',
        body: [
          'These openers introduce a whole time or condition clause, and that clause keeps ordinary order. It is the <u>main</u> clause, the one that comes after it, which inverts. Mark the two clauses with brackets before you write anything: <em>[Only after the canal had been pumped dry] [did the engineers see the scale of the blockage].</em> The first pair of brackets is untouched; the second is a question shape.',
          'The error this prevents is the one every class makes: <em>Only after did the canal be pumped dry…</em>. Students hear "inversion" and invert the first thing they meet. The bracket test kills it in a second, because the inverted part must contain the main verb of the sentence — the thing that finally happened.',
          'The same applies to <em>Only if</em>, which takes a real condition rather than a time: <em>Only if the haze clears <b>will the boat leave</b> for the island before dawn.</em> Note the modal <em>will</em> in the inverted half and the present tense in the condition half, exactly as in an ordinary first conditional.',
          'Everything you learned about the auxiliary applies here. If the main clause has no auxiliary of its own, <em>do</em>, <em>does</em> or <em>did</em> appears and the main verb goes bare — <em>did the engineers <b>see</b></em>, never <em>did the engineers saw</em>.'
        ],
        simple: [
          'Put brackets round the two clauses. <em>[Only after the canal had been pumped dry] [did the engineers see the blockage].</em> The first clause is normal. Only the second clause changes its order.',
          'Students often invert the wrong clause and write <em>Only after did the canal…</em>. That is always wrong.',
          'If you use <em>did</em>, <em>does</em> or <em>do</em>, the verb after it has no ending: <em>did the engineers see</em>, not <em>did the engineers saw</em>.'
        ],
        examples: [
          { s: 'Only after the canal had been pumped dry <b>did the engineers see</b> the scale of the blockage.', g: 'the after-clause is normal; the main clause inverts.' },
          { s: 'Only when the monsoon rain had eased <b>did the river begin</b> to fall.', g: 'same pattern with a time clause.' },
          { s: 'Only if the haze clears <b>will the boat leave</b> before dawn.', g: 'a real condition; the modal moves in front of the subject.' },
          { s: '<s>Only after did the inspection of the clinic finish, the figures were released.</s>', g: 'the wrong clause has been inverted: Only after the inspection finished were the figures released.' }
        ]
      },
      items: [
        { id: 't5l1s3-1', type: 'choose', tag: 'inv-only', level: 'B2+',
          stem: 'Only after the canal had been pumped dry ______ the full scale of the blockage.',
          options: ['the engineers saw', 'the engineers did see', 'saw the engineers', 'did the engineers see'],
          answer: 3,
          why: 'The <em>after</em> clause keeps ordinary order; the main clause inverts. With no auxiliary of its own the main clause takes <em>did</em>, and the verb after it is bare. Option 1 never inverts at all, option 2 is the emphatic <em>do</em> with the subject still in front, and option 3 moves the lexical verb instead of an auxiliary.' },

        { id: 't5l1s3-2', type: 'spot', tag: 'inv-only', level: 'B2+',
          words: ['Only after did the inspection finish', 'were the figures', 'for the last three terms', 'released to the parents.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 0,
          fix: 'Only after the inspection finished',
          why: 'The wrong clause has been inverted. <em>Only after</em> introduces a time clause, which stays in ordinary order; the inversion belongs to the main clause, and <em>were the figures released</em> is already correct.' },

        { id: 't5l1s3-3', type: 'build', tag: 'inv-only', level: 'B2+',
          stem: 'Fact: the river began to fall only once the monsoon rain had eased across the valley. Say it as one sentence beginning "Only when".',
          tiles: ['Only', 'when', 'the monsoon rain', 'had eased', 'across the valley', 'did', 'the river', 'begin', 'to fall'],
          solution: 'Only when the monsoon rain had eased across the valley did the river begin to fall',
          alt: [],
          why: 'The time clause runs to the end of <em>valley</em> in ordinary order. Only then does the main clause start, and it starts with its auxiliary.' },

        { id: 't5l1s3-4', type: 'cloze', tag: 'inv-only', level: 'B2+',
          passage: 'The drainage canal behind the housing estate had been silted up since 1998. Only after the upper section had been pumped dry ___(1)___ the rotten sluice gates, some of them fifty years old. Volunteers replaced eleven of them by hand. Only when the first boat came down the canal ___(2)___ the committee agree to call the clearance finished.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['could the volunteers reach', 'the volunteers could reach', 'could the volunteers reached', 'the volunteers could have reached'],
          answer: 0,
          why: 'The modal <em>could</em> moves in front of the subject and the verb stays bare. Option 2 leaves ordinary order after <em>Only after</em>, option 3 inverts but then marks the tense on the main verb as well, and option 4 both fails to invert and pushes the reaching into an unreal past. Blank (2) works the same way and takes <em>did</em>, because <em>agree</em> has no auxiliary of its own.' },

        { id: 't5l1s3-5', type: 'choose', tag: 'inv-only', level: 'B2+',
          stem: 'Only if the haze clears ______ for the island before dawn.',
          options: ['the boat will leave', 'will the boat leave', 'the boat leaves', 'will the boat leaves'],
          answer: 1,
          why: '<em>Only if</em> introduces the condition, which keeps the present tense and ordinary order. The main clause carries the modal, and the modal moves in front of the subject. Option 1 keeps the modal behind the subject, option 3 has no modal at all, and option 4 inverts but then adds a third-person ending to a verb that must stay bare after <em>will</em>.' }
      ]
    }
  ],

  check: {
    id: 't5l1ck', name: 'Systems Check · Inversion after a negative opener',
    items: [
      { id: 't5l1ck-1', type: 'choose', tag: 'inv-negative', level: 'B2+',
        stem: 'Never before had the dive club ______ a reef survey at that depth without a support boat.',
        options: ['attempt', 'to attempt', 'attempting', 'attempted'],
        answer: 3,
        why: 'The inversion moves <em>had</em> in front of the subject and changes nothing else, and <em>had</em> still requires a past participle. <em>Attempt</em> is the bare form, <em>to attempt</em> an infinitive and <em>attempting</em> a present participle, and a perfect auxiliary takes none of the three.' },

      { id: 't5l1ck-2', type: 'spot', tag: 'inv-only', level: 'B2+',
        words: ['Only when the haze cleared', 'did the rescue team', 'saw the boat', 'drifting beyond the reef.'],
        stem: 'One of the four parts is wrong. Find it.',
        answer: 2,
        fix: 'see the boat',
        why: 'Once <em>did</em> has taken the tense, the main verb goes back to its bare form: <em>did the rescue team see</em>.' },

      { id: 't5l1ck-3', type: 'equiv', tag: 'inv-negative', level: 'B2+',
        given: 'Hardly had the printers run off the first copies of the school magazine when the editor noticed that a whole line was missing.',
        stem: 'Choose the closest meaning to the original sentence.',
        options: [
          'The editor noticed the missing line long before the copies were printed.',
          'The copies were printed only after the missing line had been replaced.',
          'The printers refused to print the magazine until the text had been checked.',
          'The line was found to be missing almost as soon as the copies had been printed.'
        ],
        answer: 3,
        why: '<em>Hardly … when</em> reports two events in immediate sequence, and the past perfect marks the earlier one, so the printing came first and the discovery followed at once. Options 1 and 2 both put the discovery before the printing, and option 3 turns a sequence into a refusal that never happened.' },

      { id: 't5l1ck-4', type: 'choose', tag: 'inv-negative', level: 'B2+',
        stem: 'Not only ______ the journey into the city, but they also cost less to run than the old minibuses.',
        options: ['did the new express buses shorten', 'the new express buses shortened', 'did the new express buses shortened', 'the new express buses did shorten'],
        answer: 0,
        why: 'The <em>not only</em> half inverts and takes <em>did</em> with a bare verb after it. Option 2 leaves ordinary order, option 3 marks the past twice, and option 4 is the emphatic <em>do</em> with no inversion. The <em>but also</em> half keeps ordinary order, which is why <em>they also cost</em> is already correct.' },

      { id: 't5l1ck-5', type: 'build', tag: 'inv-only', level: 'B2+',
        stem: 'Fact: the committee agreed to reopen the river path only once the flood survey had been published. Say it as one sentence beginning "Only after".',
        tiles: ['Only', 'after', 'the flood survey', 'had been published', 'did', 'the committee', 'agree', 'to reopen', 'the river path'],
        solution: 'Only after the flood survey had been published did the committee agree to reopen the river path',
        alt: [],
        why: 'Bracket the two clauses. The survey clause is ordinary; the committee clause inverts and needs <em>did</em>, because <em>agree</em> has no auxiliary.' },

      { id: 't5l1ck-6', type: 'choose', tag: 'inv-negative', level: 'C1',
        stem: 'Which sentence is correct?',
        options: [
          'No sooner the storm had passed than the rescue boat put out.',
          'No sooner had the storm passed when the rescue boat put out.',
          'No sooner had the storm passed than the rescue boat put out.',
          'No sooner the storm passed than did the rescue boat put out.'
        ],
        answer: 2,
        why: 'Three things have to be right at once: <em>no sooner</em> pairs with <em>than</em>, the first clause inverts, and the second clause does not. Option 1 fails to invert the first clause, option 2 crosses the pairing over to <em>when</em>, and option 4 inverts the second clause instead of the first. Only option 3 manages all three.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T5.levels.push({
  id: 't5l2', n: 2, name: 'Conditionals without if', cefr: 'C1',
  blurb: 'Formal English throws the if away and inverts instead — but only three verbs are allowed to do it, and the result clause still has to be timed correctly.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't5l2s1', name: 'Had + subject + past participle', cefr: 'C1',
      theory: {
        key: 'Had at the front of a clause is if + past perfect with the if removed and the subject and auxiliary swapped.',
        body: [
          'The word <em>Had</em> drops the word <em>if</em> and triggers an inversion of the subject and the auxiliary verb: <em>If the rescue station had been warned…</em> becomes <em>Had the rescue station been warned…</em>. Nothing else changes, and nothing is added. This is one register step up from the <em>if</em> version; it belongs to written English, and the exam prints it far more often than anyone says it.',
          'Think of <em>Had</em> as a <strong>severed coordinate</strong>. It isolates the event behind a temporal firewall: the structure does not connect to the present at all, and it does not describe anything that happened. It creates a <strong>hypothetical, alternate reality</strong> — a collapsed state that never actually occurred. That is why <em>Had the cold store been built above the flood line</em> tells you, with certainty, that it was not.',
          'This is exactly where <em>Had</em> parts company with <em>Having</em>, and the contrast is worth memorising. <em>Having</em> carries the active energy needed to tether a finished event to a subject, so it can open a clause with no subject of its own: <em>Having analysed the rainfall records, the team published a revised flood map.</em> <em>Had</em> is a solid, collapsed state with no such energy. A coordinate with no subject after it simply floats, and the sentence fails. You may begin a clause with <em>Having analysed…</em>; you may never begin one with <em>Had analysed…</em>.',
          'Hold the two sentences from the slide side by side. <em><b>Having been</b> told the secret, she smiled</em> is <strong>actuality</strong>: a real, finished event tethered to a subject on the main timeline. <em><b>Had they been</b> told the secret, they would have smiled</em> is <strong>alternate reality</strong>: the event is trapped in a dimension that was never realised, and the people in the real world did not smile. Finally, never contract the negative — <em>Had the supply boat not sailed</em>, never <em>Hadn\'t the supply boat sailed</em>.'
        ],
        simple: [
          '<em>Had</em> at the start of a clause is just <em>if … had</em> with the <em>if</em> taken out and the word order swapped. <em>If the alarm had been raised</em> becomes <em>Had the alarm been raised</em>.',
          'This structure always describes something that did <u>not</u> happen. It is an alternate reality, not a report.',
          'You can begin a clause with <em>Having analysed the data…</em>, because <em>Having</em> can attach itself to the subject that follows. You can never begin one with <em>Had analysed the data…</em>, because <em>Had</em> needs its own subject straight after it.',
          'Do not write <em>Hadn\'t</em> here. Write <em>Had the boat not sailed</em>.'
        ],
        examples: [
          { s: '<b>Had the rescue station been warned</b>, the launch would have gone out.', g: 'if + past perfect, with if removed and the subject and auxiliary swapped.' },
          { s: '<b>Having analysed</b> the rainfall records, the team published a revised flood map.', g: 'actuality — a real finished event, tethered to the subject that follows.' },
          { s: '<b>Had they been</b> told of the storm, they would have turned back.', g: 'alternate reality — they were not told, and they did not turn back.' },
          { s: '<s>Had analysed the rainfall records, the team published a revised flood map.</s>', g: 'Had needs a subject immediately after it; only Having can open a clause without one.' },
          { s: '<s>Hadn\'t the supply boat sailed early, the clinic would have run out of fuel.</s>', g: 'never contract: Had the supply boat not sailed early.' }
        ]
      },
      items: [
        { id: 't5l2s1-1', type: 'choose', tag: 'cond-noif', level: 'C1',
          stem: '______ the rescue station been warned in time, the launch would have gone out to the stranded ferry.',
          options: ['If', 'Should', 'Having', 'Had'],
          answer: 3,
          why: 'Only <em>Had</em> can stand in front of a subject and a past participle like this. <em>If</em> would still need its own <em>had</em> after the subject, <em>Should</em> takes a bare infinitive rather than a participle, and <em>Having</em> cannot be followed by a subject at all.' },

        { id: 't5l2s1-2', type: 'equiv', tag: 'cond-noif', level: 'C1',
          given: 'Had the cold store been built above the flood line, the water would never have reached the generator room.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The store was not built above the flood line, and the water did reach the generator room.',
            'The water reached the generator room although the store stood above the flood line.',
            'The store may yet be rebuilt above the flood line to keep the water out.',
            'The store was built above the flood line, so no water reached the generator room.'
          ],
          answer: 0,
          why: 'The inverted past perfect builds an alternate reality, so both halves of the real world are the opposite of what the sentence describes: no such siting, and water in the generator room. Options 2 and 4 both accept the siting as real, and option 3 turns a closed past into an open future plan.' },

        { id: 't5l2s1-3', type: 'choose', tag: 'cond-noif', level: 'C1',
          stem: 'Which sentence is correct?',
          options: [
            'Had analysed the rainfall records, the team published a revised flood map.',
            'Had the team analysed the rainfall records, the team published a revised flood map.',
            'Having analysed the rainfall records, the team published a revised flood map.',
            'Had analysing the rainfall records, the team published a revised flood map.'
          ],
          answer: 2,
          why: '<em>Having</em> can tether a finished event to the subject that follows it, so it opens a clause with no subject of its own. Options 1 and 4 leave <em>Had</em> with no subject after it, which no inverted conditional allows, and option 2 gives it a subject but then answers it with a plain past instead of the <em>would have</em> clause the structure demands.' },

        { id: 't5l2s1-4', type: 'spot', tag: 'cond-noif', level: 'C1',
          words: ['Hadn\'t the supply boat', 'sailed a week early,', 'the island clinic', 'would have run out of fuel.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 0,
          fix: 'Had the supply boat not sailed',
          why: 'The negative is never contracted in an inverted conditional. The auxiliary moves to the front alone and <em>not</em> follows the subject.' },

        { id: 't5l2s1-5', type: 'build', tag: 'cond-noif', level: 'C1',
          stem: 'Fact: the survey team did not carry a spare battery, and it lost three days repeating its readings. State the alternate reality in one sentence beginning "Had".',
          tiles: ['Had', 'the survey team', 'carried', 'a spare battery', 'it', 'would not', 'have lost', 'three days'],
          solution: 'Had the survey team carried a spare battery it would not have lost three days',
          alt: [],
          why: 'The condition is a past one that never happened, so it takes <em>Had</em> + subject + past participle, and the result takes <em>would have</em> + past participle.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't5l2s2', name: 'Were and Should', cefr: 'C1',
      theory: {
        key: 'Only three verbs may open an inverted conditional — had, were and should — and each maps onto one ordinary if-form.',
        body: [
          'Learn the three as a set, each with its translation. <em>Had</em> = <em>if</em> + past perfect, for an unreal past. <em>Were</em> = <em>if</em> + the past simple of <em>be</em>, for an unreal present or future: <em>Were the river a metre lower, the ferry would ground on the sandbar.</em> <em>Should</em> = <em>if by any chance</em> or <em>if it happens that</em>, for a real but unlikely future: <em>Should you need the exam timetable before Monday, the school office will email it to you.</em>',
          'The two that students confuse are <em>Were</em> and <em>Should</em>, and the giveaway is what follows the subject. <em>Should</em> is a modal, so it takes a <u>bare infinitive</u>: <em>Should the flooding return…</em>, never <em>Should the flooding returned…</em> or <em>Should the flooding to return…</em>. <em>Were</em> in this structure is often followed by <em>to</em> + infinitive, which pushes the whole thing into the future: <em>Were the floodgates to fail during the rainy season, the whole estate would have to be evacuated.</em>',
          'The result clauses differ too, and they differ for a reason. <em>Were</em> builds something unreal, so its result takes <em>would</em>. <em>Should</em> builds something merely unlikely, so its result can take an ordinary future or even an imperative: <em>Should the water rise overnight, telephone the site manager.</em> Get the result clause wrong and the reader hears the wrong degree of likelihood.',
          'No other verb does this. <em>Did the ferry ground on the sandbar…</em> is not a conditional, it is a question. And, as always, the negative stays uncontracted: <em>Were the forecast not so poor</em>, never <em>Weren\'t the forecast so poor</em>.'
        ],
        simple: [
          'Three words can begin a conditional with no <em>if</em>: <em>Had</em>, <em>Were</em> and <em>Should</em>. Nothing else.',
          '<em>Had</em> = <em>if … had</em>. <em>Were</em> = <em>if … was/were</em>. <em>Should</em> = <em>if by any chance</em>.',
          'After <em>Should</em> the verb has no ending at all: <em>Should the flooding return…</em>. After <em>Were</em> you often need <em>to</em>: <em>Were the gates to fail…</em>.',
          '<em>Were</em> sentences use <em>would</em> in the second half. <em>Should</em> sentences usually use <em>will</em> or an instruction.'
        ],
        examples: [
          { s: '<b>Were the floodgates to fail</b> during the rainy season, the whole estate would flood.', g: 'Were + subject + to + infinitive, for an unreal future.' },
          { s: '<b>Should you need</b> the exam timetable before Monday, the school office will email it.', g: 'Should + subject + bare infinitive, for a real but unlikely future.' },
          { s: '<b>Were the forecast</b> more reliable, the pitches would not be closed so often.', g: 'Were = if the forecast was more reliable — an unreal present.' },
          { s: '<s>Should the haze would clear before dawn, the flight could reach the island by noon.</s>', g: 'Should takes a bare infinitive: Should the haze clear before dawn.' }
        ]
      },
      items: [
        { id: 't5l2s2-1', type: 'choose', tag: 'cond-noif', level: 'C1',
          stem: '______ the floodgates to fail during the rainy season, the whole housing estate would have to be evacuated.',
          options: ['Should', 'Were', 'Had', 'If'],
          answer: 1,
          why: 'The <em>to</em> + infinitive after the subject is the mark of <em>Were</em>. <em>Should</em> takes a bare infinitive with no <em>to</em>, <em>Had</em> takes a past participle, and <em>If</em> cannot be followed by an infinitive at all — it needs a finite verb.' },

        { id: 't5l2s2-2', type: 'choose', tag: 'cond-noif', level: 'C1',
          stem: '______ you need access to the past exam papers before Monday, the school office will open the library for you.',
          options: ['Were', 'Had', 'Should', 'Would'],
          answer: 2,
          why: '<em>Should</em> means "if by any chance", which fits the ordinary future result with <em>will</em>. <em>Were</em> would make the request unreal and demand <em>would</em> in the second half, <em>Had</em> would demand a past participle after the subject, and <em>Would</em> cannot open a conditional clause at all.' },

        { id: 't5l2s2-3', type: 'sort', tag: 'cond-noif', level: 'C1',
          stem: 'Each if-clause can be rewritten with an inversion. Which word would open it?',
          bins: [
            { key: 'had', label: 'Had …', hint: 'if + past perfect' },
            { key: 'were', label: 'Were …', hint: 'if + past simple of be' },
            { key: 'should', label: 'Should …', hint: 'if by any chance' }
          ],
          items: [
            { text: 'if the ferry <b>had grounded</b> on the sandbar', bin: 'had' },
            { text: 'if the river <b>were</b> a metre lower', bin: 'were' },
            { text: 'if you <b>happen to need</b> a second locker key', bin: 'should' },
            { text: 'if the school band <b>had rehearsed</b> the finale', bin: 'had' },
            { text: 'if the forecast <b>were</b> more reliable', bin: 'were' },
            { text: 'if the water <b>happens to rise</b> overnight', bin: 'should' }
          ],
          why: 'Each inverted opener translates one ordinary form and no other. The tense in the if-clause tells you which one every time.' },

        { id: 't5l2s2-4', type: 'spot', tag: 'cond-noif', level: 'C1',
          words: ['Should the haze', 'would clear before dawn,', 'the survey flight', 'could reach the island by noon.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 1,
          fix: 'clear before dawn',
          why: '<em>Should</em> is a modal and takes a bare infinitive. Two modals cannot stack, which is why <em>would clear</em> cannot follow it.' },

        { id: 't5l2s2-5', type: 'equiv', tag: 'cond-noif', level: 'C1',
          given: 'Were the last printing shop to close, the district would lose its only letterpress.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The printing shop has closed and the district has lost its letterpress.',
            'The printing shop is certain to close before the end of the year.',
            'The district lost its letterpress some years before the printing shop closed.',
            'If the printing shop ever closed, no letterpress would be left in the district.'
          ],
          answer: 3,
          why: '<em>Were … to</em> sets up an unreal future, so nothing has happened yet and nothing is certain, and the <em>would</em> in the result clause confirms it. Options 1 and 3 report the closure as past fact, and option 2 turns a remote possibility into a certainty.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't5l2s3', name: 'Mixed conditionals — past cause, present result', cefr: 'C1',
      theory: {
        key: 'The condition and the result can sit in different times: a past condition with a present result takes would + bare infinitive, not would have.',
        body: [
          'Ask two questions before you write anything. <strong>When is the condition?</strong> <strong>When is the result?</strong> If both are past, you get the ordinary third conditional: <em>Had the alarm been raised, the pumps would have saved the ground floor.</em> But if the condition is past and the result is <u>now</u>, the result clause changes: <em>Had the town dredged the channel in the 1970s, the deep-water piers <b>would be</b> in use today.</em> <em>Would be</em>, not <em>would have been</em>.',
          'The logic is simple once you see it. <em>Would have been</em> describes a state that would have existed and then ended. <em>Would be</em> describes a state that would exist at this moment. If the sentence is telling you about the situation today, only the second is available.',
          'The exam plants the clue for you and expects you to find it. A time word sits in the result clause — <em>today</em>, <em>now</em>, <em>still</em>, <em>at this moment</em>, <em>at present</em>. Underline it before you look at the options. The whole item collapses to one question: does the result belong to then, or to now?',
          'The mix can run the other way as well, though it is rarer: a present condition with a past result. <em>Were the channel not so shallow, the ferry would not have been diverted last rainy season.</em> The two-clock habit handles that one too, which is the point of learning the habit rather than a list of formulas.'
        ],
        simple: [
          'The two halves of a conditional do not have to be in the same time.',
          'Past condition, present result: <em>Had they dredged the channel in the 1970s, the piers would be in use today.</em> Use <em>would</em> + plain verb, not <em>would have</em>.',
          'Look for a word such as <em>today</em>, <em>now</em> or <em>still</em> in the second half. That word tells you the result is in the present.',
          'Past condition, past result keeps <em>would have</em>: <em>Had they dredged the channel, the cargo boat would have tied up that night.</em>'
        ],
        examples: [
          { s: 'Had the town dredged the channel in the 1970s, the piers <b>would be</b> in use <b>today</b>.', g: 'past condition, present result — the time word decides the form.' },
          { s: 'Had the town dredged the channel, the cargo boat <b>would have tied up</b> that night.', g: 'past condition, past result — both clocks in the past.' },
          { s: 'If the orchards had not been replanted, the valley <b>would grow</b> a very different crop <b>now</b>.', g: 'the same mix with the if kept in place.' },
          { s: '<s>Had the railway kept its service road, the route would have been a cycle path today.</s>', g: 'today marks a present result: would be a cycle path.' }
        ]
      },
      items: [
        { id: 't5l2s3-1', type: 'choose', tag: 'cond-mixed', level: 'C1',
          stem: 'Had the breakwater been extended in the 1970s, the fishing fleet ______ the outer harbour today.',
          options: ['would still use', 'would have used', 'will still use', 'still used'],
          answer: 0,
          why: 'The condition is past but <em>today</em> puts the result in the present, so the result clause takes <em>would</em> + bare infinitive. <em>Would have used</em> would place the use in the past as well, <em>will still use</em> treats an unreal condition as a real future, and <em>still used</em> reports a fact that the condition has already denied.' },

        { id: 't5l2s3-2', type: 'choose', tag: 'cond-mixed', level: 'C1',
          stem: 'If the orchards had not been replanted after the disease, the valley ______ a very different crop now.',
          options: ['would have grown', 'would grow', 'grew', 'will grow'],
          answer: 1,
          why: 'Two clocks: the replanting is past, but <em>now</em> anchors the result in the present, so the clause takes <em>would</em> + bare infinitive. <em>Would have grown</em> puts the result back in the past, <em>grew</em> states it as fact, and <em>will grow</em> makes an unreal condition into a real future. The <em>if</em> is still there, which changes nothing about the timing.' },

        { id: 't5l2s3-3', type: 'spot', tag: 'cond-mixed', level: 'C1',
          words: ['Had the railway company', 'kept its service road in repair,', 'the route would have been', 'a cycle path today.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 2,
          fix: 'the route would be',
          why: '<em>Today</em> at the end of the sentence puts the result in the present, so the result clause needs <em>would be</em>. The condition clause is correctly in the past.' },

        { id: 't5l2s3-4', type: 'cloze', tag: 'cond-mixed', level: 'C1',
          passage: 'The survey of 1904 left the marshland east of the river blank. Had the surveyors carried the new instruments, they ___(1)___ the whole of that ground in a single dry season, and the district ___(2)___ a reliable flood map today. As it is, the first accurate sheet did not appear until 1958.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['would have had', 'will have', 'had', 'would have'],
          answer: 3,
          why: '<em>Today</em> drags this result into the present, so the clause takes <em>would</em> + bare infinitive. <em>Would have had</em> would strand the map in the past, <em>will have</em> treats an unreal condition as a real future, and <em>had</em> reports as fact the very thing the condition denies. Blank (1) describes a season in 1904 and quite correctly takes <em>would have covered</em> — one condition, two different result times.' },

        { id: 't5l2s3-5', type: 'equiv', tag: 'cond-mixed', level: 'C1',
          given: 'Had the school appointed a full-time coach in 2019, its football team would be playing in the national league this season.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The school appointed a coach in 2019 and its team is playing in the national league.',
            'The school will appoint a coach so that its team can reach the national league.',
            'The school did not appoint a coach in 2019, and its team is not playing in the national league.',
            'The school appointed a coach in 2019 but its team missed the league that season.'
          ],
          answer: 2,
          why: 'An inverted past conditional reports the opposite of what happened, and <em>this season</em> shows that the consequence is being felt now rather than in 2019. Options 1 and 4 both accept the appointment as real, and option 2 turns a closed past into a plan for the future.' }
      ]
    }
  ],

  check: {
    id: 't5l2ck', name: 'Systems Check · Conditionals without if',
    items: [
      { id: 't5l2ck-1', type: 'choose', tag: 'cond-noif', level: 'C1',
        stem: '______ the flood alarm been raised an hour earlier, the pumps could have saved the ground floor.',
        options: ['If', 'Had', 'Were', 'Should'],
        answer: 1,
        why: 'Only <em>Had</em> takes a subject followed by a past participle. <em>If</em> would need its own auxiliary after the subject, <em>Were</em> would need <em>to</em> + infinitive, and <em>Should</em> would need a bare infinitive.' },

      { id: 't5l2ck-2', type: 'choose', tag: 'cond-noif', level: 'C1',
        stem: 'Should the flooding ______ before the end of April, the seed beds will need raising again.',
        options: ['returns', 'return', 'returned', 'to return'],
        answer: 1,
        why: '<em>Should</em> is a modal, so the verb after the subject is a bare infinitive. <em>Returns</em> adds a third-person ending, <em>returned</em> a past ending, and <em>to return</em> a particle that no modal allows. The <em>will</em> in the second half confirms that this is a real, if unlikely, future.' },

      { id: 't5l2ck-3', type: 'spot', tag: 'cond-mixed', level: 'C1',
        words: ['Had the two bus companies', 'agreed a common ticket in 1996,', 'the network would have been', 'far cheaper to use now.'],
        stem: 'One of the four parts is wrong. Find it.',
        answer: 2,
        fix: 'the network would be',
        why: '<em>Now</em> places the result in the present, so the result clause takes <em>would be</em>. The condition, dated 1996, is correctly in the past.' },

      { id: 't5l2ck-4', type: 'equiv', tag: 'cond-noif', level: 'C1',
        given: 'Were the weather station to move inland, its coastal record would end after ninety years.',
        stem: 'Choose the closest meaning to the original sentence.',
        options: [
          'If the weather station moved inland, its coastal record would stop.',
          'The weather station moved inland and the record stopped after ninety years.',
          'The weather station has promised never to move away from the coast.',
          'The coastal record ended ninety years after the weather station moved inland.'
        ],
        answer: 0,
        why: '<em>Were … to</em> is an unreal future, not a report: nothing has moved and nothing has ended. Options 2 and 4 both narrate the move as past fact, and option 3 invents a promise the sentence never makes.' },

      { id: 't5l2ck-5', type: 'build', tag: 'cond-mixed', level: 'C1',
        stem: 'Fact: the town did not dredge the outer channel in the 1970s, and the deep-water piers stand empty today. State the alternate reality in one sentence beginning "Had".',
        tiles: ['Had', 'the town', 'dredged', 'the outer channel', 'in the 1970s', 'the deep-water piers', 'would', 'be', 'in use', 'today'],
        solution: 'Had the town dredged the outer channel in the 1970s the deep-water piers would be in use today',
        alt: [],
        why: 'The condition is past, so it takes <em>Had</em> + subject + past participle; <em>today</em> puts the result in the present, so it takes <em>would be</em>.' },

      { id: 't5l2ck-6', type: 'choose', tag: 'cond-mixed', level: 'C1',
        stem: 'Had the tram line not been lifted in 1968, the museum ______ a working section along the river front at this moment.',
        options: ['would have operated', 'operated', 'would operate', 'will operate'],
        answer: 2,
        why: '<em>At this moment</em> is the planted time word: the result is present, so the clause takes <em>would</em> + bare infinitive. <em>Would have operated</em> strands the result in the past, <em>operated</em> states it as fact, and <em>will operate</em> treats an unreal condition as a real future. Notice too that the negative in the condition is written <em>had not been</em> and never <em>hadn\'t been</em>.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T5.levels.push({
  id: 't5l3', n: 3, name: 'Reporting without naming the source', cefr: 'C1',
  blurb: 'Academic English states a claim and withholds the person who made it — and the form of the infinitive carries the whole of the timing.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't5l3s1', name: 'It is thought that … / X is thought to …', cefr: 'C1',
      theory: {
        key: 'One claim, two frames: the it-frame keeps a full that-clause, and the subject-frame lifts the subject out and turns the rest into an infinitive.',
        body: [
          'A writer who does not want to say who made a claim has two ways of saying it. The <strong>it-frame</strong>: <em>It is thought that the first lighthouse on the point was built of teak.</em> The <strong>subject-frame</strong>: <em>The first lighthouse on the point is thought to have been built of teak.</em> Same claim, same hedging, different architecture.',
          'The conversion is mechanical. Take the subject out of the that-clause and make it the subject of the reporting verb. The reporting verb stays passive. Everything left over becomes an infinitive. <em>It is said that the school choir sang the anthem unaccompanied</em> → <em>The school choir is said to have sung the anthem unaccompanied.</em>',
          'The verbs that run both frames are the ones that report belief or speech: <em>think, believe, say, report, know, consider, expect, understand, allege, presume</em>. They are the workhorses of history writing, archaeology and any report whose evidence is thin, which is why they crowd the exam texts.',
          'The trap is mixing the frames. <em>It is thought that the old harbour light to have burned coconut oil</em> is not English, and neither is <em>It is thought the rice to have been loaded after dark</em>. The it-frame takes a finite verb inside a that-clause; the infinitive belongs only to the subject-frame. Decide which frame you are in, then finish the sentence in that frame.'
        ],
        simple: [
          'There are two ways to report a claim without saying who made it.',
          'The <em>it</em> way: <em>It is thought that the lighthouse was built of teak.</em> This keeps a normal clause with a normal verb after <em>that</em>.',
          'The <em>subject</em> way: <em>The lighthouse is thought to have been built of teak.</em> Here the subject moves to the front and the rest becomes <em>to</em> + verb.',
          'Do not mix them. <em>It is thought the lighthouse to have been built of teak</em> is wrong.'
        ],
        examples: [
          { s: '<b>It is believed that</b> the mapmaker never visited the coast he drew.', g: 'it-frame — a full that-clause with a finite verb.' },
          { s: 'The mapmaker <b>is believed</b> never <b>to have visited</b> the coast he drew.', g: 'subject-frame — the subject moves forward, the rest becomes an infinitive.' },
          { s: 'The wooden bridge over the canal <b>is thought to date</b> from 1820.', g: 'the dating is true now, so the plain infinitive is enough.' },
          { s: '<s>It is thought that the old harbour light to have burned coconut oil until 1910.</s>', g: 'the it-frame needs a finite verb: that the light burned coconut oil.' }
        ]
      },
      items: [
        { id: 't5l3s1-1', type: 'equiv', tag: 'rep-passive', level: 'C1',
          given: 'It is believed that the mapmaker never visited the coast he drew.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The mapmaker is believed never to have visited the coast he drew.',
            'The mapmaker believes that he never visited the coast he drew.',
            'The coast is believed to have been drawn by a mapmaker who visited it.',
            'It was the mapmaker who believed the coast had never been drawn.'
          ],
          answer: 0,
          why: 'The subject-frame version of the same claim: the subject of the that-clause moves in front of the reporting verb, and what is left becomes an infinitive. Option 2 names a believer and so loses the hedging, option 3 reverses the claim by making him a visitor, and option 4 turns the drawing itself into what is doubted.' },

        { id: 't5l3s1-2', type: 'choose', tag: 'rep-passive', level: 'C1',
          stem: 'Which sentence means the same as <em>It is said that the school choir sang the anthem unaccompanied</em>?',
          options: [
            'The choir is said to sing the anthem unaccompanied.',
            'The choir is said to have sung the anthem unaccompanied.',
            'The choir says that it sang the anthem unaccompanied.',
            'It says that the choir sang the anthem unaccompanied.'
          ],
          answer: 1,
          why: 'The singing is finished and lies before the saying, so the infinitive has to be perfect. Option 1 would describe the choir\'s present practice, option 3 names the choir as the source and loses the hedging, and option 4 leaves <em>it</em> without the <em>that</em>-clause frame that makes it impersonal.' },

        { id: 't5l3s1-3', type: 'build', tag: 'rep-passive', level: 'C1',
          stem: 'People think that the wooden bridge over the canal dates from 1820. Report it in the subject-frame, in one sentence beginning "The wooden bridge".',
          tiles: ['The wooden bridge', 'over the canal', 'is', 'thought', 'to', 'date', 'from 1820'],
          solution: 'The wooden bridge over the canal is thought to date from 1820',
          alt: [],
          why: 'The subject of the that-clause becomes the subject of the passive reporting verb, and the remainder becomes an infinitive. The dating holds now, so the plain infinitive is correct.' },

        { id: 't5l3s1-4', type: 'spot', tag: 'rep-passive', level: 'C1',
          words: ['It is thought that', 'the old harbour light', 'to have burned', 'coconut oil until 1910.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 2,
          fix: 'burned',
          why: 'The two frames have been mixed. Once you have written <em>It is thought that</em>, the clause that follows needs a finite verb; the infinitive belongs to the subject-frame only.' },

        { id: 't5l3s1-5', type: 'choose', tag: 'rep-passive', level: 'C1',
          stem: 'Reports say that the rice was loaded after dark. Which sentence reports the same claim in the subject-frame?',
          options: [
            'The rice is reported to be loaded after dark.',
            'It reports the rice to have been loaded after dark.',
            'The rice is reported to have been loaded after dark.',
            'The rice reports to have been loaded after dark.'
          ],
          answer: 2,
          why: 'The loading is over and the rice received it, so the infinitive is perfect and passive. Option 1 would describe a present practice, option 2 mixes the two frames by putting an infinitive after <em>it</em>, and option 4 makes the rice the reporter.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't5l3s2', name: 'The four infinitives', cefr: 'C1',
      theory: {
        key: 'Two questions decide the infinitive: is it the same time as the reporting verb or earlier, and is the subject the doer or the receiver?',
        body: [
          'Draw the grid before you look at the options. Down one side: <strong>same time</strong> and <strong>earlier</strong>. Across the top: <strong>doer</strong> and <strong>receiver</strong>. Four cells, four forms:',
          '<b>same time + doer</b> → <em>to do</em> · <b>same time + receiver</b> → <em>to be done</em> · <b>earlier + doer</b> → <em>to have done</em> · <b>earlier + receiver</b> → <em>to have been done</em>. Every reporting item you will ever meet lives in exactly one of those four cells.',
          'Question one: <strong>when?</strong> Compare the event with the reporting verb, not with today. <em>The comet is believed <b>to return</b> every 76 years</em> — the returning is as true now as the believing, so same time. <em>The tunnel is believed <b>to have been flooded</b> in 1973</em> — the flooding is finished and lies well behind the believing, so earlier. <em>Have</em> in the infinitive means one thing only: this happened before the reporting.',
          'Question two: <strong>who does it?</strong> Ask whether the subject of the sentence performed the action or received it. The seeds do not do the storing, so <em>the seeds are reported <b>to be stored</b> at minus eighteen</em>. The engineer did the designing, so <em>the engineer is believed <b>to have designed</b> the first floodgate on this river</em>. Place the sentence in a cell first. Two of the four options then die instantly, and the last two are decided by the other question.'
        ],
        simple: [
          'Ask two questions, in this order.',
          'First: is the action at the <em>same time</em> as the reporting, or <em>earlier</em>? Earlier means you need <em>have</em>.',
          'Second: does the subject <em>do</em> the action or <em>receive</em> it? Receiving means you need <em>be</em> + the third form.',
          'That gives four forms: <em>to do</em>, <em>to be done</em>, <em>to have done</em>, <em>to have been done</em>. Put the sentence in one of the four boxes before you read the options.'
        ],
        examples: [
          { s: 'The comet is believed <b>to return</b> every 76 years.', g: 'same time, and the comet does the returning.' },
          { s: 'The samples are known <b>to be kept</b> at minus eighteen degrees.', g: 'same time, but the samples receive the keeping.' },
          { s: 'The engineer is believed <b>to have designed</b> the first floodgate on this river.', g: 'earlier than the believing, and he did the designing.' },
          { s: 'The teak carvings are thought <b>to have been removed</b> before the temple was listed.', g: 'earlier than the thinking, and the carvings received the removing.' }
        ]
      },
      items: [
        { id: 't5l3s2-1', type: 'sort', tag: 'rep-infinitive', level: 'C1',
          stem: 'Put each report in the cell of the grid that its infinitive belongs to.',
          bins: [
            { key: 'a', label: 'to do', hint: 'same time, the subject acts' },
            { key: 'b', label: 'to be done', hint: 'same time, the subject receives' },
            { key: 'c', label: 'to have been done', hint: 'earlier, the subject receives' }
          ],
          items: [
            { text: 'the comet is believed <b>to return</b> every 76 years', bin: 'a' },
            { text: 'the palm-leaf texts are said <b>to be copied</b> by hand even now', bin: 'b' },
            { text: 'the wreck is thought <b>to have been stripped</b> long ago', bin: 'c' },
            { text: 'the school band is known <b>to rehearse</b> on Tuesdays', bin: 'a' },
            { text: 'the seeds are reported <b>to be stored</b> at minus eighteen', bin: 'b' },
            { text: 'the tunnel is believed <b>to have been flooded</b> in 1973', bin: 'c' }
          ],
          why: 'Two features do all the work: <em>have</em> marks an event earlier than the reporting, and <em>be</em> + past participle marks a subject that received the action rather than performed it.' },

        { id: 't5l3s2-2', type: 'choose', tag: 'rep-infinitive', level: 'C1',
          stem: 'Every sample in the university cold room is known ______ at minus eighteen degrees, and the log is checked daily.',
          options: ['to keep', 'to be kept', 'to have kept', 'to have been kept'],
          answer: 1,
          why: 'The samples receive the keeping, so the infinitive is passive, and the daily log shows the arrangement is running now, so it is the same time as the knowing and needs no <em>have</em>. <em>To keep</em> and <em>to have kept</em> both make the samples the doer, and <em>to have been kept</em> would put the storage behind the knowing and imply it has stopped.' },

        { id: 't5l3s2-3', type: 'choose', tag: 'rep-infinitive', level: 'C1',
          stem: 'The engineer who drained the marsh is believed ______ the first floodgate on this river, though the drawings have been lost.',
          options: ['to design', 'to be designed', 'to have designed', 'to have been designed'],
          answer: 2,
          why: 'He did the designing, so the infinitive is active, and the work lies far behind the believing, so it takes <em>have</em>. <em>To design</em> would put the work alongside the believing, and options 2 and 4 are passive, which would make the engineer the thing designed.' },

        { id: 't5l3s2-4', type: 'choose', tag: 'rep-infinitive', level: 'C1',
          stem: 'Several of the original teak carvings are thought ______ before the temple was listed as a heritage site.',
          options: ['to remove', 'to be removed', 'to have removed', 'to have been removed'],
          answer: 3,
          why: 'Two decisions. <em>Before the temple was listed</em> puts the event earlier than the thinking, so <em>have</em> is needed, which rules out options 1 and 2; and the carvings received the removing, so the infinitive is also passive, which rules out option 3.' },

        { id: 't5l3s2-5', type: 'build', tag: 'rep-infinitive', level: 'C1',
          stem: 'Nobody knows who photographed the summit first, but it is generally accepted that a guide did so in 1911. Report it without naming a source, beginning "The first photograph".',
          tiles: ['The first photograph', 'of the summit', 'is thought', 'to have been', 'taken', 'by a guide', 'in 1911'],
          solution: 'The first photograph of the summit is thought to have been taken by a guide in 1911',
          alt: [],
          why: 'The photograph received the taking and the taking is long before the thinking, which puts the sentence in the fourth cell of the grid.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't5l3s3', name: 'Choosing the infinitive for the time relation', cefr: 'C1',
      theory: {
        key: 'The timing is decided by the words around the gap, not by the tense of the reporting verb.',
        body: [
          'At this level the four forms are no longer the difficulty. The difficulty is reading the evidence fast enough. Almost every item plants it: a date, a <em>before</em> clause, a <em>during</em> phrase, a <em>still</em> or a <em>to this day</em>. Find that phrase first and the cell is chosen for you.',
          'A phrase such as <em>before the temple was listed</em>, <em>during the power failure of 2011</em> or <em>in the floods of 1942</em> puts the event behind the reporting verb, so the infinitive takes <em>have</em>. A phrase such as <em>to this day</em>, <em>at all times</em> or <em>every morning</em> puts it alongside the reporting verb, so it does not.',
          'A <em>by</em> phrase settles the other question on its own. <em>Three of the storm panes are thought to have been broken <b>by</b> the first wave that struck the tower</em> — an agent named after <em>by</em> means the subject received the action, and two of the four options are dead before you have finished reading.',
          'One last trap. The reporting verb may itself be in the past: <em>The ferry company <b>was understood</b> to have abandoned the crossing.</em> That changes nothing about the two questions. <em>Have</em> still means "earlier than the reporting", and the reporting simply happens to have taken place some time ago.'
        ],
        simple: [
          'Look for the time evidence before you look at the options.',
          'A date, or a phrase such as <em>before the inspection</em> or <em>during the storm</em>, means the event is earlier, so you need <em>have</em>.',
          'A phrase such as <em>to this day</em>, <em>at all times</em> or <em>every morning</em> means the event is at the same time, so you do not.',
          'If you see <em>by</em> + a person or a thing, the subject received the action and the infinitive must be passive.'
        ],
        examples: [
          { s: 'The panes are thought <b>to have been broken</b> by the first wave that struck the tower.', g: 'the by-phrase forces the passive; the finished event forces have.' },
          { s: 'The tunnel is understood <b>to be kept</b> under constant pumping to this day.', g: 'to this day means same time as the reporting.' },
          { s: 'The company was understood <b>to have abandoned</b> the crossing before the storm reached its height.', g: 'a past reporting verb does not change the two questions.' },
          { s: '<s>The seed samples are thought to lose their viability during the power failure of 2011.</s>', g: 'a dated past event needs have: to have lost their viability.' }
        ]
      },
      items: [
        { id: 't5l3s3-1', type: 'cloze', tag: 'rep-infinitive', level: 'C1',
          passage: 'The loss of the fishing boat off the headland has never been fully explained. Three of the lighthouse storm panes are thought ___(1)___ by the first wave that struck the tower, and the keeper is believed ___(2)___ the light burning until dawn with a hand lamp. No survivor was ever found.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['to have been broken', 'to be broken', 'to have broken', 'to break'],
          answer: 0,
          why: 'The <em>by</em> phrase names an agent, so the panes received the action and the infinitive must be passive, which kills options 3 and 4; and the wave struck the tower on one night long past, so it also takes <em>have</em>, which kills option 2 as well.' },

        { id: 't5l3s3-2', type: 'choose', tag: 'rep-infinitive', level: 'C1',
          stem: 'The ferry company was understood ______ the crossing before the storm reached its height.',
          options: ['to abandon', 'to be abandoned', 'to have abandoned', 'to have been abandoned'],
          answer: 2,
          why: 'The company did the abandoning, so the infinitive is active and options 2 and 4 are out, and <em>before the storm reached its height</em> places it earlier than the understanding, so option 1 is out too. A past reporting verb changes neither answer.' },

        { id: 't5l3s3-3', type: 'equiv', tag: 'rep-infinitive', level: 'C1',
          given: 'The river tunnel is believed to have been widened twice before 1940.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'It is believed that the tunnel was widened twice before 1940.',
            'It was believed in 1940 that the tunnel would need widening twice.',
            'The tunnel is believed to need widening for the second time.',
            'It is believed that the tunnel will be widened twice.'
          ],
          answer: 0,
          why: 'The perfect passive infinitive unpacks into a past passive verb inside a that-clause: the believing is present, and only the widening is past. Option 2 moves the believing itself back to 1940, and options 3 and 4 both push the widening forward into a need or a plan that has not been met.' },

        { id: 't5l3s3-4', type: 'spot', tag: 'rep-infinitive', level: 'C1',
          words: ['Several of the original', 'seed samples are thought', 'to lose their viability', 'during the power failure of 2011.'],
          stem: 'One of the four parts is wrong. Find it.',
          answer: 2,
          fix: 'to have lost their viability',
          why: 'The dated phrase at the end places the event long before the thinking, so the infinitive needs <em>have</em>. The samples did the losing, so it stays active.' },

        { id: 't5l3s3-5', type: 'choose', tag: 'rep-infinitive', level: 'C1',
          stem: 'The deepest of the drainage tunnels is understood ______ under constant pumping to this day.',
          options: ['to keep', 'to be kept', 'to have kept', 'to have been kept'],
          answer: 1,
          why: '<em>To this day</em> puts the pumping alongside the understanding, so no <em>have</em> is possible and options 3 and 4 are out; the tunnel receives the pumping rather than performing it, so option 1 is out as well.' }
      ]
    }
  ],

  check: {
    id: 't5l3ck', name: 'Systems Check · Reporting without naming the source',
    items: [
      { id: 't5l3ck-1', type: 'choose', tag: 'rep-passive', level: 'C1',
        stem: 'It is said that the salt was carried overland from the northern hills. Which sentence reports the same claim in the subject-frame?',
        options: [
          'The salt is said to carry overland from the northern hills.',
          'It is said the salt to have been carried overland from the northern hills.',
          'The salt says that it was carried overland from the northern hills.',
          'The salt is said to have been carried overland from the northern hills.'
        ],
        answer: 3,
        why: 'The subject of the that-clause moves in front of the reporting verb, and the rest becomes an infinitive — perfect because the carrying is over, passive because the salt received it. Option 1 is active and present, option 2 mixes the two frames, and option 3 makes the salt the speaker.' },

      { id: 't5l3ck-2', type: 'choose', tag: 'rep-infinitive', level: 'C1',
        stem: 'The village blacksmith is believed ______ the first practical rice thresher in the district, though he never patented it.',
        options: ['to build', 'to be built', 'to have built', 'to have been built'],
        answer: 2,
        why: 'He did the building, so the infinitive is active and options 2 and 4 are out, and the building lies well before the believing, so it takes <em>have</em>, which rules out option 1.' },

      { id: 't5l3ck-3', type: 'spot', tag: 'rep-passive', level: 'C1',
        words: ['It is known that', 'the school squad', 'to train on the river path', 'every morning before dawn.'],
        stem: 'One of the four parts is wrong. Find it.',
        answer: 2,
        fix: 'trains on the river path',
        why: 'The it-frame needs a finite verb inside the that-clause. The squad also does the training rather than receiving it, which is why the subject-frame version would be <em>is known to train</em>.' },

      { id: 't5l3ck-4', type: 'equiv', tag: 'rep-passive', level: 'C1',
        given: 'The site manager is understood to have been overruled by the safety inspectors.',
        stem: 'Choose the closest meaning to the original sentence.',
        options: [
          'The site manager overruled the safety inspectors, it is understood.',
          'The safety inspectors are understood to be following the site manager.',
          'The site manager understands that the inspectors will overrule him.',
          'It is understood that the safety inspectors overruled the site manager.'
        ],
        answer: 3,
        why: 'The passive infinitive with <em>by</em> names the doer, so the inspectors acted on the manager and not the other way round, which is what option 1 reverses. Option 2 turns overruling into obedience, and option 3 both names the manager as the source and moves the event into the future.' },

      { id: 't5l3ck-5', type: 'cloze', tag: 'rep-infinitive', level: 'C1',
        passage: 'The first weather report from the island station reached the mainland in 1931. The station is thought ___(1)___ by a single keeper for its first three rainy seasons, and its readings are known ___(2)___ by the weather service to this day. The original register was lost in a fire.',
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['to hold', 'to be held', 'to have held', 'to have been held'],
        answer: 1,
        why: '<em>To this day</em> places the holding alongside the knowing, so no <em>have</em> is possible and options 3 and 4 are out, and the readings receive the holding rather than performing it, which rules out option 1. Blank (1) is dated to the 1930s and takes <em>to have been run</em>.' },

      { id: 't5l3ck-6', type: 'choose', tag: 'rep-infinitive', level: 'C1',
        stem: 'Which sentence is correct?',
        options: [
          'The night watchman is thought to have been dismissed some weeks before the break-in.',
          'The night watchman is thought to be dismissed some weeks before the break-in.',
          'The night watchman is thought to have dismissed some weeks before the break-in.',
          'It is thought the night watchman to have been dismissed some weeks before the break-in.'
        ],
        answer: 0,
        why: 'The dismissal is dated before the break-in and the watchman received it, so the infinitive must be perfect and passive. Option 2 drops the <em>have</em> and so loses the earlier timing, option 3 is active and leaves the verb without an object, and option 4 mixes the two frames, which the it-frame never allows.' }
    ]
  }
});

TOPICS.push(T5);
