console.log(2)
const API="https://chatsstartit.baibabite.repl.co"

let zina = document.querySelector("#manaZina");
let zinas = document.querySelector(".cataZinas");
let vards = document.querySelector('#vards');

//rakstot consoles logā funkcijas nosaukumu sutitZinu() arī var izsaukt funciju un pārliecināties, vai tā darbojas
function sutitZinu(){
    console.log("sutitZinu() darbojas");

    zinas.innerHTML = zinas.innerHTML + "<br />" + zina.value;
    
    fetch(API+'/sutit/'+vards.value+'/'+zina.value);
}
//async nozīmē, ka f-cijas vēderā var notikt nesinhronas lietas
async function ieladetChataZinas()
{

    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    console.log(dati);
    zinas.innerHTML = dati;
}

//iebūvētā JS funkcija - intervals, ar kuras palīdzību panāk ka funcija darbojas noteiktu laiku/pēc noteikta laika
//setInterval(ieladetChataZinas, 1000)

async function ieladetChataZinasJson()
{

    let datiNoServera = await fetch(API + '/lasit');
    let datiJson = await datiNoServera.json();

    //console.log(await datiJson);
    //console.log(await datiJson[0]['zina']);
    zinas.innerHTML="";
    //sākas cikls
    i = 0;
    //kamēr patiess tas, kas ierakstīts (), tik izpildīta {} darbība
    while (i < await datiJson.length)
    {
        //console.log(i);
        let laiks='[<i>'+'?????       '+'</i>]';
        if ("laiks" in dati[i]){
            let laiks='[<i>'+datiJson[i]['laiks']+'</i>]';
        }
       
        zinas.innerHTML=zinas.innerHTML+laiks+zinas.innerHTML+datiJson[i]['vards']+':'+  datiJson[i]['zina']+'<br />';

        i=i+1;//šo jāatstāj beigās
    }//šeit beidzas cikls
    
    zinas.scrollTop = zinas.scrollHeight;//ritjosla nomet uz čata beigām

}//šiet beidzas f-cija- ieladetChataZinasJson()

setInterval(ieladetChataZinasJson, 1000)
