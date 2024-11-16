let dictionnaire = ["BONJOUR","VIE","NATURE","MAISON"]
let alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]


function motRandom(){
    let idx = Math.floor(Math.random() * dictionnaire.length);
    let dico = dictionnaire[idx];
    apparition.innerHTML = dico
    console.log(dico);
}

const apparition = document.querySelector("p")
const btnStart = document.querySelector(".btnStart")

btnStart.addEventListener("click", ()=>{
    motRandom();
})
