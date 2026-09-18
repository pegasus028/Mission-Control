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

        { id: 'm1-1', type: 'choose', tag: 'vocab-u4', level: 'B2+',
          stem: 'The bequest that pays for free entry to the city museum was entirely ______, since the donor asked for nothing at all in return.',
          options: ['grudging', 'accidental', 'self-serving', 'benevolent'],
          answer: 3,
          why: '<em>Benevolent</em> means well-meaning and kindly, which is exactly what a gift given for nothing in return is. <em>Self-serving</em> reverses the motive, <em>grudging</em> denies the willingness, and <em>accidental</em> denies the intention.' },

        { id: 'm1-2', type: 'choose', tag: 'vocab-u3', level: 'B2',
          stem: 'Unscrupulous resellers used automated software to ______ the market for cup final tickets, forcing ordinary supporters to pay four times the face value.',
          options: ['moderate', 'manipulate', 'illustrate', 'evaluate'],
          answer: 1,
          why: '<em>Manipulate</em> is to control something cleverly or unfairly for your own benefit, which the word <em>unscrupulous</em> has already announced. <em>Moderate</em> would mean calming the market, not distorting it.' },

        { id: 'm1-3', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'Once rare in the old quarter, free drinking fountains are now ______: there is one in every square and beside most of the bus stops.',
          options: ['seasonal', 'localised', 'scarce', 'ubiquitous'],
          answer: 3,
          why: '<em>Ubiquitous</em> means found everywhere at once, which the colon then proves. <em>Localised</em> confines them to one area, <em>scarce</em> repeats the <em>once rare</em> that the sentence is contrasting with, and <em>seasonal</em> answers a question about time, not place.' },

        { id: 'm1-4', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'New handling rules for live shellfish assume that lobsters are ______, that is, capable of feeling pain, and require them to be stunned before cooking.',
          options: ['sentient', 'resilient', 'perishable', 'immobile'],
          answer: 0,
          why: 'The clause after the comma is a definition, and <em>capable of feeling pain</em> defines <em>sentient</em>. <em>Perishable</em> describes food rather than feeling, and <em>resilient</em> would argue against the rule the sentence is explaining.' },

        { id: 'm1-5', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'The decision to award the goal after a video review ______ the crowd, and the two camps were still arguing long after the final whistle.',
          options: ['reassured', 'entertained', 'polarized', 'united'],
          answer: 2,
          why: '<em>Polarize</em> means to split a group into two sharply opposed sides, and the clause names those two camps. <em>United</em> is the exact opposite, and neither <em>reassured</em> nor <em>entertained</em> can produce an argument that outlasts the match.' }
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

        { id: 'm1-6', type: 'gap', tag: 'vocab-u4', level: 'B2',
          lines: [
            { who: 'Nadia', text: 'Since we moved the whole catalogue onto ___(6)___ services, visitors abroad can browse the archive at any hour.' },
            { who: 'Theo', text: 'That is the gain. The trouble is the comment board, where a single ___(7)___ account, ignoring every rule we set, keeps posting invented histories for our bronzes.' },
            { who: 'Nadia', text: 'The moderators removed three ___(8)___ links last week as well, all of them pointing at fake ticket pages.' },
            { who: 'Theo', text: 'And the regulars only ever answer one another, so the board is now an ___(9)___ where the same half-dozen opinions come back unchanged.' },
            { who: 'Nadia', text: 'Then we should redesign it. Threads that long make too great a ___(10)___ demand on a casual visitor anyway.' },
            { who: 'Theo', text: 'Agreed. A short comment box under each object would serve the collection better than a forum.' }
          ],
          stem: 'Choose the best option for gap (6).',
          options: ['cloud computing', 'desktop publishing', 'optical scanning', 'manual cataloguing'],
          answer: 0,
          why: '<em>Cloud computing</em> delivers storage and processing over the internet, which is why readers abroad can reach the catalogue at any hour. The other three name tasks done to the records, not the service that hosts them.' },

        { id: 'm1-7', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Nadia', text: 'Since we moved the whole catalogue onto ___(6)___ services, visitors abroad can browse the archive at any hour.' },
            { who: 'Theo', text: 'That is the gain. The trouble is the comment board, where a single ___(7)___ account, ignoring every rule we set, keeps posting invented histories for our bronzes.' },
            { who: 'Nadia', text: 'The moderators removed three ___(8)___ links last week as well, all of them pointing at fake ticket pages.' },
            { who: 'Theo', text: 'And the regulars only ever answer one another, so the board is now an ___(9)___ where the same half-dozen opinions come back unchanged.' },
            { who: 'Nadia', text: 'Then we should redesign it. Threads that long make too great a ___(10)___ demand on a casual visitor anyway.' },
            { who: 'Theo', text: 'Agreed. A short comment box under each object would serve the collection better than a forum.' }
          ],
          stem: 'Choose the best option for gap (7).',
          options: ['dormant', 'official', 'rogue', 'loyal'],
          answer: 2,
          why: '<em>Rogue</em> describes something that behaves unpredictably and obeys no rules, which the participle clause spells out. A <em>dormant</em> account could not keep posting, and neither <em>official</em> nor <em>loyal</em> squares with ignoring every rule.' },

        { id: 'm1-8', type: 'gap', tag: 'vocab-u4', level: 'B2+',
          lines: [
            { who: 'Nadia', text: 'Since we moved the whole catalogue onto ___(6)___ services, visitors abroad can browse the archive at any hour.' },
            { who: 'Theo', text: 'That is the gain. The trouble is the comment board, where a single ___(7)___ account, ignoring every rule we set, keeps posting invented histories for our bronzes.' },
            { who: 'Nadia', text: 'The moderators removed three ___(8)___ links last week as well, all of them pointing at fake ticket pages.' },
            { who: 'Theo', text: 'And the regulars only ever answer one another, so the board is now an ___(9)___ where the same half-dozen opinions come back unchanged.' },
            { who: 'Nadia', text: 'Then we should redesign it. Threads that long make too great a ___(10)___ demand on a casual visitor anyway.' },
            { who: 'Theo', text: 'Agreed. A short comment box under each object would serve the collection better than a forum.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['obsolete', 'malicious', 'duplicate', 'decorative'],
          answer: 1,
          why: '<em>Malicious</em> means intended to cause harm, and a link that leads to a fake ticket page is built to do exactly that. <em>Obsolete</em> and <em>duplicate</em> describe faults with no intention behind them.' },

        { id: 'm1-9', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Nadia', text: 'Since we moved the whole catalogue onto ___(6)___ services, visitors abroad can browse the archive at any hour.' },
            { who: 'Theo', text: 'That is the gain. The trouble is the comment board, where a single ___(7)___ account, ignoring every rule we set, keeps posting invented histories for our bronzes.' },
            { who: 'Nadia', text: 'The moderators removed three ___(8)___ links last week as well, all of them pointing at fake ticket pages.' },
            { who: 'Theo', text: 'And the regulars only ever answer one another, so the board is now an ___(9)___ where the same half-dozen opinions come back unchanged.' },
            { who: 'Nadia', text: 'Then we should redesign it. Threads that long make too great a ___(10)___ demand on a casual visitor anyway.' },
            { who: 'Theo', text: 'Agreed. A short comment box under each object would serve the collection better than a forum.' }
          ],
          stem: 'Choose the best option for gap (9).',
          options: ['open forum', 'archive index', 'exhibition space', 'echo chamber'],
          answer: 3,
          why: 'An <em>echo chamber</em> is a space in which people meet only the opinions they already hold, which is what the same half-dozen opinions coming back unchanged describes. An <em>open forum</em> claims the opposite.' },

        { id: 'm1-10', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Nadia', text: 'Since we moved the whole catalogue onto ___(6)___ services, visitors abroad can browse the archive at any hour.' },
            { who: 'Theo', text: 'That is the gain. The trouble is the comment board, where a single ___(7)___ account, ignoring every rule we set, keeps posting invented histories for our bronzes.' },
            { who: 'Nadia', text: 'The moderators removed three ___(8)___ links last week as well, all of them pointing at fake ticket pages.' },
            { who: 'Theo', text: 'And the regulars only ever answer one another, so the board is now an ___(9)___ where the same half-dozen opinions come back unchanged.' },
            { who: 'Nadia', text: 'Then we should redesign it. Threads that long make too great a ___(10)___ demand on a casual visitor anyway.' },
            { who: 'Theo', text: 'Agreed. A short comment box under each object would serve the collection better than a forum.' }
          ],
          stem: 'Choose the best option for gap (10).',
          options: ['cognitive', 'physical', 'financial', 'commercial'],
          answer: 0,
          why: '<em>Cognitive</em> belongs to thinking and understanding, and what a long thread taxes in a casual reader is attention. <em>Physical</em> is the standard antonym and the other two name costs the reader never pays.' }
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

        { id: 'm1-11', type: 'cloze', tag: 'part-passive', level: 'B2+',
          passage: '___(11)___ from a single quarry in the 1890s, the stone facade of the city gallery has weathered unevenly, and the trustees have argued for two decades about how to treat it. ___(12)___ the reserve collection in one climate-controlled store has already halved the annual repair bill. Had the roof been renewed at the same time, the upper rooms ___(13)___ open to visitors today. At no time in its history has the gallery ___(14)___ so many works to regional venues. Several of the watercolours now on tour are believed ___(15)___ within weeks of the artist\'s arrival.',
          blank: '(11)',
          stem: 'Choose the best option for gap (11).',
          options: ['Cutting', 'To cut', 'Cut', 'Having cut'],
          answer: 2,
          why: 'The stone did not cut anything; it was cut. A bare past participle opens a reduced passive clause, so <em>Cut from a single quarry</em> means <em>Because it had been cut from a single quarry</em>. The three active forms all make the facade the agent.' },

        { id: 'm1-12', type: 'cloze', tag: 'vform-subject-ing', level: 'B2+',
          passage: '___(11)___ from a single quarry in the 1890s, the stone facade of the city gallery has weathered unevenly, and the trustees have argued for two decades about how to treat it. ___(12)___ the reserve collection in one climate-controlled store has already halved the annual repair bill. Had the roof been renewed at the same time, the upper rooms ___(13)___ open to visitors today. At no time in its history has the gallery ___(14)___ so many works to regional venues. Several of the watercolours now on tour are believed ___(15)___ within weeks of the artist\'s arrival.',
          blank: '(12)',
          stem: 'Choose the best option for gap (12).',
          options: ['Storing', 'Stored', 'Having stored', 'Store'],
          answer: 0,
          why: 'The slot is the subject of <em>has halved</em>, and only the <em>-ing</em> form does the noun job in English. A bare verb cannot be a subject, and the two participles would need a human subject to attach to.' },

        { id: 'm1-13', type: 'cloze', tag: 'cond-mixed', level: 'C1',
          passage: '___(11)___ from a single quarry in the 1890s, the stone facade of the city gallery has weathered unevenly, and the trustees have argued for two decades about how to treat it. ___(12)___ the reserve collection in one climate-controlled store has already halved the annual repair bill. Had the roof been renewed at the same time, the upper rooms ___(13)___ open to visitors today. At no time in its history has the gallery ___(14)___ so many works to regional venues. Several of the watercolours now on tour are believed ___(15)___ within weeks of the artist\'s arrival.',
          blank: '(13)',
          stem: 'Choose the best option for gap (13).',
          options: ['will be', 'would be', 'were', 'would have been'],
          answer: 1,
          why: 'The <em>if</em>-less <em>Had</em> clause sets an unreal past, but <em>today</em> puts the result in the present, so the mixed pattern <em>would</em> + bare infinitive is required. <em>Would have been</em> would place the result in the past as well.' },

        { id: 'm1-14', type: 'cloze', tag: 'inv-negative', level: 'C1',
          passage: '___(11)___ from a single quarry in the 1890s, the stone facade of the city gallery has weathered unevenly, and the trustees have argued for two decades about how to treat it. ___(12)___ the reserve collection in one climate-controlled store has already halved the annual repair bill. Had the roof been renewed at the same time, the upper rooms ___(13)___ open to visitors today. At no time in its history has the gallery ___(14)___ so many works to regional venues. Several of the watercolours now on tour are believed ___(15)___ within weeks of the artist\'s arrival.',
          blank: '(14)',
          stem: 'Choose the best option for gap (14).',
          options: ['lending', 'to lend', 'lend', 'lent'],
          answer: 3,
          why: 'The negative adverbial <em>At no time</em> has pulled <em>has</em> in front of the subject, and the auxiliary <em>has</em> still needs its past participle. Once the inversion is done the rest of the verb phrase behaves normally.' },

        { id: 'm1-15', type: 'cloze', tag: 'rep-infinitive', level: 'C1',
          passage: '___(11)___ from a single quarry in the 1890s, the stone facade of the city gallery has weathered unevenly, and the trustees have argued for two decades about how to treat it. ___(12)___ the reserve collection in one climate-controlled store has already halved the annual repair bill. Had the roof been renewed at the same time, the upper rooms ___(13)___ open to visitors today. At no time in its history has the gallery ___(14)___ so many works to regional venues. Several of the watercolours now on tour are believed ___(15)___ within weeks of the artist\'s arrival.',
          blank: '(15)',
          stem: 'Choose the best option for gap (15).',
          options: ['to paint', 'to be painted', 'to have been painted', 'to have painted'],
          answer: 2,
          why: 'Two things must be marked at once: the watercolours were painted, not painting, and the painting happened long before the believing. That needs the perfect passive infinitive.' }
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
          given: 'The head inspector denied ignoring the complaints about the chilled cabinets.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The head inspector said that she had not ignored the complaints.',
            'The head inspector admitted that she had ignored the complaints.',
            'The head inspector is refusing to read the complaints just now.',
            'The head inspector will not ignore any complaint in future.'
          ],
          answer: 0,
          why: '<em>Deny</em> + <em>-ing</em> is a statement about the past: she says the ignoring never happened. Option 2 flips the polarity, option 3 changes the time to now and option 4 moves the whole claim into the future.' },

        { id: 'm1-17', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The transport authority meant to extend the tram line as far as the old market.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The transport authority succeeded in extending the line to the market.',
            'The transport authority is extending the line towards the market now.',
            'The transport authority intended to take the line as far as the market.',
            'The transport authority refused to take the line as far as the market.'
          ],
          answer: 2,
          why: '<em>Mean to do</em> reports an intention and says nothing about whether it was carried out. Option 1 misreads the pattern and asserts a success the original never claims.' },

        { id: 'm1-18', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The parks department tried watering the young limes at night to cut evaporation.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The parks department struggled to water the limes after dark.',
            'The parks department experimented with watering the limes after dark.',
            'The parks department will attempt to water the limes after dark.',
            'The parks department stopped watering the limes after dark.'
          ],
          answer: 1,
          why: '<em>Try</em> + <em>-ing</em> names a method being tested to see whether it works. Option 1 reads it as effort against difficulty, which is what <em>try to do</em> would mean.' },

        { id: 'm1-19', type: 'equiv', tag: 'part-active', level: 'B2+',
          given: 'The steadily rising cost of stewarding has forced several small clubs to drop fixtures.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'Stewarding costs have stopped climbing, so some clubs have added fixtures.',
            'Every small club has dropped fixtures because stewarding costs climbed.',
            'Clubs will drop fixtures next season if stewarding costs keep climbing.',
            'Stewarding costs that keep climbing have made some clubs drop fixtures.'
          ],
          answer: 3,
          why: 'The <em>-ing</em> premodifier says the costs are doing the rising, and that rise is still going on. Option 2 widens <em>several</em> to <em>every</em>, option 1 reverses the direction and option 3 turns a completed effect into a future condition.' },

        { id: 'm1-20', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'Some of the stewards reported seeing the barrier give way before the final whistle.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'A number of stewards said that they had seen the barrier fail.',
            'Every steward on duty said that the barrier had failed.',
            'Some stewards denied that the barrier had failed at all.',
            'Some stewards are watching the barrier for signs of failure.'
          ],
          answer: 0,
          why: '<em>Report</em> + <em>-ing</em> reports what the speakers say they witnessed. Option 2 escalates <em>some</em> to <em>every</em>, option 3 flips the polarity and option 4 changes a past sighting into a present activity.' }
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
          stem: 'The council removed the parking bays. Bus reliability improved.',
          options: [
            'An improvement in bus reliability caused the removal of the parking bays.',
            'The council\'s removal of the parking bays improved bus reliability.',
            'The council\'s removed of the parking bays improved bus reliability.',
            'The council\'s removal of the parking bays doubled the number of passengers.'
          ],
          answer: 1,
          why: 'Keeping the agent as a possessive and turning <em>removed</em> into <em>removal</em> puts the doer in the subject slot. Option 1 reverses the arrow, option 3 never nominalizes the verb and option 4 invents a figure the base sentences never gave.' },

        { id: 'm1-22', type: 'choose', tag: 'nom-direction', level: 'B2+',
          stem: 'The gallery extended its opening hours. Evening attendance rose.',
          options: [
            'The extension of the opening hours led to a rise in evening attendance.',
            'A rise in evening attendance led to the extension of the opening hours.',
            'The opening hours\' extension of the gallery led to a rise in attendance.',
            'The extended of the opening hours led to a rise in evening attendance.'
          ],
          answer: 0,
          why: 'Both actions become nouns and one forward-pointing verb, <em>led to</em>, joins them cause first. Option 2 points the arrow backwards, option 3 swaps the agent and the object, and option 4 leaves the verb unnominalized.' },

        { id: 'm1-23', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'Inspectors tightened the chilling checks. Food poisoning cases fell.',
          options: [
            'The tightening of the chilling checks resulted from a fall in poisoning cases.',
            'A fall in poisoning cases resulted from the tightened of the chilling checks.',
            'A fall in poisoning cases resulted from the tightening of the chilling checks.',
            'A fall in poisoning cases resulted from the closure of the worst kitchens.'
          ],
          answer: 2,
          why: '<em>Result from</em> points backwards, so the outcome must stand first and the cause must follow it. Option 1 puts the cause in the outcome slot, option 2 fails to nominalize and option 4 supplies a cause the base sentences never mention.' },

        { id: 'm1-24', type: 'choose', tag: 'nom-agent', level: 'C1',
          stem: 'The club replaced the artificial pitch. Injury rates dropped.',
          options: [
            'The artificial pitch\'s replacement of the club produced a drop in injuries.',
            'A drop in injury rates produced the club\'s replacement of the artificial pitch.',
            'The club\'s replacement of the artificial pitch ended injuries at the ground.',
            'The club\'s replacement of the artificial pitch produced a drop in injuries.'
          ],
          answer: 3,
          why: 'The club is the agent and the pitch is what it replaced, so the possessive must sit on the club. Option 1 swaps the two, option 2 reverses the arrow and option 3 escalates a drop into an end.' },

        { id: 'm1-25', type: 'choose', tag: 'nom-structure', level: 'C1',
          stem: 'Volunteers planted street trees along the avenue. Summer temperatures fell.',
          options: [
            'A fall in summer temperatures caused the planting of trees along the avenue.',
            'The planting of street trees along the avenue caused a fall in temperatures.',
            'The planted of street trees along the avenue caused a fall in temperatures.',
            'The street trees\' planting of the volunteers caused a fall in temperatures.'
          ],
          answer: 1,
          why: 'Dropping the agent and nominalizing both actions leaves one clause with one main verb, <em>caused</em>, running from cause to effect. Option 1 turns the arrow round, option 3 uses a past participle as a noun and option 4 makes the trees plant the volunteers.' }
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
          stem: '<div class="orderblock"><p>A. The transport committee dropped the shuttle at the end of the trial.</p><p>B. Passengers blamed these delays on the narrow streets around the market.</p><p>C. Last spring, the city was trialling a free shuttle between the two railway stations.</p><p>D. While the drivers were still learning the route, the timetable slipped by up to twenty minutes.</p></div>',
          options: ['C-D-B-A', 'C-B-D-A', 'A-C-D-B', 'D-C-B-A'],
          answer: 0,
          why: 'C sets the background with a past continuous and introduces the shuttle, D supplies the delays, B refers back to them with <em>these delays</em>, and A closes with the decision. Nothing can precede C, because every other sentence assumes the shuttle already exists.' },

        { id: 'm1-27', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: '<div class="orderblock"><p>A. The gallery reopened its print room after a two-year refurbishment.</p><p>B. The trustees now want an online booking form before the autumn exhibition.</p><p>C. As a result, readers were turned away on three separate Saturdays.</p><p>D. Within a month, visitor numbers had outgrown the small booking system.</p></div>',
          options: ['A-C-D-B', 'A-D-C-B', 'D-A-C-B', 'A-D-B-C'],
          answer: 1,
          why: '<em>Within a month</em> in D counts from the reopening in A, <em>As a result</em> in C needs the overloaded system in D in front of it, and B is the closing demand. Any order that puts C before D leaves <em>As a result</em> with no cause.' },

        { id: 'm1-28', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: '<div class="orderblock"><p>A. This closure cost the club almost half of its gate income.</p><p>B. Last season, the athletics club was hosting its meetings on a borrowed track.</p><p>C. While the groundstaff were relaying the surface, the track was closed for six weeks.</p><p>D. The committee has therefore applied for a grant to build a track of its own.</p></div>',
          options: ['C-B-A-D', 'B-A-C-D', 'B-C-A-D', 'A-C-B-D'],
          answer: 2,
          why: 'B opens with the past continuous background, C explains why the borrowed track was unavailable, A points back with <em>This closure</em>, and D draws the consequence with <em>therefore</em>. A cannot precede C, because the closure has not yet been mentioned.' },

        { id: 'm1-29', type: 'choose', tag: 'coh-order', level: 'C1',
          stem: '<div class="orderblock"><p>A. Owners of the lowest-rated shops complained that one bad visit could ruin a business.</p><p>B. Consumer groups are now demanding that the scores be updated every quarter.</p><p>C. Because of this pressure, the inspectors agreed to a free re-visit within a fortnight.</p><p>D. The city\'s food inspectors began publishing hygiene scores on shop windows last year.</p></div>',
          options: ['D-C-A-B', 'A-D-C-B', 'D-A-B-C', 'D-A-C-B'],
          answer: 3,
          why: 'D introduces the scheme, A supplies the complaints, C names them <em>this pressure</em> and answers them, and B closes with a fresh demand. C cannot come before A, since the pressure it refers to is the complaining.' },

        { id: 'm1-30', type: 'choose', tag: 'coh-closing', level: 'C1',
          stem: '<div class="orderblock"><p>A. Half of them died in the first dry summer, having had no watering plan.</p><p>B. Residents are asking that future schemes include the cost of care from the start.</p><p>C. The borough planted four hundred young limes along the main avenue.</p><p>D. This loss forced the parks department to buy a tanker and hire two staff.</p></div>',
          options: ['C-D-A-B', 'C-A-D-B', 'A-C-D-B', 'C-A-B-D'],
          answer: 1,
          why: 'C introduces the trees, A kills half of them, D refers back with <em>This loss</em>, and B is the closing demand. D cannot stand before A, because there is no loss until the trees have died.' }
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
          words: ['The catering firm avoided', 'to declare the sesame seeds', 'in three of its sandwiches', 'until the inspectors asked directly.'],
          answer: 1,
          fix: 'declaring the sesame seeds',
          why: '<em>Avoid</em> belongs to the closed group of verbs that take only the <em>-ing</em> form and never <em>to</em>. Nothing else in the sentence is at fault.' },

        { id: 'm1-32', type: 'spot', tag: 'tense-perfect-simple', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The gallery has replaced', 'every one of its skylights', 'with laminated glass', 'during the refurbishment of 2019.'],
          answer: 0,
          fix: 'The gallery replaced',
          why: 'A closed past time phrase such as <em>during the refurbishment of 2019</em> shuts the window on the event, and the present perfect cannot live inside a finished window. The past simple is required.' },

        { id: 'm1-33', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Checking the chilled cabinets', 'twice a day', 'are now compulsory', 'in every market hall.'],
          answer: 2,
          fix: 'is now compulsory',
          why: 'The subject is the <em>-ing</em> noun <em>Checking</em>, which is singular however many plural words trail behind it. The plural <em>cabinets</em> is inside the subject, not the subject itself.' },

        { id: 'm1-34', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The parks committee', 'rejected the tender', 'on the grounds that', 'prune the avenue limes costs too much.'],
          answer: 3,
          fix: 'pruning the avenue limes costs too much',
          why: 'A bare verb cannot be the subject of a clause in English. Only the <em>-ing</em> form does the noun job, so the that-clause needs <em>pruning</em>.' },

        { id: 'm1-35', type: 'spot', tag: 'part-fragment', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The closure of the riverside car park', 'producing a sharp rise', 'in bus use', 'across the whole borough.'],
          answer: 1,
          fix: 'produced a sharp rise',
          why: 'A participle is not a finite verb, so as it stands the sentence has a subject and no main verb at all. Replacing <em>producing</em> with <em>produced</em> gives the clause its verb.' },

        { id: 'm1-36', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The committee agreed that the club should', 'refund the ticket holders', 'and rescheduling the fixture', 'before the end of the season.'],
          answer: 2,
          fix: 'and reschedule the fixture',
          why: 'Both verbs hang from the same modal <em>should</em>, so both must take the same bare form. Once a list is opened with one shape, every later item has to repeat it.' },

        { id: 'm1-37', type: 'spot', tag: 'part-edging-adj', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The volunteers were disappointing', 'by the number of young limes', 'that had failed', 'to survive the dry summer.'],
          answer: 0,
          fix: 'The volunteers were disappointed',
          why: 'The <em>-ing</em> adjective names what causes the feeling; the <em>-ed</em> adjective names who receives it. The volunteers felt it, so they were <em>disappointed</em>.' },

        { id: 'm1-38', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The long queue at the turnstiles', 'before the cup tie', 'caused a delay', 'that was deeply frustrated for everyone.'],
          answer: 3,
          fix: 'that was deeply frustrating for everyone',
          why: 'The delay produced the feeling rather than having one, so it takes the <em>-ing</em> adjective. Only people and animals can be <em>frustrated</em>.' },

        { id: 'm1-39', type: 'spot', tag: 'vform-gerund-verb', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The senior inspector recommended', 'to close the kitchen', 'until the drainage', 'had been replaced.'],
          answer: 1,
          fix: 'closing the kitchen',
          why: '<em>Recommend</em>, like <em>suggest</em>, allows an <em>-ing</em> form or a that-clause but never <em>to</em> plus an infinitive. This is the commonest verb-pattern slip in the section.' },

        { id: 'm1-40', type: 'spot', tag: 'nom-suffix', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The widen of the pavement', 'outside the museum', 'has reduced the number', 'of pedestrian accidents.'],
          answer: 0,
          fix: 'The widening of the pavement',
          why: 'The slot after <em>The</em> and before <em>of</em> is a noun slot, and <em>widen</em> is a verb. The verb has no <em>-tion</em> or <em>-ment</em> form here, so the <em>-ing</em> noun does the work.' }
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
          passage: 'From the first of April, drivers entering the walled centre of Verlen between seven in the morning and seven in the evening pay a daily charge of four euros. The council introduced the scheme after traffic counts showed that almost a third of the vehicles inside the walls were passing straight through on their way somewhere else. Officials argue that the medieval street plan cannot be widened, that buses were losing eleven minutes on every circuit, and that the revenue will pay for a new ring of park-and-ride sites.\n\nShopkeepers inside the walls are not persuaded. They point out that the charge falls on customers rather than on through traffic, and that the nearest park-and-ride site will not open for two years. A residents\' association has raised a different objection: households on the four streets just outside the boundary now find their kerbs filled with parked cars whose drivers walk the last two hundred metres. The council has promised a review after twelve months and has said it will consider a discount for residents, though it has not yet said who would pay for it.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The difficulty of widening a medieval street plan.',
            'A charge on traffic entering a historic centre and the objections to it.',
            'A council plan to build a new ring of park-and-ride sites.',
            'The failure of a city charge to raise any revenue at all.'
          ],
          answer: 1,
          why: 'The first paragraph sets out the charge and the reasons for it; the second gives the shopkeepers and the residents their objections. Option 1 is one supporting clause, option 3 is a detail inside the official case, and option 4 contradicts the sentence about revenue.' },

        { id: 'm1-42', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'From the first of April, drivers entering the walled centre of Verlen between seven in the morning and seven in the evening pay a daily charge of four euros. The council introduced the scheme after traffic counts showed that almost a third of the vehicles inside the walls were passing straight through on their way somewhere else. Officials argue that the medieval street plan cannot be widened, that buses were losing eleven minutes on every circuit, and that the revenue will pay for a new ring of park-and-ride sites.\n\nShopkeepers inside the walls are not persuaded. They point out that the charge falls on customers rather than on through traffic, and that the nearest park-and-ride site will not open for two years. A residents\' association has raised a different objection: households on the four streets just outside the boundary now find their kerbs filled with parked cars whose drivers walk the last two hundred metres. The council has promised a review after twelve months and has said it will consider a discount for residents, though it has not yet said who would pay for it.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, what did the traffic counts show?',
          options: [
            'Almost a third of the vehicles inside the walls were merely passing through.',
            'Almost a third of the vehicles inside the walls belonged to local shopkeepers.',
            'Traffic inside the walls had doubled over the previous twelve months.',
            'Most drivers entering the walls were heading for the park-and-ride sites.'
          ],
          answer: 0,
          why: 'The clause is explicit: the counts showed that almost a third of the vehicles were <em>passing straight through on their way somewhere else</em>. The other three figures appear nowhere in the text.' },

        { id: 'm1-43', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'From the first of April, drivers entering the walled centre of Verlen between seven in the morning and seven in the evening pay a daily charge of four euros. The council introduced the scheme after traffic counts showed that almost a third of the vehicles inside the walls were passing straight through on their way somewhere else. Officials argue that the medieval street plan cannot be widened, that buses were losing eleven minutes on every circuit, and that the revenue will pay for a new ring of park-and-ride sites.\n\nShopkeepers inside the walls are not persuaded. They point out that the charge falls on customers rather than on through traffic, and that the nearest park-and-ride site will not open for two years. A residents\' association has raised a different objection: households on the four streets just outside the boundary now find their kerbs filled with parked cars whose drivers walk the last two hundred metres. The council has promised a review after twelve months and has said it will consider a discount for residents, though it has not yet said who would pay for it.',
          source: 'Adapted for classroom use.',
          stem: 'What effect on the streets just outside the boundary does the residents\' association describe?',
          options: [
            'Bus journeys through those streets have become eleven minutes slower.',
            'Shops on those streets have lost most of their regular customers.',
            'Their kerbs are now filled with cars left by drivers walking the last stretch.',
            'Those streets have been closed to all traffic between seven and seven.'
          ],
          answer: 2,
          why: 'The clause after the colon states it directly: households on the four streets outside the boundary find their kerbs filled with parked cars whose drivers walk the last two hundred metres. The eleven minutes belong to the officials\' case, not to those streets.' },

        { id: 'm1-44', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'From the first of April, drivers entering the walled centre of Verlen between seven in the morning and seven in the evening pay a daily charge of four euros. The council introduced the scheme after traffic counts showed that almost a third of the vehicles inside the walls were passing straight through on their way somewhere else. Officials argue that the medieval street plan cannot be widened, that buses were losing eleven minutes on every circuit, and that the revenue will pay for a new ring of park-and-ride sites.\n\nShopkeepers inside the walls are not persuaded. They point out that the charge falls on customers rather than on through traffic, and that the nearest park-and-ride site will not open for two years. A residents\' association has raised a different objection: households on the four streets just outside the boundary now find their kerbs filled with parked cars whose drivers walk the last two hundred metres. The council has promised a review after twelve months and has said it will consider a discount for residents, though it has not yet said who would pay for it.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author\'s main purpose in the second paragraph?',
          options: [
            'To set out the objections that have been raised against the scheme.',
            'To explain the technology used to collect the daily charge.',
            'To recommend the scheme to other cities with medieval centres.',
            'To describe how the walls and the street plan were first built.'
          ],
          answer: 0,
          why: 'The paragraph opens with <em>Shopkeepers are not persuaded</em> and then adds a second, different objection from the residents. Nothing in it explains collection, praises the scheme or looks back at the history of the walls.' },

        { id: 'm1-45', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'From the first of April, drivers entering the walled centre of Verlen between seven in the morning and seven in the evening pay a daily charge of four euros. The council introduced the scheme after traffic counts showed that almost a third of the vehicles inside the walls were passing straight through on their way somewhere else. Officials argue that the medieval street plan cannot be widened, that buses were losing eleven minutes on every circuit, and that the revenue will pay for a new ring of park-and-ride sites.\n\nShopkeepers inside the walls are not persuaded. They point out that the charge falls on customers rather than on through traffic, and that the nearest park-and-ride site will not open for two years. A residents\' association has raised a different objection: households on the four streets just outside the boundary now find their kerbs filled with parked cars whose drivers walk the last two hundred metres. The council has promised a review after twelve months and has said it will consider a discount for residents, though it has not yet said who would pay for it.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action does the council say it will consider?',
          options: [
            'Raising the daily charge once the review has been completed.',
            'Abandoning the scheme if the shopkeepers object a second time.',
            'Opening the park-and-ride sites before the charge is introduced.',
            'Offering residents a discount, with the question of funding still open.'
          ],
          answer: 3,
          why: 'The last sentence promises a review and says the council will consider a resident discount, adding that it has not yet said who would pay for it. The other three actions are never mentioned.' }
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
          passage: 'Since October the county has switched off nine thousand street lights between midnight and half past five, leaving them burning only along main roads, at junctions and outside hospitals. The stated reason is cost: the lighting bill had risen by almost half in three years, and the county calculated that part-night operation would save enough to keep two libraries open. A second argument is ecological. Ecologists advising the county note that moths and bats feed more freely in darkness, and that a continuous line of light along a hedgerow can break the corridor they travel along.\n\nThe objections came quickly. A group of night-shift workers told the county that the walk from the bus stop to the front door is the part of the journey they fear, and that it falls precisely inside the unlit hours. The police have been careful. They report no measurable change in recorded crime, but note that the sense of safety among residents has fallen sharply in the villages where every light goes out. Insurers have asked whether claims for collisions with parked cars will rise on unlit lanes.\n\nThe county has since agreed to keep the lights burning along the four routes used most heavily by shift workers, and to fit dimmable lamps, rather than switches, when the next replacement programme begins.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The rising cost of running street lighting in rural counties.',
            'The effect of artificial light on moths, bats and hedgerows.',
            'A switch to part-night street lighting and the concerns it has raised.',
            'A decision to abandon part-night lighting after protests from workers.'
          ],
          answer: 2,
          why: 'The first paragraph gives the measure and its two reasons; the second gives the objections; the third gives the partial retreat. Options 1 and 2 are single reasons, and option 4 overstates a retreat the passage describes as partial.' },

        { id: 'm1-47', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'Since October the county has switched off nine thousand street lights between midnight and half past five, leaving them burning only along main roads, at junctions and outside hospitals. The stated reason is cost: the lighting bill had risen by almost half in three years, and the county calculated that part-night operation would save enough to keep two libraries open. A second argument is ecological. Ecologists advising the county note that moths and bats feed more freely in darkness, and that a continuous line of light along a hedgerow can break the corridor they travel along.\n\nThe objections came quickly. A group of night-shift workers told the county that the walk from the bus stop to the front door is the part of the journey they fear, and that it falls precisely inside the unlit hours. The police have been careful. They report no measurable change in recorded crime, but note that the sense of safety among residents has fallen sharply in the villages where every light goes out. Insurers have asked whether claims for collisions with parked cars will rise on unlit lanes.\n\nThe county has since agreed to keep the lights burning along the four routes used most heavily by shift workers, and to fit dimmable lamps, rather than switches, when the next replacement programme begins.',
          source: 'Adapted for classroom use.',
          stem: 'When the switch-off began in October, which lights were left burning all night?',
          options: [
            'Those on main roads, at junctions and outside hospitals.',
            'Those in the villages where residents have complained most.',
            'Those on the four routes used most heavily by shift workers.',
            'Those that have already been fitted with dimmable lamps.'
          ],
          answer: 0,
          why: 'The first sentence names the October exceptions exactly: main roads, junctions and hospitals. The four shift-worker routes were added later, by the agreement described in the closing paragraph.' },

        { id: 'm1-48', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Since October the county has switched off nine thousand street lights between midnight and half past five, leaving them burning only along main roads, at junctions and outside hospitals. The stated reason is cost: the lighting bill had risen by almost half in three years, and the county calculated that part-night operation would save enough to keep two libraries open. A second argument is ecological. Ecologists advising the county note that moths and bats feed more freely in darkness, and that a continuous line of light along a hedgerow can break the corridor they travel along.\n\nThe objections came quickly. A group of night-shift workers told the county that the walk from the bus stop to the front door is the part of the journey they fear, and that it falls precisely inside the unlit hours. The police have been careful. They report no measurable change in recorded crime, but note that the sense of safety among residents has fallen sharply in the villages where every light goes out. Insurers have asked whether claims for collisions with parked cars will rise on unlit lanes.\n\nThe county has since agreed to keep the lights burning along the four routes used most heavily by shift workers, and to fit dimmable lamps, rather than switches, when the next replacement programme begins.',
          source: 'Adapted for classroom use.',
          stem: 'According to the ecologists, what effect can a continuous line of light have?',
          options: [
            'It draws moths away from hedgerows and towards the main roads.',
            'It makes bats abandon the county altogether within a single season.',
            'It raises the lighting bill of every hedgerow parish by almost half.',
            'It breaks the corridor along which moths and bats move and feed.'
          ],
          answer: 3,
          why: 'The clause says a continuous line of light along a hedgerow <em>can break the corridor they travel along</em>. Option 2 escalates that into abandonment, and options 1 and 3 attribute claims the ecologists never make.' },

        { id: 'm1-49', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'Since October the county has switched off nine thousand street lights between midnight and half past five, leaving them burning only along main roads, at junctions and outside hospitals. The stated reason is cost: the lighting bill had risen by almost half in three years, and the county calculated that part-night operation would save enough to keep two libraries open. A second argument is ecological. Ecologists advising the county note that moths and bats feed more freely in darkness, and that a continuous line of light along a hedgerow can break the corridor they travel along.\n\nThe objections came quickly. A group of night-shift workers told the county that the walk from the bus stop to the front door is the part of the journey they fear, and that it falls precisely inside the unlit hours. The police have been careful. They report no measurable change in recorded crime, but note that the sense of safety among residents has fallen sharply in the villages where every light goes out. Insurers have asked whether claims for collisions with parked cars will rise on unlit lanes.\n\nThe county has since agreed to keep the lights burning along the four routes used most heavily by shift workers, and to fit dimmable lamps, rather than switches, when the next replacement programme begins.',
          source: 'Adapted for classroom use.',
          stem: 'What does the police statement suggest about the effect of the switch-off?',
          options: [
            'Recorded crime has climbed steeply in the unlit villages since October.',
            'How safe people feel has fallen even though recorded crime has not moved.',
            'Residents of the unlit villages now feel considerably safer than before.',
            'The police have asked the county to switch every light back on at once.'
          ],
          answer: 1,
          why: 'The two halves of the police sentence are held apart by <em>but</em>: no measurable change in recorded crime, yet a sharp fall in the sense of safety. Option 1 escalates, option 3 reverses and option 4 is absent from the text.' },

        { id: 'm1-50', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'Since October the county has switched off nine thousand street lights between midnight and half past five, leaving them burning only along main roads, at junctions and outside hospitals. The stated reason is cost: the lighting bill had risen by almost half in three years, and the county calculated that part-night operation would save enough to keep two libraries open. A second argument is ecological. Ecologists advising the county note that moths and bats feed more freely in darkness, and that a continuous line of light along a hedgerow can break the corridor they travel along.\n\nThe objections came quickly. A group of night-shift workers told the county that the walk from the bus stop to the front door is the part of the journey they fear, and that it falls precisely inside the unlit hours. The police have been careful. They report no measurable change in recorded crime, but note that the sense of safety among residents has fallen sharply in the villages where every light goes out. Insurers have asked whether claims for collisions with parked cars will rise on unlit lanes.\n\nThe county has since agreed to keep the lights burning along the four routes used most heavily by shift workers, and to fit dimmable lamps, rather than switches, when the next replacement programme begins.',
          source: 'Adapted for classroom use.',
          stem: 'What has the county agreed to do in response to the objections?',
          options: [
            'To restore all nine thousand lights from midnight until half past five.',
            'To close the two libraries in order to pay the rising lighting bill.',
            'To light four heavily used routes and fit dimmable lamps in future.',
            'To ask insurers to meet the cost of collisions on the unlit lanes.'
          ],
          answer: 2,
          why: 'The closing paragraph gives both halves of the agreement: keep four shift-worker routes lit, and fit dimmable lamps at the next replacement. Option 1 escalates a partial retreat into a full one, and options 2 and 4 reverse claims the passage makes about libraries and insurers.' }
      ]
    }
  ]
});
