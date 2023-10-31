/*****************************
 * 020 - Fonctions - Préalable
 */

// 6. FONCTION ANONYME

// 1°) Déclaration de fonction sous la forme d'une expression de fonction

// a) sans paramètre ni return

/* EXERCICE :
- Déclarez sous la forme d'une expression de fonction
  la fonction direBonjour qui affiche "Bonjour !" dans la console
- Exécutez la fonction
*/

// Expression de fonction sans paramètre ni return

const direBonjour = function () {
    console.log("Bonjour !");
}

// Appel de la fonction

direBonjour();

// b) sans paramètre mais avec return

/*

const direBonjour = function () {
    const disBonjour= "Bonjour !";
    console.log(disBonjour);
    return disBonjour;
}

direBonjour();

 */

/* EXERCICE 2 :
- Déclarez sous la forme d'une expression de fonction
  la fonction disBonjour qui retourne la chaîne "Bonjour !"
- Utilisez-la pour afficher "Bonjour !" dans la console
*/

// Expression de fonction sans paramètre mais avec return

/*

const direBonjour = function () {
    const disBonjour= "Bonjour !";
    console.log(disBonjour);
    return disBonjour;
}

// Utilisation de la fonction pour afficher "Bonjour !" dans la console

direBonjour();

 */

// c) avec paramètre et return

/* EXERCICE 3 :
- Déclarez sous la forme d'une expression de fonction la fonction salue qui
   - prend le paramètre prenom
   - stocke dans une variable message "Bonjour !"
   - retourne ce message
- Utilisez-la pour saluer Thomas dans la console
*/

// Expression de fonction avec paramètre et return

/*

const salue= function (prenom){
    const message= `Bonjour ${prenom} !`;
    console.log(message);
    return message;
}

// Utilisation de la fonction pour saluer Thomas dans la console

salue("Thomas");

 */