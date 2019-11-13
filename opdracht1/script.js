// A) maak 2 verschillende variabelen met twee willekeurige integers (zelf kiezen)

// jouw code hierondeer-->> 
var getal1 = 23;
var getal2 = 100;

// B) toon beide getallen op het scherm met document.getElementById('<jouw_gekozen_id>').innerHTML

// jouw code hieronder-->>
document.getElementById("getal1").innerHTML = getal1;
document.getElementById("getal2").innerHTML = getal2;

// C) Vraag de gebruiker om een INPUT waarde door prompt() te gebruiken. 
// Gebruik de prompt()-waarde om een variabelen te 'vullen'

// jouw code hieronder-->>
var ingevuldeWaarde = prompt ("Geef een getal");
document.getElementById("getal1").innerHTML = ingevuldeWaarde;   
// var ;

// D) Vergelijk de twee getallen met elkaar door gebruik te maken van conditions  if()

// jouw code hieronder-->>
if (getal1 < getal2) {
    document.getElementById("main").style.backgroundColor = "blue";

}

