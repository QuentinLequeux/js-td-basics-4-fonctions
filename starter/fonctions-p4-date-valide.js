/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile

const Bissextile = parseInt(prompt("Entrez une année :"));

function isBissextile(annee){
    if ((Bissextile % 4 === 0 && Bissextile % 100 !== 0) || Bissextile % 400 === 0){
        return true;
    } else {
        return false;
    }
}

if (isBissextile(2023)) {
    console.log(`${Bissextile} est une année bissextile.`);
} else{
    console.log(`${Bissextile} n'est pas une année bissextile.`);
}

// Fonction pour vérifier si une date est valide

function isValid(number){
    if (date >= 1 && date <= 31){
        return true;
    } else {
        return false;
    }
}

// Demander à l'utilisateur de saisir une date

const date = parseInt(prompt("Entrez une date :"));

// Utilisation de la fonction isValid pour vérifier la date

if (isValid(10)) {
    console.log(`${date} est une date valide.`);
} else{
    console.log(`${date} n'est pas une date valide.`);
}