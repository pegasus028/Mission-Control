/* ===========================================================================
   SYSTEM 07 — Unit 3 & 4 vocabulary
   Three levels. Ten words about influence and the media, ten about machines
   and minds, then all twenty again under the patterns they demand.
   =========================================================================== */

var T7 = {
  id: 't7', n: 7, code: 'System 07', art: 'lexicon',
  name: 'Unit 3 & 4 Vocabulary',
  cefr: 'B2–C1',
  blurb: 'Twenty words, each learned with the pattern it takes and the near-synonym it is most often confused with.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T7.levels.push({
  id: 't7l1', n: 1, name: 'Influence and the media', cefr: 'B2',
  blurb: 'Ten words the unit uses to talk about how far something spreads, who gets hurt by it, and who tells the truth about it.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't7l1s1', name: 'Everywhere: ubiquitous, pervasive, echo chamber', cefr: 'B2',
      theory: {
        key: 'Ubiquitous means present everywhere you look, pervasive means soaked right through one thing, and an echo chamber is a space where only your own view comes back.',
        body: [
          '<em>Ubiquitous</em> is about <strong>space</strong>. It counts separate instances of the same thing, scattered across a place: card readers on every stall, charging points on every street, the same brand of scooter in all sixty towns. The test is whether you could point at many different examples in many different places.',
          '<em>Pervasive</em> is about <strong>saturation</strong>. One thing — a building, a team, a report, a mood — has been reached in every part by something that spread through it. A damp that has got into every wall is pervasive. A mistrust running through a single department is pervasive there and nowhere else, which is the clearest proof that the two words are not interchangeable: a thing can be pervasive without being remotely ubiquitous.',
          'There is a difference in flavour too. <em>Ubiquitous</em> is neutral and often admiring. <em>Pervasive</em> usually carries a shadow — damp, fear, noise, an unexamined assumption. If what has spread is welcome, most writers reach for a different word.',
          'An <em>echo chamber</em> is a metaphor from acoustics: a room that returns your own voice to you. Applied to media it names a group, a feed or a committee in which every view you meet already agrees with you, so opinions get louder without ever being tested. Note the article — <em>an echo chamber</em> — and note that it is not a synonym for secrecy. The people in an echo chamber may be talking very loudly indeed.'
        ],
        simple: [
          '<em>Ubiquitous</em> means you can see it everywhere. There are many separate ones, in many places.',
          '<em>Pervasive</em> means it has spread through one thing until every part of it is affected. A smell in one room, a worry in one team.',
          'An <em>echo chamber</em> is a place where everyone already agrees with you, so your own opinion just comes back to you louder.'
        ],
        examples: [
          { s: '<b>Ubiquitous</b> vending machines line every corridor of the station.', g: 'everywhere in space — many separate machines, many places.' },
          { s: 'A <b>pervasive</b> smell of fish sauce had got into the curtains, the chairs and the till.', g: 'one shop, and the smell has reached every part of it.' },
          { s: 'The fan page became <b>an echo chamber</b>: praise came back, criticism never did.', g: 'a space that returns the view you brought in.' },
          { s: '<s>The damp in the basement was ubiquitous.</s>', g: 'one basement, soaked through — that is pervasive.' }
        ]
      },
      items: [
        { id: 't7l1s1-1', type: 'choose', tag: 'vocab-u3', level: 'B2',
          stem: 'Two years after the first stalls put one out, these little payment codes have become ______: there is a separate one taped to every table in the food court and every seat on the bus.',
          options: ['pervasive', 'ubiquitous', 'rogue', 'malicious'],
          answer: 1,
          why: '<em>Ubiquitous</em> counts separate instances scattered across space, which is exactly what one code per table and one per seat is. <em>Pervasive</em> would need a single thing soaked through in every part, not thousands of identical stickers. <em>Rogue</em> would say the codes had gone out of anyone\'s control and <em>malicious</em> that somebody meant harm by them \u2014 both are claims the sentence never makes.' },
        { id: 't7l1s1-2', type: 'choose', tag: 'vocab-u3', level: 'B2',
          stem: 'Three days after the flood a ______ smell of river mud had worked its way into the curtains, the record books and the chairs of the one small office upstairs.',
          options: ['ubiquitous', 'malicious', 'pervasive', 'rogue'],
          answer: 2,
          why: '<em>Pervasive</em> describes one thing that something has spread right through, and the sentence keeps us inside a single office. <em>Ubiquitous</em> would need many separate smells in many separate places, and the other two make claims about intention and control that a smell cannot carry.' },
        { id: 't7l1s1-3', type: 'choose', tag: 'vocab-u3', level: 'B2',
          stem: 'Nobody on the committee had disagreed with the chair for two years; the meetings had become ______ in which every proposal came back praised and none was ever tested.',
          options: ['a singularity', 'a whistleblower', 'a susceptibility', 'an echo chamber'],
          answer: 3,
          why: 'An <em>echo chamber</em> is a space that returns the view you brought into it, which is what praise coming back unchallenged describes. A whistleblower is a person, a susceptibility is an openness to one harm, and a singularity is a threshold in machine intelligence.' },
        { id: 't7l1s1-4', type: 'sort', tag: 'vocab-u3', level: 'B2',
          stem: 'Decide whether each phrase describes something ubiquitous or something pervasive.',
          bins: [
            { key: 'u', label: 'ubiquitous', hint: 'the same thing, in many separate places' },
            { key: 'p', label: 'pervasive', hint: 'one thing, reached in every part' }
          ],
          items: [
            { text: 'delivery scooters in all sixty districts', bin: 'u' },
            { text: 'a damp that has reached every wall of the old library', bin: 'p' },
            { text: 'the same water cooler in every provincial office', bin: 'u' },
            { text: 'an anxiety running through the whole nursing team', bin: 'p' },
            { text: 'card readers on every market stall in the city', bin: 'u' },
            { text: 'a suspicion that colours every decision the board makes', bin: 'p' }
          ],
          why: '<em>Ubiquitous</em> counts separate instances spread across space; <em>pervasive</em> describes one thing that has been saturated. A single library or a single team can only be the second.' },

        { id: 't7l1s1-5', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'Mistrust of the new rota was ______ in that one ward: it had reached every shift, every grade of nurse and every conversation in the staff room.',
          options: ['pervasive', 'ubiquitous', 'nefarious', 'cognitive'],
          answer: 0,
          why: '<em>Pervasive</em> names one thing reached in every part, and the sentence confines the mistrust to a single ward. <em>Ubiquitous</em> would claim it turned up separately in many places, <em>nefarious</em> would make it a criminal scheme, and <em>cognitive</em> would make it a matter of thinking rather than of feeling.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't7l1s2', name: 'Influence and harm: manipulate, prey on, susceptibility', cefr: 'B2',
      theory: {
        key: 'Manipulate is controlling an outcome by hidden means, prey on needs a weaker victim as its object, and susceptibility is the openness to harm that makes both possible — and it takes to.',
        body: [
          '<em>Manipulate</em> has two lives. One is neutral and technical: you manipulate the controls of a crane, or manipulate figures in a spreadsheet. The other is the one this unit cares about — influencing people or results by unfair, concealed means, so that someone acts against their own interest. In both lives the pattern is the same: a <strong>direct object, with no preposition</strong>. You manipulate the bidding, the audience, the price. Never <em>manipulate with</em> the results.',
          '<em>Prey on</em> comes from hunting, and it keeps the hunt in it. There is always a stronger party and a weaker one, and the weaker one goes directly after <em>on</em>: lenders prey on farmers, scams prey on the newly arrived, advertisements prey on people\'s fear. Leave out the <em>on</em> and the verb is no longer this verb at all.',
          '<em>Susceptibility</em> is the noun of <em>susceptible</em>, and it names how open someone is to <strong>one particular harm</strong>, which follows <em>to</em>: susceptibility to flattery, to infection, to pressure. It is not a general word for weakness, and <em>susceptibility of</em> is wrong.',
          'The error these three invite is swapping them. <em>Manipulate</em> needs somebody doing hidden work; <em>prey on</em> needs a victim on the other end of it; <em>susceptibility</em> names a property of that victim rather than anything anyone does. Decide which of the three the sentence is describing before you look at the options.'
        ],
        simple: [
          '<em>Manipulate</em> means to control something or somebody secretly and unfairly. It is followed straight by the thing controlled: <em>manipulate the results</em>.',
          '<em>Prey on</em> means a strong person or group takes advantage of a weaker one. You always need <em>on</em>: <em>prey on new students</em>.',
          '<em>Susceptibility</em> is a noun. It means being easily harmed or influenced by one particular thing, and that thing follows <em>to</em>: <em>susceptibility to pressure</em>.'
        ],
        examples: [
          { s: 'The seller <b>manipulated</b> the bidding by placing false offers through a friend.', g: 'hidden means, and a direct object with no preposition.' },
          { s: 'Unlicensed lenders <b>prey on</b> farmers in the weeks before harvest.', g: 'a stronger party, then "on", then the weaker one.' },
          { s: 'Their <b>susceptibility to</b> flattery was what the interviewer counted on.', g: 'the noun, and the harm follows "to".' },
          { s: '<s>Their susceptibility of infection rose through the cold weeks.</s>', g: 'susceptibility takes "to", never "of".' }
        ]
      },
      items: [
        { id: 't7l1s2-1', type: 'choose', tag: 'vocab-u3', level: 'B2',
          stem: 'The auctioneer was suspended after investigators found that he had used two friends in the room to ______ the bidding on the final three lots without a single buyer realising.',
          options: ['polarize', 'manipulate', 'prey on', 'overshadow'],
          answer: 1,
          why: '<em>Manipulate</em> is controlling an outcome by concealed means, and it attaches straight to its object with no preposition. <em>Prey on</em> would need a weaker victim after <em>on</em>, <em>polarize</em> would split the room into two opposed camps, and nothing here is being overshadowed.' },
        { id: 't7l1s2-2', type: 'choose', tag: 'vocab-u3', level: 'B2',
          stem: 'Doorstep lenders ______ the poorest households in the district, openly charging them triple in the weeks before the school term because no bank will lend to them.',
          options: ['manipulate', 'polarize', 'prey on', 'unsettle'],
          answer: 2,
          why: '<em>Prey on</em> sets a stronger party against a weaker one and takes the victim straight after the preposition, which is the shape of this whole sentence. <em>Manipulate</em> would need the lenders to be hiding what they do, and the charging here is open; <em>polarize</em> would divide the households into two camps; <em>unsettle</em> would leave them uneasy and say nothing about anyone being exploited.' },
        { id: 't7l1s2-3', type: 'gap', tag: 'vocab-u3', level: 'B2',
          lines: [
            { who: 'Nurse', text: 'Why are the harvest workers vaccinated before anyone else?' },
            { who: 'Doctor', text: 'Because long shifts in the dust raise their ___ to chest infections.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['consciousness', 'susceptibility', 'echo chamber', 'singularity'],
          answer: 1,
          why: '<em>Susceptibility</em> names how open somebody is to one particular harm, and that harm follows <em>to</em>. <em>Raise their consciousness</em> is a real phrase but it takes no <em>to</em> and means making them aware, and the other two name a space and a threshold rather than a weakness.' },
        { id: 't7l1s2-4', type: 'spot', tag: 'vocab-u3', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The panel found that the supplier', 'had manipulated with the test results', 'for three years', 'before the audit began.'],
          answer: 1,
          fix: 'had manipulated the test results',
          why: '<em>Manipulate</em> takes a direct object with no preposition. The hidden, dishonest sense is exactly right here; only the pattern is broken.' },

        { id: 't7l1s2-5', type: 'spot', tag: 'vocab-u3', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Unlicensed brokers', 'have preyed inexperienced buyers', 'since the property register', 'was closed to the public.'],
          answer: 1,
          fix: 'have preyed on inexperienced buyers',
          why: '<em>Prey</em> is only this verb when it carries <em>on</em>. The weaker party goes straight after the preposition, never straight after the verb.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't7l1s3', name: 'Politics and disclosure: polarize, bipartisan, cognitive, whistleblower', cefr: 'B2+',
      theory: {
        key: 'Polarize drives opinion to two opposite ends, bipartisan describes two parties working together, cognitive belongs to thinking and never to feeling, and a whistleblower reports wrongdoing from inside.',
        body: [
          '<em>Polarize</em> is transitive: it takes an object — a debate, an electorate, a village, opinion. The image is the two poles of a magnet, and the meaning is that people are driven out of the middle towards two opposite ends. It is common in the passive and as a participle, <em>opinion is deeply polarized</em>, but it never stands alone with a preposition. The course list keeps the <em>-ize</em> spelling, so keep it.',
          '<em>Bipartisan</em> means, literally, two parties. It describes the cooperation and the things cooperation produces: bipartisan support, a bipartisan committee, a bipartisan agreement. Be careful with the tempting shortcut that it is simply the opposite of <em>polarized</em>. A bipartisan committee can still produce a polarized country, and a question can be entirely unpolarized without any party being involved. <em>Bipartisan</em> applies only where there are two political parties to begin with.',
          '<em>Cognitive</em> is an adjective about the machinery of <strong>thinking</strong>: cognitive ability, cognitive load, cognitive bias, cognitive decline. It never describes an emotion. <em>Cognitive anger</em> is not English, and a cognitive bias is a fault in reasoning rather than a prejudice of the heart. There is no verb to go with it; the noun is <em>cognition</em>.',
          'A <em>whistleblower</em> is an insider who reports wrongdoing in their own organisation to somebody able to act on it. That last point is where marks are lost. A journalist who prints the story is not the whistleblower; nor is a rival firm, nor an intruder, nor the spokesperson who answers the press afterwards. The verb phrase is <em>blow the whistle on</em>.'
        ],
        simple: [
          '<em>Polarize</em> needs an object. It means to split people into two opposite groups with nobody in the middle: <em>the plan polarized the town</em>.',
          '<em>Bipartisan</em> means two political parties working together. It is not just the opposite of polarized, and it only makes sense when there are parties.',
          '<em>Cognitive</em> means about thinking: memory, attention, decisions. Never about feelings. A <em>whistleblower</em> works inside an organisation and reports what it is doing wrong.'
        ],
        examples: [
          { s: 'The proposed reservoir <b>polarized</b> the valley: two meetings, two petitions, nobody in between.', g: 'the verb takes an object and drives opinion to two ends.' },
          { s: 'The water bill passed with <b>bipartisan</b> support after both parties amended it.', g: 'two parties, cooperating.' },
          { s: 'Fatigue at the end of a shift reduces <b>cognitive</b> accuracy long before it changes mood.', g: 'thinking, deliberately set apart from feeling.' },
          { s: '<s>An outside journalist acted as the factory\'s whistleblower.</s>', g: 'a whistleblower reports from inside the organisation.' }
        ]
      },
      items: [
        { id: 't7l1s3-1', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'The plan to route the new bypass through the orchards ______ the village: within a month there were two rival petitions and nobody left in the middle.',
          options: ['manipulated', 'preyed on', 'polarized', 'unsettled'],
          answer: 2,
          why: '<em>Polarize</em> takes an object and drives the people in it out to two opposite ends, which the two petitions and the empty middle spell out. <em>Unsettled</em> would leave them anxious rather than divided, <em>manipulated</em> needs concealed control, and <em>preyed on</em> needs a stronger party taking something.' },
        { id: 't7l1s3-2', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'The flood-defence budget finally passed with ______ support: the two largest parties had agreed a joint amendment, though the smaller parties voted against.',
          options: ['pervasive', 'cognitive', 'bipartisan', 'benevolent'],
          answer: 2,
          why: '<em>Bipartisan</em> names cooperation between two parties, which the joint amendment is. <em>Benevolent</em> would praise the parties\' intentions rather than record their agreement, <em>cognitive</em> belongs to thinking, and <em>pervasive</em> to something soaked through one thing.' },
        { id: 't7l1s3-3', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'The laboratory measured ______ performance — memory, attention and reaction time — separately from the students\' reported mood.',
          options: ['cognitive', 'bipartisan', 'sentient', 'pervasive'],
          answer: 0,
          why: '<em>Cognitive</em> is the adjective for thinking: memory, attention, reasoning. The sentence sets it deliberately against mood, which is where <em>sentient</em> belongs; <em>bipartisan</em> needs two parties and <em>pervasive</em> needs something spread right through one thing.' },
        { id: 't7l1s3-4', type: 'choose', tag: 'vocab-u3', level: 'B2+',
          stem: 'The contaminated batches were traced to a single line only after a ______ in the packing department sent the internal test logs to the food-safety inspectorate.',
          options: ['susceptibility', 'echo chamber', 'singularity', 'whistleblower'],
          answer: 3,
          why: 'A <em>whistleblower</em> is an insider who takes evidence of wrongdoing to somebody able to act on it, which is what the packing-department worker does. The other three name an openness to harm, a space where opinion returns amplified, and a threshold in machine intelligence.' },
        { id: 't7l1s3-5', type: 'spot', tag: 'vocab-u3', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The referendum on the new harbour', 'polarized between the two districts', 'more sharply than', 'any vote in living memory.'],
          answer: 1,
          fix: 'polarized the two districts',
          why: '<em>Polarize</em> is transitive: something polarizes a debate, an electorate or, here, two districts. It cannot stand alone with a preposition after it.' }
      ]
    }
  ],

  check: {
    id: 't7l1ck', name: 'Systems Check · Influence and the media',
    items: [
      { id: 't7l1ck-1', type: 'choose', tag: 'vocab-u3', level: 'B2',
        stem: 'The little roadside coffee carts were unheard of when the market opened; they are now ______, with two or three of them on every soi between here and the pier.',
        options: ['pervasive', 'ubiquitous', 'malicious', 'sentient'],
        answer: 1,
        why: '<em>Ubiquitous</em> counts many separate examples across many places, which two or three carts on every soi is. <em>Pervasive</em> would need one thing reached in every part, and the other two are claims about intention and about feeling.' },
      { id: 't7l1ck-2', type: 'gap', tag: 'vocab-u3', level: 'B2',
        lines: [
          { who: 'Editor', text: 'Why did the readers\' panel never spot the mistake in the schedule?' },
          { who: 'Deputy', text: 'We invited only people who already liked the paper, so the panel was ___.' }
        ],
        stem: 'Choose the option that fits the gap.',
        options: ['a whistleblower', 'a singularity', 'a susceptibility', 'an echo chamber'],
        answer: 3,
        why: 'An <em>echo chamber</em> returns the view you brought into it, so nothing is ever tested, which is what inviting only admirers produces. The other three name a person who reports wrongdoing, a threshold in machine intelligence, and an openness to one harm.' },
      { id: 't7l1ck-3', type: 'choose', tag: 'vocab-u3', level: 'B2+',
        stem: 'The clinic recorded a sharp rise in the divers\' ______ to ear infections during the months when they worked the longest shifts underwater.',
        options: ['consciousness', 'echo chamber', 'susceptibility', 'whistleblower'],
        answer: 2,
        why: '<em>Susceptibility</em> names how open somebody is to one specific harm, and the harm follows <em>to</em>. None of the other three nouns can be raised by long shifts, and none of them takes <em>to</em> in front of an illness.' },
      { id: 't7l1ck-4', type: 'choose', tag: 'vocab-u3', level: 'B2+',
        stem: 'After a decade of deadlock the water-sharing treaty was ratified by a ______ committee on which members of both parties served.',
        options: ['bipartisan', 'cognitive', 'benevolent', 'pervasive'],
        answer: 0,
        why: '<em>Bipartisan</em> names cooperation between two parties, which is precisely what a committee drawn from both of them is. <em>Benevolent</em> describes good intentions rather than cooperation, <em>cognitive</em> belongs to thinking, and <em>pervasive</em> to something soaked through.' },
      { id: 't7l1ck-5', type: 'spot', tag: 'vocab-u3', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Two hours into the shift', 'the drivers\' sentient accuracy fell sharply,', 'although their reported mood', 'stayed exactly as it had been.'],
        answer: 1,
        fix: 'the drivers\' cognitive accuracy fell sharply',
        why: '<em>Cognitive</em> belongs to thinking — accuracy, memory, attention — and the sentence sets that against mood, which is left unchanged. <em>Sentient</em> is a claim about feeling, and feeling is exactly what the shift has not altered.' },

      { id: 't7l1ck-6', type: 'choose', tag: 'vocab-u3', level: 'C1',
        stem: 'The union\'s lawyer insisted that the clerk be treated as a ______ and not as a thief: he had copied the payroll ledgers only in order to hand them to the labour inspectorate.',
        options: ['susceptibility', 'whistleblower', 'echo chamber', 'singularity'],
        answer: 1,
        why: 'A <em>whistleblower</em> works inside the organisation and passes evidence of its wrongdoing to somebody able to act, which is what taking the ledgers to the inspectorate does. The other three name an openness to harm, a space where opinion returns amplified, and a threshold in machine intelligence.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T7.levels.push({
  id: 't7l2', n: 2, name: 'Machines and minds', cefr: 'B2+',
  blurb: 'Ten words the unit uses for what machines do, what they might one day be, and what anyone building them intends.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't7l2s1', name: 'The technologies: machine learning, cloud computing, data encryption', cefr: 'B2+',
      theory: {
        key: 'Three fixed compounds naming three different jobs: machine learning finds a rule from examples, cloud computing runs the work on distant machines you rent, and data encryption scrambles information so that only a key opens it.',
        body: [
          '<em>Machine learning</em> describes a program that was never given the rule. It is shown thousands of examples and works the rule out for itself, improving as more examples arrive. The phrase is uncountable and takes no article and no plural: <em>advances in machine learning</em>, never <em>a machine learning</em>.',
          '<em>Cloud computing</em> means running programs and storing files on distant computers you rent by the hour or the month, instead of on machines you own and keep in the building. The cloud is somebody else\'s data centre. The phrase says nothing whatever about intelligence: a payroll spreadsheet in a rented data centre is cloud computing and has learned nothing.',
          '<em>Data encryption</em> is turning readable information into a form that only the holder of a key can unlock. It protects; it does not analyse and it does not move anything anywhere. The verb is <em>encrypt</em> and the adjective <em>encrypted</em>. Like the other two compounds it takes no article.',
          'The error is reaching for whichever compound is nearest whenever a sentence mentions computers. Read what the sentence says the technology <strong>does</strong> — learn from examples, run somewhere else, or hide the contents — and exactly one of the three will fit.'
        ],
        simple: [
          '<em>Machine learning</em>: the computer is not told the rule. It looks at many examples and finds the rule itself.',
          '<em>Cloud computing</em>: the work happens on other people\'s computers far away, which you pay to use.',
          '<em>Data encryption</em>: the information is turned into something nobody can read without the key. None of these three phrases takes <em>a</em> or an <em>-s</em>.'
        ],
        examples: [
          { s: 'The sorting line uses <b>machine learning</b> to recognise bruised mangoes after being shown fifty thousand photographs.', g: 'it improves from examples, not from a rule somebody wrote.' },
          { s: 'The museum moved its catalogue to <b>cloud computing</b>, and the basement servers were switched off.', g: 'the processing happens on rented machines elsewhere.' },
          { s: 'Patient records leave the clinic under <b>data encryption</b> and open only with the laboratory\'s key.', g: 'the contents are hidden, not analysed.' },
          { s: '<s>The clinic bought a machine learning to protect its records.</s>', g: 'no article with the compound, and encryption is what protects records.' }
        ]
      },
      items: [
        { id: 't7l2s1-1', type: 'choose', tag: 'vocab-u4', level: 'B2+',
          stem: 'The grading line was never given a rule for a bruise: it was shown sixty thousand photographs of mangoes and worked one out for itself, which is ______ in its plainest form.',
          options: ['cloud computing', 'machine learning', 'data encryption', 'singularity'],
          answer: 1,
          why: '<em>Machine learning</em> is a system deriving its own rule from examples instead of being handed one. <em>Cloud computing</em> says only where the work runs, <em>data encryption</em> hides information behind a key, and the <em>singularity</em> is a threshold nobody claims a fruit line has crossed.' },
        { id: 't7l2s1-2', type: 'choose', tag: 'vocab-u4', level: 'B2+',
          stem: 'Since the museum moved its catalogue to ______, the three servers in the basement have been switched off and the processing happens in a rented data centre four hundred kilometres away.',
          options: ['machine learning', 'data encryption', 'echo chamber', 'cloud computing'],
          answer: 3,
          why: '<em>Cloud computing</em> means the processing happens on distant machines you rent rather than on your own. The catalogue has not been taught a rule, nothing has been scrambled behind a key, and no opinion is coming back amplified.' },
        { id: 't7l2s1-3', type: 'choose', tag: 'vocab-u4', level: 'B2+',
          stem: 'The courier firm now sends every consignment list under ______, so that a stolen laptop shows nothing but unreadable characters.',
          options: ['data encryption', 'cloud computing', 'machine learning', 'susceptibility'],
          answer: 0,
          why: '<em>Data encryption</em> turns readable information into characters that only a key unlocks, which is why the stolen laptop yields nothing. Renting distant machines and learning a rule from examples both leave the list readable, and a susceptibility is an openness to harm rather than a guard against it.' },
        { id: 't7l2s1-4', type: 'sort', tag: 'vocab-u4', level: 'B2+',
          stem: 'Which of the three technologies does each description name?',
          bins: [
            { key: 'ml', label: 'machine learning', hint: 'the rule comes from examples' },
            { key: 'cc', label: 'cloud computing', hint: 'the work happens elsewhere' },
            { key: 'de', label: 'data encryption', hint: 'only a key opens it' }
          ],
          items: [
            { text: 'the rule is found from thousands of examples', bin: 'ml' },
            { text: 'the files sit in a rented data centre, not in the office', bin: 'cc' },
            { text: 'a stolen disk shows only unreadable characters', bin: 'de' },
            { text: 'the system gets better as more photographs arrive', bin: 'ml' },
            { text: 'the school pays by the month instead of buying servers', bin: 'cc' },
            { text: 'the file opens for the holder of the key and nobody else', bin: 'de' }
          ],
          why: 'Each compound names one job: learning a rule from examples, running the work on somebody else\'s distant machines, and scrambling information so that only a key opens it.' },

        { id: 't7l2s1-5', type: 'spot', tag: 'vocab-u4', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The laboratory bought a machine learning', 'to sort the pollen samples', 'that had arrived', 'from the northern stations.'],
          answer: 0,
          fix: 'The laboratory used machine learning',
          why: '<em>Machine learning</em> is uncountable and names a method, not a device: you use it, you do not buy one of them. The job it is doing here — sorting by example — is right.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't7l2s2', name: 'Minds and thresholds: sentient, consciousness, singularity', cefr: 'B2+',
      theory: {
        key: 'Sentient is the adjective for a being that feels, consciousness is the noun for the state itself, and the singularity is one specific hypothetical moment — machine intelligence passing our own.',
        body: [
          '<em>Sentient</em> and <em>consciousness</em> are one pair in two word classes. A creature is <strong>sentient</strong>; what it has is <strong>consciousness</strong>. <em>A sentient</em> is not a noun, and the slot after <em>evidence of</em> or <em>possess</em> needs the noun, not the adjective. The abstract noun <em>sentience</em> exists too, but <em>consciousness</em> is the word the unit uses for the state.',
          '<em>Sentient</em> is a much stronger claim than <em>intelligent</em>, <em>responsive</em> or <em>autonomous</em>. A thermostat responds. A chess program calculates. Neither feels anything, and neither is sentient. The word means there is something it is like to be that thing.',
          '<em>Consciousness</em> has an everyday second sense — being awake rather than knocked out, as in <em>she lost consciousness</em>. Keep the two apart. In this unit it means inner awareness and self-awareness, which is why the arguments about machines are so hard to settle: nobody can agree what would count as evidence of it.',
          'The <em>singularity</em> is not a synonym for a breakthrough or a big change. It names one hypothetical point: machine intelligence passing human intelligence, after which improvement runs away from us. It takes <em>the</em>. Using it for any dramatic product launch empties a word that was built to name a single threshold.'
        ],
        simple: [
          'A living thing that can feel is <em>sentient</em>. The state it is in is <em>consciousness</em>. One is an adjective, the other a noun.',
          '<em>Sentient</em> is much stronger than <em>clever</em>. A machine can be very clever and feel nothing.',
          'The <em>singularity</em> means one exact idea: the moment machine intelligence becomes greater than human intelligence. Do not use it for any big invention.'
        ],
        examples: [
          { s: 'Whether any machine is truly <b>sentient</b> is a question about feeling, not about speed.', g: 'the adjective, describing the being.' },
          { s: 'The panel disagreed about what would count as evidence of <b>consciousness</b> in a machine.', g: 'the noun for the state itself, after a preposition.' },
          { s: 'Forecasters who expect <b>the singularity</b> mean one thing: machine intelligence overtaking ours.', g: 'one specific threshold, and it takes "the".' },
          { s: '<s>The new battery was a singularity for the industry.</s>', g: 'a breakthrough is not the singularity.' }
        ]
      },
      items: [
        { id: 't7l2s2-1', type: 'choose', tag: 'vocab-u4', level: 'B2+',
          stem: 'The philosopher\'s point was narrow: a program can win every game of makruk it is given and still not be ______, because winning asks for calculation and never once for feeling.',
          options: ['benevolent', 'cognitive', 'sentient', 'bipartisan'],
          answer: 2,
          why: '<em>Sentient</em> means able to feel and be aware, which is the one thing calculation cannot supply. <em>Cognitive</em> is the trap here: it belongs to thinking, and thinking is exactly what the program is already doing well. <em>Benevolent</em> would praise the program\'s intentions, which the sentence never raises, and <em>bipartisan</em> belongs to two political parties and has no place in a claim about a machine.' },
        { id: 't7l2s2-2', type: 'choose', tag: 'vocab-u4', level: 'B2+',
          stem: 'The seminar kept returning to one question: what would count as evidence of ______ in a machine, as opposed to evidence of skill?',
          options: ['consciousness', 'singularity', 'machine learning', 'susceptibility'],
          answer: 0,
          why: '<em>Consciousness</em> is the noun for the state of inner awareness, which is the thing skill alone would never prove. The <em>singularity</em> is a moment rather than a state, and the other two name a method and an openness to harm.' },
        { id: 't7l2s2-3', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Two members of the panel expected the ______ before 2060: the threshold past which machines improve themselves faster than we can follow.',
          options: ['consciousness', 'singularity', 'susceptibility', 'echo chamber'],
          answer: 1,
          why: 'The <em>singularity</em> names that one hypothetical threshold, which the sentence then glosses. <em>Consciousness</em> is the state of being aware rather than a point in time, and neither of the other two describes a moment at all.' },
        { id: 't7l2s2-4', type: 'spot', tag: 'vocab-u4', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The debate is not about whether a program can calculate quickly', 'but about whether it can possess conscious', 'in anything like', 'the sense we mean for animals.'],
          answer: 1,
          fix: 'but about whether it can possess consciousness',
          why: 'After <em>possess</em> the slot needs a noun, and the noun for the state is <em>consciousness</em>. <em>Conscious</em> is the adjective of the family.' },

        { id: 't7l2s2-5', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Student', text: 'The model dolphin at the visitor centre flinches when you touch its side.' },
            { who: 'Teacher', text: 'A sensor and a motor. Nobody has shown that anything built in that workshop is ___.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['cognitive', 'bipartisan', 'benevolent', 'sentient'],
          answer: 3,
          why: '<em>Sentient</em> is the claim the teacher is refusing: that something in the workshop can actually feel. <em>Cognitive</em> would be a claim about thinking, <em>benevolent</em> about wishing people well, and <em>bipartisan</em> needs two political parties.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't7l2s3', name: 'Intentions: benevolent, malicious, nefarious, rogue', cefr: 'C1',
      theory: {
        key: 'Three of these four name an intention — benevolent, malicious, nefarious — and the fourth, rogue, names a loss of control and may involve no intention at all.',
        body: [
          '<em>Benevolent</em> means wishing others well and acting on it: a benevolent fund, a benevolent employer, benevolent intentions. It is not the same as harmless. A benevolent decision can still turn out badly, and the word describes the purpose behind it rather than the result.',
          '<em>Malicious</em> means intending harm for its own sake. Malicious damage, malicious gossip, a malicious rumour. The harm is not a side effect; it is the point. Somebody who breaks something while trying to steal it is a thief, but somebody who breaks it and takes nothing is malicious.',
          '<em>Nefarious</em> is stronger and criminal in flavour. It belongs to schemes, dealings, purposes and networks, and it implies organised wrongdoing carried on over time rather than one spiteful act. A rude message is malicious; a decade of forged certificates moved through four ports is nefarious.',
          '<em>Rogue</em> is the one to keep separate, and the exam rewards students who do. It means <strong>outside control</strong> — a rogue wave, a rogue trader, a rogue process. A rogue system may be doing exactly what it was told and still be rogue, because nobody can stop it. That is precisely what divides it from the other three: rogue is a claim about control, they are claims about intention. Calling a runaway valve <em>malicious</em> says something about its wishes that a valve cannot have.'
        ],
        simple: [
          '<em>Benevolent</em> = wanting to do good for other people.',
          '<em>Malicious</em> = wanting to hurt or damage. <em>Nefarious</em> = the same but stronger, and criminal: it is used for organised schemes.',
          '<em>Rogue</em> = out of control. A rogue machine is not evil. It may have no intention at all, which is why it is the odd one out.'
        ],
        examples: [
          { s: 'The scholarship was set up by a <b>benevolent</b> alumna who left her whole savings to the school.', g: 'wishing others well, and acting on it.' },
          { s: 'The damage to the cold frames was <b>malicious</b>: nothing was taken and every pane was broken.', g: 'harm wanted for its own sake.' },
          { s: 'Customs uncovered a <b>nefarious</b> network moving falsified certificates through four ports.', g: 'organised criminal wrongdoing — stronger than malicious.' },
          { s: 'A <b>rogue</b> irrigation valve emptied the reservoir overnight; nobody had touched it.', g: 'outside control, with no intention at all.' }
        ]
      },
      items: [
        { id: 't7l2s3-1', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Nothing had been tampered with: a single ______ pump kept running after the tank was full, simply because no stop signal ever reached it.',
          options: ['nefarious', 'malicious', 'rogue', 'benevolent'],
          answer: 2,
          why: '<em>Rogue</em> means outside control, and the sentence is careful to say there was no intention behind it. The other three are all claims about intention, which a pump cannot have.' },

        { id: 't7l2s3-2', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'The damage was clearly ______: nothing had been stolen, and every pane in the cold frames had been broken one by one in a single night.',
          options: ['benevolent', 'malicious', 'rogue', 'nefarious'],
          answer: 1,
          why: '<em>Malicious</em> means the harm was wanted for its own sake, which taking nothing and breaking everything shows. <em>Nefarious</em> would need an organised criminal operation rather than one night\'s spite, <em>rogue</em> claims only that something escaped control, and <em>benevolent</em> reverses the intention altogether.' },
        { id: 't7l2s3-3', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Customs described the operation as ______: four ports, three shell companies and a decade of falsified certificates.',
          options: ['rogue', 'benevolent', 'nefarious', 'malicious'],
          answer: 2,
          why: '<em>Nefarious</em> is the strongest of the intention words and belongs to organised criminal wrongdoing carried on over years, which is what the ports and the shell companies describe. <em>Malicious</em> would fit one spiteful act, and <em>rogue</em> would say only that something had escaped control.' },
        { id: 't7l2s3-4', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'The clause was ______ in intention — the founder wanted the cottages kept for retired weavers — even though its wording now blocks every repair.',
          options: ['benevolent', 'malicious', 'nefarious', 'rogue'],
          answer: 0,
          why: '<em>Benevolent</em> means wanting good for others and acting on it, which is exactly the founder\'s purpose. The sentence concedes a bad result, and a bad result turns good intentions neither into spite, nor into crime, nor into a loss of control.' },
        { id: 't7l2s3-5', type: 'spot', tag: 'vocab-u4', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Police treated the flooding of the boat store', 'as a rogue act,', 'since the taps had been opened deliberately', 'and nothing had been taken.'],
          answer: 1,
          fix: 'as a malicious act',
          why: 'Taps opened deliberately with nothing taken is harm wanted for its own sake, which is <em>malicious</em>. <em>Rogue</em> would claim only that something had escaped control, and nothing here was out of control.' }
      ]
    }
  ],

  check: {
    id: 't7l2ck', name: 'Systems Check · Machines and minds',
    items: [
      { id: 't7l2ck-1', type: 'choose', tag: 'vocab-u4', level: 'B2+',
        stem: 'Before the tablets leave for the field stations the survey team applies ______, so that a lost device gives up nothing to whoever finds it.',
        options: ['machine learning', 'cloud computing', 'data encryption', 'susceptibility'],
        answer: 2,
        why: '<em>Data encryption</em> makes information unreadable without a key, which is what a lost device giving up nothing requires. Learning a rule and renting distant machines both leave the files readable, and a susceptibility is an openness to harm.' },
      { id: 't7l2ck-2', type: 'choose', tag: 'vocab-u4', level: 'B2+',
        stem: 'The publisher closed its server room last year and now rents processing by the hour, which is what ______ means in practice.',
        options: ['cloud computing', 'data encryption', 'machine learning', 'echo chamber'],
        answer: 0,
        why: '<em>Cloud computing</em> is processing done on distant machines you rent rather than own, which is what closing the server room and paying by the hour amounts to. Nothing here is being hidden behind a key or trained on examples.' },
      { id: 't7l2ck-3', type: 'gap', tag: 'vocab-u4', level: 'C1',
        lines: [
          { who: 'Interviewer', text: 'Your book keeps coming back to one date. Why that one?' },
          { who: 'Researcher', text: 'Because that is when I expect the ___ — the moment our own thinking stops being the ceiling.' }
        ],
        stem: 'Choose the option that fits the gap.',
        options: ['consciousness', 'singularity', 'susceptibility', 'echo chamber'],
        answer: 1,
        why: 'The <em>singularity</em> names the one hypothetical point at which machine intelligence passes our own, which the researcher glosses immediately. <em>Consciousness</em> is a state rather than a moment, and neither of the other two is a point in time.' },
      { id: 't7l2ck-4', type: 'choose', tag: 'vocab-u4', level: 'C1',
        stem: 'The engineers were emphatic that nothing had attacked the plant: one ______ valve had simply stopped answering the control room and stayed open.',
        options: ['nefarious', 'benevolent', 'malicious', 'rogue'],
        answer: 3,
        why: '<em>Rogue</em> means outside control and says nothing whatever about intention, which is why it survives the engineers ruling out any attack. The other three all attribute a wish to a valve, and a valve can wish nothing.' },
      { id: 't7l2ck-5', type: 'spot', tag: 'vocab-u4', level: 'C1',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The scholarship was founded by a nefarious shipwright', 'who paid for every apprentice\'s tools', 'out of his own wages', 'for twenty years.'],
        answer: 0,
        fix: 'The scholarship was founded by a benevolent shipwright',
        why: '<em>Nefarious</em> means criminal, and it contradicts everything that follows it. Paying for other people out of your own wages is <em>benevolent</em>.' },

      { id: 't7l2ck-6', type: 'choose', tag: 'vocab-u4', level: 'C1',
        stem: 'Prosecutors argued that the two firms existed for a single ______ purpose: moving counterfeit medicines through a chain of warehouses and invoices designed to lose them.',
        options: ['nefarious', 'malicious', 'benevolent', 'rogue'],
        answer: 0,
        why: '<em>Nefarious</em> belongs to organised criminal wrongdoing sustained over time, which two firms and a chain of false invoices describe. <em>Malicious</em> would name spite rather than profit, <em>rogue</em> would mean the firms had escaped control rather than been built for this, and <em>benevolent</em> would credit them with wanting good for others.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T7.levels.push({
  id: 't7l3', n: 3, name: 'Using them precisely', cefr: 'C1',
  blurb: 'All twenty words again, this time under the patterns they demand, the families they belong to, and the pressure of a conversation.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't7l3s1', name: 'The pattern each word demands', cefr: 'C1',
      theory: {
        key: 'Learn each word with its pattern, because in a gap-fill the preposition or the object beside the gap usually settles the answer before meaning does.',
        body: [
          'A vocabulary item is only half learned until its pattern is learned with it. When you record a new word, record the preposition it takes and one typical object beside it. That habit turns a four-option question into a two-option question.',
          'The patterns in these two units are worth writing out. <em>Susceptibility to</em> a harm. <em>Prey on</em> a weaker party. <em>Polarize</em> an object — a debate, an electorate, a community, opinion. <em>An echo chamber of</em> praise, or <em>in an echo chamber</em>. <em>Manipulate</em> an object, with no preposition. <em>Cognitive</em> in front of a noun about thinking: bias, load, decline, ability. <em>Bipartisan</em> in front of a noun about cooperation: support, committee, agreement. <em>Benevolent</em>, <em>malicious</em> and <em>nefarious</em> in front of a noun of intention, <em>rogue</em> in front of a noun that has escaped control.',
          'The three compound nouns behave alike and unlike everything else here: <em>machine learning</em>, <em>cloud computing</em> and <em>data encryption</em> take no article and no plural. <em>Advances in machine learning</em> is right; <em>advances in a machine learning</em> is not English at all.',
          'The practical move in an exam is to read the words on either side of the gap before you read the options. If the word after the gap is <em>to</em>, most of the twenty are already impossible. If the gap sits between an article and a noun, every noun in the option list can go.'
        ],
        simple: [
          'Learn the word together with the small word that follows it. <em>Susceptibility to</em>. <em>Prey on</em>. <em>Polarize</em> + the thing.',
          '<em>Machine learning</em>, <em>cloud computing</em> and <em>data encryption</em> never take <em>a</em> and never take <em>-s</em>.',
          'In the exam, look at the words on both sides of the gap first. They often tell you the answer before you have thought about meaning.'
        ],
        examples: [
          { s: 'Their <b>susceptibility to</b> heat stress rose with every extra hour on the roof.', g: 'susceptibility always takes "to".' },
          { s: 'The scheme <b>preyed on</b> newly arrived students looking for cheap rooms.', g: 'prey on, then the weaker party, straight after "on".' },
          { s: 'One question <b>polarized the meeting</b> in under ten minutes.', g: 'polarize needs its object; it cannot stand alone.' },
          { s: 'Advances in <b>machine learning</b> made the sorting line possible.', g: 'the compound takes no article and no plural.' }
        ]
      },
      items: [
        { id: 't7l3s1-1', type: 'choose', tag: 'vocab-collocation', level: 'C1',
          stem: 'Two hours in the packing shed without water raised the workers\' ______ to heat exhaustion far more sharply than the temperature alone did.',
          options: ['susceptibility', 'consciousness', 'whistleblower', 'echo chamber'],
          answer: 0,
          why: '<em>Susceptibility</em> is the only one of these nouns that takes <em>to</em> in front of a harm, and it names how open somebody is to that harm. Going without water raises no awareness, produces no insider report, and builds no space where opinion returns.' },
        { id: 't7l3s1-2', type: 'choose', tag: 'vocab-collocation', level: 'C1',
          stem: 'The callers deceived nobody about the size of the fee; they simply ______ families whose children had just failed the entrance examination and who would have paid anything for another chance.',
          options: ['polarized', 'preyed on', 'manipulated', 'overwhelmed'],
          answer: 1,
          why: '<em>Prey on</em> takes its victim straight after the preposition and always sets a stronger party against a weaker one. The sentence has taken deception off the table, which is what <em>manipulated</em> would require; <em>polarized</em> would split the families into two camps; <em>overwhelmed</em> would report only that the families were swamped, not that anyone traded on their position.' },
        { id: 't7l3s1-3', type: 'spot', tag: 'vocab-collocation', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The proposal to charge for parking', 'polarized in the staff room', 'more thoroughly than', 'any timetable change had done.'],
          answer: 1,
          fix: 'polarized the staff room',
          why: '<em>Polarize</em> is transitive. The thing being driven to two opposite ends goes directly after the verb, with no preposition in between.' },

        { id: 't7l3s1-4', type: 'choose', tag: 'vocab-collocation', level: 'C1',
          stem: 'By subscribing only to the newsletters she already agreed with, she had built ______ around herself, and every argument she met came back in her own words.',
          options: ['a susceptibility', 'a singularity', 'an echo chamber', 'a whistleblower'],
          answer: 2,
          why: 'An <em>echo chamber</em> is a space that gives your own view back to you, which is what meeting every argument in her own words describes. A susceptibility is an openness to harm, a singularity is a threshold in machine intelligence, and a whistleblower is a person.' },
        { id: 't7l3s1-5', type: 'sort', tag: 'vocab-collocation', level: 'C1',
          stem: 'Sort each word by the pattern it demands.',
          bins: [
            { key: 'prep', label: 'incomplete without a preposition', hint: 'the word cannot reach its object on its own' },
            { key: 'obj', label: 'takes a direct object', hint: 'the object follows straight after, with nothing in between' },
            { key: 'bare', label: 'no article, no plural', hint: 'a field of work, not a countable thing' }
          ],
          items: [
            { text: 'susceptibility', bin: 'prep' },
            { text: 'prey', bin: 'prep' },
            { text: 'polarize', bin: 'obj' },
            { text: 'manipulate', bin: 'obj' },
            { text: 'cloud computing', bin: 'bare' },
            { text: 'data encryption', bin: 'bare' }
          ],
          why: '<em>Susceptibility</em> and <em>prey</em> are incomplete without <em>to</em> and <em>on</em>; <em>polarize</em> and <em>manipulate</em> attach straight to their object; the compounds take neither an article nor a plural.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't7l3s2', name: 'Word families and word class', cefr: 'C1',
      theory: {
        key: 'Read the slot before you read the options: the words on either side of the gap name the class you need — and when all four options are already that class, the pattern and the meaning have to finish the job.',
        body: [
          'Every word in these units belongs to a family. <em>Pervade, pervasive, pervasiveness. Manipulate, manipulation, manipulative. Benevolence, benevolent, benevolently. Malice, malicious, maliciously. Sentient, sentience. Conscious, consciousness, consciously. Polarize, polarization, polarized. Susceptible, susceptibility. Ubiquity, ubiquitous, ubiquitously. Cognition, cognitive, cognitively.</em> Learn the family, not the single form, because the exam chooses the slot before it chooses the word.',
          'The slot tells you the class. Between an article and a noun you need an <strong>adjective</strong>. After a preposition you need a <strong>noun</strong>. After the infinitive marker <em>to</em>, or after a subject, you need a <strong>verb</strong>. After <em>is</em> or <em>are</em> with no noun following, you need an adjective again.',
          'Two members of these families are regularly confused. <em>Manipulative</em> describes a person who habitually manipulates; <em>manipulated</em> describes the thing it was done to. And <em>conscious</em> is the adjective while <em>consciousness</em> is the state, which is why <em>evidence of conscious</em> can never be right.',
          'The three compounds have no family at all. <em>Machine learning</em> gives you no adjective and no verb. So the moment a slot needs an adjective, every compound in the option list is out, whatever the sentence is about.',
          'A warning about the questions below, though. A well-made paper often gives you four options of the <strong>same</strong> class, so that reading the slot eliminates nothing at all. When that happens, fall back on the pattern the word demands and on what the sentence actually says: the harm after <em>to</em>, the weaker party after <em>on</em>, the two camps that <em>polarize</em> needs, the two senses that only <em>consciousness</em> has.'
        ],
        simple: [
          'Look at the gap first. What kind of word does the space need — a noun, a verb or an adjective?',
          'Between <em>a</em> and a noun, you need an adjective. After a preposition, you need a noun. After <em>to</em>, you need the plain verb.',
          'Then look at the options. If they are all the same kind of word, the space cannot help you, and you must use the pattern — <em>to</em>, <em>on</em>, a direct object — and the meaning.'
        ],
        examples: [
          { s: 'The gap after <em>a</em> and before <em>smell</em> needs an adjective: a <b>pervasive</b> smell.', g: 'slot first, meaning second.' },
          { s: 'The gap after <em>evidence of</em> needs a noun: evidence of <b>consciousness</b>.', g: 'a preposition is followed by a noun.' },
          { s: 'The gap after <em>asked to</em> needs a verb: asked to <b>manipulate</b> the figures.', g: 'the infinitive marker takes the base form.' },
          { s: '<s>The donor\'s benevolence intention saved the clinic.</s>', g: 'in front of a noun the slot needs the adjective: benevolent.' }
        ]
      },
      items: [
        { id: 't7l3s2-1', type: 'choose', tag: 'vocab-family', level: 'C1',
          stem: 'Anaesthetists and philosophers use the same noun for two different things, and the seminar had to keep the two senses of ______ apart before it could argue about machines at all.',
          options: ['susceptibility', 'echo chamber', 'consciousness', 'singularity'],
          answer: 2,
          why: '<em>Consciousness</em> is the word with two senses: being awake rather than knocked out, and being inwardly aware. None of the other three nouns carries a medical sense, so none of them could be pulled apart in this way.' },
        { id: 't7l3s2-2', type: 'choose', tag: 'vocab-family', level: 'C1',
          stem: 'The clerk admitted that he had been asked to ______ the attendance figures in a way that nobody reading the register afterwards would notice.',
          options: ['prey on', 'manipulate', 'polarize', 'sideline'],
          answer: 1,
          why: '<em>Manipulate</em> is controlling an outcome by concealed means and it attaches straight to its object, which a hidden alteration of figures needs. <em>Prey on</em> wants a weaker victim rather than a document, <em>polarize</em> wants a group to split, and <em>sideline</em> would only push the figures aside.' },
        { id: 't7l3s2-3', type: 'spot', tag: 'vocab-family', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['A pervade smell of wet ash', 'hung in the classrooms', 'for a fortnight', 'after the fire.'],
          answer: 0,
          fix: 'A pervasive smell of wet ash',
          why: 'Between the article and the noun the slot needs an adjective. <em>Pervade</em> is the verb of the family; <em>pervasive</em> is its adjective.' },

        { id: 't7l3s2-4', type: 'choose', tag: 'vocab-family', level: 'C1',
          stem: 'The new hospital wing was paid for by a ______ merchant who never allowed her name to appear anywhere on the building.',
          options: ['malicious', 'nefarious', 'rogue', 'benevolent'],
          answer: 3,
          why: '<em>Benevolent</em> means wanting good for others and acting on it, which paying anonymously for a hospital wing is. <em>Malicious</em> and <em>nefarious</em> both claim harm was intended, and <em>rogue</em> would say only that the merchant was beyond anybody\'s control.' },
        { id: 't7l3s2-5', type: 'choose', tag: 'vocab-family', level: 'C1',
          stem: 'Weedkiller had been poured across the school football pitch overnight and nothing was taken from the store; the police recorded it as ______ damage.',
          options: ['benevolent', 'nefarious', 'malicious', 'rogue'],
          answer: 2,
          why: '<em>Malicious</em> means the harm was the point, which taking nothing makes plain. <em>Nefarious</em> would need an organised criminal operation rather than one night of spite, <em>rogue</em> would claim something had escaped control rather than that anybody intended this, and <em>benevolent</em> would make the weedkiller a kindness.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't7l3s3', name: 'In conversation', cefr: 'C1',
      theory: {
        key: 'In a dialogue the clue is rarely a preposition; it is what the other speaker has just said, so read the first turn before you look at the options.',
        body: [
          'Dialogue gap-fills are built the same way every time. One turn supplies the definition in ordinary words, and the other turn supplies the gap. Whichever speaker says <em>there is one in almost every street</em>, or <em>it worked the rule out for itself</em>, has already answered the question for you.',
          'That means you must read the whole exchange before choosing. A word can sit perfectly well in the sentence that contains the gap and still contradict the turn immediately above it. The second speaker is usually agreeing, correcting or naming what the first speaker has just described, and the answer must do whichever of those three the exchange requires.',
          'Watch the small words around the gap, because they survive into the options: <em>so ubiquitous that</em>, <em>the singularity</em>, <em>a rogue unit</em>, <em>cognitive load</em>. An option that does not fit the article or the number can be crossed off before meaning is considered.',
          'The trap is choosing the word that matches the <strong>topic</strong> rather than the word that matches the <strong>definition</strong>. In a well-made item every option is on topic. Only one of them says what the other speaker has just said.'
        ],
        simple: [
          'In these questions, one speaker explains the word in easy language and the other speaker uses it. Find the explanation first.',
          'Read both lines before you choose. An answer can fit its own sentence and still contradict the line before it.',
          'All four options will be about the same subject. That is the trap. Choose the one that means what the other speaker described.'
        ],
        examples: [
          { s: 'A: There is a charging point on every street now. — B: They have become completely <b>ubiquitous</b>.', g: 'the first turn supplies "every street", which is the definition.' },
          { s: 'A: Nobody wrote the rule; it worked it out from ten thousand scans. — B: That is <b>machine learning</b>.', g: 'learning from examples, not from instructions.' },
          { s: 'A: Nobody touched it, but it stopped answering the controller. — B: Then it is a <b>rogue</b> unit, not a sabotaged one.', g: 'out of control, and no intention claimed.' },
          { s: '<s>A: It kept ignoring commands. — B: So it was malicious.</s>', g: 'ignoring commands shows loss of control, not intention: rogue.' }
        ]
      },
      items: [
        { id: 't7l3s3-1', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Tourist', text: 'I have not seen a single cash machine since we left the airport.' },
            { who: 'Guide', text: 'You will not need one — the little payment stickers are ___ here, one on the front of every stall in the market.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['ubiquitous', 'pervasive', 'cognitive', 'sentient'],
          answer: 0,
          why: '<em>Ubiquitous</em> counts separate examples across many places, which one sticker on the front of every stall is. <em>Pervasive</em> would need a single thing saturated in every part, and the other two are claims about thinking and about feeling.' },
        { id: 't7l3s3-2', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Trainee', text: 'Who wrote the rule that tells it a weld is faulty?' },
            { who: 'Engineer', text: 'Nobody did. We showed it forty thousand photographs and ___ found the rule itself.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['data encryption', 'cloud computing', 'machine learning', 'susceptibility'],
          answer: 2,
          why: 'A system shown many examples that derives its own rule is doing <em>machine learning</em>. <em>Data encryption</em> hides information, <em>cloud computing</em> says only where the work runs, and a susceptibility is an openness to harm.' },
        { id: 't7l3s3-3', type: 'gap', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Coach', text: 'The players are not upset. They are simply making bad decisions in the last ten minutes.' },
            { who: 'Analyst', text: 'Then it is a ___ problem, not an emotional one, and the answer is the substitution schedule.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['pervasive', 'cognitive', 'sentient', 'bipartisan'],
          answer: 1,
          why: '<em>Cognitive</em> belongs to thinking — decisions, attention, memory — and the analyst separates it explicitly from emotion, which is where <em>sentient</em> would belong. The other two need something spreading through one thing, or two political parties.' },
        { id: 't7l3s3-4', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Supervisor', text: 'Had somebody interfered with the sorting arm?' },
            { who: 'Technician', text: 'No. It stopped listening to the controller and kept running — a ___ unit, not a sabotaged one.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['benevolent', 'nefarious', 'malicious', 'rogue'],
          answer: 3,
          why: '<em>Rogue</em> means outside control and makes no claim about intention, which is exactly the distinction the technician is drawing. The other three all assert an intention that nobody here has.' },

        { id: 't7l3s3-5', type: 'gap', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Journalist', text: 'You keep calling it the moment after which we stop being the cleverest thing on the planet.' },
            { who: 'Physicist', text: 'That moment has a name. It is the ___, and I do not expect it this century.' }
          ],
          stem: 'Choose the option that fits the gap.',
          options: ['echo chamber', 'singularity', 'consciousness', 'susceptibility'],
          answer: 1,
          why: 'The <em>singularity</em> is the specific hypothetical point at which machine intelligence passes our own, which the journalist has just paraphrased in full. <em>Consciousness</em> is a state rather than a moment, and the other two name a space and an openness to harm.' }
      ]
    }
  ],

  check: {
    id: 't7l3ck', name: 'Systems Check · Using them precisely',
    items: [
      { id: 't7l3ck-1', type: 'choose', tag: 'vocab-u4', level: 'B2+',
        stem: 'The festival now runs its ticketing on rented machines in another province, which is why the organisers describe the whole system as built on ______.',
        options: ['data encryption', 'machine learning', 'cloud computing', 'consciousness'],
        answer: 2,
        why: '<em>Cloud computing</em> is processing and storage on rented machines somewhere else, which is exactly what the organisers describe. Nothing has been scrambled behind a key or trained on examples, and a ticketing system has no inner awareness.' },
      { id: 't7l3ck-2', type: 'spot', tag: 'vocab-collocation', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The hospital now sends every referral', 'under a data encryption', 'so that an intercepted file', 'is unreadable without the key.'],
        answer: 1,
        fix: 'under data encryption',
        why: 'The compound is uncountable and takes no article. Its meaning here — unreadable without the key — is exactly right, so only the small word in front of it is wrong.' },

      { id: 't7l3ck-3', type: 'choose', tag: 'vocab-u3', level: 'C1',
        stem: 'The rail-safety act was passed in a single afternoon by a ______ vote, both parties having accepted the same amendment a week earlier, though eleven members abstained.',
        options: ['cognitive', 'bipartisan', 'benevolent', 'pervasive'],
        answer: 1,
        why: '<em>Bipartisan</em> describes cooperation between two parties, which the shared amendment is. <em>Benevolent</em> would describe good intentions rather than agreement, <em>cognitive</em> belongs to thinking, and <em>pervasive</em> to something soaked through one thing.' },
      { id: 't7l3ck-4', type: 'gap', tag: 'vocab-u3', level: 'C1',
        lines: [
          { who: 'Reporter', text: 'Who told the inspectorate about the falsified weighing records?' },
          { who: 'Editor', text: 'A ___ in the company\'s own loading bay, not anybody outside it.' }
        ],
        stem: 'Choose the option that fits the gap.',
        options: ['susceptibility', 'echo chamber', 'whistleblower', 'consciousness'],
        answer: 2,
        why: 'A <em>whistleblower</em> reports wrongdoing from inside their own organisation, and the editor stresses the company\'s own loading bay. The other three name an openness to harm, a space where opinion returns amplified, and a state of awareness.' },
      { id: 't7l3ck-5', type: 'choose', tag: 'vocab-family', level: 'C1',
        stem: 'The licence does not turn on cleverness: octopuses plan and open jars, and the committee must decide instead whether they are ______ — whether there is anything it is like to be one.',
        options: ['cognitive', 'benevolent', 'pervasive', 'sentient'],
        answer: 3,
        why: '<em>Sentient</em> means able to feel and be aware, which is what the gloss after the dash describes. <em>Cognitive</em> is the trap: planning and opening jars are already thinking, and the committee has set thinking aside. <em>Benevolent</em> would judge the animals\' intentions towards others, and <em>pervasive</em> describes how far something has spread, neither of which is what the licence turns on.' },
      { id: 't7l3ck-6', type: 'choose', tag: 'vocab-u4', level: 'C1',
        stem: 'Prosecutors reached for the strongest word they had: the syndicate\'s ______ trade in stolen temple bronzes had run through six provinces for eleven years.',
        options: ['nefarious', 'malicious', 'benevolent', 'rogue'],
        answer: 0,
        why: '<em>Nefarious</em> belongs to organised criminal wrongdoing sustained over years, which six provinces and eleven years describe. <em>Malicious</em> would name spite in a single act, <em>rogue</em> would claim only a loss of control, and <em>benevolent</em> reverses the meaning entirely.' }
    ]
  }
});

TOPICS.push(T7);
