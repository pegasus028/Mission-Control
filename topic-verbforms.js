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
          'English uses the same <em>-ing</em> ending for three completely different jobs, and it never marks which one it means. <em>Booking</em> in <em>Booking early saves money</em> is a noun. <em>Booking</em> in <em>the booking office</em> is an adjective. <em>Booking</em> in <em>they are booking the hall</em> is part of the verb. Three jobs, one spelling.',
          'The test for the noun job — grammarians call it the <strong>gerund</strong> — is replacement. If you can put <em>it</em> in the slot and the sentence still stands, the <em>-ing</em> word is a noun: <em>It saves money.</em> That matters enormously, because a noun subject is <u>singular</u>, however many plural words trail behind it.',
          'The test for the adjective job is position: it sits directly in front of a noun and describes it. The test for the verb job is the presence of a form of <em>be</em> — <em>is</em>, <em>are</em>, <em>was</em>, <em>were</em>, <em>has been</em> — somewhere in front of it.',
          'Do this first, every time. Nearly every mark lost in the error-identification section of the exam is lost by students who chose a form before they had decided what the word was doing.'
        ],
        simple: [
          'The <em>-ing</em> ending does three jobs. It can be a noun (<em>Swimming is good for you</em>), an adjective (<em>a swimming pool</em>), or part of the verb (<em>she is swimming</em>).',
          'To test for the noun job, try putting <em>it</em> in the same place. If the sentence still works, the <em>-ing</em> word is a noun — and it is singular.',
          'Always ask "what job is this word doing?" before you choose an answer.'
        ],
        examples: [
          { s: '<b>Filing</b> the reports took the whole afternoon.', g: 'noun — replace with "it": It took the whole afternoon.' },
          { s: 'She works in the <b>filing</b> room on the second floor.', g: 'adjective — it sits in front of a noun and describes it.' },
          { s: 'The clerks <b>are filing</b> the reports now.', g: 'part of the verb — there is a form of "be" in front of it.' },
          { s: '<s>Filing the reports take the whole afternoon.</s>', g: 'the noun job is singular, so the verb must be "takes".' }
        ]
      },
      items: [
        { id: 't1l1s1-1', type: 'choose', tag: 'vform-pos', level: 'B1+',
          stem: 'In <em>Training the new librarians took most of September</em>, what job does <em>Training</em> do?',
          options: [
            'It is the main verb of the sentence.',
            'It is part of a continuous tense.',
            'It is an adjective describing the librarians.',
            'It is a noun, and it is the subject.'
          ],
          answer: 3,
          why: 'Replace it with <em>it</em>: <em>It took most of September.</em> The sentence survives, so the <em>-ing</em> word is a noun — and it is the subject, which is why the verb is the singular <em>took</em>.' },

        { id: 't1l1s1-2', type: 'choose', tag: 'vform-pos', level: 'B1+',
          stem: 'In which sentence is <em>cycling</em> working as an adjective?',
          options: [
            'Cycling to work has cut her travel costs.',
            'Her training plan involves cycling three days a week.',
            'The cycling club meets on Saturday mornings.',
            'She was cycling when the storm broke.'
          ],
          answer: 2,
          why: 'An adjective sits directly in front of a noun and describes it — <em>the cycling club</em>. In the others it is a subject, part of the verb after <em>was</em>, and the object of <em>involves</em>.' },

        { id: 't1l1s1-3', type: 'sort', tag: 'vform-pos', level: 'B1+',
          stem: 'Each phrase contains one <em>-ing</em> word in bold. Put each one in the box for the job it is doing.',
          bins: [
            { key: 'n', label: 'Noun', hint: 'you could say "it" instead' },
            { key: 'a', label: 'Adjective', hint: 'it describes the noun after it' },
            { key: 'v', label: 'Part of the verb', hint: 'there is a form of "be"' }
          ],
          items: [
            { text: '<b>Booking</b> early saves money', bin: 'n' },
            { text: 'the <b>booking</b> office', bin: 'a' },
            { text: 'they are <b>booking</b> the hall', bin: 'v' },
            { text: 'a <b>working</b> lunch', bin: 'a' },
            { text: 'she kept <b>working</b>', bin: 'n' },
            { text: 'the lift is <b>working</b> again', bin: 'v' }
          ],
          why: 'After <em>keep</em> the <em>-ing</em> form is a noun-like object, not part of the verb: <em>keep</em> is the verb and <em>working</em> is what she kept.' },

        { id: 't1l1s1-4', type: 'spot', tag: 'vform-subject-ing', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Maintain the reservoir walls', 'has become', 'the council\'s largest', 'annual expense.'],
          answer: 0,
          fix: 'Maintaining the reservoir walls',
          why: 'A bare verb cannot be a subject in English. Only the <em>-ing</em> form can do the noun job, so it must be <em>Maintaining</em>. The singular <em>has</em> is already correct.' },

        { id: 't1l1s1-5', type: 'choose', tag: 'vform-pos', level: 'B1+',
          stem: 'Which sentence contains an <em>-ing</em> word that is part of the verb?',
          options: [
            'The council is reviewing the parking charges.',
            'Reviewing the charges will take a month.',
            'The committee discussed reviewing the charges.',
            'The reviewing officer signed the report.'
          ],
          answer: 0,
          why: '<em>is reviewing</em> has a form of <em>be</em> in front of it, so it is part of the verb. In the others the <em>-ing</em> word is a subject, an object, and an adjective.' }
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
          { s: 'The committee <b>postponed opening</b> the new wing until March.', g: 'postpone + -ing.' },
          { s: 'He <b>denied taking</b> the keys from the office.', g: 'deny + -ing — the action is already in view.' },
          { s: 'Nobody <b>minded waiting</b> for another twenty minutes.', g: 'mind + -ing.' },
          { s: '<s>The head of department suggested to postpone the inspection.</s>', g: 'suggest never takes "to": suggested postponing.' }
        ]
      },
      items: [
        { id: 't1l1s2-1', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'The festival committee has postponed ______ the outdoor stage until the ground dries out.',
          options: ['to build', 'building', 'build', 'to have built'],
          answer: 1,
          why: '<em>Postpone</em> belongs to the closed list that takes only <em>-ing</em>. The perfect form in option 4 would put the building before the postponing, which is impossible.' },

        { id: 't1l1s2-2', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'The driver denied ______ through the red light, but the junction camera said otherwise.',
          options: ['to drive', 'having to drive', 'drive', 'driving'],
          answer: 3,
          why: '<em>Deny</em> takes <em>-ing</em>. <em>Having to drive</em> is real English but means "being obliged to drive", which is not what he is denying.' },

        { id: 't1l1s2-3', type: 'spot', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The head of department', 'suggested to postpone', 'the inspection', 'until the new microscopes arrived.'],
          answer: 1,
          fix: 'suggested postponing',
          why: '<em>Suggest</em> allows <em>-ing</em> or a that-clause, never <em>to</em> + infinitive. This is the most frequent verb-pattern error at this level.' },

        { id: 't1l1s2-4', type: 'gap', tag: 'vform-gerund-verb', level: 'B1+',
          lines: [
            { who: 'Coach', text: 'We can\'t train on the pitch while it is under water.' },
            { who: 'Captain', text: 'Then I suggest ___ the session to Thursday evening.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['to move', 'moving', 'move', 'to moving'],
          answer: 1,
          why: 'After <em>suggest</em> the verb takes <em>-ing</em>. <em>To moving</em> mixes the infinitive marker with the gerund and is never possible.' },

        { id: 't1l1s2-5', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
          stem: 'The restoration team could not risk ______ the mosaic before the humidity was under control.',
          options: ['lifting', 'to lift', 'lift', 'to lifting'],
          answer: 0,
          why: '<em>Risk</em> takes <em>-ing</em>. It looks at an action already under consideration, which is the sense that runs through most of the <em>-ing</em> list.' }
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
          { s: 'The supplier <b>failed to deliver</b> the parts before the deadline.', g: 'fail + to + infinitive.' },
          { s: 'Both clubs finally <b>agreed to share</b> the pitch fees.', g: 'agree + to + infinitive — a commitment about the future.' },
          { s: 'She <b>managed to finish</b> the translation in a single weekend.', g: 'manage to = succeeded, despite difficulty.' },
          { s: '<s>The volunteers offered carrying the archive boxes.</s>', g: 'offer takes to: offered to carry.' }
        ]
      },
      items: [
        { id: 't1l1s3-1', type: 'choose', tag: 'vform-inf-verb', level: 'B1+',
          stem: 'The supplier failed ______ the replacement parts before the harvest began.',
          options: ['delivering', 'deliver', 'to deliver', 'to delivering'],
          answer: 2,
          why: '<em>Fail</em> takes <em>to</em> + infinitive. Options 1 and 4 use the gerund, and option 2 leaves out the infinitive marker altogether.' },

        { id: 't1l1s3-2', type: 'choose', tag: 'vform-inf-verb', level: 'B1+',
          stem: 'After three rounds of talks the two clubs agreed ______ the cost of the new floodlights.',
          options: ['to share', 'sharing', 'share', 'on share'],
          answer: 0,
          why: '<em>Agree</em> takes <em>to</em> + infinitive. <em>Agree on</em> exists, but it needs a noun after it — <em>agreed on a figure</em>, not <em>on share</em>.' },

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
          words: ['The volunteers offered', 'carrying the archive boxes', 'up to the third floor', 'before the inspection.'],
          answer: 1,
          fix: 'to carry the archive boxes',
          why: '<em>Offer</em> takes <em>to</em> + infinitive. The offer is made now about work that will happen later, which is the forward-looking sense the infinitive carries.' },

        { id: 't1l1s3-5', type: 'gap', tag: 'vform-inf-verb', level: 'B1+',
          lines: [
            { who: 'Student', text: 'Will the reading room be open before the exam?' },
            { who: 'Librarian', text: 'Yes — I have arranged ___ it at seven all week.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['opening', 'for open', 'open', 'to open'],
          answer: 3,
          why: '<em>Arrange</em> takes <em>to</em> + infinitive. <em>Arrange for</em> is possible, but it needs a person after it: <em>arranged for a porter to open it</em>.' }
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
        why: 'It stands directly in front of the noun <em>centre</em> and tells you what kind of centre it is. The subject of the sentence is the whole phrase <em>the recycling centre</em>.' },

      { id: 't1l1ck-2', type: 'choose', tag: 'vform-gerund-verb', level: 'B1+',
        stem: 'The ferry company has consistently avoided ______ its schedule during the monsoon season.',
        options: ['to change', 'to changing', 'change', 'changing'],
        answer: 3,
        why: '<em>Avoid</em> takes only <em>-ing</em>. No amount of meaning will let <em>to</em> in after it.' },

      { id: 't1l1ck-3', type: 'choose', tag: 'vform-inf-verb', level: 'B1+',
        stem: 'The two museums have arranged ______ the same collection on alternate years.',
        options: ['displaying', 'for displaying', 'to display', 'display'],
        answer: 2,
        why: '<em>Arrange</em> takes <em>to</em> + infinitive. It creates a plan about something that has not happened yet.' },

      { id: 't1l1ck-4', type: 'spot', tag: 'vform-gerund-verb', level: 'B1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The surveyor admitted', 'to underestimate the cost', 'of the flood defences', 'by nearly a third.'],
        answer: 1,
        fix: 'underestimating the cost',
        why: '<em>Admit</em> takes <em>-ing</em>. There is an <em>admit to</em> pattern, but the <em>to</em> there is a preposition and would still need <em>-ing</em>: <em>admitted to underestimating</em>.' },

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
          'The delivery van was blocking the loading bay.',
          'Rebuilding the harbour wall will take two summers.',
          'They interviewed the presiding magistrate.',
          'A rising tide closed the causeway at noon.'
        ],
        answer: 1,
        why: 'Only in option 2 can the <em>-ing</em> word be replaced by <em>it</em>: <em>It will take two summers.</em> The others are part of a verb, and adjectives in front of nouns.' }
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
          { s: 'Residents <b>objected to widening</b> the lane.', g: 'the "to" in object to is a preposition.' },
          { s: 'She got the job <b>by translating</b> the sample in under an hour.', g: 'by + -ing answers "how?".' },
          { s: '<s>We look forward to meet the delegation.</s>', g: 'look forward to + -ing: to meeting.' }
        ]
      },
      items: [
        { id: 't1l2s1-1', type: 'choose', tag: 'vform-prep-ing', level: 'B2',
          stem: 'The trustees are committed to ______ free entry for local schools.',
          options: ['maintain', 'be maintained', 'have maintained', 'maintaining'],
          answer: 3,
          why: 'The <em>to</em> in <em>be committed to</em> is a preposition, not an infinitive marker. Test it with a noun: <em>committed to free entry</em>.' },

        { id: 't1l2s1-2', type: 'choose', tag: 'vform-prep-ing', level: 'B2',
          stem: 'The crew finished the survey ______ once for equipment.',
          options: ['without stopping', 'without to stop', 'without stop', 'without having stop'],
          answer: 0,
          why: '<em>Without</em> is a preposition, so only the <em>-ing</em> form can follow it.' },

        { id: 't1l2s1-3', type: 'spot', tag: 'vform-prep-ing', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The residents\' association objected', 'to extend the quarry licence', 'for a further ten years', 'without a public hearing.'],
          answer: 1,
          fix: 'to extending the quarry licence',
          why: 'The <em>to</em> of <em>object to</em> is a preposition. Put a noun in the slot to hear it: <em>objected to the extension</em>.' },

        { id: 't1l2s1-4', type: 'gap', tag: 'vform-prep-ing', level: 'B2',
          lines: [
            { who: 'Registrar', text: 'How did the department cut its marking time?' },
            { who: 'Head', text: 'Mostly by ___ the two first-year courses.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['to merge', 'merge', 'merging', 'merged'],
          answer: 2,
          why: '<em>By</em> is a preposition and answers "how?". Only the <em>-ing</em> form can follow it.' },

        { id: 't1l2s1-5', type: 'choose', tag: 'vform-prep-passive', level: 'B2+',
          stem: 'The committee insisted on every sample ______ before the results were published.',
          options: ['being retested', 'retesting', 'to be retested', 'having retested'],
          answer: 0,
          why: 'Two steps. The preposition <em>on</em> forces <em>-ing</em>; then, because the samples <u>receive</em> the testing rather than doing it, the <em>-ing</em> must be passive: <em>being retested</em>.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't1l2s2', name: '-ing as the subject, and its singular verb', cefr: 'B2',
      theory: {
        key: 'Only the -ing form can be a subject, and that subject is singular however many plural nouns come after it.',
        body: [
          'Two separate errors live in this one slot, and the exam tests both.',
          'The first is using a bare verb as a subject. <em>Monitor the tide gauges has become expensive</em> is not English: <em>monitor</em> there is a command, not a subject. Only the <em>-ing</em> form can do the noun job, so it must be <em>Monitoring the tide gauges</em>.',
          'The second is agreement. The whole <em>-ing</em> phrase is <strong>one idea</strong>, so it takes a singular verb — even when a plural noun is sitting right beside it. <em>Checking the seals on all four tanks <u>is</u> a weekly job.</em> Not <em>are</em>. The word <em>tanks</em> is simply nearer; it is not the subject.',
          'The fix is mechanical. Cover everything between the <em>-ing</em> word and the verb with your hand, and read what is left: <em>Checking … is</em>. Once students do this, the error disappears.'
        ],
        simple: [
          'A verb can only be a subject if it ends in <em>-ing</em>. <em>Monitor the gauges is expensive</em> is wrong; <em>Monitoring the gauges is expensive</em> is right.',
          'An <em>-ing</em> subject is always singular, even if there is a plural word next to it.',
          'Cover the middle of the sentence with your hand and read the subject and the verb together. <em>Checking … is.</em>'
        ],
        examples: [
          { s: '<b>Cataloguing</b> the donated maps <b>has taken</b> two years.', g: 'singular verb, though "maps" is plural.' },
          { s: '<s>Cataloguing the donated maps have taken two years.</s>', g: '"maps" is not the subject; the whole -ing phrase is.' },
          { s: '<s>Repair the footbridges is now urgent.</s>', g: 'a bare verb cannot be a subject: Repairing.' },
          { s: '<b>Replacing</b> the boilers in all six blocks <b>is</b> the largest item in the budget.', g: 'cover the middle: Replacing … is.' }
        ]
      },
      items: [
        { id: 't1l2s2-1', type: 'choose', tag: 'vform-subject-ing', level: 'B2',
          stem: 'Cataloguing the donated maps ______ two full years of volunteer time.',
          options: ['have taken', 'take', 'has taken', 'are taking'],
          answer: 2,
          why: 'The subject is the whole phrase beginning <em>Cataloguing</em>, which is singular. <em>Maps</em> is merely the nearest noun.' },

        { id: 't1l2s2-2', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Inspecting the drainage channels', 'after heavy rain', 'are now a legal duty', 'for every landowner.'],
          answer: 2,
          fix: 'is now a legal duty',
          why: 'Cover the middle and read it: <em>Inspecting … is</em>. The plural <em>channels</em> is inside the subject, not the head of it.' },

        { id: 't1l2s2-3', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Translate the eighteenth-century ledgers', 'has occupied', 'the archive staff', 'since February.'],
          answer: 0,
          fix: 'Translating the eighteenth-century ledgers',
          why: 'A bare verb cannot be a subject. The singular <em>has</em> is already right, which tells you the writer intended a noun phrase here.' },

        { id: 't1l2s2-4', type: 'build', tag: 'vform-subject-ing', level: 'B2',
          stem: 'Two facts: the school repaints the corridors every August; it costs more than anything else in the budget. Say it in one sentence, starting with the repainting.',
          tiles: ['Repainting', 'the corridors', 'every August', 'is', 'the school\'s', 'largest single expense'],
          solution: 'Repainting the corridors every August is the school\'s largest single expense',
          alt: [],
          why: 'The <em>-ing</em> phrase is the subject and takes the singular <em>is</em>, even though <em>corridors</em> stands next to it.' },

        { id: 't1l2s2-5', type: 'choose', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'Which sentence is correct?',
          options: [
            'Recruit and train new lifeguards takes most of the spring.',
            'Recruiting and training new lifeguards take most of the spring.',
            'To recruiting and training new lifeguards takes most of the spring.',
            'Recruiting and training new lifeguards takes most of the spring.'
          ],
          answer: 3,
          why: 'Both verbs must be <em>-ing</em> to act as a subject, and the pair names one single activity, so the verb stays singular.' }
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
          'The same applies after a preposition: <em>by cutting the fleet and retraining the drivers</em> — both <em>-ing</em>, because both hang off <em>by</em>. And after <em>to</em>: <em>they decided to close the annexe and relocate the archive</em>, where the second <em>to</em> is simply left out but understood.',
          'In an error-identification item, circle every <em>and</em> and <em>or</em> first. It is the fastest way to find a planted error, because the broken branch is always in a different form from its partner.'
        ],
        simple: [
          'Verbs joined by <em>and</em> or <em>or</em> must have the same form.',
          'Find the word that controls the list — a modal like <em>should</em>, a preposition like <em>by</em>, or <em>to</em> — and read each verb straight from it.',
          '<em>should inform and suspend</em> ✓ &nbsp;&nbsp; <em>should inform and suspending</em> ✗'
        ],
        examples: [
          { s: 'The trust agreed to <b>close</b> the annexe and <b>relocate</b> the archive.', g: 'both branches read from "to".' },
          { s: 'They cut costs by <b>merging</b> two depots and <b>retraining</b> the drivers.', g: 'both branches read from "by".' },
          { s: '<s>The panel said it should warn the public and issuing a recall.</s>', g: 'should warn and issue.' },
          { s: 'The role involves <b>logging</b> the samples and <b>reporting</b> any breakage.', g: 'involve + -ing, twice.' }
        ]
      },
      items: [
        { id: 't1l2s3-1', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Because the fault was serious,', 'the engineers agreed that they should', 'warn every depot immediately and', 'issuing a full recall.'],
          answer: 3,
          fix: 'issue a full recall',
          why: 'Both branches hang off <em>should</em>, so both must be bare infinitives. Read it straight from the governor: <em>should warn … and should issue</em>.' },

        { id: 't1l2s3-2', type: 'choose', tag: 'vform-parallel', level: 'B2+',
          stem: 'The post involves logging every sample, labelling the trays and ______ any breakage to the technician.',
          options: ['to report', 'report', 'reporting', 'reported'],
          answer: 2,
          why: '<em>Involve</em> takes <em>-ing</em>, and all three branches of the list must match: <em>logging … labelling … reporting</em>.' },

        { id: 't1l2s3-3', type: 'choose', tag: 'vform-parallel', level: 'B2+',
          stem: 'The trust reduced its deficit by closing two depots and ______ the delivery rounds.',
          options: ['redrew', 'to redraw', 'redraw', 'redrawing'],
          answer: 3,
          why: 'Both branches hang off the preposition <em>by</em>, which forces <em>-ing</em> on each of them.' },

        { id: 't1l2s3-4', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The new policy requires staff', 'to record every visitor,', 'checking identity documents', 'and lock the side entrance at dusk.'],
          answer: 2,
          fix: 'to check identity documents',
          why: 'The list is governed by <em>to</em>. The first and third branches are infinitives, so the middle one must be too — one broken branch, not two.' },

        { id: 't1l2s3-5', type: 'choose', tag: 'vform-parallel', level: 'C1',
          stem: 'Which sentence is correctly parallel?',
          options: [
            'The review recommends auditing the accounts, to publish the findings and that a trustee resigns.',
            'The review recommends to audit the accounts, publishing the findings and appointing a new trustee.',
            'The review recommends auditing the accounts, publishing the findings and appointing a new trustee.',
            'The review recommends audit the accounts, publish the findings and appointing a new trustee.'
          ],
          answer: 2,
          why: '<em>Recommend</em> takes <em>-ing</em>, and all three branches must share that form. The other options change form halfway through the list.' }
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
        why: 'The <em>to</em> of <em>be opposed to</em> is a preposition. Put a noun in the slot to check: <em>opposed to renewal</em>.' },

      { id: 't1l2ck-2', type: 'choose', tag: 'vform-subject-ing', level: 'B2',
        stem: 'Restoring the two stained-glass windows ______ longer than the whole roof repair.',
        options: ['have taken', 'take', 'has taken', 'were taking'],
        answer: 2,
        why: 'The <em>-ing</em> phrase is one singular subject. <em>Windows</em> sits inside it and cannot control the verb.' },

      { id: 't1l2ck-3', type: 'spot', tag: 'vform-parallel', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The guidance asks head teachers', 'to publish the results,', 'to explain the method', 'and inviting parents to comment.'],
        answer: 3,
        fix: 'and to invite parents to comment',
        why: 'Three branches, all governed by <em>to</em>. The last one has slipped into <em>-ing</em> and no longer connects to <em>asks head teachers</em>.' },

      { id: 't1l2ck-4', type: 'choose', tag: 'vform-prep-passive', level: 'B2+',
        stem: 'The port authority insists on every container ______ before it leaves the dock.',
        options: ['being weighed', 'to be weighed', 'weighing', 'having weighed'],
        answer: 0,
        why: 'The preposition <em>on</em> forces <em>-ing</em>; the containers receive the weighing, so it must be the passive <em>being weighed</em>.' },

      { id: 't1l2ck-5', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Digitise the parish registers', 'was expected to take', 'eighteen months,', 'but it took three years.'],
        answer: 0,
        fix: 'Digitising the parish registers',
        why: 'The singular <em>was</em> shows a noun phrase was intended, and only the <em>-ing</em> form can be a subject.' },

      { id: 't1l2ck-6', type: 'build', tag: 'vform-prep-ing', level: 'B2+',
        stem: 'The staff did two things to cut waiting times: they extended the opening hours, and they took on four porters. Say it in one sentence beginning "The hospital cut waiting times by".',
        tiles: ['The', 'hospital', 'cut', 'waiting times', 'by', 'extending', 'its opening hours', 'and', 'taking on', 'four porters'],
        solution: 'The hospital cut waiting times by extending its opening hours and taking on four porters',
        alt: [],
        why: 'Both branches hang off the preposition <em>by</em>, so both take <em>-ing</em>.' }
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
          { s: 'She <b>remembers watching</b> the last steam train leave.', g: 'the watching happened; the memory is of it.' },
          { s: 'He <b>remembered to switch off</b> the kiln.', g: 'a duty, carried out.' },
          { s: 'They <b>regret selling</b> the meadow.', g: 'sorry about something already done.' },
          { s: 'We <b>regret to inform</b> you that the post has been filled.', g: 'fixed formal frame for bad news.' }
        ]
      },
      items: [
        { id: 't1l3s1-1', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'She still remembers ______ the last steam train leave the branch line in 1962.',
          options: ['to watch', 'to have watched', 'watch', 'watching'],
          answer: 3,
          why: 'The watching happened and the memory is of it, so the <em>-ing</em> form is required. <em>Remember to watch</em> would be a duty for the future.' },

        { id: 't1l3s1-2', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'The letter is still in her bag, so clearly she forgot ______ it.',
          options: ['posting', 'post', 'to post', 'having posted'],
          answer: 2,
          why: 'The letter was never posted, so this is a duty not carried out: <em>forget to do</em>. <em>Forgot posting</em> would mean she did post it and then lost the memory.' },

        { id: 't1l3s1-3', type: 'equiv', tag: 'vform-both', level: 'B2+',
          given: 'The trustees regret selling the water meadow to the developer.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The trustees are sorry about a sale that has already happened.',
            'The trustees are about to announce an unwelcome sale.',
            'The trustees have decided not to sell the meadow after all.',
            'The trustees are sorry they will have to sell the meadow.'
          ],
          answer: 0,
          why: '<em>Regret</em> + <em>-ing</em> looks back at something done. The announcement reading belongs to <em>regret to inform</em>, and neither option 3 nor 4 keeps the sale in the past.' },

        { id: 't1l3s1-4', type: 'sort', tag: 'vform-both', level: 'B2+',
          stem: 'Does each sentence look back at something that happened, or name a duty?',
          bins: [
            { key: 'back', label: 'Looking back (-ing)', hint: 'it really happened' },
            { key: 'duty', label: 'A duty (to + infinitive)', hint: 'a job to carry out' }
          ],
          items: [
            { text: 'remembered switching off the kiln', bin: 'back' },
            { text: 'remembered to switch off the kiln', bin: 'duty' },
            { text: 'forgot locking the vestry', bin: 'back' },
            { text: 'forgot to lock the vestry', bin: 'duty' },
            { text: 'regrets accepting the post', bin: 'back' },
            { text: 'regrets to announce the closure', bin: 'duty' }
          ],
          why: 'The <em>-ing</em> column all describe real past events. The <em>to</em> column are all obligations, carried out or not.' },

        { id: 't1l3s1-5', type: 'spot', tag: 'vform-both', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The committee regrets', 'announcing that the museum', 'will close to the public', 'for the whole of next winter.'],
          answer: 1,
          fix: 'to announce that the museum',
          why: 'This is an announcement being made now about something still to come, which is the frozen formal frame <em>regret to announce</em>. <em>Regrets announcing</em> would mean they are sorry they ever made the announcement.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't1l3s2', name: 'try, stop, go on', cefr: 'B2+',
      theory: {
        key: 'try doing = experiment with it; try to do = make an effort at something difficult. stop doing = end it; stop to do = pause in order to.',
        body: [
          '<em>Try</em> is the one the exam reaches for most. <em>They tried rebuilding the wall in lime mortar</em> means they experimented — it was one method among several, and it may well have worked. <em>They tried to rebuild the wall</em> means the rebuilding was hard and may have failed. The <em>-ing</em> form is about method; the infinitive is about effort.',
          '<em>Stop</em> is cleaner. <em>He stopped reading the minutes</em> — the reading ended. <em>He stopped to read the minutes</em> — he was doing something else, and he paused for the purpose of reading. The infinitive here is a purpose, not a verb pattern at all, which is why it feels different.',
          '<em>Go on</em> splits by continuity. <em>She went on talking</em> means she continued the same activity. <em>She went on to talk about funding</em> means she finished one thing and moved to the next.',
          'In a closest-meaning question these differences are the whole item. A paraphrase that turns an experiment into an attempt, or an ending into a pause, is wrong even when every other word matches.'
        ],
        simple: [
          '<em>Try doing</em> = test a method. <em>Try to do</em> = attempt something difficult.',
          '<em>Stop doing</em> = the action ends. <em>Stop to do</em> = you pause so that you can do it.',
          '<em>Go on doing</em> = continue. <em>Go on to do</em> = move to the next thing.'
        ],
        examples: [
          { s: 'The masons <b>tried rebuilding</b> the wall in lime mortar.', g: 'a method they experimented with.' },
          { s: 'The masons <b>tried to rebuild</b> the wall before the frost.', g: 'an effort against difficulty.' },
          { s: 'The surveyor <b>stopped taking</b> readings at four.', g: 'the readings ended.' },
          { s: 'The surveyor <b>stopped to take</b> a reading at the ford.', g: 'a pause for that purpose.' }
        ]
      },
      items: [
        { id: 't1l3s2-1', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The conservators tried warming the panel slowly to release the old varnish.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The conservators experimented with heating the panel gently.',
            'The conservators struggled to raise the temperature of the panel.',
            'The conservators refused to apply any heat to the panel.',
            'The conservators will attempt to warm the panel next week.'
          ],
          answer: 0,
          why: '<em>Try</em> + <em>-ing</em> names a method being tested. Option 2 reads it as effort against difficulty, which is the infinitive meaning.' },

        { id: 't1l3s2-2', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'Half way along the ridge the surveyor stopped ______ a reading, then carried on to the summit.',
          options: ['taking', 'to taking', 'take', 'to take'],
          answer: 3,
          why: 'She paused for the purpose of taking one reading, and then continued. <em>Stopped taking</em> would mean she gave up readings altogether.' },

        { id: 't1l3s2-3', type: 'choose', tag: 'vform-both', level: 'B2+',
          stem: 'After forty years the ferry company stopped ______ the evening crossing.',
          options: ['to run', 'run', 'running', 'to running'],
          answer: 2,
          why: 'The crossing ended for good. <em>Stopped to run</em> would mean they paused in order to run it, which is nonsense here.' },

        { id: 't1l3s2-4', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The chair went on to explain the shortfall in the building fund.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The chair continued explaining the same point at length.',
            'The chair had been explaining the shortfall for some time.',
            'The chair refused to discuss the building fund.',
            'The chair moved on to a new point about the building fund.'
          ],
          answer: 3,
          why: '<em>Go on to do</em> marks a move to the next topic; <em>go on doing</em> would be continuing the same one.' },

        { id: 't1l3s2-5', type: 'spot', tag: 'vform-both', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The engineers tried to use', 'a lighter grade of steel,', 'and when that failed', 'they tried to weld the joints instead.'],
          answer: 3,
          fix: 'they tried welding the joints instead',
          why: 'The sentence is describing a series of methods being tested, one after another, which is <em>try</em> + <em>-ing</em>. The first clause can stand because it introduces the attempt.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't1l3s3', name: 'mean, need, and the passive -ing', cefr: 'C1',
      theory: {
        key: 'mean to do = intend; mean doing = involve as a consequence. need doing = needs to be done.',
        body: [
          '<em>Mean</em> carries two unrelated senses and the form tells you which. <em>The trust meant to reopen the mill in April</em> — an intention, which may or may not have been realised. <em>Reopening the mill meant rewiring the whole building</em> — a consequence, something the first thing entailed. Intention takes the infinitive; entailment takes <em>-ing</em>.',
          'The intention sense is the one the exam tests, because it lets an examiner offer you a distractor that keeps the words and drops the intention: "the company successfully limited access" is not the same claim as "the company intended to limit access". An intention says nothing about whether it happened.',
          '<em>Need</em> + <em>-ing</em> is a passive in disguise. <em>The gutters need clearing</em> means they need <u>to be</u> cleared; somebody else will do it. <em>Need to do</em> keeps the subject as the doer: <em>we need to clear the gutters</em>.',
          'Both patterns are traps for a reader in a hurry, because both versions of each sentence are perfectly grammatical. The only thing separating them is the form, which is exactly why they are useful to an examiner.'
        ],
        simple: [
          '<em>Mean to do</em> = intend. <em>Mean doing</em> = have as a consequence.',
          '<em>The trust meant to reopen the mill</em> — that was the plan. <em>Reopening the mill meant rewiring it</em> — that was what it involved.',
          '<em>The gutters need clearing</em> = they need to be cleared by somebody.'
        ],
        examples: [
          { s: 'The trust <b>meant to reopen</b> the mill in April.', g: 'an intention — it may not have happened.' },
          { s: 'Reopening the mill <b>meant rewiring</b> the whole building.', g: 'a consequence it entailed.' },
          { s: 'The lock gates <b>need replacing</b> before the winter.', g: 'passive in meaning: need to be replaced.' },
          { s: 'We <b>need to replace</b> the lock gates before the winter.', g: 'the subject is the doer.' }
        ]
      },
      items: [
        { id: 't1l3s3-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The board meant to restrict the quarry to daylight hours.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The board successfully limited quarrying to daylight hours.',
            'The board intended to limit quarrying to daylight hours.',
            'The board is currently restricting quarrying to daylight hours.',
            'Restricting the quarry meant losing the night shift.'
          ],
          answer: 1,
          why: '<em>Mean to do</em> reports an intention and says nothing about the outcome. Option 1 asserts success the original never claims; option 4 switches to the entailment sense.' },

        { id: 't1l3s3-2', type: 'choose', tag: 'vform-both', level: 'C1',
          stem: 'Moving the collection to the new store meant ______ every crate a second time.',
          options: ['to label', 'label', 'labelling', 'to be labelled'],
          answer: 2,
          why: 'This is the consequence sense — what the move entailed — which takes <em>-ing</em>.' },

        { id: 't1l3s3-3', type: 'choose', tag: 'vform-both', level: 'C1',
          stem: 'The lock gates need ______ before the canal reopens in March.',
          options: ['replacing', 'to replace', 'replace', 'replaced'],
          answer: 0,
          why: '<em>Need</em> + <em>-ing</em> is passive in meaning: the gates need to be replaced. <em>Need to replace</em> would make the gates the ones doing the replacing.' },

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
            { text: 'meant to cut the fares', bin: 'int' },
            { text: 'meant losing two summer seasons', bin: 'con' }
          ],
          why: 'The infinitive always looks forward to a plan; the <em>-ing</em> form always names what something involved.' },

        { id: 't1l3s3-5', type: 'spot', tag: 'vform-both', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The east window', 'needs to reglaze', 'before the scaffolding', 'comes down in October.'],
          answer: 1,
          fix: 'needs reglazing',
          why: 'The window receives the work. Either <em>needs reglazing</em> or <em>needs to be reglazed</em>; <em>needs to reglaze</em> makes the window the glazier.' }
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
        why: 'He is recalling an act he performed, so the <em>-ing</em> form is required.' },

      { id: 't1l3ck-2', type: 'choose', tag: 'vform-both', level: 'B2+',
        stem: 'The bell ringers stopped ______ at nine so that the service could begin.',
        options: ['to practise', 'practise', 'practising', 'to practising'],
        answer: 2,
        why: 'The practising ended. <em>Stopped to practise</em> would mean they paused in order to practise, which contradicts the service beginning.' },

      { id: 't1l3ck-3', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The keepers tried moving the hives to the far side of the orchard.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The keepers experimented with relocating the hives.',
          'The keepers struggled to lift the hives across the orchard.',
          'The keepers intend to relocate the hives next season.',
          'The keepers refused to disturb the hives at all.'
        ],
        answer: 0,
        why: '<em>Try</em> + <em>-ing</em> is a method tested, not an effort made against difficulty.' },

      { id: 't1l3ck-4', type: 'choose', tag: 'vform-both', level: 'C1',
        stem: 'The clock mechanism needs ______ twice a year by a specialist.',
        options: ['to service', 'to servicing', 'service', 'servicing'],
        answer: 3,
        why: '<em>Need</em> + <em>-ing</em> carries a passive meaning, and the <em>by</em> phrase confirms somebody else does the work.' },

      { id: 't1l3ck-5', type: 'spot', tag: 'vform-both', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The archivist forgot', 'returning the parish register', 'to the strongroom,', 'and it sat on her desk all weekend.'],
        answer: 1,
        fix: 'to return the parish register',
        why: 'The register was never returned, so this is a duty not carried out. <em>Forgot returning</em> would mean she did return it and then forgot doing so.' },

      { id: 't1l3ck-6', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The council meant to widen the bridge approach before the festival.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The council widened the bridge approach in time for the festival.',
          'The council intended to widen the bridge approach before the festival.',
          'Widening the bridge approach involved closing it for the festival.',
          'The council is widening the bridge approach during the festival.'
        ],
        answer: 1,
        why: 'An intention is reported, with no claim that it was realised. Option 1 asserts completion, option 3 switches to the entailment sense, option 4 changes the time.' }
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
          '<strong>Verb pattern.</strong> <em>admitted doing</em> = confessed to doing. Note the preposition: <em>confess to</em> takes <em>-ing</em>, so <em>confessed to ignoring</em> is right and <em>confessed to ignore</em> is not. Run the three checks in that order and most items collapse to one candidate before you have thought about meaning at all.'
        ],
        simple: [
          'In a closest-meaning question, the three wrong answers usually each break one thing.',
          'Check the <strong>tense</strong> (has it moved to the future?), the <strong>polarity</strong> (has admit become deny?) and the <strong>verb pattern</strong> (does it still mean the same action?).',
          '<em>admitted doing</em> = <em>confessed to doing</em>. After <em>confess to</em> you need <em>-ing</em>.'
        ],
        examples: [
          { s: 'The clerk <b>admitted altering</b> the figures.', g: '= confessed to altering them.' },
          { s: '<s>The clerk denied altering the figures.</s>', g: 'polarity flipped — a different claim.' },
          { s: '<s>The clerk plans to alter the figures.</s>', g: 'tense moved into the future.' },
          { s: 'The clerk <b>confessed to altering</b> the figures.', g: 'confess TO + -ing.' }
        ]
      },
      items: [
        { id: 't1l4s1-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The assistant curator admitted removing two folios from the bound volume.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The assistant curator confessed to taking two folios out.',
            'The assistant curator denied touching the bound volume.',
            'The assistant curator intends to remove two folios.',
            'The assistant curator is currently removing two folios.'
          ],
          answer: 0,
          why: 'Option 2 flips the polarity, option 3 moves it into the future and option 4 into the present. Only option 1 keeps a past admission of a completed act.' },

        { id: 't1l4s1-2', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The contractor denied damaging the mosaic during the lifting.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The contractor admitted harming the mosaic while lifting it.',
            'The contractor said he had not harmed the mosaic while lifting it.',
            'The contractor promised not to harm the mosaic during the lifting.',
            'The contractor is refusing to lift the mosaic at all.'
          ],
          answer: 1,
          why: '<em>Deny doing</em> is a past denial of a past act. Option 1 reverses the polarity and option 3 turns a denial into a promise about the future.' },

        { id: 't1l4s1-3', type: 'choose', tag: 'vform-prep-ing', level: 'C1',
          stem: 'After three interviews the foreman confessed ______ the inspection sheet himself.',
          options: ['to signing', 'to sign', 'signing', 'sign'],
          answer: 0,
          why: 'The <em>to</em> of <em>confess to</em> is a preposition, so it takes <em>-ing</em>. <em>Admit</em>, by contrast, takes the bare <em>-ing</em> with no preposition.' },

        { id: 't1l4s1-4', type: 'choose', tag: 'equiv-pattern', level: 'C1',
          stem: 'Which feature is wrong in this paraphrase? Original: <em>The auditors admitted overlooking the second account.</em> Paraphrase: <em>The auditors will look again at the second account.</em>',
          options: ['The polarity', 'The tense', 'Nothing — it is a good paraphrase', 'The subject'],
          answer: 1,
          why: 'A past admission has become a future action. Polarity and subject survive; the time does not.' },

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
          why: 'Only option 3 keeps all three features: past, positive, and an act already carried out.' }
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
          { s: 'The trust <b>meant to buy</b> the meadow.', g: 'an intention; the sale may never have happened.' },
          { s: 'The trust <b>managed to buy</b> the meadow.', g: 'it happened, and it was difficult.' },
          { s: 'The trust <b>failed to buy</b> the meadow.', g: 'it did not happen.' },
          { s: '<s>The trust successfully bought the meadow.</s>', g: 'not a paraphrase of "meant to buy".' }
        ]
      },
      items: [
        { id: 't1l4s2-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The society meant to record every headstone in the churchyard before the spring.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The society recorded every headstone before the spring.',
            'The society intended to record every headstone before the spring.',
            'The society is recording the headstones at the moment.',
            'The society decided against recording the headstones.'
          ],
          answer: 1,
          why: 'An intention is reported and nothing more. Option 1 asserts success the original never claims.' },

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
          why: '<em>Manage to</em> asserts success against difficulty, which <em>succeeded in</em> keeps exactly. Note that <em>succeed in</em> takes <em>-ing</em>.' },

        { id: 't1l4s2-3', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The mill failed to meet the new dust regulations after two inspections.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The mill did not meet the new dust regulations.',
            'The mill refused to accept the new dust regulations.',
            'The mill will not meet the new dust regulations.',
            'The mill barely met the new dust regulations.'
          ],
          answer: 0,
          why: '<em>Fail to</em> is a plain negative about the past. Option 2 adds an intention to resist, option 3 moves it forward, option 4 reverses it.' },

        { id: 't1l4s2-4', type: 'choose', tag: 'equiv-pattern', level: 'C1',
          stem: 'What is wrong with this paraphrase? Original: <em>The library tried digitising the newspapers in-house.</em> Paraphrase: <em>The library struggled to digitise the newspapers in-house.</em>',
          options: [
            'The tense has changed.',
            'The polarity has changed.',
            'A tested method has become a difficult effort.',
            'Nothing — the two sentences match.'
          ],
          answer: 2,
          why: '<em>Try</em> + <em>-ing</em> names a method the library experimented with; <em>struggled to</em> imports a difficulty the original never mentions.' },

        { id: 't1l4s2-5', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The rapidly expanding student population has already stretched the halls of residence.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The student population has stopped growing.',
            'The currently growing student numbers have put pressure on accommodation.',
            'The halls of residence will be extended for future students.',
            'The student population grew quickly and then levelled off.'
          ],
          answer: 1,
          why: 'The <em>-ing</em> premodifier <em>expanding</em> means the growth is still under way, and the present perfect says the effect is already felt. Only option 2 keeps both.' }
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
          { s: 'Original: the inspectors <b>postponed publishing</b> the findings.', g: 'past, positive, the publishing has not happened yet.' },
          { s: '<s>The inspectors refused to publish the findings.</s>', g: 'polarity and meaning both changed.' },
          { s: '<s>The inspectors published the findings late.</s>', g: 'claims it happened; the original does not.' },
          { s: 'The inspectors <b>delayed the release</b> of the findings.', g: 'all three features intact.' }
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
          why: 'Postponing is a delay, not a refusal, and the original does not say publication ever happened. Option 3 is the elegant distractor: it adds an outcome.' },

        { id: 't1l4s3-2', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'Most of the parish councillors objected to rerouting the footpath across the water meadow.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'Every councillor opposed the new line of the footpath.',
            'The councillors objected to the state of the water meadow.',
            'A majority of the councillors opposed moving the footpath.',
            'The councillors agreed to move the footpath after some debate.'
          ],
          answer: 2,
          why: 'Widening <em>most</em> into <em>every</em> changes the scope; objecting to the meadow changes what was objected to; agreeing reverses the polarity.' },

        { id: 't1l4s3-3', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The distillery was fined for discharging waste into the burn.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The distillery fined a contractor for polluting the burn.',
            'The distillery was punished for releasing waste into the stream.',
            'The distillery avoided a fine by cleaning up the burn.',
            'The distillery will be fined if it discharges waste into the burn.'
          ],
          answer: 1,
          why: 'Option 1 swaps who acted on whom, option 3 reverses the outcome, option 4 moves it into a condition about the future.' },

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
          given: 'The steadily deteriorating roof timbers have forced the closure of the north aisle.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The roof timbers were repaired and the aisle has reopened.',
            'The worsening condition of the timbers has led to the aisle being closed.',
            'The north aisle will close if the timbers deteriorate further.',
            'The timbers deteriorated once and the aisle was briefly shut.'
          ],
          answer: 1,
          why: 'The <em>-ing</em> premodifier says the deterioration is continuing, and the present perfect says the closure has already happened. Options 3 and 4 break one of those each.' }
      ]
    }
  ],

  check: {
    id: 't1l4ck', name: 'Systems Check · Reading the pattern as meaning',
    items: [
      { id: 't1l4ck-1', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The harbour board admitted underestimating the cost of the new breakwater.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The harbour board confessed to getting the cost wrong.',
          'The harbour board denied any error in the costing.',
          'The harbour board will revise the cost of the breakwater.',
          'The harbour board is recalculating the cost at present.'
        ],
        answer: 0,
        why: 'Past, positive, an act already carried out. The other three break polarity, tense and tense again.' },

      { id: 't1l4ck-2', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The farm tried grazing the sheep on the upper slopes through the winter.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The farm found it hard to move the sheep up the slopes.',
          'The farm experimented with keeping the sheep high through winter.',
          'The farm intends to graze the sheep higher next winter.',
          'The farm stopped grazing the sheep on the upper slopes.'
        ],
        answer: 1,
        why: '<em>Try</em> + <em>-ing</em> is a method tested. Option 1 imports difficulty from the infinitive pattern.' },

      { id: 't1l4ck-3', type: 'choose', tag: 'vform-prep-ing', level: 'C1',
        stem: 'Neither company would confess ______ the survey figures before the tender closed.',
        options: ['to seeing', 'to see', 'seeing', 'see'],
        answer: 0,
        why: '<em>Confess to</em> takes a preposition, so the verb after it must be <em>-ing</em>.' },

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
        why: '<em>Regret</em> + <em>-ing</em> looks back at a completed act, and <em>some</em> must not become <em>every</em>.' },

      { id: 't1l4ck-5', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
        given: 'The rapidly silting harbour mouth has already cost the fleet two days a month.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The harbour mouth was dredged and the fleet lost no time.',
          'The fleet will lose two days a month once the harbour silts up.',
          'The harbour mouth, which is still silting up, has cost the fleet working days.',
          'The harbour mouth silted up once and the fleet lost two days.'
        ],
        answer: 2,
        why: 'The premodifier says the silting continues and the present perfect says the loss has already happened.' },

      { id: 't1l4ck-6', type: 'choose', tag: 'equiv-pattern', level: 'C1',
        stem: 'What is wrong with this paraphrase? Original: <em>The two mills agreed to share the leat.</em> Paraphrase: <em>The two mills shared the leat for many years.</em>',
        options: [
          'An agreement has been turned into an outcome.',
          'The polarity has been reversed.',
          'The subject has been swapped.',
          'Nothing — the two sentences match.'
        ],
        answer: 0,
        why: '<em>Agree to do</em> reports a commitment. Whether the sharing happened, and for how long, the original does not say.' }
    ]
  }
});

TOPICS.push(T1);
