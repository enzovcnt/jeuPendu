let dictionnaire = ["BONJOUR","VIE","NATURE","MAISON", "CACAO", "TRAVAILLER"]
let alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

// étape = mot qui apparait au hasard en appuyant sur le bouton
function motRandom(){
    let idx = Math.floor(Math.random() * dictionnaire.length);
    let dico = dictionnaire[idx];
    function motCache(){
        return cache = dico.replace(dico[idx], "_");
    }
    motCache().repeat(3);
    apparition.innerHTML = motCache();
    console.log(motCache());
}


const apparition = document.querySelector("p")
const btnStart = document.querySelector(".btnStart")

btnStart.addEventListener("click", ()=>{
    motRandom();
})

// étape = première et dernière lettre apparaissent mais le reste caché par _ et si même lettre que début ou fin apparait aussi

