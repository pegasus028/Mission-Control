/* ===========================================================================
   SYSTEM 06 — Paragraph Organisation
   Three levels. Everything the final tests about what comes first, what holds
   the middle together, and how four shuffled sentences go back into order.
   =========================================================================== */

var T6 = {
  id: 't6', n: 6, code: 'System 06', art: 'grid',
  name: 'Paragraph Organisation',
  cefr: 'B2–C1',
  blurb: 'Five marks in the paper come from putting four shuffled sentences back in order, and the signals that decide the order are visible before you have understood the content.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T6.levels.push({
  id: 't6l1', n: 1, name: 'What comes first', cefr: 'B2',
  blurb: 'Finding the opening sentence solves half of every ordering item, and it is decided by elimination, not by taste.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't6l1s1', name: 'The topic sentence', cefr: 'B2',
      theory: {
        key: 'The first sentence of a paragraph names its subject with full nouns and points at nothing outside itself.',
        body: [
          'A paragraph has to start somewhere, and the sentence that starts it has one job: introducing the subject to a reader who so far knows nothing. That means <strong>full nouns</strong> — <em>the night market</em>, <em>the district hospital</em>, <em>three secondary schools</em> — and not <em>it</em>, <em>they</em>, <em>this change</em> or <em>such delays</em>. A reader cannot follow an arrow that points off the edge of the page.',
          'This gives you the fastest tool in the paper. Before you think about meaning at all, scan the four sentences for a word that points backwards: <em>this, these, that, those, such, it, they, their, then, instead</em>. Any sentence carrying one of those in its opening words is disqualified from first place. Cross it out.',
          'Consequence connectors do the same work. <em>As a result</em>, <em>Consequently</em>, <em>Therefore</em>, <em>Because of this</em> and <em>Since then</em> all announce that a cause has already been given. Nothing has been said yet, so no cause can have been given, and these sentences are disqualified too.',
          'The error this prevents is the commonest one in the ordering section: choosing the sentence that <em>sounds</em> like an introduction because it is general, when another sentence in the set is both general and free of references. Do the elimination first and the reading second.'
        ],
        simple: [
          'The first sentence tells the reader what the paragraph is about. It uses the full names of things, not <em>it</em>, <em>this</em> or <em>they</em>.',
          'So look at the four sentences and cross out any that begin with <em>this, these, such, it, they, instead, as a result</em> or <em>therefore</em>. Those words point back to something nobody has said yet.',
          'Usually only one sentence survives. That is your first sentence.'
        ],
        examples: [
          { s: '<b>The morning market beside the temple</b> has traded from the same forty stalls since the 1970s.', g: 'full nouns, nothing pointing backwards — this can be first.' },
          { s: '<s>This change drove half the traders into a car park behind the mall.</s>', g: '"This change" points at a change nobody has mentioned yet.' },
          { s: '<s>As a result, takings fell by a third before the rainy season.</s>', g: 'a consequence connector needs its cause standing in front of it.' },
          { s: '<s>They were given no warning before the market ground was dug up.</s>', g: '"They" has nobody to refer to in first position.' }
        ]
      },
      items: [
        { id: 't6l1s1-1', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'Only one of these four sentences can open a paragraph. Which one?',
          options: [
            'These closures left three estates without a delivery for a month.',
            'The district library service runs a delivery van to twelve community halls.',
            'As a result, the driver now covers two rounds in a single day.',
            'Its engine failed twice during the wettest week of the year.'
          ],
          answer: 1,
          why: 'Only one sentence introduces its subject with full nouns. <em>These closures</em> summarises closures nobody has described, <em>As a result</em> demands a cause that has not been given, and <em>Its engine</em> belongs to a vehicle the reader has not yet met.' },

        { id: 't6l1s1-2', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'Why can <em>Such delays soon emptied the waiting room at the far end of the clinic</em> not be the first sentence of a paragraph?',
          options: [
            'It is written entirely in the passive voice.',
            'It reports a consequence rather than a cause.',
            'It is too specific to introduce any subject.',
            '<em>Such delays</em> points back at something already described.'
          ],
          answer: 3,
          why: '<em>Such</em> plus a noun is a backward reference: the noun <em>delays</em> is the writer\'s one-word summary of the sentence before. The verb <em>emptied</em> is active, so the passive explanation is simply untrue; reporting an outcome is not in itself a bar, since the bar is the reference; and being specific disqualifies nothing.' },

        { id: 't6l1s1-3', type: 'sort', tag: 'coh-topic', level: 'B2',
          stem: 'Decide whether each sentence could open a paragraph.',
          bins: [
            { key: 'can', label: 'Can be first', hint: 'names its subject in full' },
            { key: 'no', label: 'Cannot be first', hint: 'something points backwards' }
          ],
          items: [
            { text: 'The district pool closed for six months last year', bin: 'can' },
            { text: '<b>This discovery</b> added eleven weeks to the work', bin: 'no' },
            { text: 'Coastal footpaths across the province are inspected each year', bin: 'can' },
            { text: '<b>Consequently</b>, the outer row of spaces was fenced off', bin: 'no' },
            { text: 'A family printing works has made school textbooks here since 1958', bin: 'can' },
            { text: '<b>They</b> waited three weeks for a single spare part', bin: 'no' }
          ],
          why: 'Everything in the right-hand box opens with a word that points backwards — <em>This</em>, <em>Consequently</em>, <em>They</em>. Everything in the left-hand box names its subject in full and leaves the reader nothing to look up.' },

        { id: 't6l1s1-4', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'Which of these four sentences is the topic sentence of the paragraph they form?',
          options: [
            'Shoppers moved instead to the free car park at the new mall.',
            'The district office introduced charges in its two central car parks in January.',
            'The traders\' association now wants the first hour made free again.',
            'Because of this shift, three shops beside the market closed before June.'
          ],
          answer: 1,
          why: 'It is the only sentence that neither points backwards nor draws a conclusion. <em>Instead</em> needs an earlier destination to move away from, <em>free again</em> needs charges already imposed, and <em>Because of this shift</em> names a cause the reader has not been given.' },

        { id: 't6l1s1-5', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'All four sentences below are general statements. Which one can still open the paragraph?',
          options: [
            'Every October, thousands of waders stop to feed on the mudflats at the river mouth.',
            'Their nests are built in the reeds at the southern end of the lagoon.',
            'Such visits have been recorded by the sanctuary rangers for over fifty years.',
            'They arrive within the same fortnight almost every year.'
          ],
          answer: 0,
          why: 'Being general is not enough. <em>Their</em> needs an owner, <em>Such visits</em> needs a visit already described, and <em>They</em> needs a plural subject, and in first position none of the three can be supplied.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't6l1s2', name: 'Backward reference — this, these, such', cefr: 'B2',
      theory: {
        key: 'This, These and Such plus a noun summarise the sentence immediately before, and the noun tells you exactly what is being summarised.',
        body: [
          'When a writer puts <em>This complexity</em>, <em>These failures</em> or <em>Such delays</em> at the front of a sentence, two things happen at once. The demonstrative says <strong>look back</strong>, and the noun says <strong>look back at this particular thing</strong>. The noun does the real work, and the noun is the part students skip.',
          'Read the noun as an instruction. <em>Such delays</em> means the previous sentence described something slow. <em>These faults</em> means the previous sentence described something broken. <em>That change</em> means the previous sentence described something being altered. If no sentence in the set does that, your order is wrong.',
          'The reference almost always reaches back exactly one sentence, not two. That is what makes it so useful in an ordering task: it does not merely tell you that one sentence comes after another, it tells you it comes <u>immediately</u> after.',
          'There is a bonus. Because the noun compresses a whole idea into one word, you can follow a paragraph you only half understand. <em>This shortage</em>, sitting after a sentence you skimmed, tells you that sentence was about not having enough of something.'
        ],
        simple: [
          'Words like <em>this</em>, <em>these</em>, <em>that</em> and <em>such</em> point back to the sentence just before. The noun after them tells you what they point at.',
          '<em>These faults</em> means the sentence before talked about something going wrong. <em>Such demand</em> means the sentence before talked about a lot of people wanting something.',
          'Use this to fix the order. If a sentence starts with <em>This delay</em>, the sentence before it must describe something arriving late.'
        ],
        examples: [
          { s: 'The rains continued into December. <b>This delay</b> pushed the harvest into the busiest weeks on the drying floor.', g: 'the noun "delay" names what the rain caused, so it follows that sentence and no other.' },
          { s: 'Cracks were found in two of the bearings. <b>These faults</b> closed the footbridge the same afternoon.', g: '"faults" is the one-word summary of the cracks.' },
          { s: 'Every class filled within an hour of the line opening. <b>Such pressure</b> has left two hundred children waiting.', g: '"pressure" summarises the rush for places.' },
          { s: '<s>The library van returned to service in October. These closures cost the estate a whole term of reading.</s>', g: 'nothing in front of it describes closures — the chain is broken.' }
        ]
      },
      items: [
        { id: 't6l1s2-1', type: 'choose', tag: 'coh-reference', level: 'B2',
          stem: 'A paragraph contains the sentence <em>This shortage forced the canteen to buy rice at city prices.</em> Which sentence must come immediately before it?',
          options: [
            'The school canteen has bought its rice from the same village for eleven years.',
            'The canteen manager keeps three weeks of stock in the store room.',
            'Prices in the city wholesale market are set every Monday morning.',
            'The cooperative that supplies the school ran out of local rice in August.'
          ],
          answer: 3,
          why: 'The noun <em>shortage</em> is the instruction, and only one sentence describes something running out. A long-standing arrangement, a level of stock and a pricing habit are all standing states of affairs, and none of them is a shortage the demonstrative could compress.' },

        { id: 't6l1s2-2', type: 'choose', tag: 'coh-reference', level: 'B2',
          stem: 'The bus operator brought the last departure forward by forty minutes. ______ left the night-market shift workers with no way home.',
          options: [
            'Such workers',
            'That change',
            'These markets',
            'This journey'
          ],
          answer: 1,
          why: 'The sentence before describes a timetable being altered, so the noun after the demonstrative must be <em>change</em>. No workers, no markets and no single journey have been described yet, so the other three nouns summarise nothing.' },

        { id: 't6l1s2-3', type: 'sort', tag: 'coh-reference', level: 'B2',
          stem: 'What must the sentence in front have described? Sort each opening by what it points back at.',
          bins: [
            { key: 'prob', label: 'Something going wrong', hint: 'a fault, a delay, a loss' },
            { key: 'chg', label: 'Something being altered', hint: 'a change, a move, a switch' },
            { key: 'ppl', label: 'People already named', hint: 'a group mentioned before' }
          ],
          items: [
            { text: '<b>These faults</b> closed the footbridge by four o\'clock', bin: 'prob' },
            { text: '<b>That move</b> put the stalls behind the mall', bin: 'chg' },
            { text: '<b>Such delays</b> emptied the clinic waiting room', bin: 'prob' },
            { text: '<b>These volunteers</b> now cover the whole round', bin: 'ppl' },
            { text: '<b>This switch</b> saved the district a tanker of diesel', bin: 'chg' },
            { text: '<b>Both of them</b> retired in the same month', bin: 'ppl' }
          ],
          why: 'The noun after the demonstrative is the whole message. <em>Faults</em> and <em>delays</em> demand a sentence about something going wrong, <em>move</em> and <em>switch</em> demand one about something being altered, and <em>volunteers</em> and <em>them</em> demand people already named.' },

        { id: 't6l1s2-4', type: 'choose', tag: 'coh-reference', level: 'B2',
          stem: 'One sentence in this paragraph points back at something that was never said. Which one?',
          options: [
            'The community garden behind the housing estate has no mains water of its own.',
            'Growers fill their cans from two tanks fed by the shelter roofs.',
            'The committee has asked the water utility to quote for a metered tap.',
            'These thefts have emptied both tanks by the middle of July.'
          ],
          answer: 3,
          why: 'Nothing before it describes anything being stolen, so the noun <em>thefts</em> summarises nothing. The other three introduce the garden, the tanks and the request for a quotation in full, and each of them can be read without looking anywhere else.' },

        { id: 't6l1s2-5', type: 'choose', tag: 'coh-reference', level: 'B2',
          stem: 'In <em>The quarry trucks began using the lane in March. Their weight opened cracks in the parapet. These cracks closed the bridge in July.</em>, what does <em>These cracks</em> point at?',
          options: [
            'The sentence immediately before it.',
            'The whole paragraph so far.',
            'The first sentence of the sequence.',
            'Something the reader is expected to know already.'
          ],
          answer: 0,
          why: 'A demonstrative plus noun normally reaches back exactly one sentence, and the noun <em>cracks</em> appears in that sentence and nowhere else. It does not gather up the paragraph, it does not reach past the parapet to the trucks, and it assumes no outside knowledge — which is why it fixes the order of a pair rather than merely suggesting it.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't6l1s3', name: 'Openers that set the scene', cefr: 'B2',
      theory: {
        key: 'The opening sentence sets a scene — a habit, a standing state of affairs or a dated beginning — and the general statement beats the particular incident to first place.',
        body: [
          'Eliminating the sentences that cannot be first often leaves two candidates, and choosing between them is a question about <strong>scope</strong>. English paragraphs move from the general to the particular: the wide shot first, then the incident.',
          'Three shapes do the wide shot. A habit: <em>The morning market has traded from the same forty stalls since the 1970s.</em> A standing state of affairs: <em>The community garden behind the estate has no mains water of its own.</em> A dated beginning: <em>In January the district office changed the timetable for every rural route.</em> All three name their actors and put nothing in front of the reader that has to be looked up.',
          'The particular incident — <em>the press broke down in the middle of a run</em>, <em>a water pipe burst under the car park</em> — is what the paragraph is really about, but it lands second. It needs the wide shot to be intelligible.',
          'Watch for the trap. A sentence can open with a date, which looks like scene-setting, and still carry a definite noun phrase nobody has introduced. <em>Last term the van was off the road for nine weeks</em> cannot be first, because <em>the van</em> is an arrow pointing at nothing. A date at the front is not a licence.'
        ],
        simple: [
          'The first sentence gives the big picture: where we are, what normally happens, or when something started.',
          'The dramatic sentence — the thing that went wrong — comes second. The reader needs the background before the event.',
          'Be careful: a sentence can start with a date and still not be first. <em>Last term the van broke down</em> uses <em>the van</em>, and the reader knows nothing about any van yet.'
        ],
        examples: [
          { s: '<b>Every October, thousands of waders stop to feed on the mudflats at the river mouth.</b>', g: 'a habit, full nouns — the wide shot.' },
          { s: '<b>The district hospital sends out its outpatient appointments by post each Monday.</b>', g: 'a standing state of affairs, introduced by name.' },
          { s: '<s>Last month its largest press broke down in the middle of a print run.</s>', g: 'a date, but "its" points at a firm nobody has named.' },
          { s: '<s>While the staff were carrying the last crates downstairs, a pipe burst.</s>', g: 'the event rather than the background, and "the last crates" assumes crates already mentioned.' }
        ]
      },
      items: [
        { id: 't6l1s3-1', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'Which sentence opens the paragraph?',
          options: [
            'Last autumn the birds arrived to find half the flats fenced off for a new pier.',
            'Such disturbance drove several flocks on to smaller feeding grounds upriver.',
            'Every October, thousands of waders stop to feed on the mudflats at the river mouth.',
            'Conservation groups want the fencing taken down outside the building season.'
          ],
          answer: 2,
          why: 'Two sentences carry no consequence connector, but <em>Last autumn the birds</em> uses <em>the birds</em> before any birds have been named. <em>Such disturbance</em> summarises a disturbance not yet described, and the demand about fencing answers a problem the paragraph has not yet raised. The habitual sentence is the wide shot and comes first.' },

        { id: 't6l1s3-2', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'Which sentence begins with a time phrase and still cannot be first?',
          options: [
            'In January the district office changed the timetable for every rural bus route.',
            'Last term the van was off the road for repairs for nine weeks.',
            'Three secondary schools in the district share a single mobile library van.',
            'Head teachers are asking the province to fund a replacement vehicle.'
          ],
          answer: 1,
          why: 'A date at the front is not a licence. <em>The van</em> is a definite noun phrase with no antecedent, so the sentence must follow the one that introduces the van. The January sentence carries a date too, but every noun beside it is new; the third sentence has no time phrase at all; and the fourth is a request rather than an opener.' },

        { id: 't6l1s3-3', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'A paragraph begins <em>A concrete bridge carries the lane over the canal on the way to the fruit orchards.</em> What work is that sentence doing?',
          options: [
            'Giving the consequence of something described earlier.',
            'Naming the writer\'s recommendation.',
            'Reporting the incident the paragraph is about.',
            'Setting the scene with a standing state of affairs.'
          ],
          answer: 3,
          why: 'Nothing has happened yet, so there is no earlier cause to draw a consequence from, nothing is being urged on anybody, and no incident is reported. The sentence puts the bridge, the lane and the orchards into the reader\'s head so that the incident in the next sentence can be understood.' },

        { id: 't6l1s3-4', type: 'choose', tag: 'coh-topic', level: 'B2',
          stem: 'Which pair of sentences is in the right order?',
          options: [
            'A weekly language exchange meets in the back room of a cafe. Until this year each evening was run by two retired teachers.',
            'Until this year each evening was run by two retired teachers. A weekly language exchange meets in the back room of a cafe.',
            'It survives only because four members share the organising. A weekly language exchange meets near the university.',
            'Both of them moved away in April. Until this year each evening was run by two retired teachers.'
          ],
          answer: 0,
          why: 'General before particular, and the reference settles it: <em>each evening</em> can only follow the sentence that names the meeting. The second pair puts that reference in front of it, the third opens with <em>It</em> before anything can be called <em>it</em>, and the fourth opens with <em>Both of them</em> before the teachers exist.' },

        { id: 't6l1s3-5', type: 'order', tag: 'coh-topic', level: 'B2',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'Two primary schools on the estate opened their libraries to parents last September.',
            'Each school kept the doors open for an hour after the final bell.',
            'This extra hour brought in more than sixty families a week between them.',
            'Both head teachers now want the scheme extended to the school holidays.'
          ],
          why: 'Only the first sentence names its subject in full. <em>Each school</em> then needs the two schools, <em>This extra hour</em> needs the hour, and the recommendation closes.' }
      ]
    }
  ],

  check: {
    id: 't6l1ck', name: 'Systems Check · What comes first',
    items: [
      { id: 't6l1ck-1', type: 'choose', tag: 'coh-topic', level: 'B2',
        stem: 'Which sentence can open a paragraph?',
        options: [
          'Because of this shift, three shops beside the market closed before June.',
          'The district office introduced charges in its two central car parks in January.',
          'Shoppers moved instead to the free car park at the new mall.',
          'It now wants the first hour made free again.'
        ],
        answer: 1,
        why: '<em>Because of this shift</em> demands a cause behind it, <em>instead</em> demands an abandoned alternative, and <em>It</em> demands a body already named. Only one sentence introduces the district office and its car parks for the first time.' },

      { id: 't6l1ck-2', type: 'choose', tag: 'coh-reference', level: 'B2',
        stem: 'Which sentence must come immediately before <em>These bins now overflow every weekend.</em>?',
        options: [
          'Nine large glass bins were placed in convenience-store car parks instead.',
          'The contractor has agreed to empty them twice as often from October.',
          'The district stopped collecting glass from the front of each house to save fuel.',
          'Glass makes up about a fifth of the district\'s recycling by weight.'
        ],
        answer: 0,
        why: 'The noun <em>bins</em> has to summarise the sentence in front of it, and only one sentence puts any bins anywhere. The contractor\'s promise already refers back to them, the change of method describes what was stopped, and the figure by weight introduces no container at all.' },

      { id: 't6l1ck-3', type: 'sort', tag: 'coh-topic', level: 'B2',
        stem: 'Decide whether each sentence could open a paragraph.',
        bins: [
          { key: 'can', label: 'Can be first', hint: 'every noun is new here' },
          { key: 'no', label: 'Cannot be first', hint: 'something points backwards' }
        ],
        items: [
          { text: 'The sports centre runs beginners\' lessons on Saturday mornings', bin: 'can' },
          { text: '<b>Such pressure</b> has left two hundred children on a waiting list', bin: 'no' },
          { text: 'A weekly language exchange meets in a cafe near the university', bin: 'can' },
          { text: '<b>Both of them</b> moved away in April', bin: 'no' },
          { text: 'In April the bus company brought its last departure forward', bin: 'can' },
          { text: '<b>Therefore</b> the drivers asked the district office for a later service', bin: 'no' }
        ],
        why: 'A date is allowed in first position when every noun beside it is new; a demonstrative, a pronoun and a consequence connector are not allowed at all, because each of them needs a sentence in front to land on.' },

      { id: 't6l1ck-4', type: 'choose', tag: 'coh-reference', level: 'B2',
        stem: 'Half the volunteer drivers gave up during last year\'s rise in fuel prices. ______ now adds up to six weeks on some clinic appointments.',
        options: [
          'Such payments',
          'These clinics',
          'This shortage',
          'That journey'
        ],
        answer: 2,
        why: 'The sentence before describes people leaving, which is a shortage of drivers. No payment has been mentioned, no clinic has yet been named, and no single journey has been described, so the other three nouns summarise nothing.' },

      { id: 't6l1ck-5', type: 'choose', tag: 'coh-topic', level: 'B2',
        stem: 'Which sentence begins with a time phrase and can still open the paragraph?',
        options: [
          'Last month its largest press broke down in the middle of a print run.',
          'Since then the firm has waited three weeks for every spare part.',
          'During that closure borrowing fell by more than half.',
          'Every second year the steel footbridge over the canal is inspected.'
        ],
        answer: 3,
        why: 'Only one of the four introduces its subject in full. <em>Its</em> belongs to a firm nobody has named, <em>Since then</em> needs a moment already fixed, and <em>that closure</em> needs a closure already described, so each of those three has to follow an earlier sentence.' },

      { id: 't6l1ck-6', type: 'order', tag: 'coh-order', level: 'B2',
        stem: 'Put these four sentences into the order that makes a paragraph.',
        items: [
          'A concrete bridge carries the lane over the canal on the way to the fruit orchards.',
          'Trucks serving the new quarry began using that lane in the spring.',
          'Their weight opened cracks in the parapet within three months.',
          'The district office has now set a limit of eight tonnes on the crossing.'
        ],
        why: 'Only the first sentence names everything for the first time. <em>That lane</em> needs the lane, <em>Their weight</em> needs the trucks, and the limit is the decision that closes the paragraph.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T6.levels.push({
  id: 't6l2', n: 2, name: 'Linking the middle', cefr: 'B2+',
  blurb: 'Connectors and tenses are direction signs. Once you can read them, the middle of a paragraph orders itself.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't6l2s1', name: 'Cause and consequence connectors', cefr: 'B2+',
      theory: {
        key: 'A consequence connector announces that its cause has already been given, so it can never come first and can never stand in front of that cause.',
        body: [
          'Four phrases do almost all the work in the exam: <em>As a result</em>, <em>Consequently</em>, <em>Therefore</em> and <em>Because of this</em>. For ordering purposes all four mean the same thing — <strong>the cause is behind me</strong>. Whatever sentence describes that cause sits immediately in front.',
          'That is a stronger claim than it looks. The connector does not merely rule its sentence out of first place; it names its neighbour. If the consequence is <em>a quarter of the patients missed their clinics</em>, the sentence in front must describe something that stopped letters arriving — not the hospital in general, and not what managers decided afterwards.',
          'Two of the four have a second position worth knowing. <em>Because of this</em> and <em>As a result</em> normally start a sentence; <em>therefore</em> and <em>consequently</em> often sit inside one, after the subject: <em>The district office has therefore ordered a survey.</em> The position changes nothing about the order. The cause is still behind.',
          'The error this prevents is the reversed pair. Students who order by meaning alone put the striking sentence first and the dull one after it, and produce a paragraph in which an effect explains its own cause.'
        ],
        simple: [
          '<em>As a result</em>, <em>consequently</em>, <em>therefore</em> and <em>because of this</em> all mean "this happened because of what I just told you".',
          'So the cause comes first and the result comes after. A sentence with one of these phrases can never be the first sentence of a paragraph.',
          'These words can also sit in the middle of a sentence: <em>The district office has therefore closed the road.</em> The rule does not change.'
        ],
        examples: [
          { s: 'A sorting error delayed four hundred letters. <b>As a result</b>, a quarter of the patients missed their clinics.', g: 'cause, then consequence.' },
          { s: '<s>As a result, a quarter of the patients missed their clinics. A sorting error delayed four hundred letters.</s>', g: 'an effect cannot stand in front of its own cause.' },
          { s: 'The apprentices had never used a hand-fed press. Training them <b>therefore</b> took two senior operators off production.', g: 'therefore inside the sentence — the rule is unchanged.' },
          { s: 'Rot was found in half the roof beams. <b>Because of this</b>, the pool stayed shut for a further eleven weeks.', g: 'the neighbour is named: the sentence in front must describe the rot.' }
        ]
      },
      items: [
        { id: 't6l2s1-1', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'Which sentence must stand immediately before <em>As a result, a quarter of the patients missed clinics they had waited months for.</em>?',
          options: [
            'In August a sorting error delayed almost four hundred of those letters.',
            'Managers have since agreed to send a text message alongside every letter.',
            'The district hospital sends out its outpatient appointments by post each Monday.',
            'Clinic lists at the hospital are drawn up eight weeks in advance.'
          ],
          answer: 0,
          why: '<em>As a result</em> demands its cause immediately in front, and only one sentence describes something that stopped the letters reaching patients. The managers\' promise is the response that comes afterwards, while the posting routine and the eight-week lists are background rather than causes.' },

        { id: 't6l2s1-2', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'Three dry seasons in a row have left the storage tanks empty by the middle of July. ______ the committee has asked the water utility to quote for a metered tap.',
          options: [
            'Nevertheless',
            'Consequently',
            'For instance',
            'Beforehand'
          ],
          answer: 1,
          why: 'The second sentence is the outcome of the first, so the connector must point backwards at a cause. <em>Nevertheless</em> would announce a turn against it, <em>For instance</em> an example of it, and <em>Beforehand</em> would put the request earlier than the dry seasons that prompted it.' },

        { id: 't6l2s1-3', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'Which pair of sentences is in the wrong order?',
          options: [
            'Trucks from the new quarry began using the lane. Their weight opened cracks in the parapet.',
            'The cooperative ran out of local rice in August. This shortage forced the canteen to buy at city prices.',
            'Consequently the outer row of spaces was fenced off. Storms in February took four metres of the cliff edge.',
            'Half the volunteer drivers gave up the work. Some appointments are now booked six weeks ahead.'
          ],
          answer: 2,
          why: 'A sentence opening with <em>Consequently</em> is an effect, and here it has been placed in front of the storms that produced it. In the other three pairs the cause already stands first: the trucks before <em>their weight</em>, the empty store before <em>this shortage</em>, and the drivers leaving before the waiting time it created.' },

        { id: 't6l2s1-4', type: 'order', tag: 'coh-connector', level: 'B2+',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'Patients in the hill villages depend on a volunteer car scheme to reach the district clinic.',
            'Half of the drivers gave up the work during last year\'s rise in fuel prices.',
            'As a result, some appointments are now booked six weeks ahead to match a free car.',
            'The health office is considering a fuel allowance to bring the drivers back.'
          ],
          why: 'Only the first sentence introduces the scheme. <em>The drivers</em> then needs it, <em>As a result</em> needs the drivers leaving, and the allowance is the response that closes the paragraph.' },

        { id: 't6l2s1-5', type: 'order', tag: 'coh-connector', level: 'B2+',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'A gravel car park sits at the top of the cliff path above the bay.',
            'Storms in February took away four metres of the cliff edge in a single week.',
            'Because of that loss, the outer row of spaces now ends a stride from the drop.',
            'The provincial authority has closed the whole park until a new fence is built.'
          ],
          why: 'The cliff has to exist before storms can take it away, <em>that loss</em> names what the storms did, and the closure is the decision the paragraph has been building towards.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't6l2s2', name: 'Contrast and concession', cefr: 'B2+',
      theory: {
        key: 'However, Nevertheless and While turn the paragraph against what has just been said, so they need something in front worth turning against.',
        body: [
          'A contrast connector is a hinge. <em>However</em> and <em>Nevertheless</em> announce that the sentence they open will go against the expectation the previous sentence created. That constrains order as tightly as any cause connector: the sentence in front must set up an expectation.',
          'Concession packs the same move into a single sentence. <em>Although the pool reopened in March, the diving boards stayed shut all year.</em> <em>Despite the new tanks, growers still carry water up the slope.</em> Both admit something true and then push past it.',
          'Two traps. First, <em>however</em> is an adverb and cannot join two clauses the way <em>but</em> does: <em>The pool reopened, however the boards stayed shut</em> is an error examiners mark. Second, <em>while</em> has two lives — <em>While the engineers were checking the deck</em> is time, and <em>While the scheme is popular, it is expensive</em> is contrast. Decide which before you order anything.',
          'In a four-sentence item a contrast connector rarely opens the paragraph and rarely closes it. It belongs in the middle, at the point where the good news turns into the problem.'
        ],
        simple: [
          '<em>However</em>, <em>nevertheless</em> and <em>on the other hand</em> mean "what comes next goes against what I just said".',
          'So the sentence before must say the opposite kind of thing. Good news, then <em>however</em>, then the problem.',
          '<em>While</em> can mean "at the same time" or "although". Work out which one it is before you decide the order.'
        ],
        examples: [
          { s: 'Every class filled within an hour. <b>However</b>, the centre can open only one pool at a time.', g: 'a success, then the limit on it.' },
          { s: '<b>Although</b> the boardwalk was finished in June, the path beside the lagoon stayed closed until August.', g: 'concession inside one sentence.' },
          { s: '<s>The van returned in October, however the stock was six months old.</s>', g: 'however cannot join two clauses with a comma: use a full stop or "but".' },
          { s: '<b>While</b> the scheme is popular with parents, it costs the schools a teaching hour a week.', g: 'While = although here, not "at the same time".' }
        ]
      },
      items: [
        { id: 't6l2s2-1', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'The book fair sold twice as many tickets as last year. ______, the exhibition hall cannot hold more than four hundred people at once.',
          options: [
            'As a result',
            'In addition',
            'However',
            'For this reason'
          ],
          answer: 2,
          why: 'The second sentence is a limit on the good news in the first. The size of the hall was not caused by the ticket sales, so <em>As a result</em> and <em>For this reason</em> both misread the relation, and it is not a second piece of good news, so <em>In addition</em> fails as well.' },

        { id: 't6l2s2-2', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'Which sentence must come immediately before <em>However, the tanks are empty by the middle of July.</em>?',
          options: [
            'The committee has asked the water utility for a quotation.',
            'Two large tanks were installed under the shelter roofs ten years ago.',
            'The community garden on the slope has no mains water of its own.',
            'Growers carry cans from the tap at the gate.'
          ],
          answer: 1,
          why: '<em>However</em> needs an expectation to overturn, and only the installation of two large tanks creates one — two large tanks ought to be enough. The quotation is the later response, the lack of mains water leads us to expect trouble rather than away from it, and carrying cans is a habit rather than a promise.' },

        { id: 't6l2s2-3', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'In <em>While the engineers were checking the deck in July, they found cracks in two of the bearings</em>, what is <em>While</em> doing?',
          options: [
            'Marking a contrast with the sentence before.',
            'Introducing a recommendation for the future.',
            'Naming a consequence of the inspection.',
            'Giving the background to the event that follows.'
          ],
          answer: 3,
          why: 'The continuous <em>were checking</em> is the giveaway: this <em>while</em> is time rather than concession, so no contrast is being marked. Nothing is being urged on anybody, and the clause states what was already going on rather than what the inspection produced.' },

        { id: 't6l2s2-4', type: 'choose', tag: 'coh-connector', level: 'B2+',
          stem: 'The district office resurfaced the market ground in February. ______, takings recovered within a month.',
          options: [
            'Nevertheless',
            'As a result',
            'By contrast',
            'In other words'
          ],
          answer: 1,
          why: 'The second sentence is the consequence of the first, so it needs a consequence connector. <em>Nevertheless</em> and <em>By contrast</em> both signal a turn against what came before, and <em>In other words</em> promises a restatement rather than a result.' },

        { id: 't6l2s2-5', type: 'order', tag: 'coh-connector', level: 'B2+',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'The book fair moved indoors to the covered market hall for its second day this year.',
            'Ticket sales for that day rose by almost a fifth.',
            'However, the hall holds only four hundred people at a time.',
            'The organisers have therefore asked for a rota of timed entries next March.'
          ],
          why: '<em>That day</em> needs the second day, <em>However</em> needs the rise in sales to turn against, and <em>therefore</em> needs the problem the hall creates.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't6l2s3', name: 'Background before event', cefr: 'B2+',
      theory: {
        key: 'A past continuous verb is a stage, not an action: the sentence carrying it sets up the scene on which the simple past event happens.',
        body: [
          'English marks background and event with two different tenses, and the exam relies on it. <em>While the contractors were stripping the old panels, they found rot in the beams.</em> The continuous verb is the long, unfinished activity — the stage. The simple past is the thing that happens on it.',
          'That gives you an ordering rule you can apply without understanding a single content word. A sentence whose main verb is <em>was</em> or <em>were</em> plus <em>-ing</em> is background. The sentence containing the sharp, completed event comes after it, never before.',
          'The same logic runs across sentence boundaries. <em>Last November the museum was moving its collection into a new basement store. While that move was under way, a water pipe burst.</em> The first sentence is a whole paragraph\'s worth of stage-setting, and the burst pipe is what the paragraph is about.',
          'Notice what the background sentence does to the reference chain. Because it is the wide shot, it is usually the sentence that introduces the nouns everything else points back at. Background and topic sentence are very often the same sentence.'
        ],
        simple: [
          '<em>was</em> or <em>were</em> plus <em>-ing</em> describes a longer activity that was already going on. The simple past describes the thing that happened during it.',
          'The longer activity comes first, because it is the background. The short event comes after.',
          '<em>While the engineers were checking the bridge, they found two cracks.</em> Checking is the background; finding is the event.'
        ],
        examples: [
          { s: 'Last November the provincial museum <b>was moving</b> its textiles into a basement store.', g: 'background — a long activity, and the wide shot of the paragraph.' },
          { s: 'While that move was under way, a water pipe <b>burst</b> under the car park.', g: 'the event, in the simple past, landing on that stage.' },
          { s: '<s>A water pipe burst under the car park. The museum was moving its textiles into a basement store.</s>', g: 'the stage cannot be built after the actor has walked on to it.' },
          { s: 'While the contractors <b>were stripping</b> the old panels, they <b>found</b> rot in half the beams.', g: 'both tenses in one sentence — the model for the whole pattern.' }
        ]
      },
      items: [
        { id: 't6l2s3-1', type: 'choose', tag: 'coh-order', level: 'B2+',
          stem: 'Which of these four sentences is the background, and therefore comes before the others?',
          options: [
            'The museum board has since ruled that no fabric may be stored below ground.',
            'This flooding soaked more than two hundred garments before the pumps arrived.',
            'Last November the provincial museum was moving its textile collection into a basement store.',
            'A water pipe burst under the car park one evening that week.'
          ],
          answer: 2,
          why: 'The continuous <em>was moving</em> marks a long activity already under way. The burst pipe is the completed event that happens during it, <em>This flooding</em> summarises that burst pipe, and the board\'s ruling is the decision that comes last of all.' },

        { id: 't6l2s3-2', type: 'sort', tag: 'coh-order', level: 'B2+',
          stem: 'Sort each clause by the job its tense is doing.',
          bins: [
            { key: 'bg', label: 'Background', hint: 'was or were + -ing, a long activity' },
            { key: 'ev', label: 'Event', hint: 'simple past, one completed thing' }
          ],
          items: [
            { text: 'the contractors <b>were stripping</b> the old panels', bin: 'bg' },
            { text: 'they <b>found</b> rot in half the beams', bin: 'ev' },
            { text: 'the museum <b>was moving</b> its textiles downstairs', bin: 'bg' },
            { text: 'a water pipe <b>burst</b> under the car park', bin: 'ev' },
            { text: 'the engineers <b>were checking</b> the footbridge deck', bin: 'bg' },
            { text: 'two of the bearings <b>cracked</b> that year', bin: 'ev' }
          ],
          why: 'The continuous builds a stage and the simple past puts something on it, so every clause in the left-hand box comes before its partner on the right.' },

        { id: 't6l2s3-3', type: 'order', tag: 'coh-order', level: 'B2+',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'The district pool closed for six months last year so that its roof could be replaced.',
            'While the contractors were stripping the old panels, they found rot in half the roof beams.',
            'This discovery added eleven weeks and a quarter of a million baht to the work.',
            'The district office has therefore ordered structural surveys before any future closure.'
          ],
          why: 'Background before event, then <em>This discovery</em> for the rot, then the decision. <em>The contractors</em> and <em>the old panels</em> both need the roof named first.' },

        { id: 't6l2s3-4', type: 'order', tag: 'coh-order', level: 'B2+',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'Cycle lanes were painted along three of the main roads into the city last year.',
            'On the widest of the three, the lane runs between the bus stop and the moving traffic.',
            'Riders on the other two, where the lane sits behind the parked cars, have taken to them readily.',
            'What the counts suggest, then, is that where a lane is put matters more than how much of it there is.'
          ],
          why: '<em>The three</em> in the second sentence can only point back at three roads, and <em>the other two</em> in the third can only point back at the one just described, which fixes that pair in order. The first sentence names everything with full nouns and points back at nothing, so it opens; <em>What the counts suggest, then</em> generalises from what came before, so it closes.' },

        { id: 't6l2s3-5', type: 'order', tag: 'coh-order', level: 'B2+',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'The steel footbridge over the canal is inspected every second year.',
            'While the engineers were checking the deck in July, they found cracks in two of the bearings.',
            'These faults were serious enough to close the bridge the same afternoon.',
            'The district now wants an annual inspection rather than one every two years.'
          ],
          why: 'The habit comes first, the continuous verb sets the stage for the discovery, <em>These faults</em> summarises the cracks, and the last sentence answers the habit the first one described.' }
      ]
    }
  ],

  check: {
    id: 't6l2ck', name: 'Systems Check · Linking the middle',
    items: [
      { id: 't6l2ck-1', type: 'choose', tag: 'coh-connector', level: 'B2+',
        stem: 'The operator moved the last departure forward by forty minutes. ______, the night-market workers could no longer get home at all.',
        options: [
          'By contrast',
          'As a result',
          'In the same way',
          'Even so'
        ],
        answer: 1,
        why: 'Losing the last bus is the outcome of moving it. <em>By contrast</em> and <em>Even so</em> would both turn against the first sentence instead of following from it, and <em>In the same way</em> would claim a parallel between two things that stand in a plain cause-and-effect relation.' },

      { id: 't6l2ck-2', type: 'choose', tag: 'coh-connector', level: 'B2+',
        stem: 'Which sentence must come immediately before <em>However, the new floor holds only half the cooperative\'s rice.</em>?',
        options: [
          'Farmers are asking for a second floor beside the old store.',
          'Rain in December left the fields under water for a fortnight.',
          'The cooperative laid a concrete drying floor beside the main road three years ago.',
          'Grain spread along the road used to be lost to passing traffic.'
        ],
        answer: 2,
        why: '<em>However</em> overturns an expectation, and laying a drying floor creates the expectation that the drying problem is solved. The request for a second floor is the later response, the wet December is a different problem altogether, and the grain lost to traffic describes how things stood before the floor existed.' },

      { id: 't6l2ck-3', type: 'sort', tag: 'coh-connector', level: 'B2+',
        stem: 'What does each connector point back at?',
        bins: [
          { key: 'cons', label: 'Announces a consequence', hint: 'the cause is behind me' },
          { key: 'turn', label: 'Turns against what came before', hint: 'expect the opposite' }
        ],
        items: [
          { text: 'As a result', bin: 'cons' },
          { text: 'Nevertheless', bin: 'turn' },
          { text: 'Because of this', bin: 'cons' },
          { text: 'On the other hand', bin: 'turn' },
          { text: 'Consequently', bin: 'cons' },
          { text: 'Even so', bin: 'turn' }
        ],
        why: 'Both kinds point backwards, which is why neither can open a paragraph, but they point at different things: one at a cause, one at an expectation to be overturned.' },

      { id: 't6l2ck-4', type: 'choose', tag: 'coh-order', level: 'B2+',
        stem: 'Which sentence is the background, and therefore comes first?',
        options: [
          'The villages along the canal usually begin cutting their rice in the second week of November.',
          'Last year the rains continued into December and left the fields under water.',
          'This delay pushed the harvest into the weeks when the drying floor was already full.',
          'Farmers want the cooperative to keep drying space free until the new year.'
        ],
        answer: 0,
        why: 'A habitual statement with full nouns is the wide shot. <em>Last year</em> looks like an opener, but it reports the event that breaks the habit; <em>This delay</em> summarises that event; and the request to the cooperative is the closing move.' },

      { id: 't6l2ck-5', type: 'order', tag: 'coh-order', level: 'B2+',
        stem: 'Put these four sentences into the order that makes a paragraph.',
        items: [
          'The morning market beside the temple has traded from the same forty stalls since the 1970s.',
          'This year, while the drains beneath the ground were being renewed, the stalls were moved to a car park behind the mall.',
          'Takings there fell so sharply that a quarter of the traders did not return.',
          'The district office has promised the rest a rent-free year once the market ground reopens.'
        ],
        why: 'The habit first, then the move with its continuous background clause, then <em>there</em> for the car park, then the promise that looks forward.' },

      { id: 't6l2ck-6', type: 'order', tag: 'coh-order', level: 'B2+',
        stem: 'Put these four sentences into the order that makes a paragraph.',
        items: [
          'A weekly language exchange meets in the back room of a cafe near the university.',
          'Until this year each evening was run entirely by two retired teachers.',
          'When both of them moved away in April, the group nearly stopped meeting altogether.',
          'It survives now only because four of the regular members agreed to share the organising.'
        ],
        why: 'Follow the chain of references: the meeting, then <em>each evening</em>, then <em>both of them</em> for the teachers, then <em>It</em> for the group. Every arrow lands on the sentence in front.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T6.levels.push({
  id: 't6l3', n: 3, name: 'The whole paragraph', cefr: 'C1',
  blurb: 'Fix the first sentence and the last, order the middle by cause and background, then read the chain of references back.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't6l3s1', name: 'The closing move', cefr: 'C1',
      theory: {
        key: 'Paragraphs end by looking forward — a recommendation, a decision, or a consequence that reaches beyond the incident.',
        body: [
          'The last sentence of an exam paragraph is as predictable as the first. It stops describing and starts pointing outwards: <em>experts advise</em>, <em>the district office is now demanding</em>, <em>the school has therefore booked the hall for five years</em>. It is the only sentence in the set that is about what happens next.',
          'Three shapes cover almost all of them. A recommendation: <em>The librarians are asking for a damp alarm in every basement store.</em> A decision already taken: <em>The district office has set a limit of eight tonnes.</em> A broader implication: <em>Takings fell so sharply that a quarter of the traders never returned.</em>',
          'Once you can see the closing move, the outside-in method works. Fix the first sentence by elimination, fix the last by its forward look, and you are left with two sentences in the middle whose order is decided by cause and background. A four-sentence item collapses in about twenty seconds.',
          'The trap is two sentences that both look forward. Keep the one that answers <strong>this</strong> paragraph — tied to it by a demonstrative or a connector — and treat the other as middle. A standing instruction that would fit any paragraph is not an ending.'
        ],
        simple: [
          'The last sentence looks forward. It says what should be done, what someone has decided, or what it all means.',
          'Look for <em>now wants</em>, <em>is asking for</em>, <em>has agreed to</em>, <em>experts advise</em>, <em>has therefore decided</em>.',
          'Find the first sentence and the last sentence first. Then you only have two sentences left to order.'
        ],
        examples: [
          { s: '<b>The head teachers are now asking the province to fund a replacement vehicle.</b>', g: 'a recommendation — the classic closing move.' },
          { s: '<b>The contractor has agreed to empty the bins twice as often from October.</b>', g: 'a decision about what happens next.' },
          { s: '<b>Takings there fell so sharply that a quarter of the traders never returned.</b>', g: 'a broader consequence reaching past the incident.' },
          { s: '<s>A water pipe burst under the car park one evening in November.</s>', g: 'an event, not an ending — something has to follow it.' }
        ]
      },
      items: [
        { id: 't6l3s1-1', type: 'choose', tag: 'coh-closing', level: 'C1',
          stem: 'Which sentence closes the paragraph?',
          options: [
            'Nine large glass bins were placed in convenience-store car parks instead.',
            'The district stopped collecting glass from the front of each house to save fuel.',
            'The contractor has agreed to empty them twice as often from October.',
            'These bins overflow every weekend because they were sized for a smaller district.'
          ],
          answer: 2,
          why: 'Only one sentence looks forward to what will happen next. The others describe what replaced the old arrangement, set up the change itself and report the problem that followed, and none of the three says anything about the future.' },

        { id: 't6l3s1-2', type: 'sort', tag: 'coh-closing', level: 'C1',
          stem: 'Decide whether each sentence belongs at the start or at the end of its paragraph.',
          bins: [
            { key: 'open', label: 'Opens the paragraph', hint: 'full nouns, nothing has happened yet' },
            { key: 'close', label: 'Closes the paragraph', hint: 'looks forward past the incident' }
          ],
          items: [
            { text: 'The district hospital posts its appointments every Monday', bin: 'open' },
            { text: 'Managers have agreed to send a text alongside every letter', bin: 'close' },
            { text: 'A concrete bridge carries the lane over the canal', bin: 'open' },
            { text: 'The district office has now set a limit of eight tonnes', bin: 'close' },
            { text: 'The district pool closed for six months last year', bin: 'open' },
            { text: 'The librarians want a damp alarm in every basement store', bin: 'close' }
          ],
          why: 'Openers name their subject in full and report nothing that has yet happened. Closers name a response, and they only make sense once a problem has been described.' },

        { id: 't6l3s1-3', type: 'choose', tag: 'coh-closing', level: 'C1',
          stem: 'Two of these sentences look forward. Which one is the last sentence of the paragraph?',
          options: [
            'The sports centre runs beginners\' swimming lessons on Saturday mornings.',
            'Every class this term filled within an hour of the booking line opening.',
            'Parents can register a child for the waiting list at the reception desk.',
            'Such pressure has persuaded the centre to add a session on Sunday afternoons.'
          ],
          answer: 3,
          why: 'Both of the last two look forward, but only one answers the problem this paragraph describes, and <em>Such pressure</em> ties it to the sentence in front. A standing instruction about the reception desk would fit any paragraph at all, while the first two sentences report a habit and an event rather than a response.' },

        { id: 't6l3s1-4', type: 'order', tag: 'coh-closing', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'The community garden behind the housing estate has no mains water of its own.',
            'Growers there have always filled their cans from two tanks fed by the shelter roofs.',
            'Three dry seasons in a row have left those tanks empty by the middle of July.',
            'The committee is asking the water utility to quote for a metered tap at the gate.'
          ],
          why: 'The standing state of affairs opens, the tanks answer it, <em>those tanks</em> fixes the third sentence behind the second, and the request for a quotation is the only sentence about what happens next.' },

        { id: 't6l3s1-5', type: 'order', tag: 'coh-closing', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'A family printing works in the old quarter has produced school textbooks since 1958.',
            'Last month its largest press broke down in the middle of a print run.',
            'Because that machine is no longer made, the firm waited three weeks for a single part.',
            'The owners are now costing a second press against the price of such delays.'
          ],
          why: '<em>Its largest press</em> needs the works named first, <em>that machine</em> needs the press, and <em>such delays</em> needs the three weeks. The costing exercise is the forward look that closes.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't6l3s2', name: 'Ordering four sentences', cefr: 'C1',
      theory: {
        key: 'Eliminate what cannot be first, find the closing move, order the middle by cause and background, then read the chain of references back.',
        body: [
          'Here is the method in full, in the order you should run it, and it is worth running it in that order even when you think you can see the answer.',
          '<strong>One.</strong> Cross out every sentence opening with a backward reference (<em>this, these, such, that, it, they, their, then, instead</em>) or a consequence connector (<em>as a result, consequently, therefore, because of this</em>). None of them can be first. <strong>Two.</strong> Find the closing move — a recommendation, a decision, a broader implication — and put it last. <strong>Three.</strong> Order what is left by cause before consequence and background before event. <strong>Four.</strong> Read the whole thing through and check that every demonstrative points at the sentence immediately in front of it.',
          'Step four is not optional. It is what turns a plausible order into a certain one, and it catches the answer you chose because it sounded better. If a demonstrative points at nothing, the order is wrong however well it reads.',
          'Timing matters. Five of these items appear in the paper and none of them needs more than a minute. Spend that minute on steps one and two, which are mechanical, and you will rarely have to guess at step three.'
        ],
        simple: [
          'Step 1: cross out any sentence starting with <em>this, these, such, it, they, instead, as a result</em> or <em>therefore</em>. It cannot be first.',
          'Step 2: find the sentence that says what should be done next. That is the last one.',
          'Step 3: put the other two in the middle — cause before result, background before event. Step 4: check that every <em>this</em> and <em>these</em> points at the sentence just before it.'
        ],
        examples: [
          { s: 'Step 1 kills <b>This erosion</b>, <b>Because of these losses</b> and <b>The surveyors now recommend</b> as openers.', g: 'three of four disqualified in a single pass.' },
          { s: 'Step 2 finds <b>The surveyors now recommend moving the footpath inland</b>.', g: 'a recommendation, so it goes last.' },
          { s: 'Step 3 puts <b>This erosion has already taken the coastal path</b> in front of <b>Because of these losses, the provincial authority ordered a survey</b>.', g: 'the losses are the path and the boundaries, so that sentence is the cause.' },
          { s: 'Step 4 reads the chain: cliffs, <b>This erosion</b>, <b>these losses</b>, <b>The surveyors</b>.', g: 'every arrow lands on the sentence in front, so the order is proved rather than guessed.' }
        ]
      },
      items: [
        { id: 't6l3s2-1', type: 'order', tag: 'coh-order', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'The cliffs north of the fishing harbour have been retreating by almost a metre a year.',
            'This erosion has already taken the coastal path and two field boundaries.',
            'Because of these losses, the provincial authority commissioned a full survey in March.',
            'The surveyors now recommend moving the footpath inland before the storm season.'
          ],
          why: 'Run the method: only the first sentence survives step one, the recommendation is the closing move, and <em>this erosion</em> and <em>these losses</em> chain the middle in one direction only.' },

        { id: 't6l3s2-2', type: 'order', tag: 'coh-order', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'In January the district office changed the timetable for every rural bus route.',
            'These new departure times left the early service arriving eleven minutes after the school bell.',
            'Consequently, dozens of pupils began missing the first lesson of the day.',
            'Parents are demanding that the operator restore the earlier departure.'
          ],
          why: 'A date is allowed in first position when every noun in the sentence is new. <em>These new departure times</em> then needs the change, <em>Consequently</em> needs the late arrival, and the demand closes.' },

        { id: 't6l3s2-3', type: 'order', tag: 'coh-order', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'The district hospital sends out its outpatient appointments by post each Monday.',
            'In August a sorting error delayed almost four hundred of those letters.',
            'As a result, a quarter of the patients missed clinics they had waited months for.',
            'Managers have since agreed to send a text message alongside every letter.'
          ],
          why: '<em>Those letters</em> cannot precede the sentence that introduces the post, <em>As a result</em> cannot precede its cause, and <em>have since agreed</em> is the response that closes.' },

        { id: 't6l3s2-4', type: 'choose', tag: 'coh-order', level: 'C1',
          stem: 'A. Last year the footpath along the mangrove channel was closed after a landslide.<br>B. Because of this, the farmer fenced the orchard and the complaints began.<br>C. Walkers began crossing the neighbouring farmer\'s orchard instead.<br>D. The district office has since agreed to build a raised boardwalk around the slip.<br>Choose the correct order.',
          options: [
            'A-C-B-D',
            'A-B-C-D',
            'C-A-B-D',
            'A-C-D-B'
          ],
          answer: 0,
          why: 'Only A survives step one: B opens with a consequence connector, while C carries <em>instead</em> and D carries <em>since</em>, and both of those reach back at something already said, which rules out the order that begins with C. D is the decision that closes, so the order ending with B is wrong, and <em>Because of this</em> in B demands the walkers crossing the orchard immediately in front of it, so B cannot stand second either.' },

        { id: 't6l3s2-5', type: 'order', tag: 'coh-order', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'Every October, thousands of waders stop to feed on the mudflats at the river mouth.',
            'Last autumn the birds arrived to find half the flats fenced off for a new pier.',
            'Such disturbance drove several flocks on to smaller feeding grounds upriver.',
            'Conservation groups are asking for the fencing to be removed outside the building season.'
          ],
          why: 'The habit is the wide shot, <em>the birds</em> and <em>the flats</em> both need it, <em>Such disturbance</em> summarises the fencing, and the request for its removal closes.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't6l3s3', name: 'The traps in an ordering question', cefr: 'C1',
      theory: {
        key: 'Three things fool students: a date at the front of a sentence, a sentence that summarises the whole paragraph, and two sentences that both look like endings.',
        body: [
          '<strong>Trap one: the date.</strong> <em>Last term the van was off the road for nine weeks</em> begins with a time phrase and feels like an opening. It is not, because <em>the van</em> has no antecedent. A date licenses first position only when every noun in the sentence is being introduced there for the first time.',
          '<strong>Trap two: the summary.</strong> One sentence in the set may state the whole point of the paragraph — <em>the scheme has changed the way three villages borrow books</em>. Students put it first because it is the most general sentence there. It goes last, because a summary is a backward reference to everything.',
          '<strong>Trap three: two endings.</strong> When two sentences both look forward, keep the one tied to the incident by a demonstrative or a connector and treat the other as middle. <em>Such pressure has persuaded the centre to add a session</em> beats <em>Parents can register at reception</em>, because the first answers this paragraph and the second would fit any.',
          'A fourth, quieter trap: two sentences that could each plausibly follow the opener. Break the tie with tense. The one built on <em>was</em> or <em>were</em> plus <em>-ing</em> is background and goes first; the simple past event goes second.'
        ],
        simple: [
          'Trap 1: a sentence can start with a date and still not be first. Check whether it uses <em>the</em> or <em>its</em> for something not yet introduced.',
          'Trap 2: the sentence that sums everything up is usually the last one, not the first.',
          'Trap 3: if two sentences look like endings, choose the one that points back at this paragraph\'s problem.'
        ],
        examples: [
          { s: '<s>Last term the van was off the road for nine weeks.</s>', g: 'a date, but "the van" points at nothing yet, so this cannot be first.' },
          { s: '<b>Three secondary schools in the district share a single mobile library van.</b>', g: 'the same paragraph\'s real opener: every noun is new here.' },
          { s: '<b>During that closure, borrowing across the three schools fell by half.</b>', g: '"that closure" fixes this sentence immediately behind the nine weeks.' },
          { s: '<s>Parents can register a child at the reception desk.</s>', g: 'forward-looking, but it fits any paragraph, so it is not this one\'s ending.' }
        ]
      },
      items: [
        { id: 't6l3s3-1', type: 'choose', tag: 'coh-order', level: 'C1',
          stem: 'A student puts <em>Last month its largest press broke down in the middle of a print run</em> first. Which mistake has been made?',
          options: [
            'Choosing the most dramatic sentence as the summary.',
            'Mistaking a consequence for a cause.',
            'Reading a continuous verb as background.',
            'Treating a time phrase as a licence for first position.'
          ],
          answer: 3,
          why: 'The date at the front is not the problem in itself. <em>Its</em> is: no firm has been named, so the sentence has to follow the one that names it. Nothing here has been taken for a summary, no connector has been misread as a cause, and <em>broke down</em> is a simple past event rather than a continuous background.' },

        { id: 't6l3s3-2', type: 'choose', tag: 'coh-order', level: 'C1',
          stem: 'Where does <em>The scheme has changed the way three villages borrow books</em> belong in its paragraph?',
          options: [
            'First, because it is the most general sentence.',
            'Second, because it follows the sentence that introduces the scheme.',
            'Last, because it sums up everything already described.',
            'It cannot be placed without knowing the other three sentences.'
          ],
          answer: 2,
          why: 'A summary is a backward reference to a whole paragraph, and <em>The scheme</em> assumes the scheme has been described. Generality on its own never wins first place, a sentence naming the outcome cannot sit second before that outcome exists, and the shape of the sentence settles the question without the other three.' },

        { id: 't6l3s3-3', type: 'order', tag: 'coh-order', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'The community plots behind the station were laid out for railway workers forty years ago.',
            'Since the last free plots were taken in March, the waiting list has grown to ninety names.',
            'Such demand has persuaded the district office to look for a second site beside the canal.',
            'Anyone applying this year should therefore expect to wait until the cool season.'
          ],
          why: '<em>Such demand</em> can only follow the ninety names, which fixes the middle pair. <em>Since</em> and <em>therefore</em> disqualify their sentences from first place, leaving one opener.' },

        { id: 't6l3s3-4', type: 'order', tag: 'coh-order', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'Three secondary schools in the district share a single mobile library van.',
            'Last term the van was off the road for repairs for nine weeks.',
            'During that closure, borrowing across the three schools fell by more than half.',
            'The head teachers are now asking the province to fund a replacement vehicle.'
          ],
          why: 'This is the date trap. <em>Last term</em> is tempting, but <em>the van</em> needs the sentence that introduces it, and <em>that closure</em> needs the nine weeks.' },

        { id: 't6l3s3-5', type: 'order', tag: 'coh-order', level: 'C1',
          stem: 'Put these four sentences into the order that makes a paragraph.',
          items: [
            'A Thai-Japanese exchange group has met in the same classroom for six years.',
            'During the closures of 2021 the meetings moved on to a video call.',
            'That arrangement brought in members from three other provinces.',
            'The group now runs one evening in the room and one online each month.'
          ],
          why: '<em>The meetings</em> needs the group, <em>That arrangement</em> needs the video call, and the last sentence is the only one that describes the present settlement rather than a step towards it.' }
      ]
    }
  ],

  check: {
    id: 't6l3ck', name: 'Systems Check · The whole paragraph',
    items: [
      { id: 't6l3ck-1', type: 'choose', tag: 'coh-topic', level: 'C1',
        stem: 'Which sentence opens the paragraph?',
        options: [
          'The book fair added a schools programme to its second day two years ago.',
          'Tickets for those sessions were free, and every one was taken by January.',
          'This success persuaded the organisers to run a full week of school events.',
          'Teachers are being asked to book their classes before the end of term.'
        ],
        answer: 0,
        why: '<em>Those sessions</em> and <em>This success</em> both reach backwards, and the request to teachers is the closing move rather than an opening. Only one sentence introduces the fair and its schools programme for the first time.' },

      { id: 't6l3ck-2', type: 'choose', tag: 'coh-closing', level: 'C1',
        stem: 'Which sentence closes the paragraph?',
        options: [
          'None of them had used a hand-fed press before their first week.',
          'The manager expects the lost output to be repaid within a year.',
          'The printing works behind the market took on four apprentices in September.',
          'Training the group took two senior operators off production for a month.'
        ],
        answer: 1,
        why: 'Only one sentence looks beyond the incident: <em>expects</em> and <em>within a year</em> point at what happens next. The others open the paragraph by naming the works, describe what the apprentices could not yet do, and count the cost of teaching them.' },

      { id: 't6l3ck-3', type: 'choose', tag: 'coh-connector', level: 'C1',
        stem: 'Which sentence must come immediately before <em>Their weight opened cracks in the parapet within three months.</em>?',
        options: [
          'The district office has set a limit of eight tonnes on the crossing.',
          'A concrete bridge carries the lane over the canal on the way to the orchards.',
          'Trucks serving the new quarry began using that lane in the spring.',
          'The packing depot has sorted fruit on the same site for forty years.'
        ],
        answer: 2,
        why: '<em>Their</em> needs a plural antecedent that has weight and uses the lane, and only the trucks qualify. The tonnage limit is the decision that follows the damage, the bridge is singular, and the packing depot never travels anywhere.' },

      { id: 't6l3ck-4', type: 'order', tag: 'coh-order', level: 'C1',
        stem: 'Put these four sentences into the order that makes a paragraph.',
        items: [
          'The villages along the canal usually begin cutting their rice in the second week of November.',
          'Last year the rains continued into December and left the fields under water.',
          'This delay pushed the harvest into the weeks when the drying floor was already full.',
          'Farmers are asking the cooperative to keep drying space free until the new year.'
        ],
        why: 'The habit is the wide shot, the wet December is the event that breaks it, <em>This delay</em> summarises that December, and the request closes.' },

      { id: 't6l3ck-5', type: 'order', tag: 'coh-order', level: 'C1',
        stem: 'Put these four sentences into the order that makes a paragraph.',
        items: [
          'The district switched to fortnightly recycling collections at the start of the year.',
          'Households in the flats soon had nowhere to store two weeks of bottles and card between those collections.',
          'Because of this, the amount left beside the bins rose sharply over the rainy season.',
          'The district office is trialling a weekly collection on three of the busiest estates.'
        ],
        why: '<em>Two weeks of bottles</em> and <em>soon</em> both depend on the switch, <em>Because of this</em> needs the storage problem in front of it, and the trial is the response.' },

      { id: 't6l3ck-6', type: 'order', tag: 'coh-order', level: 'C1',
        stem: 'Put these four sentences into the order that makes a paragraph.',
        items: [
          'The district library keeps its collection of old provincial newspapers in a room beneath the reading hall.',
          'A blocked gutter let rainwater into that room over three days in August.',
          'Such damp buckled almost a third of the bound volumes before anyone noticed.',
          'The librarians are now asking for a damp alarm in every basement store.'
        ],
        why: 'Run the chain: the room, then <em>that room</em>, then <em>Such damp</em> for the rainwater, then the recommendation. No other order leaves every reference with something to point at.' }
    ]
  }
});

TOPICS.push(T6);
