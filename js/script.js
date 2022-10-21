const km = prompt("Quanti KM devi fare?");
const age = prompt("Quanti anni hai?");
const kmPrice = ("Il prezzo finale è €" , km * 0.21);
const kmPriceunder18 = ("Congratulazioni! Hai ottenuto lo sconto del 20%: €", kmPrice * 0.20);
const kmPriceover60 =  ("Congratulazioni! Hai ottenuto lo sconto del 20%: €", kmPrice * 0.40);
if (age <= "18"){
    console.log("Congratulazioni! Hai ottenuto lo sconto del 20% dedicato ai giovani:");
    console.log("€",kmPriceunder18 .toFixed (2));
}
else if(age >= "60"){
    console.log("Congratulazioni! Hai ottenuto lo sconto del 60% dedicato agli anziani!");
    console.log ("€",kmPriceover60 .toFixed (2));
}
else{
    console.log("Il prezzo finale è:");
    console.log("€",kmPrice .toFixed (2));
    
}











