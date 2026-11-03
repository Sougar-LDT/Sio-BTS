const messageElement = document.getElementById("message");

function direBonjour() {
    messageElement.textContent = "Bonjour ! Bienvenue sur ma page.";
}

function afficherDate() {
    const maintenant = new Date();
    const texte = "Nous sommes le " + maintenant.toLocaleDateString("fr-FR") + " et il est " + maintenant.toLocaleTimeString("fr-FR") + ".";
    messageElement.textContent = texte;
}

function changerCouleur() {
    const couleurs = ["#ffeaa7", "#fab1a0", "#81ecec", "#a29bfe", "#b2f2bb"];
    const indice = Math.floor(Math.random() * couleurs.length);
    document.body.style.backgroundColor = couleurs[indice];
    messageElement.textContent = "Nouvelle couleur de fond : " + couleurs[indice];
}

function nombreAleatoire() {
    const nombre = Math.floor(Math.random() * 100) + 1;
    messageElement.textContent = "Votre nombre aléatoire est : " + nombre;
}

function effacer() {
    messageElement.textContent = "";
}

function verif_age() {
    const n1 = prompt("Donnez votre âge : ")
    if (n1 < 18) {
        document.write("Vous êtes mineur")
        document.body.style.backgroundColor = "red"
    }
    else {
        document.write("Vous êtes majeur")
        document.body.style.backgroundColor = "green"
    }
}

function notes() {
    const n1 = Number(prompt("Note 1 : "))
    const n2 = Number(prompt("Note 2 : "))
    const n3 = Number(prompt("Note 3 : "))
    const somme = n1 + n2 + n3
    const moyenne = somme/3
    messageElement.textContent = `Somme : ${somme} | Moyenne : ${moyenne}`;
}
