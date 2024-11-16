let dictionnaire = ["BONJOUR","VIE","NATURE","MAISON"]
let alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]


function motRandom(){
    let idx = Math.floor(Math.random() * dictionnaire.length);
    let dico = dictionnaire[idx];
    console.log(dico);
}

console.log(motRandom());


