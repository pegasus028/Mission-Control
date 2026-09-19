/* ===========================================================================
   MISSION CONTROL — content.js  (core)
   EN32101 English 3 · M.5.1 · Satriwithaya School
   ---------------------------------------------------------------------------
   This file holds everything that is NOT question content: the rank ladder,
   the awards, and the error-tag dictionary that drives the teacher report.

   The questions themselves live in the topic files, which are loaded after
   this one and push onto TOPICS:

     topic-verbforms.js      System 01  Verb + -ing / verb + to
     topic-participles.js    System 02  Participial clauses
     topic-nominalization.js System 03  Nominalization
     topic-tenses.js         System 04  Tenses, states and suffixes
     topic-inversion.js      System 05  Inversion, conditionals, reporting
     topic-cohesion.js       System 06  Paragraph organisation
     topic-vocab.js          System 07  Unit 3 & 4 vocabulary
     topic-reading.js        System 08  Reading comprehension
     mocks.js                Three full simulations + the CONTENT export

   ---------------------------------------------------------------------------
   SHAPE OF A TOPIC

   {
     id:'t1', n:1, code:'System 01', name:'…', art:'chip', cefr:'B1+–C1',
     blurb:'One sentence a student reads before opening it.',
     levels:[
       { id:'t1l1', n:1, name:'…', cefr:'B2', blurb:'…',
         subs:[                                   // three per level
           { id:'t1l1s1', name:'…', cefr:'B2',
             theory:{ key:'One sentence that is the whole idea.',
                      body:['<p-worth of html>', …],
                      simple:[…],                 // same idea, plainer English
                      examples:[{s:'…', g:'…'}] },
             items:[ … ] },
           …
         ],
         check:{ id:'t1l1ck', name:'Systems Check', items:[ … ] }
       }, …
     ]
   }

   ITEM TYPES  (the renderer in engine.js knows these)
     choose  {stem, options[], answer}                    multiple choice
     equiv   {given, stem, options[], answer}             closest meaning
     gap     {lines:[{who,text}], stem, options[], answer} dialogue gap-fill
     cloze   {passage, blank, stem, options[], answer}     gap in a text
     read    {passage, source, stem, options[], answer}    reading question
     spot    {stem, words[], answer, fix}                  find the mistake
     order   {stem, items[] IN CORRECT ORDER}              reorder (shuffled)
     sort    {stem, bins[], items[{text,bin}]}             drop into boxes
     build   {stem, tiles[], solution, alt[]}              assemble a sentence
     judge   {given, stem, answer}                         True / False / Can't tell

   Every item carries: id · type · tag (must exist in REMEDIATION) · level
   (a CEFR band) · why (the diagnosis a student reads after answering).

   ---------------------------------------------------------------------------
   THE ONE RULE THAT MATTERS

   Nothing in this app may reproduce any part of the final examination.
   The topics are the same. The sentences, verbs, options and passages are
   not, and must never be made so. See VERIFY.md.
   =========================================================================== */

var CEFR = ['B1', 'B1+', 'B2', 'B2+', 'C1', 'C1+'];

/* --------------------------------------------------------------------------
   RANKS — one rung per band of systems checks cleared (25 in total).
   -------------------------------------------------------------------------- */
var RANKS = [
  { min: 0,  name: 'Ground Crew',       note: 'Powered up. Nothing checked yet.' },
  { min: 1,  name: 'Cadet',             note: 'First system online.' },
  { min: 3,  name: 'Technician',        note: 'You can name the parts and say what they do.' },
  { min: 6,  name: 'Operator',          note: 'You handle the everyday forms without thinking.' },
  { min: 10, name: 'Analyst',           note: 'You can explain why a wrong answer is wrong.' },
  { min: 14, name: 'Specialist',        note: 'The hard systems — participles, nominalization — hold.' },
  { min: 18, name: 'Flight Controller', note: 'You read a sentence and see its structure.' },
  { min: 22, name: 'Deputy Director',   note: 'Exam-ready on nearly everything.' },
  { min: 25, name: 'Mission Director',  note: 'Every system green. Go for launch.' }
];

/* --------------------------------------------------------------------------
   AWARDS
   -------------------------------------------------------------------------- */
var BADGES = [
  { id: 'poweron',   name: 'Power On',        perk: 'The console is yours.',              how: 'Finish your first module.' },
  { id: 'streak3',   name: 'Three-Day Burn',  perk: 'Momentum is a skill.',               how: 'Study 3 days in a row.' },
  { id: 'streak7',   name: 'Week in Orbit',   perk: 'Seven days, no drift.',              how: 'Study 7 days in a row.' },
  { id: 'streak14',  name: 'Long Mission',    perk: 'Two weeks without a gap.',           how: 'Study 14 days in a row.' },
  { id: 'allgreen',  name: 'All Green',       perk: 'A perfect systems check.',           how: 'Score 100% on any systems check.' },
  { id: 'triple',    name: 'Triple Green',    perk: 'Three perfect checks.',              how: 'Score 100% on three systems checks.' },
  { id: 'nohelp',    name: 'Manual Flight',   perk: 'No hints, no help.',                 how: 'Clear a systems check without using a hint.' },
  { id: 'recovered', name: 'Fault Cleared',   perk: 'You fixed what you broke.',          how: 'Fix 5 questions on your Fault List.' },
  { id: 'run10',     name: 'Clean Run',       perk: 'Ten in a row.',                      how: 'Answer 10 questions correctly in a row.' },
  { id: 'reflight',  name: 'Re-flight',       perk: 'A second attempt, taken.',           how: 'Pass a systems check you previously failed.' },
  { id: 'quick',     name: 'Fast Hands',      perk: 'Reading speed counts in the exam.',  how: 'Earn 25 time bonuses by answering inside 7 seconds.' },
  { id: 'sim1',      name: 'First Simulation',perk: 'You have seen the whole paper.',     how: 'Finish any full simulation.' },
  { id: 'sim70',     name: 'Flight Ready',    perk: '70% on a full simulation.',          how: 'Score 70% or more on any full simulation.' },
  { id: 'simall',    name: 'Three Sims Flown',perk: 'Nothing left to surprise you.',      how: 'Finish all three full simulations.' },
  { id: 'director',  name: 'Mission Director',perk: 'Every system green.',                how: 'Clear all 25 systems checks.' }
];

