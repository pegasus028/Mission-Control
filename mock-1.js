/* ===========================================================================
   FULL SIMULATION 1  —  m1
   =========================================================================== */
MOCKS.push({
  id: 'm1',
  name: 'Full Simulation 1',
  blurb: 'A full sixty-minute paper in the shape of the final: ten vocabulary items, thirty grammar items and two reading passages.',
  minutes: 60,
  total: 30,
  sections: [

    /* ------------------------------------------------ PART A, items 1-5 */
    {
      code: 'A-I',
      part: 'PART A: VOCABULARY',
      title: 'Vocabulary in context',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [
        { id: 'm1-1', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'The story came out only because one ______ inside the tutoring centre handed the leaked practice papers to a reporter.',
          options: ['echo chamber', 'singularity', 'whistleblower', 'susceptibility'],
          answer: 2,
          why: 'A <em>whistleblower</em> is an insider who makes wrongdoing public, which is exactly what handing the leaked papers to a reporter does. An <em>echo chamber</em> is a place where opinions circulate, a <em>singularity</em> is a threshold, and a <em>susceptibility</em> is a weakness, so none of them can hand anything to anyone.' },

        { id: 'm1-2', type: 'choose', tag: 'vocab-u3', level: 'B2',
          stem: 'Five years ago a cashless payment sticker was a novelty at the food stalls near the school; today it is ______, and even the drinks trolley takes one.',
          options: ['bipartisan', 'ubiquitous', 'sentient', 'cognitive'],
          answer: 1,
          why: '<em>Ubiquitous</em> means found everywhere at once, and the clause about the drinks trolley proves it. <em>Bipartisan</em> belongs to politics, <em>sentient</em> to creatures that can feel, and <em>cognitive</em> to thinking, so none of the three can describe how widely a sticker has spread.' },

        { id: 'm1-3', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'A single refereeing decision in the final can ______ a whole school, and the two camps may still be arguing about it a month later.',
          options: ['prey on', 'mislead', 'polarize', 'manipulate'],
          answer: 2,
          why: '<em>Polarize</em> means to split a group into two sharply opposed sides, and the clause names those two camps. <em>Mislead</em> would make the school wrong rather than divided, <em>manipulate</em> would make it controlled, and <em>prey on</em> would make it a victim.' },

        { id: 'm1-4', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'Sports teachers warn that a heavy match schedule on top of examinations raises a player\'s ______ to injury.',
          options: ['consciousness', 'singularity', 'echo chamber', 'susceptibility'],
          answer: 3,
          why: '<em>Susceptibility</em> is the state of being easily affected by something, and it is the only one of the four that takes <em>to</em> plus the thing you are exposed to. <em>Consciousness</em> is awareness, a <em>singularity</em> is a turning point, and an <em>echo chamber</em> is a closed space for opinions.' },

        { id: 'm1-5', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Students were told to delete a ______ app that had appeared on the school tablets, since nobody could say who had installed it or what it was doing.',
          options: ['rogue', 'benevolent', 'nefarious', 'malicious'],
          answer: 0,
          why: '<em>Rogue</em> describes something operating outside all proper control, which is what an app nobody authorised and nobody understands is doing. <em>Malicious</em> and <em>nefarious</em> both claim a harmful purpose that the sentence explicitly says nobody can identify, and <em>benevolent</em> claims a kind one.' }
      ]
    },

    /* ----------------------------------------------- PART A, items 6-10 */
    {
      code: 'A-II',
      part: 'PART A: VOCABULARY',
      title: 'Dialogue',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [
        { id: 'm1-6', type: 'gap', blank: '(6)', tag: 'vocab-u4', level: 'B2',
          lines: [
            { who: 'Ploy', text: 'Have you tried the revision assistant the school is trialling? Since our notes moved to ___(6)___, I can open them on the library computer and finish them on my phone.' },
            { who: 'Anan', text: 'I have. What surprised me is the hints. It uses ___(7)___ to work out which questions I keep getting wrong, and then it sends me more of them.' },
            { who: 'Ploy', text: 'Useful, although I keep the phone face down while I work. A notification every two minutes adds a ___(8)___ load that nobody counts as study time.' },
            { who: 'Anan', text: 'Agreed. And be careful with the free ones in the store. A few of them ___(9)___ anxious students, charging a monthly fee for hints the textbook gives away.' },
            { who: 'Ploy', text: 'My cousin goes further and says a program that size must be developing some kind of ___(10)___, though all it really does is put words in a likely order.' },
            { who: 'Anan', text: 'It is a study tool, not a mind. I would rather it simply told me which chapter to open next.' }
          ],
          stem: 'Choose the best option for gap (6).',
          options: ['data encryption', 'cloud computing', 'singularity', 'echo chamber'],
          answer: 1,
          why: '<em>Cloud computing</em> keeps files on remote servers reached over the internet, which is why the same notes open on a library computer and on a phone. <em>Data encryption</em> protects files rather than hosting them, and the other two name nothing that could store a notebook.' },

        { id: 'm1-7', type: 'gap', blank: '(7)', tag: 'vocab-u4', level: 'B2+',
          lines: [
            { who: 'Ploy', text: 'Have you tried the revision assistant the school is trialling? Since our notes moved to ___(6)___, I can open them on the library computer and finish them on my phone.' },
            { who: 'Anan', text: 'I have. What surprised me is the hints. It uses ___(7)___ to work out which questions I keep getting wrong, and then it sends me more of them.' },
            { who: 'Ploy', text: 'Useful, although I keep the phone face down while I work. A notification every two minutes adds a ___(8)___ load that nobody counts as study time.' },
            { who: 'Anan', text: 'Agreed. And be careful with the free ones in the store. A few of them ___(9)___ anxious students, charging a monthly fee for hints the textbook gives away.' },
            { who: 'Ploy', text: 'My cousin goes further and says a program that size must be developing some kind of ___(10)___, though all it really does is put words in a likely order.' },
            { who: 'Anan', text: 'It is a study tool, not a mind. I would rather it simply told me which chapter to open next.' }
          ],
          stem: 'Choose the best option for gap (7).',
          options: ['machine learning', 'data encryption', 'echo chamber', 'susceptibility'],
          answer: 0,
          why: '<em>Machine learning</em> is the technique by which a system improves from the data it is given, which is what spotting a student\'s repeated mistakes requires. <em>Data encryption</em> only scrambles the answers, and neither of the other two is a technique at all.' },

        { id: 'm1-8', type: 'gap', blank: '(8)', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Ploy', text: 'Have you tried the revision assistant the school is trialling? Since our notes moved to ___(6)___, I can open them on the library computer and finish them on my phone.' },
            { who: 'Anan', text: 'I have. What surprised me is the hints. It uses ___(7)___ to work out which questions I keep getting wrong, and then it sends me more of them.' },
            { who: 'Ploy', text: 'Useful, although I keep the phone face down while I work. A notification every two minutes adds a ___(8)___ load that nobody counts as study time.' },
            { who: 'Anan', text: 'Agreed. And be careful with the free ones in the store. A few of them ___(9)___ anxious students, charging a monthly fee for hints the textbook gives away.' },
            { who: 'Ploy', text: 'My cousin goes further and says a program that size must be developing some kind of ___(10)___, though all it really does is put words in a likely order.' },
            { who: 'Anan', text: 'It is a study tool, not a mind. I would rather it simply told me which chapter to open next.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['bipartisan', 'sentient', 'cognitive', 'nefarious'],
          answer: 2,
          why: '<em>Cognitive</em> belongs to thinking and attention, and what a notification every two minutes taxes is attention. <em>Sentient</em> would describe the student as a feeling creature rather than the load, and neither <em>bipartisan</em> nor <em>nefarious</em> can describe mental effort.' },

        { id: 'm1-9', type: 'gap', blank: '(9)', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Ploy', text: 'Have you tried the revision assistant the school is trialling? Since our notes moved to ___(6)___, I can open them on the library computer and finish them on my phone.' },
            { who: 'Anan', text: 'I have. What surprised me is the hints. It uses ___(7)___ to work out which questions I keep getting wrong, and then it sends me more of them.' },
            { who: 'Ploy', text: 'Useful, although I keep the phone face down while I work. A notification every two minutes adds a ___(8)___ load that nobody counts as study time.' },
            { who: 'Anan', text: 'Agreed. And be careful with the free ones in the store. A few of them ___(9)___ anxious students, charging a monthly fee for hints the textbook gives away.' },
            { who: 'Ploy', text: 'My cousin goes further and says a program that size must be developing some kind of ___(10)___, though all it really does is put words in a likely order.' },
            { who: 'Anan', text: 'It is a study tool, not a mind. I would rather it simply told me which chapter to open next.' }
          ],
          stem: 'Choose the best option for gap (9).',
          options: ['polarize', 'prey on', 'manipulate', 'mislead'],
          answer: 1,
          why: '<em>Prey on</em> is to exploit people who are already weak or frightened for your own gain, and the fee charged to anxious students is exactly that gain. <em>Manipulate</em> would mean controlling what they decide, <em>mislead</em> giving them false information, and <em>polarize</em> dividing them into two camps, none of which the sentence describes.' },

        { id: 'm1-10', type: 'gap', blank: '(10)', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Ploy', text: 'Have you tried the revision assistant the school is trialling? Since our notes moved to ___(6)___, I can open them on the library computer and finish them on my phone.' },
            { who: 'Anan', text: 'I have. What surprised me is the hints. It uses ___(7)___ to work out which questions I keep getting wrong, and then it sends me more of them.' },
            { who: 'Ploy', text: 'Useful, although I keep the phone face down while I work. A notification every two minutes adds a ___(8)___ load that nobody counts as study time.' },
            { who: 'Anan', text: 'Agreed. And be careful with the free ones in the store. A few of them ___(9)___ anxious students, charging a monthly fee for hints the textbook gives away.' },
            { who: 'Ploy', text: 'My cousin goes further and says a program that size must be developing some kind of ___(10)___, though all it really does is put words in a likely order.' },
            { who: 'Anan', text: 'It is a study tool, not a mind. I would rather it simply told me which chapter to open next.' }
          ],
          stem: 'Choose the best option for gap (10).',
          options: ['susceptibility', 'data encryption', 'singularity', 'consciousness'],
          answer: 3,
          why: '<em>Consciousness</em> is inner awareness, the thing a program would need before it could be called a mind, and the clause about putting words in a likely order denies it. A <em>singularity</em> is a moment in the future, not something a program develops inside itself; a <em>susceptibility</em> is an openness to some particular harm; and <em>data encryption</em> is a way of scrambling files, none of which a program could be said to grow.' }
      ]
    },

    /* -------------------------------------------- PART B I, items 11-15 */
    {
      code: 'B-I',
      part: 'PART B: GRAMMAR',
      title: 'Gapped text',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [
        { id: 'm1-11', type: 'cloze', tag: 'vform-prep-ing', level: 'B2+',
          passage: 'Students have complained for years about their bags ___(11)___ at the door of the examination hall. Had the new lockers arrived a year earlier, the two disputed results from last October ___(12)___ on the record today. Several answer sheets are believed ___(13)___ photographed during the mid-morning break between the two papers, although nothing has ever been proved. The invigilators ___(14)___ to the upper hall say that the lockers have settled the argument for good. Never before has the examinations office ___(15)___ so many appeals about a single seating plan.',
          blank: '(11)',
          stem: 'Choose the best option for gap (11).',
          options: ['being searched', 'searching', 'to be searched', 'having searched'],
          answer: 0,
          why: 'After the preposition <em>about</em> the verb must take an <em>-ing</em> form, which rules out the infinitive <em>to be searched</em> outright. The bags are searched rather than doing any searching, so the active <em>searching</em> and <em>having searched</em> are wrong as well. Only the passive <em>-ing</em> form fits.' },

        { id: 'm1-12', type: 'cloze', tag: 'cond-mixed', level: 'C1',
          passage: 'Students have complained for years about their bags ___(11)___ at the door of the examination hall. Had the new lockers arrived a year earlier, the two disputed results from last October ___(12)___ on the record today. Several answer sheets are believed ___(13)___ photographed during the mid-morning break between the two papers, although nothing has ever been proved. The invigilators ___(14)___ to the upper hall say that the lockers have settled the argument for good. Never before has the examinations office ___(15)___ so many appeals about a single seating plan.',
          blank: '(12)',
          stem: 'Choose the best option for gap (12).',
          options: ['will not be', 'would not be', 'were not', 'would not have been'],
          answer: 1,
          why: 'The <em>if</em>-less <em>Had</em> clause sets an unreal past, but <em>today</em> puts the result in the present, so the mixed pattern <em>would</em> plus bare infinitive is required. <em>Will not be</em> treats an unreal condition as a live future one, <em>were not</em> reports as plain fact the very thing the condition denies, and <em>would not have been</em> would push the result back into the past as well.' },

        { id: 'm1-13', type: 'cloze', tag: 'rep-infinitive', level: 'C1',
          passage: 'Students have complained for years about their bags ___(11)___ at the door of the examination hall. Had the new lockers arrived a year earlier, the two disputed results from last October ___(12)___ on the record today. Several answer sheets are believed ___(13)___ photographed during the mid-morning break between the two papers, although nothing has ever been proved. The invigilators ___(14)___ to the upper hall say that the lockers have settled the argument for good. Never before has the examinations office ___(15)___ so many appeals about a single seating plan.',
          blank: '(13)',
          stem: 'Choose the best option for gap (13).',
          options: ['to photograph', 'to be photographed', 'to have photographed', 'to have been photographed'],
          answer: 3,
          why: 'Two things have to be marked at once: the sheets were photographed rather than photographing, and the photographing came before the believing. Only the perfect passive infinitive carries both.' },

        { id: 'm1-14', type: 'cloze', tag: 'part-reduced-rel', level: 'B2+',
          passage: 'Students have complained for years about their bags ___(11)___ at the door of the examination hall. Had the new lockers arrived a year earlier, the two disputed results from last October ___(12)___ on the record today. Several answer sheets are believed ___(13)___ photographed during the mid-morning break between the two papers, although nothing has ever been proved. The invigilators ___(14)___ to the upper hall say that the lockers have settled the argument for good. Never before has the examinations office ___(15)___ so many appeals about a single seating plan.',
          blank: '(14)',
          stem: 'Choose the best option for gap (14).',
          options: ['assigning', 'to assign', 'assigned', 'having assigned'],
          answer: 2,
          why: 'The full clause would be <em>who have been assigned to the upper hall</em>, and a reduced relative keeps only the past participle. The two active forms would make the invigilators do the assigning, and the infinitive would state a purpose instead.' },

        { id: 'm1-15', type: 'cloze', tag: 'inv-negative', level: 'C1',
          passage: 'Students have complained for years about their bags ___(11)___ at the door of the examination hall. Had the new lockers arrived a year earlier, the two disputed results from last October ___(12)___ on the record today. Several answer sheets are believed ___(13)___ photographed during the mid-morning break between the two papers, although nothing has ever been proved. The invigilators ___(14)___ to the upper hall say that the lockers have settled the argument for good. Never before has the examinations office ___(15)___ so many appeals about a single seating plan.',
          blank: '(15)',
          stem: 'Choose the best option for gap (15).',
          options: ['receive', 'received', 'receiving', 'to receive'],
          answer: 1,
          why: 'The negative adverbial <em>Never before</em> has pulled <em>has</em> in front of the subject, and that auxiliary still needs its past participle. Inversion changes the word order, not the shape of the verb that follows.' }
      ]
    },

    /* ------------------------------------------- PART B II, items 16-20 */
    {
      code: 'B-II',
      part: 'PART B: GRAMMAR',
      title: 'Closest meaning',
      instructions: 'Choose the closest meaning to the original sentence.',
      points: 0.5,
      items: [
        { id: 'm1-16', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The coach remembered locking the equipment store before the bus left.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The coach had a clear memory of locking the store.',
            'The coach remembered that the store had to be locked.',
            'The coach forgot to lock the store before the bus left.',
            'The coach is locking the store before the bus leaves.'
          ],
          answer: 0,
          why: '<em>Remember</em> plus <em>-ing</em> looks back: the locking happened first and the memory came afterwards. Option 2 is <em>remember to do</em>, which points forward to a duty, option 3 reverses the polarity and option 4 moves the whole event into the present.' },

        { id: 'm1-17', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'Halfway through the season the club stopped charging for entry to the training ground.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The club paused its work in order to charge for entry.',
            'The club no longer charges for entry to the training ground.',
            'The club has begun charging for entry to the training ground.',
            'The club will stop charging for entry at the end of the season.'
          ],
          answer: 1,
          why: '<em>Stop</em> plus <em>-ing</em> ends the activity itself, so the charging is over. Option 1 reads it as <em>stop to do</em>, which is a pause for a purpose, option 3 reverses it and option 4 moves the end into the future.' },

        { id: 'm1-18', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'After the interval the referee went on explaining the substitution rule.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The referee then moved on to a completely different rule.',
            'The referee refused to explain the substitution rule again.',
            'The referee continued with the same explanation after the interval.',
            'The referee will explain the substitution rule after the match.'
          ],
          answer: 2,
          why: '<em>Go on</em> plus <em>-ing</em> continues the same activity. Option 1 is <em>go on to do</em>, which moves to a new one, option 2 flips the polarity and option 4 shifts the whole thing into the future.' },

        { id: 'm1-19', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The ceiling lights in the badminton hall need replacing before the district tournament.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The ceiling lights have been replaced since the last tournament.',
            'The staff would like to replace the ceiling lights after the tournament.',
            'The ceiling lights are lighting the hall throughout the tournament.',
            'The ceiling lights must be replaced before the tournament begins.'
          ],
          answer: 3,
          why: '<em>Need</em> plus <em>-ing</em> carries a passive meaning: the lights are what gets replaced. Option 3 misreads the <em>-ing</em> as an active verb, option 1 says the work is already done and option 2 puts it after the tournament.' },

        { id: 'm1-20', type: 'equiv', tag: 'part-active', level: 'B2+',
          given: 'The steadily improving cameras on cheap phones have closed several small portrait studios.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'Phone cameras have stopped improving, so small studios have reopened.',
            'Phone cameras that keep improving have closed some small studios.',
            'Every small portrait studio has closed because of the phone cameras.',
            'Small studios will close if the cameras on phones keep improving.'
          ],
          answer: 1,
          why: 'The <em>-ing</em> premodifier says the cameras are doing the improving and are still at it. Option 1 reverses the direction, option 3 widens <em>several</em> to <em>every</em> and option 4 turns a completed effect into a future condition.' }
      ]
    },

    /* ------------------------------------------ PART B III, items 21-25 */
    {
      code: 'B-III',
      part: 'PART B: GRAMMAR',
      title: 'Nominalization',
      instructions: 'Choose the best nominalized sentence that combines the two provided sentences.',
      points: 0.5,
      items: [
        { id: 'm1-21', type: 'choose', tag: 'nom-agent', level: 'B2+',
          stem: 'The school extended the lunch break. Queues at the canteen shortened.',
          options: [
            'The school\'s extension of the lunch break shortened the canteen queues.',
            'A shortening of the canteen queues extended the school\'s lunch break.',
            'The school\'s extended of the lunch break shortened the canteen queues.',
            'The school\'s extension of the lunch break emptied the canteen completely.'
          ],
          answer: 0,
          why: 'Keeping the agent as a possessive and turning <em>extended</em> into <em>extension</em> puts the doer in the subject slot. Option 2 reverses the arrow, option 3 never nominalizes the verb and option 4 invents an emptying the base sentences never mention.' },

        { id: 'm1-22', type: 'choose', tag: 'nom-direction', level: 'B2+',
          stem: 'The operator added two carriages. Crowding on the platform fell.',
          options: [
            'A fall in platform crowding led to the addition of two carriages.',
            'The addition of two carriages led to a fall in platform crowding.',
            'The two carriages\' addition of the operator led to a fall in crowding.',
            'The added of two carriages led to a fall in platform crowding.'
          ],
          answer: 1,
          why: 'Both actions become nouns and one forward-pointing verb, <em>led to</em>, joins them cause first. Option 1 points the arrow backwards, option 3 swaps the agent and the object and option 4 leaves the verb unnominalized.' },

        { id: 'm1-23', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'Teachers shortened the weekly test. Attendance on Fridays improved.',
          options: [
            'An improvement in Friday attendance resulted from the shortening of the test.',
            'The shortening of the weekly test resulted from better Friday attendance.',
            'An improvement in Friday attendance resulted from the shortened of the test.',
            'An improvement in Friday attendance resulted from the closing of the gates.'
          ],
          answer: 0,
          why: '<em>Result from</em> points backwards, so the outcome stands first and the cause follows it. Option 2 puts the cause in the outcome slot, option 3 fails to nominalize and option 4 supplies a cause the base sentences never give.' },

        { id: 'm1-24', type: 'choose', tag: 'nom-agent', level: 'C1',
          stem: 'The club repaired the floodlights. Evening training resumed.',
          options: [
            'The floodlights\' repair of the club allowed evening training to resume.',
            'A resumption of evening training produced the club\'s repair of the floodlights.',
            'The club\'s repair of the floodlights ended every injury at the ground.',
            'The club\'s repair of the floodlights allowed evening training to resume.'
          ],
          answer: 3,
          why: 'The club is the agent and the floodlights are what it repaired, so the possessive must sit on the club. Option 1 swaps the two, option 2 reverses the arrow and option 3 claims an end to injuries that nothing in the sentences supports.' },

        { id: 'm1-25', type: 'choose', tag: 'nom-structure', level: 'C1',
          stem: 'Students recorded the lectures. Note-taking in class dropped.',
          options: [
            'A drop in note-taking caused the recording of the lectures in class.',
            'The recorded of the lectures caused a drop in note-taking in class.',
            'The recording of the lectures caused a drop in note-taking in class.',
            'The lectures\' recording of the students caused a drop in note-taking.'
          ],
          answer: 2,
          why: 'Dropping the agent and nominalizing both actions leaves one clause with one main verb, <em>caused</em>, running from cause to effect. Option 1 turns the arrow round, option 2 uses a past participle as a noun and option 4 makes the lectures record the students.' }
      ]
    },

    /* ------------------------------------------- PART B IV, items 26-30 */
    {
      code: 'B-IV',
      part: 'PART B: GRAMMAR',
      title: 'Paragraph ordering',
      instructions: 'Choose the best answer to rearrange the following statements into a logical paragraph.',
      points: 0.5,
      items: [
        { id: 'm1-26', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: '<div class="orderblock"><p>A. Last month the canteen moved its drinks fridge across to the till.</p><p>B. Queues at the till then grew so long that some students missed the bell.</p><p>C. Because of these complaints, the fridge has gone back to the far wall.</p><p>D. Teachers on duty reported the problem to the canteen manager.</p></div>',
          options: ['A-D-B-C', 'A-B-D-C', 'B-A-D-C', 'A-B-C-D'],
          answer: 1,
          why: 'A introduces the change, B gives the consequence with <em>then</em>, D reports <em>the problem</em> that B has just described, and C answers <em>these complaints</em>, which are D. Any order with D before B leaves <em>the problem</em> with nothing to refer to.' },

        { id: 'm1-27', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: '<div class="orderblock"><p>A. The club has therefore shifted its practice to seven in the morning.</p><p>B. Last term the sports hall was giving three clubs the same evening slot.</p><p>C. Because of this shortage of courts, players spent more time waiting than playing.</p><p>D. Under that arrangement, only two of the six courts were ever free for badminton.</p></div>',
          options: ['D-B-C-A', 'B-C-D-A', 'B-D-C-A', 'A-B-D-C'],
          answer: 2,
          why: 'B sets the scene in the past continuous, D looks back at it with <em>that arrangement</em>, C names the shortage of courts that only D has mentioned, and A closes with <em>therefore</em>. C cannot precede D, because B says nothing about courts.' },

        { id: 'm1-28', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: '<div class="orderblock"><p>A. Riders complained that the ramp was too steep for a loaded motorbike.</p><p>B. The city opened a new footbridge over the ring road in June.</p><p>C. Engineers have now agreed to add a shallower ramp on the eastern side.</p><p>D. In its first month, however, most riders still crossed at the lights below.</p></div>',
          options: ['B-D-A-C', 'B-A-D-C', 'D-B-A-C', 'B-D-C-A'],
          answer: 0,
          why: 'B opens with the bridge, D contrasts with it through <em>however</em>, A explains why the riders stayed below, and C answers that complaint. D cannot follow A, because A is already a complaint and leaves <em>however</em> nothing to contrast with.' },

        { id: 'm1-29', type: 'choose', tag: 'coh-order', level: 'C1',
          stem: '<div class="orderblock"><p>A. Parents then explained why: the extra hour left no time for the journey home.</p><p>B. From May the school added a compulsory revision class after the last lesson.</p><p>C. Because of this pressure, the class has been moved to Saturday mornings.</p><p>D. Attendance in the first fortnight was barely half of the year group.</p></div>',
          options: ['B-A-D-C', 'D-B-A-C', 'B-D-C-A', 'B-D-A-C'],
          answer: 3,
          why: 'B introduces the class, D reports the attendance, A explains it with <em>then explained why</em>, and C answers <em>this pressure</em>. A cannot stand before D, since what the parents explain is the figure D has given.' },

        { id: 'm1-30', type: 'choose', tag: 'coh-closing', level: 'C1',
          stem: '<div class="orderblock"><p>A. Within a term, two thirds of the class had switched its notifications off.</p><p>B. This silence made the app useless for last-minute changes to the timetable.</p><p>C. The school asked every student to install a messaging app for announcements.</p><p>D. Teachers are asking for a return to the printed notice board at the gate.</p></div>',
          options: ['C-A-B-D', 'C-B-A-D', 'A-C-B-D', 'C-A-D-B'],
          answer: 0,
          why: 'C introduces the app, A gives what the students did with it, B names that <em>silence</em>, and D closes with the demand. B cannot precede A, because the silence it refers to is the switching off.' }
      ]
    },

    /* -------------------------------------------- PART B V, items 31-40 */
    {
      code: 'B-V',
      part: 'PART B: GRAMMAR',
      title: 'Error identification',
      instructions: 'Identify the grammatical error.',
      points: 0.5,
      items: [
        { id: 'm1-31', type: 'spot', tag: 'vform-gerund-verb', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The canteen manager postponed', 'to order the new fryer', 'until the second term', 'because of the cost of installation.'],
          answer: 1,
          fix: 'ordering the new fryer',
          why: '<em>Postpone</em> belongs to the closed group of verbs that take only the <em>-ing</em> form and never <em>to</em>. Nothing else in the sentence is at fault.' },

        { id: 'm1-32', type: 'spot', tag: 'tense-perfect-simple', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The sports department has bought', 'forty new badminton racquets', 'for the junior squad', 'during the refurbishment of 2022.'],
          answer: 0,
          fix: 'The sports department bought',
          why: 'A closed past time phrase such as <em>during the refurbishment of 2022</em> shuts the window on the event, and the present perfect cannot live inside a finished window. The past simple is required.' },

        { id: 'm1-33', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Queuing at the canteen tills', 'for twenty minutes', 'have become normal', 'since the timetable changed in May.'],
          answer: 2,
          fix: 'has become normal',
          why: 'The subject is the <em>-ing</em> noun <em>Queuing</em>, which is singular however many plural words trail behind it. The plural <em>tills</em> sits inside the subject, not at the head of it.' },

        { id: 'm1-34', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The student committee', 'rejected the proposal', 'on the grounds that', 'print the newsletter costs too much.'],
          answer: 3,
          fix: 'printing the newsletter costs too much',
          why: 'A bare verb cannot be the subject of a clause in English. Only the <em>-ing</em> form does the noun job, so the that-clause needs <em>printing</em>.' },

        { id: 'm1-35', type: 'spot', tag: 'part-fragment', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The closure of the side entrance', 'causing long queues', 'at the main gate', 'on every wet morning.'],
          answer: 1,
          fix: 'caused long queues',
          why: 'A participle is not a finite verb, so as it stands the sentence has a subject and no main verb at all. Replacing <em>causing</em> with <em>caused</em> gives the clause its verb.' },

        { id: 'm1-36', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The head teacher decided that the school would', 'shorten the morning break', 'and bringing the assembly forward', 'to the start of the day.'],
          answer: 2,
          fix: 'and bring the assembly forward',
          why: 'Both verbs hang from the same modal <em>would</em>, so both must take the same bare form. Once a list is opened with one shape, every later item has to repeat it.' },

        { id: 'm1-37', type: 'spot', tag: 'part-edging-adj', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The runners were exhausting', 'by the extra two laps', 'that the coach added', 'after the heat of the afternoon.'],
          answer: 0,
          fix: 'The runners were exhausted',
          why: 'The <em>-ing</em> adjective names what causes the feeling; the <em>-ed</em> adjective names who receives it. The runners felt it, so they were <em>exhausted</em>.' },

        { id: 'm1-38', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The sudden cancellation', 'of the late bus service', 'produced a wait at the gate', 'that was deeply worried for parents.'],
          answer: 3,
          fix: 'that was deeply worrying for parents',
          why: 'The wait produced the feeling rather than having one, so it takes the <em>-ing</em> adjective. Only people and animals can be <em>worried</em>.' },

        { id: 'm1-39', type: 'spot', tag: 'vform-gerund-verb', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Before the new term started,', 'the canteen supervisor considered', 'to widen the serving counter', 'by half a metre.'],
          answer: 2,
          fix: 'widening the serving counter',
          why: '<em>Consider</em> takes an <em>-ing</em> form and never <em>to</em> plus an infinitive. This is the commonest verb-pattern slip in the section.' },

        { id: 'm1-40', type: 'spot', tag: 'nom-suffix', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The improve of the bus timetable', 'outside the school gate', 'has reduced the number', 'of late arrivals in the first lesson.'],
          answer: 0,
          fix: 'The improvement of the bus timetable',
          why: 'The slot after <em>The</em> and before <em>of</em> is a noun slot, and <em>improve</em> is a verb. The noun it forms is <em>improvement</em>.' }
      ]
    },

    /* --------------------------------------------- PART C, items 41-45 */
    {
      code: 'C-I',
      part: 'PART C: READING COMPREHENSION',
      title: 'Passage 1',
      instructions: 'Read the text then choose the best options to answer the questions.',
      points: 1,
      items: [
        { id: 'm1-41', type: 'read', tag: 'read-main', level: 'B2+',
          passage: 'From the start of this term every school canteen in the district must display a coloured hygiene card beside the till and keep at least one hot dish inside the new limits for salt and sugar. The scheme follows a survey of two hundred schools, which found that fried snacks made up more than half of everything sold at break. Officials argue that a card on the wall is easier for a fifteen-year-old to read than a printed report, and that the cheapest plate on the counter should not also be the least healthy one.\n\nCanteen operators are less enthusiastic. They point out that the low-salt dishes cost about eight baht more to make, that the subsidy covers only the first year, and that students who dislike the new menu simply walk to the stalls outside the gate, where no card is shown. A parents\' group has raised a further difficulty: the inspection is announced a week in advance, so a kitchen can be tidied for the visit and left as it was afterwards. The district has promised unannounced checks from next year.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The difficulty of keeping fried snacks out of a school canteen.',
            'A hygiene and nutrition scheme for school canteens and the objections to it.',
            'A district survey of what two hundred school canteens sell at break.',
            'The failure of a canteen scheme to change what a single student eats.'
          ],
          answer: 1,
          why: 'The first paragraph gives the scheme and the reasons for it; the second gives the operators and the parents their objections. Option 1 is one supporting detail, option 3 is the evidence inside the official case, and option 4 contradicts a text that reports no results at all.' },

        { id: 'm1-42', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'From the start of this term every school canteen in the district must display a coloured hygiene card beside the till and keep at least one hot dish inside the new limits for salt and sugar. The scheme follows a survey of two hundred schools, which found that fried snacks made up more than half of everything sold at break. Officials argue that a card on the wall is easier for a fifteen-year-old to read than a printed report, and that the cheapest plate on the counter should not also be the least healthy one.\n\nCanteen operators are less enthusiastic. They point out that the low-salt dishes cost about eight baht more to make, that the subsidy covers only the first year, and that students who dislike the new menu simply walk to the stalls outside the gate, where no card is shown. A parents\' group has raised a further difficulty: the inspection is announced a week in advance, so a kitchen can be tidied for the visit and left as it was afterwards. The district has promised unannounced checks from next year.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, what did the survey of two hundred schools find?',
          options: [
            'Fried snacks made up more than half of everything sold at break.',
            'Fried snacks had disappeared from more than half of the canteens.',
            'More than half of the schools had no hygiene card on display.',
            'Most students bought their break from the stalls outside the gate.'
          ],
          answer: 0,
          why: 'The clause is explicit: the survey found that fried snacks <em>made up more than half of everything sold at break</em>. The other three figures appear nowhere in the text.' },

        { id: 'm1-43', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'From the start of this term every school canteen in the district must display a coloured hygiene card beside the till and keep at least one hot dish inside the new limits for salt and sugar. The scheme follows a survey of two hundred schools, which found that fried snacks made up more than half of everything sold at break. Officials argue that a card on the wall is easier for a fifteen-year-old to read than a printed report, and that the cheapest plate on the counter should not also be the least healthy one.\n\nCanteen operators are less enthusiastic. They point out that the low-salt dishes cost about eight baht more to make, that the subsidy covers only the first year, and that students who dislike the new menu simply walk to the stalls outside the gate, where no card is shown. A parents\' group has raised a further difficulty: the inspection is announced a week in advance, so a kitchen can be tidied for the visit and left as it was afterwards. The district has promised unannounced checks from next year.',
          source: 'Adapted for classroom use.',
          stem: 'According to the operators, what do students who dislike the new menu do?',
          options: [
            'They ask the canteen to bring back the old fried snacks.',
            'They complain to the parents\' group about the announced inspection.',
            'They wait for the hot dish that meets the new limits on salt.',
            'They buy from the stalls outside the gate, where no card is shown.'
          ],
          answer: 3,
          why: 'The operators\' sentence says that students who dislike the new menu <em>simply walk to the stalls outside the gate, where no card is shown</em>. The other three actions are never attributed to those students.' },

        { id: 'm1-44', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'From the start of this term every school canteen in the district must display a coloured hygiene card beside the till and keep at least one hot dish inside the new limits for salt and sugar. The scheme follows a survey of two hundred schools, which found that fried snacks made up more than half of everything sold at break. Officials argue that a card on the wall is easier for a fifteen-year-old to read than a printed report, and that the cheapest plate on the counter should not also be the least healthy one.\n\nCanteen operators are less enthusiastic. They point out that the low-salt dishes cost about eight baht more to make, that the subsidy covers only the first year, and that students who dislike the new menu simply walk to the stalls outside the gate, where no card is shown. A parents\' group has raised a further difficulty: the inspection is announced a week in advance, so a kitchen can be tidied for the visit and left as it was afterwards. The district has promised unannounced checks from next year.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author\'s main purpose in the second paragraph?',
          options: [
            'To explain how the coloured hygiene cards are scored.',
            'To recommend the scheme to canteens in other districts.',
            'To set out the difficulties that have been raised against the scheme.',
            'To describe how the survey of two hundred schools was carried out.'
          ],
          answer: 2,
          why: 'The paragraph opens with <em>Canteen operators are less enthusiastic</em> and then adds a second difficulty from the parents. Nothing in it explains the scoring, praises the scheme or looks back at the survey.' },

        { id: 'm1-45', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'From the start of this term every school canteen in the district must display a coloured hygiene card beside the till and keep at least one hot dish inside the new limits for salt and sugar. The scheme follows a survey of two hundred schools, which found that fried snacks made up more than half of everything sold at break. Officials argue that a card on the wall is easier for a fifteen-year-old to read than a printed report, and that the cheapest plate on the counter should not also be the least healthy one.\n\nCanteen operators are less enthusiastic. They point out that the low-salt dishes cost about eight baht more to make, that the subsidy covers only the first year, and that students who dislike the new menu simply walk to the stalls outside the gate, where no card is shown. A parents\' group has raised a further difficulty: the inspection is announced a week in advance, so a kitchen can be tidied for the visit and left as it was afterwards. The district has promised unannounced checks from next year.',
          source: 'Adapted for classroom use.',
          stem: 'What has the district promised to do from next year?',
          options: [
            'To raise the subsidy so that it covers a second year.',
            'To close any kitchen that fails the announced inspection.',
            'To move the outside stalls further away from the school gate.',
            'To carry out its inspections without announcing them first.'
          ],
          answer: 3,
          why: 'The last sentence promises unannounced checks from next year, which answers the complaint about a week\'s warning. The other three actions are never mentioned.' }
      ]
    },

    /* --------------------------------------------- PART C, items 46-50 */
    {
      code: 'C-II',
      part: 'PART C: READING COMPREHENSION',
      title: 'Passage 2',
      instructions: 'Read the text then choose the best options to answer the questions.',
      points: 1,
      items: [
        { id: 'm1-46', type: 'read', tag: 'read-main', level: 'B2+',
          passage: 'From October, students under eighteen pay a flat fifteen baht a day for unlimited travel on city buses and the two commuter lines, instead of a separate fare for every stage of the journey. The transport authority says the pass is meant to do three things at once: cut the cost of getting to school for families in the outer districts, where a return trip can swallow a tenth of a household\'s daily budget; take part of the morning school traffic off motorbikes, which carry more than half of all school journeys and account for most of the injuries; and fill seats on services that run half empty against the commuter flow.\n\nNot everyone is convinced. Bus operators warn that the flat fare is paid to them months in arrears, and that the smallest companies cannot wait that long. Teachers in two outer districts report that the pass is of little use where no route runs within three kilometres of the school, so the families who most need the saving are the ones least able to claim it. Others question the cost: the pass is funded for three years, and nobody has yet said what happens in the fourth. The authority replies that ridership figures from the first year will decide whether the scheme is widened or dropped.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The rising cost of running bus services in the outer districts.',
            'The number of school journeys that are now made by motorbike.',
            'A flat-fare travel pass for students and the doubts raised about it.',
            'A decision to withdraw the student pass after the operators complained.'
          ],
          answer: 2,
          why: 'The first paragraph gives the pass and the three aims behind it; the second gives the operators, the teachers and the doubts about funding. Options 1 and 2 are single details, and option 4 describes a withdrawal the passage never reports.' },

        { id: 'm1-47', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'From October, students under eighteen pay a flat fifteen baht a day for unlimited travel on city buses and the two commuter lines, instead of a separate fare for every stage of the journey. The transport authority says the pass is meant to do three things at once: cut the cost of getting to school for families in the outer districts, where a return trip can swallow a tenth of a household\'s daily budget; take part of the morning school traffic off motorbikes, which carry more than half of all school journeys and account for most of the injuries; and fill seats on services that run half empty against the commuter flow.\n\nNot everyone is convinced. Bus operators warn that the flat fare is paid to them months in arrears, and that the smallest companies cannot wait that long. Teachers in two outer districts report that the pass is of little use where no route runs within three kilometres of the school, so the families who most need the saving are the ones least able to claim it. Others question the cost: the pass is funded for three years, and nobody has yet said what happens in the fourth. The authority replies that ridership figures from the first year will decide whether the scheme is widened or dropped.',
          source: 'Adapted for classroom use.',
          stem: 'According to the authority, what is one of the aims of the pass?',
          options: [
            'To pay the smallest bus companies several months in advance.',
            'To close the commuter lines that run half empty in the morning.',
            'To build new bus routes within three kilometres of every school.',
            'To take part of the morning school traffic off motorbikes.'
          ],
          answer: 3,
          why: 'The second of the three stated aims is to <em>take part of the morning school traffic off motorbikes</em>. Option 2 reverses the aim of filling those half-empty services, and the other two belong to the objections rather than to the aims.' },

        { id: 'm1-48', type: 'read', tag: 'read-context', level: 'C1',
          passage: 'From October, students under eighteen pay a flat fifteen baht a day for unlimited travel on city buses and the two commuter lines, instead of a separate fare for every stage of the journey. The transport authority says the pass is meant to do three things at once: cut the cost of getting to school for families in the outer districts, where a return trip can swallow a tenth of a household\'s daily budget; take part of the morning school traffic off motorbikes, which carry more than half of all school journeys and account for most of the injuries; and fill seats on services that run half empty against the commuter flow.\n\nNot everyone is convinced. Bus operators warn that the flat fare is paid to them months in arrears, and that the smallest companies cannot wait that long. Teachers in two outer districts report that the pass is of little use where no route runs within three kilometres of the school, so the families who most need the saving are the ones least able to claim it. Others question the cost: the pass is funded for three years, and nobody has yet said what happens in the fourth. The authority replies that ridership figures from the first year will decide whether the scheme is widened or dropped.',
          source: 'Adapted for classroom use.',
          stem: 'What does <em>in arrears</em> mean in the passage?',
          options: [
            'Paid in advance, before the journeys are made.',
            'Paid late, several months after the journeys are made.',
            'Paid directly by each student at the ticket gate.',
            'Paid only to the largest of the bus companies.'
          ],
          answer: 1,
          why: 'The clause that follows explains it: the smallest companies <em>cannot wait that long</em>, so the money arrives well after the work. Option 1 is its opposite and the other two describe who pays or who is paid.' },

        { id: 'm1-49', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'From October, students under eighteen pay a flat fifteen baht a day for unlimited travel on city buses and the two commuter lines, instead of a separate fare for every stage of the journey. The transport authority says the pass is meant to do three things at once: cut the cost of getting to school for families in the outer districts, where a return trip can swallow a tenth of a household\'s daily budget; take part of the morning school traffic off motorbikes, which carry more than half of all school journeys and account for most of the injuries; and fill seats on services that run half empty against the commuter flow.\n\nNot everyone is convinced. Bus operators warn that the flat fare is paid to them months in arrears, and that the smallest companies cannot wait that long. Teachers in two outer districts report that the pass is of little use where no route runs within three kilometres of the school, so the families who most need the saving are the ones least able to claim it. Others question the cost: the pass is funded for three years, and nobody has yet said what happens in the fourth. The authority replies that ridership figures from the first year will decide whether the scheme is widened or dropped.',
          source: 'Adapted for classroom use.',
          stem: 'What do the teachers in the two outer districts suggest about the pass?',
          options: [
            'Students in the outer districts use it more than anyone else does.',
            'The pass will soon be widened to cover motorbike taxis as well.',
            'Families in the outer districts now spend nothing at all on travel.',
            'Its benefit reaches least the families that most need the saving.'
          ],
          answer: 3,
          why: 'The clause states it directly: where no route runs within three kilometres, <em>the families who most need the saving are the ones least able to claim it</em>. Option 3 exaggerates a discount into a free journey, and the other two are absent from the text.' },

        { id: 'm1-50', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'From October, students under eighteen pay a flat fifteen baht a day for unlimited travel on city buses and the two commuter lines, instead of a separate fare for every stage of the journey. The transport authority says the pass is meant to do three things at once: cut the cost of getting to school for families in the outer districts, where a return trip can swallow a tenth of a household\'s daily budget; take part of the morning school traffic off motorbikes, which carry more than half of all school journeys and account for most of the injuries; and fill seats on services that run half empty against the commuter flow.\n\nNot everyone is convinced. Bus operators warn that the flat fare is paid to them months in arrears, and that the smallest companies cannot wait that long. Teachers in two outer districts report that the pass is of little use where no route runs within three kilometres of the school, so the families who most need the saving are the ones least able to claim it. Others question the cost: the pass is funded for three years, and nobody has yet said what happens in the fourth. The authority replies that ridership figures from the first year will decide whether the scheme is widened or dropped.',
          source: 'Adapted for classroom use.',
          stem: 'What will decide whether the scheme is widened or dropped?',
          options: [
            'A vote among the bus operators at the end of the third year.',
            'The number of motorbike injuries recorded in the outer districts.',
            'The ridership figures collected during the first year of the pass.',
            'The share of a household budget that a return trip now takes.'
          ],
          answer: 2,
          why: 'The closing sentence says that <em>ridership figures from the first year</em> will decide it. The other three are figures the passage mentions for other purposes or not at all.' }
      ]
    }
  ]
});
