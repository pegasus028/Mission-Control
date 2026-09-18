/* ===========================================================================
   FULL SIMULATION 3  —  m3
   =========================================================================== */
MOCKS.push({
  id: 'm3',
  name: 'Full Simulation 3',
  blurb: 'The hardest of the three papers: a full hour at the top of the B2 to C1 range, on the coast, the classroom, the workshop and the local press.',
  minutes: 60,
  total: 30,
  sections: [

    /* ------------------------------------------------- PART A, items 1-5 */
    {
      code: 'A-I',
      part: 'PART A: VOCABULARY',
      title: 'Vocabulary in a single sentence',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [

        { id: 'm3-1', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Campaigners want crabs and lobsters treated in law as ______ creatures, capable of feeling pain and distress.',
          options: ['edible', 'dormant', 'sentient', 'migratory'],
          answer: 2,
          why: '<em>Sentient</em> means able to feel and to experience. The defining clause <em>capable of feeling pain and distress</em> is the definition itself, and none of the other adjectives touches feeling.' },

        { id: 'm3-2', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'The reviewer praised the novel for its patient handling of ______, the puzzle of how physical matter gives rise to inner experience.',
          options: ['perception', 'consciousness', 'recollection', 'intuition'],
          answer: 1,
          why: 'The apposition defines the word: awareness of one\'s own inner experience is <em>consciousness</em>. <em>Perception</em> is the taking in of sense data, and <em>recollection</em> and <em>intuition</em> name single mental acts.' },

        { id: 'm3-3', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Inspectors use the word ______ for a vessel that fishes where and when it likes, ignoring every seasonal closure.',
          options: ['rogue', 'retired', 'chartered', 'neighbouring'],
          answer: 0,
          why: '<em>Rogue</em> describes something that operates outside the rules it is supposed to follow, which is what <em>fishes where and when it likes</em> defines.' },

        { id: 'm3-4', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'The inquiry uncovered a ______ scheme to stamp certified markings on bearings that had never been tested at all.',
          options: ['lawful', 'charitable', 'transparent', 'nefarious'],
          answer: 3,
          why: '<em>Nefarious</em> means wicked and done in secret. Falsely certifying untested parts is both, so the three positive adjectives contradict the sentence they sit in.' },

        { id: 'm3-5', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Set fifty years after the ______, the novel imagines a world in which machine intelligence has long since outstripped our own.',
          options: ['eclipse', 'singularity', 'armistice', 'renaissance'],
          answer: 1,
          why: 'The <em>singularity</em> names the hypothetical moment at which machine intelligence passes human intelligence, which the relative clause spells out.' }
      ]
    },

    /* ------------------------------------------------ PART A, items 6-10 */
    {
      code: 'A-II',
      part: 'PART A: VOCABULARY',
      title: 'Vocabulary in a dialogue',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [

        { id: 'm3-6', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Nina', text: 'Since the Gazette closed, rumour on the town forum has become so ___(6)___ that half my neighbours believe a story before they check it.' },
            { who: 'Theo', text: 'That is the danger. With no local paper, readers end up inside an ___(7)___ where every post simply repeats the one above it.' },
            { who: 'Nina', text: 'And the loudest accounts set out to ___(8)___ the town, because a quarrel travels further than a council report ever will.' },
            { who: 'Theo', text: 'Worse, some of those pages ___(9)___ older residents, taking money from them for flood funds that do not exist.' },
            { who: 'Nina', text: 'Our teacher says the ___(10)___ of any reader to a confident headline depends mostly on how tired and hurried that reader is.' },
            { who: 'Theo', text: 'Which is an argument for putting a reporter back in the magistrates\' court, not for lecturing the readers.' }
          ],
          stem: 'Choose the best option for gap (6).',
          options: ['sporadic', 'courteous', 'pervasive', 'audible'],
          answer: 2,
          why: '<em>Pervasive</em> means present everywhere, which is what <em>so … that half my neighbours believe a story</em> requires. <em>Sporadic</em> would mean the opposite.' },

        { id: 'm3-7', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Nina', text: 'Since the Gazette closed, rumour on the town forum has become so ___(6)___ that half my neighbours believe a story before they check it.' },
            { who: 'Theo', text: 'That is the danger. With no local paper, readers end up inside an ___(7)___ where every post simply repeats the one above it.' },
            { who: 'Nina', text: 'And the loudest accounts set out to ___(8)___ the town, because a quarrel travels further than a council report ever will.' },
            { who: 'Theo', text: 'Worse, some of those pages ___(9)___ older residents, taking money from them for flood funds that do not exist.' },
            { who: 'Nina', text: 'Our teacher says the ___(10)___ of any reader to a confident headline depends mostly on how tired and hurried that reader is.' },
            { who: 'Theo', text: 'Which is an argument for putting a reporter back in the magistrates\' court, not for lecturing the readers.' }
          ],
          stem: 'Choose the best option for gap (7).',
          options: ['echo chamber', 'open forum', 'press office', 'news desk'],
          answer: 0,
          why: 'An <em>echo chamber</em> is a space in which the same opinion comes back to you, which the relative clause defines: <em>every post simply repeats the one above it</em>.' },

        { id: 'm3-8', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Nina', text: 'Since the Gazette closed, rumour on the town forum has become so ___(6)___ that half my neighbours believe a story before they check it.' },
            { who: 'Theo', text: 'That is the danger. With no local paper, readers end up inside an ___(7)___ where every post simply repeats the one above it.' },
            { who: 'Nina', text: 'And the loudest accounts set out to ___(8)___ the town, because a quarrel travels further than a council report ever will.' },
            { who: 'Theo', text: 'Worse, some of those pages ___(9)___ older residents, taking money from them for flood funds that do not exist.' },
            { who: 'Nina', text: 'Our teacher says the ___(10)___ of any reader to a confident headline depends mostly on how tired and hurried that reader is.' },
            { who: 'Theo', text: 'Which is an argument for putting a reporter back in the magistrates\' court, not for lecturing the readers.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['reassure', 'interview', 'inform', 'polarize'],
          answer: 3,
          why: 'To <em>polarize</em> a group is to drive it into two opposed camps, which is the only reading the reason clause allows: <em>a quarrel travels further than a council report</em>.' },

        { id: 'm3-9', type: 'gap', tag: 'vocab-collocation', level: 'C1',
          lines: [
            { who: 'Nina', text: 'Since the Gazette closed, rumour on the town forum has become so ___(6)___ that half my neighbours believe a story before they check it.' },
            { who: 'Theo', text: 'That is the danger. With no local paper, readers end up inside an ___(7)___ where every post simply repeats the one above it.' },
            { who: 'Nina', text: 'And the loudest accounts set out to ___(8)___ the town, because a quarrel travels further than a council report ever will.' },
            { who: 'Theo', text: 'Worse, some of those pages ___(9)___ older residents, taking money from them for flood funds that do not exist.' },
            { who: 'Nina', text: 'Our teacher says the ___(10)___ of any reader to a confident headline depends mostly on how tired and hurried that reader is.' },
            { who: 'Theo', text: 'Which is an argument for putting a reporter back in the magistrates\' court, not for lecturing the readers.' }
          ],
          stem: 'Choose the best option for gap (9).',
          options: ['report on', 'rely on', 'prey on', 'call on'],
          answer: 2,
          why: 'To <em>prey on</em> someone is to exploit their weakness for gain, which is exactly what taking money for funds that do not exist amounts to.' },

        { id: 'm3-10', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Nina', text: 'Since the Gazette closed, rumour on the town forum has become so ___(6)___ that half my neighbours believe a story before they check it.' },
            { who: 'Theo', text: 'That is the danger. With no local paper, readers end up inside an ___(7)___ where every post simply repeats the one above it.' },
            { who: 'Nina', text: 'And the loudest accounts set out to ___(8)___ the town, because a quarrel travels further than a council report ever will.' },
            { who: 'Theo', text: 'Worse, some of those pages ___(9)___ older residents, taking money from them for flood funds that do not exist.' },
            { who: 'Nina', text: 'Our teacher says the ___(10)___ of any reader to a confident headline depends mostly on how tired and hurried that reader is.' },
            { who: 'Theo', text: 'Which is an argument for putting a reporter back in the magistrates\' court, not for lecturing the readers.' }
          ],
          stem: 'Choose the best option for gap (10).',
          options: ['loyalty', 'susceptibility', 'objection', 'commitment'],
          answer: 1,
          why: '<em>Susceptibility to</em> something is how easily you are affected by it, which is what a tired and hurried reader has more of. The other three nouns take <em>to</em> but name a choice, not a vulnerability.' }
      ]
    },

    /* ----------------------------------------------- PART B I, items 11-15 */
    {
      code: 'B-I',
      part: 'PART B: GRAMMAR',
      title: 'Gapped text',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [

        { id: 'm3-11', type: 'cloze', tag: 'inv-negative', level: 'C1',
          passage: 'Seldom has a coastal community ___(11)___ so heavily on a single species. ___(12)___ for generations from open boats, the inshore crab stock is now showing clear signs of strain. Local skippers object to the deeper grounds ___(13)___ dredged at all, and the harbour board has promised a review of the licensing rules before the autumn. Had the quota been cut five years ago, the fleet ___(14)___ far more profitably today. As it is, the two beds closest to the estuary are believed ___(15)___ by dredging gear some years before anyone began keeping records.',
          blank: '(11)',
          stem: 'Choose the best option for blank (11).',
          options: ['depended', 'depend', 'depending', 'to depend'],
          answer: 0,
          why: 'The negative adverbial <em>Seldom</em> pulls the auxiliary <em>has</em> in front of the subject, and after <em>has</em> the verb must be the past participle <em>depended</em>.' },

        { id: 'm3-12', type: 'cloze', tag: 'part-perfect-passive', level: 'C1',
          passage: 'Seldom has a coastal community ___(11)___ so heavily on a single species. ___(12)___ for generations from open boats, the inshore crab stock is now showing clear signs of strain. Local skippers object to the deeper grounds ___(13)___ dredged at all, and the harbour board has promised a review of the licensing rules before the autumn. Had the quota been cut five years ago, the fleet ___(14)___ far more profitably today. As it is, the two beds closest to the estuary are believed ___(15)___ by dredging gear some years before anyone began keeping records.',
          blank: '(12)',
          stem: 'Choose the best option for blank (12).',
          options: ['Fishing', 'To fish', 'Having fished', 'Having been fished'],
          answer: 3,
          why: 'The subject is the stock, and the stock is fished rather than fishing, so the participle must be passive. The perfect marks the generations of fishing as earlier than the strain now showing.' },

        { id: 'm3-13', type: 'cloze', tag: 'vform-prep-ing', level: 'C1',
          passage: 'Seldom has a coastal community ___(11)___ so heavily on a single species. ___(12)___ for generations from open boats, the inshore crab stock is now showing clear signs of strain. Local skippers object to the deeper grounds ___(13)___ dredged at all, and the harbour board has promised a review of the licensing rules before the autumn. Had the quota been cut five years ago, the fleet ___(14)___ far more profitably today. As it is, the two beds closest to the estuary are believed ___(15)___ by dredging gear some years before anyone began keeping records.',
          blank: '(13)',
          stem: 'Choose the best option for blank (13).',
          options: ['being', 'be', 'to be', 'been'],
          answer: 0,
          why: 'The <em>to</em> of <em>object to</em> is a preposition, so what follows is a noun phrase: <em>the deeper grounds being dredged</em>. Put a noun in the slot to hear it — <em>object to the dredging</em>.' },

        { id: 'm3-14', type: 'cloze', tag: 'cond-mixed', level: 'C1',
          passage: 'Seldom has a coastal community ___(11)___ so heavily on a single species. ___(12)___ for generations from open boats, the inshore crab stock is now showing clear signs of strain. Local skippers object to the deeper grounds ___(13)___ dredged at all, and the harbour board has promised a review of the licensing rules before the autumn. Had the quota been cut five years ago, the fleet ___(14)___ far more profitably today. As it is, the two beds closest to the estuary are believed ___(15)___ by dredging gear some years before anyone began keeping records.',
          blank: '(14)',
          stem: 'Choose the best option for blank (14).',
          options: ['is fishing', 'will be fishing', 'would be fishing', 'would have been fishing'],
          answer: 2,
          why: 'The condition sits five years back but <em>today</em> drags the result into the present, so the result clause takes <em>would</em> + continuous, not <em>would have</em>.' },

        { id: 'm3-15', type: 'cloze', tag: 'rep-infinitive', level: 'C1',
          passage: 'Seldom has a coastal community ___(11)___ so heavily on a single species. ___(12)___ for generations from open boats, the inshore crab stock is now showing clear signs of strain. Local skippers object to the deeper grounds ___(13)___ dredged at all, and the harbour board has promised a review of the licensing rules before the autumn. Had the quota been cut five years ago, the fleet ___(14)___ far more profitably today. As it is, the two beds closest to the estuary are believed ___(15)___ by dredging gear some years before anyone began keeping records.',
          blank: '(15)',
          stem: 'Choose the best option for blank (15).',
          options: ['to strip', 'to have stripped', 'to be stripped', 'to have been stripped'],
          answer: 3,
          why: 'The beds received the stripping, so the infinitive is passive, and it happened <em>some years before</em> the records began, so it is perfect as well.' }
      ]
    },

    /* ---------------------------------------------- PART B II, items 16-20 */
    {
      code: 'B-II',
      part: 'PART B: GRAMMAR',
      title: 'Closest meaning',
      instructions: 'Choose the closest meaning to the original sentence.',
      points: 0.5,
      items: [

        { id: 'm3-16', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The printing works stopped running a night shift in March.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The works kept its night shift going right through March.',
            'The works will end the night shift at the end of March.',
            'The works ended its night shift during March.',
            'The works paused in order to organise a night shift.'
          ],
          answer: 2,
          why: '<em>Stop</em> + <em>-ing</em> ends the activity named. Option 4 reads it as <em>stop to do</em>, a pause for a purpose; the others flip the polarity or push the event into the future.' },

        { id: 'm3-17', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The governors meant to raise the entry requirement for the sixth form.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The governors intended to make entry to the sixth form harder.',
            'The governors succeeded in raising the entry requirement.',
            'The governors are raising the entry requirement at present.',
            'The governors refused to change the entry requirement.'
          ],
          answer: 0,
          why: '<em>Mean to do</em> reports an intention and says nothing about the outcome, so option 2 adds a success the sentence never claims.' },

        { id: 'm3-18', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The workshop tried fitting a quieter motor to the press.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The workshop struggled to fit a quieter motor to the press.',
            'The workshop will attempt to fit a quieter motor next month.',
            'The workshop declined to change the motor on the press.',
            'The workshop experimented with a quieter motor on the press.'
          ],
          answer: 3,
          why: '<em>Try</em> + <em>-ing</em> names a method being tested to see whether it works. Option 1 is the infinitive meaning, an effort against difficulty.' },

        { id: 'm3-19', type: 'equiv', tag: 'part-active', level: 'C1',
          given: 'The steadily shrinking herring shoals have driven several boats out of the fishery.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The shoals have finished shrinking and the boats have returned.',
            'Every boat in the local fleet has now left the fishery.',
            'Shoals that are still getting smaller have forced boats out.',
            'The shoals will shrink and boats will leave the fishery.'
          ],
          answer: 2,
          why: 'The active participle <em>shrinking</em> describes a process still under way. Option 1 finishes it, option 2 widens <em>several</em> to <em>every</em>, and option 4 moves it into the future.' },

        { id: 'm3-20', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'Some of the governors regretted approving the new timetable.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'A number of the governors are sorry about a decision already taken.',
            'Every governor on the board opposed the new timetable from the start.',
            'The governors refused to give their approval to the new timetable.',
            'The governors are about to announce an unwelcome timetable change.'
          ],
          answer: 0,
          why: '<em>Regret</em> + <em>-ing</em> looks back at something done. Option 2 turns <em>some</em> into <em>every</em>, option 3 flips the polarity, and option 4 belongs to <em>regret to inform</em>.' }
      ]
    },

    /* --------------------------------------------- PART B III, items 21-25 */
    {
      code: 'B-III',
      part: 'PART B: GRAMMAR',
      title: 'Nominalization',
      instructions: 'Choose the best nominalized sentence that combines the two provided sentences.',
      points: 0.5,
      items: [

        { id: 'm3-21', type: 'choose', tag: 'nom-agent', level: 'B2+',
          stem: 'The trust restored the salt marsh. The wading birds returned.',
          options: [
            'The salt marsh\'s restoration of the trust led to the return of the birds.',
            'The trust\'s restored of the salt marsh led to the return of the birds.',
            'The trust\'s restoration of the salt marsh led to the return of the birds.',
            'The return of the wading birds led to the trust\'s restoration of the marsh.'
          ],
          answer: 2,
          why: 'Keeping the agent as a possessive and nominalizing the action gives <em>the trust\'s restoration of the salt marsh</em>. Option 1 swaps agent and object, option 2 never nominalizes the verb, and option 4 reverses the causal arrow.' },

        { id: 'm3-22', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'The paper hired two court reporters. Local coverage improved.',
          options: [
            'A clear improvement in local coverage resulted from the hiring of two reporters.',
            'The hiring of two reporters resulted from a clear improvement in local coverage.',
            'The hiring of two reporters made the paper the most trusted in the region.',
            'A clear improvement in local coverage resulted from the reporters\' hiring of the paper.'
          ],
          answer: 0,
          why: 'Focus on the result puts the outcome first and traces it back with <em>resulted from</em>. Option 2 points the arrow the wrong way, option 3 adds a claim the base sentences never make, and option 4 swaps agent and object.' },

        { id: 'm3-23', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'The council closed the old slipway. Inshore landings fell.',
          options: [
            'The fall in inshore landings caused the closure of the old slipway.',
            'The closure of the old slipway caused the council to lose the harbour.',
            'The council\'s closed of the old slipway caused a fall in inshore landings.',
            'The closure of the old slipway caused a fall in inshore landings.'
          ],
          answer: 3,
          why: 'Both actions become nouns and one strong verb joins them in the direction the base sentences give. Option 1 reverses that direction, option 2 invents a consequence, and option 3 leaves the verb unnominalized.' },

        { id: 'm3-24', type: 'choose', tag: 'nom-structure', level: 'C1',
          stem: 'The factory automated its packing line. Injury rates dropped.',
          options: [
            'A drop in injury rates followed the automation of the packing line.',
            'The factory\'s automate of the packing line produced a drop in injuries.',
            'The automation of the packing line followed a drop in injury rates.',
            'The packing line\'s automation of the factory produced a drop in injuries.'
          ],
          answer: 0,
          why: '<em>Followed</em> points backwards, so the outcome must stand first as the subject. Option 2 never makes a noun of the verb, option 3 reverses the order of events, and option 4 swaps agent and object.' },

        { id: 'm3-25', type: 'choose', tag: 'nom-suffix', level: 'C1',
          stem: 'The university tightened its entry requirements. Applications fell sharply.',
          options: [
            'The sharp fall in applications produced a tightening of the entry requirements.',
            'The tightening of the entry requirements produced a sharp fall in applications.',
            'The university\'s tightened of its entry requirements produced a sharp fall.',
            'The tightening of the entry requirements produced a sharp fall in its income.'
          ],
          answer: 1,
          why: '<em>Tighten</em> has no <em>-tion</em> or <em>-ment</em> form, so the gerund <em>tightening</em> does the noun work. Option 1 reverses the arrow, option 3 never turns the verb into a noun, and option 4 reports a fall the base sentences never mention.' }
      ]
    },

    /* ---------------------------------------------- PART B IV, items 26-30 */
    {
      code: 'B-IV',
      part: 'PART B: GRAMMAR',
      title: 'Paragraph ordering',
      instructions: 'Choose the best answer to rearrange the following statements into a logical paragraph.',
      points: 0.5,
      items: [

        { id: 'm3-26', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: 'A. That empty seat in the court soon meant council meetings went unreported too.<br>B. Last spring, the Bexmoor Gazette was cutting its reporting staff to save money.<br>C. Because of that silence, readers are now demanding a weekly court and council page.<br>D. Within weeks the paper had nobody covering the magistrates\' court.',
          options: ['B-D-A-C', 'B-A-D-C', 'D-B-A-C', 'B-D-C-A'],
          answer: 0,
          why: 'The past continuous in B builds the background, D is the event inside it, <em>That empty seat in the court</em> in A needs D, and <em>Because of that silence</em> in C closes the paragraph with a demand.' },

        { id: 'm3-27', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'A. The crews were therefore forced to land their catch forty miles up the coast.<br>B. Repairs to the quay wall closed the harbour at Pentowan for the whole of February.<br>C. That long detour added several hours to every working trip.<br>D. The harbour board now wants a temporary landing stage ready for the next closure.',
          options: ['B-C-A-D', 'A-B-C-D', 'B-A-D-C', 'B-A-C-D'],
          answer: 3,
          why: '<em>Therefore</em> in A must follow the closure in B, <em>That long detour</em> in C must follow the forty miles in A, and D is the recommendation that ends the paragraph.' },

        { id: 'm3-28', type: 'choose', tag: 'coh-reference', level: 'B2+',
          stem: 'A. Parents blamed the losses on the absence of any written guidance.<br>B. Last term, the school was trialling a new policy on mobile phones.<br>C. While the tutors were collecting the handsets each morning, several went missing.<br>D. The governors have since abandoned the arrangement altogether.',
          options: ['C-B-A-D', 'B-C-A-D', 'B-A-C-D', 'B-C-D-A'],
          answer: 1,
          why: 'B sets the term-long background, C is the event during it, <em>the losses</em> in A can only refer to the missing handsets, and <em>since</em> in D marks the closing decision.' },

        { id: 'm3-29', type: 'choose', tag: 'coh-topic', level: 'B2+',
          stem: 'A. These delays left the assembly benches idle for days at a time.<br>B. A small joinery works in the town takes its timber from a single supplier.<br>C. Because of that idle time, the owner is looking for a second supplier.<br>D. Deliveries from that supplier arrived late throughout the summer.',
          options: ['B-A-D-C', 'D-B-A-C', 'B-D-C-A', 'B-D-A-C'],
          answer: 3,
          why: 'Only B names everything for the first time. <em>That supplier</em> in D needs B, <em>These delays</em> in A needs D, and <em>that idle time</em> in C needs A.' },

        { id: 'm3-30', type: 'choose', tag: 'coh-closing', level: 'B2+',
          stem: 'A. Volunteers were counting that recovering colony when the first drone appeared overhead.<br>B. The birds abandoned two nests within minutes of that disturbance.<br>C. Such losses have persuaded the warden to ask for a seasonal flying ban.<br>D. The tern colony on Sker Island has recovered slowly since the storms of 2019.',
          options: ['A-D-B-C', 'D-A-B-C', 'D-B-A-C', 'D-A-C-B'],
          answer: 1,
          why: 'D introduces the colony that A refers back to, A puts the drone into a continuous background, <em>that disturbance</em> in B can only be the drone, and <em>Such losses</em> in C needs the abandoned nests.' }
      ]
    },

    /* ----------------------------------------------- PART B V, items 31-40 */
    {
      code: 'B-V',
      part: 'PART B: GRAMMAR',
      title: 'Error identification',
      instructions: 'Identify the grammatical error.',
      points: 0.5,
      items: [

        { id: 'm3-31', type: 'spot', tag: 'vform-gerund-verb', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The workshop manager risked', 'to lose the whole order', 'by refusing to replace', 'the worn cutters last month.'],
          answer: 1,
          fix: 'risked losing the whole order',
          why: '<em>Risk</em> takes the <em>-ing</em> form, never <em>to</em> + infinitive, so it must be <em>risked losing</em>. The <em>to</em> after <em>refusing</em> is correct, because <em>refuse</em> takes the infinitive.' },

        { id: 'm3-32', type: 'spot', tag: 'tense-marker', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The harbour board approved', 'the new landing stage', 'in March 2023', 'and has published its costs last week.'],
          answer: 3,
          fix: 'and published its costs last week',
          why: '<em>Last week</em> is a closed past time, and a closed time will not sit with the present perfect. It must be <em>published its costs last week</em>.' },

        { id: 'm3-33', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'Identify the grammatical error.',
          words: ['Repair the harbour wall', 'has become', 'the largest single item', 'in the parish budget.'],
          answer: 0,
          fix: 'Repairing the harbour wall',
          why: 'A bare verb cannot be a subject in English. Only the <em>-ing</em> form does the noun job, so it must be <em>Repairing the harbour wall</em>.' },

        { id: 'm3-34', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Tagging the returning salmon', 'each autumn', 'are now a condition', 'of every netting licence.'],
          answer: 2,
          fix: 'is now a condition',
          why: 'Cover the middle and read it: <em>Tagging … is</em>. The plural <em>salmon</em> sits inside the subject and is not the head of it.' },

        { id: 'm3-35', type: 'spot', tag: 'part-fragment', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The closure of the town\'s only bookshop', 'leaving the literary festival', 'without a venue', 'for the first time in twelve years.'],
          answer: 1,
          fix: 'left the literary festival',
          why: 'There is no finite verb anywhere in the sentence, so the participle must become one: <em>left the literary festival</em>.' },

        { id: 'm3-36', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Because the tide was rising, the crew agreed that they should', 'immediately secure the nets and', 'warning the other boats', 'before the swell reached the bar.'],
          answer: 2,
          fix: 'warn the other boats',
          why: 'Both verbs hang from the same <em>should</em>, so both must be bare infinitives: <em>secure … and warn</em>.' },

        { id: 'm3-37', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Deeply worried news of the drop', 'in advertising revenue', 'reached the newsroom', 'on Friday afternoon.'],
          answer: 0,
          fix: 'Deeply worrying news of the drop',
          why: 'The news causes the feeling rather than having it, so the active participle is needed: <em>deeply worrying news</em>. The <em>-ed</em> form would describe the staff who read it.' },

        { id: 'm3-38', type: 'spot', tag: 'vform-gerund-verb', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The governors\' committee recommended', 'to reduce the size of', 'the sixth-form intake', 'from September next year.'],
          answer: 1,
          fix: 'reducing the size of',
          why: '<em>Recommend</em> takes <em>-ing</em> or a that-clause, never <em>to</em> + infinitive: <em>recommended reducing the size of</em>.' },

        { id: 'm3-39', type: 'spot', tag: 'nom-suffix', level: 'C1',
          stem: 'Identify the grammatical error.',
          words: ['The trust\'s protect of the dune system', 'has been praised', 'by every conservation body', 'working in the county.'],
          answer: 0,
          fix: 'The trust\'s protection of the dune system',
          why: 'A possessive and an <em>of</em>-phrase demand a noun between them, so the verb must be nominalized: <em>the trust\'s protection of the dune system</em>.' },

        { id: 'm3-40', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The new catch-reporting forms', 'took almost an hour to complete,', 'which left most of the crews', 'thoroughly frustrating.'],
          answer: 3,
          fix: 'thoroughly frustrated.',
          why: 'The crews have the feeling rather than causing it, so the passive participle is needed: <em>thoroughly frustrated</em>.' }
      ]
    },

    /* ------------------------------------------------- PART C, items 41-45 */
    {
      code: 'C-I',
      part: 'PART C: READING',
      title: 'Reading passage 1',
      instructions: 'Read the text then choose the best options to answer the questions.',
      points: 1,
      items: [

        { id: 'm3-41', type: 'read', tag: 'read-main', level: 'C1',
          passage: 'From June, the sale of single-use vapes will be prohibited in shops across the country, and any retailer who continues to stock them will face a fine of up to five thousand pounds for each offence. Ministers say the measure has two purposes. The first is to halt the steady rise in vaping among school-age children, who are drawn to cheap disposable devices in bright colours and sweet flavours. The second is to cut the number of lithium batteries dropped into household bins, where they start hundreds of fires in refuse lorries every year.<br><br>Retailers\' groups accept the environmental argument but warn that the ban will simply move the trade to unregulated websites and market stalls, where nobody checks a buyer\'s age. Public health researchers add a further complication: adult smokers who switched to disposables may drift back to cigarettes if the replacement on offer is dearer and harder to use. Councils, meanwhile, point out that enforcement will fall to trading standards teams that have lost a third of their inspectors since 2015. Whether the prohibition reduces youth vaping, or merely changes where it happens, will depend on how quickly those teams are rebuilt.',
          source: 'Adapted for classroom use from government consultation papers and retail trade reporting.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The number of bin lorry fires caused by discarded batteries.',
            'A decision to return disposable vapes to shop shelves.',
            'A coming ban on disposable vapes and the doubts about it.',
            'A new tax on tobacco products sold in supermarkets.'
          ],
          answer: 2,
          why: 'The passage sets out the prohibition and its purposes, then the objections of retailers, researchers and councils. The fires are one supporting detail, and the other two options describe measures the passage never mentions.' },

        { id: 'm3-42', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'From June, the sale of single-use vapes will be prohibited in shops across the country, and any retailer who continues to stock them will face a fine of up to five thousand pounds for each offence. Ministers say the measure has two purposes. The first is to halt the steady rise in vaping among school-age children, who are drawn to cheap disposable devices in bright colours and sweet flavours. The second is to cut the number of lithium batteries dropped into household bins, where they start hundreds of fires in refuse lorries every year.<br><br>Retailers\' groups accept the environmental argument but warn that the ban will simply move the trade to unregulated websites and market stalls, where nobody checks a buyer\'s age. Public health researchers add a further complication: adult smokers who switched to disposables may drift back to cigarettes if the replacement on offer is dearer and harder to use. Councils, meanwhile, point out that enforcement will fall to trading standards teams that have lost a third of their inspectors since 2015. Whether the prohibition reduces youth vaping, or merely changes where it happens, will depend on how quickly those teams are rebuilt.',
          source: 'Adapted for classroom use from government consultation papers and retail trade reporting.',
          stem: 'According to the passage, who will be fined once the measure takes effect?',
          options: [
            'Shops that go on selling single-use vapes',
            'Councils that fail to collect used devices',
            'Manufacturers that fit lithium batteries',
            'Pupils found using a vape on school grounds'
          ],
          answer: 0,
          why: 'One clause carries it: <em>any retailer who continues to stock them will face a fine of up to five thousand pounds</em>. No other party in the passage is said to pay anything.' },

        { id: 'm3-43', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'From June, the sale of single-use vapes will be prohibited in shops across the country, and any retailer who continues to stock them will face a fine of up to five thousand pounds for each offence. Ministers say the measure has two purposes. The first is to halt the steady rise in vaping among school-age children, who are drawn to cheap disposable devices in bright colours and sweet flavours. The second is to cut the number of lithium batteries dropped into household bins, where they start hundreds of fires in refuse lorries every year.<br><br>Retailers\' groups accept the environmental argument but warn that the ban will simply move the trade to unregulated websites and market stalls, where nobody checks a buyer\'s age. Public health researchers add a further complication: adult smokers who switched to disposables may drift back to cigarettes if the replacement on offer is dearer and harder to use. Councils, meanwhile, point out that enforcement will fall to trading standards teams that have lost a third of their inspectors since 2015. Whether the prohibition reduces youth vaping, or merely changes where it happens, will depend on how quickly those teams are rebuilt.',
          source: 'Adapted for classroom use from government consultation papers and retail trade reporting.',
          stem: 'What effect do retailers\' groups expect the ban to have?',
          options: [
            'Shops will lose every adult customer within a year.',
            'Manufacturers will redesign devices to use fewer batteries.',
            'Selling will move to places where age is never checked.',
            'Trading standards teams will take on a third more inspectors.'
          ],
          answer: 2,
          why: 'The retailers\' warning is that the ban <em>will simply move the trade to unregulated websites and market stalls, where nobody checks a buyer\'s age</em>. Option 4 reverses what the councils say about inspector numbers.' },

        { id: 'm3-44', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'From June, the sale of single-use vapes will be prohibited in shops across the country, and any retailer who continues to stock them will face a fine of up to five thousand pounds for each offence. Ministers say the measure has two purposes. The first is to halt the steady rise in vaping among school-age children, who are drawn to cheap disposable devices in bright colours and sweet flavours. The second is to cut the number of lithium batteries dropped into household bins, where they start hundreds of fires in refuse lorries every year.<br><br>Retailers\' groups accept the environmental argument but warn that the ban will simply move the trade to unregulated websites and market stalls, where nobody checks a buyer\'s age. Public health researchers add a further complication: adult smokers who switched to disposables may drift back to cigarettes if the replacement on offer is dearer and harder to use. Councils, meanwhile, point out that enforcement will fall to trading standards teams that have lost a third of their inspectors since 2015. Whether the prohibition reduces youth vaping, or merely changes where it happens, will depend on how quickly those teams are rebuilt.',
          source: 'Adapted for classroom use from government consultation papers and retail trade reporting.',
          stem: 'What is the author\'s primary intention in the second paragraph?',
          options: [
            'To praise ministers for acting quickly on youth vaping.',
            'To explain how lithium batteries ought to be recycled.',
            'To advise adult smokers on how to give up cigarettes.',
            'To set out the objections and the practical difficulties.'
          ],
          answer: 3,
          why: 'Each sentence of the second paragraph gives an objection: displaced trade, smokers returning to cigarettes, and too few inspectors to enforce anything.' },

        { id: 'm3-45', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'From June, the sale of single-use vapes will be prohibited in shops across the country, and any retailer who continues to stock them will face a fine of up to five thousand pounds for each offence. Ministers say the measure has two purposes. The first is to halt the steady rise in vaping among school-age children, who are drawn to cheap disposable devices in bright colours and sweet flavours. The second is to cut the number of lithium batteries dropped into household bins, where they start hundreds of fires in refuse lorries every year.<br><br>Retailers\' groups accept the environmental argument but warn that the ban will simply move the trade to unregulated websites and market stalls, where nobody checks a buyer\'s age. Public health researchers add a further complication: adult smokers who switched to disposables may drift back to cigarettes if the replacement on offer is dearer and harder to use. Councils, meanwhile, point out that enforcement will fall to trading standards teams that have lost a third of their inspectors since 2015. Whether the prohibition reduces youth vaping, or merely changes where it happens, will depend on how quickly those teams are rebuilt.',
          source: 'Adapted for classroom use from government consultation papers and retail trade reporting.',
          stem: 'What follow-up action is implied as necessary if the measure is to succeed?',
          options: [
            'Raising the fine well above five thousand pounds',
            'Rebuilding the teams that inspect the retailers',
            'Banning refillable devices along with disposable ones',
            'Letting online sellers trade without any age check'
          ],
          answer: 1,
          why: 'The closing clause makes the condition explicit: success <em>will depend on how quickly those teams are rebuilt</em>.' }
      ]
    },

    /* ------------------------------------------------- PART C, items 46-50 */
    {
      code: 'C-II',
      part: 'PART C: READING',
      title: 'Reading passage 2',
      instructions: 'Read the text then choose the best options to answer the questions.',
      points: 1,
      items: [

        { id: 'm3-46', type: 'read', tag: 'read-main', level: 'C1',
          passage: 'The nine-mile branch line between Marden and Coleford closed in 1965, and its track was lifted three years later. A regional transport board has now approved the money to relay it, and the first passenger trains are expected within four years. The case for the scheme rests on housing. Eleven thousand homes have been built along the valley since the line shut, and the single road that serves them carries four times the traffic it was designed for. Supporters argue that a half-hourly service would take enough cars off that road to make the journey to the county town predictable again.<br><br>The objections are not trivial. Two miles of the old formation now lie beneath a supermarket car park and a school playing field, so the route must curve away from the original alignment and cross farmland that has been in one family for a century. The cost of that diversion has already doubled the first estimate. Cyclists have also lost a well-used path that was laid along the trackbed in the 1990s, and the board has offered no firm replacement for it.<br><br>A further difficulty is quieter but harder to settle. Unless the new stations are given parking and proper bus links, passengers will simply drive to them, and the valley road will fill again.',
          source: 'Adapted for classroom use from regional transport board papers and local press reports.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The lifting of the track along the valley in 1968.',
            'A campaign to keep a cycle path open along the trackbed.',
            'The growth of housing in one valley since the 1960s.',
            'A plan to reopen a branch line and the problems it faces.'
          ],
          answer: 3,
          why: 'The first paragraph gives the approved scheme and its rationale, the second and third give the obstacles. The other options name details that occupy a sentence each.' },

        { id: 'm3-47', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'The nine-mile branch line between Marden and Coleford closed in 1965, and its track was lifted three years later. A regional transport board has now approved the money to relay it, and the first passenger trains are expected within four years. The case for the scheme rests on housing. Eleven thousand homes have been built along the valley since the line shut, and the single road that serves them carries four times the traffic it was designed for. Supporters argue that a half-hourly service would take enough cars off that road to make the journey to the county town predictable again.<br><br>The objections are not trivial. Two miles of the old formation now lie beneath a supermarket car park and a school playing field, so the route must curve away from the original alignment and cross farmland that has been in one family for a century. The cost of that diversion has already doubled the first estimate. Cyclists have also lost a well-used path that was laid along the trackbed in the 1990s, and the board has offered no firm replacement for it.<br><br>A further difficulty is quieter but harder to settle. Unless the new stations are given parking and proper bus links, passengers will simply drive to them, and the valley road will fill again.',
          source: 'Adapted for classroom use from regional transport board papers and local press reports.',
          stem: 'According to the passage, what is the main argument for reopening the line?',
          options: [
            'A supermarket has offered to pay for the new stations.',
            'The track was lifted only three years after the closure.',
            'The one road serving new housing is badly overloaded.',
            'Passengers have demanded a train every ten minutes.'
          ],
          answer: 2,
          why: 'The case <em>rests on housing</em>: eleven thousand new homes and a single road carrying <em>four times the traffic it was designed for</em>. The service proposed is half-hourly, not every ten minutes.' },

        { id: 'm3-48', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'The nine-mile branch line between Marden and Coleford closed in 1965, and its track was lifted three years later. A regional transport board has now approved the money to relay it, and the first passenger trains are expected within four years. The case for the scheme rests on housing. Eleven thousand homes have been built along the valley since the line shut, and the single road that serves them carries four times the traffic it was designed for. Supporters argue that a half-hourly service would take enough cars off that road to make the journey to the county town predictable again.<br><br>The objections are not trivial. Two miles of the old formation now lie beneath a supermarket car park and a school playing field, so the route must curve away from the original alignment and cross farmland that has been in one family for a century. The cost of that diversion has already doubled the first estimate. Cyclists have also lost a well-used path that was laid along the trackbed in the 1990s, and the board has offered no firm replacement for it.<br><br>A further difficulty is quieter but harder to settle. Unless the new stations are given parking and proper bus links, passengers will simply drive to them, and the valley road will fill again.',
          source: 'Adapted for classroom use from regional transport board papers and local press reports.',
          stem: 'What has caused the cost of the scheme to rise?',
          options: [
            'Part of the old route is built over, so the line must be diverted.',
            'The board agreed to pay compensation to the cyclists it displaced.',
            'One farming family has refused to sell any of its land at all.',
            'The board decided to run trains every half hour instead of hourly.'
          ],
          answer: 0,
          why: 'The car park and the playing field force the route away from the original alignment, and <em>the cost of that diversion has already doubled the first estimate</em>. The other three causes are never stated.' },

        { id: 'm3-49', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'The nine-mile branch line between Marden and Coleford closed in 1965, and its track was lifted three years later. A regional transport board has now approved the money to relay it, and the first passenger trains are expected within four years. The case for the scheme rests on housing. Eleven thousand homes have been built along the valley since the line shut, and the single road that serves them carries four times the traffic it was designed for. Supporters argue that a half-hourly service would take enough cars off that road to make the journey to the county town predictable again.<br><br>The objections are not trivial. Two miles of the old formation now lie beneath a supermarket car park and a school playing field, so the route must curve away from the original alignment and cross farmland that has been in one family for a century. The cost of that diversion has already doubled the first estimate. Cyclists have also lost a well-used path that was laid along the trackbed in the 1990s, and the board has offered no firm replacement for it.<br><br>A further difficulty is quieter but harder to settle. Unless the new stations are given parking and proper bus links, passengers will simply drive to them, and the valley road will fill again.',
          source: 'Adapted for classroom use from regional transport board papers and local press reports.',
          stem: 'What is the author\'s primary intention in the second paragraph?',
          options: [
            'To describe how and when the branch line was closed.',
            'To praise the board for holding the costs of the scheme down.',
            'To set out what now stands in the way of the scheme.',
            'To recommend that the supermarket car park be demolished.'
          ],
          answer: 2,
          why: 'The paragraph opens with <em>The objections are not trivial</em> and then lists them: the built-over formation, the doubled cost and the lost cycle path.' },

        { id: 'm3-50', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'The nine-mile branch line between Marden and Coleford closed in 1965, and its track was lifted three years later. A regional transport board has now approved the money to relay it, and the first passenger trains are expected within four years. The case for the scheme rests on housing. Eleven thousand homes have been built along the valley since the line shut, and the single road that serves them carries four times the traffic it was designed for. Supporters argue that a half-hourly service would take enough cars off that road to make the journey to the county town predictable again.<br><br>The objections are not trivial. Two miles of the old formation now lie beneath a supermarket car park and a school playing field, so the route must curve away from the original alignment and cross farmland that has been in one family for a century. The cost of that diversion has already doubled the first estimate. Cyclists have also lost a well-used path that was laid along the trackbed in the 1990s, and the board has offered no firm replacement for it.<br><br>A further difficulty is quieter but harder to settle. Unless the new stations are given parking and proper bus links, passengers will simply drive to them, and the valley road will fill again.',
          source: 'Adapted for classroom use from regional transport board papers and local press reports.',
          stem: 'What follow-up action is implied as necessary if the line is to relieve the road?',
          options: [
            'Closing the valley road to private cars altogether',
            'Giving the new stations parking and bus connections',
            'Relaying the line along its original alignment',
            'Building further housing beside the new stations'
          ],
          answer: 1,
          why: 'The final sentence states the condition: <em>Unless the new stations are given parking and proper bus links</em>, drivers will use the road as before.' }
      ]
    }
  ]
});
