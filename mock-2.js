/* ===========================================================================
   FULL SIMULATION 2  —  m2
   =========================================================================== */
MOCKS.push({
  id: 'm2',
  name: 'Full Simulation 2',
  blurb: 'A full 50-item paper under exam conditions, drawn from markets, orchards, the monsoon, heritage sites and village clinics.',
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

        { id: 'm2-1', type: 'choose', tag: 'vocab-u4', level: 'B2+',
          stem: 'A retired trader pays for free breakfasts at the morning market and asks the sellers for nothing in return, so her motives appear to be entirely ______.',
          options: ['nefarious', 'rogue', 'benevolent', 'malicious'],
          answer: 2,
          why: '<em>Benevolent</em> describes a wish to do good for others without gain, which is what asking for nothing in return establishes. Options 1 and 4 name a wish to do harm, and option 2 describes someone who ignores the rules rather than someone generous.' },

        { id: 'm2-2', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Behind the stall\'s ordinary appearance lay a ______ operation that mixed cheap palm oil into bottles labelled as pure coconut oil.',
          options: ['ubiquitous', 'benevolent', 'nefarious', 'cognitive'],
          answer: 2,
          why: '<em>Nefarious</em> names an operation that is not merely dishonest but criminal, which is what selling adulterated oil under a false label amounts to. Option 1 says only that something is found everywhere, option 2 claims the opposite intention, and option 4 belongs to thinking and memory.' },

        { id: 'm2-3', type: 'choose', tag: 'vocab-collocation', level: 'B2+',
          stem: 'A handful of large buyers were accused of placing false bids in order to ______ the price of dried chillies before the festival.',
          options: ['manipulate', 'polarize', 'prey on', 'sideline'],
          answer: 0,
          why: '<em>Manipulate</em> means to control something unseen and dishonestly, and a price is exactly the kind of object it takes. Option 2 needs a group that splits into two camps, option 3 needs a weaker victim rather than a number, and option 4 means pushing something aside.' },

        { id: 'm2-4', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'Fear of a second flood is now so ______ along the riverside lanes that hardly any family will rent a ground-floor shop.',
          options: ['bipartisan', 'sentient', 'pervasive', 'cognitive'],
          answer: 2,
          why: '<em>Pervasive</em> describes a feeling that has spread through every part of a place and reaches everyone in it, which is why the refusals are general. Option 1 belongs to politics, option 2 to creatures that can feel, and option 4 to mental processes.' },

        { id: 'm2-5', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'The bill paying for mobile vaccination teams in the flooded provinces won rare ______ support, with senior figures from both of the main parties speaking for it.',
          options: ['cognitive', 'ubiquitous', 'rogue', 'bipartisan'],
          answer: 3,
          why: '<em>Bipartisan</em> means backed by two opposing parties at once, which is precisely what the second clause reports. Option 1 describes thinking, option 2 describes something found everywhere, and option 3 describes acting outside the rules.' }
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

        { id: 'm2-6', type: 'gap', blank: '(6)', tag: 'vocab-u4', level: 'B2+',
          lines: [
            { who: 'Nalin', text: 'The evening talk at the science centre was much better than the programme suggested.' },
            { who: 'Krit', text: 'What I remember is that every message the app sends is scrambled by ___(6)___, so anyone who intercepts it sees nothing but noise.' },
            { who: 'Nalin', text: 'She spent longer on the dangers. One ___(7)___ attachment, she said, can empty a small trader\'s account in a morning.' },
            { who: 'Krit', text: 'And she warned that a feed which only ever agrees with you becomes an ___(8)___, where the same opinion comes back at you all evening.' },
            { who: 'Nalin', text: 'Someone asked whether a machine could ever be truly ___(9)___ and feel pain the way an animal does.' },
            { who: 'Krit', text: 'She said not one system yet shows any sign of it. Then she added that the ___(10)___, the moment at which machines begin improving themselves without us, is still only a theory.' }
          ],
          stem: 'Choose the best option for gap (6).',
          options: ['machine learning', 'data encryption', 'cloud computing', 'consciousness'],
          answer: 1,
          why: 'Only <em>data encryption</em> scrambles a message so that whoever intercepts it can read nothing. Options 1 and 3 name ways of learning from data and of storing it, and option 4 names self-awareness.' },

        { id: 'm2-7', type: 'gap', blank: '(7)', tag: 'vocab-u4', level: 'B2+',
          lines: [
            { who: 'Nalin', text: 'The evening talk at the science centre was much better than the programme suggested.' },
            { who: 'Krit', text: 'What I remember is that every message the app sends is scrambled by ___(6)___, so anyone who intercepts it sees nothing but noise.' },
            { who: 'Nalin', text: 'She spent longer on the dangers. One ___(7)___ attachment, she said, can empty a small trader\'s account in a morning.' },
            { who: 'Krit', text: 'And she warned that a feed which only ever agrees with you becomes an ___(8)___, where the same opinion comes back at you all evening.' },
            { who: 'Nalin', text: 'Someone asked whether a machine could ever be truly ___(9)___ and feel pain the way an animal does.' },
            { who: 'Krit', text: 'She said not one system yet shows any sign of it. Then she added that the ___(10)___, the moment at which machines begin improving themselves without us, is still only a theory.' }
          ],
          stem: 'Choose the best option for gap (7).',
          options: ['benevolent', 'sentient', 'malicious', 'bipartisan'],
          answer: 2,
          why: '<em>Malicious</em> is the standard word for a file built to do harm to whoever opens it, and emptying an account is that harm. Option 1 claims the opposite purpose, option 2 belongs to creatures that can feel, and option 4 belongs to politics.' },

        { id: 'm2-8', type: 'gap', blank: '(8)', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Nalin', text: 'The evening talk at the science centre was much better than the programme suggested.' },
            { who: 'Krit', text: 'What I remember is that every message the app sends is scrambled by ___(6)___, so anyone who intercepts it sees nothing but noise.' },
            { who: 'Nalin', text: 'She spent longer on the dangers. One ___(7)___ attachment, she said, can empty a small trader\'s account in a morning.' },
            { who: 'Krit', text: 'And she warned that a feed which only ever agrees with you becomes an ___(8)___, where the same opinion comes back at you all evening.' },
            { who: 'Nalin', text: 'Someone asked whether a machine could ever be truly ___(9)___ and feel pain the way an animal does.' },
            { who: 'Krit', text: 'She said not one system yet shows any sign of it. Then she added that the ___(10)___, the moment at which machines begin improving themselves without us, is still only a theory.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['echo chamber', 'susceptibility', 'whistleblower', 'consciousness'],
          answer: 0,
          why: 'The clause after the gap defines the term: a space in which your own opinion is all that comes back to you is an <em>echo chamber</em>. Option 2 names openness to harm, option 3 names a person, and option 4 names awareness of one\'s own existence.' },

        { id: 'm2-9', type: 'gap', blank: '(9)', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Nalin', text: 'The evening talk at the science centre was much better than the programme suggested.' },
            { who: 'Krit', text: 'What I remember is that every message the app sends is scrambled by ___(6)___, so anyone who intercepts it sees nothing but noise.' },
            { who: 'Nalin', text: 'She spent longer on the dangers. One ___(7)___ attachment, she said, can empty a small trader\'s account in a morning.' },
            { who: 'Krit', text: 'And she warned that a feed which only ever agrees with you becomes an ___(8)___, where the same opinion comes back at you all evening.' },
            { who: 'Nalin', text: 'Someone asked whether a machine could ever be truly ___(9)___ and feel pain the way an animal does.' },
            { who: 'Krit', text: 'She said not one system yet shows any sign of it. Then she added that the ___(10)___, the moment at which machines begin improving themselves without us, is still only a theory.' }
          ],
          stem: 'Choose the best option for gap (9).',
          options: ['cognitive', 'pervasive', 'nefarious', 'sentient'],
          answer: 3,
          why: '<em>Sentient</em> means able to feel, and the gap is followed by <em>feel pain the way an animal does</em>. Option 1 covers thinking rather than feeling, option 2 means spread everywhere, and option 3 means wicked.' },

        { id: 'm2-10', type: 'gap', blank: '(10)', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Nalin', text: 'The evening talk at the science centre was much better than the programme suggested.' },
            { who: 'Krit', text: 'What I remember is that every message the app sends is scrambled by ___(6)___, so anyone who intercepts it sees nothing but noise.' },
            { who: 'Nalin', text: 'She spent longer on the dangers. One ___(7)___ attachment, she said, can empty a small trader\'s account in a morning.' },
            { who: 'Krit', text: 'And she warned that a feed which only ever agrees with you becomes an ___(8)___, where the same opinion comes back at you all evening.' },
            { who: 'Nalin', text: 'Someone asked whether a machine could ever be truly ___(9)___ and feel pain the way an animal does.' },
            { who: 'Krit', text: 'She said not one system yet shows any sign of it. Then she added that the ___(10)___, the moment at which machines begin improving themselves without us, is still only a theory.' }
          ],
          stem: 'Choose the best option for gap (10).',
          options: ['consciousness', 'singularity', 'cloud computing', 'whistleblower'],
          answer: 1,
          why: 'The gap is followed by its own definition, and a single moment after which machines improve themselves unaided is the <em>singularity</em>. Option 1 is a state rather than a moment, option 3 is a way of storing data, and option 4 is a person.' }
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

        { id: 'm2-11', type: 'cloze', tag: 'vform-subject-ing', level: 'B2+',
          passage: 'The pavilion beside the old rice market is one of the last timber halls of its kind in the province. Repairing its carved roof beams ___(11)___ a full season of skilled work. Several of the original wall panels are believed ___(12)___ in the floods of the last century. Seldom has a restoration of this size ___(13)___ so much interest from outside the district. ___(14)___ from teak that is no longer felled, the surviving beams cannot simply be replaced. ___(15)___ the river to rise again before the new drains are finished, the work would stop for a second season.',
          blank: '(11)',
          stem: 'Choose the best option for blank (11).',
          options: ['take', 'takes', 'have taken', 'were taking'],
          answer: 1,
          why: 'The subject is the <em>-ing</em> phrase <em>Repairing its carved roof beams</em>, and an <em>-ing</em> subject is singular however many plural nouns trail behind it. Options 1, 3 and 4 all agree with <em>beams</em>, which sits inside the subject rather than heading it.' },

        { id: 'm2-12', type: 'cloze', tag: 'rep-infinitive', level: 'C1',
          passage: 'The pavilion beside the old rice market is one of the last timber halls of its kind in the province. Repairing its carved roof beams ___(11)___ a full season of skilled work. Several of the original wall panels are believed ___(12)___ in the floods of the last century. Seldom has a restoration of this size ___(13)___ so much interest from outside the district. ___(14)___ from teak that is no longer felled, the surviving beams cannot simply be replaced. ___(15)___ the river to rise again before the new drains are finished, the work would stop for a second season.',
          blank: '(12)',
          stem: 'Choose the best option for blank (12).',
          options: ['to sweep away', 'to be swept away', 'to have swept away', 'to have been swept away'],
          answer: 3,
          why: 'Two questions decide the form. The sweeping happened long before the believing, so the infinitive is perfect, and the panels received the action, so it is also passive. Options 1 and 3 make the panels do the sweeping, options 1 and 2 put the event at the same time as the belief, and option 1 gets both of those wrong at once.' },

        { id: 'm2-13', type: 'cloze', tag: 'inv-negative', level: 'C1',
          passage: 'The pavilion beside the old rice market is one of the last timber halls of its kind in the province. Repairing its carved roof beams ___(11)___ a full season of skilled work. Several of the original wall panels are believed ___(12)___ in the floods of the last century. Seldom has a restoration of this size ___(13)___ so much interest from outside the district. ___(14)___ from teak that is no longer felled, the surviving beams cannot simply be replaced. ___(15)___ the river to rise again before the new drains are finished, the work would stop for a second season.',
          blank: '(13)',
          stem: 'Choose the best option for blank (13).',
          options: ['attract', 'attracting', 'attracted', 'to attract'],
          answer: 2,
          why: 'The negative adverbial <em>Seldom</em> pulls the auxiliary in front of the subject, and once <em>has</em> is there the verb phrase is built exactly as it would be in a statement: <em>has attracted</em>. No other form can follow <em>has</em> here.' },

        { id: 'm2-14', type: 'cloze', tag: 'part-passive', level: 'C1',
          passage: 'The pavilion beside the old rice market is one of the last timber halls of its kind in the province. Repairing its carved roof beams ___(11)___ a full season of skilled work. Several of the original wall panels are believed ___(12)___ in the floods of the last century. Seldom has a restoration of this size ___(13)___ so much interest from outside the district. ___(14)___ from teak that is no longer felled, the surviving beams cannot simply be replaced. ___(15)___ the river to rise again before the new drains are finished, the work would stop for a second season.',
          blank: '(14)',
          stem: 'Choose the best option for blank (14).',
          options: ['Cut', 'Cutting', 'Having cut', 'To cut'],
          answer: 0,
          why: 'The subject of the main clause is <em>the surviving beams</em>, and the beams received the cutting rather than doing it, so the clause opens with a past participle. Options 2 and 3 would claim the beams cut something themselves, and option 4 would turn the clause into a purpose.' },

        { id: 'm2-15', type: 'cloze', tag: 'cond-noif', level: 'C1',
          passage: 'The pavilion beside the old rice market is one of the last timber halls of its kind in the province. Repairing its carved roof beams ___(11)___ a full season of skilled work. Several of the original wall panels are believed ___(12)___ in the floods of the last century. Seldom has a restoration of this size ___(13)___ so much interest from outside the district. ___(14)___ from teak that is no longer felled, the surviving beams cannot simply be replaced. ___(15)___ the river to rise again before the new drains are finished, the work would stop for a second season.',
          blank: '(15)',
          stem: 'Choose the best option for blank (15).',
          options: ['If', 'Had', 'Should', 'Were'], 
          answer: 3,
          why: 'A conditional can drop <em>if</em> and invert instead, and the form that follows decides which word opens it. Only <em>Were</em> takes a subject plus <em>to</em> and an infinitive; option 3 would need a bare infinitive, option 2 a past participle, and option 1 a full tensed verb.' }
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
          given: 'The orchard stopped spraying the young mango trees in June.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'In June the orchard broke off what it was doing so that it could spray the trees.',
            'From June onwards the orchard no longer sprayed the young mango trees.',
            'The orchard intends to begin spraying the young mango trees in June.',
            'The orchard has been spraying the young mango trees since June.'
          ],
          answer: 1,
          why: '<em>Stop + -ing</em> means giving up the activity altogether, so the spraying ends and nothing replaces it. Option 1 reads the sentence as <em>stop to do</em>, which would make the spraying the reason for breaking off rather than the thing given up. Option 3 moves the whole thing into the future, and option 4 says the spraying has been going on ever since — the opposite of what the original reports.' },

        { id: 'm2-17', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The stallholder remembered locking the shutter before the rain began.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The stallholder recalled having locked the shutter.',
            'The stallholder remembered that she had to lock the shutter.',
            'The stallholder forgot to lock the shutter before the rain.',
            'The stallholder is locking the shutter before the rain arrives.'
          ],
          answer: 0,
          why: '<em>Remember + -ing</em> means the action happened first and the memory of it came afterwards. Option 2 reads it as <em>remember to do</em>, where the memory produces the action, option 3 reverses the polarity, and option 4 shifts the whole thing into the present.' },

        { id: 'm2-18', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The health centre\'s water tank needs cleaning before the vaccination rounds begin.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The health centre cleaned its water tank before the last rounds.',
            'The health centre must clean somebody else\'s tank each season.',
            'The health centre\'s water tank has to be cleaned before the rounds.',
            'The health centre\'s water tank may be cleaned after the rounds.'
          ],
          answer: 2,
          why: '<em>Need + -ing</em> carries a passive meaning: the tank is what gets cleaned, and the sentence states an obligation. Option 1 puts the event in the past, option 2 changes whose tank it is, and option 4 weakens the obligation and moves the time.' },

        { id: 'm2-19', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The steadily rising number of visitors has forced the temple to shut the inner hall to large groups.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The number of visitors has stopped going up, so the hall is now shut to large groups.',
            'The temple will shut the inner hall to large groups when visitor numbers rise.',
            'The rise in visitors has allowed the temple to open the inner hall to large groups.',
            'The number of visitors, which is still going up, has made the temple shut the hall.'
          ],
          answer: 3,
          why: 'An <em>-ing</em> premodifier says the process is still under way, and only option 4 keeps that. Option 1 treats the rise as finished, option 2 moves everything into the future, and option 3 replaces compulsion with permission and reverses the result.' },

        { id: 'm2-20', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The wholesaler denied raising the price of rice during the flood.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The wholesaler confessed to raising the price of rice during the flood.',
            'The wholesaler said that he had not raised the price of rice.',
            'The wholesaler refused to raise the price of rice during the flood.',
            'The wholesaler intends to raise the price of rice after the flood.'
          ],
          answer: 1,
          why: '<em>Deny + -ing</em> is a claim that the past action never happened. Option 1 flips the polarity into a confession, option 3 confuses denying with refusing, which is about a future action, and option 4 turns it into a plan.' }
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
          stem: 'The cooperative expanded the covered market. Takings for the fruit sellers rose.',
          options: [
            'The expansion of the covered market raised the cooperative\'s rent for the fruit sellers.',
            'The cooperative\'s expansion of the covered market raised takings for the fruit sellers.',
            'A rise in takings raised the cooperative\'s expansion of the covered market.',
            'The cooperative\'s expanded of the covered market raised takings for the fruit sellers.'
          ],
          answer: 1,
          why: 'The doer is kept as a possessive and the thing done follows <em>of</em>: doer + nominalization + <em>of</em> + object. Option 1 invents a claim about rent, option 3 runs the arrow backwards, and option 4 never turns the verb into a noun.' },

        { id: 'm2-22', type: 'choose', tag: 'nom-structure', level: 'B2+',
          stem: 'The district vaccinated the orchard workers early. Absences during the harvest fell sharply.',
          options: [
            'The early vaccination of the orchard workers brought about a sharp fall in absences.',
            'The district brought about a sharp fall in the vaccination of the orchard workers.',
            'A sharp fall in absences brought about the early vaccination of the orchard workers.',
            'The early vaccinated of the orchard workers brought about a sharp fall in absences.'
          ],
          answer: 0,
          why: 'With the doer deleted, both facts become noun phrases joined by one strong verb. Option 2 makes the vaccination itself the thing that fell, option 3 reverses the causation, and option 4 leaves the verb unnominalized.' },

        { id: 'm2-23', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'Growers planted a second rice crop. Demand for irrigation water rose.',
          options: [
            'The planting of a second rice crop resulted from a rise in demand for irrigation water.',
            'The growers resulted from a rise in demand for irrigation water.',
            'A rise in demand for irrigation water resulted from the planting of a second rice crop.',
            'A risen in demand for irrigation water resulted from the planting of a second crop.'
          ],
          answer: 2,
          why: '<em>Result from</em> points backwards, so the outcome must be the subject and the cause must follow the verb. Option 1 puts the cause in the subject slot and so reverses the claim, option 2 makes people rather than an outcome the subject, and option 4 uses a participle where a noun is needed.' },

        { id: 'm2-24', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'The museum opened a late-afternoon session. Queues at the midday ticket desk grew shorter.',
          options: [
            'Shorter queues at the midday desk led to the museum\'s opening of a late session.',
            'The late session\'s opening of the museum led to shorter queues at the midday desk.',
            'The museum\'s opening of a late session led to a shorter museum day for visitors.',
            'The museum\'s opening of a late session led to shorter queues at the midday desk.'
          ],
          answer: 3,
          why: 'Draw the arrow before reading the options: the opening comes first and the shorter queues follow. Option 1 reverses it, option 2 swaps the doer and the thing done, and option 3 changes what grew shorter.' },

        { id: 'm2-25', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'The market committee raised the stall rents. Complaints from traders rose sharply.',
          options: [
            'A sharp rise in complaints from traders produced the increase in the stall rents.',
            'The increase in the stall rents produced a sharp rise in complaints from traders.',
            'The increase in the stall rents produced a sharp fall in complaints from traders.',
            'The increased of the stall rents produced a sharp rise in complaints from traders.'
          ],
          answer: 1,
          why: '<em>Produce</em> points forwards, so the cause is the subject and the effect follows. Option 1 reverses the direction, option 3 inverts the second fact, and option 4 never builds the noun <em>increase</em>.' }
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
          stem: '<ul><li><b>A</b>That standing water ruined most of the dried goods stored at floor level.</li><li><b>B</b>The committee has therefore applied for a grant to raise the whole floor.</li><li><b>C</b>Last August the covered market was standing under thirty centimetres of floodwater for nine days.</li><li><b>D</b>Because of those losses, the traders moved their sacks onto metal racks.</li></ul>',
          options: ['C-A-D-B', 'C-D-A-B', 'A-C-D-B', 'D-C-A-B'],
          answer: 0,
          why: 'C is the only sentence that names everything for the first time, and its past continuous sets the scene. <em>That standing water</em> in A points back at the floodwater, <em>those losses</em> in D can only mean the ruined goods, and <em>therefore</em> in B marks the closing response.' },

        { id: 'm2-27', type: 'choose', tag: 'coh-reference', level: 'B2+',
          stem: '<ul><li><b>A</b>These crowds wore a deep groove into the sandstone steps leading to the shrine.</li><li><b>B</b>Tour operators are now asking for a timed-entry system so that the side path is not worn away too.</li><li><b>C</b>Because of that damage, the abbot closed the old stairway and opened a side path.</li><li><b>D</b>Throughout the dry season the hill temple was welcoming more than two thousand visitors a day.</li></ul>',
          options: ['D-C-A-B', 'D-A-C-B', 'A-D-C-B', 'C-D-A-B'],
          answer: 1,
          why: 'D opens with background and full nouns. <em>These crowds</em> in A must follow it, <em>that damage</em> in C can only mean the worn steps, and B is the demand that looks beyond the incident, since it needs the side path to exist already.' },

        { id: 'm2-28', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: '<ul><li><b>A</b>Because of that shortfall, several families took work in the town for the first time.</li><li><b>B</b>A long dry spell in March left the mango orchards on the ridge with hardly any fruit.</li><li><b>C</b>The growers\' group is therefore testing two drought-tolerant varieties this season.</li><li><b>D</b>That thin crop cut the growers\' earnings to a third of the usual figure.</li></ul>',
          options: ['B-A-D-C', 'D-B-A-C', 'A-B-D-C', 'B-D-A-C'],
          answer: 3,
          why: 'B states the cause with full nouns and no backward reference. <em>That thin crop</em> in D points straight at the missing fruit, <em>that shortfall</em> in A can only mean the lost earnings, and <em>therefore</em> in C closes the paragraph.' },

        { id: 'm2-29', type: 'choose', tag: 'coh-order', level: 'C1',
          stem: '<ul><li><b>A</b>Last winter the district clinic was running its vaccination sessions with a single refrigerator.</li><li><b>B</b>The health office has since bought a second refrigerator and a generator to go with it.</li><li><b>C</b>That one unit failed twice in three weeks, and every dose inside had to be thrown away.</li><li><b>D</b>As a result of those failures, families from the outer villages were turned away on four mornings.</li></ul>',
          options: ['A-D-C-B', 'C-A-D-B', 'A-C-D-B', 'D-A-C-B'],
          answer: 2,
          why: 'A is the only opener without a backward reference. <em>That one unit</em> in C points at the single refrigerator, <em>those failures</em> in D can only mean the two breakdowns, and <em>since</em> in B marks the response that closes.' },

        { id: 'm2-30', type: 'choose', tag: 'coh-closing', level: 'C1',
          stem: '<ul><li><b>A</b>Those classes now bring in more than the cloth ever did, and two neighbouring shops have copied the idea.</li><li><b>B</b>When the border crossing closed, that single market disappeared within a month.</li><li><b>C</b>For two years a small weaving workshop in the old quarter had been selling almost all of its cloth to foreign visitors.</li><li><b>D</b>The loss forced the owner to teach short weaving courses to school groups instead.</li></ul>',
          options: ['B-C-D-A', 'C-B-D-A', 'C-D-B-A', 'D-C-B-A'],
          answer: 1,
          why: 'C introduces the workshop and its buyers with full nouns. <em>That single market</em> in B can only mean the foreign visitors, <em>The loss</em> in D needs the market to have gone already, and <em>Those classes</em> in A needs the courses named in D.' }
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
          stem: 'One of the four parts is wrong. Find it.',
          words: ['During the festival week', 'the tour company denied', 'to raise its ticket prices', 'at the hill temple.'],
          answer: 2,
          fix: 'raising its ticket prices',
          why: '<em>Deny</em> belongs to the closed group of verbs that take only the <em>-ing</em> form and never <em>to</em> plus an infinitive. Nothing else in the sentence is at fault.' },

        { id: 'm2-32', type: 'spot', tag: 'tense-marker', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The district office', 'has drained the lower paddy fields', 'twice a week', 'throughout the whole of last monsoon season.'],
          answer: 1,
          fix: 'drained the lower paddy fields',
          why: 'A closed time phrase settles the tense before anything else is considered. <em>Last monsoon season</em> is a finished window, and the present perfect cannot live inside one, so the past simple is required.' },

        { id: 'm2-33', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Spray the mango blossom before sunrise', 'is now common practice', 'in the orchards', 'along the ridge.'],
          answer: 0,
          fix: 'Spraying the mango blossom before sunrise',
          why: 'A bare verb cannot be a subject in English; only the <em>-ing</em> form does the noun job. The singular <em>is</em> is already correct, because the whole <em>-ing</em> phrase counts as one idea.' },

        { id: 'm2-34', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Weighing the sacks of milled rice', 'at the market gate', 'were the slowest part', 'of the whole morning.'],
          answer: 2,
          fix: 'was the slowest part',
          why: 'The subject is the <em>-ing</em> phrase, which is singular however many plural nouns trail behind it. Cover everything between <em>Weighing</em> and the verb and the agreement becomes obvious.' },

        { id: 'm2-35', type: 'spot', tag: 'part-fragment', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The collapse of the river footbridge', 'stranding the orchard villages', 'on the far bank', 'for most of August.'],
          answer: 1,
          fix: 'stranded the orchard villages',
          why: 'Every complete sentence needs one verb carrying tense, and a participle carries none. As written this is a long noun phrase with no predicate at all.' },

        { id: 'm2-36', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The health committee agreed that the clinic should', 'waive the registration fee', 'for the flooded villages', 'and extending its evening hours.'],
          answer: 3,
          fix: 'and extend its evening hours',
          why: 'Verbs joined by <em>and</em> must share the form their governor demands. Read each branch straight from <em>should</em>: <em>should waive</em> holds, <em>should extending</em> does not.' },

        { id: 'm2-37', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Surprising by the number of visitors', 'who arrived before the gate opened,', 'the guides began', 'the first tour an hour early.'],
          answer: 0,
          fix: 'Surprised by the number of visitors',
          why: 'The <em>-ing</em> form describes whatever causes the feeling, the <em>-ed</em> form whoever has it. The crowd is surprising; the guides who react to it are surprised.' },

        { id: 'm2-38', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Many of the older patients', 'found the walk from the outer villages', 'to the vaccination tent', 'long and deeply tired.'],
          answer: 3,
          fix: 'long and deeply tiring',
          why: 'The walk is the source of the feeling and so is tiring; the patients receive it and so are tired. The arrow runs from cause to person, never back.' },

        { id: 'm2-39', type: 'spot', tag: 'vform-gerund-verb', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Until the heavy rain had eased,', 'the orchard owner postponed', 'to clear the irrigation ditches', 'beside the lower plots.'],
          answer: 2,
          fix: 'clearing the irrigation ditches',
          why: '<em>Postpone</em> takes an <em>-ing</em> form and never <em>to</em> plus an infinitive, in the same way as <em>delay</em> and <em>put off</em>. The rest of the sentence is sound.' },

        { id: 'm2-40', type: 'spot', tag: 'nom-suffix', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Guides welcomed the town\'s', 'demolish of the ruined gatehouse,', 'which had blocked the path', 'to the river shrine for years.'],
          answer: 1,
          fix: 'demolition of the ruined gatehouse,',
          why: 'After a possessive and before <em>of</em> the slot needs a noun, and the noun built from <em>demolish</em> is <em>demolition</em>. A bare verb cannot sit in a noun slot however clear the meaning is.' }
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
          passage: 'From the first of next month, convenience stores across the province will charge two baht for every plastic carrier bag, and shoppers who bring a bag of their own will pay nothing. The chains that agreed to the charge say the aim is not revenue but habit: where a similar charge has been in force for several years, the number of bags handed out has fallen by about eight in ten. The small sum collected is to be passed to the crews who clear the drains, since thin carrier bags are the item most often pulled from the drains that flood the market district each monsoon.\n\nShop managers are less enthusiastic. A customer who buys hot food at midday, they say, has nowhere to put it, and the charge falls hardest on people who shop on the way home rather than once a week by car. Waste collectors raise a different objection: households that once reused carrier bags for their rubbish are buying thicker bags instead, so the weight of plastic leaving each house may not fall at all. The province has promised figures after one year.',
          source: 'Written for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The difficulty customers face when they buy hot food at midday.',
            'A plan to remove all plastic packaging from convenience stores.',
            'A decision to give every shopper a free reusable bag at the till.',
            'A charge for plastic carrier bags in shops and the objections to it.'
          ],
          answer: 3,
          why: 'The first paragraph gives the charge and its rationale and the second gives the case against, so the main idea joins the two halves. Option 1 is one supporting detail, and options 2 and 3 describe measures the passage never mentions.' },

        { id: 'm2-42', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'From the first of next month, convenience stores across the province will charge two baht for every plastic carrier bag, and shoppers who bring a bag of their own will pay nothing. The chains that agreed to the charge say the aim is not revenue but habit: where a similar charge has been in force for several years, the number of bags handed out has fallen by about eight in ten. The small sum collected is to be passed to the crews who clear the drains, since thin carrier bags are the item most often pulled from the drains that flood the market district each monsoon.\n\nShop managers are less enthusiastic. A customer who buys hot food at midday, they say, has nowhere to put it, and the charge falls hardest on people who shop on the way home rather than once a week by car. Waste collectors raise a different objection: households that once reused carrier bags for their rubbish are buying thicker bags instead, so the weight of plastic leaving each house may not fall at all. The province has promised figures after one year.',
          source: 'Written for classroom use.',
          stem: 'According to the passage, what do the chains say the charge is meant to achieve?',
          options: [
            'A steady income that will pay for the new drains in the market district.',
            'A change in what shoppers do, rather than money for the stores.',
            'A fall in the price that shoppers pay for hot food at midday.',
            'A reduction in the number of convenience stores in the province.'
          ],
          answer: 1,
          why: 'One clause carries the answer: the aim is <em>not revenue but habit</em>. Option 1 reverses that, and options 3 and 4 name results the passage never claims for the charge.' },

        { id: 'm2-43', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'From the first of next month, convenience stores across the province will charge two baht for every plastic carrier bag, and shoppers who bring a bag of their own will pay nothing. The chains that agreed to the charge say the aim is not revenue but habit: where a similar charge has been in force for several years, the number of bags handed out has fallen by about eight in ten. The small sum collected is to be passed to the crews who clear the drains, since thin carrier bags are the item most often pulled from the drains that flood the market district each monsoon.\n\nShop managers are less enthusiastic. A customer who buys hot food at midday, they say, has nowhere to put it, and the charge falls hardest on people who shop on the way home rather than once a week by car. Waste collectors raise a different objection: households that once reused carrier bags for their rubbish are buying thicker bags instead, so the weight of plastic leaving each house may not fall at all. The province has promised figures after one year.',
          source: 'Written for classroom use.',
          stem: 'What cause and effect relationship do the waste collectors point to?',
          options: [
            'Households that once reused carrier bags now buy thicker ones, so the weight of plastic may not fall.',
            'Shoppers who pay two baht a bag buy less food, so the stores take less money each week.',
            'Blocked drains flood the market district, so the crews who clear them are paid from the charge.',
            'Customers carry hot food home in their own bags, so more rubbish is left in the street.'
          ],
          answer: 0,
          why: 'The question names the party, so the arrow must be the collectors\' own: reused bags are replaced by bought ones, and the total weight of plastic stays where it was. Option 3 belongs to the first paragraph, and options 2 and 4 are claims the passage never makes.' },

        { id: 'm2-44', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'From the first of next month, convenience stores across the province will charge two baht for every plastic carrier bag, and shoppers who bring a bag of their own will pay nothing. The chains that agreed to the charge say the aim is not revenue but habit: where a similar charge has been in force for several years, the number of bags handed out has fallen by about eight in ten. The small sum collected is to be passed to the crews who clear the drains, since thin carrier bags are the item most often pulled from the drains that flood the market district each monsoon.\n\nShop managers are less enthusiastic. A customer who buys hot food at midday, they say, has nowhere to put it, and the charge falls hardest on people who shop on the way home rather than once a week by car. Waste collectors raise a different objection: households that once reused carrier bags for their rubbish are buying thicker bags instead, so the weight of plastic leaving each house may not fall at all. The province has promised figures after one year.',
          source: 'Written for classroom use.',
          stem: 'What is the author\'s primary intention in the second paragraph?',
          options: [
            'To explain how carrier bags are made and why they are so thin.',
            'To set out the objections raised by shop managers and waste collectors.',
            'To compare the charge here with the charges used in other countries.',
            'To urge the province to abandon the charge before it comes into force.'
          ],
          answer: 1,
          why: 'Answer a purpose question with a verb. The paragraph is built from <em>less enthusiastic</em>, <em>they say</em> and <em>raise a different objection</em>, so its job is to present the case against. Option 3 describes the first paragraph, and option 4 escalates far beyond anything the writer says.' },

        { id: 'm2-45', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'From the first of next month, convenience stores across the province will charge two baht for every plastic carrier bag, and shoppers who bring a bag of their own will pay nothing. The chains that agreed to the charge say the aim is not revenue but habit: where a similar charge has been in force for several years, the number of bags handed out has fallen by about eight in ten. The small sum collected is to be passed to the crews who clear the drains, since thin carrier bags are the item most often pulled from the drains that flood the market district each monsoon.\n\nShop managers are less enthusiastic. A customer who buys hot food at midday, they say, has nowhere to put it, and the charge falls hardest on people who shop on the way home rather than once a week by car. Waste collectors raise a different objection: households that once reused carrier bags for their rubbish are buying thicker bags instead, so the weight of plastic leaving each house may not fall at all. The province has promised figures after one year.',
          source: 'Written for classroom use.',
          stem: 'What follow-up action is implied as the next step for the charge?',
          options: [
            'Thicker rubbish bags will be taxed as soon as the first year ends.',
            'The charge will be raised every year until bag use stops entirely.',
            'Small shops will be excused from the charge once the drains are cleared.',
            'Figures on how the charge has worked will be published after a year.'
          ],
          answer: 3,
          why: 'The last sentence carries the follow-up, and the answer must be the same size as it: promised figures after one year. The other three go further than any clause in the passage allows.' }
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
          passage: 'Enrolment at after-school tutoring centres has roughly doubled in a decade, and most students in the academic streams now attend one in their final year. The appeal is easy to understand. A tutoring class is small, it moves at the pace of the students in the room, and it is built around the papers themselves: past questions, timed practice and a record of the topics on which a student keeps losing marks. Teachers in the centres are free to skip whatever the syllabus requires but the examination does not reward. Parents treat the fees as insurance, and many value the supervised hours in the early evening.\n\nThe objections are not about whether tutoring raises scores. Researchers who follow students through the system argue that it raises them without necessarily raising understanding, because a class organised around past papers teaches the shape of the questions rather than the subject behind them. School teachers report a second effect: pupils who have already covered a topic in a centre sit through the school lesson doing nothing, while those who have not fall further behind, so a single class now holds two audiences. A third complaint is simply cost, since a family that cannot pay is competing against families that can. Several schools have begun running free evening sessions of their own.',
          source: 'Written for classroom use.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The growth of after-school tutoring and the concerns it has raised.',
            'The number of hours a tutoring centre stays open each evening.',
            'A proposal to close every private tutoring centre in the country.',
            'The way past examination questions are written and then marked.'
          ],
          answer: 0,
          why: 'The first paragraph gives the growth and its appeal and the second gives the objections, so the main idea joins the two halves. Option 2 is a single detail, and options 3 and 4 describe things the passage never discusses.' },

        { id: 'm2-47', type: 'read', tag: 'read-detail', level: 'C1',
          passage: 'Enrolment at after-school tutoring centres has roughly doubled in a decade, and most students in the academic streams now attend one in their final year. The appeal is easy to understand. A tutoring class is small, it moves at the pace of the students in the room, and it is built around the papers themselves: past questions, timed practice and a record of the topics on which a student keeps losing marks. Teachers in the centres are free to skip whatever the syllabus requires but the examination does not reward. Parents treat the fees as insurance, and many value the supervised hours in the early evening.\n\nThe objections are not about whether tutoring raises scores. Researchers who follow students through the system argue that it raises them without necessarily raising understanding, because a class organised around past papers teaches the shape of the questions rather than the subject behind them. School teachers report a second effect: pupils who have already covered a topic in a centre sit through the school lesson doing nothing, while those who have not fall further behind, so a single class now holds two audiences. A third complaint is simply cost, since a family that cannot pay is competing against families that can. Several schools have begun running free evening sessions of their own.',
          source: 'Written for classroom use.',
          stem: 'According to the passage, what is a tutoring class built around?',
          options: [
            'The parts of the syllabus that the school has not yet reached.',
            'A fixed programme that every centre in the country must follow.',
            'Past questions, timed practice and a record of a student\'s weak topics.',
            'Group projects in which students explain the material to each other.'
          ],
          answer: 2,
          why: 'One clause carries it: the class is built around <em>past questions, timed practice and a running record</em> of where marks are lost. The other three describe arrangements the passage never attributes to the centres.' },

        { id: 'm2-48', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Enrolment at after-school tutoring centres has roughly doubled in a decade, and most students in the academic streams now attend one in their final year. The appeal is easy to understand. A tutoring class is small, it moves at the pace of the students in the room, and it is built around the papers themselves: past questions, timed practice and a record of the topics on which a student keeps losing marks. Teachers in the centres are free to skip whatever the syllabus requires but the examination does not reward. Parents treat the fees as insurance, and many value the supervised hours in the early evening.\n\nThe objections are not about whether tutoring raises scores. Researchers who follow students through the system argue that it raises them without necessarily raising understanding, because a class organised around past papers teaches the shape of the questions rather than the subject behind them. School teachers report a second effect: pupils who have already covered a topic in a centre sit through the school lesson doing nothing, while those who have not fall further behind, so a single class now holds two audiences. A third complaint is simply cost, since a family that cannot pay is competing against families that can. Several schools have begun running free evening sessions of their own.',
          source: 'Written for classroom use.',
          stem: 'Why do researchers say that tutoring can raise scores without raising understanding?',
          options: [
            'Because centres refuse to take any student who is already falling behind.',
            'Because the classes are too large for a teacher to answer questions in.',
            'Because students are too tired in the evening to take in anything new.',
            'Because a class built on past papers teaches the shape of the questions.'
          ],
          answer: 3,
          why: 'The researchers draw one arrow: a class organised around past papers teaches the form of the questions rather than the subject behind them. The other three name causes the passage never gives, and option 2 contradicts the statement that the classes are small.' },

        { id: 'm2-49', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'Enrolment at after-school tutoring centres has roughly doubled in a decade, and most students in the academic streams now attend one in their final year. The appeal is easy to understand. A tutoring class is small, it moves at the pace of the students in the room, and it is built around the papers themselves: past questions, timed practice and a record of the topics on which a student keeps losing marks. Teachers in the centres are free to skip whatever the syllabus requires but the examination does not reward. Parents treat the fees as insurance, and many value the supervised hours in the early evening.\n\nThe objections are not about whether tutoring raises scores. Researchers who follow students through the system argue that it raises them without necessarily raising understanding, because a class organised around past papers teaches the shape of the questions rather than the subject behind them. School teachers report a second effect: pupils who have already covered a topic in a centre sit through the school lesson doing nothing, while those who have not fall further behind, so a single class now holds two audiences. A third complaint is simply cost, since a family that cannot pay is competing against families that can. Several schools have begun running free evening sessions of their own.',
          source: 'Written for classroom use.',
          stem: 'What is the author\'s primary intention in the second paragraph?',
          options: [
            'To set out the objections that researchers, teachers and families raise.',
            'To advise parents on how to choose between the tutoring centres.',
            'To explain how a centre decides what to charge for each course.',
            'To demand that private tutoring be banned in the year before the papers.'
          ],
          answer: 0,
          why: 'Name the job the paragraph is doing. It is organised as a list of complaints, marked by <em>the objections</em>, <em>a second effect</em> and <em>a third complaint</em>. Option 4 escalates those complaints into a demand the writer never makes.' },

        { id: 'm2-50', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'Enrolment at after-school tutoring centres has roughly doubled in a decade, and most students in the academic streams now attend one in their final year. The appeal is easy to understand. A tutoring class is small, it moves at the pace of the students in the room, and it is built around the papers themselves: past questions, timed practice and a record of the topics on which a student keeps losing marks. Teachers in the centres are free to skip whatever the syllabus requires but the examination does not reward. Parents treat the fees as insurance, and many value the supervised hours in the early evening.\n\nThe objections are not about whether tutoring raises scores. Researchers who follow students through the system argue that it raises them without necessarily raising understanding, because a class organised around past papers teaches the shape of the questions rather than the subject behind them. School teachers report a second effect: pupils who have already covered a topic in a centre sit through the school lesson doing nothing, while those who have not fall further behind, so a single class now holds two audiences. A third complaint is simply cost, since a family that cannot pay is competing against families that can. Several schools have begun running free evening sessions of their own.',
          source: 'Written for classroom use.',
          stem: 'What step have some schools already taken in response to the complaints?',
          options: [
            'They have started free evening sessions of their own.',
            'They have asked the centres to publish their fees in full.',
            'They have stopped setting any homework in the final year.',
            'They have moved the school day into the early evening.'
          ],
          answer: 0,
          why: 'The closing sentence states the step, and the answer must match its size: several schools now run free evening sessions. The other three are actions no clause in the passage reports.' }
      ]
    }
  ]
});
