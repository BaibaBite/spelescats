console.log(2)

let zina = document.querySelector("#manaZina");
let zinas = document.querySelector(".cataZinas");

//rakstot consoles logā funkcijas nosaukumu sutitZinu() arī var izsaukt funciju un pārliecināties, vai tā darbojas
function sutitZinu(){
    console.log("sutitZinu() darbojas");

    zinas.innerHTML = zinas.innerHTML + "<br />" + zina.value;

}
//async nozīmē, ka f-cijas vēderā var notikt nesinhronas lietas
async function ieladetChataZinas()
{

    let datiNoServera = await fetch('catazinas.txt');
    let dati = await datiNoServera.text();
    console.log(dati);
    zinas.innerHTML = dati;
}