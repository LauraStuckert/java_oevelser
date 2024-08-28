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