/* --------------------------------------------------------------------------
   ERROR TAGS
   Every item names one. `principle` is what a student sees if they press
   Hint. `reteach` and `activities` appear only in the teacher console.
   -------------------------------------------------------------------------- */
var REMEDIATION = {

  /* ---------------------------------------- SYSTEM 01 · verb forms */
  'vform-pos': {
    name: 'What job is this -ing word doing?',
    principle: 'The same -ing form does three different jobs: a noun (Testing takes time), an adjective (a testing week), and part of a verb (we are testing). Decide the job first; the grammar follows from it.',
    reteach: 'Put the -ing word to three tests. Can you replace it with "it"? Then it is a noun (a gerund) and takes a singular verb. Does it sit in front of a noun and describe it? Then it is an adjective. Is there a form of BE in front of it? Then it is part of the verb. Students who skip this step get the agreement wrong in item after item, because they are guessing at a form instead of reading a function.',
    activities: [
      'Three-column dictation: read ten sentences aloud; students write each -ing word under NOUN, ADJECTIVE or VERB and defend two borderline ones.',
      'Replace-with-it drill: every gerund in a paragraph is swapped for "it". The ones that survive were nouns; the ones that break were not.'
    ]
  },
  'vform-gerund-verb': {
    name: 'Verbs that must take -ing',
    principle: 'A closed list of verbs is always followed by -ing, never by "to": avoid, risk, suggest, admit, deny, involve, consider, keep, practise, postpone, resist, mind, finish, delay.',
    reteach: 'This is memory, not logic — but there is a pattern worth naming. Most of these verbs look backwards or sideways at an action already in view (admit, deny, consider, risk), while the to-infinitive verbs look forward to one that has not happened (agree, promise, plan). Teach the list in that frame and it stops feeling arbitrary.',
    activities: [
      'List race: teams have 90 seconds to write every verb they know that takes -ing; wrong entries cost a point, so guessing is punished.',
      'Half-sentence relay: A reads "The board postponed…", B must finish with an -ing clause inside three seconds.'
    ]
  },
  'vform-inf-verb': {
    name: 'Verbs that must take to + infinitive',
    principle: 'Another closed list takes only to + infinitive: agree, decide, refuse, promise, offer, manage, fail, intend, hope, plan, arrange, afford, pretend, threaten.',
    reteach: 'These verbs point forward in time: at the moment of deciding, promising or refusing, the second action has not happened yet. That is why the to-infinitive — historically a preposition of direction — is the form that fits.',
    activities: [
      'Timeline board: draw the moment of the first verb and the moment of the second; students place ten verbs on the line and predict the pattern.',
      'Odd one out: five verbs, four take -ing; find the intruder and justify.'
    ]
  },
  'vform-both': {
    name: 'Verbs that take both, with a change of meaning',
    principle: 'remember, forget, regret, try, stop, go on, mean, need. With -ing the second action comes FIRST in time or is the thing itself; with to + infinitive it comes SECOND, or is the purpose.',
    reteach: 'Draw two arrows. "I remembered locking it" — the locking happened, then the memory. "I remembered to lock it" — the memory came first and produced the locking. Same for regret (regret doing = sorry it happened; regret to say = sorry about what I am about to say) and try (try doing = experiment; try to do = make an effort at something hard).',
    activities: [
      'Two-arrow drill: eight sentences on the board, students draw the time arrow before choosing the form.',
      'Story gap: a short incident report where every one of these verbs appears twice, once in each pattern.'
    ]
  },
  'vform-prep-ing': {
    name: '-ing after a preposition',
    principle: 'Anything directly after a preposition must be a noun, and the noun form of a verb is -ing. That includes the "to" in look forward to, object to, be committed to — which is a preposition, not an infinitive marker.',
    reteach: 'The test is whether you can put a normal noun in the slot. "insist on payment" works, so "insist on paying" is right and "insist on to pay" is not. The trap is the handful of phrases ending in the preposition to: look forward to, object to, be used to, be committed to, be opposed to. Say them with a noun first — "look forward to the holiday" — and the -ing follows naturally.',
    activities: [
      'Noun-swap test on twelve prepositional phrases: put a concrete noun in the slot, then the verb.',
      'The five "to" phrases: drill them as fixed chunks with a noun object before ever allowing a verb.'
    ]
  },
  'vform-prep-passive': {
    name: 'Passive -ing after a preposition',
    principle: 'When the subject of the -ing clause receives the action rather than doing it, the -ing goes passive: being + past participle. "insist on every system being audited", not "being audit" or "to be audited".',
    reteach: 'Two steps. First, a preposition forces -ing. Second, ask who does the auditing — if it is not the noun in front, the form must be passive: being audited. Students who get step one right and step two wrong write "insist on every system auditing", which says the systems do the auditing themselves.',
    activities: [
      'Who-does-it check: ten prepositional clauses; students write the doer in the margin, then choose active or passive -ing.',
      'Rewrite a set of active clauses as passive ones without changing the preposition.'
    ]
  },
  'vform-subject-ing': {
    name: '-ing as the subject — and its singular verb',
    principle: 'A verb can only be a subject in its -ing form, and that subject is singular however many plural nouns follow it. "Monitoring the systems IS expensive", not "are".',
    reteach: 'Two errors live here. The first is using a bare verb as a subject: "Monitor autonomous systems has become a requirement" — impossible in English; it must be Monitoring. The second is agreement: the whole -ing phrase is one idea, so it takes a singular verb, no matter that "systems" sits right next to it. Cover everything between the -ing word and the verb with your hand and the agreement becomes obvious.',
    activities: [
      'Cover-the-middle drill: long -ing subjects on strips; students hide the middle and read subject + verb aloud.',
      'Headline rewrite: turn ten imperative headlines ("Monitor the network") into -ing subjects with a complete predicate.'
    ]
  },
  'vform-parallel': {
    name: 'Parallel structure in a list of verbs',
    principle: 'Verbs joined by and / or / but must share the same form. If the first is a bare infinitive after a modal, so is the second: they should inform users and suspend the release.',
    reteach: 'Find the word that governs the list — a modal, a to, a preposition — and check that every branch would still work if you read it straight from that word. "should inform" ✓, "should suspending" ✗. This is the single easiest error to spot in an error-identification task once students know to look for and / or.',
    activities: [
      'Circle the "and": in ten long sentences, circle every coordinator, then read each branch back to its governor.',
      'Broken-branch repair: sentences with one branch deliberately out of form; students fix and name the governor.'
    ]
  },
  'equiv-pattern': {
    name: 'Reading a verb pattern as meaning',
    principle: 'A paraphrase is right only if it keeps the verb pattern\'s meaning: admitted doing = confessed to doing; meant to do = intended; tried doing = experimented with; regretted doing = was sorry about a past action.',
    reteach: 'In a closest-meaning question, three distractors are usually wrong on ONE feature: the tense is shifted (plan/will instead of past), the polarity is flipped (denied instead of admitted), or the verb pattern is misread (attempted to shut down instead of experimented with restarting). Teach students to check those three features in that order rather than reading for general vibe.',
    activities: [
      'Three-feature audit: for each distractor, students write T (tense), P (polarity) or V (verb pattern) to name what is wrong.',
      'Paraphrase ladder: one sentence, four rewrites, ranked from closest to furthest, with reasons.'
    ]
  },

  /* ---------------------------------------- SYSTEM 02 · participles */
  'part-what': {
    name: 'What a participial clause is',
    principle: 'A participial clause is built on a non-finite verb. It carries no tense of its own, it cannot stand alone as a sentence, and it takes its subject and its time from the main clause.',
    reteach: 'Three properties, and all three matter in the exam. No tense of its own means you cannot ask when it happened without reading the main clause. Cannot stand alone means a full stop after it produces a fragment. No subject of its own means it borrows the subject of the main clause — which is where dangling participles come from.',
    activities: [
      'Fragment or sentence: twenty strips; students sort them and repair every fragment by adding a main clause.',
      'Where is the tense? Students underline the only verb in each sentence that carries tense.'
    ]
  },
  'part-active': {
    name: '-ing clauses — the subject does the action',
    principle: 'An -ing clause means the subject of the main clause is doing that action: Working through the night, the team released the patch.',
    reteach: 'Build it from a full clause and delete. "Because the team worked through the night, they released the patch" → drop the conjunction, drop the subject, make the verb -ing. Insist on doing the deletion explicitly at first; students who jump straight to the participle form tend to attach it to the wrong subject.',
    activities: [
      'Delete-and-join: ten pairs of clauses reduced step by step on the board.',
      'Reverse it: give the participle version, ask for the full two-clause original.'
    ]
  },
  'part-passive': {
    name: '-ed clauses — the subject receives the action',
    principle: 'A past-participle clause means the subject of the main clause receives that action: Written in plain English, the guidance reached more readers.',
    reteach: 'The test is always the same: who does it, and who gets it? If the main-clause subject gets the action, the participle is the -ed form. Students who default to -ing produce "Writing in plain English, the guidance…" — which claims the guidance did the writing.',
    activities: [
      'Doer / receiver columns: sort twelve participle clauses by whether the subject acts or is acted on.',
      'Flip the voice: rewrite each -ing clause as an -ed clause by changing the subject of the main clause.'
    ]
  },
  'part-perfect': {
    name: 'Having + past participle',
    principle: 'Having + past participle says the participle action finished BEFORE the main clause. Having reviewed the logs, the engineers filed a report.',
    reteach: 'Use it only when the sequence matters. Where the two actions overlap, the plain -ing form is better. The perfect participle is a marker of time order, and students who sprinkle it everywhere are signalling a sequence they do not mean.',
    activities: [
      'Sequence or overlap: students decide for each pair, then choose the participle form.',
      'One-sentence summaries of a three-step process, forced into having + pp.'
    ]
  },
  'part-perfect-passive': {
    name: 'Having been + past participle',
    principle: 'Having been + past participle combines both: the action finished first AND the subject received it. Having been rewritten twice, the manual finally passed review.',
    reteach: 'This is the hardest form in the system, and it is a favourite of exam writers because it lets them test perfect and passive in one blank. Walk students through the four-way choice — training / trained / having trained / having been trained — by asking two questions in order: did it finish first, and did the subject do it or get it?',
    activities: [
      'Four-way grid: one sentence, four participle forms, students eliminate three and say why.',
      'Two-question protocol drilled aloud: "finished first?" then "doer or receiver?"'
    ]
  },
  'part-reduced-rel': {
    name: 'Reduced relative clauses',
    principle: 'A relative clause loses its pronoun and its BE: the data which was collected in June → the data collected in June. Active clauses reduce to -ing: the team which is running the trial → the team running the trial.',
    reteach: 'Two rules, one test. Only a SUBJECT relative clause reduces; "the report that the board approved" cannot lose "that". And the participle keeps the voice of the original. Students often reduce object relatives and produce nonsense.',
    activities: [
      'Reduce or refuse: twelve relative clauses, half reducible, half not; students justify each refusal.',
      'Expand a dense academic paragraph back into full relative clauses to feel what was removed.'
    ]
  },
  'part-dangling': {
    name: 'The subject of a participial clause',
    principle: 'A participial clause attaches to the subject of the main clause. If that subject cannot do the participle\'s action, the sentence is wrong however sensible it sounds.',
    reteach: 'Read the participle and the main-clause subject together, out loud, with nothing in between: "Reducing costs — the board." Does the board reduce costs? Then it holds. "Reducing costs — the decision." A decision does not reduce costs, so the sentence is broken, and the repair is a full clause with its own subject.',
    activities: [
      'Read-them-together drill: students cover everything between the comma and the subject.',
      'Comedy danglers: collect genuinely funny ones, then repair them two ways — new subject, or full clause.'
    ]
  },
  'part-fragment': {
    name: 'Participle where a finite verb is needed',
    principle: 'A participle is not a verb that can run a sentence. If a clause has no tensed verb anywhere, the participle must become one: The upgrade driving costs down → The upgrade drove costs down.',
    reteach: 'Teach the one-tensed-verb rule: every complete English sentence needs at least one verb carrying tense. In error-identification items, a long noun phrase followed by an -ing word is the classic trap, because the sentence reads fluently right up to the full stop and then turns out to say nothing.',
    activities: [
      'Find the tense: students circle the tensed verb in twenty sentences; the ones with none are the errors.',
      'Fragment autopsy: rewrite five fragments two ways, keeping the participle or promoting it.'
    ]
  },
  'part-edging-adj': {
    name: '-ed and -ing adjectives',
    principle: '-ing describes the thing that causes the feeling; -ed describes the one who has it. A confusing instruction leaves a confused reader.',
    reteach: 'Ask which way the arrow points. The instruction causes confusion, so it is confusing. The reader receives it, so the reader is confused. The exam also tests the pair concerning / concerned, where the -ed form carries an extra meaning ("involved in"), and alarming / alarmed. A situation is never "concerned" — it is concerning.',
    activities: [
      'Arrow drill: source → receiver, with twelve adjective pairs.',
      'Noun test: put each adjective in front of a noun (a boring lecture / a bored student) and read both aloud.'
    ]
  },

  /* ---------------------------------------- SYSTEM 03 · nominalization */
  'nom-suffix': {
    name: 'Noun-forming suffixes',
    principle: 'Verbs become nouns with -tion/-sion, -ment, -ance/-ence, -al, -ure, -ing, or with no change at all (a rise, a drop, an increase). Adjectives become nouns with -ity, -ness, -cy.',
    reteach: 'Suffix choice is lexical, not rule-governed, so it has to be learned by family: identify → identification, restrict → restriction, achieve → achievement, comply → compliance, refuse → refusal, fail → failure. The zero-change group (rise, drop, fall, increase, decrease, change, use) is worth naming separately, because students over-apply -tion and produce non-words.',
    activities: [
      'Family tree: one root per group, four columns — verb, noun, adjective, adverb.',
      'Suffix auction: teams bid on the right suffix for twenty verbs; a wrong bid costs double.'
    ]
  },
  'nom-agent': {
    name: 'Naming the agent — possessive and of-phrases',
    principle: 'In a nominalized phrase the doer takes a possessive or a by-phrase, and the thing done takes "of": the regulator\'s approval of the design.',
    reteach: 'The slot order is fixed: DOER + nominalization + of + THING DONE. Swap them and the sentence says the opposite. This is exactly what the exam\'s distractors do, so students must be drilled to identify the doer before reading the options at all.',
    activities: [
      'Doer/done underlining: two colours, ten nominalized phrases.',
      'Deliberate reversal: students write the wrong version themselves and explain what it now claims.'
    ]
  },
  'nom-structure': {
    name: 'Building the nominalized subject',
    principle: 'Nominalization turns a whole clause into a noun phrase that can then be the subject of a new sentence: They restricted mining → The restriction of mining …',
    reteach: 'Work in three steps, written on the board every time. One: find the verb in sentence A and nominalize it. Two: attach the doer and the object. Three: make that phrase the subject of a verb that links it to sentence B. Students who try to do all three in their heads produce phrases with the object missing.',
    activities: [
      'Three-step scaffold sheet, gradually removed over a week.',
      'Sentence-combining chains: three facts into one sentence, then back into three.'
    ]
  },
  'nom-causeverb': {
    name: 'The verb between two nominalizations',
    principle: 'Once both facts are noun phrases, a linking verb carries the causation: caused, led to, resulted in, contributed to, stemmed from, was attributed to, produced, triggered.',
    reteach: 'Half of these point forwards (cause, lead to, result in, produce, trigger) and half point backwards (stem from, result from, be attributed to, arise from). Getting the direction wrong reverses the claim while leaving the sentence perfectly grammatical — which is why it makes such a good distractor.',
    activities: [
      'Arrow sort: write each verb on a card, sort into FORWARD and BACKWARD piles.',
      'Same facts, both directions: students write one true and one false version and swap to catch each other.'
    ]
  },
  'nom-direction': {
    name: 'Which fact is the cause',
    principle: 'In a combining task, sentence A is normally the cause and sentence B the effect. A fluent option that reverses them is still wrong.',
    reteach: 'Teach a mechanical check before the options are read: write "A → B" in the margin. Then reject any option whose arrow runs B → A, no matter how well it is written. Most marks lost here are lost by students who picked the most academic-sounding option.',
    activities: [
      'Margin arrows on every combining item for a fortnight.',
      'Plausible-but-backwards: a set of options where the reversed one is deliberately the most elegant.'
    ]
  },
  'nom-register': {
    name: 'Why academic writing nominalizes',
    principle: 'Nominalization packs a clause into a noun phrase so it can be counted, qualified and made the subject of the next sentence. It buys density and cohesion, and it costs clarity.',
    reteach: 'Show the trade honestly. "The identification of the fault by the team led to a reduction in downtime" is dense and cohesive and slightly airless; the two-clause version is clearer and longer. Good C1 writing alternates. Students who believe nominalization is simply "better English" write unreadable paragraphs.',
    activities: [
      'De-nominalize a paragraph of policy prose, then discuss what was gained and lost.',
      'One-sentence linking: each new sentence must begin with a nominalization of the previous one.'
    ]
  },

  /* ---------------------------------------- SYSTEM 04 · tense & state */
  'tense-stative': {
    name: 'Verbs that resist the continuous',
    principle: 'Verbs that name a state rather than an activity — know, believe, own, belong, contain, consist of, seem, resemble, prefer — do not normally take the continuous.',
    reteach: 'The continuous says "in progress, and it will stop". A state is not in progress; it simply holds. That is why "I am knowing" is impossible while "I am learning" is fine. Group them by type — mental (know, believe), possession (own, belong), sense-and-seem (seem, appear), relation (contain, consist of) — rather than as one long list.',
    activities: [
      'Progress test: for each verb ask "can it be interrupted halfway?" — if not, it is stative.',
      'Four-box sort by state type, with two disputed verbs planted in the deck.'
    ]
  },
  'tense-twolives': {
    name: 'Verbs with a stative and a dynamic meaning',
    principle: 'Some verbs have both lives. think (opinion / mental activity), have (possess / experience), see (perceive / meet), taste, smell, weigh, measure. The continuous is available only for the dynamic meaning.',
    reteach: 'Two meanings, two grammars: "I think it works" is an opinion, "I am thinking about it" is an activity. "She has three servers" is possession, "she is having trouble" is an experience. Students should name the meaning before choosing the form.',
    activities: [
      'Minimal pairs read aloud, then paraphrased to prove the meanings differ.',
      'Meaning-first drill: the meaning is given, students supply the form.'
    ]
  },
  'tense-marker': {
    name: 'Time markers that fix the tense',
    principle: 'A finished time expression — last quarter, in 2019, yesterday, two years ago — forces the past simple. The present perfect needs an unfinished or unstated time: since, for, so far, already, recently.',
    reteach: 'This is the single most reliable error to spot in an error-identification task. Underline the time phrase first and the tense is decided before you have read the rest. "Last quarter … has reduced" is wrong not because the meaning is odd but because the time phrase is closed.',
    activities: [
      'Underline-the-time-phrase warm-up, ninety seconds, every lesson for a week.',
      'Marker swap: change only the time phrase and ask what the verb must become.'
    ]
  },
  'tense-background': {
    name: 'Past continuous as background',
    principle: 'The past continuous sets the scene that was already running; the past simple drops the event into it. While the team was testing the release, the server failed.',
    reteach: 'Draw it: a long line for the continuous, a cross on the line for the simple. In paragraph-ordering questions this pairing is a structural clue — the "was testing" sentence is almost always earlier than the "failed" sentence, because background precedes event.',
    activities: [
      'Line-and-cross diagrams for eight narrative pairs.',
      'Ordering with the tense covered up, then revealed, to show how much work it was doing.'
    ]
  },
  'tense-perfect-simple': {
    name: 'Present perfect or past simple',
    principle: 'Use the past simple for a finished event in finished time; use the present perfect when the time frame is still open or the present result is the point.',
    reteach: 'The question is never "how long ago" but "is the window closed?". "The team has upgraded the servers" — window open, result matters now. "The team upgraded the servers in March" — window closed. Thai learners often default to the perfect for anything that feels recent; the time phrase, not the feeling, decides.',
    activities: [
      'Open or closed: label the time frame before touching the verb.',
      'Same event, two sentences: one with a date, one without.'
    ]
  },
  'tense-suffix-make': {
    name: 'Suffixes that build verbs',
    principle: '-en, -ify, -ise/-ize and -ate turn an adjective or noun into a verb meaning "make or become": strengthen, simplify, modernise, activate.',
    reteach: 'Knowing the suffix tells you the word class before you know the word, which is exactly what a part-of-speech question rewards. Pair each verb with its noun and adjective so students see the whole family: strong → strengthen → strengthening; simple → simplify → simplification.',
    activities: [
      'Build the family from the adjective outwards, four columns.',
      'Word-class sprint: twenty unknown words, students name the class from the suffix alone.'
    ]
  },
  'tense-suffix-state': {
    name: 'Suffixes that set the state of a verb',
    principle: 'The ending decides the job: -ing is ongoing or active, -ed is completed or received, -tion/-ment names the event as a thing, -ive/-ent names a quality.',
    reteach: 'One root, four jobs: automate (action), automating (ongoing/active), automated (done to it), automation (the thing itself). Students who can walk a root through those four slots stop guessing in both the error-identification and the nominalization sections, because both are testing the same knowledge from different angles.',
    activities: [
      'Four-slot wheel: one root per student, four forms, used in four sentences.',
      'Slot dictation: read a sentence with a beep for the target word; students write the form the slot demands.'
    ]
  },

  /* ---------------------------------------- SYSTEM 05 · inversion etc. */
  'inv-negative': {
    name: 'Inversion after a negative adverbial',
    principle: 'When a negative or restrictive adverbial opens the sentence — rarely, seldom, never, little, at no time, under no circumstances — the subject and the auxiliary swap places: Rarely has a project moved so fast.',
    reteach: 'The inverted part is a question shape with a statement meaning. Build it in two steps: write the plain sentence, then move the negative adverbial to the front and turn the rest into a question. If there is no auxiliary, DO appears exactly as it would in a question: Seldom does a review take longer.',
    activities: [
      'Two-step board work: plain sentence, then inversion, ten times.',
      'Front-and-flip race in pairs, one minute per round.'
    ]
  },
  'inv-only': {
    name: 'Inversion after Only and Not only',
    principle: 'Only after / Only when / Only if / Not only invert the clause that FOLLOWS them, not the time clause itself: Only after the audit finished did the team publish.',
    reteach: 'Students invert the wrong clause: "Only after did the audit finish…". Mark the two clauses with brackets before inverting and the error disappears. Not only … but also inverts the first half only.',
    activities: [
      'Bracket-then-invert on eight two-clause sentences.',
      'Error gallery: five wrong inversions on the wall, students diagnose each.'
    ]
  },
  'cond-noif': {
    name: 'Conditionals without if',
    principle: 'Formal English drops if and inverts: Had the flaw been reported earlier … / Were the system offline … / Should you need access … . Only these three verbs do it, and the negative is never contracted.',
    reteach: 'Map each one to its if-version before use: Had = if + past perfect; Were = if + past simple of be; Should = if + happen to / by any chance. The inverted form is one register step up, and it appears in exam texts far more often than in speech, so recognition matters more than production.',
    activities: [
      'Two-column conversion, if-form and inverted form, ten pairs.',
      'Register sort: which of these ten sentences would you say aloud, and which would you only write?'
    ]
  },
  'cond-mixed': {
    name: 'Mixed conditionals',
    principle: 'The if-clause and the result clause can sit in different times. A past condition with a present result takes: If/Had + past perfect … would + bare infinitive (now).',
    reteach: 'Ask two questions: when is the condition, and when is the result? Past condition plus present result gives "Had they acted then, we would be safe now" — would BE, not would HAVE BEEN. A time word in the result clause (today, now, still) is the clue, and the exam plants one.',
    activities: [
      'Two-clock drill: students draw a clock over each clause before choosing.',
      'Hunt the time word: underline now/today/still, then decide.'
    ]
  },
  'rep-passive': {
    name: 'Reporting with the passive',
    principle: 'Academic English reports a claim without naming who made it: It is thought that the flaw existed for months / The flaw is thought to have existed for months.',
    reteach: 'Two frames, same meaning. The it-frame keeps the that-clause intact; the subject-frame lifts the subject out and turns the rest into an infinitive. Practise converting one into the other, because the exam tests the second and students only ever meet the first.',
    activities: [
      'Frame conversion in both directions, eight sentences.',
      'Hedging audit: find every "is said/thought/believed/reported to" in a news article.'
    ]
  },
  'rep-infinitive': {
    name: 'Choosing the infinitive form',
    principle: 'Four forms, two questions. Same time as the reporting verb or earlier? Doer or receiver? to do · to be done · to have done · to have been done.',
    reteach: 'Set it out as a two-by-two grid and make students place the sentence in a cell before looking at the options. "The records are thought to have been altered" — earlier than the thinking, and the records received the action, so: to have been + past participle. This single grid answers a whole family of exam items.',
    activities: [
      'Two-by-two grid filled in for one verb, then used on ten sentences.',
      'Elimination race: cross out two of four options in under five seconds, saying which question killed them.'
    ]
  },

  /* ---------------------------------------- SYSTEM 06 · cohesion */
  'coh-topic': {
    name: 'The topic sentence comes first',
    principle: 'The opening sentence of a paragraph introduces the subject with full nouns and no backward reference. If a sentence begins with this, these, that, therefore, as a result or a pronoun, it cannot be first.',
    reteach: 'In a reordering task, finding the first sentence solves half the item. Scan all four for backward-pointing words and eliminate every sentence that has one. What remains — usually one sentence, with a time or scene-setting opener — is the start.',
    activities: [
      'First-sentence elimination: four strips, students cross out three in thirty seconds and say what killed each.',
      'Write the missing opener for a three-sentence paragraph.'
    ]
  },
  'coh-reference': {
    name: 'Backward reference — this, these, such',
    principle: 'This/These/Such + noun points back at the sentence immediately before and summarises it. The noun after it tells you exactly what it is pointing at.',
    reteach: 'Treat "This complexity", "These failures", "Such delays" as an instruction from the writer: the previous sentence must have described complexity, failures or delays. Students who read the noun rather than skipping past the demonstrative can chain a whole paragraph together without understanding every word.',
    activities: [
      'Draw the arrow: every demonstrative in a text gets an arrow to what it replaces.',
      'Broken chains: paragraphs with one reference pointing at nothing; students find the hole.'
    ]
  },
  'coh-connector': {
    name: 'Connectors of cause, contrast and addition',
    principle: 'As a result, Consequently, Because of this and Therefore mark a consequence and must follow their cause. However, Nevertheless and While mark a turn against what came before.',
    reteach: 'Connectors are direction signs, and in a reordering task they constrain order absolutely: a consequence connector cannot be first, and cannot precede its own cause. Have students label each sentence with an arrow — forward, backward, against — before attempting any order.',
    activities: [
      'Arrow labelling on four-sentence sets before ordering.',
      'Connector swap: replace each connector with a wrong one and read aloud to hear it break.'
    ]
  },
  'coh-closing': {
    name: 'The closing move',
    principle: 'Paragraphs usually end on a recommendation, a consequence or a broader implication: experts advise …, addressing this requires …, regulators are now demanding … .',
    reteach: 'Endings look forward, beyond the incident. A sentence containing a recommendation, a demand or a future implication is almost never in the middle. Pair this with the topic-sentence rule and a four-sentence item is usually solved from the outside in.',
    activities: [
      'Outside-in method: fix first and last, then order the two in the middle.',
      'Ending audit: five paragraphs, name the closing move in each.'
    ]
  },
  'coh-order': {
    name: 'Ordering a whole paragraph',
    principle: 'General before specific; cause before consequence; background before event; problem before solution.',
    reteach: 'Teach the four-move shape — set the scene, present the problem, give the consequence, offer the response — and most exam paragraphs fall straight into it. Then check the order against the reference words, which will confirm or break it.',
    activities: [
      'Shuffled paragraphs from the class reading, reassembled in pairs against the clock.',
      'Write your own four-sentence paragraph, shuffle it, and swap with a partner.'
    ]
  },

  /* ---------------------------------------- SYSTEM 07 · vocabulary */
  'vocab-u3': {
    name: 'Unit 3 vocabulary — media, influence, manipulation',
    principle: 'These ten are about influence: how far something spreads, who it acts on, and who exposes it. The near-synonyms are the trap. Ubiquitous counts many separate things scattered across a place; pervasive means one single thing soaked through in every part. A susceptibility is an openness to a named harm and always takes to. Prey on sets a stronger party against a weaker one. Polarize takes its object directly, with no preposition.',
    reteach: 'Teach these as a cluster about influence, because that is how the exam texts use them. Keep the near-synonyms apart explicitly: ubiquitous is about being everywhere in space, pervasive about spreading through something. Susceptibility is openness to harm; it takes "to". Prey on takes a direct object and always implies a weaker victim.',
    activities: [
      'Cluster map on the board: everywhere / influence / harm / politics / disclosure.',
      'Substitution test: swap two near-synonyms in a sentence and decide which is odd.'
    ]
  },
  'vocab-u4': {
    name: 'Unit 4 vocabulary — machines and minds',
    principle: 'These ten are about machines and intent. Three name technologies and take no article and no plural: machine learning, cloud computing, data encryption. Three are about mind: sentient is the adjective, consciousness the thing itself, a singularity the threshold. Four grade intention: benevolent means well-meaning, malicious means meaning harm, nefarious means criminally so, and rogue means out of control, which needs no intention at all.',
    reteach: 'Two halves. The technical compounds name specific things and are not interchangeable: machine learning is training on data, cloud computing is remote processing, data encryption is protecting information. The intention adjectives sit on a scale from benevolent through malicious to nefarious, with rogue meaning "outside control" rather than "evil" — a system can go rogue with no bad intent at all.',
    activities: [
      'Intention line: place the four adjectives on a line from helpful to criminal, then defend rogue\'s position off the line.',
      'Define-the-compound: students write a one-line definition of each technical term without using its own words.'
    ]
  },
  'vocab-collocation': {
    name: 'The grammar each word demands',
    principle: 'Words carry patterns: susceptibility TO, prey ON, an echo chamber OF, polarize a debate, a benevolent intention, cognitive bias.',
    reteach: 'A vocabulary item is only learned when its pattern is learned with it. Record every new word with its preposition and one typical object. In gap-fill items, the preposition after the gap is very often the strongest clue to which word belongs there.',
    activities: [
      'Preposition-first gap-fill: the preposition is given, the word is not.',
      'Collocation grid: word down the side, typical objects across the top, ticks in the cells.'
    ]
  },
  'vocab-family': {
    name: 'Word families and word class',
    principle: 'Read the slot before you read the word. Between an article and a noun the slot wants an adjective; after a preposition it wants a noun; after to, or after a subject, it wants a verb. Then take the family member with the right ending: -ity and -ness and -ence name the quality, -ion names the event, -ive and -ent name a quality, and -ise or -ate make a verb.',
    reteach: 'The gap\'s grammar tells you the class before you have thought about the meaning. After an article and before a noun, you need an adjective; after a preposition, a noun. Teaching students to read the slot first turns a vocabulary question into a two-option question.',
    activities: [
      'Slot-first drill: cover the options, name the word class the gap needs, then uncover.',
      'Family table for all twenty words, completed over a week.'
    ]
  },

  /* ---------------------------------------- SYSTEM 08 · reading */
  'read-main': {
    name: 'Main idea',
    principle: 'The main idea covers the whole passage. An option that is true of only one paragraph, or that adds something the text never claims, is wrong however accurate it sounds.',
    reteach: 'Distractors here are usually too narrow, too broad, or true-but-not-the-point. Have students label each option N, B or T before choosing. The correct option can nearly always be matched to the first and last sentences of the passage together.',
    activities: [
      'Label the distractor: N / B / T on every main-idea item for a fortnight.',
      'One-sentence summaries written before the options are revealed.'
    ]
  },
  'read-detail': {
    name: 'Finding a specific detail',
    principle: 'Detail questions are answered by one identifiable place in the text. Find it, point at it, and reject anything the text does not actually say.',
    reteach: 'Teach the rule that the answer must be defensible by pointing. Students who answer from memory of the gist pick options that are plausible in the world but absent from the passage — which is exactly what the distractors are built from.',
    activities: [
      'Point-at-the-line: no answer accepted without a line number.',
      'True in the world, absent from the text: a set of distractors that are all factually reasonable.'
    ]
  },
  'read-context': {
    name: 'Vocabulary in context',
    principle: 'The passage defines its own hard words. Read the clause before and after the term; the definition is almost always sitting there.',
    reteach: 'Cover the word entirely and read the sentence around it. If the surrounding text says a weakness was previously unknown and could not be patched, the definition follows without any outside knowledge. Students who rely on what they half-remember of the term choose the technically famous but contextually wrong option.',
    activities: [
      'Cover-the-word: students define ten terms from surrounding context only.',
      'Invented terms: a passage with nonsense words that context still defines.'
    ]
  },
  'read-cause': {
    name: 'Cause and effect in an argument',
    principle: 'A cause-and-effect question asks which thing produced which. Reversed pairs and unrelated true statements are the standard wrong answers.',
    reteach: 'Have students write the arrow in the margin from the text itself before reading the options, then match. Where the question names a party — "according to critics" — the arrow must be the one that party draws, not the one the writer or the supporters draw.',
    activities: [
      'Whose arrow is it: mark each claim in a two-sided passage with its owner.',
      'Reversal spotting in a set of five options.'
    ]
  },
  'read-purpose': {
    name: 'The author\'s purpose in a paragraph',
    principle: 'Purpose questions ask what the paragraph is DOING, not what it says: presenting objections, giving background, illustrating, recommending.',
    reteach: 'Answer with a verb. If the paragraph is full of "however", "critics argue" and "raise concerns", it is presenting the case against. Students who answer with content rather than function pick a summary of the paragraph instead of its job.',
    activities: [
      'Verb-only answers: one verb per paragraph across a whole article.',
      'Function labels applied to a text with its content masked.'
    ]
  },
  'read-infer': {
    name: 'Inference — what follows but is not stated',
    principle: 'An inference must be forced by the text. If the passage is equally consistent with the option being false, the option is wrong.',
    reteach: 'The test question is: could the passage be true and this option false? If yes, reject. This keeps students away from the strongest and most interesting option, which is usually the trap — it goes one step further than the evidence allows.',
    activities: [
      'Could-both-be-true test written beside each option.',
      'Rank four options by how far beyond the text they go.'
    ]
  },
  'read-followup': {
    name: 'Implied follow-up and recommendation',
    principle: 'The last two or three sentences of an exam passage almost always carry the recommendation. The answer is a restatement of them, not an escalation.',
    reteach: 'Distractors here are typically more extreme than the text — a total ban where the text suggested education, a larger fine where the text suggested monitoring. Teach students to look for the option that is the same size as the passage\'s own claim.',
    activities: [
      'Size-matching: rank four recommendations from mildest to most extreme and compare with the text.',
      'Underline the recommendation sentence before reading the options.'
    ]
  }
};

/* Topic files push onto this. Order of the <script> tags sets the order. */
var TOPICS = [];

/* Mock papers push onto this. mock-1.js, mock-2.js, mock-3.js. */
var MOCKS = [];
