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
          { s: 'Passage: a district office builds a sea wall; fishermen and marine biologists object.', g: 'main idea: a defence scheme and the objections to it, the two halves joined.' },
          { s: '<s>The coast road flooded twice in ten years.</s>', g: 'too narrow: true, but it is one supporting detail inside one sentence.' },
          { s: '<s>Concrete is a poor material for coastal engineering.</s>', g: 'too broad: the passage is about one wall, not about coastal engineering.' },
          { s: '<s>The fishing industry is in decline along this coast.</s>', g: 'not in the text: plausible in the world, never claimed in the passage.' }
        ]
      },
      items: [
        { id: 't8l1s1-1', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'The district office has approved a new sea wall along the eastern shore, raising the existing barrier by two metres and adding a stepped concrete apron to absorb wave energy. Engineers say the work will protect around 900 homes from the storm surges that flooded the coast road twice in the last decade. Not everyone is convinced. Local fishermen argue that the higher wall will cut off the slipway their boats have used for generations, and marine biologists warn that hard defences push wave energy sideways, wearing away the beaches on either side. Some residents would prefer mangrove replanting, which absorbs water more gently but takes far longer to establish.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The damage caused by two storm surges on the coast road.',
            'A proposed sea wall and the objections raised against it.',
            'The advantages of mangrove over concrete barriers.',
            'The decline of fishing along the eastern shore.'
          ],
          answer: 1,
          why: 'The passage opens with the approved wall and closes with what critics would prefer, so the main idea is the scheme together with its objections. Option 1 is one supporting detail from a single clause, option 3 is the final sentence only, and option 4 is a plausible claim the passage never makes.' },

        { id: 't8l1s1-2', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'A national museum in the capital has agreed to return a collection of carved stone figures to the hill community they were taken from in the nineteenth century. The transfer will take place over three years, and the museum will keep high-resolution digital copies for study and teaching. Museum staff describe the decision as overdue. Others in the sector are uneasy. Some argue that once one museum returns an object, every later claim becomes harder to refuse, and that smaller institutions lack the staff to assess each request properly. A second worry is practical: the receiving community has asked for help building a climate-controlled store, and nobody has yet said who will pay for it.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The cost of building a climate-controlled store.',
            'Why collectors removed the stone figures in the first place.',
            'A museum decision to return artefacts and the concerns it raises.',
            'The value of digital copies for study and teaching.'
          ],
          answer: 2,
          why: 'First sentence: the museum has agreed to return the figures. Last sentences: others in the sector are uneasy, for two named reasons. Joined, that is option 3. Options 1 and 4 are single details from inside the passage, and option 2 asks a question the text never answers.' },

        { id: 't8l1s1-3', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'After a twelve-month trial, a mid-sized software company in the capital has made the four-day week permanent for all of its staff, with no reduction in pay. Managers report that output held steady and that fewer people left the company during the trial than in any previous year. The result has been read as proof that shorter hours cost nothing. That reading is too quick. Employees told the company that meetings were cut aggressively and that the remaining four days felt considerably more intense. The company also works in a sector where output can be measured in completed tasks; a hospital ward or a delivery depot cannot simply compress its week in the same way.',
          source: 'Written for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'A successful four-day week and the limits of the evidence for it.',
            'The number of employees who left during the trial year.',
            'The reasons hospital wards are difficult places to work.',
            'Proof that shorter hours raise output in every industry.'
          ],
          answer: 0,
          why: 'The passage states the result and then says plainly that the usual reading of it <em>is too quick</em>, which is option 1. Option 2 is one figure from the second sentence, option 3 borrows a phrase from the final clause and is never discussed, and option 4 is the reading the passage rejects.' },

        { id: 't8l1s1-4', type: 'read', tag: 'read-main', level: 'B2',
          passage: 'The city has committed to covering a quarter of its area with tree canopy by 2040, up from about sixteen per cent today. The stated reason is heat: roads shaded by mature trees can be several degrees cooler than bare ones on an April afternoon, and the hottest districts are also the poorest. Planting is the easy part. Foresters point out that a young tree needs watering through at least three dry seasons, and that budgets are usually written for planting days rather than for the decade of care that follows. Residents in two districts have also objected that large roadside trees lift footpaths and block light from ground-floor windows.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The difficulty of watering young trees through their first dry seasons.',
            'Why the poorest districts of the city are also the hottest.',
            'A canopy target and the practical difficulties of reaching it.',
            'A campaign by residents to remove large roadside trees.'
          ],
          answer: 2,
          why: 'The target is announced in the first sentence and <em>planting is the easy part</em> turns the passage to the difficulties, which is option 3. Option 1 is one of those difficulties rather than the point, option 2 is a single clause of explanation, and option 4 exaggerates one objection into a campaign.' },

        { id: 't8l1s1-5', type: 'read', tag: 'read-main', level: 'B2+',
          passage: 'Overnight trains are running again between several cities in the region after two decades of decline. Operators have refitted old sleeping cars and added services that leave in the evening and arrive in time for a morning meeting, which removes both a hotel bill and a flight. Passenger numbers on the new routes have risen every year since they opened. The economics remain awkward. A sleeping car carries far fewer passengers than a seated coach of the same length, and the train occupies a track all night for that small number. Operators also pay access charges in every country they cross, and a single delay at a border can undo an entire timetable.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The cost of refitting an old sleeping car for service.',
            'The return of overnight trains and the economics that constrain it.',
            'The advantages of flying over travelling by train between cities.',
            'Border delays as the greatest problem facing railways in the region.'
          ],
          answer: 1,
          why: 'The passage names a revival and then says <em>the economics remain awkward</em>, so option 2 joins the two halves. Option 1 is one detail never given a figure, option 3 reverses the passage, which treats the train as the thing that removes a flight, and option 4 inflates one clause of the last sentence into a claim about every railway.' }
      ]
    },

    {
      id: 't8l1s2', name: 'A specific detail', cefr: 'B2',
      theory: {
        key: 'A detail question has one home in the text: find it, put your finger on it, and refuse any option you cannot point at.',
        body: [
          'Detail items are the cheapest marks in the paper and among the most often lost, because they are answered from memory. You read the passage, you formed an impression, and the impression is close enough to three of the four options to make all of them feel possible.',
          'The discipline is mechanical. Take the rarest noun in the question, the one least likely to appear elsewhere, and scan back for it or for an obvious synonym. The answer sits within a line or two of it. If you cannot find the place, you have not yet earned an answer.',
          'Distractors here are built from three materials: statements that are true in the world but absent from the passage, the right fact attached to the wrong party, and a reversal of the actual sentence. The wrong-party version catches strong readers. The passage says the minibus operators objected on one ground and the parents on another, and the option quietly swaps them.',
          'Watch the small words whenever a number is involved. <em>More than half</em> and <em>about a third</em> are different answers, and the passage will contain only one of them.'
        ],
        simple: [
          'A detail question has one answer in one place in the text. Find that place before you choose.',
          'Take the least common noun from the question, find it in the passage, and read the line around it.',
          'Wrong options are often true in real life but not written in the passage, or they give the right fact to the wrong person. If you cannot point at the line, do not choose it.'
        ],
        examples: [
          { s: 'Question: <b>who</b> objected because of other contracts?', g: 'scan for "contracts", not for "objected": the rarer word is faster to find.' },
          { s: 'Text: <b>minibus operators</b>, who run school runs between other contracts.', g: 'the line you point at, and the answer must restate it.' },
          { s: '<s>Parents said a nine o\'clock start was hard to fit around other work.</s>', g: 'right fact, wrong party: the commonest detail trap in a two-sided text.' },
          { s: '<s>Late arrivals fell by about a third.</s>', g: 'the text said more than half, so the number does not match.' }
        ]
      },
      items: [
        { id: 't8l1s2-1', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'Since the rules changed in 2022, farmers in the province may no longer give antibiotics to healthy animals simply to prevent disease; a veterinary surgeon must diagnose an infection first. Sales of farm antibiotics fell by about a third in the first two years. Veterinary bodies call the fall encouraging. Farmers point out that the cost of a veterinary visit falls on them, and that on large units an infection can spread through a poultry house before an appointment is available. A further complaint is that imported meat is not held to the same standard, so producers who follow the stricter rules compete with those who do not.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, what must happen before a farm animal is given antibiotics under the 2022 rules?',
          options: [
            'The farmer must record the treatment in a national database.',
            'The animal must be separated from the rest of the flock.',
            'A veterinary surgeon must diagnose an infection.',
            'Sales of farm antibiotics must be shown to have fallen.'
          ],
          answer: 2,
          why: 'Point at the clause: <em>a veterinary surgeon must diagnose an infection first</em>. Options 1 and 2 are reasonable farm practice that this passage never mentions, and option 4 takes the fall in sales, which the text reports as a result of the rules rather than as a condition of treatment.' },

        { id: 't8l1s2-2', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'Since the rules changed in 2022, farmers in the province may no longer give antibiotics to healthy animals simply to prevent disease; a veterinary surgeon must diagnose an infection first. Sales of farm antibiotics fell by about a third in the first two years. Veterinary bodies call the fall encouraging. Farmers point out that the cost of a veterinary visit falls on them, and that on large units an infection can spread through a poultry house before an appointment is available. A further complaint is that imported meat is not held to the same standard, so producers who follow the stricter rules compete with those who do not.',
          source: 'Adapted for classroom use.',
          stem: 'What do farmers say about the cost of a veterinary visit?',
          options: [
            'It is met by the veterinary bodies that supported the rules.',
            'It is refunded once an infection has been confirmed.',
            'It has risen by about a third since 2022.',
            'It falls on the farmers themselves.'
          ],
          answer: 3,
          why: 'The text says the cost <em>falls on them</em>, so option 4 restates the clause. Option 1 hands the bill to the veterinary bodies, who only call the fall encouraging; option 2 invents a refund the passage never mentions; option 3 reuses the one third figure, which the text attaches to the fall in sales and not to costs.' },

        { id: 't8l1s2-3', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'A secondary school on the edge of the city moved its first lesson from eight o\'clock to nine, and kept the change for a full academic year. Attendance in the first period rose, and the number of students recorded as late fell by more than half. Staff also noticed that the corridors were quieter before lessons. The change was not universally popular. Parents who begin work at eight said they now leave children unsupervised at home, and the later finish clashed with football matches against schools that had not moved. Minibus operators, who run school runs between other contracts, said a nine o\'clock start was harder to fit into their day.',
          source: 'Written for classroom use.',
          stem: 'According to the passage, what happened to the number of students recorded as late?',
          options: [
            'It fell by more than half.',
            'It rose slightly in the first period.',
            'It stayed level across the academic year.',
            'It fell by about a fifth.'
          ],
          answer: 0,
          why: 'The passage says lateness fell <em>by more than half</em>. Option 2 gives the rise to the wrong thing, since it is attendance that rose; option 3 contradicts the sentence outright; option 4 shows why the small words matter, because a different quantity is a different answer however reasonable it sounds.' },

        { id: 't8l1s2-4', type: 'read', tag: 'read-detail', level: 'B2',
          passage: 'A secondary school on the edge of the city moved its first lesson from eight o\'clock to nine, and kept the change for a full academic year. Attendance in the first period rose, and the number of students recorded as late fell by more than half. Staff also noticed that the corridors were quieter before lessons. The change was not universally popular. Parents who begin work at eight said they now leave children unsupervised at home, and the later finish clashed with football matches against schools that had not moved. Minibus operators, who run school runs between other contracts, said a nine o\'clock start was harder to fit into their day.',
          source: 'Written for classroom use.',
          stem: 'What reason do the minibus operators give for objecting to the change?',
          options: [
            'They would have to buy additional vehicles for the service.',
            'A nine o\'clock start is harder to fit around their other contracts.',
            'Their drivers are not available before nine in the morning.',
            'The later finish clashes with football matches at other schools.'
          ],
          answer: 1,
          why: 'The operators <em>run school runs between other contracts</em>, which is the clause to point at. Options 1 and 3 are sensible objections the passage never records, and option 4 is a real objection in the text that belongs to the parents and the football matches rather than to the operators.' },

        { id: 't8l1s2-5', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'A survey of a lowland river has found the highest concentrations of plastic fragments not floating on the surface but buried in the sediment of slow-moving bends, where the current drops and particles settle. Samples taken from three such bends held several times more fragments per kilogram than samples from straight, faster stretches. The finding has changed how the clean-up is organised, since surface booms catch only what floats. It has also complicated it. Dredging a bend removes the plastic but also removes the invertebrates that live there, and the provincial water authority has been told that repeated dredging would leave the channel less able to support fish.',
          source: 'Adapted for classroom use.',
          stem: 'Where did the survey find the highest concentrations of plastic fragments?',
          options: [
            'On the surface of the fastest-flowing stretches.',
            'Behind the surface booms installed by the authority.',
            'In the invertebrate populations of the lower river.',
            'In the sediment of slow-moving bends.'
          ],
          answer: 3,
          why: 'The first sentence places them <em>not floating on the surface but buried in the sediment of slow-moving bends</em>. Option 1 is that same sentence reversed, option 2 attaches them to booms that the text says catch only what floats, and option 3 puts them inside the invertebrates, which the passage never claims.' }
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
          { s: '<s>hedge = a line of bushes planted along a boundary</s>', g: 'the famous meaning, and the wrong one in this passage.' },
          { s: 'Text: a <b>safeguard</b> rather than a revival: it preserves, but it makes no new speakers.', g: '"rather than" marks the contrast, and the contrast is the definition.' },
          { s: 'Text: a <b>conflict of interest</b>, since a reporter paid by the district office is unlikely to expose it.', g: '"since" introduces the reason, and the reason spells the term out.' }
        ]
      },
      items: [
        { id: 't8l1s3-1', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'A village on the coast now owns two solar arrays outright. The shares were sold locally, in parcels of a few thousand baht, and the income is spent on a minibus, a medical fund for older residents and a share for the primary school. Supporters call the arrangement a hedge against rising bills: when the price of electricity goes up, the income from the arrays goes up with it, so the village gains on one side what it loses on the other. Critics are less certain. A community that owns generating plant also owns the risk of a burnt-out inverter, and the village has no reserve for a repair of that size.',
          source: 'Written for classroom use.',
          stem: 'In this passage, a <em>hedge</em> is',
          options: [
            'a payment made to the village by the electricity company.',
            'an arrangement that offsets a loss with a matching gain.',
            'a legal limit on how far electricity prices may rise.',
            'a reserve of money set aside for emergency repairs.'
          ],
          answer: 1,
          why: 'The colon defines it: <em>the village gains on one side what it loses on the other</em>. Option 1 invents a payment nobody in the text makes, option 3 invents a price limit the passage never mentions, and option 4 is real text from the last sentence sitting in the wrong slot.' },

        { id: 't8l1s3-2', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'A village on the coast now owns two solar arrays outright. The shares were sold locally, in parcels of a few thousand baht, and the income is spent on a minibus, a medical fund for older residents and a share for the primary school. Supporters call the arrangement a hedge against rising bills: when the price of electricity goes up, the income from the arrays goes up with it, so the village gains on one side what it loses on the other. Critics are less certain. A community that owns generating plant also owns the risk of a burnt-out inverter, and the village has no reserve for a repair of that size.',
          source: 'Written for classroom use.',
          stem: 'In this passage, <em>generating plant</em> means',
          options: [
            'a species grown in order to produce fuel.',
            'the building in which the shares were sold.',
            'the machinery that produces the electricity.',
            'the fund that pays for medical costs.'
          ],
          answer: 2,
          why: 'Read around it: what the community owns is arrays, and what can break is <em>an inverter</em>, so the phrase names machinery. Option 1 is the famous meaning of <em>plant</em> and is wrong here, while options 2 and 4 are both lifted from earlier sentences and put in the wrong slot.' },

        { id: 't8l1s3-3', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'Two hundred local titles have closed in a decade, and the pattern is consistent: advertising revenue moved elsewhere, circulation fell, and the remaining staff were asked to cover more ground with less time. Editors describe the result as a vacuum. District office meetings that were once reported weekly now pass unrecorded, and planning decisions are taken without anyone in the room who is paid to notice. Several district offices have responded by funding reporters themselves. Others call that a conflict of interest, since a reporter whose salary comes from the office is unlikely to be the first to expose it, and argue that the money would be better spent making official papers easier for the public to read.',
          source: 'Adapted for classroom use.',
          stem: 'In this passage, a <em>vacuum</em> is',
          options: [
            'a period in which no district meetings are held.',
            'a gap left where reporting used to happen.',
            'a fall in the circulation of local newspapers.',
            'a machine used for cleaning the newsroom floor.'
          ],
          answer: 1,
          why: 'The sentence after the word defines it: meetings that were once reported weekly <em>now pass unrecorded</em>. Option 1 misreads which thing has stopped, since the meetings still take place; option 3 is one of the causes listed earlier, not the gap itself; option 4 is the everyday meaning of the word.' },

        { id: 't8l1s3-4', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'Two hundred local titles have closed in a decade, and the pattern is consistent: advertising revenue moved elsewhere, circulation fell, and the remaining staff were asked to cover more ground with less time. Editors describe the result as a vacuum. District office meetings that were once reported weekly now pass unrecorded, and planning decisions are taken without anyone in the room who is paid to notice. Several district offices have responded by funding reporters themselves. Others call that a conflict of interest, since a reporter whose salary comes from the office is unlikely to be the first to expose it, and argue that the money would be better spent making official papers easier for the public to read.',
          source: 'Adapted for classroom use.',
          stem: 'In this passage, a <em>conflict of interest</em> means',
          options: [
            'a disagreement between two district offices about funding.',
            'a situation in which a reporter is paid less than before.',
            'an argument between editors and their advertisers.',
            'a position in which duty and personal advantage pull apart.'
          ],
          answer: 3,
          why: '<em>Since</em> introduces the definition: a reporter paid by the office <em>is unlikely to be the first to expose it</em>. Options 1 and 3 are both quarrels between parties and option 2 is a change in pay, which is the word conflict answered on its own with the interest ignored.' },

        { id: 't8l1s3-5', type: 'read', tag: 'read-context', level: 'B2+',
          passage: 'The water authority is fitting meters to every household in the district, replacing a flat charge based on the size of the house. The stated aim is to make consumption visible, since households that can see what they use tend to use less. Early figures suggest a fall of around ten per cent in the first year. The objection is about fairness rather than effect. A large family in a small house uses more water than a single occupant in a large one, and under a flat charge the second was subsidising the first. Metering ends that transfer, and welfare groups have asked for a tariff that protects households where the need is medical rather than careless.',
          source: 'Adapted for classroom use.',
          stem: 'In this passage, <em>subsidising</em> means',
          options: [
            'bearing part of the cost of another household\'s use.',
            'measuring what another household consumes.',
            'paying a reduced charge because of medical need.',
            'receiving a refund when consumption falls.'
          ],
          answer: 0,
          why: 'The sentence sets a large family against a single occupant and then calls the flat charge a <em>transfer</em> that metering ends. Option 2 is what a meter does rather than what a payer does, option 3 is drawn from the last line of the passage and is the wrong slot, and option 4 describes a refund nobody offers.' }
      ]
    }

  ],

  check: {
    id: 't8l1ck', name: 'Systems Check · Finding the answer',
    items: [
      { id: 't8l1ck-1', type: 'read', tag: 'read-main', level: 'B2',
        passage: 'A thousand rai of steep hillside once planted with maize have been taken out of cultivation and left to return to scrub and forest. Low check dams were built across two of the gullies in 2021, and the pools behind them now hold back water that used to run straight off the slope, which has reduced flooding in the village below. Farmers in the surrounding villages are not opposed in principle, but they note that the land taken out of cultivation was also the land that paid for seasonal labour, and that the scheme is funded by a single donor whose commitment runs for fifteen years. What happens in the sixteenth year is a question nobody has answered.',
        source: 'Adapted for classroom use.',
        stem: 'What is the main topic of the passage?',
        options: [
          'A restoration scheme, its early effects and the question it leaves open.',
          'The construction of low check dams across two hillside gullies.',
          'The reasons hillside maize farming has become unprofitable.',
          'A campaign by farmers to reverse the loss of farmland.'
        ],
        answer: 0,
        why: 'The passage runs from the change of land use to the unanswered question about the sixteenth year. Option 2 is one measure inside the scheme, option 3 is an explanation the text never gives, and option 4 is a reversal, since the farmers are <em>not opposed in principle</em>.' },

      { id: 't8l1ck-2', type: 'read', tag: 'read-detail', level: 'B2',
        passage: 'A thousand rai of steep hillside once planted with maize have been taken out of cultivation and left to return to scrub and forest. Low check dams were built across two of the gullies in 2021, and the pools behind them now hold back water that used to run straight off the slope, which has reduced flooding in the village below. Farmers in the surrounding villages are not opposed in principle, but they note that the land taken out of cultivation was also the land that paid for seasonal labour, and that the scheme is funded by a single donor whose commitment runs for fifteen years. What happens in the sixteenth year is a question nobody has answered.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, what effect have the pools behind the check dams had?',
        options: [
          'They have increased the seasonal labour employed on the hillside.',
          'They have returned a thousand rai of maize land to scrub.',
          'They have replaced the farming income lost by nearby villages.',
          'They have held back water and reduced flooding in the village.'
        ],
        answer: 3,
        why: 'Point at the clause: the pools <em>hold back water that used to run straight off the slope</em>. Option 1 reverses the passage, which says the land paid for seasonal labour before; option 2 is true of the scheme as a whole but not of the pools; option 3 is a replacement nobody in the text claims.' },

      { id: 't8l1ck-3', type: 'read', tag: 'read-detail', level: 'B2',
        passage: 'Under the reformed scheme, an employer who takes on a trainee receives a grant only when the trainee completes the final assessment, rather than at the point of hiring. The change was made because too many placements were ending in the first six months, leaving young people with neither a qualification nor a wage. Completion rates have since risen. Small firms say the new timing is the problem. A repair garage or a noodle stall cannot carry the cost of training for two years and wait for the grant at the end, and several have stopped offering places altogether. The scheme, they argue, now suits large employers with the cash to wait.',
        source: 'Adapted for classroom use.',
        stem: 'Under the reformed scheme, when does an employer receive the grant?',
        options: [
          'At the point of hiring the trainee.',
          'When the trainee completes the final assessment.',
          'After the trainee has served six months.',
          'In two instalments across the two years of training.'
        ],
        answer: 1,
        why: 'The first sentence states it and names the old arrangement in the same breath, so option 1 is the system the reform replaced. The six months in option 3 is the length of the failed placements rather than a payment date, and option 4 invents instalments the passage never mentions.' },

      { id: 't8l1ck-4', type: 'read', tag: 'read-context', level: 'B2+',
        passage: 'Under the reformed scheme, an employer who takes on a trainee receives a grant only when the trainee completes the final assessment, rather than at the point of hiring. The change was made because too many placements were ending in the first six months, leaving young people with neither a qualification nor a wage. Completion rates have since risen. Small firms say the new timing is the problem. A repair garage or a noodle stall cannot carry the cost of training for two years and wait for the grant at the end, and several have stopped offering places altogether. The scheme, they argue, now suits large employers with the cash to wait.',
        source: 'Adapted for classroom use.',
        stem: 'In this passage, to <em>carry the cost</em> means',
        options: [
          'to bear the expense until the grant arrives.',
          'to record the cost in the annual accounts.',
          'to pass the cost on to the trainee.',
          'to divide the expense between several small firms.'
        ],
        answer: 0,
        why: 'The clause finishes itself: a firm cannot carry the cost <em>and wait for the grant at the end</em>, which is why large employers with the cash to wait are said to suit the scheme. Option 2 is bookkeeping the text never mentions, option 3 contradicts the wage the trainee is owed, and option 4 invents a sharing arrangement absent from the passage.' },

      { id: 't8l1ck-5', type: 'read', tag: 'read-context', level: 'B2+',
        passage: 'A university team has spent six years recording speakers of hill languages with fewer than a thousand users, and the recordings are now searchable online alongside transcriptions and translations. The archive is described as a safeguard rather than a revival: it preserves what is said, but it does not by itself produce new speakers. Linguists working with the communities make that point sharply. A language survives in kitchens and playgrounds, not on servers, and a community that sees its speech filed away may conclude that the work is finished. Others raise a different issue, asking who controls access to recordings of a grandparent, and whether a university in another country should hold them at all.',
        source: 'Written for classroom use.',
        stem: 'In this passage, a <em>safeguard</em> is',
        options: [
          'a method of teaching a language to new speakers.',
          'a measure that protects what exists without renewing it.',
          'a restriction on who may listen to the recordings.',
          'an agreement about where an archive should be held.'
        ],
        answer: 1,
        why: 'The colon defines it against its opposite: <em>it preserves what is said, but it does not by itself produce new speakers</em>. Option 1 is the revival the text says this is not, and options 3 and 4 are both lifted from the last sentence, where access and ownership are raised as separate issues.' },

      { id: 't8l1ck-6', type: 'read', tag: 'read-main', level: 'B2+',
        passage: 'A university team has spent six years recording speakers of hill languages with fewer than a thousand users, and the recordings are now searchable online alongside transcriptions and translations. The archive is described as a safeguard rather than a revival: it preserves what is said, but it does not by itself produce new speakers. Linguists working with the communities make that point sharply. A language survives in kitchens and playgrounds, not on servers, and a community that sees its speech filed away may conclude that the work is finished. Others raise a different issue, asking who controls access to recordings of a grandparent, and whether a university in another country should hold them at all.',
        source: 'Written for classroom use.',
        stem: 'What is the main idea of the passage?',
        options: [
          'Universities abroad should not hold recordings of endangered languages.',
          'Six years of fieldwork have produced a searchable online archive.',
          'An archive preserves a language but does not keep it alive.',
          'Languages with under a thousand speakers will vanish within a generation.'
        ],
        answer: 2,
        why: 'The opening describes the archive and everything after it qualifies what an archive can do, so the two joined give option 3. Option 2 is the first sentence alone and option 1 is the last clause alone, both too narrow, while option 4 is a prediction the passage never makes.' }
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
          'A cause-and-effect question asks which thing produced which. Before reading the options, write the arrow yourself: <em>trees intercept rain, so less water reaches the drains</em>. Two seconds of work, and it makes three of the four options visibly wrong.',
          'The reversal is the classic distractor. The passage says the mangrove lowers the cost of the wall; the option says the wall lowers the cost of the mangrove. Both sentences contain the same nouns, and a student reading by recognition will accept either of them.',
          'The second trap is <strong>ownership</strong>. Exam questions nearly always name a party: <em>according to critics</em>, <em>the engineers say</em>, <em>the office attributes this to</em>. In a two-sided passage every side draws a different arrow, and an option can state a perfectly accurate relationship taken from the wrong side of the argument. Mark each claim in the margin with the initials of whoever makes it.',
          'The third is the unrelated true statement: something the passage does say, presented as a cause when the passage never joined it to anything. Ask whether the text links the two with <em>because</em>, <em>so</em>, <em>since</em> or <em>attributes to</em>, or merely mentions them in the same paragraph.'
        ],
        simple: [
          'These questions ask what made what happen. Draw an arrow in the margin first: cause, then effect.',
          'Watch for options that turn the arrow round. They use the same words as the passage but the other way about.',
          'Check who is speaking. If the question says "according to critics", the answer must be the arrow the critics draw, not the one the supporters draw.'
        ],
        examples: [
          { s: 'Text: crews with three days off were less often absent, <b>so</b> fewer rounds ran short-handed.', g: 'the arrow: shorter week, then less absence, then fewer missed collections.' },
          { s: '<s>Fewer missed collections allowed the office to shorten the week.</s>', g: 'the arrow reversed: same nouns, opposite claim.' },
          { s: 'Text: traders say the canopy hides their signboards, <b>so</b> passing trade has fallen.', g: 'a different party in the same passage, drawing a different arrow.' },
          { s: '<s>According to the engineers, the trees have reduced passing trade.</s>', g: 'an accurate relationship given to the wrong owner.' }
        ]
      },
      items: [
        { id: 't8l2s1-1', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'When a district on the east side of the city replaced two rows of parking bays with forty semi-mature rain trees, the district office expected complaints about the lost spaces. What it did not expect was the argument that followed about drains. Engineers supporting the scheme say the trees intercept rainfall before it reaches the road, so less water arrives at the drains during a storm and fewer roads flood. Traders on the same road draw a different line: they say the canopy hides their signboards from riders, so passing trade has fallen and two units are now empty. Residents, meanwhile, report cooler bedrooms in April and more leaves in their gutters in October.',
          source: 'Adapted for classroom use.',
          stem: 'According to the engineers who support the scheme, what effect do the trees have?',
          options: [
            'They hide signboards, so passing trade falls.',
            'They intercept rainfall, so less water reaches the drains.',
            'They cool bedrooms in April, so less energy is used.',
            'They drop leaves in October, so gutters block more often.'
          ],
          answer: 1,
          why: 'The engineers own one arrow only: rain is intercepted <em>before it reaches the road</em>. Options 1 and 4 are relationships the passage does draw, but the traders and the residents draw them, and option 3 takes the residents\' cooler bedrooms and adds an energy saving nobody claims.' },

        { id: 't8l2s1-2', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'When a district on the east side of the city replaced two rows of parking bays with forty semi-mature rain trees, the district office expected complaints about the lost spaces. What it did not expect was the argument that followed about drains. Engineers supporting the scheme say the trees intercept rainfall before it reaches the road, so less water arrives at the drains during a storm and fewer roads flood. Traders on the same road draw a different line: they say the canopy hides their signboards from riders, so passing trade has fallen and two units are now empty. Residents, meanwhile, report cooler bedrooms in April and more leaves in their gutters in October.',
          source: 'Adapted for classroom use.',
          stem: 'What cause-and-effect relationship do the traders describe?',
          options: [
            'Deliveries have become slower, so their costs have risen.',
            'Cooler roads have drawn more shoppers, so trade has improved.',
            'The canopy conceals their signboards, so passing trade has fallen.',
            'Flooding has damaged their stock, so two units have closed.'
          ],
          answer: 2,
          why: 'The traders <em>draw a different line</em> from the engineers, and it runs from hidden signboards to lost trade. Option 1 is absent from the passage, option 2 reverses their claim, and option 4 borrows the two empty units but attaches them to flooding, which nobody in the passage does.' },

        { id: 't8l2s1-3', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'A district office moved its refuse and administrative staff to a four-day week without cutting pay, and published the results after a year. Missed rubbish collections fell, and the office attributes this to lower sickness absence: crews who had three days off were less likely to be away on Monday, so fewer rounds ran short-handed. Union representatives accept the figures but attach a condition. They say the gain depends on keeping crew numbers as they are, and warn that if the office uses the same evidence to justify a smaller workforce, the absence rate will climb again. Elected representatives for two of the districts take a third view, arguing that the public counter is now shut on Fridays and that this, not absence, is what residents notice.',
          source: 'Written for classroom use.',
          stem: 'What does the district office say caused the fall in missed collections?',
          options: [
            'A reduction in the number of rounds run each week.',
            'Lower sickness absence among refuse crews.',
            'The closure of the public counter on Fridays.',
            'An increase in the size of the workforce.'
          ],
          answer: 1,
          why: 'The verb of attribution is in the text: the office <em>attributes this to lower sickness absence</em>. Option 1 is never claimed, option 3 is a real consequence of the change raised by the elected representatives and explains nothing about collections, and option 4 reverses the unions\' warning about a smaller workforce.' },

        { id: 't8l2s1-4', type: 'read', tag: 'read-cause', level: 'B2+',
          passage: 'A district office moved its refuse and administrative staff to a four-day week without cutting pay, and published the results after a year. Missed rubbish collections fell, and the office attributes this to lower sickness absence: crews who had three days off were less likely to be away on Monday, so fewer rounds ran short-handed. Union representatives accept the figures but attach a condition. They say the gain depends on keeping crew numbers as they are, and warn that if the office uses the same evidence to justify a smaller workforce, the absence rate will climb again. Elected representatives for two of the districts take a third view, arguing that the public counter is now shut on Fridays and that this, not absence, is what residents notice.',
          source: 'Written for classroom use.',
          stem: 'According to the union representatives, what would follow if crew numbers were cut?',
          options: [
            'Missed collections would be recorded in a different way.',
            'The public counter would have to reopen on Fridays.',
            'Staff would return to a five-day week within a year.',
            'The rate of sickness absence would rise again.'
          ],
          answer: 3,
          why: 'Their arrow is conditional: the gain <em>depends on keeping crew numbers as they are</em>, and cutting them would make absence <em>climb again</em>. Options 1 and 3 go a step further than any sentence in the passage, and option 2 belongs to the elected representatives and their point about the counter.' },

        { id: 't8l2s1-5', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Sampling along a stretch of river below a busy expressway has traced a large share of the smallest plastic particles to road run-off rather than to litter. Rain washes fragments worn from tyres and road markings into the drains, the drains discharge into the river, and the particles settle where the current slows. The provincial water authority proposes filter units in the drains. Highway engineers reply that the units need emptying every few weeks and that the budget assumes an annual visit, so in practice they would overflow. Campaigners who want a ban on roadside litter argue that the study lets riders and drivers off too lightly, though the sampling did not measure litter separately.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, what causes the smallest particles to reach the river?',
          options: [
            'Litter dropped at the roadside is blown into the water.',
            'Filter units overflow between their annual visits.',
            'Rain carries fragments from tyres and road markings into the drains.',
            'Dredging stirs settled particles back into the current.'
          ],
          answer: 2,
          why: 'The chain is written out: rain, then drains, then the river. Option 1 is the explanation the sampling <em>rejects</em>, option 2 describes something that has not happened yet, since the filter units are only proposed, and option 4 brings in dredging, which this passage never mentions.' }
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
          { s: 'A paragraph of dates, figures and what happened first.', g: 'the job is giving background, not making a case.' },
          { s: 'A paragraph ending <b>it proposes that the boundary be redrawn</b>.', g: 'the job is recommending, and the verb is in the text.' },
          { s: '<s>To demand that the programme be closed down.</s>', g: 'escalation: a difficulty raised is not a demand made.' }
        ]
      },
      items: [
        { id: 't8l2s2-1', type: 'read', tag: 'read-purpose', level: 'B2+',
          passage: 'A national museum has begun publishing the full acquisition history of every object in its regional galleries, including the gaps where the record is missing. The catalogue entries now say plainly when an object arrived without documentation, and the museum has invited claims from communities who recognise what they see.\n\nThe response from parts of the sector has been cool. Some specialists argue that publishing gaps invites claims that cannot be tested, and that a missing receipt from 1890 is not evidence of theft. Others say the opposite: that the museum has made a display of transparency while keeping the objects, and that a catalogue entry costs nothing. Both camps agree on one point, which is that the museum has not said what it will do when a claim arrives.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author doing in the second paragraph?',
          options: [
            'Explaining how the new catalogue entries are written.',
            'Setting out the criticisms the policy has attracted.',
            'Recommending that the museum return the disputed objects.',
            'Describing the history of the regional galleries.'
          ],
          answer: 1,
          why: 'The paragraph is built from <em>some specialists argue</em> and <em>others say the opposite</em>, which is the signature of a paragraph presenting objections. Option 1 is the job of the first paragraph, option 3 is a recommendation the writer never makes, and option 4 is background the passage never supplies.' },

        { id: 't8l2s2-2', type: 'read', tag: 'read-purpose', level: 'B2+',
          passage: 'A national museum has begun publishing the full acquisition history of every object in its regional galleries, including the gaps where the record is missing. The catalogue entries now say plainly when an object arrived without documentation, and the museum has invited claims from communities who recognise what they see.\n\nThe response from parts of the sector has been cool. Some specialists argue that publishing gaps invites claims that cannot be tested, and that a missing receipt from 1890 is not evidence of theft. Others say the opposite: that the museum has made a display of transparency while keeping the objects, and that a catalogue entry costs nothing. Both camps agree on one point, which is that the museum has not said what it will do when a claim arrives.',
          source: 'Adapted for classroom use.',
          stem: 'What is the purpose of the first paragraph?',
          options: [
            'To describe the measure the museum has taken.',
            'To warn readers that museum records are often forged.',
            'To argue that communities should not make claims.',
            'To compare this museum with others in the sector.'
          ],
          answer: 0,
          why: 'Two sentences of plain statement, with no <em>however</em> and no verb of argument, do the job of describing. Option 2 invents a warning, option 3 reverses the museum\'s invitation to claim, and the sector appears only in the paragraph that follows, where it disagrees rather than being compared.' },

        { id: 't8l2s2-3', type: 'read', tag: 'read-purpose', level: 'B2+',
          passage: 'An association set up by readers has bought a weekly paper that was about to close, and it now runs on subscriptions rather than advertising. The association publishes its accounts, employs three reporters, and has committed to covering every district office meeting in the area.\n\nIt would be easy to read this as a model for the rest of the country, and some commentators have done so. The arithmetic is less encouraging. The district is unusually prosperous, its readers are unusually old, and older readers are the ones still willing to pay for a printed paper. An association in a poorer district with a younger population would need three or four times the number of subscribers to reach the same income, and nobody has shown that those subscribers exist.',
          source: 'Written for classroom use.',
          stem: 'What is the author\'s main purpose in the second paragraph?',
          options: [
            'To praise the association for publishing its accounts.',
            'To explain how subscriptions are collected in the district.',
            'To question whether the model can be copied elsewhere.',
            'To recommend that every district set up a readers\' association.'
          ],
          answer: 2,
          why: 'The paragraph opens by naming a reading and then says <em>the arithmetic is less encouraging</em>, which is questioning rather than praising. Option 1 belongs to the first paragraph, option 2 describes a mechanism the text never explains, and option 4 is the claim the paragraph exists to undermine.' },

        { id: 't8l2s2-4', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'An association set up by readers has bought a weekly paper that was about to close, and it now runs on subscriptions rather than advertising. The association publishes its accounts, employs three reporters, and has committed to covering every district office meeting in the area.\n\nIt would be easy to read this as a model for the rest of the country, and some commentators have done so. The arithmetic is less encouraging. The district is unusually prosperous, its readers are unusually old, and older readers are the ones still willing to pay for a printed paper. An association in a poorer district with a younger population would need three or four times the number of subscribers to reach the same income, and nobody has shown that those subscribers exist.',
          source: 'Written for classroom use.',
          stem: 'Why does the author mention the age of the district\'s readers?',
          options: [
            'To show why the association employs only three reporters.',
            'To explain why the paper was about to close.',
            'To praise older readers for supporting local journalism.',
            'To support the claim that this district is not typical.'
          ],
          answer: 3,
          why: 'The age of the readers is one of three respects in which the district is called <em>unusual</em>, and it feeds directly into the arithmetic about a poorer, younger district. Option 1 joins two facts the text never joins, option 2 belongs to the paper before it was bought, and option 3 mistakes an explanation for praise.' },

        { id: 't8l2s2-5', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'A study following two thousand students for three years found that those at schools with a later start slept about twenty-five minutes more on school nights and missed fewer first lessons. The effect on examination results was small and not consistent across subjects.\n\nThat last sentence is the one worth pausing on. Coverage of the study has tended to report the sleep finding and stop, which turns a modest result into a promise. The authors themselves were careful: they wrote that a later start is cheap and probably helpful, not that it raises grades. Readers who want a single change that will lift results are not going to find it here, and the study does not claim to offer one.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author doing in the second paragraph?',
          options: [
            'Summarising the study\'s findings for a general audience.',
            'Correcting the way the study has been reported.',
            'Recommending a later start for every secondary school.',
            'Criticising the authors for a weak method.'
          ],
          answer: 1,
          why: 'The paragraph says coverage <em>turns a modest result into a promise</em> and then restates what the authors actually wrote, which is correcting. Option 1 is the job of the first paragraph, option 3 is a recommendation the passage refuses to make, and option 4 misplaces the blame, since the passage calls the authors careful.' }
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
          passage: 'A former sugar-cane estate has been converted to open woodland pasture, with local breeds of cattle and pigs grazing at low density instead of a single crop. The owners no longer sell cane; the income now comes from meat, from campsites and from payments for storing carbon and slowing water. Neighbouring cane farmers are watching the accounts rather than the wildlife. They note that the estate was bought outright and carries no mortgage, and that the public payments it relies on are agreed for ten years at a time. One neighbour put it drily: the birds are wonderful, and he cannot tell his bank about the birds.',
          source: 'Written for classroom use.',
          stem: 'What can be inferred about the neighbouring farmers\' main concern?',
          options: [
            'They believe the estate has exaggerated its wildlife claims.',
            'They doubt that the estate\'s finances could be reproduced on their own farms.',
            'They intend to convert their own land within ten years.',
            'They expect the public payments to be withdrawn immediately.'
          ],
          answer: 1,
          why: 'They are <em>watching the accounts rather than the wildlife</em>, and the two things they note are the absence of a mortgage and the ten-year term of the payments. Option 1 fails the test, since the passage is equally consistent with the wildlife being real, and options 3 and 4 each take a step the text never takes.' },

        { id: 't8l2s3-2', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'A former sugar-cane estate has been converted to open woodland pasture, with local breeds of cattle and pigs grazing at low density instead of a single crop. The owners no longer sell cane; the income now comes from meat, from campsites and from payments for storing carbon and slowing water. Neighbouring cane farmers are watching the accounts rather than the wildlife. They note that the estate was bought outright and carries no mortgage, and that the public payments it relies on are agreed for ten years at a time. One neighbour put it drily: the birds are wonderful, and he cannot tell his bank about the birds.',
          source: 'Written for classroom use.',
          stem: 'What does the remark about the bank suggest?',
          options: [
            'The neighbour has been refused a loan by his bank.',
            'The estate has borrowed heavily to fund the conversion.',
            'Lenders judge a farm by its income rather than by its wildlife.',
            'Banks have begun to fund conversions of this kind directly.'
          ],
          answer: 2,
          why: 'The joke only works if a bank wants figures, which is what the remark forces. Option 1 goes further than the text, which never says he asked for a loan; option 2 is contradicted outright, since the estate <em>was bought outright and carries no mortgage</em>; option 4 appears nowhere in the passage.' },

        { id: 't8l2s3-3', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'The co-operative that owns the two solar arrays has applied to add a third, and has been told that the local grid connection is full. It may either wait for a reinforcement scheduled for 2031 or pay for the works itself, which would cost more than the array. The board has asked members to vote on a third option: build the array, accept a connection that can be switched off at busy times, and sell less electricity than the panels could produce. The chair has been careful to say that the figures put to members assume the current price of electricity holds for fifteen years.',
          source: 'Adapted for classroom use.',
          stem: 'What can be inferred about the third option put to members?',
          options: [
            'It would produce no income at all for the co-operative.',
            'It would be refused by the operator of the local grid.',
            'It would earn less than an array with a full connection.',
            'It would cost more than paying for the reinforcement.'
          ],
          answer: 2,
          why: 'A connection that <em>can be switched off at busy times</em> means selling <em>less electricity than the panels could produce</em>, and less electricity sold is less income. Option 1 exaggerates less into none, option 2 is contradicted by the fact that the connection is on offer, and option 4 reverses the costs the passage gives.' },

        { id: 't8l2s3-4', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'The co-operative that owns the two solar arrays has applied to add a third, and has been told that the local grid connection is full. It may either wait for a reinforcement scheduled for 2031 or pay for the works itself, which would cost more than the array. The board has asked members to vote on a third option: build the array, accept a connection that can be switched off at busy times, and sell less electricity than the panels could produce. The chair has been careful to say that the figures put to members assume the current price of electricity holds for fifteen years.',
          source: 'Adapted for classroom use.',
          stem: 'What does the chair\'s remark about the figures suggest?',
          options: [
            'The members have already rejected the third option.',
            'The price of electricity is fixed for the next fifteen years.',
            'The co-operative intends to sell its arrays in 2031.',
            'The projection would fail if electricity prices fell.'
          ],
          answer: 3,
          why: 'An assumption is worth naming only because it might not hold, so the warning is about what happens if the price does not. Option 1 is contradicted by the vote still to come, option 2 turns the assumption into a fact, which is the opposite of the chair\'s point, and option 3 has the co-operative selling its arrays, which the passage never mentions.' },

        { id: 't8l2s3-5', type: 'read', tag: 'read-infer', level: 'C1',
          passage: 'Two years after the grant was moved to the end of the placement, the number of trainees completing has risen and the number starting has fallen. The department publishes both figures but quotes only the first in its announcements. A committee of employers has asked for the two to be published together in a single table, and the department has replied that the figures are already public. It has also pointed out that a completion rate calculated from a smaller intake is not comparable with one calculated from a larger one. A trade body for small firms has said that it will publish the table itself if the department will not.',
          source: 'Written for classroom use.',
          stem: 'What can be inferred about the department\'s position?',
          options: [
            'It disputes the accuracy of the completion figures.',
            'It prefers the figure that shows the reform in a better light.',
            'It intends to return the grant to the point of hiring.',
            'It has refused to make the starting figures public.'
          ],
          answer: 1,
          why: 'It publishes both and quotes only the flattering one, and it answers a request for a single table by saying the figures are already public. Option 1 is contradicted by its own use of the completion figure, option 3 is never suggested anywhere, and option 4 is contradicted by that same reply.' }
      ]
    }

  ],

  check: {
    id: 't8l2ck', name: 'Systems Check · Reading between the lines',
    items: [
      { id: 't8l2ck-1', type: 'read', tag: 'read-cause', level: 'B2+',
        passage: 'The agency has breached an earth bund on one stretch of coast and allowed the tide back onto two hundred rai of low-lying rice land. The reasoning is that mangrove in front of a wall takes the energy out of a wave before it arrives, so the wall behind can be lower and cheaper to maintain.\n\nThe farmers who worked the land are not persuaded by the arithmetic. They point out that the saving is the agency\'s and the loss is theirs, that the compensation was calculated on the land\'s value as rough pasture rather than on the crop it produced, and that no figure has been put on the irrigation ditches that now serve nothing. A conservation group has welcomed the scheme while asking who will monitor the mangrove once it has grown.',
        source: 'Adapted for classroom use.',
        stem: 'According to the agency, what is the effect of mangrove in front of a wall?',
        options: [
          'It reduces the energy of the waves that reach the wall.',
          'It raises the value of the farmland behind the wall.',
          'It removes the need for a wall altogether.',
          'It drains the low-lying fields more quickly.'
        ],
        answer: 0,
        why: 'The reasoning is stated: the mangrove <em>takes the energy out of a wave before it arrives</em>, so the wall can be lower. Option 2 is nowhere in the text, option 3 escalates lower into unnecessary, and option 4 belongs to the ditches that now serve nothing.' },

      { id: 't8l2ck-2', type: 'read', tag: 'read-purpose', level: 'B2+',
        passage: 'The agency has breached an earth bund on one stretch of coast and allowed the tide back onto two hundred rai of low-lying rice land. The reasoning is that mangrove in front of a wall takes the energy out of a wave before it arrives, so the wall behind can be lower and cheaper to maintain.\n\nThe farmers who worked the land are not persuaded by the arithmetic. They point out that the saving is the agency\'s and the loss is theirs, that the compensation was calculated on the land\'s value as rough pasture rather than on the crop it produced, and that no figure has been put on the irrigation ditches that now serve nothing. A conservation group has welcomed the scheme while asking who will monitor the mangrove once it has grown.',
        source: 'Adapted for classroom use.',
        stem: 'What is the author doing in the second paragraph?',
        options: [
          'Explaining how the earth bund was breached.',
          'Recommending compensation at a higher rate.',
          'Setting out the objections of those who lost land.',
          'Comparing this stretch of coast with others in the province.'
        ],
        answer: 2,
        why: '<em>They point out</em>, three times over, is the grammar of a paragraph presenting the case against. Option 1 belongs to the first paragraph, option 2 is what the objectors might want while the writer only sets out their case, and option 4 compares nothing, since one stretch is all the passage discusses.' },

      { id: 't8l2ck-3', type: 'read', tag: 'read-purpose', level: 'C1',
        passage: 'The team has begun returning copies of every recording to the hill community it came from, on hard drives that do not need an internet connection, together with the software needed to read them.\n\nThis is a smaller step than it sounds, and the team says so. A hard drive fails, the software will not run on a machine bought in ten years\' time, and nobody in the village is paid to look after either. The team has asked its university for a fund to replace the drives every five years. The request is with a committee. Meanwhile the master copies stay on the university\'s servers, which are backed up nightly.',
        source: 'Written for classroom use.',
        stem: 'What is the author\'s purpose in the second paragraph?',
        options: [
          'To describe the contents of the returned hard drives.',
          'To explain why the step is less secure than it appears.',
          'To praise the university for funding the archive.',
          'To argue that communities should not be given copies.'
        ],
        answer: 1,
        why: 'It opens with <em>this is a smaller step than it sounds</em> and then lists three ways the copies can be lost, which is qualifying a claim. Option 1 is the first paragraph\'s job, option 3 fails on the facts as well, since the fund has not been granted, and option 4 is an argument the team never makes.' },

      { id: 't8l2ck-4', type: 'read', tag: 'read-infer', level: 'C1',
        passage: 'The team has begun returning copies of every recording to the hill community it came from, on hard drives that do not need an internet connection, together with the software needed to read them.\n\nThis is a smaller step than it sounds, and the team says so. A hard drive fails, the software will not run on a machine bought in ten years\' time, and nobody in the village is paid to look after either. The team has asked its university for a fund to replace the drives every five years. The request is with a committee. Meanwhile the master copies stay on the university\'s servers, which are backed up nightly.',
        source: 'Written for classroom use.',
        stem: 'What can be inferred from the last two sentences?',
        options: [
          'The village copies are less securely preserved than the university\'s.',
          'The university has refused to fund the replacement drives.',
          'The community asked for the recordings to be returned.',
          'The master copies will be deleted once the drives are delivered.'
        ],
        answer: 0,
        why: 'Nightly backups on one side, an unfunded request on the other: the comparison is forced. Option 2 fails the test, because a request sitting with a committee is undecided rather than refused; option 3 is never stated; option 4 is contradicted by the master copies staying where they are.' },

      { id: 't8l2ck-5', type: 'read', tag: 'read-cause', level: 'C1',
        passage: 'A new overnight train between the capital and a northern city sold out for most of its first year, and a second set of coaches has been added. The economics turn on a detail passengers never see: the train is stabled all day at the far end, so a set of carriages earns money once in twenty-four hours, where a daytime train earns it four or five times.\n\nThe operator\'s answer is to run the same set on a daytime service before it returns overnight, which raises the use made of the carriages but leaves no slack for delay. Rail unions have supported the route while warning that the plan depends on punctuality the network has not delivered for years, and that the first serious delay will remove the daytime working rather than the overnight one, because the overnight train is the one that has been advertised.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, why does an overnight set earn less than a daytime set?',
        options: [
          'It carries fewer passengers than a seated coach of the same length.',
          'It makes only one journey in twenty-four hours.',
          'It is delayed more often than a daytime train on the same line.',
          'It has to be stabled for maintenance every night.'
        ],
        answer: 1,
        why: 'The passage gives one reason and gives it plainly: one journey against four or five. Option 1 is true of sleeping cars in general and would be right in another text, but this passage never says it; option 3 belongs to the unions\' warning about punctuality; option 4 reverses the reason, since the set is stabled because it has nothing else to do.' },

      { id: 't8l2ck-6', type: 'read', tag: 'read-infer', level: 'C1',
        passage: 'A new overnight train between the capital and a northern city sold out for most of its first year, and a second set of coaches has been added. The economics turn on a detail passengers never see: the train is stabled all day at the far end, so a set of carriages earns money once in twenty-four hours, where a daytime train earns it four or five times.\n\nThe operator\'s answer is to run the same set on a daytime service before it returns overnight, which raises the use made of the carriages but leaves no slack for delay. Rail unions have supported the route while warning that the plan depends on punctuality the network has not delivered for years, and that the first serious delay will remove the daytime working rather than the overnight one, because the overnight train is the one that has been advertised.',
        source: 'Adapted for classroom use.',
        stem: 'What do the unions expect to happen after a serious delay?',
        options: [
          'The overnight service will be withdrawn before the daytime one.',
          'The second set of coaches will be sold to another operator.',
          'The daytime working will be cancelled rather than the overnight train.',
          'The operator will abandon the route altogether.'
        ],
        answer: 2,
        why: 'The reason is given in the same sentence: the overnight train is <em>the one that has been advertised</em>, so it is the working that is protected. Option 1 is that sentence reversed, option 2 is never mentioned, and option 4 is the escalation.' }
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
          passage: 'Five years after some of the strictest national restrictions in the region came into force, the country\'s farms use less than half the antibiotic they did, and resistant infections in hospital patients have stopped rising. Veterinary bodies and public health officials treat the two facts as connected, and argue that the fall on farms has slowed the spread of resistant bacteria into the wider population.\n\nFarming organisations do not dispute the fall, but they dispute the arrow. They point out that hospital prescribing was tightened over the same period, that resistant bacteria travel between people far more readily than from animals to people, and that the credit now being claimed for the farming rules may belong to the hospitals. They add a cost of their own: on units where an outbreak can move through a poultry house in a day, waiting for a diagnosis has meant losses that nobody has counted.\n\nBoth sides ask for the same thing, which is a study that separates the two changes instead of reporting them together.',
          source: 'Adapted for classroom use.',
          stem: 'What causal claim do the veterinary bodies and public health officials make?',
          options: [
            'Tighter hospital prescribing has reduced antibiotic use on farms.',
            'Lower use on farms has slowed the spread of resistant bacteria to people.',
            'Resistant infections in hospitals have caused farms to change practice.',
            'Waiting for a diagnosis has caused uncounted losses on large units.'
          ],
          answer: 1,
          why: 'They <em>treat the two facts as connected</em> and the arrow runs from the farms outwards. Option 1 borrows the hospitals from the other side of the argument, option 3 reverses the direction, and option 4 is an accurate claim owned by the farming organisations.' },

        { id: 't8l3s1-2', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Five years after some of the strictest national restrictions in the region came into force, the country\'s farms use less than half the antibiotic they did, and resistant infections in hospital patients have stopped rising. Veterinary bodies and public health officials treat the two facts as connected, and argue that the fall on farms has slowed the spread of resistant bacteria into the wider population.\n\nFarming organisations do not dispute the fall, but they dispute the arrow. They point out that hospital prescribing was tightened over the same period, that resistant bacteria travel between people far more readily than from animals to people, and that the credit now being claimed for the farming rules may belong to the hospitals. They add a cost of their own: on units where an outbreak can move through a poultry house in a day, waiting for a diagnosis has meant losses that nobody has counted.\n\nBoth sides ask for the same thing, which is a study that separates the two changes instead of reporting them together.',
          source: 'Adapted for classroom use.',
          stem: 'What alternative explanation do the farming organisations offer?',
          options: [
            'That resistant infections were never in fact rising.',
            'That antibiotic use on farms has not actually fallen.',
            'That tighter hospital prescribing may account for the change.',
            'That resistance passes from people to animals rather than the reverse.'
          ],
          answer: 2,
          why: 'They dispute the arrow, not the fall, and name hospital prescribing as the rival cause. Option 1 is a denial the passage never makes, option 2 is exactly the denial ruled out by <em>do not dispute the fall</em>, and option 4 turns their point about how resistance travels the wrong way round.' },

        { id: 't8l3s1-3', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'Five years after some of the strictest national restrictions in the region came into force, the country\'s farms use less than half the antibiotic they did, and resistant infections in hospital patients have stopped rising. Veterinary bodies and public health officials treat the two facts as connected, and argue that the fall on farms has slowed the spread of resistant bacteria into the wider population.\n\nFarming organisations do not dispute the fall, but they dispute the arrow. They point out that hospital prescribing was tightened over the same period, that resistant bacteria travel between people far more readily than from animals to people, and that the credit now being claimed for the farming rules may belong to the hospitals. They add a cost of their own: on units where an outbreak can move through a poultry house in a day, waiting for a diagnosis has meant losses that nobody has counted.\n\nBoth sides ask for the same thing, which is a study that separates the two changes instead of reporting them together.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author doing in the final paragraph?',
          options: [
            'Identifying the point on which the two sides agree.',
            'Recommending that the restrictions now be withdrawn.',
            'Judging which side\'s explanation is the correct one.',
            'Summarising the losses reported on large units.'
          ],
          answer: 0,
          why: '<em>Both sides ask for the same thing</em> is the grammar of common ground. Option 2 is a recommendation nobody in the text makes, option 3 is what a reader wants and what the writer refuses to supply, and option 4 is one clause from the paragraph before.' },

        { id: 't8l3s1-4', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'A large public hospital has trialled a four-day week for its administrative and laboratory staff, though not for nurses on the wards. Reported sickness absence fell, and the hospital says recruitment to hard-to-fill laboratory posts became easier, which it attributes to the shorter week rather than to pay, since pay did not change.\n\nWard staff have raised a fairness objection rather than a practical one. They accept that a laboratory can compress its week and a ward cannot, but they argue that a benefit available to one group and not another will show up in morale long before it shows up in a spreadsheet, and that the hospital has published no plan for extending it. Finance officers add a separate warning: the laboratory result was measured over eight months, which include no rainy season, and the rainy season is when the hospital\'s absence figures are made.\n\nThe hospital has agreed to run the trial for a further year before deciding.',
          source: 'Written for classroom use.',
          stem: 'What does the hospital say caused laboratory recruitment to improve?',
          options: [
            'An increase in the pay offered for laboratory posts.',
            'A fall in sickness absence among the ward staff.',
            'The introduction of the shorter working week.',
            'The decision to extend the trial for a further year.'
          ],
          answer: 2,
          why: 'The hospital <em>attributes it to the shorter week rather than to pay, since pay did not change</em>, which rules out option 1 in the same clause. Option 2 gives the fall in absence to the ward staff, who were not in the trial, and option 4 comes after the result and cannot have caused it.' },

        { id: 't8l3s1-5', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'A large public hospital has trialled a four-day week for its administrative and laboratory staff, though not for nurses on the wards. Reported sickness absence fell, and the hospital says recruitment to hard-to-fill laboratory posts became easier, which it attributes to the shorter week rather than to pay, since pay did not change.\n\nWard staff have raised a fairness objection rather than a practical one. They accept that a laboratory can compress its week and a ward cannot, but they argue that a benefit available to one group and not another will show up in morale long before it shows up in a spreadsheet, and that the hospital has published no plan for extending it. Finance officers add a separate warning: the laboratory result was measured over eight months, which include no rainy season, and the rainy season is when the hospital\'s absence figures are made.\n\nThe hospital has agreed to run the trial for a further year before deciding.',
          source: 'Written for classroom use.',
          stem: 'Why do the finance officers mention that the trial lasted eight months?',
          options: [
            'To show that the trial ran longer than comparable studies.',
            'To argue that the result has not yet been tested in the rainy season.',
            'To explain why ward staff were left out of the trial.',
            'To recommend that the hospital abandon the four-day week.'
          ],
          answer: 1,
          why: 'The length is raised only to make the next point: those months <em>include no rainy season</em>, and the rainy season is when the absence figures are made. Option 1 compares the trial with studies the passage never mentions, option 3 belongs to the ward staff and the nature of a ward, and option 4 is the escalation these items always offer.' }
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
          passage: 'The city\'s canopy programme has planted 40,000 trees in six years, and a survey this year found that just over a fifth of them are dead or failing. The losses are concentrated in roads where the planting pits are small and the surrounding footpath is sealed, so water runs across the surface instead of into the soil. Replacing the dead trees would cost about the same as the original planting. The programme\'s own report does not recommend a larger planting target. It recommends that no further trees be planted in sealed pits until the pit design is changed, and that the money set aside for next year\'s planting be spent on watering and on opening the ground around the trees already in place.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action does the report imply is necessary?',
          options: [
            'Planting more trees each year to offset the losses.',
            'Replacing every failing tree at the cost of the original planting.',
            'Redirecting next year\'s money to care and to redesigned pits.',
            'Suspending the canopy programme until the survey is repeated.'
          ],
          answer: 2,
          why: 'The closing sentence proposes exactly two things, watering and opening the ground. The sentence before it rules out option 1 by saying the report <em>does not recommend a larger planting target</em>, option 2 is costed in the middle of the passage and never proposed, and option 4 is the escalation.' },

        { id: 't8l3s2-2', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'Two years after universal metering, average household consumption in the district is down by nine per cent, but the number of households in arrears has doubled. The authority\'s review identifies a group it calls high-need rather than high-use: households with a medical condition requiring frequent washing, and households of six or more sharing two small rooms. For these, a meter converts a fixed cost into a rising one that they cannot reduce by behaviour. The review stops short of proposing that metering be abandoned. Its recommendation is a capped tariff for registered high-need households, funded from the general charge, together with a simpler process for joining the register.',
          source: 'Written for classroom use.',
          stem: 'What does the review recommend?',
          options: [
            'Removing meters from households that have fallen into arrears.',
            'Abandoning universal metering across the district.',
            'Raising the general charge for every household by nine per cent.',
            'A capped tariff for high-need households, with easier registration.'
          ],
          answer: 3,
          why: 'The last sentence states the proposal. Option 1 is never suggested, the sentence before removes option 2 in advance, since the review <em>stops short of proposing that metering be abandoned</em>, and option 3 reuses the nine per cent from the opening line for a purpose the text never gives it.' },

        { id: 't8l3s2-3', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'When the stone figures were returned, the receiving museum had one climate-controlled room and nobody trained to look after them. Within a year, two of the figures showed salt damage that would have been caught earlier by a trained eye. Neither institution has blamed the other in public. The joint statement they have issued does not ask for the objects to come back, and it does not ask for more rooms. It asks that any future transfer be agreed together with a funded post, a conservator paid for a fixed term by the returning institution and employed by the receiving one, and that the handover date be set by the readiness of that post rather than by the anniversary of the agreement.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action does the joint statement propose?',
          options: [
            'Returning the damaged figures to the original museum.',
            'Funding a conservator post before any future transfer.',
            'Building additional climate-controlled rooms at both museums.',
            'Halting all future transfers between the two institutions.'
          ],
          answer: 1,
          why: 'The statement asks for a funded post and for the handover date to follow it. The preceding sentence disposes of options 1 and 3 together, since it <em>does not ask for the objects to come back</em> and <em>does not ask for more rooms</em>, and option 4 is a halt nobody proposes.' },

        { id: 't8l3s2-4', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'The catchment study ends with a recommendation that surprised the volunteers who collected the samples. They had expected a call for more clean-up days. Instead, the authors note that the fragments in the sediment are already broken down beyond the size that hand-picking can recover, and that a volunteer day removes the visible litter while leaving the measured problem untouched. Their proposal is that the volunteer effort be redirected to sampling rather than collecting, on the grounds that a monthly record from thirty sites would tell the provincial authority where the particles enter the river, which is the one thing nobody currently knows.',
          source: 'Written for classroom use.',
          stem: 'What follow-up action do the authors propose?',
          options: [
            'Increasing the number of clean-up days across the catchment.',
            'Dredging the bends in which the fragments have settled.',
            'Using volunteers to take regular samples rather than to collect litter.',
            'Banning the types of plastic found in the sediment.'
          ],
          answer: 2,
          why: '<em>Their proposal is</em> marks the sentence, and it redirects the same effort rather than adding to it. Option 1 is named in the passage as the thing the volunteers expected and did not get, option 2 is never raised here at all, and option 4 is the escalation.' },

        { id: 't8l3s2-5', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'The association that runs nine schools has read the evidence on start times and has decided not to move the first lesson in eight of them. Its reasoning is that the transport contracts, the shared football fixtures and the examination-year timetable are built around the current hours, and that a change in one school alone produces most of the disruption and little of the benefit. The paper it has published is not a rejection of later starts. It proposes that the question be taken to the provincial education office so that the schools, the minibus operators and the fixture organisers can move together, and that one school continue the later start as a test in the meantime.',
          source: 'Adapted for classroom use.',
          stem: 'What does the association propose should happen next?',
          options: [
            'All nine schools should move to a later start together.',
            'Later starts should be abandoned across the nine schools.',
            'The transport contracts should be cancelled and retendered.',
            'The question should go to the provincial education office for a joint decision.'
          ],
          answer: 3,
          why: 'The closing sentence proposes a joint move through the provincial education office, with one school continuing the later start as a test. Option 1 is refused in the first sentence, option 2 is ruled out in advance, since the paper <em>is not a rejection of later starts</em>, and option 3 turns one reason into a demand the text never makes.' }
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
          passage: 'Eleven villages on a windy plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few thousand baht. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, roof repairs for the oldest houses and a scholarship for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose scholarships depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The financial arrangements used to buy six turbines on the plateau.',
            'A community-owned wind farm and the disputes it has not settled.',
            'The objections of ecologists to wind power on high ground.',
            'A plan to remove the turbines from the plateau.'
          ],
          answer: 1,
          why: 'The opening describes the purchase and the second paragraph says plainly that ownership <em>is not a solution to the disagreements that surround wind power</em>. Option 1 is the first paragraph alone, option 3 is half of the second, and option 4 is a plan the review never makes.' },

        { id: 't8l3s3-2', type: 'read', tag: 'read-detail', level: 'C1',
          passage: 'Eleven villages on a windy plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few thousand baht. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, roof repairs for the oldest houses and a scholarship for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose scholarships depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'According to the passage, how is the annual surplus used?',
          options: [
            'It is divided equally among all households on the plateau.',
            'It is paid to the developer that built the wind farm.',
            'Half repays the loan and the rest funds local schemes.',
            'It is held entirely in a decommissioning fund.'
          ],
          answer: 2,
          why: 'The semicolon in the first paragraph splits it for you: half to the loan, the rest to the reserve, the roof repairs and the scholarship. Options 1 and 2 are never claimed, and option 4 is proposed in the last paragraph and is therefore not yet what happens.' },

        { id: 't8l3s3-3', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Eleven villages on a windy plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few thousand baht. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, roof repairs for the oldest houses and a scholarship for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose scholarships depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'According to the ecologists, why is the site now harder to decommission?',
          options: [
            'The turbines are jointly owned by eleven separate villages.',
            'The twenty-year loan must be repaid before anything is removed.',
            'The independent panel has not yet redrawn the boundary.',
            'Those who would have to agree to removal depend on the income.'
          ],
          answer: 3,
          why: 'The <em>because</em> is in their sentence: the people who must agree are the people whose scholarships depend on the turbines. Option 1 states a fact from the passage that the ecologists never turn into a cause, option 2 is nowhere in the text, and option 3 belongs to the review\'s own proposal.' },

        { id: 't8l3s3-4', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'Eleven villages on a windy plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few thousand baht. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, roof repairs for the oldest houses and a scholarship for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose scholarships depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'What is the author\'s main purpose in the second paragraph?',
          options: [
            'To explain how the shares in the wind farm were sold.',
            'To set out the problems that community ownership has not removed.',
            'To recommend that the shareholding be widened immediately.',
            'To describe the planning application made by the developer.'
          ],
          answer: 1,
          why: 'The paragraph opens on <em>not, however, a solution</em> and then gives two complaints, which is presenting the case against. Option 1 is the job of the first paragraph, option 3 is both an escalation and contradicted by the final paragraph, and option 4 is background the passage never supplies.' },

        { id: 't8l3s3-5', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'Eleven villages on a windy plateau now jointly own a wind farm of six turbines, bought from the developer that built it. The purchase was financed by a twenty-year loan and by shares sold to households within a fixed radius, none of them larger than a few thousand baht. Half of the annual surplus repays the loan; the rest funds a maintenance reserve, roof repairs for the oldest houses and a scholarship for students leaving the plateau to train.\n\nCommunity ownership is not, however, a solution to the disagreements that surround wind power. Households just outside the radius receive the noise and the flicker of shadow without the shares, and several have asked why the boundary was drawn where it was. Ecologists who supported the original planning application now argue that community ownership makes the site harder to decommission, because the people who would have to agree to remove the turbines are the same people whose scholarships depend on them.\n\nThe co-operative\'s own five-year review does not propose buying more turbines or widening the shareholding. It proposes that the boundary be redrawn by an independent panel, and that a decommissioning fund be built up from the surplus before any new spending is agreed.',
          source: 'Adapted for classroom use.',
          stem: 'What follow-up action does the five-year review propose?',
          options: [
            'Buying additional turbines out of the maintenance reserve.',
            'Extending shares to every household on the plateau.',
            'Suspending the scholarship until the loan is repaid.',
            'Redrawing the boundary and building a decommissioning fund.'
          ],
          answer: 3,
          why: 'The closing sentence proposes exactly those two things, and the sentence before it rules out options 1 and 2 together by saying the review <em>does not propose buying more turbines or widening the shareholding</em>. Option 3 suspends a scholarship that nobody in the passage suggests suspending.' }
      ]
    }

  ],

  check: {
    id: 't8l3ck', name: 'Systems Check · Whole passages',
    items: [
      { id: 't8l3ck-1', type: 'read', tag: 'read-main', level: 'C1',
        passage: 'The provincial authority has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing mangrove or a ridge of shingle to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the authority itself granted, and that a benefit ratio counts a beach hotel and a row of small houses differently. The plan does not offer compensation and does not claim to. It recommends that the authority open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'What is the main topic of the passage?',
        options: [
          'The physics of wave reflection at a sea wall.',
          'A provincial shoreline plan, its reasoning and the objections to it.',
          'A proposal to compensate every coastal homeowner in the province.',
          'The cost of maintaining hard defences over the next century.'
        ],
        answer: 1,
        why: 'Three paragraphs: the plan, the reasoning behind one category, the objections and what is proposed. Option 1 is the middle paragraph alone, option 3 is contradicted outright, since the plan <em>does not offer compensation and does not claim to</em>, and option 4 is one half of the calculation.' },

      { id: 't8l3ck-2', type: 'read', tag: 'read-detail', level: 'C1',
        passage: 'The provincial authority has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing mangrove or a ridge of shingle to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the authority itself granted, and that a benefit ratio counts a beach hotel and a row of small houses differently. The plan does not offer compensation and does not claim to. It recommends that the authority open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, how were the three categories decided?',
        options: [
          'By a vote of the residents in each coastal village.',
          'By the age of the existing defences on each stretch.',
          'By comparing maintenance cost with the value of what lies behind.',
          'By the width of the beach in front of each stretch.'
        ],
        answer: 2,
        why: 'The last sentence of the first paragraph states the calculation. Option 1 invents a vote, option 2 an age test and option 4 a measurement of the beach, none of which the passage mentions, and all three are sensible ways of dividing a coast, which is what makes them the right shape for distractors.' },

      { id: 't8l3ck-3', type: 'read', tag: 'read-context', level: 'C1',
        passage: 'The provincial authority has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing mangrove or a ridge of shingle to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the authority itself granted, and that a benefit ratio counts a beach hotel and a row of small houses differently. The plan does not offer compensation and does not claim to. It recommends that the authority open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'In this passage, the <em>benefit ratio</em> is',
        options: [
          'the comparison of a defence\'s cost with the value it protects.',
          'the share of the coast placed in each of the three categories.',
          'the amount saved by ending maintenance on a defence.',
          'the rate at which a wall scours sand from its own foot.'
        ],
        answer: 0,
        why: 'The term is named at the end of the sentence that defines it, so the definition is sitting immediately in front of the word. Option 2 confuses the ratio with the categories it produced, option 3 is real text from the last paragraph in the wrong slot, and option 4 comes from the paragraph on physics.' },

      { id: 't8l3ck-4', type: 'read', tag: 'read-cause', level: 'C1',
        passage: 'The provincial authority has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing mangrove or a ridge of shingle to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the authority itself granted, and that a benefit ratio counts a beach hotel and a row of small houses differently. The plan does not offer compensation and does not claim to. It recommends that the authority open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'According to the passage, what happens to the beach in front of a sea wall?',
        options: [
          'It widens as sand is trapped against the wall.',
          'It is scoured away by the energy the wall reflects downwards.',
          'It is replaced by a marsh within a hundred years.',
          'It breaks the incoming waves further out than a ridge of shingle does.'
        ],
        answer: 1,
        why: 'The arrow is written out: the wall reflects energy downwards, the sand goes, and the stretch <em>tends to lose the beach that protected it</em>. Option 1 is that arrow reversed, option 3 borrows the hundred years from the calculation, and option 4 gives the beach a property the text gives to mangrove and shingle.' },

      { id: 't8l3ck-5', type: 'read', tag: 'read-infer', level: 'C1',
        passage: 'The provincial authority has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing mangrove or a ridge of shingle to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the authority itself granted, and that a benefit ratio counts a beach hotel and a row of small houses differently. The plan does not offer compensation and does not claim to. It recommends that the authority open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'What can be inferred about the residents in the third category?',
        options: [
          'They have been offered payments to leave their homes.',
          'Their houses were built without permission from the authority.',
          'Their properties were valued below the cost of defending them.',
          'Their stretch of coast has no recorded history of flooding.'
        ],
        answer: 2,
        why: 'Category three is where nothing further will be built, and the categories were set by weighing cost against value, so the comparison must have come out that way. Options 1 and 2 are both contradicted by the third paragraph, and option 4 concerns a flooding record the passage never gives.' },

      { id: 't8l3ck-6', type: 'read', tag: 'read-followup', level: 'C1',
        passage: 'The provincial authority has published a shoreline plan that divides its 60 kilometres of coast into three categories: stretches to be held with hard defences, stretches where the line will be allowed to move landward under management, and stretches where nothing further will be built. The categories were set by comparing the cost of maintaining a defence over a hundred years with the value of what sits behind it, a calculation the plan calls the benefit ratio.\n\nThe engineering case for the second category is straightforward. A wall reflects wave energy downwards and scours the sand from its own foot, so a defended stretch tends to lose the beach that protected it. Allowing mangrove or a ridge of shingle to form in front of the line breaks the same waves further out and lowers the cost of everything behind it.\n\nThe objections are not to the physics. Residents in the third category note that their homes were built with planning permission the authority itself granted, and that a benefit ratio counts a beach hotel and a row of small houses differently. The plan does not offer compensation and does not claim to. It recommends that the authority open a relocation fund with the money saved from defences it will no longer maintain, and that no property be reclassified until the fund exists.',
        source: 'Adapted for classroom use.',
        stem: 'What follow-up action does the plan recommend?',
        options: [
          'Building hard defences along the whole sixty kilometres.',
          'Paying compensation at the market value of each property.',
          'Reclassifying properties before any fund has been opened.',
          'Opening a relocation fund before any property is reclassified.'
        ],
        answer: 3,
        why: 'The final sentence carries both halves of the recommendation. Option 3 is that sentence turned round, option 2 is the escalation the preceding sentence has already ruled out, and option 1 contradicts a plan that leaves one category undefended.' }
    ]
  }
});

TOPICS.push(T8);
