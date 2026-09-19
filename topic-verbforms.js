/* ===========================================================================
   SYSTEM 01 — Verb forms: -ing and to
   Four levels. Everything the final tests about what follows a verb, what an
   -ing word is doing in a sentence, and how a verb pattern carries meaning.
   =========================================================================== */

var T1 = {
  id: 't1', n: 1, code: 'System 01', art: 'chip',
  name: 'Verb Forms — -ing and to',
  cefr: 'B1+–C1',
  blurb: 'The single largest source of marks in the grammar paper. What follows a verb is not a choice you can make by ear.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T1.levels.push({
  id: 't1l1', n: 1, name: 'Naming the form', cefr: 'B1+',
  blurb: 'Before you can choose a form you have to see what the -ing word is doing, and know which verbs allow which.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't1l1s1', name: 'What job is this -ing word doing?', cefr: 'B1+',
      theory: {
        key: 'One ending, three jobs: an -ing word can be a noun, an adjective, or part of the verb — and you must decide which before anything else.',
        body: [
          'English uses the same <em>-ing</em> ending for three completely different jobs, and it never marks which one it means. <em>Charging</em> in <em>Charging the tablets overnight costs almost nothing</em> is a noun. <em>Charging</em> in <em>the charging point outside the canteen</em> is an adjective. <em>Charging</em> in <em>the riders are charging their scooters</em> is part of the verb. Three jobs, one spelling.',
          'The test for the noun job — grammarians call it the <strong>gerund</strong> — is replacement. If you can put <em>it</em> in the slot and the sentence still stands, the <em>-ing</em> word is a noun: <em>It costs almost nothing.</em> That matters enormously, because a noun subject is <u>singular</u>, however many plural words trail behind it.',
          'The test for the adjective job is position: it sits directly in front of a noun and describes it. The test for the verb job is the presence of a form of <em>be</em> — <em>is</em>, <em>are</em>, <em>was</em>, <em>were</em>, <em>has been</em> — somewhere in front of it.',
          'Do this first, every time. Nearly every mark lost in the error-identification section of the exam is lost by students who chose a form before they had decided what the word was doing.'
        ],
        simple: [
          'The <em>-ing</em> ending does three jobs. It can be a noun (<em>Swimming is good for you</em>), an adjective (<em>a swimming pool</em>), or part of the verb (<em>she is swimming</em>).',
          'To test for the noun job, try putting <em>it</em> in the same place. If the sentence still works, the <em>-ing</em> word is a noun — and it is singular.',
          'Always ask "what job is this word doing?" before you choose an answer.'
        ],
        examples: [
          { s: '<b>Sorting</b> the plastic bottles took the whole lunch break.', g: 'noun — replace with "it": It took the whole lunch break.' },
          { s: 'She volunteers in the <b>sorting</b> room at the recycling centre.', g: 'adjective — it sits in front of a noun and describes it.' },
          { s: 'The volunteers <b>are sorting</b> the bottles now.', g: 'part of the verb — there is a form of "be" in front of it.' },
          { s: '<s>Sorting the plastic bottles take the whole lunch break.</s>', g: 'the noun job is singular, so the verb must be "takes".' }
        ]
      },
      items: [
        { id: 't1l1s1-1', type: 'choose', tag: 'vform-pos', level: 'B1+',
          stem: 'In <em>Training the new delivery riders took most of March</em>, what job does <em>Training</em> do?',
          options: [
            'It is the main verb of the sentence.',
            'It is part of a continuous tense.',
            'It is an adjective describing the riders.',
            'It is a noun, and it is the subject.'
          ],
          answer: 3,
          why: 'Replace it with <em>it</em>: <em>It took most of March.</em> The sentence survives, so the <em>-ing</em> word is a noun, and it is the subject — which is why the verb is the singular <em>took</em>. It cannot be the main verb, because <em>took</em> already is one; it is not part of a continuous tense, because no form of <em>be</em> stands in front of it; and it is not an adjective, because it does not describe the riders, it names the activity.' },

        { id: 't1l1s1-2', type: 'choose', tag: 'vform-pos', level: 'B1+',
          stem: 'In which sentence is <em>cycling</em> working as an adjective?',
          options: [
            'Cycling to school has cut her travel costs.',
            'Her training plan involves cycling three days a week.',
            'The cycling club meets by the canal on Sunday mornings.',
            'She was cycling home when the storm broke.'
          ],
          answer: 2,
          why: 'An adjective sits directly in front of a noun and describes it — <em>the cycling club</em> tells you what kind of club it is. In option 1 the word is the subject of the sentence, in option 2 it is the object of <em>involves</em>, and in option 4 it follows <em>was</em> and is part of the verb.' },

        { id: 't1l1s1-3', type: 'sort', tag: 'vform-pos', level: 'B1+',
          stem: 'Each phrase contains one <em>-ing</em> word in bold. Put each one in the box for the job it is doing.',
          bins: [
            { key: 'n', label: 'Noun', hint: 'you could say "it" instead' },
            { key: 'a', label: 'Adjective', hint: 'it describes the noun after it' },
            { key: 'v', label: 'Part of the verb', hint: 'there is a form of "be"' }
          ],
          items: [
            { text: '<b>Charging</b> overnight costs less', bin: 'n' },
            { text: 'the <b>charging</b> point', bin: 'a' },
            { text: 'they are <b>charging</b> the scooters', bin: 'v' },
            { text: 'a <b>working</b> lunch', bin: 'a' },
            { text: 'she kept <b>working</b>', bin: 'n' },
            { text: 'the lift is <b>working</b> again', bin: 'v' }
          ],
          why: 'The noun cards can all be replaced by <em>it</em>, the adjective cards all stand in front of a noun, and the verb cards all have a form of <em>be</em> in front of them. The card to watch is <em>she kept working</em>: after <em>keep</em> the <em>-ing</em> form is a noun-like object, not part of the verb, because <em>keep</em> is the verb and <em>working</em> is what she kept.' },

        { id: 't1l1s1-4', type: 'spot', tag: 'vform-subject-ing', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Maintain the canal pumps', 'has become', 'the district office\'s largest', 'annual expense.'],
          answer: 0,
          fix: 'Maintaining the canal pumps',
          why: 'A bare verb cannot be a subject in English. Only the <em>-ing</em> form can do the noun job, so it must be <em>Maintaining</em>. The other three parts are sound: the singular <em>has</em> is exactly what an <em>-ing</em> subject requires, the possessive is correctly formed, and <em>annual expense</em> is a normal complement after <em>become</em>.' },

        { id: 't1l1s1-5', type: 'choose', tag: 'vform-pos', level: 'B1+',
          stem: 'Which sentence contains an <em>-ing</em> word that is part of the verb?',
          options: [
            'The district office is reviewing the parking charges.',
            'Reviewing the charges will take a month.',
            'The committee discussed reviewing the charges.',
            'The reviewing officer signed the report.'
          ],
          answer: 0,
          why: '<em>is reviewing</em> has a form of <em>be</em> in front of it, so it is part of the verb. In option 2 the <em>-ing</em> word is the subject, in option 3 it is the object of <em>discussed</em>, and in option 4 it stands in front of <em>officer</em> as an adjective.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't1l1s2', name: 'Verbs that must take -ing', cefr: 'B1+',
      theory: {
        key: 'A closed list of verbs is always followed by -ing and never by to: avoid, risk, suggest, admit, deny, involve, consider, keep, practise, postpone, resist, mind, finish, delay.',
        body: [
          'There is no rule here that will save you. Which verbs take <em>-ing</em> is a fact about the vocabulary of English, like the gender of a French noun, and it has to be learned. Pretending otherwise wastes time.',
          'There is, however, a pattern worth holding on to. Most of these verbs look <strong>backwards or sideways</strong> at an action that is already in view: you <em>admit</em>, <em>deny</em>, <em>consider</em> or <em>risk</em> something that already exists as an idea. The verbs that take <em>to</em> mostly look <strong>forwards</strong> at something that has not happened yet. It is a tendency, not a law, but it makes the list stick.',
          'Learn them in chunks rather than alphabetically: <em>admit / deny</em> go together, <em>postpone / delay / put off</em> go together, <em>avoid / resist / risk</em> go together, <em>suggest / consider / involve</em> go together.',
          'One warning. <em>Suggest</em> also allows a that-clause — <em>I suggest we move the meeting</em> — but it never allows <em>to</em>. <em>I suggest to move the meeting</em> is the single commonest verb-pattern error in Thai upper-secondary writing.'
        ],
        simple: [
          'Some verbs are always followed by <em>-ing</em>. You cannot use <em>to</em> after them. The main ones are: avoid, risk, suggest, admit, deny, involve, consider, keep, practise, postpone, resist, mind, finish, delay.',
          'You have to learn this list. There is no rule that tells you which verbs are on it.',
          'Be careful with <em>suggest</em>. You can say <em>I suggest moving it</em> or <em>I suggest we move it</em>, but never <em>I suggest to move it</em>.'
        ],
        examples: [
          { s: 'The school <b>postponed opening</b> the new canteen until May.', g: 'postpone + -ing.' },
          { s: 'He <b>denied taking</b> the keys from the staff room.', g: 'deny + -ing — the action is already in view.' },
          { s: 'Nobody <b>minded waiting</b> another twenty minutes for the bus.', g: 'mind + -ing.' },
          { s: '<s>The head of year suggested to postpone the fire drill.</s>', g: 'suggest never takes "to": suggested postponing.' }
        ]
      },
      items: [
        { id: 't1l1s2-1', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'The temple fair committee has postponed ______ the outdoor stage until the ground dries out.',
          options: ['to build', 'building', 'build', 'to have built'],
          answer: 1,
          why: '<em>Postpone</em> belongs to the closed list that takes only <em>-ing</em>, so <em>building</em> is the only form it allows. <em>To build</em> and the bare <em>build</em> cannot follow it at all, and the perfect <em>to have built</em> would put the building before the postponing, which is impossible.' },

        { id: 't1l1s2-2', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'The rider denied ______ through the red light, but the camera at the junction said otherwise.',
          options: ['to ride', 'having to ride', 'ride', 'riding'],
          answer: 3,
          why: '<em>Deny</em> takes <em>-ing</em>, so only <em>riding</em> fits. <em>To ride</em> and the bare <em>ride</em> cannot follow <em>deny</em> at all, and <em>having to ride</em> is real English but means "being obliged to ride", which is not what he is denying.' },

        { id: 't1l1s2-3', type: 'spot', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['At the end of the meeting,', 'the coach suggested to swap', 'the two training slots', 'that clash on Fridays.'],
          answer: 1,
          fix: 'suggested swapping',
          why: '<em>Suggest</em> allows <em>-ing</em> or a that-clause, never <em>to</em> + infinitive, so part two must read <em>suggested swapping</em>. The other three parts are sound: a fronted time phrase, the object of the swapping, and a relative clause describing it. This is the most frequent verb-pattern error at this level.' },

        { id: 't1l1s2-4', type: 'gap', tag: 'vform-gerund-verb', level: 'B1+',
          lines: [
            { who: 'Coach', text: 'We can\'t train while the pitch is still under water from last night\'s storm.' },
            { who: 'Captain', text: 'Then I suggest ___ the session to Thursday evening.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['to move', 'moving', 'move', 'to moving'],
          answer: 1,
          why: 'After <em>suggest</em> the verb takes <em>-ing</em>. <em>To move</em> is the very error the list exists to stop; the bare <em>move</em> would need a subject in front of it, as in <em>I suggest we move the session</em>; and <em>to moving</em> mixes the infinitive marker with the gerund and is never possible.' },

        { id: 't1l1s2-5', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'The restoration team could not risk ______ the temple mural before the humidity was under control.',
          options: ['cleaning', 'to clean', 'clean', 'to cleaning'],
          answer: 0,
          why: '<em>Risk</em> takes <em>-ing</em>, and it looks at an action already under consideration, which is the sense running through most of that list. <em>To clean</em> and the bare <em>clean</em> are simply not patterns <em>risk</em> allows, and <em>to cleaning</em> puts an infinitive marker in front of a gerund, which is never English.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't1l1s3', name: 'Verbs that must take to + infinitive', cefr: 'B1+',
      theory: {
        key: 'A second closed list takes only to + infinitive: agree, decide, refuse, promise, offer, manage, fail, intend, hope, plan, arrange, afford, pretend, threaten.',
        body: [
          'These verbs point <strong>forwards</strong>. At the moment you agree, promise, refuse or decide, the second action has not happened yet — it lies ahead. That is not an accident: the <em>to</em> of the infinitive began life as the preposition <em>to</em>, the one that means "towards", and the forward-looking sense has survived.',
          'That gives you a usable instinct. If the first verb creates a commitment, a plan or a refusal about something still to come, <em>to</em> is very likely right. If it comments on something already in view, <em>-ing</em> is more likely.',
          'Two members of this list behave in ways students find surprising. <em>Manage to</em> means succeeded despite difficulty, not simply "did". <em>Fail to</em> is its opposite and is much commoner in formal writing than <em>didn\'t</em>.',
          'The test that never fails is the list itself. When you meet a new verb, record the pattern with it — not the verb alone.'
        ],
        simple: [
          'Some verbs are always followed by <em>to</em> + verb: agree, decide, refuse, promise, offer, manage, fail, intend, hope, plan, arrange, afford, pretend, threaten.',
          'These verbs look forward in time. When you promise or decide something, that thing has not happened yet.',
          '<em>Manage to do</em> means you succeeded even though it was difficult. <em>Fail to do</em> means you did not do it.'
        ],
        examples: [
          { s: 'The supplier <b>failed to deliver</b> the new nets before the tournament.', g: 'fail + to + infinitive.' },
          { s: 'Both schools finally <b>agreed to share</b> the cost of the pitch.', g: 'agree + to + infinitive — a commitment about the future.' },
          { s: 'She <b>managed to finish</b> the translation in a single weekend.', g: 'manage to = succeeded, despite difficulty.' },
          { s: '<s>The volunteers offered carrying the donation boxes.</s>', g: 'offer takes to: offered to carry.' }
        ]
      },
      items: [
        { id: 't1l1s3-1', type: 'choose', tag: 'vform-inf-verb', level: 'B1+',
          stem: 'The supplier failed ______ the replacement pump before the rice harvest began.',
          options: ['delivering', 'deliver', 'to deliver', 'to delivering'],
          answer: 2,
          why: '<em>Fail</em> takes <em>to</em> + infinitive. The plain gerund <em>delivering</em> is not a pattern <em>fail</em> allows, the bare <em>deliver</em> leaves out the infinitive marker altogether, and <em>to delivering</em> keeps the marker but attaches it to a gerund, which is never possible.' },

        { id: 't1l1s3-2', type: 'choose', tag: 'vform-inf-verb', level: 'B1+',
          stem: 'After three rounds of talks the two schools agreed ______ the cost of the new floodlights.',
          options: ['to share', 'sharing', 'share', 'on share'],
          answer: 0,
          why: '<em>Agree</em> takes <em>to</em> + infinitive, because it creates a commitment about something still to come. <em>Sharing</em> belongs to the other list, the bare <em>share</em> has nothing licensing it, and although <em>agree on</em> exists it needs a noun after it — <em>agreed on a figure</em>, not <em>on share</em>.' },

        { id: 't1l1s3-3', type: 'sort', tag: 'vform-inf-verb', level: 'B1+',
          stem: 'Which pattern does each verb demand?',
          bins: [
            { key: 'ing', label: 'verb + -ing', hint: 'avoid doing' },
            { key: 'to', label: 'verb + to + infinitive', hint: 'agree to do' }
          ],
          items: [
            { text: 'admit', bin: 'ing' },
            { text: 'arrange', bin: 'to' },
            { text: 'deny', bin: 'ing' },
            { text: 'manage', bin: 'to' },
            { text: 'practise', bin: 'ing' },
            { text: 'threaten', bin: 'to' }
          ],
          why: 'The <em>to</em> verbs here all create a commitment about something still to come; the <em>-ing</em> verbs all comment on an action already in view.' },

        { id: 't1l1s3-4', type: 'spot', tag: 'vform-inf-verb', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The volunteers offered', 'carrying the donated textbooks', 'up to the third floor', 'before the open day.'],
          answer: 1,
          fix: 'to carry the donated textbooks',
          why: '<em>Offer</em> takes <em>to</em> + infinitive, so part two must be <em>to carry the donated textbooks</em>. The offer is made now about work that will happen later, which is the forward-looking sense the infinitive carries. The other parts are sound: the plural subject matches <em>offered</em>, and both prepositional phrases attach normally.' },

        { id: 't1l1s3-5', type: 'gap', tag: 'vform-inf-verb', level: 'B1+',
          lines: [
            { who: 'Student', text: 'Will the reading room be open before the exam?' },
            { who: 'Librarian', text: 'Yes — I have arranged ___ it at seven all week.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['opening', 'for open', 'open', 'to open'],
          answer: 3,
          why: '<em>Arrange</em> takes <em>to</em> + infinitive, so <em>to open</em> is the only fit. <em>Opening</em> belongs to the <em>-ing</em> list, the bare <em>open</em> has no marker, and although <em>arrange for</em> is possible it needs a person after it — <em>arranged for a caretaker to open it</em>, never <em>for open</em>.' }
      ]
    }
  ],

  check: {
    id: 't1l1ck', name: 'Systems Check · Naming the form',
    items: [
      { id: 't1l1ck-1', type: 'choose', tag: 'vform-pos', level: 'B1+',
        stem: 'In <em>The recycling centre closes at four</em>, what job does <em>recycling</em> do?',
        options: ['It is an adjective describing the centre.', 'It is the object of <em>closes</em>.', 'It is part of a continuous verb.', 'It is the subject of the sentence.'],
        answer: 0,
        why: 'It stands directly in front of the noun <em>centre</em> and tells you what kind of centre it is, which is the adjective job. It cannot be the object of <em>closes</em>, because <em>closes</em> takes no object here; it is not part of a continuous verb, because there is no form of <em>be</em>; and the subject is the whole phrase <em>the recycling centre</em>, not the word on its own.' },

      { id: 't1l1ck-2', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
        stem: 'The ferry company has consistently avoided ______ its timetable during the monsoon season.',
        options: ['to change', 'to changing', 'change', 'changing'],
        answer: 3,
        why: '<em>Avoid</em> takes only <em>-ing</em>, and no amount of meaning will let <em>to</em> in after it. <em>To change</em> is the infinitive the list forbids, <em>to changing</em> welds the marker onto a gerund, and the bare <em>change</em> has nothing to license it.' },

      { id: 't1l1ck-3', type: 'choose', tag: 'vform-inf-verb', level: 'B1+',
        stem: 'The two museums have arranged ______ the same collection on alternate years.',
        options: ['displaying', 'for displaying', 'to display', 'display'],
        answer: 2,
        why: '<em>Arrange</em> takes <em>to</em> + infinitive, because it creates a plan about something that has not happened yet. <em>Displaying</em> belongs to the other list, <em>for displaying</em> would need a person between <em>for</em> and the verb, and the bare <em>display</em> has no marker at all.' },

      { id: 't1l1ck-4', type: 'spot', tag: 'vform-gerund-verb', level: 'B1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The engineer admitted', 'to underestimate the cost', 'of the flood barriers', 'by nearly a third.'],
        answer: 1,
        fix: 'underestimating the cost',
        why: '<em>Admit</em> takes <em>-ing</em>, so part two must be <em>underestimating the cost</em>. There is an <em>admit to</em> pattern, but the <em>to</em> there is a preposition and would still need <em>-ing</em>: <em>admitted to underestimating</em>. The remaining parts are all sound — a singular subject with a past verb, and two ordinary prepositional phrases.' },

      { id: 't1l1ck-5', type: 'sort', tag: 'vform-gerund-verb', level: 'B2',
        stem: 'Sort the verbs by the pattern they demand.',
        bins: [
          { key: 'ing', label: 'verb + -ing', hint: 'consider doing' },
          { key: 'to', label: 'verb + to + infinitive', hint: 'refuse to do' }
        ],
        items: [
          { text: 'postpone', bin: 'ing' },
          { text: 'refuse', bin: 'to' },
          { text: 'resist', bin: 'ing' },
          { text: 'pretend', bin: 'to' },
          { text: 'involve', bin: 'ing' },
          { text: 'afford', bin: 'to' }
        ],
        why: 'The <em>-ing</em> verbs all comment on an action already in view; the <em>to</em> verbs all point at one still to come.' },

      { id: 't1l1ck-6', type: 'choose', tag: 'vform-pos', level: 'B2',
        stem: 'Which sentence uses an <em>-ing</em> word as a noun?',
        options: [
          'The delivery bike was blocking the loading bay.',
          'Rebuilding the pier will take two dry seasons.',
          'They interviewed the visiting inspector.',
          'A rising river closed the market road at noon.'
        ],
        answer: 1,
        why: 'Only in option 2 can the <em>-ing</em> word be replaced by <em>it</em>: <em>It will take two dry seasons.</em> In option 1 <em>blocking</em> follows <em>was</em> and is part of the verb, and in options 3 and 4 <em>visiting</em> and <em>rising</em> stand in front of nouns as adjectives.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T1.levels.push({
  id: 't1l2', n: 2, name: 'Where the -ing sits', cefr: 'B2',
  blurb: 'Three places where the form is forced on you: after a preposition, in the subject slot, and in a list joined by *and*.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't1l2s1', name: '-ing after a preposition', cefr: 'B2',
      theory: {
        key: 'Anything directly after a preposition must be a noun, and the noun form of a verb is -ing.',
        body: [
          'This one <em>is</em> a rule, and it has no exceptions. A preposition — <em>by, on, in, without, after, before, for, about, against</em> — is followed by a noun. When you want a verb in that slot, you must use its noun form, which is <em>-ing</em>.',
          'The test is to put an ordinary noun in the slot first. <em>They insisted on payment</em> works, so <em>They insisted on paying</em> works too, and <em>They insisted on to pay</em> cannot.',
          'The trap is a small group of phrases that happen to end in the word <em>to</em>: <em>look forward to, object to, be used to, be committed to, be opposed to, in addition to</em>. That <em>to</em> is a preposition, not the infinitive marker, so it takes <em>-ing</em>. <em>We look forward to hearing from you</em> — never <em>to hear</em>. Say the phrase with a plain noun once (<em>look forward to the holidays</em>) and your ear will stop fighting it.',
          'Because this rule is absolute, examiners like it. Any gap that has a preposition immediately in front of it has already been answered.'
        ],
        simple: [
          'After a preposition you need a noun. When you want to use a verb there, you must add <em>-ing</em>.',
          'Test it with a normal noun first. <em>Insist on payment</em> is fine, so <em>insist on paying</em> is fine too.',
          'Watch out for phrases that end in <em>to</em>: <em>look forward to</em>, <em>object to</em>, <em>be used to</em>. That <em>to</em> is a preposition, so it needs <em>-ing</em>: <em>look forward to seeing you</em>.'
        ],
        examples: [
          { s: 'The inspectors left <b>without signing</b> the visitors\' book.', g: 'without + -ing.' },
          { s: 'Residents <b>objected to widening</b> the access road.', g: 'the "to" in object to is a preposition.' },
          { s: 'She got the job <b>by translating</b> the sample in under an hour.', g: 'by + -ing answers "how?".' },
          { s: '<s>We look forward to meet the exchange students.</s>', g: 'look forward to + -ing: to meeting.' }
        ]
      },
      items: [
        { id: 't1l2s1-1', type: 'choose', tag: 'vform-prep-ing', level: 'B2',
          stem: 'The museum is committed to ______ free entry for local schools.',
          options: ['maintain', 'be maintained', 'have maintained', 'maintaining'],
          answer: 3,
          why: 'The <em>to</em> in <em>be committed to</em> is a preposition, not an infinitive marker, so only a noun form fits. Test it with an ordinary noun: <em>committed to free entry</em>. The bare <em>maintain</em>, the passive <em>be maintained</em> and the perfect <em>have maintained</em> are all verb forms needing a marker or an auxiliary, and a preposition supplies neither.' },

        { id: 't1l2s1-2', type: 'choose', tag: 'vform-prep-ing', level: 'B2',
          stem: 'The survey team finished the reef count ______ once for equipment.',
          options: ['without stopping', 'without to stop', 'without stop', 'without having stop'],
          answer: 0,
          why: '<em>Without</em> is a preposition, so only the <em>-ing</em> form can follow it. <em>Without to stop</em> puts an infinitive after a preposition, <em>without stop</em> uses a bare verb where a noun is needed, and <em>without having stop</em> leaves <em>having</em> without the past participle it requires.' },

        { id: 't1l2s1-3', type: 'spot', tag: 'vform-prep-ing', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The residents\' association objected', 'to extend the factory licence', 'for a further ten years', 'without a public hearing.'],
          answer: 1,
          fix: 'to extending the factory licence',
          why: 'The <em>to</em> of <em>object to</em> is a preposition, so it needs <em>-ing</em>. Put a noun in the slot to hear it: <em>objected to the extension</em>. The other three parts are already correct, including <em>without a public hearing</em>, where a preposition is followed by a noun phrase exactly as it should be.' },

        { id: 't1l2s1-4', type: 'gap', tag: 'vform-prep-ing', level: 'B2',
          lines: [
            { who: 'Registrar', text: 'How did the department cut its marking time?' },
            { who: 'Head', text: 'Mostly by ___ the two first-year courses.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['to merge', 'merge', 'merging', 'merged'],
          answer: 2,
          why: '<em>By</em> is a preposition and answers "how?", so only the <em>-ing</em> form can follow it. <em>To merge</em> would express purpose rather than method and cannot sit after a preposition, the bare <em>merge</em> is not a noun form, and the past participle <em>merged</em> would need an auxiliary in front of it.' },

        { id: 't1l2s1-5', type: 'choose', tag: 'vform-prep-passive', level: 'B2+',
          stem: 'The provincial laboratory insisted on every pond sample ______ before the results were published.',
          options: ['being retested', 'retesting', 'to be retested', 'having retested'],
          answer: 0,
          why: 'Two steps. The preposition <em>on</em> forces <em>-ing</em>, which rules out <em>to be retested</em> at once; then, because the samples <u>receive</u> the testing rather than doing it, the <em>-ing</em> must be passive. <em>Retesting</em> is active and would make the samples the testers, and <em>having retested</em> is active and perfect as well.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't1l2s2', name: '-ing as the subject, and its singular verb', cefr: 'B2',
      theory: {
        key: 'Only the -ing form can be a subject, and that subject is singular however many plural nouns come after it.',
        body: [
          'Two separate errors live in this one slot, and the exam tests both.',
          'The first is using a bare verb as a subject. <em>Monitor the rain gauges has become expensive</em> is not English: <em>monitor</em> there is a command, not a subject. Only the <em>-ing</em> form can do the noun job, so it must be <em>Monitoring the rain gauges</em>.',
          'The second is agreement. The whole <em>-ing</em> phrase is <strong>one idea</strong>, so it takes a singular verb — even when a plural noun is sitting right beside it. <em>Checking the filters on all four shrimp ponds <u>is</u> a weekly job.</em> Not <em>are</em>. The word <em>ponds</em> is simply nearer; it is not the subject.',
          'The fix is mechanical. Cover everything between the <em>-ing</em> word and the verb with your hand, and read what is left: <em>Checking … is</em>. Once students do this, the error disappears.'
        ],
        simple: [
          'A verb can only be a subject if it ends in <em>-ing</em>. <em>Monitor the gauges is expensive</em> is wrong; <em>Monitoring the gauges is expensive</em> is right.',
          'An <em>-ing</em> subject is always singular, even if there is a plural word next to it.',
          'Cover the middle of the sentence with your hand and read the subject and the verb together. <em>Checking … is.</em>'
        ],
        examples: [
          { s: '<b>Cataloguing</b> the donated textbooks <b>has taken</b> two years.', g: 'singular verb, though "textbooks" is plural.' },
          { s: '<s>Cataloguing the donated textbooks have taken two years.</s>', g: '"textbooks" is not the subject; the whole -ing phrase is.' },
          { s: '<s>Repair the canal footbridges is now urgent.</s>', g: 'a bare verb cannot be a subject: Repairing.' },
          { s: '<b>Replacing</b> the air-conditioning units in all six blocks <b>is</b> the largest item in the budget.', g: 'cover the middle: Replacing … is.' }
        ]
      },
      items: [
        { id: 't1l2s2-1', type: 'choose', tag: 'vform-subject-ing', level: 'B2',
          stem: 'Cataloguing the donated textbooks ______ two full years of volunteer time.',
          options: ['have taken', 'take', 'has taken', 'are taking'],
          answer: 2,
          why: 'The subject is the whole phrase beginning <em>Cataloguing</em>, which counts as one idea and is therefore singular. <em>Textbooks</em> is merely the nearest noun, so <em>have taken</em> and <em>take</em> are agreeing with the wrong word, and <em>are taking</em> is plural as well as turning a finished stretch of work into something still going on.' },

        { id: 't1l2s2-2', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Inspecting the drainage channels', 'after heavy rain', 'are now a legal duty', 'for every orchard owner.'],
          answer: 2,
          fix: 'is now a legal duty',
          why: 'Cover the middle and read it: <em>Inspecting … is</em>. The plural <em>channels</em> sits inside the subject and is not the head of it. Parts one, two and four are all sound — an <em>-ing</em> subject, a time phrase, and a prepositional phrase with a singular noun after <em>every</em>.' },

        { id: 't1l2s2-3', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Translate the nineteenth-century temple records', 'has occupied', 'the museum staff', 'since February.'],
          answer: 0,
          fix: 'Translating the nineteenth-century temple records',
          why: 'A bare verb cannot be a subject, so part one must be <em>Translating</em>. The singular <em>has</em> is already right, which tells you the writer intended a noun phrase here, and <em>the museum staff</em> and <em>since February</em> are both unexceptionable — a present perfect with a starting point is exactly what <em>since</em> wants.' },

        { id: 't1l2s2-4', type: 'build', tag: 'vform-subject-ing', level: 'B2',
          stem: 'Two facts: the school repaints the corridors every April; it costs more than anything else in the budget. Say it in one sentence, starting with the repainting.',
          tiles: ['Repainting', 'the corridors', 'every April', 'is', 'the school\'s', 'largest single expense'],
          solution: 'Repainting the corridors every April is the school\'s largest single expense',
          alt: [],
          why: 'Only the <em>-ing</em> form can head a subject, and that subject counts as one idea, so it takes the singular <em>is</em> even though the plural <em>corridors</em> stands next to it.' },

        { id: 't1l2s2-5', type: 'choose', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'Which sentence is correct?',
          options: [
            'Recruit and train new lifeguards takes most of the dry season.',
            'Recruiting and training new lifeguards take most of the dry season.',
            'To recruiting and training new lifeguards takes most of the dry season.',
            'Recruiting and training new lifeguards takes most of the dry season.'
          ],
          answer: 3,
          why: 'Both verbs must be <em>-ing</em> to act as a subject, and the pair names one single activity, so the verb stays singular. Option 1 puts bare verbs in the subject slot, option 2 has the right forms but a plural verb, and option 3 sets an infinitive marker in front of a gerund.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't1l2s3', name: 'Keeping a list of verbs parallel', cefr: 'B2+',
      theory: {
        key: 'Verbs joined by and, or or but must all take the same form, governed by the same word.',
        body: [
          'When two or more verbs are joined, find the word that <strong>governs</strong> the list — a modal, a <em>to</em>, a preposition — and check that every branch would still work if you read it straight from that governor.',
          '<em>The board agreed that it should publish the figures and <u>revise</u> the forecast.</em> The governor is <em>should</em>, so both branches are bare infinitives. Write <em>revising</em> and the second branch no longer connects to anything.',
          'The same applies after a preposition: <em>by cutting the fleet and retraining the riders</em> — both <em>-ing</em>, because both hang off <em>by</em>. And after <em>to</em>: <em>they decided to close the old wing and move the library upstairs</em>, where the second <em>to</em> is simply left out but understood.',
          'In an error-identification item, circle every <em>and</em> and <em>or</em> first. It is the fastest way to find a planted error, because the broken branch is always in a different form from its partner.'
        ],
        simple: [
          'Verbs joined by <em>and</em> or <em>or</em> must have the same form.',
          'Find the word that controls the list — a modal like <em>should</em>, a preposition like <em>by</em>, or <em>to</em> — and read each verb straight from it.',
          '<em>should inform and suspend</em> ✓ &nbsp;&nbsp; <em>should inform and suspending</em> ✗'
        ],
        examples: [
          { s: 'The school agreed to <b>close</b> the old wing and <b>move</b> the library upstairs.', g: 'both branches read from "to".' },
          { s: 'They cut costs by <b>merging</b> two depots and <b>retraining</b> the riders.', g: 'both branches read from "by".' },
          { s: '<s>The panel said it should warn the public and issuing a recall.</s>', g: 'should warn and issue.' },
          { s: 'The role involves <b>logging</b> the samples and <b>reporting</b> any breakage.', g: 'involve + -ing, twice.' }
        ]
      },
      items: [
        { id: 't1l2s3-1', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['After the second delay,', 'the organisers promised to', 'refund every ticket and', 'publishing the new dates.'],
          answer: 3,
          fix: 'publish the new dates',
          why: 'Both branches hang off the one <em>to</em>, so both must be bare infinitives, and part four has slipped into <em>-ing</em>. Read it straight from the governor: <em>to refund … and (to) publish</em>. The first three parts are sound — a time phrase, a reporting verb with its infinitive, and an infinitive with its object.' },

        { id: 't1l2s3-2', type: 'choose', tag: 'vform-parallel', level: 'B2+',
          stem: 'The post involves logging every sample, labelling the trays and ______ any breakage to the technician.',
          options: ['to report', 'report', 'reporting', 'reported'],
          answer: 2,
          why: '<em>Involve</em> takes <em>-ing</em>, and all three branches of the list must match: <em>logging … labelling … reporting</em>. <em>To report</em> and the bare <em>report</em> both break the pattern the governor sets, and the past participle <em>reported</em> would need an auxiliary that is not there.' },

        { id: 't1l2s3-3', type: 'choose', tag: 'vform-parallel', level: 'B2+',
          stem: 'The delivery firm reduced its losses by closing two depots and ______ the delivery rounds.',
          options: ['redrew', 'to redraw', 'redraw', 'redrawing'],
          answer: 3,
          why: 'Both branches hang off the preposition <em>by</em>, which forces <em>-ing</em> on each of them. The past tense <em>redrew</em> would start a new clause with no subject, <em>to redraw</em> cannot follow a preposition, and the bare <em>redraw</em> has nothing licensing it.' },

        { id: 't1l2s3-4', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The new policy requires staff', 'to record every visitor,', 'checking identity documents', 'and lock the side entrance at dusk.'],
          answer: 2,
          fix: 'to check identity documents',
          why: 'The list is governed by the <em>to</em> that follows <em>requires staff</em>. The first and third branches are infinitives, so the middle one must be too, and part three has slipped into <em>-ing</em> — one broken branch, not two. In the final branch the second <em>to</em> is simply left out but understood, which is normal and not an error.' },

        { id: 't1l2s3-5', type: 'choose', tag: 'vform-parallel', level: 'C1',
          stem: 'Which sentence is correctly parallel?',
          options: [
            'The review recommends auditing the accounts, to publish the findings and that a treasurer resigns.',
            'The review recommends to audit the accounts, publishing the findings and appointing a new treasurer.',
            'The review recommends auditing the accounts, publishing the findings and appointing a new treasurer.',
            'The review recommends audit the accounts, publish the findings and appointing a new treasurer.'
          ],
          answer: 2,
          why: '<em>Recommend</em> takes <em>-ing</em>, and all three branches must share that form. Option 1 runs a gerund, an infinitive and a that-clause in a single list, option 2 opens with an infinitive that <em>recommend</em> does not allow, and option 4 starts with two bare verbs before switching to <em>-ing</em>.' }
      ]
    }
  ],

  check: {
    id: 't1l2ck', name: 'Systems Check · Where the -ing sits',
    items: [
      { id: 't1l2ck-1', type: 'choose', tag: 'vform-prep-ing', level: 'B2',
        stem: 'The ministry is opposed to ______ the licence before the survey is complete.',
        options: ['renew', 'have renewed', 'be renewed', 'renewing'],
        answer: 3,
        why: 'The <em>to</em> of <em>be opposed to</em> is a preposition, so it takes <em>-ing</em>. Put a noun in the slot to check: <em>opposed to renewal</em>. The bare <em>renew</em>, the perfect <em>have renewed</em> and the passive <em>be renewed</em> are all clause material and none of them can sit after a preposition.' },

      { id: 't1l2ck-2', type: 'choose', tag: 'vform-subject-ing', level: 'B2',
        stem: 'Restoring the two temple murals ______ longer than the whole roof repair.',
        options: ['have taken', 'take', 'has taken', 'were taking'],
        answer: 2,
        why: 'The <em>-ing</em> phrase is one singular subject, so it needs <em>has taken</em>. <em>Murals</em> sits inside the subject and cannot control the verb, which rules out <em>have taken</em> and <em>take</em>, and <em>were taking</em> is plural as well as turning a completed job into one still in progress.' },

      { id: 't1l2ck-3', type: 'spot', tag: 'vform-parallel', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The guidance asks head teachers', 'to publish the results,', 'to explain the method', 'and inviting parents to comment.'],
        answer: 3,
        fix: 'and to invite parents to comment',
        why: 'Three branches, all governed by the <em>to</em> that follows <em>asks head teachers</em>. The last one has slipped into <em>-ing</em> and no longer connects to anything. Parts one to three are sound, and the two earlier branches show exactly the form the fourth should copy.' },

      { id: 't1l2ck-4', type: 'choose', tag: 'vform-prep-passive', level: 'B2+',
        stem: 'The port authority insists on every container ______ before it leaves the dock.',
        options: ['being weighed', 'to be weighed', 'weighing', 'having weighed'],
        answer: 0,
        why: 'The preposition <em>on</em> forces <em>-ing</em>, which rules out <em>to be weighed</em> at once; and because the containers receive the weighing rather than doing it, the form must be passive, which rules out the active <em>weighing</em> and the active perfect <em>having weighed</em>.' },

      { id: 't1l2ck-5', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Digitise the old land records', 'was expected to take', 'eighteen months,', 'but it took three years.'],
        answer: 0,
        fix: 'Digitising the old land records',
        why: 'The singular <em>was</em> shows a noun phrase was intended, and only the <em>-ing</em> form can be a subject. Parts two, three and four are all correct: <em>expect</em> takes <em>to</em> + infinitive, the time phrase is a normal object, and <em>it</em> refers back to the whole activity.' },

      { id: 't1l2ck-6', type: 'build', tag: 'vform-prep-ing', level: 'B2+',
        stem: 'The staff did two things to cut waiting times: they extended the opening hours, and they took on four more nurses. Say it in one sentence beginning "The clinic cut waiting times by".',
        tiles: ['The', 'clinic', 'cut', 'waiting times', 'by', 'extending', 'its opening hours', 'and', 'taking on', 'four more nurses'],
        solution: 'The clinic cut waiting times by extending its opening hours and taking on four more nurses',
        alt: [],
        why: 'Both branches hang off the preposition <em>by</em>, so both must be <em>-ing</em> forms; the second branch cannot revert to an infinitive or a past tense once the first has set the pattern.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T1.levels.push({
  id: 't1l3', n: 3, name: 'Both forms, different meanings', cefr: 'B2+',
  blurb: 'Eight verbs take either form — and the two forms say different things. The exam knows it.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't1l3s1', name: 'remember, forget, regret', cefr: 'B2+',
      theory: {
        key: 'With -ing the second action came FIRST and really happened; with to + infinitive it came SECOND, as a duty you did or did not carry out.',
        body: [
          'Draw two arrows and the whole group falls out.',
          '<em>I remembered <strong>locking</strong> the gate.</em> The locking happened, and later the memory of it arrived. <em>I remembered <strong>to lock</strong> the gate.</em> The memory came first and produced the locking. One is a recollection; the other is a duty discharged.',
          '<em>Forget</em> is the mirror. <em>She forgot posting the letter</em> means she posted it and later lost the memory. <em>She forgot to post the letter</em> means it is still in her bag.',
          '<em>Regret</em> splits the same way but the to-infinitive version is frozen into a formal announcement. <em>We regret closing the branch</em> is sorrow about something already done. <em>We regret to inform you…</em> is sorrow about what you are about to be told, and in practice it appears with only a handful of verbs: inform, announce, say, tell.'
        ],
        simple: [
          'With <em>-ing</em>, the action really happened and you are looking back at it.',
          'With <em>to</em>, the action was a duty. <em>I remembered to lock the gate</em> = I did not forget my job.',
          '<em>We regret to inform you…</em> is a fixed formal phrase for bad news you are about to give.'
        ],
        examples: [
          { s: 'She <b>remembers watching</b> the old ferry leave for the last time.', g: 'the watching happened; the memory is of it.' },
          { s: 'He <b>remembered to switch off</b> the pond pump.', g: 'a duty, carried out.' },
          { s: 'They <b>regret selling</b> the orchard.', g: 'sorry about something already done.' },
          { s: 'We <b>regret to inform</b> you that the post has been filled.', g: 'fixed formal frame for bad news.' }
        ]
      },
      items: [
        { id: 't1l3s1-1', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'She still remembers ______ the last wooden ferry leave the pier in 1994.',
          options: ['to watch', 'to have watched', 'watch', 'watching'],
          answer: 3,
          why: 'The watching happened and the memory is of it, so the <em>-ing</em> form is required. <em>To watch</em> would name a duty still ahead of her, <em>to have watched</em> piles a perfect on top of that same wrong reading, and the bare <em>watch</em> cannot follow <em>remember</em> at all.' },

        { id: 't1l3s1-2', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'The envelope is still in her bag, so clearly she forgot ______ it.',
          options: ['posting', 'post', 'to post', 'having posted'],
          answer: 2,
          why: 'The envelope was never posted, so this is a duty not carried out: <em>forget to do</em>. <em>Forgot posting</em> would mean she did post it and then lost the memory, <em>having posted</em> says the same thing more formally, and the bare <em>post</em> is not a pattern <em>forget</em> allows.' },

        { id: 't1l3s1-3', type: 'equiv', tag: 'vform-both', level: 'B2+',
          given: 'The family regret selling the mango orchard to the developer.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The family are sorry about a sale that has already happened.',
            'The family are about to announce an unwelcome sale.',
            'The family have decided not to sell the orchard after all.',
            'The family are sorry they will have to sell the orchard.'
          ],
          answer: 0,
          why: '<em>Regret</em> + <em>-ing</em> looks back at something already done. Option 2 gives the announcement reading, which belongs to <em>regret to announce</em>; option 3 cancels the sale altogether; and option 4 pushes it into the future, when the original has it finished.' },

        { id: 't1l3s1-4', type: 'sort', tag: 'vform-both', level: 'B2+',
          stem: 'Does each sentence look back at something that happened, or name a duty?',
          bins: [
            { key: 'back', label: 'Looking back (-ing)', hint: 'it really happened' },
            { key: 'duty', label: 'A duty (to + infinitive)', hint: 'a job to carry out' }
          ],
          items: [
            { text: 'remembered switching off the pond pump', bin: 'back' },
            { text: 'remembered to switch off the pond pump', bin: 'duty' },
            { text: 'forgot locking the science lab', bin: 'back' },
            { text: 'forgot to lock the science lab', bin: 'duty' },
            { text: 'regrets accepting the post', bin: 'back' },
            { text: 'regrets to announce the closure', bin: 'duty' }
          ],
          why: 'The <em>-ing</em> cards all describe real past events that somebody is now looking back on. The <em>to</em> cards are all obligations — carried out, in the case of the pump, and not carried out, in the case of the lab — and <em>regrets to announce</em> belongs with them because the announcement is still being made.' },

        { id: 't1l3s1-5', type: 'spot', tag: 'vform-both', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The committee regrets', 'announcing that the museum', 'will close to the public', 'for the whole of the rainy season.'],
          answer: 1,
          fix: 'to announce that the museum',
          why: 'This is an announcement being made now about something still to come, which is the frozen formal frame <em>regret to announce</em>. <em>Regrets announcing</em> would mean they are sorry they ever made the announcement. The other three parts are sound: the singular <em>regrets</em> matches <em>committee</em>, the future <em>will close</em> is what an announcement needs, and the time phrase is an ordinary adjunct.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't1l3s2', name: 'try, stop, go on', cefr: 'B2+',
      theory: {
        key: 'try doing = experiment with it; try to do = make an effort at something difficult. stop doing = end it; stop to do = pause in order to.',
        body: [
          '<em>Try</em> is the one the exam reaches for most. <em>They tried rebuilding the sea wall with concrete blocks</em> means they experimented — it was one method among several, and it may well have worked. <em>They tried to rebuild the sea wall</em> means the rebuilding was hard and may have failed. The <em>-ing</em> form is about method; the infinitive is about effort.',
          '<em>Stop</em> is cleaner. <em>He stopped reading the notices</em> — the reading ended. <em>He stopped to read the notices</em> — he was doing something else, and he paused for the purpose of reading. The infinitive here is a purpose, not a verb pattern at all, which is why it feels different.',
          '<em>Go on</em> splits by continuity. <em>She went on talking</em> means she continued the same activity. <em>She went on to talk about the scholarship fund</em> means she finished one thing and moved to the next.',
          'In a closest-meaning question these differences are the whole item. A paraphrase that turns an experiment into an attempt, or an ending into a pause, is wrong even when every other word matches.'
        ],
        simple: [
          '<em>Try doing</em> = test a method. <em>Try to do</em> = attempt something difficult.',
          '<em>Stop doing</em> = the action ends. <em>Stop to do</em> = you pause so that you can do it.',
          '<em>Go on doing</em> = continue. <em>Go on to do</em> = move to the next thing.'
        ],
        examples: [
          { s: 'The crew <b>tried rebuilding</b> the sea wall with concrete blocks.', g: 'a method they experimented with.' },
          { s: 'The crew <b>tried to rebuild</b> the sea wall before the storms came.', g: 'an effort against difficulty.' },
          { s: 'The survey team <b>stopped taking</b> readings at four.', g: 'the readings ended.' },
          { s: 'The survey team <b>stopped to take</b> a reading at the river crossing.', g: 'a pause for that purpose.' }
        ]
      },
      items: [
        { id: 't1l3s2-1', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The restorers tried warming the temple panel slowly to release the old lacquer.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The restorers experimented with heating the panel gently.',
            'The restorers struggled to raise the temperature of the panel.',
            'The restorers refused to apply any heat to the panel.',
            'The restorers will attempt to warm the panel next week.'
          ],
          answer: 0,
          why: '<em>Try</em> + <em>-ing</em> names a method being tested. Option 2 reads it as effort against difficulty, which is the infinitive meaning; option 3 reverses the polarity, since heat was in fact applied; and option 4 moves a past experiment into next week.' },

        { id: 't1l3s2-2', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'Half way up the trail the survey team stopped ______ a reading, then carried on to the summit.',
          options: ['taking', 'to taking', 'take', 'to take'],
          answer: 3,
          why: 'They paused for the purpose of taking one reading and then carried on, which is the purpose infinitive. <em>Stopped taking</em> would mean they gave readings up altogether, <em>to taking</em> welds the marker onto a gerund, and the bare <em>take</em> has no marker at all.' },

        { id: 't1l3s2-3', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'After forty years the ferry company stopped ______ the evening crossing.',
          options: ['to run', 'run', 'running', 'to running'],
          answer: 2,
          why: 'The crossing ended for good, which is <em>stop</em> + <em>-ing</em>. <em>To run</em> would mean they paused in order to run it, which is nonsense after forty years; the bare <em>run</em> has nothing licensing it; and <em>to running</em> is never a possible sequence.' },

        { id: 't1l3s2-4', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The chair went on to explain the shortfall in the scholarship fund.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The chair continued explaining the same point at length.',
            'The chair had been explaining the shortfall for some time.',
            'The chair refused to discuss the scholarship fund.',
            'The chair moved on to a new point about the scholarship fund.'
          ],
          answer: 3,
          why: '<em>Go on to do</em> marks a move to the next topic. Option 1 is the <em>go on doing</em> reading, continuing the same point; option 2 puts the explaining before the moment described; and option 3 reverses the polarity into a refusal.' },

        { id: 't1l3s2-5', type: 'spot', tag: 'vform-both', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The engineers tried to use', 'a lighter grade of steel,', 'and when that failed', 'they tried to weld the joints instead.'],
          answer: 3,
          fix: 'they tried welding the joints instead',
          why: 'The sentence describes a series of methods tested one after another, which is <em>try</em> + <em>-ing</em>, so part four must read <em>they tried welding the joints instead</em>. The first clause can stand because it introduces the attempt, and parts two and three are an ordinary object and an ordinary time clause.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't1l3s3', name: 'mean, need, and the passive -ing', cefr: 'C1',
      theory: {
        key: 'mean to do = intend; mean doing = involve as a consequence. need doing = needs to be done.',
        body: [
          '<em>Mean</em> carries two unrelated senses and the form tells you which. <em>The district office meant to reopen the community hall in April</em> — an intention, which may or may not have been realised. <em>Reopening the hall meant rewiring the whole building</em> — a consequence, something the first thing entailed. Intention takes the infinitive; entailment takes <em>-ing</em>.',
          'The intention sense is the one the exam tests, because it lets an examiner offer you a distractor that keeps the words and drops the intention: "the school successfully cut its printing bill" is not the same claim as "the school intended to cut its printing bill". An intention says nothing about whether it happened.',
          '<em>Need</em> + <em>-ing</em> is a passive in disguise. <em>The gutters need clearing</em> means they need <u>to be</u> cleared; somebody else will do it. <em>Need to do</em> keeps the subject as the doer: <em>we need to clear the gutters</em>.',
          'Both patterns are traps for a reader in a hurry, because both versions of each sentence are perfectly grammatical. The only thing separating them is the form, which is exactly why they are useful to an examiner.'
        ],
        simple: [
          '<em>Mean to do</em> = intend. <em>Mean doing</em> = have as a consequence.',
          '<em>The district office meant to reopen the hall</em> — that was the plan. <em>Reopening the hall meant rewiring it</em> — that was what it involved.',
          '<em>The gutters need clearing</em> = they need to be cleared by somebody.'
        ],
        examples: [
          { s: 'The district office <b>meant to reopen</b> the community hall in April.', g: 'an intention — it may not have happened.' },
          { s: 'Reopening the hall <b>meant rewiring</b> the whole building.', g: 'a consequence it entailed.' },
          { s: 'The flood gates <b>need replacing</b> before the rains.', g: 'passive in meaning: need to be replaced.' },
          { s: 'We <b>need to replace</b> the flood gates before the rains.', g: 'the subject is the doer.' }
        ]
      },
      items: [
        { id: 't1l3s3-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The festival committee meant to move the parade to the riverside.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The festival committee successfully moved the parade to the riverside.',
            'The festival committee planned to shift the parade to the riverside.',
            'The festival committee is currently moving the parade to the riverside.',
            'Moving the parade meant losing the temple stop.'
          ],
          answer: 1,
          why: '<em>Mean to do</em> reports an intention and says nothing about the outcome. Option 1 asserts a success the original never claims, option 3 moves a past intention into the present, and option 4 switches to the entailment sense of <em>mean</em> altogether.' },

        { id: 't1l3s3-2', type: 'choose', tag: 'vform-both', level: 'C1',
          stem: 'Moving the collection to the new museum store meant ______ every crate a second time.',
          options: ['to label', 'label', 'labelling', 'to be labelled'],
          answer: 2,
          why: 'This is the consequence sense — what the move entailed — and it takes <em>-ing</em>. <em>To label</em> would turn it into an intention, and a move cannot intend anything; the bare <em>label</em> has no marker; and <em>to be labelled</em> is both an infinitive and the wrong voice beside an active <em>every crate</em>.' },

        { id: 't1l3s3-3', type: 'choose', tag: 'vform-both', level: 'C1',
          stem: 'The flood gates need ______ before the rains arrive in May.',
          options: ['replacing', 'to replace', 'replace', 'replaced'],
          answer: 0,
          why: '<em>Need</em> + <em>-ing</em> is passive in meaning: the gates need to be replaced. <em>To replace</em> would make the gates the ones doing the replacing, the bare <em>replace</em> is not a pattern <em>need</em> allows, and <em>replaced</em> on its own is missing the <em>to be</em> that would make it a passive infinitive.' },

        { id: 't1l3s3-4', type: 'sort', tag: 'vform-both', level: 'C1',
          stem: 'Intention, or consequence?',
          bins: [
            { key: 'int', label: 'An intention', hint: 'mean to do' },
            { key: 'con', label: 'A consequence', hint: 'mean doing' }
          ],
          items: [
            { text: 'meant to open on the first of May', bin: 'int' },
            { text: 'meant closing the road for a week', bin: 'con' },
            { text: 'meant to charge for parking', bin: 'int' },
            { text: 'meant rewiring the whole building', bin: 'con' },
            { text: 'meant to waive the entry fees', bin: 'int' },
            { text: 'meant losing two whole tourist seasons', bin: 'con' }
          ],
          why: 'The infinitive always looks forward to a plan and says nothing about whether the plan was carried out; the <em>-ing</em> form always names what something involved, and takes the first action for granted.' },

        { id: 't1l3s3-5', type: 'spot', tag: 'vform-both', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The school sign', 'needs to repaint', 'before the scaffolding', 'comes down in October.'],
          answer: 1,
          fix: 'needs repainting',
          why: 'The sign receives the work, so the pattern must be passive in meaning: either <em>needs repainting</em> or <em>needs to be repainted</em>. <em>Needs to repaint</em> makes the sign the painter. The other three parts are sound — a singular subject, a time clause opened by <em>before</em>, and a present verb used for a scheduled future event.' }
      ]
    }
  ],

  check: {
    id: 't1l3ck', name: 'Systems Check · Both forms, different meanings',
    items: [
      { id: 't1l3ck-1', type: 'choose', tag: 'vform-both', level: 'B2+',
        stem: 'He clearly remembered ______ the alarm, which is why the open door surprised him.',
        options: ['to set', 'to have set', 'set', 'setting'],
        answer: 3,
        why: 'He is recalling an act he performed, so the <em>-ing</em> form is required. <em>To set</em> would make it a duty discharged rather than a memory, <em>to have set</em> piles a perfect on top of that, and the bare <em>set</em> cannot follow <em>remember</em> at all.' },

      { id: 't1l3ck-2', type: 'choose', tag: 'vform-both', level: 'B2+',
        stem: 'The drummers stopped ______ at nine so that the ceremony could begin.',
        options: ['to practise', 'practise', 'practising', 'to practising'],
        answer: 2,
        why: 'The practising ended, which is <em>stop</em> + <em>-ing</em>. <em>To practise</em> would mean they paused in order to practise, which contradicts the ceremony beginning; the bare <em>practise</em> has no licence; and <em>to practising</em> is never a possible sequence.' },

      { id: 't1l3ck-3', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The growers tried moving the hives to the far side of the mango orchard.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The growers experimented with relocating the hives.',
          'The growers struggled to lift the hives across the orchard.',
          'The growers intend to relocate the hives next season.',
          'The growers refused to disturb the hives at all.'
        ],
        answer: 0,
        why: '<em>Try</em> + <em>-ing</em> is a method tested, not an effort made against difficulty, so option 2 imports a struggle the original never mentions. Option 3 moves a completed experiment into next season, and option 4 reverses the polarity.' },

      { id: 't1l3ck-4', type: 'choose', tag: 'vform-both', level: 'C1',
        stem: 'The lift mechanism needs ______ twice a year by a specialist.',
        options: ['to service', 'to servicing', 'service', 'servicing'],
        answer: 3,
        why: '<em>Need</em> + <em>-ing</em> carries a passive meaning, and the <em>by</em> phrase confirms somebody else does the work. <em>To service</em> would make the mechanism the engineer, <em>to servicing</em> welds a marker onto a gerund, and the bare <em>service</em> is not a pattern <em>need</em> allows.' },

      { id: 't1l3ck-5', type: 'spot', tag: 'vform-both', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The office clerk forgot', 'returning the exam scripts', 'to the strong room,', 'and they sat on her desk all weekend.'],
        answer: 1,
        fix: 'to return the exam scripts',
        why: 'The scripts were never returned, so this is a duty not carried out and the pattern must be <em>forget to do</em>. <em>Forgot returning</em> would mean she did return them and then forgot doing so. The other parts are sound: the subject is singular, the destination phrase is ordinary, and <em>they</em> agrees with <em>scripts</em>.' },

      { id: 't1l3ck-6', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The district office meant to widen the bridge approach before the temple fair.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The district office widened the bridge approach in time for the fair.',
          'The district office intended to widen the bridge approach before the fair.',
          'Widening the bridge approach involved closing it for the fair.',
          'The district office is widening the bridge approach during the fair.'
        ],
        answer: 1,
        why: 'An intention is reported, with no claim that it was realised. Option 1 asserts a completion the original never states, option 3 switches to the entailment sense of <em>mean</em>, and option 4 moves the work into the fair itself.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 4 */
T1.levels.push({
  id: 't1l4', n: 4, name: 'Reading the pattern as meaning', cefr: 'C1',
  blurb: 'The closest-meaning question, taken apart. Three features decide it, and vibe decides nothing.',
  subs: [

    /* ------------------------------------------------------------ 4.1 */
    {
      id: 't1l4s1', name: 'Polarity: admit, deny, confess', cefr: 'C1',
      theory: {
        key: 'In a closest-meaning question, check three features in order: tense, polarity, verb pattern.',
        body: [
          'A paraphrase question gives you one sentence and four candidates, and the three wrong ones are almost never wrong in an interesting way. Each is usually broken on exactly one feature.',
          '<strong>Tense.</strong> The original is in the past; a distractor puts it in the future or the present continuous. <em>plan to</em>, <em>will</em>, <em>are currently</em> are all warning words.',
          '<strong>Polarity.</strong> The original admits; the distractor denies. <em>admitted</em> ↔ <em>denied</em>, <em>agreed</em> ↔ <em>refused</em>. This is the cheapest distractor to write and the easiest to miss when reading quickly.',
          '<strong>Verb pattern.</strong> <em>admitted doing</em> = confessed to doing. Note the preposition: <em>confess to</em> takes <em>-ing</em>, so <em>confessed to copying</em> is right and <em>confessed to copy</em> is not. Run the three checks in that order and most items collapse to one candidate before you have thought about meaning at all.'
        ],
        simple: [
          'In a closest-meaning question, the three wrong answers usually each break one thing.',
          'Check the <strong>tense</strong> (has it moved to the future?), the <strong>polarity</strong> (has admit become deny?) and the <strong>verb pattern</strong> (does it still mean the same action?).',
          '<em>admitted doing</em> = <em>confessed to doing</em>. After <em>confess to</em> you need <em>-ing</em>.'
        ],
        examples: [
          { s: 'The treasurer <b>admitted altering</b> the club accounts.', g: '= confessed to altering them.' },
          { s: '<s>The treasurer denied altering the club accounts.</s>', g: 'polarity flipped — a different claim.' },
          { s: '<s>The treasurer plans to alter the club accounts.</s>', g: 'tense moved into the future.' },
          { s: 'The treasurer <b>confessed to altering</b> the club accounts.', g: 'confess TO + -ing.' }
        ]
      },
      items: [
        { id: 't1l4s1-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The shop assistant denied changing the price labels overnight.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The shop assistant said she had not altered the labels.',
            'The shop assistant agreed that she had altered the labels.',
            'The shop assistant intends to change the labels.',
            'The shop assistant is changing the labels now.'
          ],
          answer: 0,
          why: 'Option 2 flips the polarity from an admission to a denial, option 3 moves a completed act into the future, and option 4 into the present continuous. Only option 1 keeps all three features: past, positive, and an act already carried out.' },

        { id: 't1l4s1-2', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The contractor denied damaging the mural during the move.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The contractor admitted harming the mural while moving it.',
            'The contractor said he had not harmed the mural while moving it.',
            'The contractor promised not to harm the mural during the move.',
            'The contractor is refusing to move the mural at all.'
          ],
          answer: 1,
          why: '<em>Deny doing</em> is a past denial of a past act. Option 1 reverses the polarity, option 3 turns a denial about the past into a promise about the future, and option 4 replaces the denial with a present refusal to do the job at all.' },

        { id: 't1l4s1-3', type: 'choose', tag: 'vform-prep-ing', level: 'C1',
          stem: 'After three interviews the foreman confessed ______ the inspection sheet himself.',
          options: ['to signing', 'to sign', 'signing', 'sign'],
          answer: 0,
          why: 'The <em>to</em> of <em>confess to</em> is a preposition, so it takes <em>-ing</em>. <em>To sign</em> misreads that <em>to</em> as an infinitive marker, and the two options without it drop the preposition <em>confess</em> requires — that bare pattern belongs to <em>admit</em>, which takes <em>-ing</em> with no preposition at all.' },

        { id: 't1l4s1-4', type: 'choose', tag: 'equiv-pattern', level: 'C1',
          stem: 'Which feature is wrong in this paraphrase? Original: <em>The auditors admitted overlooking the second account.</em> Paraphrase: <em>The auditors will look again at the second account.</em>',
          options: ['The polarity', 'The tense', 'Nothing — it is a good paraphrase', 'The subject'],
          answer: 1,
          why: 'A past admission has become a future action, so the tense is what breaks. The polarity survives, because nothing has been denied, and the subject is the same auditors in both sentences — which is also why the paraphrase cannot be called a good one.' },

        { id: 't1l4s1-5', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The skipper admitted entering the restricted channel without permission.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The skipper plans to enter the restricted channel.',
            'The skipper denied going into the restricted channel.',
            'The skipper accepted that he had gone into the restricted channel.',
            'The skipper is being questioned about the restricted channel.'
          ],
          answer: 2,
          why: 'Only option 3 keeps all three features: past, positive, and an act already carried out. Option 1 turns the admission into a plan, option 2 flips the polarity into a denial, and option 4 reports an ongoing investigation rather than what the skipper accepted.' }
      ]
    },

    /* ------------------------------------------------------------ 4.2 */
    {
      id: 't1l4s2', name: 'Intention, effort and result', cefr: 'C1',
      theory: {
        key: 'An intention is not an outcome, an attempt is not a success, and a paraphrase that upgrades one to the other is wrong.',
        body: [
          'Three verbs do most of the work in this part of the exam, and all three separate what somebody wanted from what actually happened.',
          '<em>meant to</em> — intended. The sentence is silent about whether it happened. A distractor that says <em>successfully</em> anything has added a claim.',
          '<em>tried to</em> — made an effort, against difficulty, possibly failing. <em>tried doing</em> — tested a method. A distractor that turns one into the other changes the story.',
          '<em>managed to</em> — succeeded, and it was hard. <em>failed to</em> — did not. These two are not neutral: they carry the difficulty with them, so "the team did it" is a weaker paraphrase of "the team managed to do it", and "the team did not do it" loses nothing except tone.',
          'Read the four options looking only for an upgrade or a downgrade in certainty. It is faster than reading for meaning, and it finds the distractor more reliably.'
        ],
        simple: [
          '<em>Meant to</em> = intended. It does <u>not</u> say whether it happened.',
          '<em>Tried to</em> = made an effort at something hard, maybe failing. <em>Tried doing</em> = tested a method.',
          '<em>Managed to</em> = succeeded despite difficulty. Watch for options that turn a plan into a success.'
        ],
        examples: [
          { s: 'The school <b>meant to buy</b> the empty plot next door.', g: 'an intention; the sale may never have happened.' },
          { s: 'The school <b>managed to buy</b> the empty plot next door.', g: 'it happened, and it was difficult.' },
          { s: 'The school <b>failed to buy</b> the empty plot next door.', g: 'it did not happen.' },
          { s: '<s>The school successfully bought the plot.</s>', g: 'not a paraphrase of "meant to buy".' }
        ]
      },
      items: [
        { id: 't1l4s2-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The history club meant to photograph every mural in the temple before the rains.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The history club photographed every mural before the rains.',
            'The history club intended to photograph every mural before the rains.',
            'The history club is photographing the murals at the moment.',
            'The history club decided against photographing the murals.'
          ],
          answer: 1,
          why: 'An intention is reported and nothing more. Option 1 asserts a success the original never claims, option 3 turns a past plan into work under way now, and option 4 reverses it into a decision not to act.' },

        { id: 't1l4s2-2', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The crew managed to refloat the barge before the tide turned.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The crew hoped to refloat the barge before the tide turned.',
            'The crew were unable to refloat the barge in time.',
            'The crew were refloating the barge as the tide turned.',
            'The crew succeeded in refloating the barge in time.'
          ],
          answer: 3,
          why: '<em>Manage to</em> asserts success against difficulty, which <em>succeeded in</em> keeps exactly — and note that <em>succeed in</em> takes <em>-ing</em>. Option 1 downgrades the success to a hope, option 2 reverses it into failure, and option 3 turns a finished achievement into something still in progress.' },

        { id: 't1l4s2-3', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The cement plant failed to meet the new dust regulations after two inspections.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The cement plant did not meet the new dust regulations.',
            'The cement plant refused to accept the new dust regulations.',
            'The cement plant will not meet the new dust regulations.',
            'The cement plant barely met the new dust regulations.'
          ],
          answer: 0,
          why: '<em>Fail to</em> is a plain negative about the past. Option 2 adds an intention to resist that the original never mentions, option 3 moves the failure into the future, and option 4 reverses it into a narrow success.' },

        { id: 't1l4s2-4', type: 'choose', tag: 'equiv-pattern', level: 'C1',
          stem: 'What is wrong with this paraphrase? Original: <em>The library tried digitising the newspapers in-house.</em> Paraphrase: <em>The library struggled to digitise the newspapers in-house.</em>',
          options: [
            'The tense has changed.',
            'The polarity has changed.',
            'A tested method has become a difficult effort.',
            'Nothing — the two sentences match.'
          ],
          answer: 2,
          why: '<em>Try</em> + <em>-ing</em> names a method the library experimented with, whereas <em>struggled to</em> imports a difficulty the original never mentions. The tense is the same in both sentences and so is the polarity, which is why neither of those is the fault, and why the paraphrase cannot be called a good one.' },

        { id: 't1l4s2-5', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The steadily expanding student population has already stretched the hostel places.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The student population has stopped growing.',
            'The currently growing student numbers have put pressure on accommodation.',
            'The hostels will be extended for future students.',
            'The student population grew quickly and then levelled off.'
          ],
          answer: 1,
          why: 'The <em>-ing</em> premodifier <em>expanding</em> means the growth is still under way, and the present perfect says the effect is already felt. Option 1 stops the growth, option 3 promises building work the original never mentions, and option 4 makes the growth a finished episode.' }
      ]
    },

    /* ------------------------------------------------------------ 4.3 */
    {
      id: 't1l4s3', name: 'Choosing the closest paraphrase', cefr: 'C1',
      theory: {
        key: 'Work by elimination on features, not by choosing the option that reads best.',
        body: [
          'By this point you have the whole method. Read the original once and note three things in the margin: the time, the polarity, and what the verb pattern actually claims. Then go through the four options crossing out anything that breaks one of them.',
          'The option that survives is the answer even if it sounds flatter than the others. Examiners write the most elegant sentence as a distractor surprisingly often, because fluency is what makes a wrong answer attractive.',
          'Two more traps worth naming. A distractor may swap the subject — the people who did the action for the people it was done to. And a distractor may change the scope: <em>every</em> for <em>most</em>, <em>all</em> for <em>some</em>, <em>always</em> for <em>often</em>. Neither is a grammar error, and both are wrong answers.',
          'Finally, do not be moved by shared vocabulary. An option that repeats four words of the original and changes the verb pattern is further from the meaning than one that shares no vocabulary at all.'
        ],
        simple: [
          'Note three things about the original: the time, the polarity, and what the verb pattern claims.',
          'Cross out any option that breaks one of them. What survives is the answer, even if it sounds plainer.',
          'Watch for two more tricks: swapping who did it, and changing <em>some</em> into <em>all</em>.'
        ],
        examples: [
          { s: 'Original: the health inspectors <b>postponed publishing</b> the canteen results.', g: 'past, positive, the publishing has not happened yet.' },
          { s: '<s>The health inspectors refused to publish the results.</s>', g: 'polarity and meaning both changed.' },
          { s: '<s>The health inspectors published the results late.</s>', g: 'claims it happened; the original does not.' },
          { s: 'The health inspectors <b>delayed the release</b> of the results.', g: 'all three features intact.' }
        ]
      },
      items: [
        { id: 't1l4s3-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The inspectors postponed publishing the findings until the second survey was complete.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The inspectors refused to publish the findings.',
            'The inspectors delayed the release of the findings.',
            'The inspectors published the findings after the second survey.',
            'The inspectors are publishing the findings this week.'
          ],
          answer: 1,
          why: 'Postponing is a delay, not a refusal, so option 1 changes the meaning outright. The original never says publication happened, so option 3 adds an outcome — it is the elegant distractor — and option 4 goes further still by putting the publication in this week.' },

        { id: 't1l4s3-2', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'Most of the committee members objected to rerouting the footpath across the rice fields.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'Every committee member opposed the new line of the footpath.',
            'The committee objected to the state of the rice fields.',
            'A majority of the committee opposed moving the footpath.',
            'The committee agreed to move the footpath after some debate.'
          ],
          answer: 2,
          why: 'Widening <em>most</em> into <em>every</em> changes the scope, objecting to the fields changes what was objected to, and agreeing reverses the polarity. Only option 3 keeps the proportion, the target and the opposition all intact.' },

        { id: 't1l4s3-3', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The factory was fined for discharging waste into the canal.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The factory fined a contractor for polluting the canal.',
            'The factory was punished for releasing waste into the waterway.',
            'The factory avoided a fine by cleaning up the canal.',
            'The factory will be fined if it discharges waste into the canal.'
          ],
          answer: 1,
          why: 'Option 1 swaps who acted on whom, turning the factory from the punished into the punisher; option 3 reverses the outcome, since a fine was in fact imposed; and option 4 moves a finished penalty into a condition about the future. Only option 2 keeps the passive, the past and the penalty.' },

        { id: 't1l4s3-4', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'Having been warned twice, the skipper went on fishing inside the exclusion zone.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'After two warnings, the skipper continued to fish in the zone.',
            'After two warnings, the skipper moved on to a different fishery.',
            'The skipper warned two other boats about the exclusion zone.',
            'The skipper stopped fishing in the zone after two warnings.'
          ],
          answer: 0,
          why: '<em>Go on</em> + <em>-ing</em> is continuation of the same activity. Option 2 reads it as <em>go on to</em>, option 3 swaps the subject, option 4 reverses it.' },

        { id: 't1l4s3-5', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The steadily deteriorating roof beams have forced the closure of the north wing.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The roof beams were repaired and the wing has reopened.',
            'The worsening condition of the beams has led to the wing being closed.',
            'The north wing will close if the beams deteriorate further.',
            'The beams deteriorated once and the wing was briefly shut.'
          ],
          answer: 1,
          why: 'The <em>-ing</em> premodifier says the deterioration is continuing, and the present perfect says the closure has already happened. Option 1 reverses both, option 3 makes the closure conditional and still to come, and option 4 turns a continuing process into a single finished episode.' }
      ]
    }
  ],

  check: {
    id: 't1l4ck', name: 'Systems Check · Reading the pattern as meaning',
    items: [
      { id: 't1l4ck-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The port office admitted underestimating the cost of the new breakwater.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The port office accepted that it had got the cost wrong.',
          'The port office denied any error in the costing.',
          'The port office will revise the cost of the breakwater.',
          'The port office is recalculating the cost at present.'
        ],
        answer: 0,
        why: 'Past, positive, an act already carried out — only option 1 keeps all three. Option 2 flips the polarity into a denial, option 3 moves the sentence into the future, and option 4 into the present continuous.' },

      { id: 't1l4ck-2', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The farm tried grazing the goats on the upper slopes through the dry season.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The farm found it hard to move the goats up the slopes.',
          'The farm experimented with keeping the goats high through the dry season.',
          'The farm intends to graze the goats higher next year.',
          'The farm stopped grazing the goats on the upper slopes.'
        ],
        answer: 1,
        why: '<em>Try</em> + <em>-ing</em> is a method tested. Option 1 imports the difficulty that belongs to the infinitive pattern, option 3 moves a past experiment into next year, and option 4 reports an ending the original never mentions.' },

      { id: 't1l4ck-3', type: 'choose', tag: 'vform-prep-ing', level: 'C1',
        stem: 'Neither company would confess ______ the survey figures before the tender closed.',
        options: ['to seeing', 'to see', 'seeing', 'see'],
        answer: 0,
        why: 'The <em>to</em> of <em>confess to</em> is a preposition, so the verb after it must be <em>-ing</em>. <em>To see</em> treats that <em>to</em> as an infinitive marker, and the two options with no <em>to</em> at all drop the preposition that <em>confess</em> requires.' },

      { id: 't1l4ck-4', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'Some of the tenants regretted signing the ten-year lease.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'Every tenant was unhappy about the length of the lease.',
          'A number of the tenants were sorry they had signed.',
          'The tenants regret that they must sign a ten-year lease.',
          'The tenants refused to sign a lease of that length.'
        ],
        answer: 1,
        why: '<em>Regret</em> + <em>-ing</em> looks back at a completed act, so only option 2 fits. Option 1 widens <em>some</em> into <em>every</em>, option 3 turns the signing into something still ahead, and option 4 reverses the polarity into a refusal to sign at all.' },

      { id: 't1l4ck-5', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The steadily silting harbour mouth has already cost the fleet two days a month.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The harbour mouth was dredged and the fleet lost no time.',
          'The fleet will lose two days a month once the harbour silts up.',
          'The harbour mouth, which is still silting up, has cost the fleet working days.',
          'The harbour mouth silted up once and the fleet lost two days.'
        ],
        answer: 2,
        why: 'The premodifier says the silting continues and the present perfect says the loss has already happened, which only option 3 keeps. Option 1 reverses both, option 2 pushes the loss into the future, and option 4 turns a continuing process into one finished episode.' },

      { id: 't1l4ck-6', type: 'choose', tag: 'equiv-pattern', level: 'C1',
        stem: 'What is wrong with this paraphrase? Original: <em>The two schools agreed to share the sports field.</em> Paraphrase: <em>The two schools shared the field for many years.</em>',
        options: [
          'An agreement has been turned into an outcome.',
          'The polarity has been reversed.',
          'The subject has been swapped.',
          'Nothing — the two sentences match.'
        ],
        answer: 0,
        why: '<em>Agree to do</em> reports a commitment, and the paraphrase turns that commitment into a result. Whether the sharing happened, and for how long, the original does not say. The polarity is unchanged and both sentences keep the two schools as subject, so neither of those is the fault, and the paraphrase is certainly not a match.' }
    ]
  }
});

TOPICS.push(T1);
