/*****************************
* 020 - Fonctions - Préalable
*/

// 7. Utiliser les fonctions prédéfinies en JavaScript

// 1°) Quelques exemples

// La fonction Math.min() renvoie le minimum des nombres passés en paramètres

/* EXERCICE 1 : 
Utiliser la fonction Math.min pour afficher dans la console
- le minimum de 4.5 et 5
- le minimum de 19 et 9
- le minimum de 1 et 1
*/

let minimum1 = Math.min(4.5, 5);
console.log(`le minimum de 4.5 et 5 est ${minimum1}`);

let minimum2 = Math.min(19, 9);
console.log(`le minimum de 19 et 9 est ${minimum2}`);

let minimum3 = Math.min(1, 1);
console.log(`le minimum de 1 et 1 est ${minimum3}`);

// La fonction Math.random() génère un nombre aléatoire entre 0 et 1

/* EXERCICE 2 : 
Utiliser la fonction Math.random pour afficher dans la console
- un nombre aléatoire compris entre 0 (inclus) et 1 (exclu)
- un nombre aléatoire compris entre 0 (inclus) et 10 (exclu)
- un nombre aléatoire compris entre 5 (inclus) et 15 (exclu)
*/

let nbre1 = Math.random();
console.log(nbre1);

let nbre2 = Math.floor(Math.random() * 10);
console.log(nbre2);

let nbre3 = Math.floor(Math.random() * 15);
console.log(nbre3);

// Nous découvrirons plein d'autres fonctions prédéfinies dans la suite de ce cours.

// 2°) Consulter la documentation !!

/* La documentation renseigne comment utiliser les fonctions existantes :
    + les paramètres attendus
    + les valeurs de retour
*/

// La fonction Math.min()
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/min

// La fonction Math.random()
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random

// N.B. console.log() est elle aussi une fonction 
/*
Nous verrons plus tard que log est une fonction associée à l'objet console,
on dit que log est une MÉTHODE de l'objet console
*/