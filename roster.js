/* ===========================================================================
   MISSION CONTROL — roster.js
   The class list behind the "5.1 Fast Access" tab on the sign-in screen.

   A student picks their nickname instead of typing an ID, which is where most
   sign-in trouble comes from: a mistyped ID makes a second, empty account and
   the work done under it never reaches the class sheet.

   ---------------------------------------------------------------------------
   TO CHANGE THE CLASS

   Edit the list below: each row is { id: '<student number>', name: '<nickname>' }.
   Order does not matter — the tab sorts by nickname. Two students may share a
   nickname; the dropdown shows the student number beside each, so they can
   still tell themselves apart.

   Anyone not on this list can still use the "Create account" tab, which is
   unchanged. The roster is a convenience, never a gate.

   Nothing here is secret: it is a list of nicknames and student numbers, and
   it is served to the browser like any other file. Passwords are not in it —
   each student sets their own the first time they sign in.
   =========================================================================== */

var ROSTER_CLASS = 'M.5.1';

var ROSTER = [
  { id: '50823', name: 'Prai' },
  { id: '50824', name: 'Pud' },
  { id: '50828', name: 'Cinta' },
  { id: '50830', name: 'Nammon' },
  { id: '50934', name: 'Peach' },
  { id: '50952', name: 'Niran' },
  { id: '50990', name: 'Plearn' },
  { id: '51022', name: 'Proud' },
  { id: '51058', name: 'Pine' },
  { id: '51070', name: 'PunPun' },
  { id: '51076', name: 'Prawfah' },
  { id: '51092', name: 'Sand' },
  { id: '51110', name: 'Haitai' },
  { id: '51223', name: 'Huisan' },
  { id: '51249', name: 'Lily' },
  { id: '51288', name: 'Alyn' },
  { id: '53156', name: 'Grand' },
  { id: '53168', name: 'Cho' },
  { id: '53170', name: 'Nana' },
  { id: '53179', name: 'Mobile' },
  { id: '53185', name: 'Tubtim' },
  { id: '53210', name: 'Plearn' },
  { id: '53214', name: 'Ob-oon' },
  { id: '53223', name: 'Jia' },
  { id: '53224', name: 'Amie' }
];
