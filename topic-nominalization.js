/* ===========================================================================
   SYSTEM 03 — Nominalization
   Built on the class deck "Unit 4 — Nominalization" (27/08/2026): the four-slot
   card AGENT / PROCESS / LINKING VERB / RESULT, the three Focuses, the Golden
   Rule, and the strong-verb list.
   =========================================================================== */

var T3 = {
  id: 't3', n: 3, code: 'System 03', art: 'stack',
  name: 'Nominalization',
  cefr: 'B2–C1',
  blurb: 'Turning an action into a thing so that it can be the subject of the next sentence. The secret code of academic voice, and five marks of the paper.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T3.levels.push({
  id: 't3l1', n: 1, name: 'Turning actions into things', cefr: 'B2',
  blurb: 'The suffixes, and the difference between the process and the result.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't3l1s1', name: 'Lexical suffixes: -tion, -ment, -ance', cefr: 'B2',
      theory: {
        key: 'Lexical suffixes transform action verbs into true, abstract nouns — they strip away the verb\'s active energy and freeze it into a static concept.',
        body: [
          'Three suffixes do most of the work: <strong>-tion / -sion</strong>, <strong>-ment</strong> and <strong>-ance / -ence</strong>. Decide → deci<u>sion</u>. Develop → develop<u>ment</u>. Perform → perfor<u>mance</u>. Introduce → the introduc<u>tion</u>. Cancel → the cancel<u>lation</u>.',
          'Which suffix a verb takes is a fact about that word, not a rule you can derive, so learn them in families and check the ones you are unsure of. What <u>is</u> predictable is how the new noun behaves, and three consequences follow every time.',
          '<strong>It focuses on the result.</strong> A true noun names a completed state, an idea or a final product rather than the doing of it.',
          '<strong>It requires prepositions.</strong> A noun cannot take a direct object the way a verb can, so it reaches its object through <em>of</em>: <em>the implementation <u>of</u> the policy</em>, never "the implementation the policy". <strong>And it takes adjectives, not adverbs</strong>: <em>a careful analysis of the data</em>, not "a carefully analysis". Those two facts give you the fastest possible check on a nominalized phrase.'
        ],
        simple: [
          'Verbs become nouns with <em>-tion</em>, <em>-ment</em> or <em>-ance</em>: decide → decision, develop → development, perform → performance.',
          'A true noun needs <em>of</em> to reach its object: <em>the implementation <u>of</u> the policy</em>.',
          'A true noun is described by an adjective, not an adverb: <em>a careful analysis</em>, not "a carefully analysis".'
        ],
        examples: [
          { s: 'decide → the <b>decision</b> · develop → the <b>development</b>', g: 'the three main suffixes, learned by family.' },
          { s: 'the <b>implementation of</b> the new exam timetable', g: 'a true noun reaches its object through "of".' },
          { s: 'a <b>careful analysis</b> of the exam results', g: 'adjective, because it is now a noun.' },
          { s: '<s>a carefully analysis of the exam results</s>', g: 'adverbs modify verbs, not nouns.' }
        ]
      },
      items: [
        { id: 't3l1s1-1', type: 'choose', tag: 'nom-suffix', level: 'B2',
          stem: 'Which is the correct noun form of <em>cancel</em>?',
          options: ['cancelment', 'cancelation of', 'cancelance', 'cancellation'],
          answer: 3,
          why: 'Suffix choice is lexical, and <em>cancel</em> takes <em>-lation</em> with a doubled l. <em>Cancelment</em> borrows the suffix of <em>development</em>, <em>cancelance</em> the suffix of <em>performance</em>, and <em>cancelation of</em> spells the right family wrongly and drags a preposition into a one-word answer. None of the three is an English word.' },

        { id: 't3l1s1-2', type: 'choose', tag: 'nom-suffix', level: 'B2',
          stem: 'The ______ of the new exam timetable took the whole of April.',
          options: ['preparation', 'prepare', 'prepared', 'preparing'],
          answer: 0,
          why: 'The slot needs a noun after <em>The</em> and before <em>of</em>. <em>Prepare</em> is a bare verb and <em>prepared</em> a past form, and neither can sit behind an article. <em>Preparing</em> is possible as a gerund, but a gerund takes a direct object and would give <em>preparing the new exam timetable</em> with no <em>of</em>.' },

        { id: 't3l1s1-3', type: 'sort', tag: 'nom-suffix', level: 'B2',
          stem: 'Which suffix does each verb take?',
          bins: [
            { key: 'tion', label: '-tion / -sion', hint: 'introduce → introduction' },
            { key: 'ment', label: '-ment', hint: 'develop → development' },
            { key: 'ance', label: '-ance / -ence', hint: 'perform → performance' }
          ],
          items: [
            { text: 'introduce', bin: 'tion' },
            { text: 'achieve', bin: 'ment' },
            { text: 'comply', bin: 'ance' },
            { text: 'expand', bin: 'tion' },
            { text: 'replace', bin: 'ment' },
            { text: 'attend', bin: 'ance' }
          ],
          why: '<em>Expand</em> gives <em>expansion</em> — the <em>-sion</em> spelling of the same suffix. Sound is not a safe guide; learn the family.' },

        { id: 't3l1s1-4', type: 'spot', tag: 'nom-suffix', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['A carefully analysis', 'of the museum visitor figures', 'showed that attendance', 'had fallen every rainy season.'],
          answer: 0,
          fix: 'A careful analysis',
          why: 'Once the verb has become a noun it is described by an adjective. An adverb cannot modify a noun. The other three parts are sound: <em>of</em> reaches the object correctly, <em>attendance</em> is a well-formed noun, and the past perfect is the right tense inside the reported finding.' },

        { id: 't3l1s1-5', type: 'choose', tag: 'nom-suffix', level: 'B2',
          stem: 'Which phrase is correctly built?',
          options: [
            'the replacement the cracked solar panels',
            'the replacement of the cracked solar panels',
            'the replacing of the cracked solar panels quickly',
            'the replace of the cracked solar panels'
          ],
          answer: 1,
          why: 'A true noun reaches its object through <em>of</em>. Option 1 omits it and lets a noun take a direct object, option 3 hangs an adverb on a noun phrase that has no verb for it to modify, and option 4 leaves the verb unchanged where a noun is needed.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't3l1s2', name: 'Process or result: -ing against the true noun', cefr: 'B2+',
      theory: {
        key: 'The -ing form focuses on the active process unfolding; the true noun frames the same action as a concrete, finished result.',
        body: [
          'Both forms are correct English. They are not interchangeable, because they point the reader at different things.',
          '<em><strong>Developing</strong> the app was challenging.</em> — the daily work, the time, the effort. <em>The <strong>development</strong> of the app changed how students revise.</em> — the finished product, as a historical fact.',
          '<em><strong>Assessing</strong> the scholarship applications took three hours.</em> — the active procedure of reading and grading. <em>The final <strong>assessment</strong> was perfectly balanced.</em> — the judgement itself, as an object you could hold.',
          'The grammar follows the meaning. A gerund still behaves like a verb: it takes a direct object with no preposition (<em>implementing the policy</em>) and it is modified by an adverb (<em>carefully analysing the data</em>). A true noun behaves like a noun: <em>of</em> for the object, adjectives for the description. Those two grammatical signatures are how an examiner can test the distinction without ever asking you to explain it.'
        ],
        simple: [
          '<em>-ing</em> = the process, the doing of it. The true noun (<em>-tion</em>, <em>-ment</em>) = the finished result.',
          '<em>Developing the app was hard</em> (the work) · <em>The development of the app changed how students revise</em> (the product).',
          'A gerund takes an object directly and an adverb. A true noun takes <em>of</em> and an adjective.'
        ],
        examples: [
          { s: '<b>Assessing</b> the scholarship applications took three hours.', g: 'the active procedure.' },
          { s: 'The final <b>assessment</b> was perfectly balanced.', g: 'the finished object.' },
          { s: '<b>Carefully analysing</b> the survey results is essential.', g: 'gerund: adverb, direct object.' },
          { s: 'A <b>careful analysis of</b> the survey results is essential.', g: 'true noun: adjective, "of".' }
        ]
      },
      items: [
        { id: 't3l1s2-1', type: 'choose', tag: 'nom-suffix', level: 'B2+',
          stem: 'Which sentence puts the reader inside the work rather than in front of the finished thing?',
          options: [
            'The restoration of the community hall roof won a provincial award.',
            'A full restoration of the community hall roof cost four hundred thousand baht.',
            'The restoration was completed before the rainy season began.',
            'Restoring the community hall roof took four volunteers three weekends.'
          ],
          answer: 3,
          why: 'Only the gerund keeps the action unfolding, with the volunteers still on the roof. Options 1, 2 and 3 all use the true noun, which names the restoration as a completed object — and a completed object is the only kind of thing that can be awarded a prize, priced in baht or dated against the monsoon.' },

        { id: 't3l1s2-2', type: 'choose', tag: 'nom-suffix', level: 'B2+',
          stem: 'A careful ______ of the fundraising records revealed a second account.',
          options: ['examining', 'examination', 'examine', 'examined'],
          answer: 1,
          why: 'The adjective <em>careful</em> and the <em>of</em> both demand a true noun. <em>Examining</em> is a gerund and would need <em>carefully examining the fundraising records</em>, with the adverb and no preposition; <em>examine</em> and <em>examined</em> are verb forms that cannot follow an article and an adjective at all.' },

        { id: 't3l1s2-3', type: 'sort', tag: 'nom-suffix', level: 'B2+',
          stem: 'Does each phrase behave like a verb (gerund) or like a noun?',
          bins: [
            { key: 'ger', label: 'Gerund', hint: 'direct object, adverb' },
            { key: 'noun', label: 'True noun', hint: '"of", adjective' }
          ],
          items: [
            { text: 'rapidly expanding the delivery network', bin: 'ger' },
            { text: 'the rapid expansion of the delivery network', bin: 'noun' },
            { text: 'a thorough inspection of the boat engine', bin: 'noun' },
            { text: 'thoroughly inspecting the boat engine', bin: 'ger' },
            { text: 'the early cancellation of the match', bin: 'noun' },
            { text: 'cancelling the match early', bin: 'ger' }
          ],
          why: 'The two signatures never mix. If you see <em>of</em>, expect an adjective; if you see a direct object, expect an adverb.' },

        { id: 't3l1s2-4', type: 'spot', tag: 'nom-suffix', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The introduction the new fare card', 'in September', 'reduced evening queues', 'at every skytrain station.'],
          answer: 0,
          fix: 'The introduction of the new fare card',
          why: 'A true noun cannot take a direct object. Either insert <em>of</em>, or go back to the gerund: <em>Introducing the new fare card</em>. The remaining parts are all correct — the time phrase, the single past-tense verb and the place phrase each sit where they belong.' },

        { id: 't3l1s2-5', type: 'choose', tag: 'nom-register', level: 'B2+',
          stem: 'Which version reads as a statement of historical fact rather than a description of ongoing work?',
          options: [
            'Draining the flooded fields was slow, wet and expensive.',
            'Draining the flooded fields involved nine separate pumping stations.',
            'They were draining the flooded fields for most of the decade.',
            'The drainage of the flooded fields reshaped the whole district.'
          ],
          answer: 3,
          why: 'The true noun freezes the action into a single completed event, which is what allows it to be the subject of a verb like <em>reshaped</em>. Options 1 and 2 use the gerund and so keep the reader inside the work, and option 3 goes further still with a past continuous that stretches the digging across a decade.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't3l1s3', name: 'Descriptive words become noun concepts', cefr: 'B2+',
      theory: {
        key: 'Nominalization is not only for actions. Adjectives become concepts too: difficult → the difficulty, accurate → the accuracy, happy → the happiness.',
        body: [
          'The suffixes here are <strong>-ity</strong>, <strong>-ness</strong> and <strong>-cy</strong>. Difficult → difficulty. Accurate → accuracy. Happy → happiness. Susceptible → susceptibility. Pervasive → pervasiveness.',
          'The move is the same as with verbs: a quality that was attached to something becomes a thing in its own right, which can then be counted, measured, and made the subject of a sentence.',
          '<em>The test was difficult, so students studied harder</em> becomes <em>The <strong>difficulty</strong> of the test caused students to study harder.</em> Notice what that buys: the two clauses have become one, and the sentence now has a subject that the rest of the paragraph can refer back to.',
          'The direction of travel is always the same — a vague description sharpened into a hard concept — and so is the grammar. Like any true noun, the new word takes <em>of</em> for what it belongs to and an adjective for how much of it there is: <em>the extraordinary accuracy of the early flood maps</em>.'
        ],
        simple: [
          'Adjectives become nouns with <em>-ity</em>, <em>-ness</em> or <em>-cy</em>: difficult → difficulty, happy → happiness, accurate → accuracy.',
          '<em>The test was difficult, so students studied harder</em> → <em>The difficulty of the test caused students to study harder.</em>',
          'The new noun takes <em>of</em> and an adjective, like any other noun.'
        ],
        examples: [
          { s: 'difficult → the <b>difficulty</b> · accurate → the <b>accuracy</b>', g: '-ity on Latinate adjectives.' },
          { s: 'happy → the <b>happiness</b> · dark → the <b>darkness</b>', g: '-ness on plainer ones.' },
          { s: 'The <b>difficulty of</b> the test caused students to study harder.', g: 'two clauses become one, with a usable subject.' },
          { s: 'the extraordinary <b>accuracy</b> of the early flood maps', g: 'adjective, then "of".' }
        ]
      },
      items: [
        { id: 't3l1s3-1', type: 'choose', tag: 'nom-suffix', level: 'B2+',
          stem: 'The ______ of the early flood maps astonished the survey team.',
          options: ['accurate', 'accurately', 'accuracy', 'accurateness'],
          answer: 2,
          why: 'The slot needs a noun between <em>The</em> and <em>of</em>. <em>Accurate</em> is the bare adjective and <em>accurately</em> the adverb, and neither can be a subject. <em>Accurateness</em> is formed on the right principle but is not the word English uses; this adjective takes <em>-cy</em>.' },

        { id: 't3l1s3-2', type: 'sort', tag: 'nom-suffix', level: 'B2+',
          stem: 'Which suffix turns each adjective into a noun?',
          bins: [
            { key: 'ity', label: '-ity', hint: 'difficult → difficulty' },
            { key: 'ness', label: '-ness', hint: 'dark → darkness' },
            { key: 'cy', label: '-cy', hint: 'accurate → accuracy' }
          ],
          items: [
            { text: 'severe', bin: 'ity' },
            { text: 'thorough', bin: 'ness' },
            { text: 'fluent', bin: 'cy' },
            { text: 'complex', bin: 'ity' },
            { text: 'remote', bin: 'ness' },
            { text: 'efficient', bin: 'cy' }
          ],
          why: 'Adjectives in <em>-ent</em> and <em>-ate</em> usually take <em>-cy</em>; plainer Germanic adjectives take <em>-ness</em>; Latinate ones tend to <em>-ity</em>.' },

        { id: 't3l1s3-3', type: 'choose', tag: 'nom-structure', level: 'B2+',
          stem: 'Combine: <em>The path to the hilltop temple was steep. Visitor numbers fell.</em>',
          options: [
            'The steepness of the temple path caused a fall in visitor numbers.',
            'The temple path\'s fall caused steepness in visitor numbers.',
            'A fall in visitor numbers caused the steepness of the temple path.',
            'The steep of the temple path caused a fall in visitor numbers.'
          ],
          answer: 0,
          why: 'Option 1 turns the quality into a noun and lets one verb carry the causation. Option 2 swaps the two concepts, so the path falls and the visitors become steep; option 3 reverses the direction, making the visitors build the gradient; option 4 leaves the adjective unchanged in a noun slot.' },

        { id: 't3l1s3-4', type: 'build', tag: 'nom-structure', level: 'B2+',
          stem: 'Combine these two facts into one sentence, starting from the quality: <em>The entry rules were complex. Half the teams were disqualified.</em>',
          tiles: ['The complexity', 'of the entry rules', 'led to', 'the disqualification', 'of half the teams'],
          solution: 'The complexity of the entry rules led to the disqualification of half the teams',
          alt: [],
          why: 'Both halves become noun phrases and a single strong verb carries the causation between them.' },

        { id: 't3l1s3-5', type: 'spot', tag: 'nom-suffix', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The remote of the island clinic', 'meant that repairs', 'often waited', 'until the end of the monsoon.'],
          answer: 0,
          fix: 'The remoteness of the island clinic',
          why: 'An adjective cannot stand in a noun slot. <em>Remote</em> needs <em>-ness</em> before it can be the subject. The other three parts are sound: <em>meant that</em> introduces a proper clause, <em>waited</em> agrees with <em>repairs</em>, and the final time phrase is ordinary.' }
      ]
    }
  ],

  check: {
    id: 't3l1ck', name: 'Systems Check · Turning actions into things',
    items: [
      { id: 't3l1ck-1', type: 'choose', tag: 'nom-suffix', level: 'B2',
        stem: 'The ______ of the pedestrian bridge closed the market lane for six weeks.',
        options: ['replace', 'replacing', 'replacement', 'replaced'],
        answer: 2,
        why: 'The slot sits between <em>The</em> and <em>of</em>, which only a true noun can fill. <em>Replace</em> and <em>replaced</em> are verb forms with no article to stand behind, and <em>replacing</em> is a gerund, which would take the bridge as a direct object with no <em>of</em>.' },

      { id: 't3l1ck-2', type: 'spot', tag: 'nom-suffix', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The thoroughly inspection', 'of the flood pumping station', 'revealed corrosion', 'in both main valves.'],
        answer: 0,
        fix: 'The thorough inspection',
        why: 'A noun takes an adjective. The adverb would only work with a gerund: <em>thoroughly inspecting the station</em>. Nothing else is at fault — the <em>of</em> phrase, the single past-tense verb and the closing prepositional phrase are all correctly formed.' },

      { id: 't3l1ck-3', type: 'choose', tag: 'nom-suffix', level: 'B2+',
        stem: 'Which sentence describes the ongoing work rather than the finished thing?',
        options: [
          'The cataloguing of the shell collection is nearly complete.',
          'Cataloguing the shell collection has taken two volunteers a year.',
          'The catalogue of the shell collection runs to nine volumes.',
          'A full catalogue of the shell collection was published in 1998.'
        ],
        answer: 1,
        why: 'The gerund with a direct object keeps the reader inside the activity. Option 1 uses <em>of</em> and so already frames the work as a thing, while options 3 and 4 name the finished catalogue itself — something that can be measured in volumes and given a date.' },

      { id: 't3l1ck-4', type: 'choose', tag: 'nom-suffix', level: 'B2+',
        stem: 'The ______ of the cold store explains why so little of the mango harvest was lost.',
        options: ['efficiency', 'efficient', 'efficiently', 'efficientness'],
        answer: 0,
        why: 'The adjective <em>efficient</em> takes <em>-cy</em>. <em>Efficient</em> itself is the bare adjective and <em>efficiently</em> the adverb, neither of which can head a subject; <em>efficientness</em> follows a real pattern but is not the English word.' },

      { id: 't3l1ck-5', type: 'choose', tag: 'nom-structure', level: 'B2+',
        stem: 'Combine: <em>The signage was poor. Several hikers took the wrong path.</em>',
        options: [
          'Several hikers took the wrong path and the signage was poor.',
          'The poorness of several hikers caused the wrong signage.',
          'The poor quality of the signage led several hikers onto the wrong path.',
          'The wrong path led to the poor quality of the signage.'
        ],
        answer: 2,
        why: 'Option 3 nominalizes the quality and spends one verb on the logic. Option 1 is the robot version, with two clauses and <em>and</em> hiding the relationship; option 2 makes the hikers poor and the signage wrong, which is nonsense; option 4 reverses the direction.' },

      { id: 't3l1ck-6', type: 'sort', tag: 'nom-suffix', level: 'B2+',
        stem: 'Gerund or true noun?',
        bins: [
          { key: 'ger', label: 'Gerund', hint: 'object + adverb' },
          { key: 'noun', label: 'True noun', hint: '"of" + adjective' }
        ],
        items: [
          { text: 'the gradual erosion of the beach', bin: 'noun' },
          { text: 'gradually eroding the beach', bin: 'ger' },
          { text: 'sensibly limiting the shrimp catch', bin: 'ger' },
          { text: 'a sensible limitation on the shrimp catch', bin: 'noun' },
          { text: 'the immediate suspension of the boat licence', bin: 'noun' },
          { text: 'immediately suspending the boat licence', bin: 'ger' }
        ],
        why: 'The two signatures are a reliable test in both directions: find <em>of</em>, expect an adjective; find a bare object, expect an adverb.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T3.levels.push({
  id: 't3l2', n: 2, name: 'The four slots', cefr: 'B2+',
  blurb: 'AGENT · PROCESS · LINKING VERB · RESULT. Fill the card, then choose which slot the reader looks at first.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't3l2s1', name: 'Focus 1 — the agent and the process', cefr: 'B2+',
      theory: {
        key: 'Fill four slots before you write anything: AGENT, PROCESS, LINKING VERB, RESULT.',
        body: [
          'Take the two base sentences and write the card out. <em>The principal changed the morning schedule. Students got more sleep.</em> <strong>AGENT:</strong> the principal. <strong>PROCESS:</strong> changed the morning schedule. <strong>RESULT:</strong> students got more sleep.',
          'Now nominalize the process: <em>changed</em> → <em>change</em>. Keep the agent attached with an apostrophe s, and reach the object with <em>of</em>: <em>the principal<u>\'s</u> change <u>of</u> the morning schedule</em>. Then supply one linking verb and the result: <em>… helped students get more sleep.</em>',
          'That is <strong>Focus 1</strong>, and what it does is give somebody credit or blame. The reader\'s eye lands on the person who did the work.',
          'Two mistakes live in this slot. The first is dropping the agent when the question asked you to keep it. The second is leaving the verb unchanged inside the possessive — <em>the principal\'s changed of the schedule</em> — which is not a noun phrase at all, and is the standard non-word distractor in this kind of question.'
        ],
        simple: [
          'Write four slots before you answer: <strong>AGENT · PROCESS · LINKING VERB · RESULT</strong>.',
          'Focus 1 keeps the agent: <em>The principal\'s change of the morning schedule helped students get more sleep.</em>',
          'Watch for the fake noun: <em>the principal\'s changed of the schedule</em> is never right.'
        ],
        examples: [
          { s: 'AGENT: the principal · PROCESS: changed the schedule · RESULT: students slept more', g: 'fill the card first.' },
          { s: 'The <b>principal\'s change of</b> the morning schedule <b>helped</b> students get more sleep.', g: 'Focus 1: credit goes to the agent.' },
          { s: '<s>The principal\'s changed of the morning schedule…</s>', g: 'the verb was never nominalized.' },
          { s: '<s>The change of the morning schedule helped the principal.</s>', g: 'the result slot has been replaced by the agent.' }
        ]
      },
      items: [
        { id: 't3l2s1-1', type: 'choose', tag: 'nom-agent', level: 'B2+',
          stem: 'Combine with the focus on the agent: <em>The district office resurfaced the night market square. Food stalls returned.</em>',
          options: [
            'The district office\'s resurfacing of the night market square brought the food stalls back.',
            'The resurfacing of the night market square brought the district office back.',
            'The district office\'s resurfaced of the night market square brought the food stalls back.',
            'The food stalls returning resurfaced the district office\'s night market square.'
          ],
          answer: 0,
          why: 'Option 2 drops the agent from the subject and then puts it in the result slot, so the wrong thing comes back; option 3 leaves the verb unnominalized inside the possessive, which is not English; option 4 reverses everything, making the stalls resurface the square. Only option 1 keeps agent, process and result where the card puts them.' },

        { id: 't3l2s1-2', type: 'choose', tag: 'nom-agent', level: 'B2+',
          stem: 'Which phrase correctly names both the agent and the thing done?',
          options: [
            'the judges\' rejection of the design',
            'the rejection of the judges\' design',
            'the judges\' rejected of the design',
            'the design\'s rejection of the judges'
          ],
          answer: 0,
          why: 'Doer takes the possessive, thing done follows <em>of</em>. Option 2 makes the design belong to the judges and leaves the rejecter unnamed; option 3 never turns the verb into a noun; option 4 swaps the slots so that the design rejects the people.' },

        { id: 't3l2s1-3', type: 'sort', tag: 'nom-agent', level: 'B2+',
          stem: 'In each phrase, who is the doer?',
          bins: [
            { key: 'poss', label: 'The possessive names the doer', hint: 'the foundation\'s purchase of the orchard' },
            { key: 'broken', label: 'The slots have been swapped', hint: 'it says the wrong thing' }
          ],
          items: [
            { text: 'the foundation\'s purchase of the orchard', bin: 'poss' },
            { text: 'the orchard\'s purchase of the foundation', bin: 'broken' },
            { text: 'the bus company\'s withdrawal of the service', bin: 'poss' },
            { text: 'the service\'s withdrawal of the bus company', bin: 'broken' },
            { text: 'the museum\'s return of the carvings', bin: 'poss' },
            { text: 'the carvings\' return of the museum', bin: 'broken' }
          ],
          why: 'The order is fixed: doer, nominalization, <em>of</em>, thing done. Reverse it and the sentence stays grammatical while saying the opposite.' },

        { id: 't3l2s1-4', type: 'build', tag: 'nom-agent', level: 'B2+',
          stem: 'Combine with the focus on the agent: <em>The alumni fund restored the old school hall. The town gained a concert space.</em>',
          tiles: ['The alumni fund\'s', 'restoration', 'of the old school hall', 'gave', 'the town', 'a concert space'],
          solution: 'The alumni fund\'s restoration of the old school hall gave the town a concert space',
          alt: [],
          why: 'Agent in the possessive, process nominalized, <em>of</em> for the object, then one linking verb into the result.' },

        { id: 't3l2s1-5', type: 'spot', tag: 'nom-agent', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The federation\'s suspended', 'of the two clubs', 'shortened the season', 'by four weekends.'],
          answer: 0,
          fix: 'The federation\'s suspension',
          why: 'The verb has kept its <em>-ed</em> inside a noun slot. This exact shape — possessive plus past tense plus <em>of</em> — is the standard fake-noun distractor. The remaining parts are correct: the <em>of</em> phrase names the thing done, and the sentence has exactly one tensed verb.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't3l2s2', name: 'Focus 2 — the causal link', cefr: 'B2+',
      theory: {
        key: 'Delete the agent, turn both sentences into noun phrases, and join them with one strong causal verb.',
        body: [
          '<em>The café introduced a new menu. Daily sales went up.</em> Delete the café entirely. Both actions become nouns. One strong verb joins them: <em>The <strong>introduction</strong> of a new menu <strong>caused</strong> an <strong>increase</strong> in daily sales.</em>',
          'That is <strong>Focus 2</strong>. The reader stops thinking about people and looks only at the mechanism — A leads to B. It sounds scientific, objective and professional, which is exactly why academic and technical writing is full of it.',
          'Now the rule that makes it work: <strong>one English clause has one main verb.</strong> Once you have nominalized both actions, the sentence has no verb left, so it needs a new one — and it must be a strong one. <em>Was because of</em>, <em>is</em> and <em>has</em> are weak: they join the two ideas without saying anything about how they are related.',
          'The deck\'s list, worth memorising: <strong>caused · led to · produced · resulted in · demonstrated · forced</strong>. Compare <em>The cancellation of the match was because of the rain</em> with <em>The rain <strong>forced</strong> the cancellation of the match</em>. Same facts, and only one of them reads like an adult wrote it.'
        ],
        simple: [
          'Focus 2 deletes the agent. Both sentences become nouns, joined by one strong verb.',
          '<em>The introduction of a new menu caused an increase in daily sales.</em>',
          'Strong verbs: <strong>caused · led to · produced · resulted in · demonstrated · forced</strong>. Avoid <em>was because of</em>, <em>is</em> and <em>has</em>.'
        ],
        examples: [
          { s: 'The <b>introduction</b> of a new menu <b>caused</b> an <b>increase</b> in daily sales.', g: 'agent deleted; two nouns, one strong verb.' },
          { s: 'The rain <b>forced</b> the <b>cancellation</b> of the match.', g: 'strong verb, active shape.' },
          { s: '<s>The cancellation of the match was because of the rain.</s>', g: 'weak: it links without explaining.' },
          { s: 'One English clause = <b>one main verb</b>.', g: 'the Golden Rule that makes the whole system work.' }
        ]
      },
      items: [
        { id: 't3l2s2-1', type: 'choose', tag: 'nom-causeverb', level: 'B2+',
          stem: 'Combine with the focus on the causal link: <em>The clinic extended its opening hours. Waiting times fell.</em>',
          options: [
            'The clinic caused a reduction in waiting times.',
            'The extension of opening hours led to a reduction in waiting times.',
            'A reduction in waiting times led to the extension of opening hours.',
            'The extended of opening hours led to a reduction in waiting times.'
          ],
          answer: 1,
          why: 'Option 1 keeps the agent, which Focus 2 deletes, and loses the process along with it; option 3 reverses the direction, so the shorter queues open the clinic; option 4 never nominalizes the verb and produces a non-word.' },

        { id: 't3l2s2-2', type: 'choose', tag: 'nom-causeverb', level: 'B2+',
          stem: 'Which version replaces the weak link with a strong verb without changing the facts?',
          options: [
            'The closure of the old ferry crossing was because of the new bridge.',
            'The closure of the old ferry crossing has the new bridge.',
            'The new bridge is the closure of the old ferry crossing.',
            'The new bridge forced the closure of the old ferry crossing.'
          ],
          answer: 3,
          why: '<em>Forced</em> names the relationship and points the right way. <em>Was because of</em> in option 1 only places the ideas side by side; <em>has</em> in option 2 claims ownership rather than causation; <em>is</em> in option 3 asserts that the bridge and the closure are the same thing.' },

        { id: 't3l2s2-3', type: 'sort', tag: 'nom-causeverb', level: 'B2+',
          stem: 'Does each verb point from the cause to the result, or from the result back to the cause?',
          bins: [
            { key: 'fwd', label: 'Cause first', hint: 'A caused B' },
            { key: 'back', label: 'Result first', hint: 'B resulted from A' }
          ],
          items: [
            { text: 'caused', bin: 'fwd' },
            { text: 'resulted from', bin: 'back' },
            { text: 'led to', bin: 'fwd' },
            { text: 'stemmed from', bin: 'back' },
            { text: 'produced', bin: 'fwd' },
            { text: 'followed', bin: 'back' }
          ],
          why: 'Getting the direction wrong reverses the claim while leaving the sentence perfectly grammatical — which is why it makes such a good distractor.' },

        { id: 't3l2s2-4', type: 'build', tag: 'nom-causeverb', level: 'B2+',
          stem: 'Combine with the focus on the causal link, deleting the agent: <em>The water authority repaired the main. Pressure across the housing estate recovered.</em>',
          tiles: ['The repair', 'of the water main', 'produced', 'a recovery', 'in pressure', 'across the housing estate'],
          solution: 'The repair of the water main produced a recovery in pressure across the housing estate',
          alt: [],
          why: 'No agent, two nominalizations, and one strong verb doing all the logical work.' },

        { id: 't3l2s2-5', type: 'spot', tag: 'nom-causeverb', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The restriction of truck traffic', 'in the old town', 'was because of', 'a sharp fall in dust levels.'],
          answer: 2,
          fix: 'produced',
          why: 'Two heavy noun phrases joined by <em>was because of</em> also reverse the logic: the restriction came first. A strong forward verb fixes both faults at once. The other three parts are sound — both nominalizations are correctly built and the place phrase is ordinary.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't3l2s3', name: 'Focus 3 — putting the result first', cefr: 'C1',
      theory: {
        key: 'Focus 3 puts the outcome at the front as the subject and traces it back to its cause.',
        body: [
          '<em>The band cancelled the concert. The fans were massively disappointed.</em> Take the final emotion and put it at the very front: <em>The fans\' massive <strong>disappointment resulted from</strong> the <strong>cancellation</strong> of the concert.</em> The cause has been pushed to the end.',
          'The reader feels the impact first. Use it when the outcome is the point of the paragraph — which, in a conclusion or an abstract, it usually is.',
          'The verbs change direction with the focus. Forward, cause first: <em>caused, led to, produced, resulted in, demonstrated, forced</em>. Backward, result first: <em><strong>resulted from</strong>, <strong>followed</strong>, <strong>stemmed from</strong></em>. Note that <em>resulted in</em> and <em>resulted from</em> are opposites separated by one preposition, and that a single wrong preposition inverts the entire claim.',
          'This is where most marks are lost in the exam\'s combining section. The distractor is usually a fluent, well-built sentence that runs the arrow backwards. Write <em>A → B</em> in the margin before you read the options, and reject anything that runs <em>B → A</em>, however good it sounds.'
        ],
        simple: [
          'Focus 3 puts the result first: <em>The fans\' disappointment resulted from the cancellation of the concert.</em>',
          'Backward verbs: <em>resulted from</em>, <em>followed</em>, <em>stemmed from</em>. Forward verbs: <em>caused</em>, <em>led to</em>, <em>resulted in</em>.',
          '<em>Resulted in</em> and <em>resulted from</em> are opposites. One preposition changes the whole meaning.'
        ],
        examples: [
          { s: 'The fans\' massive <b>disappointment resulted from</b> the <b>cancellation</b> of the concert.', g: 'result first, cause last.' },
          { s: 'The <b>cancellation</b> of the concert <b>resulted in</b> massive disappointment.', g: 'same facts, cause first.' },
          { s: '<s>The cancellation of the concert resulted from massive disappointment.</s>', g: 'one preposition, and the claim is now false.' },
          { s: 'Write <b>A → B</b> in the margin before reading the options.', g: 'then reject anything running B → A.' }
        ]
      },
      items: [
        { id: 't3l2s3-1', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'Combine with the focus on the result: <em>The provincial authority cut the rural bus subsidy. Motorbike use in the villages rose sharply.</em>',
          options: [
            'The cut in the rural bus subsidy stemmed from a sharp rise in village motorbike use.',
            'A sharp rise in village motorbike use stemmed from the cut in the rural bus subsidy.',
            'The provincial authority caused a sharp rise in village motorbike use.',
            'A sharp rise in village motorbike use caused the cut in the rural bus subsidy.'
          ],
          answer: 1,
          why: 'Focus 3 fronts the outcome and traces it back. Options 1 and 4 both run the arrow backwards, making the motorbikes the reason for the subsidy cut; option 3 points the right way but restores the agent and abandons the focus entirely.' },

        { id: 't3l2s3-2', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'Which sentence says that the storm came first?',
          options: [
            'The storm resulted from the collapse of the sea wall.',
            'The collapse of the sea wall resulted in the storm.',
            'The collapse of the sea wall followed the storm.',
            'The storm followed the collapse of the sea wall.'
          ],
          answer: 2,
          why: '<em>Followed</em> is a backward verb: what follows comes second, so in option 3 the wall goes after the storm. Options 1 and 2 both make the collapse the cause, and option 4 uses the right verb but puts the storm in the following position.' },

        { id: 't3l2s3-3', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'Combine with the focus on the result: <em>The museum digitised its photograph collection. Enquiries from overseas doubled.</em>',
          options: [
            'The digitisation of the photograph collection doubled overseas enquiries.',
            'The doubling of overseas enquiries resulted from the digitisation of the photograph collection.',
            'The digitisation of the photograph collection resulted from a doubling of overseas enquiries.',
            'The museum doubled its overseas enquiries by digitisation.'
          ],
          answer: 1,
          why: 'Option 1 is correct English but is Focus 2, with the cause in the subject slot, not Focus 3; option 3 reverses the arrow, so the enquiries scan the photographs; option 4 restores the agent and turns the process into a bare instrument phrase.' },

        { id: 't3l2s3-4', type: 'build', tag: 'nom-direction', level: 'C1',
          stem: 'Combine with the focus on the result: <em>The dam operator opened a fish ladder. Fish numbers above the dam recovered.</em>',
          tiles: ['The recovery', 'of fish numbers', 'above the dam', 'stemmed from', 'the opening', 'of a fish ladder'],
          solution: 'The recovery of fish numbers above the dam stemmed from the opening of a fish ladder',
          alt: [],
          why: 'Outcome in the subject slot, backward verb, cause at the end.' },

        { id: 't3l2s3-5', type: 'spot', tag: 'nom-direction', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The sharp drop', 'in parcel delays', 'resulted in', 'the opening of the second sorting depot.'],
          answer: 2,
          fix: 'resulted from',
          why: 'The depot opened first. <em>Resulted in</em> makes the drop the cause of the opening, which reverses the history. The other three parts are correct: both noun phrases are well formed and the <em>of</em> reaches its object properly.' }
      ]
    }
  ],

  check: {
    id: 't3l2ck', name: 'Systems Check · The four slots',
    items: [
      { id: 't3l2ck-1', type: 'choose', tag: 'nom-agent', level: 'B2+',
        stem: 'Combine with the focus on the agent: <em>The history club catalogued the temple storeroom. Three lost manuscripts came to light.</em>',
        options: [
          'The history club\'s cataloguing of the temple storeroom brought three lost manuscripts to light.',
          'The cataloguing of the temple storeroom brought the history club to light.',
          'The history club\'s catalogued of the temple storeroom brought three lost manuscripts to light.',
          'Three lost manuscripts brought the history club\'s cataloguing to light.'
        ],
        answer: 0,
        why: 'Agent in the possessive, process nominalized, result intact. Option 2 drops the agent and then puts it in the result slot; option 3 is the fake-noun trap, with a past tense inside a noun phrase; option 4 reverses everything, so the manuscripts discover the work.' },

      { id: 't3l2ck-2', type: 'choose', tag: 'nom-causeverb', level: 'B2+',
        stem: 'Which sentence uses a strong causal verb rather than a weak link?',
        options: [
          'Three weeks of rain has a delay in the rice harvest.',
          'The delay in the rice harvest was because of three weeks of rain.',
          'The delay in the rice harvest is three weeks of rain.',
          'Three weeks of rain produced a delay in the rice harvest.'
        ],
        answer: 3,
        why: 'Only <em>produced</em> states the relationship. <em>Has</em> in option 1 claims possession, <em>was because of</em> in option 2 merely sets the two facts side by side, and <em>is</em> in option 3 equates the delay with the weather.' },

      { id: 't3l2ck-3', type: 'choose', tag: 'nom-direction', level: 'C1',
        stem: 'Which sentence claims that the new footbridge came <u>first</u>?',
        options: [
          'The building of the footbridge stemmed from a rise in weekend visitors.',
          'A rise in weekend visitors led to the building of the footbridge.',
          'A rise in weekend visitors followed the building of the footbridge.',
          'The building of the footbridge resulted from a rise in weekend visitors.'
        ],
        answer: 2,
        why: 'In option 3 the rise follows, so the bridge is first. Options 1 and 4 use backward verbs with the bridge in the subject slot, which makes the visitors the cause, and option 2 says the same thing with a forward verb.' },

      { id: 't3l2ck-4', type: 'spot', tag: 'nom-agent', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The foundation\'s acquire', 'of the mangrove strip', 'guaranteed public access', 'for the first time since 1987.'],
        answer: 0,
        fix: 'The foundation\'s acquisition',
        why: 'The verb was never turned into a noun. The possessive and the <em>of</em> are both correct and both demand one. The rest of the sentence is sound: one tensed verb, a clear object, and an ordinary time phrase at the end.' },

      { id: 't3l2ck-5', type: 'choose', tag: 'nom-causeverb', level: 'C1',
        stem: 'Combine with the focus on the causal link: <em>The school lengthened the lunch break. Reports of lateness fell.</em>',
        options: [
          'The school led to a fall in reports of lateness.',
          'The lengthened of the lunch break led to a fall in reports of lateness.',
          'A fall in reports of lateness led to the lengthening of the lunch break.',
          'The lengthening of the lunch break led to a fall in reports of lateness.'
        ],
        answer: 3,
        why: 'Focus 2 deletes the agent, nominalizes both halves and joins them with one forward verb. Option 1 keeps the school and loses the process; option 2 leaves a past tense inside the noun slot; option 3 runs the arrow backwards.' },

      { id: 't3l2ck-6', type: 'build', tag: 'nom-direction', level: 'C1',
        stem: 'Combine with the focus on the result: <em>The library extended its evening hours. Study-space bookings rose by a third.</em>',
        tiles: ['A rise of a third', 'in study-space bookings', 'followed', 'the extension', 'of the library\'s evening hours'],
        solution: 'A rise of a third in study-space bookings followed the extension of the library\'s evening hours',
        alt: [],
        why: '<em>Followed</em> is a backward verb, so the outcome takes the subject slot and the cause comes last.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T3.levels.push({
  id: 't3l3', n: 3, name: 'Combining two sentences', cefr: 'C1',
  blurb: 'The exam question, taken apart: one clause, one main verb, and four options of which three are built to fail in a named way.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't3l3s1', name: 'One clause, one main verb', cefr: 'C1',
      theory: {
        key: 'To build a dense professional sentence, follow one constraint: one English clause has one main verb.',
        body: [
          'The trap the Golden Rule prevents is the one every student falls into first: cramming information by stringing clauses together, joined with <em>and</em>, <em>or</em> and <em>so</em>. It feels natural and it weakens the logical relationship between the thoughts, because those three conjunctions say almost nothing about how two facts are connected.',
          'The alternative is to spend your one main verb wisely. If both actions have become nouns, the verb you have left is free to carry the logic — <em>caused</em>, <em>forced</em>, <em>stemmed from</em> — instead of being used up on the actions themselves.',
          'So the method is mechanical, and it should be. Write the four slots. Nominalize the process. Nominalize the result. Decide the focus. Choose one verb, pointing the right way. Read it back and count the tensed verbs: there should be exactly one.',
          'That last count is also your check on the multiple-choice options. An option with no tensed verb is a fragment; an option with two is usually the version that has simply glued the base sentences together.'
        ],
        simple: [
          'The Golden Rule: <strong>one English clause = one main verb</strong>.',
          'Do not join facts with <em>and</em>, <em>or</em> and <em>so</em>. They do not say how the facts are related.',
          'Turn both actions into nouns, then spend your one verb on the logic: <em>caused</em>, <em>forced</em>, <em>stemmed from</em>.'
        ],
        examples: [
          { s: '<s>The school changed the timetable and the students felt less stressed.</s>', g: '"and" hides the relationship.' },
          { s: 'The <b>change</b> of timetable <b>reduced</b> stress among the students.', g: 'one verb, and it carries the logic.' },
          { s: 'Count the tensed verbs in your answer.', g: 'exactly one, or the sentence is wrong.' },
          { s: '<s>The introduction of the charge and sales fell.</s>', g: 'a noun phrase glued to a clause.' }
        ]
      },
      items: [
        { id: 't3l3s1-1', type: 'choose', tag: 'nom-structure', level: 'C1',
          stem: 'Which version follows the Golden Rule?',
          options: [
            'The district office widened the pier and so the fish market reopened.',
            'The widening of the pier allowed the fish market to reopen.',
            'The widening of the pier and the reopening of the fish market.',
            'The district office widened the pier, the fish market reopened.'
          ],
          answer: 1,
          why: 'One tensed verb, <em>allowed</em>, carrying the relationship. Option 1 spends both verbs on the actions and leaves <em>and so</em> to explain the link; option 3 has no tensed verb at all and is a fragment; option 4 has two clauses with nothing but a comma between them.' },

        { id: 't3l3s1-2', type: 'choose', tag: 'nom-structure', level: 'C1',
          stem: 'How many tensed verbs should a correctly combined sentence contain?',
          options: ['Exactly one', 'None', 'One for each base sentence', 'As many as the meaning needs'],
          answer: 0,
          why: 'Once both actions are nouns, the single remaining verb is free to state the logic. None at all leaves a fragment; one per base sentence means the originals have simply been glued together; and letting the meaning decide abandons the rule that makes the whole method work.' },

        { id: 't3l3s1-3', type: 'spot', tag: 'nom-structure', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The introduction of the evening parking charge', 'in March', 'and a fall in takings', 'at the night market.'],
          answer: 2,
          fix: 'produced a fall in takings',
          why: 'Two noun phrases glued together with <em>and</em> leave the sentence with no tensed verb at all, so it is a fragment rather than a clause. One strong forward verb between the nominalizations repairs it. The other three parts are correctly built noun and prepositional phrases.' },

        { id: 't3l3s1-4', type: 'choose', tag: 'nom-structure', level: 'C1',
          stem: 'Combine: <em>The orchard planted grass between its rows. Soil loss on the slopes fell.</em>',
          options: [
            'The orchard planted grass between the rows so soil loss on the slopes fell.',
            'The planting of grass between the rows and a fall in soil loss on the slopes.',
            'The planting of grass between the rows reduced soil loss on the slopes.',
            'Planting grass between the rows, soil loss on the slopes fell.'
          ],
          answer: 2,
          why: 'Option 3 nominalizes the process and spends its one verb on the causation. Option 1 leans on <em>so</em> and keeps two tensed verbs; option 2 has no verb and is a fragment; option 4 is a dangling participle, because the soil loss did not plant the grass.' },

        { id: 't3l3s1-5', type: 'build', tag: 'nom-structure', level: 'C1',
          stem: 'Combine, focusing on the causal link: <em>The port dredged the approach channel. Larger boats began calling at the fishing harbour.</em>',
          tiles: ['The dredging', 'of the approach channel', 'allowed', 'larger boats', 'to call at the fishing harbour'],
          solution: 'The dredging of the approach channel allowed larger boats to call at the fishing harbour',
          alt: [],
          why: 'One nominalization, one tensed verb, and the second fact folded in as an infinitive rather than a second clause.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't3l3s2', name: 'The four ways an option fails', cefr: 'C1',
      theory: {
        key: 'In a combining question the three wrong options are each broken in one nameable way. Learn the four faults and the item takes ten seconds.',
        body: [
          '<strong>Fault 1 — the arrow is reversed.</strong> The option is well written and claims that the effect produced the cause. Defence: write <em>A → B</em> in the margin before reading the options.',
          '<strong>Fault 2 — the slots are swapped.</strong> The doer and the thing done have changed places: <em>the integration of the assistant grew the company</em> instead of <em>the company\'s integration of the assistant</em>. Defence: underline the doer in the base sentences first.',
          '<strong>Fault 3 — the verb was never nominalized.</strong> <em>the district office\'s repaired of the bridge</em>, <em>the introduced of a charge</em>, <em>an improved in service</em>. These are not English at all, and they are free marks once you are looking for them.',
          '<strong>Fault 4 — something has been added or dropped.</strong> A result appears that the base sentences never mentioned, or the agent survives into a Focus 2 answer, or a plain fact acquires a word like <em>massive</em> or <em>complete</em> that came from nowhere. Defence: check every content word in the option against the two base sentences.'
        ],
        simple: [
          'Three of the four options are wrong in one of four ways.',
          '<strong>1</strong> The cause and result are swapped. <strong>2</strong> The doer and the thing done are swapped. <strong>3</strong> The verb was never made into a noun (<em>the introduced of…</em>). <strong>4</strong> Something is added or missing.',
          'Write <em>A → B</em> in the margin first, then check each option against it.'
        ],
        examples: [
          { s: '<s>A rise in visitors caused the opening of the new path.</s>', g: 'Fault 1: the arrow is reversed.' },
          { s: '<s>The path\'s opening of the park attracted visitors.</s>', g: 'Fault 2: the slots are swapped.' },
          { s: '<s>The district office\'s opened of the path attracted visitors.</s>', g: 'Fault 3: no nominalization.' },
          { s: '<s>The opening of the path completely transformed the town.</s>', g: 'Fault 4: a claim that was never made.' }
        ]
      },
      items: [
        { id: 't3l3s2-1', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'Base sentences: <em>The museum lowered its entry charge. Weekday attendance rose.</em> Which option reverses the arrow?',
          options: [
            'The reduction in the entry charge produced a rise in weekday attendance.',
            'The rise in weekday attendance stemmed from the reduction in the entry charge.',
            'The reduction in the entry charge stemmed from a rise in weekday attendance.',
            'The museum\'s reduction of the entry charge raised weekday attendance.'
          ],
          answer: 2,
          why: 'Only option 3 makes the attendance the cause, because <em>stemmed from</em> is backward and the charge is in the subject slot. Option 1 is Focus 2, option 2 is Focus 3 with the arrow the right way round, and option 4 is Focus 1 — three correct versions with three different focuses.' },

        { id: 't3l3s2-2', type: 'choose', tag: 'nom-suffix', level: 'C1',
          stem: 'Which option fails because the verb was never turned into a noun?',
          options: [
            'The expansion of the orchard doubled the yield.',
            'A doubling of the yield followed the expansion of the orchard.',
            'The orchard\'s expansion doubled the yield.',
            'The expanded of the orchard doubled the yield.'
          ],
          answer: 3,
          why: '<em>The expanded of</em> is not English. The other three are all well formed: option 1 is Focus 2, option 2 is Focus 3 with a backward verb, and option 3 is Focus 1 with the agent in the possessive.' },

        { id: 't3l3s2-3', type: 'choose', tag: 'nom-agent', level: 'C1',
          stem: 'Base sentences: <em>The music club recorded the festival concert. Requests for the recording came from three countries.</em> Which option swaps the slots?',
          options: [
            'The music club\'s recording of the festival concert drew requests from three countries.',
            'The festival concert\'s recording of the music club drew requests from three countries.',
            'The recording of the festival concert drew requests from three countries.',
            'Requests from three countries followed the recording of the festival concert.'
          ],
          answer: 1,
          why: 'In option 2 the concert has recorded the club. Everything else about the sentence is correct, which is exactly what makes it dangerous. Options 1, 3 and 4 keep the doer and the thing done in the right order, in Focus 1, Focus 2 and Focus 3 respectively.' },

        { id: 't3l3s2-4', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'Base sentences: <em>The community bought the corner shop. The pharmacy counter was saved.</em> Which is the best combination?',
          options: [
            'The community\'s purchase of the corner shop saved the pharmacy counter.',
            'The purchase of the corner shop saved the community.',
            'The community\'s purchased of the corner shop saved the pharmacy counter.',
            'The saving of the pharmacy counter caused the purchase of the corner shop.'
          ],
          answer: 0,
          why: 'Option 2 drops the stated result and puts the agent in its place; option 3 leaves a past tense inside the possessive, which is the fake-noun trap; option 4 reverses the arrow, so the rescued counter pays for the shop.' },

        { id: 't3l3s2-5', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'Base sentences: <em>The ferry operator added a second sailing. Freight bookings recovered.</em> Which option adds a claim the base sentences never make?',
          options: [
            'The addition of a second sailing produced a recovery in freight bookings.',
            'A recovery in freight bookings followed the addition of a second sailing.',
            'The addition of a second sailing completely transformed the island economy.',
            'The operator\'s addition of a second sailing restored freight bookings.'
          ],
          answer: 2,
          why: 'Nothing in the base sentences mentions the island economy, and <em>completely transformed</em> is a claim from nowhere. Options 1, 2 and 4 each report only the two given facts, in Focus 2, Focus 3 and Focus 1. A distractor that widens the claim is wrong however well it reads.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't3l3s3', name: 'Why academic writing does this', cefr: 'C1',
      theory: {
        key: 'Nominalization buys objectivity, cohesion and register — and it costs clarity. Good C1 writing alternates.',
        body: [
          'Three reasons the deck gives, and all three are true. <strong>It creates objectivity</strong>: removing the doer keeps the focus on facts and outcomes. <strong>It connects ideas</strong>: a whole previous sentence can be summarised in one noun at the start of the next, which is the main engine of cohesion in academic prose. <strong>It sounds professional</strong>: it is simply the register of university and technical writing.',
          'There is a fourth effect, and it is worth being honest about. Nominalizing a verb erases the person who did it. <em>Someone is polluting the canal</em> names a defendant; <em>the pollution of the canal</em> names a phenomenon. You can put a person on trial; you cannot indict a noun. Writers use this deliberately, and reading carefully means noticing when they have.',
          'The cost is clarity. <em>The identification of the fault by the maintenance team led to a reduction in downtime</em> is dense, cohesive and slightly airless. <em>The maintenance team found the fault, so there was less downtime</em> is clearer and longer. Neither is better in the abstract.',
          'For an examiner, the test is whether you can produce the dense version on demand and read it accurately when somebody else has. For your own writing, use it where you need the cohesion — starting a sentence with a noun that summarises the last one — and drop back to plain clauses when the argument gets difficult.'
        ],
        simple: [
          'Three reasons to nominalize: it sounds objective, it connects ideas, and it is the register universities expect.',
          'It also hides the person who did the action. <em>Someone is polluting the canal</em> names a person; <em>the pollution of the canal</em> does not.',
          'It costs clarity, so good writing alternates between dense noun phrases and plain clauses.'
        ],
        examples: [
          { s: 'Someone is <b>polluting</b> the canal.', g: 'an agent you could name.' },
          { s: 'the <b>pollution</b> of the canal', g: 'the agent has gone.' },
          { s: 'The <b>closure</b> of the line ended daily deliveries. <b>That decision</b> was never reviewed.', g: 'cohesion: the next sentence can point back.' },
          { s: '<s>The utilisation of nominalisation for the maximisation of formality</s>', g: 'density without a reason is just fog.' }
        ]
      },
      items: [
        { id: 't3l3s3-1', type: 'choose', tag: 'nom-register', level: 'C1',
          stem: 'What is the main cohesive advantage of nominalization?',
          options: [
            'It lets a whole previous sentence become the subject of the next one.',
            'It makes sentences shorter than the clause version.',
            'It removes the need for linking verbs.',
            'It allows more adverbs to be used.'
          ],
          answer: 0,
          why: 'Packing a clause into a noun phrase is what lets the next sentence begin by pointing at it. Nominalized sentences are usually longer, not shorter; they need the linking verb more than ever, since it is the only one left; and they take fewer adverbs, because nouns are described by adjectives.' },

        { id: 't3l3s3-2', type: 'choose', tag: 'nom-register', level: 'C1',
          stem: 'Which pair of sentences shows nominalization being used for cohesion?',
          options: [
            'The tin mine closed in 1974. Many families left the district.',
            'The tin mine closed in 1974. The closure emptied three streets within a decade.',
            'The tin mine closed in 1974, and many families left the district.',
            'In 1974 the tin mine closed and the district lost its main employer.'
          ],
          answer: 1,
          why: 'The second sentence opens with a noun that summarises the first, which is the mechanism the deck calls connecting ideas. Option 1 sets two clauses side by side with no link at all, and options 3 and 4 join them with <em>and</em>, which carries no logic and starts no new sentence to point back from.' },

        { id: 't3l3s3-3', type: 'choose', tag: 'nom-register', level: 'C1',
          stem: 'Which version makes it hardest to say who was responsible?',
          options: [
            'The contractor diverted the stream without consent.',
            'Somebody diverted the stream without consent.',
            'The diversion of the stream took place without consent.',
            'They diverted the stream and nobody consented.'
          ],
          answer: 2,
          why: 'The nominalization removes the doer entirely. The event remains; the defendant does not. Option 1 names the contractor outright, and options 2 and 4 still supply a human subject, however vague, which keeps a person in the frame.' },

        { id: 't3l3s3-4', type: 'judge', tag: 'nom-register', level: 'C1',
          given: 'Because nominalized sentences sound more academic, the best C1 writing uses them as often as possible.',
          stem: 'Is this a fair statement of how to use nominalization?',
          answer: 1,
          why: 'False. Density is bought at the cost of clarity. Good writing alternates, using the dense form where cohesion needs it and plain clauses where the argument is hard.' },

        { id: 't3l3s3-5', type: 'choose', tag: 'nom-register', level: 'C1',
          stem: 'Which sentence is over-nominalized to the point of obscurity?',
          options: [
            'The reorganisation of the timetable reduced the number of room changes.',
            'The change to the timetable led to fewer room changes.',
            'The revision of the room allocation cut the number of moves between lessons.',
            'The implementation of the utilisation of a revised allocation produced an amelioration in provision.'
          ],
          answer: 3,
          why: 'Four abstract nouns stacked on one another, and no reader can say what was actually done. Options 1, 2 and 3 each use one or two nominalizations to do a specific job and keep a concrete noun — timetable, room, lesson — in view.' }
      ]
    }
  ],

  check: {
    id: 't3l3ck', name: 'Systems Check · Combining two sentences',
    items: [
      { id: 't3l3ck-1', type: 'choose', tag: 'nom-structure', level: 'C1',
        stem: 'Combine: <em>The board suspended the night shift. Overtime costs fell by a third.</em>',
        options: [
          'The board suspended the night shift and overtime costs fell by a third.',
          'The suspension of the night shift cut overtime costs by a third.',
          'The suspended of the night shift cut overtime costs by a third.',
          'A fall of a third in overtime costs caused the suspension of the night shift.'
        ],
        answer: 1,
        why: 'Option 1 hides the relationship behind <em>and</em> and keeps two tensed verbs, option 3 never nominalizes and leaves a past tense behind the article, option 4 reverses the arrow so the saving causes the suspension.' },

      { id: 't3l3ck-2', type: 'choose', tag: 'nom-agent', level: 'C1',
        stem: 'Combine with the focus on the agent: <em>The volunteers rebuilt the flood barrier. The lower town stayed dry in October.</em>',
        options: [
          'The volunteers\' rebuilding of the flood barrier kept the lower town dry in October.',
          'The flood barrier\'s rebuilding of the volunteers kept the lower town dry in October.',
          'The rebuilding of the flood barrier kept the volunteers dry in October.',
          'The volunteers\' rebuilt of the flood barrier kept the lower town dry in October.'
        ],
        answer: 0,
        why: 'Each of the other three shows a different named fault. Option 2 swaps the slots, so the barrier rebuilds the people; option 3 loses the stated result and dries the volunteers instead of the town; option 4 leaves the verb unnominalized inside the possessive.' },

      { id: 't3l3ck-3', type: 'choose', tag: 'nom-direction', level: 'C1',
        stem: 'Combine with the focus on the result: <em>The district office reopened the branch library. Borrowing by younger readers doubled.</em>',
        options: [
          'The reopening of the branch library doubled borrowing by younger readers.',
          'A doubling of borrowing by younger readers followed the reopening of the branch library.',
          'The reopening of the branch library followed a doubling of borrowing by younger readers.',
          'The district office doubled borrowing by younger readers by reopening the branch library.'
        ],
        answer: 1,
        why: 'Option 1 is Focus 2 rather than Focus 3, since the cause holds the subject slot; option 3 uses the backward verb but reverses the order, so the borrowing comes first; option 4 puts the agent back and demotes the process to an instrument phrase.' },

      { id: 't3l3ck-4', type: 'spot', tag: 'nom-causeverb', level: 'C1',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The collapse of the old water tower', 'in the September storm', 'resulted from', 'a two-year campaign to rebuild it.'],
        answer: 2,
        fix: 'produced',
        why: '<em>Resulted from</em> is a backward verb, so it claims the rebuilding campaign caused the collapse. The tower fell first, which needs a forward verb. The other three parts are correct: the opening nominalization, the time phrase and the closing noun phrase all behave properly.' },

      { id: 't3l3ck-5', type: 'choose', tag: 'nom-register', level: 'C1',
        stem: 'Why does a report writer prefer <em>the diversion of the stream</em> to <em>the contractor diverted the stream</em>?',
        options: [
          'Because it saves a few words in a long report.',
          'Because nouns are always more precise than verbs are.',
          'Because it removes the agent and makes the act sound like a fact.',
          'Because it lets the writer avoid the past tense.'
        ],
        answer: 2,
        why: 'This is the deck\'s accountability point: you can put a person on trial, but you cannot indict a noun. The nominalized version is in fact slightly longer, not shorter; it is vaguer rather than more precise, since the doer has gone; and the tense is carried by whatever main verb follows.' },

      { id: 't3l3ck-6', type: 'build', tag: 'nom-causeverb', level: 'C1',
        stem: 'Combine with the focus on the causal link, deleting the agent: <em>The sanctuary replanted the mangroves. Bird counts across the bay rose.</em>',
        tiles: ['The replanting', 'of the mangroves', 'produced', 'a rise', 'in bird counts', 'across the bay'],
        solution: 'The replanting of the mangroves produced a rise in bird counts across the bay',
        alt: [],
        why: 'No agent, both facts nominalized, one strong forward verb between them.' }
    ]
  }
});

TOPICS.push(T3);
