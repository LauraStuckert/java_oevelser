/* ØVELSE 1 */

/* funktion der kaldes når der klikkes på et billede 
drik = funktionsnavnet */
function tjekalk(drik) {
  if (drik.alt === "alkohol") {
    console.log("indeholder alkohol");
  } else if (drik.alt === "sodavand") {
    console.log("alkoholfri");
  }
}

/* onclick i HTML med (this) fortæller om hvilket element der klikkes på 

Egenskaben alt:  
- Billerne har en alternativ tekst => alt. 
- drik.alt => refererer til denne alt attribut, og bruges her til at identificere typen af drikkevare 

Betingelse if-else: 
- bestemmer hvilken tekst der udskrives i consolen baseret på værdien af alt-attributen 
- console.log => hvilken tekst der skal udskrives 
*/

/* ØVELSE 2 */

/* Oprette funktion og give den et navn */
function siggoddag() {
  /*Få det aktuelle timetal
   - new date => et nyt Date objekt som indeholder alle oplysninger om den aktuelle dato, tid inkl. år, måned, dag osv. 
   - getHours => en metode der henter den aktuelle time fra date-objektet som et tal ml. 0-23
       - hours er en konstant variabel, så denne værdi kan bruges i resten af funktionen  */

  const hour = new Date().getHours();

  // Logik til at bestemme hilsenen baseret på timetallet
  if (hour >= 5 && hour < 10) {
    console.log("Godmorgen");
  } else if (hour >= 10 && hour < 18) {
    console.log("Goddag");
  } else if (hour >= 18 && hour < 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}

/* if else er en struktur man bruger til at udføre forskellige koder alt efter, hvilken betingelse der er sand. 

Betingelse forklaret: 
if ( hour >=5 && hour < 10)
- værdien af hour er større eller lig med 5 OG mindre end 10 er denne betingelse sand og koden vil være gældende

- else => den kode der bliver udskrevet hvis ingen af ovenstående betingelser er sande */

/* console log => udskriver beskede til webbrowserens konsol */

// Kald funktionen for at udskrive hilsenen i konsollen
siggoddag();

/* At kalde funktionen er nødvendig for at koden skal køre. Dette gøre med tom parentes */

/* ØVELSE 3 */

/* addEventListener tilføjer at når der klikkes på knappen, så skal den tjekke tallet */

document.querySelector("button").addEventListener("click", tjekTal);
let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 11);
/* document.querySelector => få den til at vælge noget
let => tilføje en variabel og give den en værdi 0
const => en konstant.
ranNum => navnet på konstanten
Math.random ()*11 => vælger et tilfældigt nummer mellem 0 og 11
- en indbygget funktion/en metode som genere et tilfældigt tal
floor => runder ned */

function tjekTal() {
  forsoeg++;
  const brugerTal = document.querySelector("#tal").value;

  if (ranNum > brugerTal) {
    alert("Øv!" + brugerTal + "var for lavt. Prøv igen :-)");
  } else if (ranNum < brugerTal) {
    alert("Øv!" + brugerTal + "var for højt. Prøv igen :-)");
  } else {
    alert(
      brugerTal +
        "er rigtigt!" +
        "Du brugte" +
        forsoeg +
        "forsøg. Prøv igen med et nyt tal :-)"
    );
    location.reload();
  }
}

/* #tal => et id som er defineret i html (input feltet)
alert => man kan ikke style denne, det afhænger af browseren */
