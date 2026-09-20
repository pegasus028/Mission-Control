/* ===========================================================================
   FULL SIMULATION 3  —  m3
   =========================================================================== */
MOCKS.push({
  id: 'm3',
  name: 'Full Simulation 3',
  blurb: 'The hardest of the three papers: a full hour at the top of the B2 to C1 range, on fandom, the delivery round, the air of the city, the reef and the dig.',
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
          stem: 'A ______ reader paid for every title on the school library wish list and asked that no name be attached to the gift.',
          options: ['malicious', 'benevolent', 'rogue', 'cognitive'],
          answer: 1,
          why: '<em>Benevolent</em> means kindly and wishing to do good, which is what paying for the whole list and refusing the credit shows. <em>Malicious</em> is the opposite intention, <em>rogue</em> describes something working outside the rules, and <em>cognitive</em> belongs to thinking rather than to giving.' },

        { id: 'm3-2', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'The recommendation feed gets sharper week by week through ______, since every track a listener skips becomes one more example for the system to learn from.',
          options: ['data encryption', 'cloud computing', 'machine learning', 'singularity'],
          answer: 2,
          why: '<em>Machine learning</em> is the technique by which a system improves from examples, which the reason clause spells out. <em>Cloud computing</em> names where the work runs, <em>data encryption</em> names how data is hidden, and the <em>singularity</em> is a hypothetical moment, not a method.' },

        { id: 'm3-3', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Keepers who have worked with the herd for years insist that elephants are ______ animals, because they mourn their dead and recognise themselves in a mirror.',
          options: ['ubiquitous', 'rogue', 'pervasive', 'sentient'],
          answer: 3,
          why: '<em>Sentient</em> means able to feel and to be aware, which is what mourning and self-recognition demonstrate. <em>Rogue</em> is a real word for a single elephant outside the herd, but it says nothing about feeling, and the other two describe how widely something is found.' },

        { id: 'm3-4', type: 'choose', tag: 'vocab-u3', level: 'C1',
          stem: 'Revising with three screens open raises the ______ load so high that almost nothing of the chapter survives an hour later.',
          options: ['cognitive', 'bipartisan', 'sentient', 'ubiquitous'],
          answer: 0,
          why: '<em>Cognitive</em> means relating to thinking and understanding, and <em>cognitive load</em> is the standard phrase for the demand a task places on the mind. <em>Bipartisan</em> belongs to politics, <em>sentient</em> describes a creature rather than a load, and <em>ubiquitous</em> describes where something is found.' },

        { id: 'm3-5', type: 'choose', tag: 'vocab-u4', level: 'C1',
          stem: 'Engineers traced the fault to one ______ sensor that went on reporting readings of its own long after the whole line had been recalibrated.',
          options: ['benevolent', 'nefarious', 'rogue', 'malicious'],
          answer: 2,
          why: '<em>Rogue</em> describes something that behaves outside the control it is supposed to sit under, which is exactly what a sensor ignoring recalibration does. The other three all name an intention, and a sensor has none.' }
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

        { id: 'm3-6', type: 'gap', blank: '(6)', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Mali', text: 'Since the new album came out, the band\'s tote bags and badges have become so ___(6)___ that I can count three or four separate ones on every bus I take.' },
            { who: 'Kit', text: 'The forum is another matter. It is just one more ___(7)___ now, where the same opinion comes back a little louder each time it is repeated.' },
            { who: 'Mali', text: 'The album itself has done nothing but ___(8)___ the fanbase: half of them call it the best work yet, and half want the old sound back.' },
            { who: 'Kit', text: 'And the sellers who appeared last week ___(9)___ fans who are waiting for a restock, taking payment for seats that were never booked.' },
            { who: 'Mali', text: 'Someone even made a few ___(10)___ edits to the tour page out of pure spite, and within an hour thousands believed the dates were off.' },
            { who: 'Kit', text: 'Which is an argument for checking the official page before the forum, not for leaving the fandom altogether.' }
          ],
          stem: 'Choose the best option for gap (6).',
          options: ['ubiquitous', 'pervasive', 'sentient', 'benevolent'],
          answer: 0,
          why: '<em>Ubiquitous</em> means found everywhere you look, which is what counting three or four bags on every bus describes. <em>Pervasive</em> is used of something that spreads through a place, such as a smell or an anxiety, not of countable objects being seen repeatedly. <em>Sentient</em> and <em>benevolent</em> are both claims about a mind — being able to feel, and wishing people well — and a tote bag has neither.' },

        { id: 'm3-7', type: 'gap', blank: '(7)', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Mali', text: 'Since the new album came out, the band\'s tote bags and badges have become so ___(6)___ that I can count three or four separate ones on every bus I take.' },
            { who: 'Kit', text: 'The forum is another matter. It is just one more ___(7)___ now, where the same opinion comes back a little louder each time it is repeated.' },
            { who: 'Mali', text: 'The album itself has done nothing but ___(8)___ the fanbase: half of them call it the best work yet, and half want the old sound back.' },
            { who: 'Kit', text: 'And the sellers who appeared last week ___(9)___ fans who are waiting for a restock, taking payment for seats that were never booked.' },
            { who: 'Mali', text: 'Someone even made a few ___(10)___ edits to the tour page out of pure spite, and within an hour thousands believed the dates were off.' },
            { who: 'Kit', text: 'Which is an argument for checking the official page before the forum, not for leaving the fandom altogether.' }
          ],
          stem: 'Choose the best option for gap (7).',
          options: ['singularity', 'consciousness', 'susceptibility', 'echo chamber'],
          answer: 3,
          why: 'An <em>echo chamber</em> is a space in which your own opinion is returned to you, which the relative clause defines: <em>the same opinion comes back a little louder each time</em>. The other three name a moment, an awareness and a weakness, and none of them is a place.' },

        { id: 'm3-8', type: 'gap', blank: '(8)', tag: 'vocab-u3', level: 'C1',
          lines: [
            { who: 'Mali', text: 'Since the new album came out, the band\'s tote bags and badges have become so ___(6)___ that I can count three or four separate ones on every bus I take.' },
            { who: 'Kit', text: 'The forum is another matter. It is just one more ___(7)___ now, where the same opinion comes back a little louder each time it is repeated.' },
            { who: 'Mali', text: 'The album itself has done nothing but ___(8)___ the fanbase: half of them call it the best work yet, and half want the old sound back.' },
            { who: 'Kit', text: 'And the sellers who appeared last week ___(9)___ fans who are waiting for a restock, taking payment for seats that were never booked.' },
            { who: 'Mali', text: 'Someone even made a few ___(10)___ edits to the tour page out of pure spite, and within an hour thousands believed the dates were off.' },
            { who: 'Kit', text: 'Which is an argument for checking the official page before the forum, not for leaving the fandom altogether.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['overshadow', 'polarize', 'manipulate', 'prey on'],
          answer: 1,
          why: 'To <em>polarize</em> a group is to split it into two opposed camps, which the colon then counts out: <em>half … and half</em>. <em>Manipulate</em> and <em>prey on</em> both need someone acting on the fans for gain, and an album is not acting on anyone. <em>Overshadow</em> would mean the album made the fanbase seem unimportant, which is not what a split into halves describes.' },

        { id: 'm3-9', type: 'gap', blank: '(9)', tag: 'vocab-collocation', level: 'C1',
          lines: [
            { who: 'Mali', text: 'Since the new album came out, the band\'s tote bags and badges have become so ___(6)___ that I can count three or four separate ones on every bus I take.' },
            { who: 'Kit', text: 'The forum is another matter. It is just one more ___(7)___ now, where the same opinion comes back a little louder each time it is repeated.' },
            { who: 'Mali', text: 'The album itself has done nothing but ___(8)___ the fanbase: half of them call it the best work yet, and half want the old sound back.' },
            { who: 'Kit', text: 'And the sellers who appeared last week ___(9)___ fans who are waiting for a restock, taking payment for seats that were never booked.' },
            { who: 'Mali', text: 'Someone even made a few ___(10)___ edits to the tour page out of pure spite, and within an hour thousands believed the dates were off.' },
            { who: 'Kit', text: 'Which is an argument for checking the official page before the forum, not for leaving the fandom altogether.' }
          ],
          stem: 'Choose the best option for gap (9).',
          options: ['polarize', 'manipulate', 'prey on', 'mislead'],
          answer: 2,
          why: 'To <em>prey on</em> people is to pick out those in a weak position and take something from them, which taking payment for seats that do not exist is. <em>Manipulate</em> and <em>mislead</em> act on what someone believes; only <em>prey on</em> carries the taking. <em>Polarize</em> would mean splitting the fans into two camps, and the sellers are taking money from them rather than dividing them.' },

        { id: 'm3-10', type: 'gap', blank: '(10)', tag: 'vocab-u4', level: 'C1',
          lines: [
            { who: 'Mali', text: 'Since the new album came out, the band\'s tote bags and badges have become so ___(6)___ that I can count three or four separate ones on every bus I take.' },
            { who: 'Kit', text: 'The forum is another matter. It is just one more ___(7)___ now, where the same opinion comes back a little louder each time it is repeated.' },
            { who: 'Mali', text: 'The album itself has done nothing but ___(8)___ the fanbase: half of them call it the best work yet, and half want the old sound back.' },
            { who: 'Kit', text: 'And the sellers who appeared last week ___(9)___ fans who are waiting for a restock, taking payment for seats that were never booked.' },
            { who: 'Mali', text: 'Someone even made a few ___(10)___ edits to the tour page out of pure spite, and within an hour thousands believed the dates were off.' },
            { who: 'Kit', text: 'Which is an argument for checking the official page before the forum, not for leaving the fandom altogether.' }
          ],
          stem: 'Choose the best option for gap (10).',
          options: ['malicious', 'nefarious', 'benevolent', 'rogue'],
          answer: 0,
          why: '<em>Malicious</em> means done in order to hurt, and <em>out of pure spite</em> gives exactly that motive. <em>Nefarious</em> needs a wicked scheme with something to gain, <em>benevolent</em> is the opposite, and <em>rogue</em> describes acting outside control rather than acting to wound.' }
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

        { id: 'm3-11', type: 'cloze', tag: 'cond-mixed', level: 'C1',
          passage: 'If the city had opened the eastern bypass a decade ago, the ring road ___(11)___ far less of the region\'s freight today. Not until volunteers fixed twenty cheap sensors to their balconies ___(12)___ anyone realise how bad the evening peak had become. ___(13)___ the air at the same junction every morning for a term, the volunteers could show a clear weekly cycle. Much of the interest came from ___(14)___ the readings as a colour map rather than a table. A line of hedging along the footpath is thought ___(15)___ up to a third of the dust whenever the air is still.',
          blank: '(11)',
          stem: 'Choose the best option for blank (11).',
          options: ['carries', 'will carry', 'would carry', 'would have carried'],
          answer: 2,
          why: 'The condition sits a decade back, but <em>today</em> puts the result in the present, so the result clause takes <em>would</em> + bare infinitive. <em>Carries</em> reports as fact the very thing the condition denies, <em>will carry</em> treats an unreal condition as a live future one, and <em>would have carried</em> would put the result back in the past as well.' },

        { id: 'm3-12', type: 'cloze', tag: 'inv-negative', level: 'C1',
          passage: 'If the city had opened the eastern bypass a decade ago, the ring road ___(11)___ far less of the region\'s freight today. Not until volunteers fixed twenty cheap sensors to their balconies ___(12)___ anyone realise how bad the evening peak had become. ___(13)___ the air at the same junction every morning for a term, the volunteers could show a clear weekly cycle. Much of the interest came from ___(14)___ the readings as a colour map rather than a table. A line of hedging along the footpath is thought ___(15)___ up to a third of the dust whenever the air is still.',
          blank: '(12)',
          stem: 'Choose the best option for blank (12).',
          options: ['did', 'does', 'had', 'was'],
          answer: 0,
          why: 'After the negative adverbial <em>Not until …</em> the main clause inverts, and with no auxiliary of its own the verb needs <em>do</em>: <em>did anyone realise</em>. <em>Had</em> and <em>was</em> cannot stand in front of the bare <em>realise</em>, and <em>does</em> contradicts the past tense of the rest.' },

        { id: 'm3-13', type: 'cloze', tag: 'part-perfect', level: 'C1',
          passage: 'If the city had opened the eastern bypass a decade ago, the ring road ___(11)___ far less of the region\'s freight today. Not until volunteers fixed twenty cheap sensors to their balconies ___(12)___ anyone realise how bad the evening peak had become. ___(13)___ the air at the same junction every morning for a term, the volunteers could show a clear weekly cycle. Much of the interest came from ___(14)___ the readings as a colour map rather than a table. A line of hedging along the footpath is thought ___(15)___ up to a third of the dust whenever the air is still.',
          blank: '(13)',
          stem: 'Choose the best option for blank (13).',
          options: ['Sampled', 'Having sampled', 'Having been sampled', 'To have sampled'],
          answer: 1,
          why: 'The volunteers did the sampling and finished it before they could show anything, so the participle is active and perfect: <em>Having sampled</em>. The two passive forms would mean the volunteers were sampled, and the infinitive gives a purpose the sentence does not want.' },

        { id: 'm3-14', type: 'cloze', tag: 'vform-prep-ing', level: 'C1',
          passage: 'If the city had opened the eastern bypass a decade ago, the ring road ___(11)___ far less of the region\'s freight today. Not until volunteers fixed twenty cheap sensors to their balconies ___(12)___ anyone realise how bad the evening peak had become. ___(13)___ the air at the same junction every morning for a term, the volunteers could show a clear weekly cycle. Much of the interest came from ___(14)___ the readings as a colour map rather than a table. A line of hedging along the footpath is thought ___(15)___ up to a third of the dust whenever the air is still.',
          blank: '(14)',
          stem: 'Choose the best option for blank (14).',
          options: ['present', 'presenting', 'to present', 'to have presented'],
          answer: 1,
          why: '<em>From</em> is a preposition, so the slot needs a noun or the one verb form that can do a noun\'s job, and of the four offered only the <em>-ing</em> form does. Put a plain noun in the slot to hear it: <em>came from the presentation of the readings</em>.' },

        { id: 'm3-15', type: 'cloze', tag: 'rep-passive', level: 'C1',
          passage: 'If the city had opened the eastern bypass a decade ago, the ring road ___(11)___ far less of the region\'s freight today. Not until volunteers fixed twenty cheap sensors to their balconies ___(12)___ anyone realise how bad the evening peak had become. ___(13)___ the air at the same junction every morning for a term, the volunteers could show a clear weekly cycle. Much of the interest came from ___(14)___ the readings as a colour map rather than a table. A line of hedging along the footpath is thought ___(15)___ up to a third of the dust whenever the air is still.',
          blank: '(15)',
          stem: 'Choose the best option for blank (15).',
          options: ['to trap', 'to be trapped', 'to have trapped', 'to have been trapped'],
          answer: 0,
          why: 'The hedging does the trapping, so the infinitive is active, which rules out <em>to be trapped</em> and <em>to have been trapped</em>. <em>Whenever the air is still</em> frames a standing general fact rather than one finished episode, so the simple infinitive is needed and <em>to have trapped</em> is out as well.' }
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
          given: 'The rider remembered leaving the parcel by the side gate.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The rider made sure not to forget to leave the parcel there.',
            'The rider is about to leave the parcel by the side gate.',
            'The rider had a clear memory of having left the parcel there.',
            'The rider denied leaving any parcel by the side gate.'
          ],
          answer: 2,
          why: '<em>Remember</em> + <em>-ing</em> looks back at something already done. Option 1 is the infinitive meaning, <em>remember to do</em>, which is about not forgetting a duty; option 2 leaves the parcel still to be delivered instead of already delivered; and option 4 flips the polarity into a denial that any parcel was left.' },

        { id: 'm3-17', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'After the encore, the band went on playing for another half hour.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The band left the stage as soon as the encore had finished.',
            'The band continued the same performance for a further half hour.',
            'The band then moved on to a different kind of music altogether.',
            'The band promised to play for half an hour the following night.'
          ],
          answer: 1,
          why: '<em>Go on</em> + <em>-ing</em> means carry on with the same activity. Option 3 is <em>go on to do</em>, which marks a change to something new, and the other two move the playing off the stage or into the future.' },

        { id: 'm3-18', type: 'equiv', tag: 'equiv-pattern', level: 'B2+',
          given: 'The seller denied sending the wrong size to the customer.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The seller admitted that the wrong size had been sent out.',
            'The seller refused to send a replacement in the right size.',
            'The seller apologised for sending out the wrong size.',
            'The seller said that he had not sent the wrong size.'
          ],
          answer: 3,
          why: '<em>Deny</em> + <em>-ing</em> is a statement that you did not do the thing. Options 1 and 3 both concede that it happened, and option 2 is about a replacement the sentence never mentions.' },

        { id: 'm3-19', type: 'equiv', tag: 'part-passive', level: 'C1',
          given: 'The newly repainted community hall has drawn three new clubs in a single term.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'A hall that has just been repainted has attracted three new clubs.',
            'A hall that is still being repainted has lost three of its clubs.',
            'Three new clubs repainted the community hall during the term.',
            'The hall will be repainted once three new clubs have joined it.'
          ],
          answer: 0,
          why: 'The <em>-ed</em> premodifier is passive and finished: the hall was repainted, and the work is over. Option 2 makes it unfinished and reverses the result, option 3 makes the clubs the painters, and option 4 moves the painting into the future.' },

        { id: 'm3-20', type: 'equiv', tag: 'equiv-pattern', level: 'C1',
          given: 'The delivery app needs updating before the next big sale.',
          stem: 'Choose the closest meaning to the original sentence.',
          options: [
            'The app was updated shortly before the last big sale.',
            'The app is being updated all through the next big sale.',
            'The app has to be updated before the next big sale begins.',
            'The app has to update its prices at every big sale it runs.'
          ],
          answer: 2,
          why: '<em>Need</em> + <em>-ing</em> carries a passive meaning: the app must be updated by somebody. Option 4 makes the app the one doing the updating, and the other two shift the work into the past or into the sale itself.' }
      ]
    },

    /* --------------------------------------------- PART B III, items 21-25 */
    {
      code: 'B-III',
      part: 'PART B: GRAMMAR',
      title: 'Nominalization',
      instructions: 'Choose the best nominalized sentence — one noun phrase, one main verb — that combines the two provided sentences.',
      points: 0.5,
      items: [

        { id: 'm3-21', type: 'choose', tag: 'nom-agent', level: 'B2+',
          stem: 'The volunteers cleared the canal bank. The otters returned.',
          options: [
            'The canal bank\'s clearance of the volunteers led to the return of the otters.',
            'The volunteers cleared the canal bank, so the otters returned.',
            'The volunteers\' clearance of the canal bank led to the return of the otters.',
            'The return of the otters led to the volunteers\' clearance of the canal bank.'
          ],
          answer: 2,
          why: 'The agent stays as a possessive and the action becomes a noun: <em>the volunteers\' clearance of the canal bank</em>. Option 1 swaps agent and object, option 2 leaves both verbs where they were instead of building nouns, and option 4 reverses the causal arrow.' },

        { id: 'm3-22', type: 'choose', tag: 'nom-direction', level: 'C1',
          stem: 'The city resurfaced the cycle lane. Rider injuries fell.',
          options: [
            'A clear fall in rider injuries resulted from the resurfacing of the cycle lane.',
            'The resurfacing of the cycle lane resulted from a clear fall in rider injuries.',
            'The resurfacing of the cycle lane made the city the safest in the region.',
            'A clear fall in rider injuries resulted from the lane\'s resurfacing of the city.'
          ],
          answer: 0,
          why: 'Putting the outcome first and tracing it back with <em>resulted from</em> keeps the direction the base sentences give. Option 2 points the arrow the wrong way, option 3 adds a claim neither sentence makes, and option 4 swaps agent and object.' },

        { id: 'm3-23', type: 'choose', tag: 'nom-causeverb', level: 'C1',
          stem: 'The shop switched to paper packaging. Complaints about waste dropped.',
          options: [
            'The drop in complaints about waste caused the switch to paper packaging.',
            'The switch to paper packaging caused the shop to lose its main supplier.',
            'The shop switched to paper packaging, so complaints about waste dropped.',
            'The switch to paper packaging caused a drop in complaints about waste.'
          ],
          answer: 3,
          why: 'Both actions become nouns and one strong verb joins them in the given direction. Option 1 reverses that direction, option 2 invents a consequence, and option 3 keeps two full clauses instead of building nouns.' },

        { id: 'm3-24', type: 'choose', tag: 'nom-structure', level: 'C1',
          stem: 'The choir opened its rehearsals to beginners. Membership doubled.',
          options: [
            'The choir opened its rehearsals to beginners and membership doubled.',
            'A doubling of membership followed the opening of the rehearsals to beginners.',
            'The opening of the rehearsals to beginners followed a doubling of membership.',
            'The rehearsals\' opening of the choir produced a doubling of membership.'
          ],
          answer: 1,
          why: '<em>Followed</em> points backwards, so the outcome must stand first as the subject. Option 1 leaves both verbs where they were instead of building nouns, option 3 reverses the order of events, and option 4 swaps agent and object.' },

        { id: 'm3-25', type: 'choose', tag: 'nom-suffix', level: 'C1',
          stem: 'The club lowered its membership fee. Attendance rose sharply.',
          options: [
            'The sharp rise in attendance produced a lowering of the membership fee.',
            'The club lowered its membership fee, so attendance rose sharply.',
            'The lowering of the membership fee produced a sharp rise in the club\'s running costs.',
            'The lowering of the membership fee produced a sharp rise in attendance.'
          ],
          answer: 3,
          why: '<em>Lower</em> has no <em>-tion</em> or <em>-ment</em> form, so the gerund <em>lowering</em> does the noun work. Option 1 reverses the arrow, option 2 keeps two full clauses instead of building nouns, and option 3 reports a rise the base sentences never mention.' }
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
          stem: '<div class="orderblock"><p>A. That single drop of tickets sold out in under four minutes.</p><p>B. Last month, a band from the district was preparing its first arena show.</p><p>C. Because so many fans were left out, the band has added a second night.</p><p>D. The promoter released only two thousand seats for that show.</p></div>',
          options: ['B-D-A-C', 'B-A-D-C', 'D-B-A-C', 'B-D-C-A'],
          answer: 0,
          why: 'The past continuous in B lays down the background, <em>that show</em> in D needs B, <em>That single drop of tickets</em> in A needs D, and <em>Because so many fans were left out</em> in C closes the paragraph.' },

        { id: 'm3-27', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: '<div class="orderblock"><p>A. The riders were therefore sent the long way round by the ring road.</p><p>B. A sudden downpour closed two of the bridges into the old town last Friday.</p><p>C. That detour added forty minutes to every order they carried.</p><p>D. Because of those lost minutes, the company now wants a wet-weather route agreed in advance.</p></div>',
          options: ['B-C-A-D', 'B-A-D-C', 'A-B-C-D', 'B-A-C-D'],
          answer: 3,
          why: '<em>Therefore</em> in A must follow the closure in B, <em>That detour</em> in C must follow the ring road in A, and <em>those lost minutes</em> in D can only be the forty minutes in C.' },

        { id: 'm3-28', type: 'choose', tag: 'coh-reference', level: 'B2+',
          stem: '<div class="orderblock"><p>A. Parents blamed the confusion on a notice that gave two different starting times.</p><p>B. Last term, the school was trialling a Saturday reading club at the district library.</p><p>C. While the volunteers were setting out the chairs, half the younger children arrived an hour early.</p><p>D. Because of that notice, the organisers have since printed a single timetable for the whole term.</p></div>',
          options: ['C-B-A-D', 'B-C-A-D', 'B-A-C-D', 'B-C-D-A'],
          answer: 1,
          why: 'B sets the term-long background, C is the event inside it, <em>the confusion</em> in A can only be the early arrivals, and <em>that notice</em> in D can only be the notice named in A.' },

        { id: 'm3-29', type: 'choose', tag: 'coh-topic', level: 'B2+',
          stem: '<div class="orderblock"><p>A. These fumes left two families lying awake with their windows shut in the hottest week of the year.</p><p>B. A small printing shop on the corner runs its drying oven from six in the morning.</p><p>C. Because of those sleepless nights, the residents have asked for a taller flue.</p><p>D. Fumes from that oven drifted into the flats above for a fortnight.</p></div>',
          options: ['B-A-D-C', 'D-B-A-C', 'B-D-C-A', 'B-D-A-C'],
          answer: 3,
          why: 'Only B names anything for the first time. <em>That oven</em> in D needs B, <em>These fumes</em> in A needs D, and <em>those sleepless nights</em> in C can only be the nights in A.' },

        { id: 'm3-30', type: 'choose', tag: 'coh-closing', level: 'B2+',
          stem: '<div class="orderblock"><p>A. Volunteers were logging this season\'s nests when a line of quad bikes came over the dunes.</p><p>B. Two females turned back into the water within minutes of that noise.</p><p>C. Such interruptions have persuaded the district to fence the whole dune ridge.</p><p>D. A stretch of the south beach was given back to the turtles three years ago.</p></div>',
          options: ['A-D-B-C', 'D-A-B-C', 'D-B-A-C', 'D-A-C-B'],
          answer: 1,
          why: 'D introduces the beach that A works on, A puts the quad bikes into a continuous background, <em>that noise</em> in B can only be the bikes, and <em>Such interruptions</em> in C needs the two females turning back.' }
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
          words: ['The delivery firm postponed', 'to confirm its new charges', 'until the riders had voted', 'on the pay agreement.'],
          answer: 1,
          fix: 'confirming its new charges',
          why: '<em>Postpone</em> takes the <em>-ing</em> form and never <em>to</em> + infinitive, so it must be <em>postponed confirming its new charges</em>.' },

        { id: 'm3-32', type: 'spot', tag: 'tense-marker', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The community centre has installed', 'sixty solar panels', 'on its south roof', 'during the refurbishment of 2021.'],
          answer: 0,
          fix: 'The community centre installed',
          why: '<em>During the refurbishment of 2021</em> is a closed past time, and a closed time will not sit with the present perfect. It must be <em>The community centre installed</em>.' },

        { id: 'm3-33', type: 'spot', tag: 'vform-subject-ing', level: 'B2',
          stem: 'Identify the grammatical error.',
          words: ['Pack each order by hand', 'is still the slowest part', 'of the whole evening shift', 'at the district warehouse.'],
          answer: 0,
          fix: 'Packing each order by hand',
          why: 'A bare verb cannot be the subject of a sentence. Only the <em>-ing</em> form does the noun job, so it must be <em>Packing each order by hand</em>.' },

        { id: 'm3-34', type: 'spot', tag: 'vform-subject-ing', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Logging the sensor readings', 'every Monday morning', 'are now part', 'of the caretaker\'s routine.'],
          answer: 2,
          fix: 'is now part',
          why: 'Cover the middle and read it: <em>Logging … is</em>. The plural <em>readings</em> sits inside the subject and is not the head of it.' },

        { id: 'm3-35', type: 'spot', tag: 'part-fragment', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The loss of the only bridge into the village', 'leaving forty households', 'without a delivery service', 'for almost a fortnight.'],
          answer: 1,
          fix: 'left forty households',
          why: 'There is no finite verb anywhere in the sentence, so the participle has to become one: <em>left forty households</em>.' },

        { id: 'm3-36', type: 'spot', tag: 'vform-parallel', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Because the survey was already late, the team agreed that they should', 'first mark the damaged terraces and', 'noting the water temperature', 'before the rains began.'],
          answer: 2,
          fix: 'note the water temperature',
          why: 'Both verbs hang from the same <em>should</em>, so both must be bare infinitives: <em>mark … and note</em>.' },

        { id: 'm3-37', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Surprised news of the band\'s return', 'reached the forum', 'shortly after midnight', 'on Thursday.'],
          answer: 0,
          fix: 'Surprising news of the band\'s return',
          why: 'The news causes the feeling rather than having it, so the active participle is needed: <em>surprising news</em>. The <em>-ed</em> form would describe the fans who read it.' },

        { id: 'm3-38', type: 'spot', tag: 'vform-gerund-verb', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['The organisers considered', 'to move the beach clean-up', 'to the last weekend', 'of the cool season.'],
          answer: 1,
          fix: 'moving the beach clean-up',
          why: '<em>Consider</em> takes the <em>-ing</em> form or a that-clause, never <em>to</em> + infinitive: <em>considered moving the beach clean-up</em>.' },

        { id: 'm3-39', type: 'spot', tag: 'nom-suffix', level: 'C1',
          stem: 'Identify the grammatical error.',
          words: ['The club\'s renew of its old rehearsal room', 'has been praised', 'by every band', 'that uses the building.'],
          answer: 0,
          fix: 'The club\'s renewal of its old rehearsal room',
          why: 'A possessive and an <em>of</em>-phrase demand a noun between them, so the verb must be nominalized: <em>the club\'s renewal of its old rehearsal room</em>.' },

        { id: 'm3-40', type: 'spot', tag: 'part-edging-adj', level: 'B2+',
          stem: 'Identify the grammatical error.',
          words: ['Fans in the queue outside', 'were deeply worrying', 'about the second gate,', 'which had still not opened.'],
          answer: 1,
          fix: 'were deeply worried',
          why: 'The fans have the feeling rather than causing it, so the passive participle is needed: <em>were deeply worried</em>.' }
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
          passage: 'On a shallow bank off the east coast, a team of marine biologists has spent six years growing coral on ropes suspended above the seabed. Fragments the size of a finger are cut from colonies that survived the last bleaching, raised in floating nurseries for about a year, and then cemented onto bare limestone by divers. The method is cheap and needs no laboratory. On the first plot, coral cover rose from four per cent to nineteen in five years, and the fish counted along the same line of reef more than doubled.\n\nThe results have not settled the argument. Supporters point out that the parent colonies come from water that regularly reaches thirty-one degrees, so the transplants may carry some tolerance of heat with them. Sceptics reply that the plots are tiny, a few hundred square metres against the many square kilometres lost in a single warm year, and that every fragment still has to be carried out and fixed by hand. Both sides agree on one point. Unless the water itself stops warming, a restored terrace will simply bleach again.',
          source: 'Adapted for classroom use from marine restoration field reports.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The number of fish counted along one line of reef.',
            'A campaign to stop boats anchoring on the shallow bank.',
            'A method of regrowing coral, its results and the doubts about it.',
            'Proof that reefs can now be rebuilt faster than they are lost.'
          ],
          answer: 2,
          why: 'The first paragraph gives the method and the measured results, and the second gives the disagreement. The fish count is one supporting detail, the anchoring campaign is never mentioned, and the last sentence rules out the fourth option.' },

        { id: 'm3-42', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'On a shallow bank off the east coast, a team of marine biologists has spent six years growing coral on ropes suspended above the seabed. Fragments the size of a finger are cut from colonies that survived the last bleaching, raised in floating nurseries for about a year, and then cemented onto bare limestone by divers. The method is cheap and needs no laboratory. On the first plot, coral cover rose from four per cent to nineteen in five years, and the fish counted along the same line of reef more than doubled.\n\nThe results have not settled the argument. Supporters point out that the parent colonies come from water that regularly reaches thirty-one degrees, so the transplants may carry some tolerance of heat with them. Sceptics reply that the plots are tiny, a few hundred square metres against the many square kilometres lost in a single warm year, and that every fragment still has to be carried out and fixed by hand. Both sides agree on one point. Unless the water itself stops warming, a restored terrace will simply bleach again.',
          source: 'Adapted for classroom use from marine restoration field reports.',
          stem: 'According to the passage, where are the fragments kept before divers attach them to the reef?',
          options: [
            'In floating nurseries above the seabed',
            'In a laboratory on the mainland coast',
            'On the bare limestone of the first plot',
            'On ropes stretched along the shoreline'
          ],
          answer: 0,
          why: 'One clause carries it: the fragments are <em>raised in floating nurseries for about a year</em> before they are cemented onto limestone. The passage says the method <em>needs no laboratory</em>.' },

        { id: 'm3-43', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'On a shallow bank off the east coast, a team of marine biologists has spent six years growing coral on ropes suspended above the seabed. Fragments the size of a finger are cut from colonies that survived the last bleaching, raised in floating nurseries for about a year, and then cemented onto bare limestone by divers. The method is cheap and needs no laboratory. On the first plot, coral cover rose from four per cent to nineteen in five years, and the fish counted along the same line of reef more than doubled.\n\nThe results have not settled the argument. Supporters point out that the parent colonies come from water that regularly reaches thirty-one degrees, so the transplants may carry some tolerance of heat with them. Sceptics reply that the plots are tiny, a few hundred square metres against the many square kilometres lost in a single warm year, and that every fragment still has to be carried out and fixed by hand. Both sides agree on one point. Unless the water itself stops warming, a restored terrace will simply bleach again.',
          source: 'Adapted for classroom use from marine restoration field reports.',
          stem: 'Why do supporters believe the transplanted coral may withstand heat?',
          options: [
            'Divers cement each fragment onto limestone rather than sand.',
            'The colonies it comes from live in water that often reaches thirty-one degrees.',
            'The floating nurseries keep the fragments cool for their first year.',
            'The plots are small enough to be shaded during a warm spell.'
          ],
          answer: 1,
          why: 'The supporters\' reason is stated in one clause: the parent colonies come from water that <em>regularly reaches thirty-one degrees</em>, so the transplants <em>may carry some tolerance of heat</em>. Nothing is said about shading or cooling.' },

        { id: 'm3-44', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'On a shallow bank off the east coast, a team of marine biologists has spent six years growing coral on ropes suspended above the seabed. Fragments the size of a finger are cut from colonies that survived the last bleaching, raised in floating nurseries for about a year, and then cemented onto bare limestone by divers. The method is cheap and needs no laboratory. On the first plot, coral cover rose from four per cent to nineteen in five years, and the fish counted along the same line of reef more than doubled.\n\nThe results have not settled the argument. Supporters point out that the parent colonies come from water that regularly reaches thirty-one degrees, so the transplants may carry some tolerance of heat with them. Sceptics reply that the plots are tiny, a few hundred square metres against the many square kilometres lost in a single warm year, and that every fragment still has to be carried out and fixed by hand. Both sides agree on one point. Unless the water itself stops warming, a restored terrace will simply bleach again.',
          source: 'Adapted for classroom use from marine restoration field reports.',
          stem: 'What is the author\'s primary intention in the second paragraph?',
          options: [
            'To explain how the fragments are cut and cemented in place.',
            'To praise the team for working without any laboratory at all.',
            'To advise divers on where the next plot should be started.',
            'To set out the disagreement about how far the method can go.'
          ],
          answer: 3,
          why: 'The paragraph opens with <em>The results have not settled the argument</em> and then gives one side and the other, ending with the single point both sides share.' },

        { id: 'm3-45', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'On a shallow bank off the east coast, a team of marine biologists has spent six years growing coral on ropes suspended above the seabed. Fragments the size of a finger are cut from colonies that survived the last bleaching, raised in floating nurseries for about a year, and then cemented onto bare limestone by divers. The method is cheap and needs no laboratory. On the first plot, coral cover rose from four per cent to nineteen in five years, and the fish counted along the same line of reef more than doubled.\n\nThe results have not settled the argument. Supporters point out that the parent colonies come from water that regularly reaches thirty-one degrees, so the transplants may carry some tolerance of heat with them. Sceptics reply that the plots are tiny, a few hundred square metres against the many square kilometres lost in a single warm year, and that every fragment still has to be carried out and fixed by hand. Both sides agree on one point. Unless the water itself stops warming, a restored terrace will simply bleach again.',
          source: 'Adapted for classroom use from marine restoration field reports.',
          stem: 'What follow-up action is implied as necessary if a restored terrace is to last?',
          options: [
            'Cutting the fragments from colonies that have already bleached',
            'Training many more divers to cement the fragments by hand',
            'Bringing the warming of the water itself to a halt',
            'Counting the fish along a second line of the same reef'
          ],
          answer: 2,
          why: 'The final sentence states the condition: <em>Unless the water itself stops warming, a restored terrace will simply bleach again.</em>' }
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
          passage: 'Three seasons of digging on a ridge above a river have uncovered a settlement far larger than anyone expected. Beneath a field that had been ploughed for centuries, archaeologists traced the post holes of about ninety houses, a paved lane, and two deep wells lined with timber. Charred grain from one house floor has been dated to roughly nine hundred years before the earliest written record of the valley.\n\nThe find has unsettled a long-standing assumption. Most textbooks describe the valley as thinly peopled until traders arrived from the coast, yet the pottery from the lower levels was made from local clay, and the tools are of a design found nowhere else. Whatever drew families to the ridge, the settlement was evidently not founded from outside.\n\nWhat to do with the site has proved harder to agree. One group of specialists wants two houses rebuilt in timber and reed so that visitors can walk inside them, arguing that a field of shallow hollows teaches nobody anything. Others answer that any reconstruction is a guess in three dimensions, and that a guess, once built, is soon remembered as fact. So far the museum has paid only for a walkway and a set of boards. Until the two sides agree what a visitor should be shown, nothing further will be built.',
          source: 'Adapted for classroom use from excavation and site-management reports.',
          stem: 'What is the main topic of the passage?',
          options: [
            'The dating of the charred grain found on one house floor.',
            'A plan to move the ridge houses into a museum building in the valley.',
            'A large settlement uncovered on a ridge and the argument about showing it.',
            'Evidence that traders from the coast founded every village in the valley.'
          ],
          answer: 2,
          why: 'The first two paragraphs give the find and what it overturns, and the third gives the disagreement about reconstruction. The grain is one detail, no move to a museum building is mentioned, and the pottery evidence reverses the fourth option.' },

        { id: 'm3-47', type: 'read', tag: 'read-detail', level: 'B2+',
          passage: 'Three seasons of digging on a ridge above a river have uncovered a settlement far larger than anyone expected. Beneath a field that had been ploughed for centuries, archaeologists traced the post holes of about ninety houses, a paved lane, and two deep wells lined with timber. Charred grain from one house floor has been dated to roughly nine hundred years before the earliest written record of the valley.\n\nThe find has unsettled a long-standing assumption. Most textbooks describe the valley as thinly peopled until traders arrived from the coast, yet the pottery from the lower levels was made from local clay, and the tools are of a design found nowhere else. Whatever drew families to the ridge, the settlement was evidently not founded from outside.\n\nWhat to do with the site has proved harder to agree. One group of specialists wants two houses rebuilt in timber and reed so that visitors can walk inside them, arguing that a field of shallow hollows teaches nobody anything. Others answer that any reconstruction is a guess in three dimensions, and that a guess, once built, is soon remembered as fact. So far the museum has paid only for a walkway and a set of boards. Until the two sides agree what a visitor should be shown, nothing further will be built.',
          source: 'Adapted for classroom use from excavation and site-management reports.',
          stem: 'According to the passage, what did the archaeologists trace beneath the ploughed field?',
          options: [
            'The post holes of about ninety houses and two timber-lined wells',
            'Two houses already rebuilt in timber and reed by earlier diggers',
            'A raised walkway and a set of boards laid down for visitors',
            'Nine hundred written records of trade along the river valley'
          ],
          answer: 0,
          why: 'One clause carries it: the archaeologists <em>traced the post holes of about ninety houses, a paved lane … and two deep wells lined with timber</em>. The walkway and the boards were paid for later, and the rebuilding is only a proposal.' },

        { id: 'm3-48', type: 'read', tag: 'read-cause', level: 'C1',
          passage: 'Three seasons of digging on a ridge above a river have uncovered a settlement far larger than anyone expected. Beneath a field that had been ploughed for centuries, archaeologists traced the post holes of about ninety houses, a paved lane, and two deep wells lined with timber. Charred grain from one house floor has been dated to roughly nine hundred years before the earliest written record of the valley.\n\nThe find has unsettled a long-standing assumption. Most textbooks describe the valley as thinly peopled until traders arrived from the coast, yet the pottery from the lower levels was made from local clay, and the tools are of a design found nowhere else. Whatever drew families to the ridge, the settlement was evidently not founded from outside.\n\nWhat to do with the site has proved harder to agree. One group of specialists wants two houses rebuilt in timber and reed so that visitors can walk inside them, arguing that a field of shallow hollows teaches nobody anything. Others answer that any reconstruction is a guess in three dimensions, and that a guess, once built, is soon remembered as fact. So far the museum has paid only for a walkway and a set of boards. Until the two sides agree what a visitor should be shown, nothing further will be built.',
          source: 'Adapted for classroom use from excavation and site-management reports.',
          stem: 'Why does the pottery weaken the account given in most textbooks?',
          options: [
            'It was fired at a temperature no kiln in the valley could reach.',
            'It was found above the post holes rather than underneath them.',
            'It was made from local clay rather than carried in from the coast.',
            'It was dated to nine hundred years after the first written record.'
          ],
          answer: 2,
          why: 'The textbooks make the valley empty until traders came from the coast, <em>yet the pottery from the lower levels was made from local clay</em>. The firing temperature and the position above the post holes are nowhere in the passage, and the fourth option reverses the dating the passage gives.' },

        { id: 'm3-49', type: 'read', tag: 'read-purpose', level: 'C1',
          passage: 'Three seasons of digging on a ridge above a river have uncovered a settlement far larger than anyone expected. Beneath a field that had been ploughed for centuries, archaeologists traced the post holes of about ninety houses, a paved lane, and two deep wells lined with timber. Charred grain from one house floor has been dated to roughly nine hundred years before the earliest written record of the valley.\n\nThe find has unsettled a long-standing assumption. Most textbooks describe the valley as thinly peopled until traders arrived from the coast, yet the pottery from the lower levels was made from local clay, and the tools are of a design found nowhere else. Whatever drew families to the ridge, the settlement was evidently not founded from outside.\n\nWhat to do with the site has proved harder to agree. One group of specialists wants two houses rebuilt in timber and reed so that visitors can walk inside them, arguing that a field of shallow hollows teaches nobody anything. Others answer that any reconstruction is a guess in three dimensions, and that a guess, once built, is soon remembered as fact. So far the museum has paid only for a walkway and a set of boards. Until the two sides agree what a visitor should be shown, nothing further will be built.',
          source: 'Adapted for classroom use from excavation and site-management reports.',
          stem: 'What is the author\'s primary intention in the third paragraph?',
          options: [
            'To describe the tools and the pottery taken from the lower levels.',
            'To recommend that the ridge be ploughed and returned to farming.',
            'To record how many houses were traced during the three seasons.',
            'To set out the disagreement about how much should be rebuilt.'
          ],
          answer: 3,
          why: 'The paragraph opens with <em>What to do with the site has proved harder to agree</em> and then gives one group\'s case for rebuilding and the answer of those who call a reconstruction a guess.' },

        { id: 'm3-50', type: 'read', tag: 'read-followup', level: 'C1',
          passage: 'Three seasons of digging on a ridge above a river have uncovered a settlement far larger than anyone expected. Beneath a field that had been ploughed for centuries, archaeologists traced the post holes of about ninety houses, a paved lane, and two deep wells lined with timber. Charred grain from one house floor has been dated to roughly nine hundred years before the earliest written record of the valley.\n\nThe find has unsettled a long-standing assumption. Most textbooks describe the valley as thinly peopled until traders arrived from the coast, yet the pottery from the lower levels was made from local clay, and the tools are of a design found nowhere else. Whatever drew families to the ridge, the settlement was evidently not founded from outside.\n\nWhat to do with the site has proved harder to agree. One group of specialists wants two houses rebuilt in timber and reed so that visitors can walk inside them, arguing that a field of shallow hollows teaches nobody anything. Others answer that any reconstruction is a guess in three dimensions, and that a guess, once built, is soon remembered as fact. So far the museum has paid only for a walkway and a set of boards. Until the two sides agree what a visitor should be shown, nothing further will be built.',
          source: 'Adapted for classroom use from excavation and site-management reports.',
          stem: 'What follow-up action is implied as necessary before any more work is done on the site?',
          options: [
            'Digging a fourth season before the walkway is opened',
            'Agreeing what a visitor to the ridge should be shown',
            'Rebuilding every one of the ninety houses in timber',
            'Removing the boards that already stand beside the lane'
          ],
          answer: 1,
          why: 'The final sentence states the condition: <em>Until the two sides agree what a visitor should be shown, nothing further will be built.</em>' }
      ]
    }
  ]
});
