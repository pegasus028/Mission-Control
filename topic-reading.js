/* ===========================================================================
   SYSTEM 08 - Reading Comprehension
   Three levels. The questions Part C asks, in the order it asks them: what a
   passage is about, what it says in one place, what a word means here, which
   side drew which arrow, what a paragraph is doing, what follows, and what
   somebody thinks should happen next.
   =========================================================================== */

var T8 = {
  id: 't8', n: 8, code: 'System 08', art: 'scope',
  name: 'Reading Comprehension',
  cefr: 'B2–C1',
  blurb: 'Ten marks of the final paper, in passages that all have the same shape: a measure, the objections to it, and what somebody thinks should happen next.',
  levels: []
};


/* ---------------------------------------------------------------- LEVEL 1 */
T8.levels.push({
  id: 't8l1', n: 1, name: 'Finding the answer', cefr: 'B2',
  blurb: 'Three question types whose answers are visible on the page. If you cannot point at the line that proves your answer, it is not your answer.',
  subs: [

    {
      id: 't8l1s1', name: 'Main idea', cefr: 'B2',
      theory: {
        key: 'The main idea has to cover the whole passage: one paragraph of it is not enough, and anything the text never claims is not it at all.',
        body: [
          'A main-idea question is not asking what the passage is about in one word. It is asking which single sentence would survive if the rest were thrown away. Write that sentence yourself, in the margin, <strong>before</strong> you look at the options. Students who read the options first end up choosing the one that sounds most like the passage rather than the one that covers it.',
          'Then label the four options. Almost every main-idea distractor is one of three things. <strong>Too narrow</strong>: true, but it is one detail or one paragraph. <strong>Too broad</strong>: it talks about the subject in general where the passage talks about one measure in one place. <strong>Not in the text</strong>: a reasonable statement about the world that the passage never makes. Write N, B or X beside each one and the choice usually makes itself.',
          'The correct option can nearly always be matched against the first sentence and the last sentence together. Exam passages are built that way. The opening announces the measure or the finding, the ending says what is still unsettled, and the main idea is the two joined.',
          'One warning about the too-narrow trap. It is dangerous precisely because you can point at it in the text, and pointing feels like proof. Pointing proves the option is <em>true</em>. The question asks whether it is the <em>point</em>.'
        ],
        simple: [
          'The main idea covers the whole passage, not one part of it. Before you read the options, say the passage in one sentence of your own.',
          'Then check each option. Is it too small, because it is only one detail? Too big, because it is about the whole subject and not this text? Or not in the passage at all? Mark it N, B or X.',
          'The right answer usually matches the first sentence and the last sentence put together.'
        ],
        examples: [
          { s: 'Passage: a council builds a sea wall; fishermen and ecologists object.', g: 'main idea: a defence scheme and the objections to it, the two halves joined.' },
          { s: '<s>The harbour road flooded twice in ten years.</s>', g: 'too narrow: true, but it is one supporting detail inside one sentence.' },
          { s: '<s>Concrete is a poor material for coastal engineering.</s>', g: 'too broad: the passage is about one wall, not about coastal engineering.' },
          { s: '<s>The fishing industry is in decline along this coast.</s>', g: 'not in the text: plausible in the world, never claimed in the passage.' }
        ]
      },
      items: [
        { id: 't8l1s1-1', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'The town council has approved a new sea wall along the eastern shore, raising the existing barrier by two metres and adding a stepped concrete apron to absorb wave energy. Engineers say the work will protect around 900 homes from the storm surges that flooded the harbour road twice in the last decade. Not everyone is convinced. Local fishermen argue that the higher wall will cut off the slipway they have used for generations, and coastal ecologists warn that hard defences push wave energy sideways, wearing away the beaches on either side. Some residents would prefer salt marsh restoration, which absorbs water more gently but takes far longer to establish.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The damage caused by two storm surges in the harbour.',
            'A proposed sea wall and the objections raised against it.',
            'The advantages of salt marsh over concrete barriers.',
            'The decline of fishing along the eastern shore.'
          ],
          answer: 1,
          why: 'The passage opens with the approved wall and closes with what critics would prefer, so the main idea is the scheme together with its objections. Option 1 is one supporting detail, option 3 is the last sentence only, and option 4 is never claimed.' },

        { id: 't8l1s1-2', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'A regional museum in northern England has agreed to return a collection of carved stone figures to the community they were taken from in the nineteenth century. The transfer will take place over three years, and the museum will keep high-resolution digital copies for study and teaching. Curators describe the decision as overdue. Others in the sector are uneasy. Some argue that once one museum returns an object, every later claim becomes harder to refuse, and that smaller institutions lack the staff to assess each request properly. A second worry is practical: the receiving community has asked for help building a climate-controlled store, and nobody has yet said who will pay for it.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The cost of building a climate-controlled store.',
            'Why collectors removed the stone figures in the first place.',
            'A museum decision to return artefacts and the concerns it raises.',
            'The value of digital copies for study and teaching.'
          ],
          answer: 2,
          why: 'First sentence: the museum has agreed to return the figures. Last sentences: others in the sector are uneasy, for two named reasons. Joined, that is option 3. Options 1 and 4 are single details and option 2 is not in the text.' },

        { id: 't8l1s1-3', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'After a twelve-month trial, a mid-sized software company has made the four-day week permanent for all of its staff, with no reduction in pay. Managers report that output held steady and that fewer people left the company during the trial than in any previous year. The result has been read as proof that shorter hours cost nothing. That reading is too quick. Employees told researchers that meetings were cut aggressively and that the remaining four days felt considerably more intense. The company also works in a sector where output can be measured in completed tasks; a hospital ward or a bus depot cannot simply compress its week in the same way.',
          source: 'Written for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'A successful four-day week and the limits of the evidence for it.',
            'The number of employees who left during the trial year.',
            'The reasons hospital wards are difficult places to work.',
            'Proof that shorter hours raise output in every industry.'
          ],
          answer: 0,
          why: 'The passage states the result and then says plainly that the usual reading of it <em>is too quick</em>. Option 4 is the reading the passage rejects, option 2 is one figure, and option 3 borrows a phrase from the final sentence.' },

        { id: 't8l1s1-4', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'The city has committed to covering a quarter of its area with tree canopy by 2040, up from about sixteen per cent today. The stated reason is heat: streets shaded by mature trees can be several degrees cooler than bare ones on a summer afternoon, and the hottest districts are also the poorest. Planting is the easy part. Foresters point out that a young tree needs watering for at least three summers, and that budgets are usually written for planting days rather than for the decade of care that follows. Residents in two districts have also objected that large street trees lift pavements and block light from ground-floor windows.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The difficulty of watering young trees in their first summers.',
            'Why the poorest districts of the city are also the hottest.',
            'A canopy target and the practical difficulties of reaching it.',
            'A campaign by residents to remove large street trees.'
          ],
          answer: 2,
          why: 'The target is announced in the first sentence and <em>planting is the easy part</em> turns the passage to the difficulties. Option 1 is one of those difficulties, not the point; option 4 exaggerates an objection into a campaign.' },

        { id: 't8l1s1-5', type: 'read', tag: 'read-main', level: 'B2+',
          passage: 'Night trains are running again between several European capitals after two decades of decline. Operators have refitted old sleeping cars and added services that leave in the evening and arrive in time for a morning meeting, which removes both a hotel bill and a flight. Passenger numbers on the new routes have risen every year since they opened. The economics remain awkward. A sleeping car carries far fewer passengers than a seated coach of the same length, and the train occupies a track all night for that small number. Operators also pay access charges in every country they cross, and a single delay at a border can undo an entire timetable.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The cost of refitting an old sleeping car for service.',
            'The return of European night trains and the economics that constrain it.',
            'The advantages of flying over travelling by train between capitals.',
            'Border delays as the greatest problem facing European railways.'
          ],
          answer: 1,
          why: 'The passage names a revival and then says <em>the economics remain awkward</em>. Option 4 takes one clause from the last sentence and inflates it into a claim about all railways, which is the too-broad trap.' }
      ]
    },

    {
      id: 't8l1s2', name: 'A specific detail', cefr: 'B2',
      theory: {
        key: 'A detail question has one home in the text: find it, put your finger on it, and refuse any option you cannot point at.',
        body: [
          'Detail items are the cheapest marks in the paper and among the most often lost, because they are answered from memory. You read the passage, you formed an impression, and the impression is close enough to three of the four options to make all of them feel possible.',
          'The discipline is mechanical. Take the rarest noun in the question, the one least likely to appear elsewhere, and scan back for it or for an obvious synonym. The answer sits within a line or two of it. If you cannot find the place, you have not yet earned an answer.',
          'Distractors here are built from three materials: statements that are true in the world but absent from the passage, the right fact attached to the wrong party, and a reversal of the actual sentence. The wrong-party version catches strong readers. The passage says the bus operators objected on one ground and the parents on another, and the option quietly swaps them.',
          'Watch the small words whenever a number is involved. <em>More than half</em> and <em>about a third</em> are different answers, and the passage will contain only one of them.'
        ],
        simple: [
          'A detail question has one answer in one place in the text. Find that place before you choose.',
          'Take the least common noun from the question, find it in the passage, and read the line around it.',
          'Wrong options are often true in real life but not written in the passage, or they give the right fact to the wrong person. If you cannot point at the line, do not choose it.'
        ],
        examples: [
          { s: 'Question: <b>who</b> objected because of other contracts?', g: 'scan for "contracts", not for "objected": the rarer word is faster to find.' },
          { s: 'Text: <b>bus operators</b>, who run school services between other contracts.', g: 'the line you point at, and the answer must restate it.' },
          { s: '<s>Parents said a nine o\'clock start was hard to fit around other work.</s>', g: 'right fact, wrong party: the commonest detail trap in a two-sided text.' },
          { s: '<s>Late arrivals fell by about a third.</s>', g: 'the text said more than half, so the number does not match.' }
        ]
      },
      items: [
        { id: 't8l1s2-1', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'Since the rules changed in 2022, farmers in the region may no longer give antibiotics to healthy animals simply to prevent disease; a veterinary surgeon must diagnose an infection first. Sales of farm antibiotics fell by about a third in the first two years. Veterinary bodies call the fall encouraging. Farmers point out that the cost of a veterinary visit falls on them, and that on large units an infection can spread through a shed before an appointment is available. A further complaint is that imported meat is not held to the same standard, so producers who follow the stricter rules compete with those who do not.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, what must happen before a farm animal is given antibiotics under the 2022 rules?',
          options: [
            'The farmer must record the treatment in a national database.',
            'The animal must be separated from the rest of the herd.',
            'A veterinary surgeon must diagnose an infection.',
            'Sales of farm antibiotics must be shown to have fallen.'
          ],
          answer: 2,
          why: 'Point at the clause: <em>a veterinary surgeon must diagnose an infection first</em>. Options 1 and 2 are reasonable farm practice that this passage never mentions, which is exactly what absent-from-the-text distractors are made of.' },

        { id: 't8l1s2-2', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'Since the rules changed in 2022, farmers in the region may no longer give antibiotics to healthy animals simply to prevent disease; a veterinary surgeon must diagnose an infection first. Sales of farm antibiotics fell by about a third in the first two years. Veterinary bodies call the fall encouraging. Farmers point out that the cost of a veterinary visit falls on them, and that on large units an infection can spread through a shed before an appointment is available. A further complaint is that imported meat is not held to the same standard, so producers who follow the stricter rules compete with those who do not.',
          source: 'Adapted for classroom use.',
          stem: 'What do farmers say about the cost of a veterinary visit?',
          options: [
            'It is met by the veterinary bodies that supported the rules.',
            'It is refunded once an infection has been confirmed.',
            'It has risen by about a third since 2022.',
            'It falls on the farmers themselves.'
          ],
          answer: 3,
          why: 'The text says the cost <em>falls on them</em>. Option 3 reuses the one third figure, which the passage attaches to the fall in sales, not to costs: numbers in a passage belong to whatever they were printed beside.' },

        { id: 't8l1s2-3', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'A secondary school on the outskirts of the city moved its first lesson from eight o\'clock to nine, and kept the change for a full academic year. Attendance in the first period rose, and the number of students recorded as late fell by more than half. Staff also noticed that the corridors were quieter before lessons. The change was not universally popular. Parents who begin work at eight said they now leave children unsupervised at home, and the later finish clashed with sports fixtures against schools that had not moved. Bus operators, who run school services between other contracts, said a nine o\'clock start was harder to fit into their day.',
          source: 'Written for classroom use.',
          stem: 'According to the passage, what happened to the number of students recorded as late?',
          options: [
            'It fell by more than half.',
            'It rose slightly in the first period.',
            'It stayed level across the academic year.',
            'It fell by about a fifth.'
          ],
          answer: 0,
          why: 'The passage says lateness fell <em>by more than half</em>, and option 4 shows why the small words matter: a different quantity is a different answer, however reasonable it sounds.' },

        { id: 't8l1s2-4', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'A secondary school on the outskirts of the city moved its first lesson from eight o\'clock to nine, and kept the change for a full academic year. Attendance in the first period rose, and the number of students recorded as late fell by more than half. Staff also noticed that the corridors were quieter before lessons. The change was not universally popular. Parents who begin work at eight said they now leave children unsupervised at home, and the later finish clashed with sports fixtures against schools that had not moved. Bus operators, who run school services between other contracts, said a nine o\'clock start was harder to fit into their day.',
          source: 'Written for classroom use.',
          stem: 'What reason do the bus operators give for objecting to the change?',
          options: [
            'They would have to buy additional vehicles for the service.',
            'A nine o\'clock start is harder to fit around their other contracts.',
            'Their drivers are not available before nine in the morning.',
            'The later finish clashes with fixtures at other schools.'
          ],
          answer: 1,
          why: 'The operators <em>run school services between other contracts</em>, which is the clause to point at. Option 4 is a real objection in the passage, but it belongs to the parents and the sports fixtures, not to the operators.' },

        { id: 't8l1s2-5', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'A survey of a lowland river has found the highest concentrations of plastic fragments not floating on the surface but buried in the sediment of slow-moving bends, where the current drops and particles settle. Samples taken from three such bends held several times more fragments per kilogram than samples from straight, faster stretches. The finding has changed how the clean-up is organised, since surface booms catch only what floats. It has also complicated it. Dredging a bend removes the plastic but also removes the invertebrates that live there, and the river authority has been told that repeated dredging would leave the channel less able to support fish.',
          source: 'Adapted for classroom use.',
          stem: 'Where did the survey find the highest concentrations of plastic fragments?',
          options: [
            'On the surface of the fastest-flowing stretches.',
            'Behind the surface booms installed by the authority.',
            'In the invertebrate populations of the lower river.',
            'In the sediment of slow-moving bends.'
          ],
          answer: 3,
          why: 'The first sentence places them <em>not floating on the surface but buried in the sediment of slow-moving bends</em>. Option 1 is that same sentence reversed, which is the standard trap for a reader working from memory of the topic.' }
      ]
    },

    {
      id: 't8l1s3', name: 'Vocabulary in context', cefr: 'B2+',
      theory: {
        key: 'The passage defines its own hard words: cover the word, read the clause before and after it, and the definition is nearly always sitting there.',
        body: [
          'A vocabulary-in-context question is not a vocabulary test. It asks what the word means <em>here</em>, and the examiner chose it precisely because the passage supplies the meaning. You are being tested on whether you will read the sentence or reach for what you half-remember.',
          'So cover the word with a finger and read the sentence without it. Put your own plain word in the gap. Only then look at the options and take the one closest to your word. Doing it in that order stops the famous meaning of the term from getting in first.',
          'The definition arrives in one of three ways: a restatement after a colon, a dash or a comma; a contrast marked by <em>rather than</em> or <em>not this but that</em>; or a reason introduced by <em>since</em> or <em>because</em>. When the text says a hedge means the village gains on one side what it loses on the other, the definition has been handed to you.',
          'Two distractors recur. The first is the technically correct option, the dictionary sense that is wrong in this passage. The second is lifted from somewhere else in the text: real words, real sentence, wrong slot.'
        ],
        simple: [
          'These questions ask what a word means in this passage. The passage almost always explains it.',
          'Cover the word. Read the sentence around it. Put in your own simple word. Then find the option that matches your word.',
          'Be careful with words you already know. The common meaning is often the wrong answer here.'
        ],
        examples: [
          { s: 'Text: a <b>hedge</b> against rising bills: the village gains on one side what it loses on the other.', g: 'the colon hands you the definition: an arrangement that offsets a loss.' },
          { s: '<s>hedge = a row of bushes at the edge of a field</s>', g: 'the famous meaning, and the wrong one in this passage.' },
          { s: 'Text: a <b>safeguard</b> rather than a revival: it preserves, but it makes no new speakers.', g: '"rather than" marks the contrast, and the contrast is the definition.' },
          { s: 'Text: a <b>conflict of interest</b>, since a reporter paid by the council is unlikely to expose it.', g: '"since" introduces the reason, and the reason spells the term out.' }
        ]
      },
      items: [
        { id: 't8l1s3-1', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'A village on the western coast now owns two wind turbines outright. The shares were sold locally, in small parcels, and the income is spent on a minibus, a heating fund for older residents and a share for the primary school. Supporters call the arrangement a hedge against rising bills: when the price of electricity goes up, the income from the turbines goes up with it, so the village gains on one side what it loses on the other. Critics are less certain. A community that owns generating plant also owns the risk of a broken gearbox, and the village has no reserve for a repair of that size.',
          source: 'Written for classroom use.',
          stem: 'In this passage, a <em>hedge</em> is',
          options: [
            'a payment made to the village by the electricity company.',
            'an arrangement that offsets a loss with a matching gain.',
            'a legal limit on how far electricity prices may rise.',
            'a reserve of money set aside for emergency repairs.'
          ],
          answer: 1,
          why: 'The colon defines it: <em>the village gains on one side what it loses on the other</em>. Option 4 is real text from the last sentence, but it is the wrong slot, which is the standard lifted-from-elsewhere distractor.' },

        { id: 't8l1s3-2', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'A village on the western coast now owns two wind turbines outright. The shares were sold locally, in small parcels, and the income is spent on a minibus, a heating fund for older residents and a share for the primary school. Supporters call the arrangement a hedge against rising bills: when the price of electricity goes up, the income from the turbines goes up with it, so the village gains on one side what it loses on the other. Critics are less certain. A community that owns generating plant also owns the risk of a broken gearbox, and the village has no reserve for a repair of that size.',
          source: 'Written for classroom use.',
          stem: 'In this passage, <em>generating plant</em> means',
          options: [
            'a species grown in order to produce fuel.',
            'the building in which the shares were sold.',
            'the machinery that produces the electricity.',
            'the fund that pays for heating in winter.'
          ],
          answer: 2,
          why: 'Read around it: what the community owns is turbines, and what can break is <em>a gearbox</em>. Option 1 is the famous meaning of <em>plant</em> and is wrong here, which is what these items are built to catch.' },

        { id: 't8l1s3-3', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'Two hundred local titles have closed in a decade, and the pattern is consistent: advertising revenue moved elsewhere, circulation fell, and the remaining staff were asked to cover more ground with less time. Editors describe the result as a vacuum. Council meetings that were once reported weekly now pass unrecorded, and planning decisions are taken without anyone in the room who is paid to notice. Several councils have responded by funding reporters themselves. Others call that a conflict of interest, since a reporter whose salary comes from the council is unlikely to be the first to expose it, and argue that the money would be better spent making the council\'s own papers easier for the public to read.',
          source: 'Adapted for classroom use.',
          stem: 'In this passage, a <em>vacuum</em> is',
          options: [
            'a period in which no council meetings are held.',
            'a gap left where reporting used to happen.',
            'a fall in the circulation of local newspapers.',
            'a machine used for cleaning the newsroom floor.'
          ],
          answer: 1,
          why: 'The sentence after the word defines it: <em>meetings that were once reported weekly now pass unrecorded</em>. Option 1 misreads which thing has stopped, and option 4 is the everyday meaning of the word.' },

        { id: 't8l1s3-4', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'Two hundred local titles have closed in a decade, and the pattern is consistent: advertising revenue moved elsewhere, circulation fell, and the remaining staff were asked to cover more ground with less time. Editors describe the result as a vacuum. Council meetings that were once reported weekly now pass unrecorded, and planning decisions are taken without anyone in the room who is paid to notice. Several councils have responded by funding reporters themselves. Others call that a conflict of interest, since a reporter whose salary comes from the council is unlikely to be the first to expose it, and argue that the money would be better spent making the council\'s own papers easier for the public to read.',
          source: 'Adapted for classroom use.',
          stem: 'In this passage, a <em>conflict of interest</em> means',
          options: [
            'a disagreement between two councils about funding.',
            'a situation in which a reporter is paid less than before.',
            'an argument between editors and their advertisers.',
            'a position in which duty and personal advantage pull apart.'
          ],
          answer: 3,
          why: '<em>Since</em> introduces the definition: a reporter paid by the council <em>is unlikely to be the first to expose it</em>. The other three options are all disagreements between parties, which is the word conflict answered on its own.' },

        { id: 't8l1s3-5', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'The water company is fitting meters to every household in the district, replacing a flat charge based on the size of the property. The stated aim is to make consumption visible, since households that can see what they use tend to use less. Early figures suggest a fall of around ten per cent in the first year. The objection is about fairness rather than effect. A large family in a small house uses more water than a single occupant in a large one, and under a flat charge the second was subsidising the first. Metering ends that transfer, and charities have asked for a tariff that protects households where the need is medical rather than careless.',
          source: 'Adapted for classroom use.',
          stem: 'In this passage, <em>subsidising</em> means',
          options: [
            'bearing part of the cost of another household\'s use.',
            'measuring what another household consumes.',
            'paying a reduced charge because of medical need.',
            'receiving a refund when consumption falls.'
          ],
          answer: 0,
          why: 'The sentence sets a large family against a single occupant and then calls the flat charge a <em>transfer</em> that metering ends. Option 3 is drawn from the last line of the passage and is the wrong slot.' }
      ]
    }

  ],

  check: {
    id: 't8l1ck', name: 'Systems Check · Finding the answer',
    items: [
      { id: 't8l1ck-1', type: 'read', tag: 'read-main', level: 'B2',
        passage: 'A thousand hectares of upland sheep pasture in the north have been taken out of grazing and left to return to scrub and woodland. Beavers were introduced to two of the valleys in 2021, and the pools they built now hold back water that used to run straight off the hill, which has reduced flooding in the village below. Farmers in the surrounding parishes are not opposed in principle, but they note that the land taken out of grazing was also the land that employed shepherds, and that the scheme is funded by a single donor whose commitment runs for fifteen years. What happens in the sixteenth year is a question nobody has answered.',
        source: 'Adapted for classroom use.',
        stem: 'What is the main topic of the passage?',
        options: [
          'A rewilding scheme, its early effects and the question it leaves open.',
          'The construction of pools by beavers in two northern valleys.',
          'The reasons upland sheep farming has become unprofitable.',
          'A campaign by farmers to reverse the loss of grazing land.'
        ],
        answer: 0,
        why: 'The passage runs from the change of land use to the unanswered question about the sixteenth year. Option 4 is a reversal: the farmers are <em>not opposed in principle</em>.' },

      { id: 't8l1ck-2', type: 'read', tag: 'read-detail', level: 'B2',
        passage: 'A thousand hectares of upland sheep pasture in the north have been taken out of grazing and left to return to scrub and woodland. Beavers were introduced to two of the valleys in 2021, and the pools they built now hold back water that used to run straight off the hill, which has reduced flooding in the village below. Farmers in the surrounding parishes are not opposed in principle, but they note that the land taken out of grazing was also the land that employed shepherds, and that the scheme is funded by a single donor whose commitment runs for fifteen years. What happens in the sixteenth year is a question nobody has answered.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, what effect have the beaver pools had?',
        options: [
          'They have increased the number of shepherds employed in the valleys.',
          'They have returned a thousand hectares of pasture to scrub.',
          'They have replaced the grazing income lost by nearby parishes.',
          'They have held back water and reduced flooding in the village.'
        ],
        answer: 3,
        why: 'Point at the clause: the pools <em>hold back water that used to run straight off the hill</em>. Option 2 is true of the scheme as a whole but not of the pools, which is the right fact attached to the wrong cause.' },

      { id: 't8l1ck-3', type: 'read', tag: 'read-detail', level: 'B2',
        passage: 'Under the reformed scheme, an employer who takes on an apprentice receives a grant only when the apprentice completes the final assessment, rather than at the point of hiring. The change was made because too many placements were ending in the first six months, leaving young people with neither a qualification nor a wage. Completion rates have since risen. Small firms say the new timing is the problem. A garage or a bakery cannot carry the cost of training for two years and wait for the grant at the end, and several have stopped offering places altogether. The scheme, they argue, now suits large employers with the cash to wait.',
        source: 'Adapted for classroom use.',
        stem: 'Under the reformed scheme, when does an employer receive the grant?',
        options: [
          'At the point of hiring the apprentice.',
          'When the apprentice completes the final assessment.',
          'After the apprentice has served six months.',
          'In two instalments across the two years of training.'
        ],
        answer: 1,
        why: 'The first sentence states it and names the old arrangement in the same breath, so option 1 is the system the reform replaced. Six months in option 3 is the length of the failed placements, not a payment date.' },

      { id: 't8l1ck-4', type: 'read', tag: 'read-context', level: 'B2+',
        passage: 'Under the reformed scheme, an employer who takes on an apprentice receives a grant only when the apprentice completes the final assessment, rather than at the point of hiring. The change was made because too many placements were ending in the first six months, leaving young people with neither a qualification nor a wage. Completion rates have since risen. Small firms say the new timing is the problem. A garage or a bakery cannot carry the cost of training for two years and wait for the grant at the end, and several have stopped offering places altogether. The scheme, they argue, now suits large employers with the cash to wait.',
        source: 'Adapted for classroom use.',
        stem: 'In this passage, to <em>carry the cost</em> means',
        options: [
          'to bear the expense until the grant arrives.',
          'to record the cost in the annual accounts.',
          'to pass the cost on to the apprentice.',
          'to divide the expense between several small firms.'
        ],
        answer: 0,
        why: 'The clause finishes itself: a firm cannot carry the cost <em>and wait for the grant at the end</em>. The waiting is the whole of the meaning, which is why large employers with cash are said to suit the scheme.' },

      { id: 't8l1ck-5', type: 'read', tag: 'read-context', level: 'B2+',
        passage: 'A university team has spent six years recording speakers of languages with fewer than a thousand users, and the recordings are now searchable online alongside transcriptions and translations. The archive is described as a safeguard rather than a revival: it preserves what is said, but it does not by itself produce new speakers. Linguists working with the communities make that point sharply. A language survives in kitchens and playgrounds, not on servers, and a community that sees its speech filed away may conclude that the work is finished. Others raise a different issue, asking who controls access to recordings of a grandparent, and whether a university in another country should hold them at all.',
        source: 'Written for classroom use.',
        stem: 'In this passage, a <em>safeguard</em> is',
        options: [
          'a method of teaching a language to new speakers.',
          'a measure that protects what exists without renewing it.',
          'a restriction on who may listen to the recordings.',
          'an agreement about where an archive should be held.'
        ],
        answer: 1,
        why: 'The colon defines it against its opposite: <em>it preserves what is said, but it does not by itself produce new speakers</em>. Option 1 is the revival the text explicitly says this is not.' },

      { id: 't8l1ck-6', type: 'read', tag: 'read-main', level: 'B2+',
        passage: 'A university team has spent six years recording speakers of languages with fewer than a thousand users, and the recordings are now searchable online alongside transcriptions and translations. The archive is described as a safeguard rather than a revival: it preserves what is said, but it does not by itself produce new speakers. Linguists working with the communities make that point sharply. A language survives in kitchens and playgrounds, not on servers, and a community that sees its speech filed away may conclude that the work is finished. Others raise a different issue, asking who controls access to recordings of a grandparent, and whether a university in another country should hold them at all.',
        source: 'Written for classroom use.',
        stem: 'What is the main idea of the passage?',
        options: [
          'Universities abroad should not hold recordings of endangered languages.',
          'Six years of fieldwork have produced a searchable online archive.',
          'An archive preserves a language but does not keep it alive.',
          'Languages with under a thousand speakers will vanish within a generation.'
        ],
        answer: 2,
        why: 'The opening describes the archive and everything after it qualifies what an archive can do, so the two joined give option 3. Option 2 is the first sentence alone and option 1 is the last clause alone: both are too narrow.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T8.levels.push({
  id: 't8l2', n: 2, name: 'Reading between the lines', cefr: 'B2+',
  blurb: 'The questions whose answers are real but not written down: which thing caused which, what a paragraph is doing, and what the text forces you to conclude.',
  subs: [

    {
      id: 't8l2s1', name: 'Cause and effect in an argument', cefr: 'B2+',
      theory: {
        key: 'Draw the arrow in the margin from the text before you read the options, and make sure it is the arrow the named party draws.',
        body: [
          'A cause-and-effect question asks which thing produced which. Before reading the options, write the arrow yourself: <em>trees intercept rain, so less water reaches the gullies</em>. Two seconds of work, and it makes three of the four options visibly wrong.',
          'The reversal is the classic distractor. The passage says the marsh lowers the cost of the wall; the option says the wall lowers the cost of the marsh. Both sentences contain the same nouns, and a student reading by recognition will accept either of them.',
          'The second trap is <strong>ownership</strong>. Exam questions nearly always name a party: <em>according to critics</em>, <em>the engineers say</em>, <em>the council attributes this to</em>. In a two-sided passage every side draws a different arrow, and an option can state a perfectly accurate relationship taken from the wrong side of the argument. Mark each claim in the margin with the initials of whoever makes it.',
          'The third is the unrelated true statement: something the passage does say, presented as a cause when the passage never joined it to anything. Ask whether the text links the two with <em>because</em>, <em>so</em>, <em>since</em> or <em>attributes to</em>, or merely mentions them in the same paragraph.'
        ],
        simple: [
          'These questions ask what made what happen. Draw an arrow in the margin first: cause, then effect.',
          'Watch for options that turn the arrow round. They use the same words as the passage but the other way about.',
          'Check who is speaking. If the question says "according to critics", the answer must be the arrow the critics draw, not the one the supporters draw.'
        ],
        examples: [
          { s: 'Text: crews with three days off were less often absent, <b>so</b> fewer rounds ran short-handed.', g: 'the arrow: shorter week, then less absence, then fewer missed collections.' },
          { s: '<s>Fewer missed collections allowed the council to shorten the week.</s>', g: 'the arrow reversed: same nouns, opposite claim.' },
          { s: 'Text: traders say the canopy hides their signs, <b>so</b> passing trade has fallen.', g: 'a different party in the same passage, drawing a different arrow.' },
          { s: '<s>According to the engineers, the trees have reduced passing trade.</s>', g: 'an accurate relationship given to the wrong owner.' }
        ]
      },
      items: [
        { id: 't8l2s1-1', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'When a district on the east side of the city replaced two rows of parking bays with forty semi-mature limes, the council expected complaints about the lost spaces. What it did not expect was the argument that followed about drains. Engineers supporting the scheme say the trees intercept rainfall before it reaches the road, so less water arrives at the gullies during a storm and fewer streets flood. Traders on the same street draw a different line: they say the canopy hides shop signs from drivers, so passing trade has fallen and two units are now empty. Residents, meanwhile, report cooler bedrooms in July and more leaves in their gutters in October.',
          source: 'Adapted for classroom use.',
          stem: 'According to the engineers who support the scheme, what effect do the trees have?',
          options: [
            'They hide shop signs, so passing trade falls.',
            'They intercept rainfall, so less water reaches the gullies.',
            'They cool bedrooms in July, so less energy is used.',
            'They drop leaves in October, so gutters block more often.'
          ],
          answer: 1,
          why: 'The engineers own one arrow only: rain is intercepted <em>before it reaches the road</em>. Options 1 and 4 are relationships the passage does draw, but the traders and the residents draw them.' },

        { id: 't8l2s1-2', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'When a district on the east side of the city replaced two rows of parking bays with forty semi-mature limes, the council expected complaints about the lost spaces. What it did not expect was the argument that followed about drains. Engineers supporting the scheme say the trees intercept rainfall before it reaches the road, so less water arrives at the gullies during a storm and fewer streets flood. Traders on the same street draw a different line: they say the canopy hides shop signs from drivers, so passing trade has fallen and two units are now empty. Residents, meanwhile, report cooler bedrooms in July and more leaves in their gutters in October.',
          source: 'Adapted for classroom use.',
          stem: 'What cause-and-effect relationship do the traders describe?',
          options: [
            'Deliveries have become slower, so their costs have risen.',
            'Cooler streets have drawn more shoppers, so trade has improved.',
            'The canopy conceals their signs, so passing trade has fallen.',
            'Flooding has damaged their stock, so two units have closed.'
          ],
          answer: 2,
          why: 'The traders <em>draw a different line</em> from the engineers, and it runs from hidden signs to lost trade. Option 2 reverses their claim and option 4 borrows the two empty units but attaches them to flooding, which nobody in the passage does.' },

        { id: 't8l2s1-3', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'A district council moved its refuse and administrative staff to a four-day week without cutting pay, and published the results after a year. Missed bin collections fell, and the council attributes this to lower sickness absence: crews who had three days off were less likely to be away on Monday, so fewer rounds ran short-handed. Union representatives accept the figures but attach a condition. They say the gain depends on keeping crew numbers as they are, and warn that if the council uses the same evidence to justify a smaller workforce, the absence rate will climb again. Opposition councillors take a third view, arguing that the public counter is now shut on Fridays and that this, not absence, is what residents notice.',
          source: 'Written for classroom use.',
          stem: 'What does the council say caused the fall in missed collections?',
          options: [
            'A reduction in the number of rounds run each week.',
            'Lower sickness absence among refuse crews.',
            'The closure of the public counter on Fridays.',
            'An increase in the size of the workforce.'
          ],
          answer: 1,
          why: 'The verb of attribution is in the text: the council <em>attributes this to lower sickness absence</em>. Option 3 is a real consequence of the change, but the opposition councillors raise it and it explains nothing about collections.' },

        { id: 't8l2s1-4', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'A district council moved its refuse and administrative staff to a four-day week without cutting pay, and published the results after a year. Missed bin collections fell, and the council attributes this to lower sickness absence: crews who had three days off were less likely to be away on Monday, so fewer rounds ran short-handed. Union representatives accept the figures but attach a condition. They say the gain depends on keeping crew numbers as they are, and warn that if the council uses the same evidence to justify a smaller workforce, the absence rate will climb again. Opposition councillors take a third view, arguing that the public counter is now shut on Fridays and that this, not absence, is what residents notice.',
          source: 'Written for classroom use.',
          stem: 'According to the union representatives, what would follow if crew numbers were cut?',
          options: [
            'Missed collections would be recorded in a different way.',
            'The public counter would have to reopen on Fridays.',
            'Staff would return to a five-day week within a year.',
            'The rate of sickness absence would rise again.'
          ],
          answer: 3,
          why: 'Their arrow is conditional: the gain <em>depends on keeping crew numbers as they are</em>, and cutting them would make absence <em>climb again</em>. Option 3 goes a step further than any sentence in the passage.' },

        { id: 't8l2s1-5', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Sampling along a stretch of river below a busy trunk road has traced a large share of the smallest plastic particles to road run-off rather than to litter. Rain washes fragments worn from tyres and road markings into the gullies, the gullies discharge into the river, and the particles settle where the current slows. The catchment authority proposes filter units in the gullies. Highway engineers reply that the units need emptying every few weeks and that the budget assumes an annual visit, so in practice they would overflow. Campaigners who want a ban on roadside litter argue that the study lets drivers off too lightly, though the sampling did not measure litter separately.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, what causes the smallest particles to reach the river?',
          options: [
            'Litter dropped at the roadside is blown into the water.',
            'Filter units overflow between their annual visits.',
            'Rain carries fragments from tyres and road markings into the gullies.',
            'Dredging stirs settled particles back into the current.'
          ],
          answer: 2,
          why: 'The chain is written out: rain, then gullies, then the river. Option 1 is the explanation the study <em>rejects</em>, and option 2 describes something that has not happened yet, since the filter units are only proposed.' }
      ]
    },

    {
      id: 't8l2s2', name: 'The author\'s purpose', cefr: 'B2+',
      theory: {
        key: 'Purpose questions ask what a paragraph is doing, not what it says, so answer with a verb.',
        body: [
          'If your answer to a purpose question is a summary of the paragraph, you have answered the wrong question. The examiner wants the paragraph\'s <strong>job</strong>: presenting objections, giving background, illustrating a claim, correcting a misreading, recommending a course of action.',
          'Read the paragraph and finish the sentence <em>here the writer is …ing</em>. The vocabulary of purpose is small, and knowing it is half the work: describing, explaining, presenting, contrasting, illustrating, qualifying, criticising, recommending, correcting, conceding.',
          'The signals are on the surface. A paragraph thick with <em>however</em>, <em>critics argue</em>, <em>they point out</em> and <em>a further worry</em> is presenting the case against, whatever its content happens to be. A paragraph of dates and figures is giving background. A paragraph whose last sentence begins <em>it proposes</em> is recommending.',
          'Two distractors recur. The first is the content summary: true, but it answers what the paragraph <em>says</em>. The second is the escalation, where the paragraph raises a difficulty and the option has the writer demanding that the whole scheme be abandoned. Purpose options are rarely that loud.'
        ],
        simple: [
          'A purpose question asks what the writer is doing in that part of the text, not what the text says.',
          'Answer with a verb: describing, explaining, presenting objections, correcting, recommending.',
          'Look at the signal words. "However" and "critics argue" mean the writer is giving the other side. "It proposes" means the writer is recommending.'
        ],
        examples: [
          { s: 'A paragraph full of <b>however</b>, <b>some argue</b>, <b>a further worry</b>.', g: 'the job is presenting objections, whatever the content is.' },
          { s: '<s>The purpose is to describe how the catalogue entries are written.</s>', g: 'that is the previous paragraph, and it is content rather than function.' },
          { s: 'A paragraph ending <b>it proposes that the boundary be redrawn</b>.', g: 'the job is recommending.' },
          { s: '<s>The purpose is to demand that the scheme be abandoned.</s>', g: 'escalation: the writer raises a difficulty, not a demand.' }
        ]
      },
      items: [
        { id: 't8l2s2-1', type: 'read', tag: 'read-purpose', level: 'B2+',
          passage: 'A national museum has begun publishing the full acquisition history of every object in its Asian galleries, including the gaps where the record is missing. The catalogue entries now say plainly when an object arrived without documentation, and the museum has invited claims from communities who recognise what they see.\n\nThe response from parts of the sector has been cool. Some curators argue that publishing gaps invites claims that cannot be tested, and that a missing receipt from 1890 is not evidence of theft. Others say the opposite: that the museum has made a display of transparency while keeping the objects, and that a catalogue entry costs nothing. Both camps agree on one point, which is that the museum has not said what it will do when a claim arrives.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author doing in the second paragraph?',
          options: [
            'Explaining how the new catalogue entries are written.',
            'Setting out the criticisms the policy has attracted.',
            'Recommending that the museum return the disputed objects.',
            'Describing the history of the Asian galleries.'
          ],
          answer: 1,
          why: 'The paragraph is built from <em>some curators argue</em> and <em>others say the opposite</em>, which is the signature of a paragraph presenting objections. Option 1 is the job of the first paragraph.' },

        { id: 't8l2s2-2', type: 'read', tag: 'read-purpose', level: 'B2+',
          passage: 'A national museum has begun publishing the full acquisition history of every object in its Asian galleries, including the gaps where the record is missing. The catalogue entries now say plainly when an object arrived without documentation, and the museum has invited claims from communities who recognise what they see.\n\nThe response from parts of the sector has been cool. Some curators argue that publishing gaps invites claims that cannot be tested, and that a missing receipt from 1890 is not evidence of theft. Others say the opposite: that the museum has made a display of transparency while keeping the objects, and that a catalogue entry costs nothing. Both camps agree on one point, which is that the museum has not said what it will do when a claim arrives.',
          source: 'Adapted for classroom use.',
          stem: 'What is the purpose of the first paragraph?',
          options: [
            'To describe the measure the museum has taken.',
            'To warn readers that museum records are often forged.',
            'To argue that communities should not make claims.',
            'To compare this museum with others in the sector.'
          ],
          answer: 0,
          why: 'Two sentences of plain statement, with no <em>however</em> and no verb of argument, do the job of describing. The sector only appears in the paragraph that follows, and it disagrees rather than being compared.' },

        { id: 't8l2s2-3', type: 'read', tag: 'read-purpose', level: 'B2+',
          passage: 'A trust set up by readers has bought a weekly paper that was about to close, and it now runs on subscriptions rather than advertising. The trust publishes its accounts, employs three reporters, and has committed to covering every council meeting in the district.\n\nIt would be easy to read this as a model for the rest of the country, and some commentators have done so. The arithmetic is less encouraging. The district is unusually prosperous, its readers are unusually old, and older readers are the ones still willing to pay for a printed paper. A trust in a poorer district with a younger population would need three or four times the number of subscribers to reach the same income, and nobody has shown that those subscribers exist.',
          source: 'Written for classroom use.',
          stem: 'What is the author\'s main purpose in the second paragraph?',
          options: [
            'To praise the trust for publishing its accounts.',
            'To explain how subscriptions are collected in the district.',
            'To question whether the model can be copied elsewhere.',
            'To recommend that every district set up a reader trust.'
          ],
          answer: 2,
          why: 'The paragraph opens by naming a reading and then says <em>the arithmetic is less encouraging</em>, which is qualifying, not praising. Option 4 is the claim the paragraph exists to undermine.' },

        { id: 't8l2s2-4', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'A trust set up by readers has bought a weekly paper that was about to close, and it now runs on subscriptions rather than advertising. The trust publishes its accounts, employs three reporters, and has committed to covering every council meeting in the district.\n\nIt would be easy to read this as a model for the rest of the country, and some commentators have done so. The arithmetic is less encouraging. The district is unusually prosperous, its readers are unusually old, and older readers are the ones still willing to pay for a printed paper. A trust in a poorer district with a younger population would need three or four times the number of subscribers to reach the same income, and nobody has shown that those subscribers exist.',
          source: 'Written for classroom use.',
          stem: 'Why does the author mention the age of the district\'s readers?',
          options: [
            'To show why the trust employs only three reporters.',
            'To explain why the paper was about to close.',
            'To praise older readers for supporting local journalism.',
            'To support the claim that this district is not typical.'
          ],
          answer: 3,
          why: 'The age of the readers is one of three respects in which the district is called <em>unusual</em>, and it feeds directly into the arithmetic about a poorer, younger district. A detail in a paragraph serves that paragraph\'s job.' },

        { id: 't8l2s2-5', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'A study following two thousand students for three years found that those at schools with a later start slept about twenty-five minutes more on school nights and missed fewer first lessons. The effect on examination results was small and not consistent across subjects.\n\nThat last sentence is the one worth pausing on. Coverage of the study has tended to report the sleep finding and stop, which turns a modest result into a promise. The researchers themselves were careful: they wrote that a later start is cheap and probably helpful, not that it raises grades. Readers who want a single change that will lift results are not going to find it here, and the study does not claim to offer one.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author doing in the second paragraph?',
          options: [
            'Summarising the study\'s findings for a general audience.',
            'Correcting the way the study has been reported.',
            'Recommending a later start for every secondary school.',
            'Criticising the researchers for a weak method.'
          ],
          answer: 1,
          why: 'The paragraph says coverage <em>turns a modest result into a promise</em> and then restates what the researchers actually wrote, which is correcting. Option 4 misplaces the blame: the passage calls the researchers careful.' }
      ]
    },

    {
      id: 't8l2s3', name: 'Inference', cefr: 'C1',
      theory: {
        key: 'An inference must be forced by the text: if the passage could be true and the option false, the option is wrong.',
        body: [
          'Inference sits between two errors. Accept only what is stated and you will reject the correct option, because it is never stated. Accept what feels likely and you will take the trap, because the trap is always the most interesting sentence on the page.',
          'The test is a single question, and it should be written beside every option: <strong>could the passage be true and this option false?</strong> If yes, reject it. That is the whole method. The option that survives is the one the text leaves no room to deny.',
          'The commonest failure is one step too far. The passage says a neighbouring farmer cannot tell his bank about the birds. It follows that lenders judge a farm by its income. It does not follow that he has been refused a loan, that he disbelieves the wildlife figures, or that he intends to sell. Each of those is a further step the text does not take.',
          'Rank the four options by distance from the text before choosing. The answer is rarely the nearest, because the nearest is usually a restatement of something already said, and never the furthest, because that is the escalation. It is the one a careful reader cannot argue with.'
        ],
        simple: [
          'An inference is something the passage must mean, even though it does not say it.',
          'Test every option with one question: could the passage be true and this option false? If yes, it is wrong.',
          'Do not go one step too far. The most exciting option is usually the trap.'
        ],
        examples: [
          { s: 'Text: he cannot tell his bank about <b>the birds</b>.', g: 'forced: lenders judge a farm by income, not by wildlife.' },
          { s: '<s>He has been refused a loan.</s>', g: 'one step too far: the passage never says he asked for one.' },
          { s: 'Text: the request for new drives <b>is with a committee</b>.', g: 'forced: it has not been granted yet.' },
          { s: '<s>The university has refused to fund the drives.</s>', g: 'the passage could be true and this false, since undecided is not refused.' }
        ]
      },
      items: [
        { id: 't8l2s3-1', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'A former arable estate has been converted to wood pasture, with old breeds of cattle and pigs grazing at low density instead of crops. The owners no longer sell grain; the income now comes from meat, from campsites and from payments for storing carbon and slowing water. Neighbouring arable farmers are watching the accounts rather than the wildlife. They note that the estate was bought outright and carries no mortgage, and that the public payments it relies on are agreed for ten years at a time. One neighbour put it drily: the birds are wonderful, and he cannot tell his bank about the birds.',
          source: 'Written for classroom use.',
          stem: 'What can be inferred about the neighbouring farmers\' main concern?',
          options: [
            'They believe the estate has exaggerated its wildlife claims.',
            'They doubt that the estate\'s finances could be reproduced on their own farms.',
            'They intend to convert their own land within ten years.',
            'They expect the public payments to be withdrawn immediately.'
          ],
          answer: 1,
          why: 'They are <em>watching the accounts rather than the wildlife</em>, and the two things they note are the absence of a mortgage and the ten-year term of the payments. Option 1 fails the test, since the passage is equally consistent with the wildlife being real.' },

        { id: 't8l2s3-2', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'A former arable estate has been converted to wood pasture, with old breeds of cattle and pigs grazing at low density instead of crops. The owners no longer sell grain; the income now comes from meat, from campsites and from payments for storing carbon and slowing water. Neighbouring arable farmers are watching the accounts rather than the wildlife. They note that the estate was bought outright and carries no mortgage, and that the public payments it relies on are agreed for ten years at a time. One neighbour put it drily: the birds are wonderful, and he cannot tell his bank about the birds.',
          source: 'Written for classroom use.',
          stem: 'What does the remark about the bank suggest?',
          options: [
            'The neighbour has been refused a loan by his bank.',
            'The estate has borrowed heavily to fund the conversion.',
            'Lenders judge a farm by its income rather than by its wildlife.',
            'Banks have begun to fund conversions of this kind directly.'
          ],
          answer: 2,
          why: 'The joke only works if a bank wants figures, which is what the remark forces. Option 2 is contradicted outright: the estate <em>was bought outright and carries no mortgage</em>.' },

        { id: 't8l2s3-3', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'The co-operative that owns the two turbines has applied to add a third, and has been told that the local grid connection is full. It may either wait for a reinforcement scheduled for 2031 or pay for the works itself, which would cost more than the turbine. The board has asked members to vote on a third option: build the turbine, accept a connection that can be switched off at busy times, and sell less electricity than the machine could produce. The chair has been careful to say that the figures put to members assume the current price of electricity holds for fifteen years.',
          source: 'Adapted for classroom use.',
          stem: 'What can be inferred about the third option put to members?',
          options: [
            'It would produce no income at all for the co-operative.',
            'It would be refused by the operator of the local grid.',
            'It would earn less than a turbine with a full connection.',
            'It would cost more than paying for the reinforcement.'
          ],
          answer: 2,
          why: 'A connection that <em>can be switched off at busy times</em> means selling <em>less electricity than the machine could produce</em>, and less electricity sold is less income. Option 1 exaggerates less into none.' },

        { id: 't8l2s3-4', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'The co-operative that owns the two turbines has applied to add a third, and has been told that the local grid connection is full. It may either wait for a reinforcement scheduled for 2031 or pay for the works itself, which would cost more than the turbine. The board has asked members to vote on a third option: build the turbine, accept a connection that can be switched off at busy times, and sell less electricity than the machine could produce. The chair has been careful to say that the figures put to members assume the current price of electricity holds for fifteen years.',
          source: 'Adapted for classroom use.',
          stem: 'What does the chair\'s remark about the figures suggest?',
          options: [
            'The members have already rejected the third option.',
            'The price of electricity is fixed for the next fifteen years.',
            'The co-operative intends to sell its turbines in 2031.',
            'The projection would fail if electricity prices fell.'
          ],
          answer: 3,
          why: 'An assumption is worth naming only because it might not hold, so the warning is about what happens if the price does not. Option 2 turns the assumption into a fact, which is the opposite of what the chair is saying.' },

        { id: 't8l2s3-5', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'Two years after the grant was moved to the end of the placement, the number of apprentices completing has risen and the number starting has fallen. The department publishes both figures but quotes only the first in its press releases. A committee of employers has asked for the two to be published together in a single table, and the department has replied that the figures are already public. It has also pointed out that a completion rate calculated from a smaller intake is not comparable with one calculated from a larger one. A trade body for small firms has said that it will publish the table itself if the department will not.',
          source: 'Written for classroom use.',
          stem: 'What can be inferred about the department\'s position?',
          options: [
            'It disputes the accuracy of the completion figures.',
            'It prefers the figure that shows the reform in a better light.',
            'It intends to return the grant to the point of hiring.',
            'It has refused to make the starting figures public.'
          ],
          answer: 1,
          why: 'It publishes both and quotes only the flattering one, and it answers a request for a single table by saying the figures are already public. Option 4 is contradicted by that same reply.' }
      ]
    }

  ],

  check: {
    id: 't8l2ck', name: 'Systems Check · Reading between the lines',
    items: [
      { id: 't8l2ck-1', type: 'read', tag: 'read-cause', level: 'B2+',
        passage: 'The agency has breached an earth bank on one stretch of estuary and allowed the tide back onto two hundred hectares of low-lying farmland. The reasoning is that salt marsh in front of a wall takes the energy out of a wave before it arrives, so the wall behind can be lower and cheaper to maintain.\n\nThe farmers who worked the land are not persuaded by the arithmetic. They point out that the saving is the agency\'s and the loss is theirs, that the compensation was calculated on the land\'s value as grazing rather than on the yield it produced, and that no figure has been put on the drainage ditches that now serve nothing. A wildlife trust has welcomed the scheme while asking who will monitor the marsh once it has formed.',
        source: 'Adapted for classroom use.',
        stem: 'According to the agency, what is the effect of salt marsh in front of a wall?',
        options: [
          'It reduces the energy of the waves that reach the wall.',
          'It raises the value of the farmland behind the wall.',
          'It removes the need for a wall altogether.',
          'It drains the low-lying fields more quickly.'
        ],
        answer: 0,
        why: 'The reasoning is stated: the marsh <em>takes the energy out of a wave before it arrives</em>, so the wall can be lower. Option 3 escalates lower into unnecessary, which the passage never claims.' },

      { id: 't8l2ck-2', type: 'read', tag: 'read-purpose', level: 'B2+',
        passage: 'The agency has breached an earth bank on one stretch of estuary and allowed the tide back onto two hundred hectares of low-lying farmland. The reasoning is that salt marsh in front of a wall takes the energy out of a wave before it arrives, so the wall behind can be lower and cheaper to maintain.\n\nThe farmers who worked the land are not persuaded by the arithmetic. They point out that the saving is the agency\'s and the loss is theirs, that the compensation was calculated on the land\'s value as grazing rather than on the yield it produced, and that no figure has been put on the drainage ditches that now serve nothing. A wildlife trust has welcomed the scheme while asking who will monitor the marsh once it has formed.',
        source: 'Adapted for classroom use.',
        stem: 'What is the author doing in the second paragraph?',
        options: [
          'Explaining how the earth bank was breached.',
          'Recommending compensation at a higher rate.',
          'Setting out the objections of those who lost land.',
          'Comparing this estuary with others on the coast.'
        ],
        answer: 2,
        why: '<em>They point out</em>, three times over, is the grammar of a paragraph presenting the case against. Option 2 is what the objectors might want, but the writer sets out their case rather than making it.' },

      { id: 't8l2ck-3', type: 'read', tag: 'read-purpose', level: 'C1',
        passage: 'The team has begun returning copies of every recording to the community it came from, on hard drives that do not need an internet connection, together with the software needed to read them.\n\nThis is a smaller step than it sounds, and the team says so. A hard drive fails, the software will not run on a machine bought in ten years\' time, and nobody in the village is paid to look after either. The team has asked its university for a fund to replace the drives every five years. The request is with a committee. Meanwhile the master copies stay on the university\'s servers, which are backed up nightly.',
        source: 'Written for classroom use.',
        stem: 'What is the author\'s purpose in the second paragraph?',
        options: [
          'To describe the contents of the returned hard drives.',
          'To explain why the step is less secure than it appears.',
          'To praise the university for funding the archive.',
          'To argue that communities should not be given copies.'
        ],
        answer: 1,
        why: 'It opens with <em>this is a smaller step than it sounds</em> and then lists three ways the copies can be lost, which is qualifying a claim. Option 3 fails on the facts as well: the fund has not been granted.' },

      { id: 't8l2ck-4', type: 'read', tag: 'read-infer', level: 'C1',
        passage: 'The team has begun returning copies of every recording to the community it came from, on hard drives that do not need an internet connection, together with the software needed to read them.\n\nThis is a smaller step than it sounds, and the team says so. A hard drive fails, the software will not run on a machine bought in ten years\' time, and nobody in the village is paid to look after either. The team has asked its university for a fund to replace the drives every five years. The request is with a committee. Meanwhile the master copies stay on the university\'s servers, which are backed up nightly.',
        source: 'Written for classroom use.',
        stem: 'What can be inferred from the last two sentences?',
        options: [
          'The village copies are less securely preserved than the university\'s.',
          'The university has refused to fund the replacement drives.',
          'The community asked for the recordings to be returned.',
          'The master copies will be deleted once the drives are delivered.'
        ],
        answer: 0,
        why: 'Nightly backups on one side, an unfunded request on the other: the comparison is forced. Option 2 fails the test, because a request sitting with a committee is undecided rather than refused.' },

      { id: 't8l2ck-5', type: 'read', tag: 'read-cause', level: 'C1',
        passage: 'A new sleeper between two capitals sold out for most of its first summer, and a second set of coaches has been added. The economics turn on a detail passengers never see: the train is stabled all day at the far end, so a set of carriages earns money once in twenty-four hours, where a daytime train earns it four or five times.\n\nThe operator\'s answer is to run the same set on a daytime service before it returns overnight, which raises the use made of the carriages but leaves no slack for delay. Rail unions have supported the route while warning that the plan depends on punctuality the network has not delivered for years, and that the first serious delay will remove the daytime working rather than the sleeper, because the sleeper is the one that has been advertised.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, why does a sleeper set earn less than a daytime set?',
        options: [
          'It carries fewer passengers than a seated coach of the same length.',
          'It makes only one journey in twenty-four hours.',
          'It is delayed more often than a daytime train at the border.',
          'It has to be stabled for maintenance every night.'
        ],
        answer: 1,
        why: 'The passage gives one reason and gives it plainly: one journey against four or five. Option 1 is true of sleepers in general and would be right in another text, but this passage never says it.' },

      { id: 't8l2ck-6', type: 'read', tag: 'read-infer', level: 'C1',
        passage: 'A new sleeper between two capitals sold out for most of its first summer, and a second set of coaches has been added. The economics turn on a detail passengers never see: the train is stabled all day at the far end, so a set of carriages earns money once in twenty-four hours, where a daytime train earns it four or five times.\n\nThe operator\'s answer is to run the same set on a daytime service before it returns overnight, which raises the use made of the carriages but leaves no slack for delay. Rail unions have supported the route while warning that the plan depends on punctuality the network has not delivered for years, and that the first serious delay will remove the daytime working rather than the sleeper, because the sleeper is the one that has been advertised.',
        source: 'Adapted for classroom use.',
        stem: 'What do the unions expect to happen after a serious delay?',
        options: [
          'The sleeper service will be withdrawn before the daytime one.',
          'The second set of coaches will be sold to another operator.',
          'The daytime working will be cancelled rather than the sleeper.',
          'The operator will abandon the route altogether.'
        ],
        answer: 2,
        why: 'The reason is given in the same sentence: the sleeper is <em>the one that has been advertised</em>, so it is the working that is protected. Option 1 is that sentence reversed and option 4 is the escalation.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T8.levels.push({
  id: 't8l3', n: 3, name: 'Whole passages', cefr: 'C1',
  blurb: 'Two-sided passages at full length, with the five questions in the order the examination asks them and the last one always the same question.',
  subs: [

    {
      id: 't8l3s1', name: 'Two-sided arguments', cefr: 'C1',
      theory: {
        key: 'Exam passages are built in two halves, a measure and its objections, and most of the marks depend on knowing which half a sentence comes from.',
        body: [
          'Nearly every passage in this paper has the same architecture. The first paragraph states a measure, a finding or an event. The second gives the case against it, or the complications. The last two or three sentences say what would have to happen next. Once you can see the shape, you know where each kind of question is answered before you have read it.',
          'Mark the sides as you read. A tick in the margin for the supporters, a cross for the objectors, initials for anyone named: <em>eng</em> for the engineers, <em>tr</em> for the traders. It costs ten seconds and it answers every ownership question in the set.',
          'Notice that objections in these passages are rarely denials. The farming organisations do not say the fall in antibiotic use did not happen; they say the credit belongs elsewhere. The ward staff do not say the laboratory result is false; they say it is unfair. An option that has a party denying the facts is usually wrong, because that is not how these texts argue.',
          'The last paragraph tends to belong to neither side. It names the thing both sides want, or the thing nobody has answered. A purpose question about it is answered with <em>identifying common ground</em> or <em>leaving the question open</em>, never with a verdict, because the writer of an exam passage does not give one.'
        ],
        simple: [
          'Most exam passages have two halves: first the measure or the finding, then the objections, then what should happen next.',
          'Mark the sides in the margin as you read, so you always know who said what.',
          'People who object usually do not say the facts are wrong. They say the facts mean something else, or that the cost falls on them.'
        ],
        examples: [
          { s: 'Para 1: <b>use fell by half and resistant infections stopped rising</b>.', g: 'the finding, and the supporters\' half of the passage.' },
          { s: 'Para 2: <b>they do not dispute the fall, but they dispute the arrow</b>.', g: 'the objection is about the cause, not about the facts.' },
          { s: 'Para 3: <b>both sides ask for the same study</b>.', g: 'common ground, and the writer gives no verdict.' },
          { s: '<s>Farming organisations deny that antibiotic use has fallen.</s>', g: 'a denial distractor: the text says the opposite in so many words.' }
        ]
      },
      items: [
        { id: 't8l3s1-1', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Five years after some of the strictest national restrictions in Europe came into force, the country\'s farms use less than half the antibiotic they did, and resistant infections in hospital patients have stopped rising. Veterinary bodies and public health officials treat the two facts as connected, and argue that the fall on farms has slowed the spread of resistant bacteria into the wider population.\n\nFarming organisations do not dispute the fall, but they dispute the arrow. They point out that hospital prescribing was tightened over the same period, that resistant bacteria travel between people far more readily than from animals to people, and that the credit now being claimed for the farming rules may belong to the hospitals. They add a cost of their own: on units where an outbreak can move through a shed in a day, waiting for a diagnosis has meant losses that nobody has counted.\n\nBoth sides ask for the same thing, which is a study that separates the two changes instead of reporting them together.',
          source: 'Adapted for classroom use.',
          stem: 'What causal claim do the veterinary bodies and public health officials make?',
          options: [
            'Tighter hospital prescribing has reduced antibiotic use on farms.',
            'Lower use on farms has slowed the spread of resistant bacteria to people.',
            'Resistant infections in hospitals have caused farms to change practice.',
            'Waiting for a diagnosis has caused uncounted losses on large units.'
          ],
          answer: 1,
          why: 'They <em>treat the two facts as connected</em> and the arrow runs from the farms outwards. Option 3 reverses it and option 4 is an accurate claim owned by the other side of the argument.' },

        { id: 't8l3s1-2', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Five years after some of the strictest national restrictions in Europe came into force, the country\'s farms use less than half the antibiotic they did, and resistant infections in hospital patients have stopped rising. Veterinary bodies and public health officials treat the two facts as connected, and argue that the fall on farms has slowed the spread of resistant bacteria into the wider population.\n\nFarming organisations do not dispute the fall, but they dispute the arrow. They point out that hospital prescribing was tightened over the same period, that resistant bacteria travel between people far more readily than from animals to people, and that the credit now being claimed for the farming rules may belong to the hospitals. They add a cost of their own: on units where an outbreak can move through a shed in a day, waiting for a diagnosis has meant losses that nobody has counted.\n\nBoth sides ask for the same thing, which is a study that separates the two changes instead of reporting them together.',
          source: 'Adapted for classroom use.',
          stem: 'What alternative explanation do the farming organisations offer?',
          options: [
            'That resistant infections were never in fact rising.',
            'That antibiotic use on farms has not actually fallen.',
            'That tighter hospital prescribing may account for the change.',
            'That resistance passes from people to animals rather than the reverse.'
          ],
          answer: 2,
          why: 'They dispute the arrow, not the fall, and name hospital prescribing as the rival cause. Option 2 is exactly the denial the passage rules out with <em>do not dispute the fall</em>.' },

        { id: 't8l3s1-3', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'Five years after some of the strictest national restrictions in Europe came into force, the country\'s farms use less than half the antibiotic they did, and resistant infections in hospital patients have stopped rising. Veterinary bodies and public health officials treat the two facts as connected, and argue that the fall on farms has slowed the spread of resistant bacteria into the wider population.\n\nFarming organisations do not dispute the fall, but they dispute the arrow. They point out that hospital prescribing was tightened over the same period, that resistant bacteria travel between people far more readily than from animals to people, and that the credit now being claimed for the farming rules may belong to the hospitals. They add a cost of their own: on units where an outbreak can move through a shed in a day, waiting for a diagnosis has meant losses that nobody has counted.\n\nBoth sides ask for the same thing, which is a study that separates the two changes instead of reporting them together.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author doing in the final paragraph?',
          options: [
            'Identifying the point on which the two sides agree.',
            'Recommending that the restrictions now be withdrawn.',
            'Judging which side\'s explanation is the correct one.',
            'Summarising the losses reported on large units.'
          ],
          answer: 0,
          why: '<em>Both sides ask for the same thing</em> is the grammar of common ground. Option 3 is what a reader wants and what the writer refuses to supply, which is normal in these passages.' },

        { id: 't8l3s1-4', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'A large hospital trust has trialled a four-day week for its administrative and laboratory staff, though not for nurses on the wards. Reported sickness absence fell, and the trust says recruitment to hard-to-fill laboratory posts became easier, which it attributes to the shorter week rather than to pay, since pay did not change.\n\nWard staff have raised a fairness objection rather than a practical one. They accept that a laboratory can compress its week and a ward cannot, but they argue that a benefit available to one group and not another will show up in morale long before it shows up in a spreadsheet, and that the trust has published no plan for extending it. Finance officers add a separate warning: the laboratory result was measured over eight months, which include no winter, and winter is when the trust\'s absence figures are made.\n\nThe trust has agreed to run the trial for a further year before deciding.',
          source: 'Written for classroom use.',
          stem: 'What does the trust say caused laboratory recruitment to improve?',
          options: [
            'An increase in the pay offered for laboratory posts.',
            'A fall in sickness absence among the ward staff.',
            'The introduction of the shorter working week.',
            'The decision to extend the trial for a further year.'
          ],
          answer: 2,
          why: 'The trust <em>attributes it to the shorter week rather than to pay, since pay did not change</em>, which rules out option 1 in the same clause. Option 4 comes after the result and cannot have caused it.' },

        { id: 't8l3s1-5', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'A large hospital trust has trialled a four-day week for its administrative and laboratory staff, though not for nurses on the wards. Reported sickness absence fell, and the trust says recruitment to hard-to-fill laboratory posts became easier, which it attributes to the shorter week rather than to pay, since pay did not change.\n\nWard staff have raised a fairness objection rather than a practical one. They accept that a laboratory can compress its week and a ward cannot, but they argue that a benefit available to one group and not another will show up in morale long before it shows up in a spreadsheet, and that the trust has published no plan for extending it. Finance officers add a separate warning: the laboratory result was measured over eight months, which include no winter, and winter is when the trust\'s absence figures are made.\n\nThe trust has agreed to run the trial for a further year before deciding.',
          source: 'Written for classroom use.',
          stem: 'Why do the finance officers mention that the trial lasted eight months?',
          options: [
            'To show that the trial ran longer than comparable studies.',
            'To argue that the result has not yet been tested in winter.',
            'To explain why ward staff were left out of the trial.',
            'To recommend that the trust abandon the four-day week.'
          ],
          answer: 1,
          why: 'The length is raised only to make the next point: those months <em>include no winter</em>, and winter is when the absence figures are made. Option 4 is the escalation these items always offer.' }
      ]
    },

    {
      id: 't8l3s2', name: 'The implied follow-up', cefr: 'C1',
      theory: {
        key: 'The recommendation lives in the last two or three sentences, and the answer restates it at the same size, never louder.',
        body: [
          'The final question in an exam set asks what should happen next. It looks like an inference question and it is not. The passage has told you, in its closing sentences, and your job is to recognise the restatement.',
          'Underline the recommendation before you read the options. It is usually marked: <em>it proposes</em>, <em>it recommends</em>, <em>experts urge</em>, <em>success will depend on</em>. It is often preceded by a sentence saying what the text is <strong>not</strong> asking for, and that negative sentence is a gift, because it eliminates an option before you have read them.',
          'Then match the size. Distractors here are the same idea turned up: a redesign becomes the closure of the programme, a capped tariff becomes the end of metering, a funded post becomes the return of the objects. Ask of each option whether it is what this text asked for, or what an angrier writer would have asked for.',
          'The other distractor is the plausible action from the middle of the passage, something the text discussed but never proposed. If it is not in the closing sentences, it is not the recommendation.'
        ],
        simple: [
          'The last two or three sentences usually say what should happen next. Underline them before you look at the options.',
          'Look for words like <em>it recommends</em>, <em>it proposes</em>, <em>its proposal is</em>, <em>will depend on</em>.',
          'The answer is the same size as the text. If an option is much stronger, such as a ban or closing everything down, it is wrong.'
        ],
        examples: [
          { s: 'Text: <b>it recommends that no further trees be planted in sealed pits</b>.', g: 'the recommendation, marked and sitting at the end.' },
          { s: 'Text: <b>the review stops short of proposing that metering be abandoned</b>.', g: 'a stated negative, which removes an option before you read them.' },
          { s: '<s>End the canopy programme until the survey is repeated.</s>', g: 'escalation: the text asked for a change of design, not a halt.' },
          { s: '<s>Replace every failing tree.</s>', g: 'discussed in the middle of the passage, never proposed at the end.' }
        ]
      },
      items: [
        { id: 't8l3s2-1', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'The city\'s canopy programme has planted 40,000 trees in six years, and a survey this spring found that just over a fifth of them are dead or failing. The losses are concentrated in streets where the planting pits are small and the surrounding pavement is sealed, so water runs across the surface instead of into the soil. Replacing the dead trees would cost about the same as the original planting. The programme\'s own report does not recommend a larger planting target. It recommends that no further trees be planted in sealed pits until the pit design is changed, and that the money set aside for next year\'s planting be spent on watering and on opening the ground around the trees already in place.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action does the report imply is necessary?',
          options: [
            'Planting more trees each year to offset the losses.',
            'Replacing every failing tree at the cost of the original planting.',
            'Redirecting next year\'s money to care and to redesigned pits.',
            'Suspending the canopy programme until the survey is repeated.'
          ],
          answer: 2,
          why: 'The closing sentence proposes exactly two things, watering and opening the ground, and the sentence before it rules out option 1 by saying the report <em>does not recommend a larger planting target</em>.' },

        { id: 't8l3s2-2', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'Two years after universal metering, average household consumption in the district is down by nine per cent, but the number of households in arrears has doubled. The company\'s review identifies a group it calls high-need rather than high-use: households with a medical condition requiring frequent washing, and households of six or more in small properties. For these, a meter converts a fixed cost into a rising one that they cannot reduce by behaviour. The review stops short of proposing that metering be abandoned. Its recommendation is a capped tariff for registered high-need households, funded from the general charge, together with a simpler process for joining the register.',
          source: 'Written for classroom use.',
          stem: 'What does the review recommend?',
          options: [
            'Removing meters from households that have fallen into arrears.',
            'Abandoning universal metering across the district.',
            'Raising the general charge for every household by nine per cent.',
            'A capped tariff for high-need households, with easier registration.'
          ],
          answer: 3,
          why: 'The last sentence states the proposal, and the sentence before it removes option 2 in advance: the review <em>stops short of proposing that metering be abandoned</em>. Option 3 reuses the nine per cent from the opening line.' },

        { id: 't8l3s2-3', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'When the stone figures were returned, the receiving museum had one climate-controlled room and no conservator. Within a year, two of the figures showed salt damage that would have been caught earlier by a trained eye. Neither institution has blamed the other in public. The joint statement they have issued does not ask for the objects to come back, and it does not ask for more rooms. It asks that any future transfer be agreed together with a funded post, a conservator paid for a fixed term by the returning institution and employed by the receiving one, and that the handover date be set by the readiness of that post rather than by the anniversary of the agreement.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action does the joint statement propose?',
          options: [
            'Returning the damaged figures to the original museum.',
            'Funding a conservator post before any future transfer.',
            'Building additional climate-controlled rooms at both museums.',
            'Halting all future transfers between the two institutions.'
          ],
          answer: 1,
          why: 'The statement asks for a funded post and for the handover date to follow it. The preceding sentence disposes of options 1 and 3 together: it <em>does not ask for the objects to come back</em> and <em>does not ask for more rooms</em>.' },

        { id: 't8l3s2-4', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'The catchment study ends with a recommendation that surprised the volunteers who collected the samples. They had expected a call for more clean-up days. Instead, the authors note that the fragments in the sediment are already broken down beyond the size that hand-picking can recover, and that a volunteer day removes the visible litter while leaving the measured problem untouched. Their proposal is that the volunteer effort be redirected to sampling rather than collecting, on the grounds that a monthly record from thirty sites would tell the authority where the particles enter the river, which is the one thing nobody currently knows.',
          source: 'Written for classroom use.',
          stem: 'What follow-up action do the authors propose?',
          options: [
            'Increasing the number of clean-up days across the catchment.',
            'Dredging the bends in which the fragments have settled.',
            'Using volunteers to take regular samples rather than to collect litter.',
            'Banning the sale of the plastics found in the sediment.'
          ],
          answer: 2,
          why: '<em>Their proposal is</em> marks the sentence, and it redirects the same effort rather than adding to it. Option 1 is named in the passage as the thing the volunteers expected and did not get.' },

        { id: 't8l3s2-5', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'The trust that runs nine schools has read the evidence on start times and has decided not to move the first lesson in eight of them. Its reasoning is that the transport contracts, the shared sports fixtures and the sixth-form timetable are built around the current hours, and that a change in one school alone produces most of the disruption and little of the benefit. The paper it has published is not a rejection of later starts. It proposes that the question be taken to the local authority so that the schools, the bus operators and the fixture secretaries can move together, and that one school continue the later start as a test in the meantime.',
          source: 'Adapted for classroom use.',
          stem: 'What does the trust propose should happen next?',
          options: [
            'All nine schools should move to a later start together.',
            'Later starts should be abandoned across the trust.',
            'The transport contracts should be cancelled and retendered.',
            'The question should go to the local authority for a joint decision.'
          ],
          answer: 3,
          why: 'The closing sentence proposes a joint move through the local authority, with one school continuing as a test. Option 2 is ruled out in advance: the paper <em>is not a rejection of later starts</em>.' }
      ]
    },

    {
      id: 't8l3s3', name: 'Full passage under exam conditions', cefr: 'C1',
      theory: {
        key: 'Five questions on one passage always arrive in the same order, and that order is a plan for reading it.',
        body: [
          'The set runs: the main topic, a specific detail, a cause-and-effect relationship attributed to one side, the author\'s purpose in a paragraph, and an implied follow-up action. One mark each, and roughly ninety seconds each. Knowing the order means you can read the passage once, properly, instead of five times in a hurry.',
          'Read it all before answering anything, with a pen in your hand. Bracket the paragraphs. Tick the supporting side and cross the objecting side. Underline the last two sentences. You have now pre-answered questions one, three, four and five; question two is the only one that will need a fresh search.',
          'Answer in the order given and do not let a hard item stop you. The detail question is quick once you have the right noun, the purpose question is a verb, and the follow-up question is the sentence you have already underlined.',
          'The most expensive habit in this section is choosing an option because it is true. Every passage contains options that are true of the world, true of one paragraph, or true of the other side of the argument. Only one of them is true of <em>this question</em>.'
        ],
        simple: [
          'The five questions always come in the same order: main idea, a detail, a cause, the purpose of a paragraph, and what should happen next.',
          'Read the whole passage once with a pen. Mark the paragraphs, mark who says what, and underline the last two sentences.',
          'Then answer in order. Do not spend too long on one question, because they are all worth the same.'
        ],
        examples: [
          { s: 'Q1 <b>main topic</b>: first sentence plus last sentence.', g: 'the measure and what is still unsettled, joined into one.' },
          { s: 'Q2 <b>a detail</b>: scan for the rarest noun in the question.', g: 'the only one of the five that needs a second search.' },
          { s: 'Q3 <b>a cause</b>, attributed: whose arrow is it?', g: 'check the named party before you check the relationship.' },
          { s: 'Q4 <b>the purpose of a paragraph</b>: answer with a verb.', g: 'presenting, explaining, correcting, recommending.' },
          { s: 'Q5 <b>the follow-up</b>: the sentence you underlined.', g: 'restate it, and do not escalate it.' }
        ]
      },
      items: [
        { id: 't8l3s3-1', type: 'read', tag: 'read-main', level: 'C1',
          passage: 'Eleven villages on an upland plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few hundred pounds. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, insulation grants for the oldest houses and a bursary for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose bursaries depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The financial arrangements used to buy six upland turbines.',
            'A community-owned wind farm and the disputes it has not settled.',
            'The objections of ecologists to wind power on upland sites.',
            'A plan to remove the turbines from an upland plateau.'
          ],
          answer: 1,
          why: 'The opening describes the purchase and the second paragraph says plainly that ownership <em>is not a solution to the disagreements that surround wind power</em>. Option 1 is the first paragraph alone, and option 3 is half of the second.' },

        { id: 't8l3s3-2', type: 'read', tag: 'read-detail', level: 'C1',
          passage: 'Eleven villages on an upland plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few hundred pounds. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, insulation grants for the oldest houses and a bursary for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose bursaries depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, how is the annual surplus used?',
          options: [
            'It is divided equally among all households on the plateau.',
            'It is paid to the developer that built the wind farm.',
            'Half repays the loan and the rest funds local schemes.',
            'It is held entirely in a decommissioning fund.'
          ],
          answer: 2,
          why: 'The semicolon in the first paragraph splits it for you: half to the loan, the rest to the reserve, the grants and the bursary. Option 4 is proposed in the last paragraph and is therefore not yet what happens.' },

        { id: 't8l3s3-3', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Eleven villages on an upland plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few hundred pounds. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, insulation grants for the oldest houses and a bursary for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose bursaries depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'According to the ecologists, why is the site now harder to decommission?',
          options: [
            'The turbines are jointly owned by eleven separate villages.',
            'The twenty-year loan must be repaid before anything is removed.',
            'The independent panel has not yet redrawn the boundary.',
            'Those who would have to agree to removal depend on the income.'
          ],
          answer: 3,
          why: 'The <em>because</em> is in their sentence: the people who must agree are the people whose bursaries depend on the turbines. Option 1 states a fact from the passage that the ecologists never turn into a cause.' },

        { id: 't8l3s3-4', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'Eleven villages on an upland plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few hundred pounds. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, insulation grants for the oldest houses and a bursary for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose bursaries depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author\'s main purpose in the second paragraph?',
          options: [
            'To explain how the shares in the wind farm were sold.',
            'To set out the problems that community ownership has not removed.',
            'To recommend that the shareholding be widened immediately.',
            'To describe the planning application made by the developer.'
          ],
          answer: 1,
          why: 'The paragraph opens on <em>not, however, a solution</em> and then gives two complaints, which is presenting the case against. Option 3 is both an escalation and contradicted by the final paragraph.' },

        { id: 't8l3s3-5', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'Eleven villages on an upland plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few hundred pounds. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, insulation grants for the oldest houses and a bursary for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose bursaries depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action does the five-year review propose?',
          options: [
            'Buying additional turbines out of the maintenance reserve.',
            'Extending shares to every household on the plateau.',
            'Suspending the bursary scheme until the loan is repaid.',
            'Redrawing the boundary and building a decommissioning fund.'
          ],
          answer: 3,
          why: 'The closing sentence proposes exactly those two things, and the sentence before it rules out options 1 and 2 together by saying the review <em>does not propose buying more turbines or widening the shareholding</em>.' }
      ]
    }

  ],

  check: {
    id: 't8l3ck', name: 'Systems Check · Whole passages',
    items: [
      { id: 't8l3ck-1', type: 'read', tag: 'read-main', level: 'C1',
        passage: 'The county has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing a marsh or a shingle ridge to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the county itself granted, and that a benefit ratio counts a hotel and a terrace of cottages differently. The plan does not offer compensation and does not claim to. It recommends that the county open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'What is the main topic of the passage?',
        options: [
          'The physics of wave reflection at a sea wall.',
          'A county shoreline plan, its reasoning and the objections to it.',
          'A proposal to compensate every coastal homeowner in the county.',
          'The cost of maintaining hard defences over the next century.'
        ],
        answer: 1,
        why: 'Three paragraphs: the plan, the reasoning behind one category, the objections and what is proposed. Option 3 is contradicted outright, since the plan <em>does not offer compensation and does not claim to</em>.' },

      { id: 't8l3ck-2', type: 'read', tag: 'read-detail', level: 'C1',
        passage: 'The county has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing a marsh or a shingle ridge to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the county itself granted, and that a benefit ratio counts a hotel and a terrace of cottages differently. The plan does not offer compensation and does not claim to. It recommends that the county open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, how were the three categories decided?',
        options: [
          'By a vote of the residents in each coastal parish.',
          'By the age of the existing defences on each stretch.',
          'By comparing maintenance cost with the value of what lies behind.',
          'By the width of the beach in front of each stretch.'
        ],
        answer: 2,
        why: 'The last sentence of the first paragraph states the calculation. The other three options are all sensible ways of dividing a coast, which is precisely what makes them the right shape for distractors.' },

      { id: 't8l3ck-3', type: 'read', tag: 'read-context', level: 'C1',
        passage: 'The county has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing a marsh or a shingle ridge to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the county itself granted, and that a benefit ratio counts a hotel and a terrace of cottages differently. The plan does not offer compensation and does not claim to. It recommends that the county open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'In this passage, the <em>benefit ratio</em> is',
        options: [
          'the comparison of a defence\'s cost with the value it protects.',
          'the share of the coast placed in each of the three categories.',
          'the amount saved by ending maintenance on a defence.',
          'the rate at which a wall scours sand from its own foot.'
        ],
        answer: 0,
        why: 'The term is named at the end of the sentence that defines it, so the definition is sitting immediately in front of the word. Option 3 is real text from the last paragraph, in the wrong slot.' },

      { id: 't8l3ck-4', type: 'read', tag: 'read-cause', level: 'C1',
        passage: 'The county has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing a marsh or a shingle ridge to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the county itself granted, and that a benefit ratio counts a hotel and a terrace of cottages differently. The plan does not offer compensation and does not claim to. It recommends that the county open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, what happens to the beach in front of a sea wall?',
        options: [
          'It widens as sand is trapped against the wall.',
          'It is scoured away by the energy the wall reflects downwards.',
          'It is replaced by a marsh within a hundred years.',
          'It breaks the incoming waves further out than a shingle ridge does.'
        ],
        answer: 1,
        why: 'The arrow is written out: the wall reflects energy downwards, the sand goes, and the stretch <em>tends to lose the beach that protected it</em>. Option 1 is that arrow reversed.' },

      { id: 't8l3ck-5', type: 'read', tag: 'read-infer', level: 'C1',
        passage: 'The county has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing a marsh or a shingle ridge to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the county itself granted, and that a benefit ratio counts a hotel and a terrace of cottages differently. The plan does not offer compensation and does not claim to. It recommends that the county open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'What can be inferred about the residents in the third category?',
        options: [
          'They have been offered payments to leave their homes.',
          'Their houses were built without permission from the county.',
          'Their properties were valued below the cost of defending them.',
          'Their stretch of coast has no recorded history of flooding.'
        ],
        answer: 2,
        why: 'Category three is where nothing further will be built, and the categories were set by weighing cost against value, so the comparison must have come out that way. Options 1 and 2 are both contradicted by the third paragraph.' },

      { id: 't8l3ck-6', type: 'read', tag: 'read-followup', level: 'C1',
        passage: 'The county has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing a marsh or a shingle ridge to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the county itself granted, and that a benefit ratio counts a hotel and a terrace of cottages differently. The plan does not offer compensation and does not claim to. It recommends that the county open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'What follow-up action does the plan recommend?',
        options: [
          'Building hard defences along the whole sixty kilometres.',
          'Paying compensation at the market value of each property.',
          'Reclassifying properties before any fund has been opened.',
          'Opening a relocation fund before any property is reclassified.'
        ],
        answer: 3,
        why: 'The final sentence carries both halves of the recommendation, and option 3 is that sentence turned round. Option 2 is the escalation the preceding sentence has already ruled out.' }
    ]
  }
});

TOPICS.push(T8);
