/* ===========================================================================
   MISSION CONTROL — media.js
   The introduction for each system: a podcast episode, and optionally a slide
   deck and a video. Loaded after the topic files and before content-export.js.

   The `title` on each entry is what `podcasts.html` — the standalone listening
   page, which loads this file and nothing else — shows beside the player. The
   portal itself uses the system's own name, so the two can differ without
   anything breaking.

   ---------------------------------------------------------------------------
   HOW TO ADD AN EPISODE

   Record it from the matching briefing in `podcast-sources/`, save the MP3 as
   `app/audio/stage-N.mp3`, and it appears. The paths below are already wired
   for the eight stages, so in practice there is nothing to edit here at all:
   drop the file into `audio/` and the player shows up on that system's card.

   A field left empty means no button. That is deliberate — episodes can be
   added one at a time, and a system with no audio simply shows no strip.

   `slides` takes any URL that serves a PDF directly. A Google Drive share link
   will NOT work: Drive returns a viewer page rather than the file. Upload the
   PDF beside the app instead and use a relative path, `slides/stage-3.pdf`.

   `video` takes an ordinary YouTube link in any of its usual shapes.

   Listening is tracked like anything else a student does. The teacher console
   reports plays, minutes heard, whether the episode was finished, and how often
   the slides and video were opened — with the systems nobody has opened marked
   in red. A student stuck on a system who never played its introduction is a
   different teaching problem from one who did.
   =========================================================================== */

var MEDIA = {
  t1: { title: 'Verb Forms \u2014 -ing and to',           podcast: 'audio/stage-1.mp3', slides: '', video: 'https://youtu.be/mcXeQXkFbf8' },
  t2: { title: 'Participial Clauses',                  podcast: 'audio/stage-2.mp3', slides: '', video: 'https://youtu.be/aOuO3qtlvbo' },
  t3: { title: 'Nominalization',                       podcast: 'audio/stage-3.mp3', slides: '', video: 'https://youtu.be/kZz9tNFeJpw' },
  t4: { title: 'Tenses, States and Suffixes',          podcast: 'audio/stage-4.mp3', slides: '', video: 'https://youtu.be/typpRNlvpNg' },
  t5: { title: 'Inversion, Conditionals and Reporting', podcast: 'audio/stage-5.mp3', slides: '', video: '' },
  t6: { title: 'Paragraph Organisation',               podcast: 'audio/stage-6.mp3', slides: '', video: '' },
  t7: { title: 'Unit 3 & 4 Vocabulary',                podcast: 'audio/stage-7.mp3', slides: '', video: '' },
  t8: { title: 'Reading Comprehension',                podcast: 'audio/stage-8.mp3', slides: '', video: '' }
};

/* How long each episode runs, in minutes, if you want the card to say so.
   Leave a system out and the card simply does not mention a length. */
var MEDIA_MINUTES = {};
