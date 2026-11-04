const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const resultat = document.getElementById("resultat");
const pairImpairElement = document.getElementById("p1");
function somme() {
    const a = t1.value;
    const b = t2.value;
    resultat.value = Number(a) + Number(b);
}

function soustraction() {
    const a = t1.value;
    const b = t2.value;
    resultat.value = Number(a) - Number(b);
}

function multiplication() {
    const a = t1.value;
    const b = t2.value;
    resultat.value = Number(a) * Number(b);
}

function division() {
    const a = t1.value;
    const b = t2.value;
    resultat.value = Number(a) / Number(b);
}

function division() {
    const a = t1.value;
    const b = t2.value;
    resultat.value = Number(a) / Number(b);
}

function permuter() {
    const t1Valeur = t1.value;
    const t2Valeur = t2.value;
    t1.value = t2Valeur;
    t2.value = t1Valeur;
}

function parite() {
    if ( (Number(t1.value) % 2) == 0) {
        pairImpairElement.value = "Pair";
        return;
    }
    pairImpairElement.value = "Impair";
}

function effacer() {
    t1.value = "";
    t2.value = "";
    resultat.value = "";
    pairImpairElement.value = "";
}