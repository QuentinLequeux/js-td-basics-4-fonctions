/*
FONCTIONS - PRÉPA 1 : Le carré d'un nombre
1. a) Déclarez la fonction carre1() avec la syntaxe normale
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
2. a) Déclarez la fonction carre2() avec la syntaxe d'une arrow fonction (ES6)
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
*/

// Déclarer carre1 pour qu'elle retourne le carré de x

let power;
function carre(nombre){
    power= Math.pow(nombre, 2);
    //let pow= Math.pow(nombre, 2);
    console.log(`Le carré de ${nombre} est ${power}`)
}

carre(0);
carre(2);
carre(5);

let carre1= Math.pow(0, 2);
let carre2= Math.pow(2, 2);
let carre3= Math.pow(5, 2);

// Calculer le carré de 0, 2 et 5 en utilisant carre1

console.log(`Le carré de 0 est ${carre1}`);
console.log(`Le carré de 2 est ${carre2}`);
console.log(`Le carré de 5 est ${carre3}`);

// Déclarer carre2 (en utilisant une fonction fléchée) pour qu'elle retourne le carré de x

const carre4 = (nombre) => {
    return `Le carré de ${nombre} est ` + Math.pow(nombre, 2);
}

// Calculer le carré de 0, 2 et 5 en utilisant carre2

console.log(carre4(0));
console.log(carre4(2));
console.log(carre4(5));