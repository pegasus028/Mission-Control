/* ===========================================================================
   SYSTEM 02 — Participial Clauses
   Built on the class deck "Participial Clauses" (10/09/2026). Its wording is
   used deliberately: participial clause, non-finite verb, finite main verb,
   the Crystallized Upgrade, the Stack, the dangling participle crash.
   =========================================================================== */

var T2 = {
  id: 't2', n: 2, code: 'System 02', art: 'layers',
  name: 'Participial Clauses',
  cefr: 'B2–C1',
  blurb: 'A clause with no tense and no subject of its own, borrowing both from the main clause. Get the borrowing wrong and the sentence collapses.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T2.levels.push({
  id: 't2l1', n: 1, name: 'What a participial clause is', cefr: 'B2',
  blurb: 'The definition, and the two participles it can be built on.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't2l1s1', name: 'The non-finite verb', cefr: 'B2',
      theory: {
        key: 'A participial clause revolves around a participle, which is a special type of non-finite verb — and non-finite means it has no tense and no subject of its own.',
        body: [
          'Three properties define it, and all three are tested.',
          'First, <strong>it cannot stand on its own as a complete sentence</strong>. <em>Working through the night.</em> is not a sentence; it is a fragment waiting for a main clause.',
          'Second, <strong>it does not show its own tense</strong> — past, present or future — <strong>and it usually lacks its own subject</strong>. You cannot ask when <em>working</em> happened without reading the rest of the sentence.',
          'Third, and following from the other two, <strong>it relies entirely on the main clause to give it context</strong>. The main clause supplies the time, through its <em>finite main verb</em>, and it supplies the subject. That is the whole system: one tensed verb runs the sentence, and the participle hangs off it.',
          'So every sentence you write has exactly one place where tense lives. <em>Walking down the street, I <u>saw</u> a dog.</em> — <em>Walking</em> is the non-finite verb in the participial clause; <em>saw</em> is the finite main verb in the independent clause. Find the finite verb first and the rest of the sentence organises itself around it.'
        ],
        simple: [
          'A participial clause is built on a participle — an <em>-ing</em> or <em>-ed</em> form. This is called a <em>non-finite</em> verb.',
          'It has no tense of its own and usually no subject of its own. It cannot be a sentence by itself. It takes its time and its subject from the main clause.',
          'Every sentence needs one <em>finite</em> verb — a verb with a tense. In <em>Walking down the street, I saw a dog</em>, that verb is <em>saw</em>.'
        ],
        examples: [
          { s: '<b>Walking</b> down the street, I <b>saw</b> a dog.', g: 'Walking = non-finite verb in the participial clause. Saw = finite main verb.' },
          { s: '<b>Exhausted</b> by the climb, she <b>sat</b> down on the wall.', g: 'same shape with a past participle.' },
          { s: '<s>Working through the night.</s>', g: 'a fragment — no finite verb, so no sentence.' },
          { s: 'The clause tells you <b>nothing</b> about time by itself.', g: 'tense lives only in the main clause.' }
        ]
      },
      items: [
        { id: 't2l1s1-1', type: 'choose', tag: 'part-what', level: 'B2',
          stem: 'In <em>Sorting the bottles by colour, the volunteer noticed a cracked crate</em>, which is the finite main verb?',
          options: ['Sorting', 'volunteer', 'bottles', 'noticed'],
          answer: 3,
          why: '<em>Noticed</em> is the only word here carrying tense, so it runs the sentence. <em>Sorting</em> is non-finite and borrows its time from <em>noticed</em>; <em>volunteer</em> and <em>bottles</em> are nouns, and a noun can never be the verb a sentence is built on.' },

        { id: 't2l1s1-2', type: 'choose', tag: 'part-what', level: 'B2',
          stem: 'Which of these is <u>not</u> a property of a participial clause?',
          options: [
            'It cannot stand on its own as a complete sentence.',
            'It usually has no subject of its own.',
            'It shows its own tense independently of the main clause.',
            'It relies on the main clause to give it context.'
          ],
          answer: 2,
          why: 'Non-finite means exactly this: no tense of its own, which is why the same participial clause can sit in a past, present or future sentence unchanged. The other three are all genuine properties: it is a fragment on its own, it normally has no subject, and it takes both its subject and its time from the main clause.' },

        { id: 't2l1s1-3', type: 'sort', tag: 'part-what', level: 'B2',
          stem: 'Which of these can stand alone as a sentence, and which is a fragment?',
          bins: [
            { key: 's', label: 'A complete sentence', hint: 'it has a finite verb' },
            { key: 'f', label: 'A fragment', hint: 'no tensed verb anywhere' }
          ],
          items: [
            { text: 'The engineer measured the footbridge.', bin: 's' },
            { text: 'Measuring the footbridge from below.', bin: 'f' },
            { text: 'Damaged by the monsoon floods.', bin: 'f' },
            { text: 'The classroom floor was damaged by the floods.', bin: 's' },
            { text: 'Having checked the attendance list twice.', bin: 'f' },
            { text: 'She checked the attendance list twice.', bin: 's' }
          ],
          why: 'A sentence needs one verb carrying tense. Participles carry none, so a clause built only on a participle is always a fragment.' },

        { id: 't2l1s1-4', type: 'choose', tag: 'part-what', level: 'B2',
          stem: 'Why can the same participial clause open a past sentence and a future one without changing?',
          options: [
            'Because participles have a neutral tense of their own.',
            'Because the subject of the clause decides the tense.',
            'Because participial clauses always describe the present.',
            'Because the participle takes its time from the finite main verb.'
          ],
          answer: 3,
          why: 'The clause has no tense of its own to change: <em>Arriving early, she found the computer room locked</em> and <em>Arriving early, she will find the computer room locked</em> differ only in the finite verb. Participles have no neutral tense of their own, the clause has no subject of its own to decide anything, and nothing pins a participle to present time.' },

        { id: 't2l1s1-5', type: 'spot', tag: 'part-what', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Checking the ropes on the fishing boat', 'at first light,', 'the owner finding', 'two of them badly frayed.'],
          answer: 2,
          fix: 'the owner found',
          why: 'Both verbs have gone non-finite, so the sentence has no tense anywhere. One of them has to become the finite main verb.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't2l1s2', name: 'Present participles (-ing): the active action', cefr: 'B2',
      theory: {
        key: 'An -ing participle shows an active action happening at the same time as the main verb — and the doer is the subject of the main clause.',
        body: [
          'The <em>-ing</em> clause creates a <strong>simultaneous environment</strong> for the main clause. The two actions physically overlap: while the subject is doing one, it is doing the other. <em>Testing the system, the engineers found a flaw.</em> The testing and the finding are the same stretch of time.',
          'Build it by deletion, and do the deletion on paper until it is automatic. Start from two full clauses — <em>Because the team worked through the night, they released the patch</em> — then drop the conjunction, drop the repeated subject, and turn the verb into <em>-ing</em>: <em>Working through the night, the team released the patch.</em>',
          'The compression is not only about time. An <em>-ing</em> clause can carry a reason (<em>Being new to the town, he took the wrong bus</em>), a result (<em>The river burst its banks, flooding the lower fields</em>) or a condition. What it never carries is its own subject — which is where the next level\'s trouble begins.',
          'One useful distinction the deck draws: a <em>dynamic</em> <em>-ing</em> (<em>testing</em>, <em>running</em>, <em>lifting</em>) shows applied physical effort, while a stative one (<em>being</em>, <em>knowing</em>, <em>owning</em>) shows a state radiating out from the subject. <em>Being from another country, he did not know the local customs</em> compresses <em>Because he was from another country</em>. Both kinds work as a simultaneous environment; only the first involves anyone doing anything.'
        ],
        simple: [
          'An <em>-ing</em> participle means the subject of the main clause is <u>doing</u> that action, at the same time as the main verb.',
          'Make one by taking two clauses, deleting the joining word and the repeated subject, and changing the verb to <em>-ing</em>. <em>Because the team worked all night, they released the patch</em> → <em>Working all night, the team released the patch.</em>',
          'It can also give a reason: <em>Being from another country, he did not know the customs</em> means <em>Because he was from another country…</em>'
        ],
        examples: [
          { s: '<b>Testing</b> the system, the engineers <b>found</b> a flaw.', g: 'the two actions overlap in time.' },
          { s: '<b>Being</b> from another country, he <b>did not know</b> the customs.', g: 'compresses "Because he was from another country".' },
          { s: 'The river burst its banks, <b>flooding</b> the lower fields.', g: 'an -ing clause can also carry the result.' },
          { s: '<s>Being the oldest bridge in the city, the district office repaired it.</s>', g: 'the district office is not the oldest bridge — see Level 3.' }
        ]
      },
      items: [
        { id: 't2l1s2-1', type: 'choose', tag: 'part-active', level: 'B2',
          stem: '______ the drying rice uncovered overnight, the farmers lost a whole batch to the rain.',
          options: ['To leave', 'Leaving', 'Left', 'Having left to'],
          answer: 1,
          why: 'The farmers did the leaving, so the participle is active: <em>-ing</em>. <em>To leave</em> turns a cause into a purpose, as though they wanted to lose the rice; <em>Left</em> is passive and would mean the farmers themselves were left behind; <em>Having left to</em> is not a form at all — a perfect participle cannot be followed by <em>to</em> and a bare noun.' },

        { id: 't2l1s2-2', type: 'build', tag: 'part-active', level: 'B2',
          stem: 'Two facts: the school band practised in a borrowed classroom; it finished the whole set list in four days. Join them, starting with the practising.',
          tiles: ['Practising', 'in', 'a borrowed classroom,', 'the school band', 'finished', 'the whole set list', 'in four days'],
          solution: 'Practising in a borrowed classroom, the school band finished the whole set list in four days',
          alt: [],
          why: 'Drop the conjunction and the repeated subject, and make the first verb <em>-ing</em>. The band is the doer of both actions, which is what licenses the reduction.' },

        { id: 't2l1s2-3', type: 'equiv', tag: 'part-active', level: 'B2',
          given: 'Because she knew the back streets by heart, the rider took the shortcut past the market.',
          stem: 'Which participial version says the same thing?',
          options: [
            'Knowing the back streets by heart, the rider took the shortcut past the market.',
            'Known for the back streets, the rider took the shortcut past the market.',
            'Having known the back streets, the shortcut past the market was taken.',
            'To know the back streets, the rider took the shortcut past the market.'
          ],
          answer: 0,
          why: 'The rider is the one who knows, so the participle is active <em>-ing</em>. Option 2 is passive and says she is famous for the back streets, option 3 loses the rider altogether and hands the knowing to the shortcut, and option 4 turns her reason for going that way into a purpose.' },

        { id: 't2l1s2-4', type: 'choose', tag: 'part-active', level: 'B2',
          stem: 'The storm tore the roof from the science block, ______ three classrooms to the rain.',
          options: ['to expose', 'exposed', 'exposing', 'having exposed'],
          answer: 2,
          why: 'An <em>-ing</em> clause after the main clause carries the result of it. <em>To expose</em> would make the damage deliberate, <em>exposed</em> is passive and leaves the classrooms doing nothing to the rain, and <em>having exposed</em> would place the exposure before the storm that caused it.' },

        { id: 't2l1s2-5', type: 'spot', tag: 'part-active', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Followed the canal road north,', 'the cycling group', 'reached the temple', 'shortly before dusk.'],
          answer: 0,
          fix: 'Following the canal road north,',
          why: 'The group did the following, so the participle must be active. <em>Followed</em> is passive and would mean somebody else was following the group up the road.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't2l1s3', name: 'Past participles: the crystallized upgrade', cefr: 'B2',
      theory: {
        key: 'A past participle clause (-ed, -en, -d, -t or -n) shows a passive action or a completed state: the subject of the main clause receives it.',
        body: [
          'Where the <em>-ing</em> form is kinetic and still running, the past participle marks energy that has <strong>already collapsed and hardened</strong>. The action is over; what is left is a finished condition that the subject carries into the main clause.',
          'So the subject is the <strong>passive receiver</strong>. <em>Exhausted by the marathon, she collapsed on the grass.</em> Something exhausted her; she did not exhaust anything. <em>Trained on large datasets, the model performed well</em> — somebody trained it.',
          'Note the full range of endings the deck gives: <em>-ed, -en, -d, -t</em> or <em>-n</em>. <em>Written</em>, <em>built</em>, <em>shown</em>, <em>made</em> and <em>damaged</em> are all past participles, and irregular spelling changes nothing about how the clause behaves.',
          'The test is one question, asked in one direction. <strong>Does the subject of the main clause do this action, or get it?</strong> Does, and you need <em>-ing</em>. Gets, and you need the past participle. Asking it the other way round — "does this sound right?" — is how students end up writing <em>Writing in plain English, the guidance reached more readers</em>, which claims the guidance did the writing.'
        ],
        simple: [
          'A past participle clause means the subject of the main clause <u>receives</u> the action. <em>Exhausted by the marathon, she collapsed</em> — the marathon exhausted her.',
          'Past participles end in <em>-ed, -en, -d, -t</em> or <em>-n</em>: damaged, written, made, built, shown.',
          'Always ask one question: does the subject <u>do</u> this action or <u>get</u> it? Do → <em>-ing</em>. Get → past participle.'
        ],
        examples: [
          { s: '<b>Exhausted</b> by the marathon, she <b>collapsed</b> on the grass.', g: 'the subject receives the action.' },
          { s: '<b>Written</b> in plain English, the guidance <b>reached</b> more readers.', g: 'somebody wrote the guidance.' },
          { s: '<b>Built</b> on soft clay, the market hall <b>settled</b> by nearly a metre.', g: 'irregular participle, same behaviour.' },
          { s: '<s>Writing in plain English, the guidance reached more readers.</s>', g: 'this says the guidance did the writing.' }
        ]
      },
      items: [
        { id: 't2l1s3-1', type: 'choose', tag: 'part-passive', level: 'B2',
          stem: '______ on soft clay, the new market hall settled by nearly a metre in twenty years.',
          options: ['Building', 'Having built', 'To build', 'Built'],
          answer: 3,
          why: 'The hall received the building, so the participle is passive. <em>Building</em> and <em>Having built</em> are both active and would claim the hall built something itself, and <em>To build</em> turns the clay into a purpose rather than a site.' },

        { id: 't2l1s3-2', type: 'sort', tag: 'part-passive', level: 'B2',
          stem: 'Does the subject of the main clause <em>do</em> the action, or <em>get</em> it?',
          bins: [
            { key: 'do', label: 'Does it → -ing', hint: 'active' },
            { key: 'get', label: 'Gets it → past participle', hint: 'passive' }
          ],
          items: [
            { text: '___ the receipts, the shop assistant found an error', bin: 'do' },
            { text: '___ in 1912, the wooden bridge still stands', bin: 'get' },
            { text: '___ by the smoke, the bees stayed calm', bin: 'get' },
            { text: '___ two languages, she translated it herself', bin: 'do' },
            { text: '___ the pier, the ferry sounded its horn', bin: 'do' },
            { text: '___ badly in the last flood, the clinic was rebuilt', bin: 'get' }
          ],
          why: 'One question, asked in one direction, settles every case: <em>do</em> gives the <em>-ing</em> form, <em>get</em> gives the past participle.' },

        { id: 't2l1s3-3', type: 'choose', tag: 'part-passive', level: 'B2',
          stem: 'Which sentence is correct?',
          options: [
            'Damaging in the flood, the school library was rebuilt twice.',
            'Damaged in the flood, the school library was rebuilt twice.',
            'To damage in the flood, the school library was rebuilt twice.',
            'Having damaged in the flood, the school library was rebuilt twice.'
          ],
          answer: 1,
          why: 'The library received the damage, so the past participle is the only honest form. Option 1 is active and makes the library the thing doing the damage, option 3 turns the flood into a purpose, and option 4 is the trap: <em>having damaged</em> is also active and would mean the library damaged something else first.' },

        { id: 't2l1s3-4', type: 'equiv', tag: 'part-passive', level: 'B2+',
          given: 'The flood warning was written in English only, and so it was ignored by most of the residents.',
          stem: 'Which participial version says the same thing?',
          options: [
            'Writing in English only, the flood warning was ignored by most residents.',
            'Written in English only, the flood warning was ignored by most residents.',
            'Having written in English only, the flood warning was ignored by most residents.',
            'To be written in English only, the flood warning was ignored by most residents.'
          ],
          answer: 1,
          why: 'The warning was written by somebody else, so the clause is passive. Options 1 and 3 are both active and make the warning the writer, and option 4 turns a finished piece of writing into something still waiting to be done.' },

        { id: 't2l1s3-5', type: 'spot', tag: 'part-passive', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Storing in a damp store room', 'for over a decade,', 'the exam papers', 'had begun to fall apart.'],
          answer: 0,
          fix: 'Stored in a damp store room',
          why: 'The papers were put in the store room by somebody; they did not store anything themselves. A passive meaning needs the past participle.' }
      ]
    }
  ],

  check: {
    id: 't2l1ck', name: 'Systems Check · What a participial clause is',
    items: [
      { id: 't2l1ck-1', type: 'choose', tag: 'part-what', level: 'B2',
        stem: 'In <em>Weighed at the loading bay, each sack was logged by number</em>, which verb is finite?',
        options: ['Weighed', 'number', 'loading bay', 'was logged'],
        answer: 3,
        why: 'Only <em>was logged</em> carries tense. <em>Weighed</em> here is a non-finite past participle opening the participial clause, while <em>number</em> and <em>loading bay</em> are nouns and cannot be verbs at all.' },

      { id: 't2l1ck-2', type: 'choose', tag: 'part-active', level: 'B2',
        stem: '______ the dye pots every hour, the trainees kept the colour even across the whole batch of cloth.',
        options: ['Stirred', 'To stir', 'Stirring', 'Been stirring'],
        answer: 2,
        why: 'The trainees did the stirring, so the participle is active. <em>Stirred</em> is passive and would mean somebody stirred the trainees, <em>To stir</em> states a purpose rather than an overlapping action, and <em>Been stirring</em> cannot open a clause because <em>been</em> needs <em>having</em> in front of it.' },

      { id: 't2l1ck-3', type: 'choose', tag: 'part-passive', level: 'B2',
        stem: '______ from a single block of sandstone, the doorway has survived three rebuildings of the temple.',
        options: ['Carved', 'Carving', 'Having carved', 'To carve'],
        answer: 0,
        why: 'Somebody carved the doorway; the doorway carved nothing. The subject receives, so the participle is the past one. <em>Carving</em> and <em>Having carved</em> are both active and make the doorway the carver, and <em>To carve</em> reads as a purpose for surviving.' },

      { id: 't2l1ck-4', type: 'spot', tag: 'part-what', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Arriving before the water rose,', 'the rescue crew', 'securing the boat', 'with four steel cables.'],
        answer: 2,
        fix: 'secured the boat',
        why: 'There is no finite verb in the sentence, so it says nothing. One participle must take tense and become the main verb.' },

      { id: 't2l1ck-5', type: 'equiv', tag: 'part-passive', level: 'B2+',
        given: 'The song was remixed in 2019, and it lost its original ending.',
        stem: 'Which participial version says the same thing?',
        options: [
          'Remixing in 2019, the song lost its original ending.',
          'Having remixed in 2019, the song lost its original ending.',
          'Remixed in 2019, the song lost its original ending.',
          'To remix in 2019, the song lost its original ending.'
        ],
        answer: 2,
        why: 'The song received the remixing, so the past participle is right. Options 1 and 2 are active and make the song the producer, and option 4 turns a finished remix into a plan.' },

      { id: 't2l1ck-6', type: 'sort', tag: 'part-what', level: 'B2+',
        stem: 'Sentence or fragment?',
        bins: [
          { key: 's', label: 'A complete sentence', hint: 'one tensed verb' },
          { key: 'f', label: 'A fragment', hint: 'no tense anywhere' }
        ],
        items: [
          { text: 'Delivered in sealed boxes.', bin: 'f' },
          { text: 'The boxes were delivered sealed.', bin: 's' },
          { text: 'Having counted every box.', bin: 'f' },
          { text: 'She counted every box.', bin: 's' },
          { text: 'The power cut lasting four days.', bin: 'f' },
          { text: 'The power cut lasted four days.', bin: 's' }
        ],
        why: 'Note the last pair. <em>Lasting</em> and <em>lasted</em> differ by two letters and by everything else: only one of them is a verb that can run a sentence.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T2.levels.push({
  id: 't2l2', n: 2, name: 'Time, voice and reduction', cefr: 'B2+',
  blurb: 'Perfect participles for sequence, the passive stack, and the relative clause that quietly loses its pronoun.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't2l2s1', name: 'Having + past participle', cefr: 'B2+',
      theory: {
        key: 'Having + past participle says the participle action finished before the main clause — and the subject did it.',
        body: [
          'The plain <em>-ing</em> clause says the two actions overlap. <em>Having</em> + past participle says one finished first. <em>Having checked the seals, the technician closed the tank.</em> The checking is complete before the closing begins.',
          'Note what has <u>not</u> changed: the subject still does both actions. <em>Having</em> is active. Whoever closed the tank is the same person who checked the seals.',
          'Use it only when the sequence matters. If the two actions overlap, the plain form is better, and sprinkling <em>having</em> through a paragraph signals a time order you do not mean. Examiners test it in the opposite direction, by giving you a sentence where the order is obvious from the meaning and seeing whether you notice.',
          'The negative goes in front: <em>Not having received a reply, the office wrote again.</em>'
        ],
        simple: [
          '<em>Having</em> + past participle means the first action finished before the second one started.',
          '<em>Having checked the seals, the technician closed the tank</em> — first the check, then the closing. The same person does both.',
          'Use the plain <em>-ing</em> form when the two actions happen at the same time.'
        ],
        examples: [
          { s: '<b>Having checked</b> the seals, the technician <b>closed</b> the tank.', g: 'checking finished first; same subject does both.' },
          { s: '<b>Having read</b> every page of the guidebook, the class <b>chose</b> the river route.', g: 'sequence, and the class is active throughout.' },
          { s: '<b>Not having received</b> a reply, the office <b>wrote</b> again.', g: 'the negative goes in front of "having".' },
          { s: '<b>Checking</b> the seals, the technician <b>hummed</b> to herself.', g: 'overlap, so no "having".' }
        ]
      },
      items: [
        { id: 't2l2s1-1', type: 'choose', tag: 'part-perfect', level: 'B2+',
          stem: '______ every message in the class group chat, the teacher worked out who had started the rumour.',
          options: ['Reading', 'To read', 'Read', 'Having read'],
          answer: 3,
          why: 'The reading had to finish before the working out could happen, and the teacher did both, which is exactly what <em>having</em> + past participle encodes. <em>Reading</em> would make the two overlap, <em>To read</em> states a purpose, and <em>Read</em> is passive and would mean somebody had read the teacher.' },

        { id: 't2l2s1-2', type: 'choose', tag: 'part-perfect', level: 'B2+',
          stem: 'Which sentence describes two actions that happened <u>at the same time</u>?',
          options: [
            'Having counted the morning delivery, the shopkeeper labelled each shelf.',
            'Counting the morning delivery, the shopkeeper listened to the radio.',
            'Having labelled each shelf, the shopkeeper swept the floor.',
            'Having swept the floor, the shopkeeper locked the door.'
          ],
          answer: 1,
          why: 'Only the plain <em>-ing</em> form leaves the two actions overlapping: the counting and the listening fill the same stretch of time. Options 1, 3 and 4 all open with <em>having</em>, which always splits the pair into a first and a second — the counting before the labelling, the labelling before the sweeping, the sweeping before the locking.' },

        { id: 't2l2s1-3', type: 'build', tag: 'part-perfect', level: 'B2+',
          stem: 'Two facts, in this order: the organisers read all forty complaints; they then withdrew the plan. Join them so the sequence is explicit.',
          tiles: ['Having read', 'all forty complaints,', 'the organisers', 'withdrew', 'the plan'],
          solution: 'Having read all forty complaints, the organisers withdrew the plan',
          alt: [],
          why: 'The perfect participle is what marks the first action as complete before the second one starts. A plain <em>reading</em> here would suggest they were still working through the complaints as they withdrew the plan.' },

        { id: 't2l2s1-4', type: 'choose', tag: 'part-perfect', level: 'B2+',
          stem: '______ a reply from the supplier by the end of the month, the buyers cancelled the order.',
          options: ['Not having received', 'Not receiving', 'Having been received', 'Not to receive'],
          answer: 0,
          why: 'The negative goes in front of <em>having</em>, and the silence is complete before the cancellation. <em>Not receiving</em> loses the sequence and makes the two overlap, <em>Having been received</em> is passive and would make the buyers the thing that arrived from the supplier, and <em>Not to receive</em> is an infinitive, which cannot open a participial clause at all.' },

        { id: 't2l2s1-5', type: 'spot', tag: 'part-perfect', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Having surveyed every flooded street', 'on foot,', 'the map was drawn', 'in a single rainy season.'],
          answer: 2,
          fix: 'the students drew the map',
          why: '<em>Having surveyed</em> is active, so the subject of the main clause must be whoever did the surveying. A map cannot walk round the streets and survey them.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't2l2s2', name: 'Having been + past participle — the Stack', cefr: 'C1',
      theory: {
        key: 'Having been + past participle means the action finished first AND the subject received it.',
        body: [
          'This is the hardest form in the system, and examiners like it precisely because it tests two things in one blank. Read it as a stack of three pieces, from the top down:',
          '<strong>told</strong> — the kinetic action is over, collapsed into a finished artefact. <strong>been</strong> — the existence of that artefact is sealed inside a closed box of past time. <strong>having</strong> — the active tether that carries that sealed box forward to the subject of the main clause. Put together: <em>the subject actively carries a finished, passive era into the present moment.</em>',
          'When the exam offers you <em>training / trained / having trained / having been trained</em>, do not read for sound. Ask two questions in this order. <strong>Did it finish before the main clause?</strong> If yes, you need <em>having</em>. <strong>Did the subject do it or get it?</strong> If it got it, you need <em>been</em> + past participle. Two yes answers give you <em>having been</em> + past participle and nothing else.',
          'One structural warning from the same deck. You may open a clause with <em>Having</em> analysed…, but never with <em>Had</em> analysed…. <em>Having</em> supplies the active energy needed to tether the finished action to a subject; <em>Had</em> is a collapsed, solid form that cannot form that bridge, and a clause beginning <em>Had analysed…</em> simply floats with nothing to attach to. <em>Had</em> at the front of a clause does something completely different — it replaces <em>if</em>, and it belongs to System 05.'
        ],
        simple: [
          '<em>Having been</em> + past participle means two things at once: the action finished first, and the subject <u>received</u> it.',
          '<em>Having been rewritten twice, the manual finally passed review.</em> Somebody rewrote the manual, and that happened before it passed.',
          'Ask two questions. Did it finish first? Then <em>having</em>. Did the subject get the action rather than do it? Then <em>been</em> + past participle.'
        ],
        examples: [
          { s: '<b>Having been rewritten</b> twice, the manual finally <b>passed</b> review.', g: 'finished first, and the manual received it.' },
          { s: '<b>Having rewritten</b> the manual twice, the editor <b>gave up</b>.', g: 'finished first, but the editor did it.' },
          { s: '<b>Being rewritten</b> at the time, the manual <b>was</b> unavailable.', g: 'receives the action, but still in progress.' },
          { s: '<s>Had analysed the samples, the team published.</s>', g: 'a clause cannot open with "Had" + participle in this way.' }
        ]
      },
      items: [
        { id: 't2l2s2-1', type: 'choose', tag: 'part-perfect-passive', level: 'C1',
          stem: '______ twice by different teachers, the revision booklet finally went to print a month before the exams.',
          options: ['Revising', 'Revised', 'Having revised', 'Having been revised'],
          answer: 3,
          why: 'Two yes answers: the revising finished before the printing, and the booklet received it. <em>Revising</em> and <em>Having revised</em> are both active and make the booklet the one doing the work, and plain <em>Revised</em> is passive but loses the sequence, leaving the two events side by side.' },

        { id: 't2l2s2-2', type: 'choose', tag: 'part-perfect-passive', level: 'C1',
          stem: '______ the whole collection into three rooms, the museum team reopened the building a week early.',
          options: ['Having moved', 'Moved', 'Being moved', 'Having been moved'],
          answer: 0,
          why: 'The team did the moving, so the active perfect participle is right. The other three are all passive and make the team itself the thing that was carried into the rooms, and none of them can take <em>the whole collection</em> as an object.' },

        { id: 't2l2s2-3', type: 'sort', tag: 'part-perfect-passive', level: 'C1',
          stem: 'Sort each opening by what it claims about the subject of the main clause.',
          bins: [
            { key: 'did', label: 'The subject did it', hint: 'active' },
            { key: 'got', label: 'The subject received it', hint: 'passive' }
          ],
          items: [
            { text: 'Having inspected the engine,', bin: 'did' },
            { text: 'Having been inspected,', bin: 'got' },
            { text: 'Being inspected,', bin: 'got' },
            { text: 'Inspecting the engine,', bin: 'did' },
            { text: 'Having certified the ferry,', bin: 'did' },
            { text: 'Having been certified,', bin: 'got' }
          ],
          why: 'The word <em>been</em> is the whole signal. Without it the subject is the doer; with it the subject is the receiver.' },

        { id: 't2l2s2-4', type: 'choose', tag: 'part-perfect-passive', level: 'C1',
          stem: 'Which opening can <u>never</u> begin an English clause in this pattern?',
          options: ['Having been warned…', 'Having warned…', 'Had warned…', 'Warned…'],
          answer: 2,
          why: '<em>Had</em> is a finite form. At the front of a clause it can only replace <em>if</em> — <em>Had they warned us…</em> — and it can never tether a participle to the subject the way <em>having</em> does. The other three are all non-finite and attach without trouble: <em>Having been warned</em> is perfect and passive, <em>Having warned</em> is perfect and active, and bare <em>Warned</em> is a plain past participle.' },

        { id: 't2l2s2-5', type: 'spot', tag: 'part-perfect-passive', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Having sold at auction', 'three times in ten years,', 'the carved door panel', 'left the country in 1911.'],
          answer: 0,
          fix: 'Having been sold at auction',
          why: 'The panel was sold by other people. Without <em>been</em>, the sentence claims the panel itself did the selling.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't2l2s3', name: 'Reduced relative clauses', cefr: 'B2+',
      theory: {
        key: 'A relative clause can lose its pronoun and its form of be, leaving a bare participle: the data which was collected in June → the data collected in June.',
        body: [
          'Academic English is full of participles that are really relative clauses with the middle taken out. <em>The team which is running the trial</em> becomes <em>the team running the trial</em>. <em>The samples that were stored at −20°C</em> becomes <em>the samples stored at −20°C</em>.',
          'Two rules govern it. First, <strong>the participle keeps the voice of the original</strong>: an active relative clause reduces to <em>-ing</em>, a passive one to the past participle. Second — and this is the one students break — <strong>only a subject relative clause can reduce</strong>.',
          '<em>The report that the head teacher approved</em> cannot lose its <em>that</em>, because the head teacher, not the report, is the subject of <em>approved</em>. Delete it and you get <em>the report the head teacher approved</em>, which is a different (and still correct) structure, but you cannot turn it into a participle: <em>the report approving the head teacher</em> says something else entirely.',
          'Reading in this direction is just as useful as writing it. When a dense sentence stalls you, expand the participle back into a full relative clause and the sentence usually opens up.'
        ],
        simple: [
          'A relative clause can drop its pronoun and its <em>be</em>: <em>the data which was collected in June</em> → <em>the data collected in June</em>.',
          'Active clauses become <em>-ing</em>: <em>the team which is running the trial</em> → <em>the team running the trial</em>.',
          'This only works when the noun is the <u>subject</u> of the relative clause. <em>The report that the head teacher approved</em> cannot become a participle.'
        ],
        examples: [
          { s: 'the samples <b>stored</b> at four degrees', g: '= which were stored — passive, so past participle.' },
          { s: 'the ferries <b>serving</b> the outer islands', g: '= which serve — active, so -ing.' },
          { s: 'the rainfall records <b>kept</b> by the district office', g: 'passive reduction with the agent retained.' },
          { s: '<s>the scholarship the committee approving</s>', g: 'object relative clauses cannot reduce to a participle.' }
        ]
      },
      items: [
        { id: 't2l2s3-1', type: 'choose', tag: 'part-reduced-rel', level: 'B2+',
          stem: 'Reduce this: <em>The water samples that were collected upstream of the town are still unopened.</em>',
          options: [
            'The water samples collected upstream of the town are still unopened.',
            'The water samples collecting upstream of the town are still unopened.',
            'The water samples having collected upstream of the town are still unopened.',
            'The water samples to collect upstream of the town are still unopened.'
          ],
          answer: 0,
          why: 'The original is passive (<em>were collected</em>), so the reduction keeps the past participle. Options 2 and 3 are active and make the samples the collectors, and option 4 turns a completed collection into one somebody still has to do.' },

        { id: 't2l2s3-2', type: 'choose', tag: 'part-reduced-rel', level: 'B2+',
          stem: 'Reduce this: <em>The two ferries that serve the outer islands were both built in 1968.</em>',
          options: [
            'The two ferries served the outer islands were both built in 1968.',
            'The two ferries to serve the outer islands were both built in 1968.',
            'The two ferries serving the outer islands were both built in 1968.',
            'The two ferries having served the outer islands were both built in 1968.'
          ],
          answer: 2,
          why: 'The original is active — the ferries serve the islands — so it reduces to <em>-ing</em>. The past participle <em>served</em> flips the voice and makes the islands serve the ferries. <em>To serve</em> turns a fact about what the ferries do now into a plan for what they are meant to do. <em>Having served</em> is the trap worth naming: it says the serving finished before 1968, which contradicts a clause that describes the ferries as still on the route.' },

        { id: 't2l2s3-3', type: 'choose', tag: 'part-reduced-rel', level: 'C1',
          stem: 'Which relative clause <u>cannot</u> be reduced to a participle?',
          options: [
            'the notebook that records the daily sales',
            'the notebook that the shop owner kept',
            'the notebook that was kept behind the counter',
            'the notebook that is missing three pages'
          ],
          answer: 1,
          why: 'In option 2 the notebook is the object of <em>kept</em> and the shop owner is the subject, so there is no subject to hand over to a participle. In options 1, 3 and 4 the notebook is the subject of its own clause, so each of them reduces cleanly to <em>recording the daily sales</em>, <em>kept behind the counter</em> and <em>missing three pages</em>.' },

        { id: 't2l2s3-4', type: 'equiv', tag: 'part-reduced-rel', level: 'B2+',
          given: 'The solar panels, which had been removed for cleaning, were refitted in the wrong order.',
          stem: 'Which reduction preserves the meaning?',
          options: [
            'The solar panels removed for cleaning were refitted in the wrong order.',
            'The solar panels removing for cleaning were refitted in the wrong order.',
            'The solar panels having removed for cleaning were refitted in the wrong order.',
            'The solar panels to be removed for cleaning were refitted in the wrong order.'
          ],
          answer: 0,
          why: 'Drop <em>which had been</em> and keep the past participle. Options 2 and 3 are active and would mean the panels removed something themselves, and option 4 changes a completed removal into a planned one.' },

        { id: 't2l2s3-5', type: 'spot', tag: 'part-reduced-rel', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The rice varieties', 'holding in the national seed bank', 'since 1974', 'have never been planted.'],
          answer: 1,
          fix: 'held in the national seed bank',
          why: 'The full clause is <em>which have been held</em> — passive. The seeds are stored by somebody; they hold nothing themselves.' }
      ]
    }
  ],

  check: {
    id: 't2l2ck', name: 'Systems Check · Time, voice and reduction',
    items: [
      { id: 't2l2ck-1', type: 'choose', tag: 'part-perfect', level: 'B2+',
        stem: '______ the grass on the whole playing field by hand, the volunteers stopped for lunch at two.',
        options: ['Cut', 'Having cut', 'Having been cut', 'To cut'],
        answer: 1,
        why: 'The cutting finished first and the volunteers did it, so the active perfect participle is right. <em>Cut</em> and <em>Having been cut</em> are both passive and would mean somebody had cut the volunteers, and <em>To cut</em> states a purpose instead of a finished first action.' },

      { id: 't2l2ck-2', type: 'choose', tag: 'part-perfect-passive', level: 'C1',
        stem: '______ for eight years in a damp store room, the temple banner needed a full year of restoration.',
        options: ['Having kept', 'Keeping', 'Having been kept', 'To have kept'],
        answer: 2,
        why: 'Finished before the restoration, and the banner received the keeping, so both conditions point to <em>having been</em> + past participle. <em>Having kept</em> and <em>Keeping</em> are active and make the banner the storekeeper, and <em>To have kept</em> is an infinitive, which cannot open a participial clause.' },

      { id: 't2l2ck-3', type: 'choose', tag: 'part-reduced-rel', level: 'B2+',
        stem: 'Reduce this: <em>The bridges that carry the northern railway are inspected every rainy season.</em>',
        options: [
          'The bridges carried the northern railway are inspected every rainy season.',
          'The bridges to carry the northern railway are inspected every rainy season.',
          'The bridges having carried the northern railway are inspected every rainy season.',
          'The bridges carrying the northern railway are inspected every rainy season.'
        ],
        answer: 3,
        why: 'The relative clause is active, so it reduces to <em>-ing</em>, and the main verb keeps its own passive form. Option 1 flips the voice and leaves two finite-looking verbs in a row, option 2 turns a fact into a plan, and option 3 puts the carrying in the finished past, which contradicts bridges still in use.' },

      { id: 't2l2ck-4', type: 'spot', tag: 'part-perfect-passive', level: 'C1',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Having damaged by floodwater', 'in three successive rainy seasons,', 'the brickwork', 'was finally repaired.'],
        answer: 0,
        fix: 'Having been damaged by floodwater',
        why: 'The <em>by</em> phrase names the agent, which tells you the clause is passive, so <em>been</em> cannot be left out.' },

      { id: 't2l2ck-5', type: 'choose', tag: 'part-perfect-passive', level: 'C1',
        stem: 'Which opening correctly completes: <em>______, the debating teams took their seats without further argument.</em>',
        options: [
          'Having settled the question of speaking time',
          'Having been settled the question of speaking time',
          'Being settled the question of speaking time',
          'Settled the question of speaking time'
        ],
        answer: 0,
        why: 'The teams are the subject of the main clause and they did the settling, so the participle is active and can take an object. Options 2, 3 and 4 are all passive, so they make the teams the thing that was settled and leave <em>the question of speaking time</em> stranded with nothing to attach to.' },

      { id: 't2l2ck-6', type: 'build', tag: 'part-reduced-rel', level: 'C1',
        stem: 'Rewrite without the relative pronoun: <em>The maps which were drawn during the 1911 survey are now in the national archive.</em>',
        tiles: ['The maps', 'drawn', 'during the 1911 survey', 'are', 'now', 'in the national archive'],
        solution: 'The maps drawn during the 1911 survey are now in the national archive',
        alt: [],
        why: 'Delete <em>which were</em> and the passive participle carries the whole clause.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T2.levels.push({
  id: 't2l3', n: 3, name: 'Getting the subject right', cefr: 'C1',
  blurb: 'The three ways a participle goes wrong: it attaches to the wrong subject, it stands where a real verb was needed, or it faces the wrong way.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't2l3s1', name: 'The dangling participle', cefr: 'C1',
      theory: {
        key: 'A participial clause attaches to the subject of the main clause. If that subject cannot perform the action, the sentence has crashed.',
        body: [
          'The deck stages this as a physics crash, and the metaphor is exact. The opening participle sets up <strong>a hot, kinetic environment that requires an active engine</strong>. The main clause then supplies a subject. If that subject is a <strong>static object with no kinetic engine</strong>, the grammar crashes, because you cannot attach a radiating process to a static architecture.',
          'In plain terms: <em>Walking down the street, the trees were beautiful.</em> The trees were not walking. The sentence is grammatically well formed and completely broken.',
          'The check takes two seconds. Read the participle and the main-clause subject together with nothing in between — <em>Walking … the trees</em> — and ask whether that subject can do it. This works because a participial clause has no subject of its own; it can only borrow the nearest one, and the nearest one is the subject of the main clause.',
          'There are two repairs, and they say different things. Change the subject so it can do the action — <em>Walking down the street, I thought the trees were beautiful</em> — or give the clause its own subject and a finite verb: <em>As I walked down the street, the trees were beautiful.</em> Choose by what you actually mean.'
        ],
        simple: [
          'A participial clause borrows the subject of the main clause. So that subject must be able to do the action.',
          '<em>Walking down the street, the trees were beautiful.</em> This says the trees were walking. It is wrong.',
          'Read the participle and the subject together with nothing in between: <em>Walking … the trees</em>. If it cannot work, fix the subject or write two full clauses.'
        ],
        examples: [
          { s: '<s>Walking down the street, the trees were beautiful.</s>', g: 'the trees cannot walk — the classic dangler.' },
          { s: '<b>Walking</b> down the street, <b>I</b> thought the trees were beautiful.', g: 'repair one: change the subject.' },
          { s: 'As <b>I walked</b> down the street, the trees were beautiful.', g: 'repair two: give the clause its own subject and tense.' },
          { s: '<s>Having repaired the roof, the community hall was reopened.</s>', g: 'a hall cannot repair a roof.' }
        ]
      },
      items: [
        { id: 't2l3s1-1', type: 'choose', tag: 'part-dangling', level: 'C1',
          stem: 'Which sentence contains a dangling participle?',
          options: [
            'The rider, studying the traffic app, chose the back road.',
            'Studying the traffic app, the rider chose the back road.',
            'Having studied the traffic app, the rider chose the back road.',
            'Studying the traffic app, the back road looked quicker.'
          ],
          answer: 3,
          why: 'A road cannot study anything. Read the pair with nothing in between — <em>Studying … the back road</em> — and the crash is obvious. In the first three the rider is the subject the participle borrows, so all three hold together; only the order and the timing differ.' },

        { id: 't2l3s1-2', type: 'choose', tag: 'part-dangling', level: 'C1',
          stem: 'Repair this: <em>Having repaired the roof at last, the community hall was reopened for the new year festival.</em>',
          options: [
            'Having repaired the roof at last, the community hall reopened for the new year festival.',
            'Having been repaired the roof at last, the community hall was reopened for the new year festival.',
            'The roof having been repaired at last, the community hall was reopened for the new year festival.',
            'Repairing the roof at last, the community hall was reopened for the new year festival.'
          ],
          answer: 2,
          why: 'Giving the participial clause its own subject — <em>the roof</em> — is the cleanest repair. Options 1 and 4 still make the hall the repairer, and option 2 puts a passive participle in front of an object it cannot take.' },

        { id: 't2l3s1-3', type: 'choose', tag: 'part-dangling', level: 'C1',
          stem: 'Which completion is correct? <em>Weighed and labelled at the collection point, ______</em>',
          options: [
            'each crate of mangoes went straight into the cold store.',
            'the paperwork took most of the morning.',
            'the inspector recorded every crate.',
            'it was a long afternoon for the whole crew.'
          ],
          answer: 0,
          why: 'The crates were weighed and labelled, so only a subject that receives that action can follow. The paperwork was filled in rather than weighed, the inspector did the weighing instead of receiving it, and the empty <em>it</em> of option 4 names nothing that could go on a scale.' },

        { id: 't2l3s1-4', type: 'spot', tag: 'part-dangling', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Rising steadily since 1990,', 'the district office has recorded', 'the water level in the main canal', 'at the same gauge every week.'],
          answer: 0,
          fix: 'As the level has risen steadily since 1990,',
          why: 'The office is not rising; the water is. Notice where the repair has to go. The main clause is sound and its subject cannot change, because the office is the thing that does the recording. So the opening phrase is what must be rebuilt: give it a subject of its own and <em>rising</em> no longer has to borrow one.' },

        { id: 't2l3s1-5', type: 'judge', tag: 'part-dangling', level: 'C1',
          given: 'Translating the old letters page by page, the handwriting became easier to read.',
          stem: 'The participial clause attaches correctly to the subject of the main clause.',
          answer: 1,
          why: 'False. Handwriting cannot translate anything. The subject has to be the translator: <em>Translating the old letters page by page, she found the handwriting easier to read.</em>' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't2l3s2', name: 'Participle or finite verb? The fragment trap', cefr: 'C1',
      theory: {
        key: 'Every complete sentence needs at least one verb carrying tense. A participle is not one.',
        body: [
          'This is the trap that reads most fluently and fails most completely. A long noun phrase, then an <em>-ing</em> word, then more detail, then a full stop — and the sentence has said nothing, because nothing in it is tensed.',
          '<em>The opening of the new night market driving a sharp rise in the shop rents along the road last year.</em> Read aloud it sounds like a sentence. It is a noun phrase with a participle stuck to it. The repair is to promote the participle: <em>…night market <u>drove</u> a sharp rise…</em>',
          'Train the eye rather than the ear. In any long sentence, find the verb that could change if you moved the sentence into the past or the future. If there is none, the sentence is a fragment however many verbs it appears to contain.',
          'The reverse error also exists, and appears in the same exam section: a finite verb sitting where a participle was needed, usually in a clause that already has one main verb. <em>The flood survey was completed in March, produced three volumes of maps</em> needs <em>producing</em>, because the sentence has used up its single main verb.'
        ],
        simple: [
          'A sentence needs one verb with a tense. A participle (<em>-ing</em> or <em>-ed</em>) has no tense, so it cannot be the only verb.',
          '<em>The opening of the night market driving a rise in rents.</em> — not a sentence. <em>The opening of the night market drove a rise in rents.</em> — a sentence.',
          'Find the verb that would change if you moved the sentence to the past or the future. If there is none, it is a fragment.'
        ],
        examples: [
          { s: '<s>The opening of the night market <b>driving</b> a sharp rise in rents.</s>', g: 'no tensed verb anywhere — a fragment.' },
          { s: 'The opening of the night market <b>drove</b> a sharp rise in rents.', g: 'promote the participle and the sentence works.' },
          { s: 'The flood survey <b>was completed</b> in March, <b>producing</b> three volumes of maps.', g: 'one main verb, one participle — correct.' },
          { s: '<s>The flood survey was completed in March, produced three volumes of maps.</s>', g: 'two finite verbs, no conjunction.' }
        ]
      },
      items: [
        { id: 't2l3s2-1', type: 'spot', tag: 'part-fragment', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Heavy rain through October', 'leaving the lower fields', 'under water for three weeks', 'before the pumps arrived.'],
          answer: 1,
          fix: 'left the lower fields',
          why: 'Nothing in the main clause carries tense. <em>Arrived</em> is finite but it sits inside the time clause, so the sentence still has no verb of its own. The participle has to be promoted: <em>Heavy rain … left the lower fields</em>. The other three parts are sound — a subject with its time phrase, a state, and a subordinate clause.' },

        { id: 't2l3s2-2', type: 'choose', tag: 'part-fragment', level: 'C1',
          stem: 'Which of these is a complete sentence?',
          options: [
            'The closure of the ferry route cutting the island off for a decade.',
            'The closure of the ferry route, which cut the island off for a decade.',
            'The closure of the ferry route cut the island off for a decade.',
            'The closure of the ferry route, having cut the island off for a decade.'
          ],
          answer: 2,
          why: 'Only option 3 has a verb carrying tense in its main clause. Option 2 buries its only tensed verb inside a relative clause, so the main clause never gets one, and options 1 and 4 are participial phrases with no tense anywhere at all.' },

        { id: 't2l3s2-3', type: 'spot', tag: 'part-fragment', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The flood survey', 'was completed in March,', 'produced three volumes', 'of revised maps.'],
          answer: 2,
          fix: 'producing three volumes',
          why: 'The sentence already has its finite verb in <em>was completed</em>. A second one without a conjunction has to become a participle.' },

        { id: 't2l3s2-4', type: 'choose', tag: 'part-fragment', level: 'C1',
          stem: 'Repair this fragment: <em>The arrival of the new printers in 2018 transforming the size of the school magazine.</em>',
          options: [
            'The arrival of the new printers in 2018, transforming the size of the school magazine.',
            'Transforming the size of the school magazine, the arrival of the new printers in 2018.',
            'The arrival of the new printers in 2018, which transforming the size of the school magazine.',
            'The arrival of the new printers in 2018 transformed the size of the school magazine.'
          ],
          answer: 3,
          why: 'Promote the participle to a tensed verb and the noun phrase finally has something to do. Options 1 and 2 only move the participle about, and option 3 adds a relative pronoun without giving it a finite verb, so all three are still fragments.' },

        { id: 't2l3s2-5', type: 'choose', tag: 'part-fragment', level: 'C1',
          stem: 'In which sentence does the <em>-ing</em> word correctly stay non-finite?',
          options: [
            'The railway line reopened in June, carrying passengers again by August.',
            'The railway line reopening in June, carrying passengers again by August.',
            'The railway line reopening in June and carrying passengers again by August.',
            'Reopening in June, carrying passengers again by August.'
          ],
          answer: 0,
          why: 'Option 1 has one finite verb, <em>reopened</em>, and one participle hanging off it. Options 2 and 3 leave both verbs in the <em>-ing</em> form, and option 4 has no subject either, so none of the three can stand as a sentence.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't2l3s3', name: '-ed and -ing adjectives', cefr: 'B2+',
      theory: {
        key: '-ing describes the thing that causes the feeling; -ed describes the one who has it.',
        body: [
          'A confusing instruction leaves a confused reader. The instruction is the source, so it takes <em>-ing</em>; the reader is the receiver, so takes <em>-ed</em>. Exactly the same split as the participial clauses in Level 1 — emitter and receiver — worn down into ordinary adjectives.',
          'Draw the arrow. Source → receiver. <em>alarming news / alarmed residents</em>. <em>tiring shift / tired crew</em>. <em>disappointing figures / disappointed investors</em>.',
          'Two pairs are worth learning separately because the exam uses them. <em>concerning</em> and <em>concerned</em>: a situation is <strong>concerning</strong> — it causes worry — and a person is <strong>concerned</strong>. A situation can never be "concerned", although <em>the parties concerned</em> exists with a quite different meaning, "involved". And <em>confusing</em> versus <em>confused</em>, which is the pair examiners reach for most often because the wrong one still reads smoothly.',
          'There is also a quick noun test. Put the adjective in front of a noun and say both aloud: <em>a boring lecture</em> and <em>a bored student</em> are both real, and swapping them describes a different room entirely.'
        ],
        simple: [
          '<em>-ing</em> = the thing that <u>causes</u> the feeling. <em>-ed</em> = the person who <u>has</u> it.',
          '<em>A confusing instruction</em> leaves <em>a confused reader</em>.',
          'A situation is <em>concerning</em>, never "concerned". A person is <em>concerned</em>.'
        ],
        examples: [
          { s: 'The delay was <b>frustrating</b>; the passengers were <b>frustrated</b>.', g: 'source takes -ing, receiver takes -ed.' },
          { s: 'a <b>concerning</b> rise in absences', g: 'the rise causes worry.' },
          { s: 'the <b>concerned</b> parents at the meeting', g: 'the parents feel it.' },
          { s: '<s>a concerned rise in absences</s>', g: 'a rise cannot feel worry.' }
        ]
      },
      items: [
        { id: 't2l3s3-1', type: 'choose', tag: 'part-edging-adj', level: 'B2+',
          stem: 'The sharp fall in the number of fish in the bay over four seasons is deeply ______.',
          options: ['worried', 'worrying', 'worry', 'worryful'],
          answer: 1,
          why: 'The fall causes the worry, so it takes <em>-ing</em>. A fall cannot itself feel <em>worried</em> — only a person can — <em>worry</em> is a noun and cannot follow <em>deeply</em> in this slot, and <em>worryful</em> is not an English word.' },

        { id: 't2l3s3-2', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The volunteers on the gate', 'were exhausting', 'after eleven hours', 'in the afternoon heat.'],
          answer: 1,
          fix: 'were exhausted',
          why: 'The volunteers had the tiredness; the eleven hours in the heat caused it. Source takes <em>-ing</em>, receiver takes <em>-ed</em>, so the people are <em>exhausted</em> and the shift was <em>exhausting</em>. The other three parts are sound — a subject with its prepositional phrase, a duration, and the circumstance that produced it.' },

        { id: 't2l3s3-3', type: 'sort', tag: 'part-edging-adj', level: 'B2+',
          stem: 'Which form does each noun need?',
          bins: [
            { key: 'ing', label: '-ing (it causes the feeling)', hint: 'the source' },
            { key: 'ed', label: '-ed (it has the feeling)', hint: 'the receiver' }
          ],
          items: [
            { text: 'the ___ delay', bin: 'ing' },
            { text: 'the ___ passengers', bin: 'ed' },
            { text: 'an ___ discovery', bin: 'ing' },
            { text: 'the ___ researchers', bin: 'ed' },
            { text: 'a ___ set of results', bin: 'ing' },
            { text: 'the ___ examiners', bin: 'ed' }
          ],
          why: 'Things cause; people feel. The only common exception is a person deliberately being described as a source, as in <em>a boring speaker</em>.' },

        { id: 't2l3s3-4', type: 'choose', tag: 'part-edging-adj', level: 'C1',
          stem: 'Which sentence uses both forms correctly?',
          options: [
            'The tiring exam timetable left an exhausting class with no free day.',
            'The tired exam timetable left an exhausted class with no free day.',
            'The tiring exam timetable left an exhausted class with no free day.',
            'The tired exam timetable left an exhausting class with no free day.'
          ],
          answer: 2,
          why: 'The timetable is the source and the class the receiver, so <em>-ing</em> goes on the timetable and <em>-ed</em> on the class. Option 1 makes the class the thing that wears people out, option 2 makes the timetable feel tired, and option 4 gets both the wrong way round.' },

        { id: 't2l3s3-5', type: 'choose', tag: 'part-edging-adj', level: 'C1',
          stem: 'In which sentence does <em>concerned</em> mean "involved" rather than "worried"?',
          options: [
            'The concerned residents wrote to the water department.',
            'All parties concerned received a copy of the report.',
            'Teachers were concerned about the drop in attendance.',
            'She looked concerned when the results came through.'
          ],
          answer: 1,
          why: 'After the noun, <em>concerned</em> means "involved in this matter". In option 1 it sits before the noun and means "worried", and in options 3 and 4 it follows a linking verb and describes a feeling, so all three carry the worried sense.' }
      ]
    }
  ],

  check: {
    id: 't2l3ck', name: 'Systems Check · Getting the subject right',
    items: [
      { id: 't2l3ck-1', type: 'choose', tag: 'part-dangling', level: 'C1',
        stem: 'Which sentence is correct?',
        options: [
          'Wrapped against the damp, the librarian stored the old photographs in the strongroom.',
          'Wrapped against the damp, the strongroom held the old photographs.',
          'Wrapping against the damp, the old photographs went into the strongroom.',
          'Wrapped against the damp, the old photographs went into the strongroom.'
        ],
        answer: 3,
        why: 'The photographs were wrapped, so they must be the subject of the main clause. In option 1 the librarian was not wrapped and in option 2 the strongroom was not, and option 3 is active, which would mean the photographs wrapped something themselves.' },

      { id: 't2l3ck-2', type: 'spot', tag: 'part-fragment', level: 'C1',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The reopening of the old railway', 'in the dry season of 1994', 'bringing several hundred thousand visitors', 'to the town each year.'],
        answer: 2,
        fix: 'brought several hundred thousand visitors',
        why: 'No verb in the sentence carries tense, so there is no sentence. Promote the participle.' },

      { id: 't2l3ck-3', type: 'choose', tag: 'part-edging-adj', level: 'B2+',
        stem: 'The pattern in the rainfall figures is ______, and the rice farmers we spoke to were plainly ______.',
        options: ['worried … worrying', 'worrying … worried', 'worried … worried', 'worrying … worrying'],
        answer: 1,
        why: 'The figures are the source and the farmers the receivers, so the order is <em>-ing</em> then <em>-ed</em>. Option 1 reverses it, option 3 has the figures feeling worry, and option 4 has the farmers causing it in other people.' },

      { id: 't2l3ck-4', type: 'judge', tag: 'part-dangling', level: 'C1',
        given: 'Having stood empty for thirty years, the district office bought the old cinema for a single baht.',
        stem: 'The participial clause attaches correctly to the subject of the main clause.',
        answer: 1,
        why: 'False. The district office did not stand empty; the cinema did. Either make the cinema the subject or give the clause its own: <em>The cinema having stood empty for thirty years, the district office bought it…</em>' },

      { id: 't2l3ck-5', type: 'choose', tag: 'part-fragment', level: 'C1',
        stem: 'Which version is a complete, correctly built sentence?',
        options: [
          'The collapse of the river wall closed the footpath for a year, forcing walkers onto the road.',
          'The collapse of the river wall closing the footpath for a year, forcing walkers onto the road.',
          'The collapse of the river wall closed the footpath for a year, forced walkers onto the road.',
          'Closing the footpath for a year, forcing walkers onto the road, the collapse of the river wall.'
        ],
        answer: 0,
        why: 'One finite verb, <em>closed</em>, and one participial clause carrying the result. Option 3 has two finite verbs with no conjunction between them, and options 2 and 4 have no finite verb at all, so both are fragments.' },

      { id: 't2l3ck-6', type: 'choose', tag: 'part-dangling', level: 'C1',
        stem: 'Which completion is correct? <em>Having been left out of the original inventory, ______</em>',
        options: [
          'the museum staff found the two carvings in a storeroom.',
          'the two carvings were only rediscovered in 2003.',
          'nobody had thought to look for the two carvings.',
          'it took three years to trace the two carvings.'
        ],
        answer: 1,
        why: '<em>Having been left out</em> is passive, so the subject must be the thing that was left out — the carvings. The staff in option 1 were never on the list, <em>nobody</em> in option 3 cannot be left out of an inventory, and the empty <em>it</em> of option 4 names nothing at all.' }
    ]
  }
});

TOPICS.push(T2);
