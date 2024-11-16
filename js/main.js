let dictionnaire = ["BONJOUR","VIE","NATURE","MAISON"]
let alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]


function motRandom(dictionnaire = [""]){
    let idx = Math.floor(Math.random() * dictionnaire.length);
    let dico = dictionnaire[idx];
    console.log(dico);
}

console.log(dictionnaire.length)