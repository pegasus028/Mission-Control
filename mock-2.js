/* ===========================================================================
   FULL SIMULATION 2  —  m2
   =========================================================================== */
MOCKS.push({
  id: 'm2',
  name: 'Full Simulation 2',
  blurb: 'A full 50-item paper under exam conditions, drawn from water, shipping, farming, archives and clinic logistics.',
  minutes: 60,
  total: 30,
  sections: [

    /* ------------------------------------------------- PART A · items 1-5 */
    {
      code: 'A-I',
      part: 'PART A: VOCABULARY',
      title: 'Vocabulary in context',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [

        { id: 'm2-1', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'The suppressed test results reached the press only because an anonymous ______ inside the water company decided to release them.',
          options: ['auditor', 'contractor', 'trustee', 'whistleblower'],
          answer: 3,
          why: 'A <em>whistleblower</em> is an insider who exposes wrongdoing in their own organisation. An auditor and a trustee act openly and officially, and a contractor is simply someone paid to do work.' },

        { id: 'm2-2', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'Years of saltwater flooding have increased the ______ of the older pumping stations to sudden electrical failure.',
          options: ['immunity', 'susceptibility', 'resilience', 'reluctance'],
          answer: 1,
          why: '<em>Susceptibility</em> names how open something is to a particular harm, and that harm follows <em>to</em>. Immunity and resilience point the opposite way, and reluctance describes an unwilling person, not a building.' },

        { id: 'm2-3', type: 'choose', tag: 'vocab-collocation', level: 'B2+',
          stem: 'Unlicensed lenders deliberately ______ farmers who have had a poor harvest and need cash before the spring sowing.',
          options: ['call on', 'wait on', 'take on', 'prey on'],
          answer: 3,
          why: '<em>Prey on</em> takes a direct object and always implies a stronger party exploiting a weaker one, which is what the poor harvest sets up. The other three name ordinary dealings with no exploitation in them.' },

        { id: 'm2-4', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'The smell of diesel is so ______ around the container terminal that most dockers stop noticing it within a week.',
          options: ['pervasive', 'sporadic', 'fragrant', 'temporary'],
          answer: 0,
          why: '<em>Pervasive</em> means spread through every part of something, which is why the smell becomes impossible to isolate and then impossible to notice. Something sporadic or temporary would be noticed each time it returned.' },

        { id: 'm2-5', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'The plan to reopen the county\'s two rural clinics won rare ______ backing, with senior figures from both parties speaking for it.',
          options: ['partisan', 'ceremonial', 'bipartisan', 'tentative'],
          answer: 2,
          why: '<em>Bipartisan</em> means supported by two opposing parties at once, which is exactly what the second clause describes. <em>Partisan</em> claims the reverse, and the other two say nothing about who gave the support.' }
      ]
    },

    /* ------------------------------------------------ PART A · items 6-10 */
    {
      code: 'A-II',
      part: 'PART A: VOCABULARY',
      title: 'Dialogue',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [

        { id: 'm2-6', type: 'gap', tag: 'vocab-u4', level: 'B2+',
          lines: [
            { who: 'Nadia', text: 'That talk from the water board engineer was far better than I expected.' },
            { who: 'Owen', text: 'The forecasting was the best part. She said reservoir levels are now managed with ___(6)___, so the software trains itself on thirty years of rainfall figures.' },
            { who: 'Nadia', text: 'And every customer record is protected by ___(7)___, which is why a stolen file would be unreadable.' },
            { who: 'Owen', text: 'She was careful about that. One supplier with ___(8)___ motives had already tried to sell the board forged sensor readings.' },
            { who: 'Nadia', text: 'Someone at the back asked whether a control system could ever develop ___(9)___ and start choosing its own targets.' },
            { who: 'Owen', text: 'She said no machine anywhere shows the slightest sign of self-awareness yet.' },
            { who: 'Nadia', text: 'Then she added that the ___(10)___, the moment machines begin redesigning themselves without help, is still a long way off.' }
          ],
          stem: 'Choose the best option for gap (6).',
          options: ['cloud computing', 'machine learning', 'remote sensing', 'fibre optics'],
          answer: 1,
          why: '<em>Machine learning</em> is the name for software that trains itself on a body of data, which is precisely what the rainfall figures are doing here. The other three name ways of storing, gathering or carrying data, not of learning from it.' },

        { id: 'm2-7', type: 'gap', tag: 'vocab-u4', level: 'B2+',
          lines: [
            { who: 'Nadia', text: 'That talk from the water board engineer was far better than I expected.' },
            { who: 'Owen', text: 'The forecasting was the best part. She said reservoir levels are now managed with ___(6)___, so the software trains itself on thirty years of rainfall figures.' },
            { who: 'Nadia', text: 'And every customer record is protected by ___(7)___, which is why a stolen file would be unreadable.' },
            { who: 'Owen', text: 'She was careful about that. One supplier with ___(8)___ motives had already tried to sell the board forged sensor readings.' },
            { who: 'Nadia', text: 'Someone at the back asked whether a control system could ever develop ___(9)___ and start choosing its own targets.' },
            { who: 'Owen', text: 'She said no machine anywhere shows the slightest sign of self-awareness yet.' },
            { who: 'Nadia', text: 'Then she added that the ___(10)___, the moment machines begin redesigning themselves without help, is still a long way off.' }
          ],
          stem: 'Choose the best option for gap (7).',
          options: ['data entry', 'data compression', 'data encryption', 'data archiving'],
          answer: 2,
          why: 'Only <em>data encryption</em> makes a file unreadable to whoever takes it. Entry, compression and archiving all leave the content legible to anyone who opens it.' },

        { id: 'm2-8', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Nadia', text: 'That talk from the water board engineer was far better than I expected.' },
            { who: 'Owen', text: 'The forecasting was the best part. She said reservoir levels are now managed with ___(6)___, so the software trains itself on thirty years of rainfall figures.' },
            { who: 'Nadia', text: 'And every customer record is protected by ___(7)___, which is why a stolen file would be unreadable.' },
            { who: 'Owen', text: 'She was careful about that. One supplier with ___(8)___ motives had already tried to sell the board forged sensor readings.' },
            { who: 'Nadia', text: 'Someone at the back asked whether a control system could ever develop ___(9)___ and start choosing its own targets.' },
            { who: 'Owen', text: 'She said no machine anywhere shows the slightest sign of self-awareness yet.' },
            { who: 'Nadia', text: 'Then she added that the ___(10)___, the moment machines begin redesigning themselves without help, is still a long way off.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['nefarious', 'benevolent', 'cautious', 'indifferent'],
          answer: 0,
          why: '<em>Nefarious</em> describes motives that are not merely selfish but criminal, which is what selling forged readings amounts to. Benevolent claims the opposite, and the other two describe a manner rather than a purpose.' },

        { id: 'm2-9', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Nadia', text: 'That talk from the water board engineer was far better than I expected.' },
            { who: 'Owen', text: 'The forecasting was the best part. She said reservoir levels are now managed with ___(6)___, so the software trains itself on thirty years of rainfall figures.' },
            { who: 'Nadia', text: 'And every customer record is protected by ___(7)___, which is why a stolen file would be unreadable.' },
            { who: 'Owen', text: 'She was careful about that. One supplier with ___(8)___ motives had already tried to sell the board forged sensor readings.' },
            { who: 'Nadia', text: 'Someone at the back asked whether a control system could ever develop ___(9)___ and start choosing its own targets.' },
            { who: 'Owen', text: 'She said no machine anywhere shows the slightest sign of self-awareness yet.' },
            { who: 'Nadia', text: 'Then she added that the ___(10)___, the moment machines begin redesigning themselves without help, is still a long way off.' }
          ],
          stem: 'Choose the best option for gap (9).',
          options: ['obedience', 'maintenance', 'efficiency', 'consciousness'],
          answer: 3,
          why: '<em>Consciousness</em> is the awareness of one\'s own existence, and the next turn confirms the reading by answering with <em>self-awareness</em>. Obedience is the reverse of choosing your own targets.' },

        { id: 'm2-10', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Nadia', text: 'That talk from the water board engineer was far better than I expected.' },
            { who: 'Owen', text: 'The forecasting was the best part. She said reservoir levels are now managed with ___(6)___, so the software trains itself on thirty years of rainfall figures.' },
            { who: 'Nadia', text: 'And every customer record is protected by ___(7)___, which is why a stolen file would be unreadable.' },
            { who: 'Owen', text: 'She was careful about that. One supplier with ___(8)___ motives had already tried to sell the board forged sensor readings.' },
            { who: 'Nadia', text: 'Someone at the back asked whether a control system could ever develop ___(9)___ and start choosing its own targets.' },
            { who: 'Owen', text: 'She said no machine anywhere shows the slightest sign of self-awareness yet.' },
            { who: 'Nadia', text: 'Then she added that the ___(10)___, the moment machines begin redesigning themselves without help, is still a long way off.' }
          ],
          stem: 'Choose the best option for gap (10).',
          options: ['convergence', 'singularity', 'transition', 'acceleration'],
          answer: 1,
          why: 'The clause after the gap defines the term: the point at which machines start improving themselves unaided is the <em>singularity</em>. The other three name gradual processes, not a single threshold.' }
      ]
    },

    /* ----------------------------------------------- PART B I · items 11-15 */
    {
      code: 'B-I',
      part: 'PART B: GRAMMAR',
      title: 'Gapped text',
      instructions: 'Choose the best option to fill in the blank.',
      points: 0.5,
      items: [

        { id: 'm2-11', type: 'cloze', tag: 'inv-negative', level: 'C1',
          passage: 'The national sound archive holds tens of thousands of field recordings made in villages where the local language is no longer spoken. Never before had its technicians ___(11)___ so many fragile discs in a single year. ___(12)___ in the 1950s on acetate that warps in heat, many of the originals had already begun to fail. The trustees now insist on every disc ___(13)___ before it is played. Had the emergency grant been refused in 2019, a third of the collection ___(14)___ unplayable today. Several wax cylinders are thought ___(15)___ before the archive was founded.',
          blank: '(11)',
          stem: 'Choose the best option for blank (11).',
          options: ['digitising', 'to digitise', 'digitised', 'digitise'],
          answer: 2,
          why: 'After the negative adverbial <em>Never before</em> the auxiliary jumps in front of the subject, and <em>had</em> then needs its past participle. The rest of the verb phrase is built exactly as it would be in a question.' },

        { id: 'm2-12', type: 'cloze', tag: 'part-passive', level: 'C1',
          passage: 'The national sound archive holds tens of thousands of field recordings made in villages where the local language is no longer spoken. Never before had its technicians ___(11)___ so many fragile discs in a single year. ___(12)___ in the 1950s on acetate that warps in heat, many of the originals had already begun to fail. The trustees now insist on every disc ___(13)___ before it is played. Had the emergency grant been refused in 2019, a third of the collection ___(14)___ unplayable today. Several wax cylinders are thought ___(15)___ before the archive was founded.',
          blank: '(12)',
          stem: 'Choose the best option for blank (12).',
          options: ['Recorded', 'Recording', 'Having recorded', 'To record'],
          answer: 0,
          why: 'The subject of the main clause is <em>many of the originals</em>, and the originals received the recording rather than doing it, so the clause takes the past participle. <em>Recording</em> and <em>Having recorded</em> would claim the discs recorded something themselves.' },

        { id: 'm2-13', type: 'cloze', tag: 'vform-prep-passive', level: 'C1',
          passage: 'The national sound archive holds tens of thousands of field recordings made in villages where the local language is no longer spoken. Never before had its technicians ___(11)___ so many fragile discs in a single year. ___(12)___ in the 1950s on acetate that warps in heat, many of the originals had already begun to fail. The trustees now insist on every disc ___(13)___ before it is played. Had the emergency grant been refused in 2019, a third of the collection ___(14)___ unplayable today. Several wax cylinders are thought ___(15)___ before the archive was founded.',
          blank: '(13)',
          stem: 'Choose the best option for blank (13).',
          options: ['copying', 'being copied', 'to be copied', 'to have copied'],
          answer: 1,
          why: 'Two steps. The preposition <em>on</em> forces an <em>-ing</em> form, and the disc receives the copying rather than doing it, so the <em>-ing</em> goes passive: <em>being copied</em>.' },

        { id: 'm2-14', type: 'cloze', tag: 'cond-mixed', level: 'C1',
          passage: 'The national sound archive holds tens of thousands of field recordings made in villages where the local language is no longer spoken. Never before had its technicians ___(11)___ so many fragile discs in a single year. ___(12)___ in the 1950s on acetate that warps in heat, many of the originals had already begun to fail. The trustees now insist on every disc ___(13)___ before it is played. Had the emergency grant been refused in 2019, a third of the collection ___(14)___ unplayable today. Several wax cylinders are thought ___(15)___ before the archive was founded.',
          blank: '(14)',
          stem: 'Choose the best option for blank (14).',
          options: ['remains', 'will remain', 'would have remained', 'would remain'],
          answer: 3,
          why: 'The condition sits in the past but <em>today</em> puts the result in the present, so the pattern is <em>Had</em> + past perfect with <em>would</em> + bare infinitive. <em>Would have remained</em> would move the result back into the past as well.' },

        { id: 'm2-15', type: 'cloze', tag: 'rep-infinitive', level: 'C1',
          passage: 'The national sound archive holds tens of thousands of field recordings made in villages where the local language is no longer spoken. Never before had its technicians ___(11)___ so many fragile discs in a single year. ___(12)___ in the 1950s on acetate that warps in heat, many of the originals had already begun to fail. The trustees now insist on every disc ___(13)___ before it is played. Had the emergency grant been refused in 2019, a third of the collection ___(14)___ unplayable today. Several wax cylinders are thought ___(15)___ before the archive was founded.',
          blank: '(15)',
          stem: 'Choose the best option for blank (15).',
          options: ['to lose', 'to be lost', 'to have been lost', 'to have lost'],
          answer: 2,
          why: 'Two questions decide the form. The losing happened earlier than the thinking, so the infinitive is perfect, and the cylinders received the action, so it is also passive: <em>to have been lost</em>.' }
      ]
    },

    /* ---------------------------------------------- PART B II · items 16-20 */
    {
      code: 'B-II',
      part: 'PART B: GRAMMAR',
      title: 'Closest meaning',
      instructions: 'Choose the closest meaning to the original sentence.',
      points: 0.5,
      items: [

        { id: 'm2-16', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The harbour master admitted delaying the repair of the quayside crane.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The harbour master confessed to holding up the repair work.',
            'The harbour master denied holding up the repair work.',
            'The harbour master intends to hold up the repair work.',
            'The harbour master is currently repairing the quayside crane.'
          ],
          answer: 0,
          why: '<em>Admit + -ing</em> means confessing to something already done. Option 2 flips the polarity, option 3 shifts the action into the future, and option 4 changes it into work now in progress.' },

        { id: 'm2-17', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The water company meant to replace the Victorian mains before the winter.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The water company succeeded in replacing the old mains.',
            'The water company is replacing the old mains at present.',
            'The water company intended to renew the old mains.',
            'The water company refused to renew the old mains.'
          ],
          answer: 2,
          why: '<em>Mean to do</em> reports an intention and says nothing about whether it was carried out. Option 1 promotes the intention into a success, option 2 shifts the tense, and option 4 reverses the polarity.' },

        { id: 'm2-18', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The farm tried flooding the lower field to control the weeds.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The farm struggled to flood the lower field.',
            'The farm experimented with flooding the lower field.',
            'The farm will attempt to drain the lower field.',
            'The farm avoided flooding the lower field.'
          ],
          answer: 1,
          why: '<em>Try + -ing</em> means experimenting with a method to see whether it works; <em>try to do</em> would mean finding the act itself difficult, which is what option 1 claims. Option 3 shifts the tense and reverses the action, and option 4 flips the polarity.' },

        { id: 'm2-19', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The newly installed sorting system has reduced delays at several of the clinic\'s dispensaries.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'A system now being installed will reduce delays at the dispensaries.',
            'The recently fitted system has cut delays at every dispensary.',
            'The recently fitted system has cut delays at some dispensaries.',
            'The sorting system has finished reducing the clinic\'s delays.'
          ],
          answer: 2,
          why: '<em>Several</em> is a part, not the whole, so option 2 widens the claim beyond what the original says. Option 1 moves the installation and the effect into the future, and option 4 claims the process is over.' },

        { id: 'm2-20', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The rapidly silting channel has forced larger vessels to unload further downstream.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The channel, which is filling with silt, has made big ships unload elsewhere.',
            'The channel has finished silting up, so ships now unload elsewhere.',
            'The channel will force larger vessels to unload downstream next year.',
            'The silted channel has allowed larger vessels to unload downstream.'
          ],
          answer: 0,
          why: 'The <em>-ing</em> premodifier says the silting is still going on, which only option 1 keeps. Option 2 treats the process as complete, option 3 shifts it into the future, and option 4 replaces compulsion with permission.' }
      ]
    },

    /* --------------------------------------------- PART B III · items 21-25 */
    {
      code: 'B-III',
      part: 'PART B: GRAMMAR',
      title: 'Nominalization',
      instructions: 'Choose the best nominalized sentence that combines the two provided sentences.',
      points: 0.5,
      items: [

        { id: 'm2-21', type: 'choose', tag: 'nom-agent', level: 'B2+',
          stem: 'The port authority dredged the approach channel. Waiting times for container ships fell.',
          options: [
            'The port authority\'s dredging of the approach channel reduced waiting times for ships.',
            'The dredging of the approach channel reduced the port authority\'s container traffic.',
            'A fall in waiting times reduced the port authority\'s dredging of the approach channel.',
            'The port authority\'s dredged of the approach channel reduced waiting times for ships.'
          ],
          answer: 0,
          why: 'The agent is kept as a possessive and the thing done follows <em>of</em>: doer + nominalization + <em>of</em> + object. Option 2 invents a claim about traffic, option 3 runs the arrow backwards, and option 4 never turns the verb into a noun.' },

        { id: 'm2-22', type: 'choose', tag: 'nom-structure', level: 'B2+',
          stem: 'The trust digitised the parish registers. Requests for the originals dropped.',
          options: [
            'The trust produced a sharp drop in requests for the original registers.',
            'The digitisation of the parish registers produced a sharp drop in requests for the originals.',
            'A sharp drop in requests for the originals produced the digitisation of the parish registers.',
            'The digitised of the parish registers produced a sharp drop in requests for the originals.'
          ],
          answer: 1,
          why: 'With the agent deleted, both facts become noun phrases joined by one strong verb. Option 1 drops the process entirely and credits the trust with a drop it caused only indirectly, option 3 reverses the causation, and option 4 leaves the verb unnominalized.' },

        { id: 'm2-23', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'Farmers adopted drip irrigation. Water use on the vegetable plots fell by a third.',
          options: [
            'The farmers stemmed from a reduction in water use on the vegetable plots.',
            'The farmers\' adoption of drip irrigation stemmed from a reduction in water use.',
            'A reduction in water use on the vegetable plots stemmed from the adoption of drip irrigation.',
            'A reduced in water use stemmed from the adoption of drip irrigation on the plots.'
          ],
          answer: 2,
          why: '<em>Stem from</em> points backwards, so the outcome must be the subject and the cause must follow the verb. Option 2 puts the cause in the subject slot and so reverses the claim, option 1 makes people rather than an outcome the subject, and option 4 uses an adjective where a noun is needed.' },

        { id: 'm2-24', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'The clinic introduced evening appointments. Missed appointments among shift workers declined.',
          options: [
            'The evening appointments\' introduction of the clinic led to a decline in missed appointments.',
            'A decline in missed appointments led to the clinic\'s introduction of evening appointments.',
            'The clinic\'s introduction of evening appointments led to a decline in shift work.',
            'The clinic\'s introduction of evening appointments led to a decline in missed appointments.'
          ],
          answer: 3,
          why: 'Write the arrow before reading the options: the introduction comes first and the decline follows. Option 1 swaps the doer and the thing done, option 2 reverses the arrow, and option 3 changes what declined.' },

        { id: 'm2-25', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'The utility raised the standing charge. Complaints to the regulator rose sharply.',
          options: [
            'A sharp rise in complaints to the regulator forced the increase in the standing charge.',
            'The increase in the standing charge produced a sharp rise in complaints to the regulator.',
            'The increase in the standing charge produced a sharp fall in complaints to the regulator.',
            'The increased of the standing charge produced a sharp rise in complaints to the regulator.'
          ],
          answer: 1,
          why: '<em>Produce</em> points forwards, so the cause is the subject and the effect follows. Option 1 reverses the direction with a backward reading, option 3 inverts the second fact, and option 4 never builds the noun <em>increase</em>.' }
      ]
    },

    /* ---------------------------------------------- PART B IV · items 26-30 */
    {
      code: 'B-IV',
      part: 'PART B: GRAMMAR',
      title: 'Paragraph ordering',
      instructions: 'Choose the best answer to rearrange the following statements into a logical paragraph.',
      points: 0.5,
      items: [

        { id: 'm2-26', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: 'Rearrange the following statements into a logical paragraph.<br><br>A. This unexplained loss forced three villages onto tankered water for a fortnight.<br>B. Once the tankers were in place, engineers traced the fault to a cracked culvert beneath the access road.<br>C. Last August, the district reservoir was falling faster than the boreholes could refill it.<br>D. As a result of that discovery, the water board is now relining every culvert on the site.',
          options: ['C-B-A-D', 'A-C-B-D', 'C-A-B-D', 'B-C-A-D'],
          answer: 2,
          why: 'C is the only sentence with no backward reference, and its past continuous sets the scene. A points back at the falling level, B needs the tankers to exist already, and D\'s <em>that discovery</em> can only follow B.' },

        { id: 'm2-27', type: 'choose', tag: 'coh-reference', level: 'B2+',
          stem: 'Rearrange the following statements into a logical paragraph.<br><br>A. Because that queue was costing hauliers thousands a day, the port hired two replacement cranes.<br>B. Shipping lines are now demanding a published maintenance schedule before they renew their contracts.<br>C. These breakdowns left lorries queuing for up to six hours along the approach road.<br>D. All through February, the container terminal was working with two of its four cranes out of service.',
          options: ['D-C-A-B', 'D-A-C-B', 'C-D-A-B', 'B-D-C-A'],
          answer: 0,
          why: 'D opens with a past continuous background and no reference back. <em>These breakdowns</em> in C must follow it, <em>that queue</em> in A must follow C, and B is the closing demand that looks beyond the incident.' },

        { id: 'm2-28', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'Rearrange the following statements into a logical paragraph.<br><br>A. These bare patches allowed wild oats to take hold across whole headlands.<br>B. Agronomists are urging growers to sow a cover crop before the autumn rains arrive.<br>C. A long dry spring left the county\'s barley fields patchy and thin.<br>D. As a result of that infestation, several farms have had to cut the crop early for silage.',
          options: ['C-D-A-B', 'C-A-D-B', 'A-C-D-B', 'B-C-A-D'],
          answer: 1,
          why: 'C names the cause with full nouns and must come first. <em>These bare patches</em> in A points straight back at <em>patchy and thin</em>, <em>that infestation</em> in D can only follow the wild oats, and B is the recommendation that closes.' },

        { id: 'm2-29', type: 'choose', tag: 'coh-order', level: 'C1',
          stem: 'Rearrange the following statements into a logical paragraph.<br><br>A. This arrangement broke down whenever both units were busy at once.<br>B. The health board has since bought a second machine and agreed a rota for its use.<br>C. Last winter the county\'s two minor injury units shared a single portable X-ray machine.<br>D. Consequently, dozens of patients were sent twenty miles to the district hospital on those days.',
          options: ['C-D-A-B', 'A-C-D-B', 'D-C-A-B', 'C-A-D-B'],
          answer: 3,
          why: 'C is the only opener without a backward reference. <em>This arrangement</em> in A points at the shared machine, <em>those days</em> in D can only mean the busy days named in A, and B reports the response.' },

        { id: 'm2-30', type: 'choose', tag: 'coh-closing', level: 'C1',
          stem: 'Rearrange the following statements into a logical paragraph.<br><br>A. Because of that, the transcripts are now the only version scholars can consult.<br>B. A university team spent three years recording the last fluent speakers of a mountain dialect.<br>C. The department is asking for funds to build a playback deck from surviving parts.<br>D. These recordings now sit on tapes that no working machine can read.',
          options: ['B-A-D-C', 'D-B-A-C', 'B-D-A-C', 'A-B-D-C'],
          answer: 2,
          why: 'B introduces the recordings with full nouns, D refers back to them, A draws the consequence of the unreadable tapes, and C is the closing request. Any order that puts A or D first leaves the reference pointing at nothing.' }
      ]
    },

    /* ----------------------------------------------- PART B V · items 31-40 */
    {
      code: 'B-V',
      part: 'PART B: GRAMMAR',
      title: 'Error identification',
      instructions: 'Identify the grammatical error.',
      points: 0.5,
      items: [

        { id: 'm2-31', type: 'spot', tag: 'vform-gerund-verb', level: 'B2',
          stem: 'Identify the grammatical error.',
          words: ['The shipping line avoided', 'to cancel the sailing', 'by chartering a replacement vessel', 'at short notice.'],
          answer: 1,
          fix: 'cancelling the sailing',
          why: '<em>Avoid</em> belongs to the closed list of verbs that take only <em>-ing</em>. The <em>-ing</em> after <em>by</em> in the third segment is correct, because a preposition also demands that form.' },

        { id: 'm2-32', type: 'spot', tag: 'tense-marker', level: 'B2',
          stem: 'Identify the grammatical error.',
          words: ['Across the whole of 2021,', 'the water board', 'has replaced', 'the last of the lead pipes.'],
          answer: 2,
          fix: 'replaced',
          why: 'A closed time phrase fixes the tense before you read anything else. <em>Across the whole of 2021</em> is a finished window, so the past simple is the only possible form.' },

        { id: 'm2-33', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'Identify the grammatical error.',
          words: ['Store grain above sixteen per cent moisture', 'is the commonest cause', 'of spoilage', 'in on-farm silos.'],
          answer: 0,
          fix: 'Storing grain above sixteen per cent moisture',
          why: 'A bare verb cannot be a subject in English; only the <em>-ing</em> form does the noun job. The singular <em>is</em> is already right, because the whole <em>-ing</em> phrase counts as one idea.' },

        { id: 'm2-34', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Sorting the parish registers by year', 'and by place of birth', 'take three volunteers', 'a full week.'],
          answer: 2,
          fix: 'takes three volunteers',
          why: 'The subject is the <em>-ing</em> phrase, which is singular however many plural nouns trail behind it. Cover everything between <em>Sorting</em> and the verb and the agreement becomes obvious.' },

        { id: 'm2-35', type: 'spot', tag: 'part-fragment', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The closure of the eastern berth', 'delaying every coastal delivery', 'to the island', 'throughout November.'],
          answer: 1,
          fix: 'delayed every coastal delivery',
          why: 'Every complete sentence needs one verb carrying tense, and a participle carries none. As written this is a long noun phrase with no predicate at all.' },

        { id: 'm2-36', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The board agreed that, while the reservoir stayed low, it should', 'restrict garden watering', 'across the district', 'and closing the public fountains.'],
          answer: 3,
          fix: 'and close the public fountains',
          why: 'Verbs joined by <em>and</em> must share the form their governor demands. Read each branch straight from <em>should</em>: <em>should restrict</em> holds, <em>should closing</em> does not.' },

        { id: 'm2-37', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Alarming by the number of trolleys', 'left in the corridor,', 'the ward manager', 'called an emergency meeting.'],
          answer: 0,
          fix: 'Alarmed by the number of trolleys',
          why: 'The <em>-ing</em> form describes whatever causes the feeling, the <em>-ed</em> form whoever has it. The trolleys are alarming; the manager who reacts to them is alarmed.' },

        { id: 'm2-38', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The constant changes to the appointment system', 'left many of the older residents', 'at the clinic', 'feeling frustrating.'],
          answer: 3,
          fix: 'feeling frustrated',
          why: 'The changes are the source of the feeling and so are frustrating; the residents receive it and so are frustrated. The arrow runs from cause to person, never back.' },

        { id: 'm2-39', type: 'spot', tag: 'vform-gerund-verb', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The chief pharmacist recommended to restock', 'the trauma bay', 'before the bank holiday', 'weekend began.'],
          answer: 0,
          fix: 'The chief pharmacist recommended restocking',
          why: '<em>Recommend</em> takes an <em>-ing</em> form or a that-clause, never <em>to</em> plus an infinitive. <em>Suggest</em> behaves in exactly the same way, and the two are the commonest source of this error.' },

        { id: 'm2-40', type: 'spot', tag: 'nom-suffix', level: 'C1',
          stem: 'Identify the grammatical error.',
          words: ['Shipping agents welcomed', 'the port\'s expand of the container yard,', 'which has cut waiting times', 'for berths by two days.'],
          answer: 1,
          fix: 'the port\'s expansion of the container yard',
          why: 'After a possessive and before <em>of</em> the slot needs a noun, and the noun built from <em>expand</em> is <em>expansion</em>. A bare verb cannot sit in a noun slot however clear the meaning is.' }
      ]
    },

    /* ------------------------------------------------ PART C · items 41-45 */
    {
      code: 'C-I',
      part: 'PART C: READING',
      title: 'Passage 1',
      instructions: 'Read the text then choose the best options to answer the questions.',
      points: 1,
      items: [

        { id: 'm2-41', type: 'read', tag: 'read-main', level: 'B2+',
          passage: 'From next spring, shoppers in the region will pay a small deposit on every drinks container they buy and reclaim it by returning the empty to a machine in a supermarket lobby. The scheme covers glass bottles, plastic bottles and aluminium cans, and the deposit has been set at twenty pence. Officials point to countries where similar schemes recover more than nine containers in every ten, against barely six in ten where kerbside collection works alone. Cleaner material also earns more, because glass and plastic sorted at the point of return is not contaminated by food waste.<br><br>Retailers are less enthusiastic. Small shops say they have nowhere to put a return machine and nobody to empty it, and they fear that customers will take their empties to a larger store and do the rest of the weekly shopping there. Councils raise a different objection: kerbside collections are paid for out of the value of the material they gather, and removing the most valuable containers from that stream may leave the rest of the service short of money. Ministers have promised a review after two years.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The difficulty small shops face in finding room for a return machine.',
            'The reasons kerbside recycling collections were first introduced.',
            'A proposal to remove glass bottles from supermarket shelves entirely.',
            'A deposit scheme for drinks containers and the objections it has raised.'
          ],
          answer: 3,
          why: 'The first paragraph describes the scheme and its rationale and the second sets out who objects, so the main idea is both halves joined. Option 1 is one supporting detail, option 2 is never explained, and option 3 is not in the text at all.' },

        { id: 'm2-42', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'From next spring, shoppers in the region will pay a small deposit on every drinks container they buy and reclaim it by returning the empty to a machine in a supermarket lobby. The scheme covers glass bottles, plastic bottles and aluminium cans, and the deposit has been set at twenty pence. Officials point to countries where similar schemes recover more than nine containers in every ten, against barely six in ten where kerbside collection works alone. Cleaner material also earns more, because glass and plastic sorted at the point of return is not contaminated by food waste.<br><br>Retailers are less enthusiastic. Small shops say they have nowhere to put a return machine and nobody to empty it, and they fear that customers will take their empties to a larger store and do the rest of the weekly shopping there. Councils raise a different objection: kerbside collections are paid for out of the value of the material they gather, and removing the most valuable containers from that stream may leave the rest of the service short of money. Ministers have promised a review after two years.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, why is returned material worth more than material from kerbside collections?',
          options: [
            'It is collected by councils rather than by private contractors.',
            'It is sorted on return and so is not spoiled by food waste.',
            'It consists mainly of aluminium cans, which command the highest price.',
            'It is washed inside the return machines before it is taken away.'
          ],
          answer: 1,
          why: 'One clause carries the answer: material sorted at the point of return <em>is not contaminated by food waste</em>. The other three sound plausible but no clause in the passage supports any of them.' },

        { id: 'm2-43', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'From next spring, shoppers in the region will pay a small deposit on every drinks container they buy and reclaim it by returning the empty to a machine in a supermarket lobby. The scheme covers glass bottles, plastic bottles and aluminium cans, and the deposit has been set at twenty pence. Officials point to countries where similar schemes recover more than nine containers in every ten, against barely six in ten where kerbside collection works alone. Cleaner material also earns more, because glass and plastic sorted at the point of return is not contaminated by food waste.<br><br>Retailers are less enthusiastic. Small shops say they have nowhere to put a return machine and nobody to empty it, and they fear that customers will take their empties to a larger store and do the rest of the weekly shopping there. Councils raise a different objection: kerbside collections are paid for out of the value of the material they gather, and removing the most valuable containers from that stream may leave the rest of the service short of money. Ministers have promised a review after two years.',
          source: 'Adapted for classroom use.',
          stem: 'What cause and effect relationship do the councils point to?',
          options: [
            'Taking the most valuable containers out of the kerbside stream could leave that service short of money.',
            'Setting the deposit at twenty pence will cause shoppers to buy fewer drinks each week.',
            'Installing return machines will drive up the staffing costs carried by small shops.',
            'Handing empties back by machine will put more food waste into the glass that is collected.'
          ],
          answer: 0,
          why: 'The question names the party, so the arrow must be the councils\' own: value leaves the kerbside stream, and the rest of the service loses its funding. Option 3 belongs to the retailers, and options 2 and 4 are claims the passage never makes.' },

        { id: 'm2-44', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'From next spring, shoppers in the region will pay a small deposit on every drinks container they buy and reclaim it by returning the empty to a machine in a supermarket lobby. The scheme covers glass bottles, plastic bottles and aluminium cans, and the deposit has been set at twenty pence. Officials point to countries where similar schemes recover more than nine containers in every ten, against barely six in ten where kerbside collection works alone. Cleaner material also earns more, because glass and plastic sorted at the point of return is not contaminated by food waste.<br><br>Retailers are less enthusiastic. Small shops say they have nowhere to put a return machine and nobody to empty it, and they fear that customers will take their empties to a larger store and do the rest of the weekly shopping there. Councils raise a different objection: kerbside collections are paid for out of the value of the material they gather, and removing the most valuable containers from that stream may leave the rest of the service short of money. Ministers have promised a review after two years.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author\'s primary intention in the second paragraph?',
          options: [
            'To explain how a return machine identifies and sorts each type of container.',
            'To compare recovery rates in this region with the rates achieved abroad.',
            'To set out the objections raised by retailers and by local councils.',
            'To urge ministers to abandon the deposit scheme before it begins.'
          ],
          answer: 2,
          why: 'Answer a purpose question with a verb. The paragraph is built from <em>less enthusiastic</em>, <em>say</em>, <em>fear</em> and <em>raise a different objection</em>, so its job is to present the case against. Option 2 describes the first paragraph and option 4 escalates far beyond anything the writer says.' },

        { id: 'm2-45', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'From next spring, shoppers in the region will pay a small deposit on every drinks container they buy and reclaim it by returning the empty to a machine in a supermarket lobby. The scheme covers glass bottles, plastic bottles and aluminium cans, and the deposit has been set at twenty pence. Officials point to countries where similar schemes recover more than nine containers in every ten, against barely six in ten where kerbside collection works alone. Cleaner material also earns more, because glass and plastic sorted at the point of return is not contaminated by food waste.<br><br>Retailers are less enthusiastic. Small shops say they have nowhere to put a return machine and nobody to empty it, and they fear that customers will take their empties to a larger store and do the rest of the weekly shopping there. Councils raise a different objection: kerbside collections are paid for out of the value of the material they gather, and removing the most valuable containers from that stream may leave the rest of the service short of money. Ministers have promised a review after two years.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action is implied as the next step for the scheme?',
          options: [
            'The scheme will be examined again once it has been running for two years.',
            'The deposit will be raised every year until the return rate improves.',
            'Kerbside collections will be withdrawn as soon as the machines open.',
            'Every small shop will be required to install a machine before next spring.'
          ],
          answer: 0,
          why: 'The last sentence carries the follow-up, and the answer must be the same size as it: a promised review after two years. The other three go further than any clause in the passage allows.' }
      ]
    },

    /* ------------------------------------------------ PART C · items 46-50 */
    {
      code: 'C-II',
      part: 'PART C: READING',
      title: 'Passage 2',
      instructions: 'Read the text then choose the best options to answer the questions.',
      points: 1,
      items: [

        { id: 'm2-46', type: 'read', tag: 'read-main', level: 'C1',
          passage: 'The examinations board has announced that its national papers will be sat on screen rather than on paper from 2029, beginning with the language subjects. The case is partly practical. Scripts no longer have to be printed under guard, packed into vans and driven to two thousand centres, and results that now take six weeks could be issued in three. The case is also educational: an on-screen paper can adapt as it goes, offering a harder question to a candidate who is answering well and an easier one to a candidate who is struggling, so that one sitting measures a wider range of ability.<br><br>Head teachers have not welcomed the announcement without reservation. Their first concern is equipment. A school with a hundred and twenty working machines cannot examine four hundred candidates in one morning, and hiring laptops each summer is beyond most budgets. Their second concern is fairness: candidates who compose on a keyboard every day are likely to outperform those who do not, and that divide follows household income. A third group points out that a power cut or a network failure in the middle of a paper cannot be dealt with as a torn script can.<br><br>The board has said it will run the paper and screen versions side by side for three years before deciding.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The length of time candidates currently wait for their examination results.',
            'A plan to move national examinations on screen and the concerns it has raised.',
            'The number of working computers held by an average secondary school.',
            'A decision to abandon written examinations in every subject from 2029.'
          ],
          answer: 1,
          why: 'The first paragraph gives the plan and its rationale, the second gives the reservations, and the last gives the response, so the main idea joins the measure to its objections. Options 1 and 3 are single details, and option 4 escalates a start in the language subjects into every subject.' },

        { id: 'm2-47', type: 'read', tag: 'read-detail', level: 'C1',
          passage: 'The examinations board has announced that its national papers will be sat on screen rather than on paper from 2029, beginning with the language subjects. The case is partly practical. Scripts no longer have to be printed under guard, packed into vans and driven to two thousand centres, and results that now take six weeks could be issued in three. The case is also educational: an on-screen paper can adapt as it goes, offering a harder question to a candidate who is answering well and an easier one to a candidate who is struggling, so that one sitting measures a wider range of ability.<br><br>Head teachers have not welcomed the announcement without reservation. Their first concern is equipment. A school with a hundred and twenty working machines cannot examine four hundred candidates in one morning, and hiring laptops each summer is beyond most budgets. Their second concern is fairness: candidates who compose on a keyboard every day are likely to outperform those who do not, and that divide follows household income. A third group points out that a power cut or a network failure in the middle of a paper cannot be dealt with as a torn script can.<br><br>The board has said it will run the paper and screen versions side by side for three years before deciding.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, what can an on-screen paper do that a printed paper cannot?',
          options: [
            'Mark every answer without any involvement from a human examiner.',
            'Allow candidates to sit the examination at a time that suits their school.',
            'Show a candidate the marks awarded for each question as it is answered.',
            'Change the difficulty of the questions in response to the candidate\'s answers.'
          ],
          answer: 3,
          why: 'One clause carries it: the paper <em>can adapt as it goes</em>, offering harder or easier questions according to how the candidate is answering. The other three describe things the passage never claims an on-screen paper can do.' },

        { id: 'm2-48', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'The examinations board has announced that its national papers will be sat on screen rather than on paper from 2029, beginning with the language subjects. The case is partly practical. Scripts no longer have to be printed under guard, packed into vans and driven to two thousand centres, and results that now take six weeks could be issued in three. The case is also educational: an on-screen paper can adapt as it goes, offering a harder question to a candidate who is answering well and an easier one to a candidate who is struggling, so that one sitting measures a wider range of ability.<br><br>Head teachers have not welcomed the announcement without reservation. Their first concern is equipment. A school with a hundred and twenty working machines cannot examine four hundred candidates in one morning, and hiring laptops each summer is beyond most budgets. Their second concern is fairness: candidates who compose on a keyboard every day are likely to outperform those who do not, and that divide follows household income. A third group points out that a power cut or a network failure in the middle of a paper cannot be dealt with as a torn script can.<br><br>The board has said it will run the paper and screen versions side by side for three years before deciding.',
          source: 'Adapted for classroom use.',
          stem: 'Why do head teachers argue that an on-screen paper may be unfair?',
          options: [
            'Because schools in poorer districts are given fewer examination centres.',
            'Because candidates are not allowed to practise on the adaptive software.',
            'Because daily keyboard practice, which tracks household income, raises a candidate\'s score.',
            'Because examiners mark typed answers more generously than handwritten ones.'
          ],
          answer: 2,
          why: 'The fairness clause draws one arrow: those who compose on a keyboard every day do better, and that habit follows household income. The other three name unfairnesses the passage never mentions.' },

        { id: 'm2-49', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'The examinations board has announced that its national papers will be sat on screen rather than on paper from 2029, beginning with the language subjects. The case is partly practical. Scripts no longer have to be printed under guard, packed into vans and driven to two thousand centres, and results that now take six weeks could be issued in three. The case is also educational: an on-screen paper can adapt as it goes, offering a harder question to a candidate who is answering well and an easier one to a candidate who is struggling, so that one sitting measures a wider range of ability.<br><br>Head teachers have not welcomed the announcement without reservation. Their first concern is equipment. A school with a hundred and twenty working machines cannot examine four hundred candidates in one morning, and hiring laptops each summer is beyond most budgets. Their second concern is fairness: candidates who compose on a keyboard every day are likely to outperform those who do not, and that divide follows household income. A third group points out that a power cut or a network failure in the middle of a paper cannot be dealt with as a torn script can.<br><br>The board has said it will run the paper and screen versions side by side for three years before deciding.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author\'s primary intention in the second paragraph?',
          options: [
            'To set out the reservations that head teachers have raised about the plan.',
            'To describe how the adaptive questions are written and checked.',
            'To advise schools on the cheapest way to hire laptops each summer.',
            'To argue that the move to screens should be cancelled altogether.'
          ],
          answer: 0,
          why: 'Name the job the paragraph is doing. It is organised as a list of concerns, marked by <em>not welcomed without reservation</em>, <em>first concern</em>, <em>second concern</em> and <em>a third group points out</em>. Option 4 escalates those concerns into a demand the writer never makes.' },

        { id: 'm2-50', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'The examinations board has announced that its national papers will be sat on screen rather than on paper from 2029, beginning with the language subjects. The case is partly practical. Scripts no longer have to be printed under guard, packed into vans and driven to two thousand centres, and results that now take six weeks could be issued in three. The case is also educational: an on-screen paper can adapt as it goes, offering a harder question to a candidate who is answering well and an easier one to a candidate who is struggling, so that one sitting measures a wider range of ability.<br><br>Head teachers have not welcomed the announcement without reservation. Their first concern is equipment. A school with a hundred and twenty working machines cannot examine four hundred candidates in one morning, and hiring laptops each summer is beyond most budgets. Their second concern is fairness: candidates who compose on a keyboard every day are likely to outperform those who do not, and that divide follows household income. A third group points out that a power cut or a network failure in the middle of a paper cannot be dealt with as a torn script can.<br><br>The board has said it will run the paper and screen versions side by side for three years before deciding.',
          source: 'Adapted for classroom use.',
          stem: 'What does the board intend to do before it makes a final decision?',
          options: [
            'Buy a laptop for every candidate entered in the language subjects.',
            'Postpone the whole plan until the network in each centre is replaced.',
            'Ask head teachers to vote on whether the screen version should go ahead.',
            'Run the paper version and the screen version together for three years.'
          ],
          answer: 3,
          why: 'The closing sentence states the follow-up exactly, and the answer must match its size: both versions side by side for three years. Options 2 and 3 are steps the passage never mentions, and option 1 is far larger than anything the board promises.' }
      ]
    }
  ]
});
