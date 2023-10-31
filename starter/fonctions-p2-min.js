/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/

// Syntaxe classique

function calcMin(nbre1, nbre2) {
    if (nbre1 < nbre2) {
        return nbre1;
    } else (nbre1 > nbre2)
    {
        return nbre2;
    }
}

// Utilisation de la fonction calcMin pour calculer le minimum

console.log(calcMin(4.5, 5));
console.log(calcMin(19, 9));
console.log(calcMin(1, 1));

// Version avec une arrow function

const calcMinArrow= (nbre1, nbre2) => {
    if (nbre1 < nbre2) {
        return nbre1;
    } else (nbre1 > nbre2)
    {
        return nbre2;
    }
    return `le minimum entre ${nbre1} et ${nbre2} est ` + calcMinArrow()
}

// Utilisation de la fonction calcMinArrow pour calculer le minimum

console.log(calcMinArrow(4.5, 5));
console.log(calcMinArrow(19, 9));
console.log(calcMinArrow(1, 1));

// Version encore plus concise avec une arrow function

const calcMinConcise = (a, b) => (a < b) ? a : b;

// Utilisation de la fonction calcMinConcise pour calculer le minimum

console.log(calcMinConcise(19, 9));
