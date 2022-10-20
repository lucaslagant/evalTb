let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


document.getElementById("array").innerHTML = "Les prénoms sont : <br>" + tab;

function deleted()
{
    let firstname = prompt("Entrez le prénom souhaitez");

    for (i=0; i<tab.length; i++){       

        let loca = tab.indexOf(firstname);
        tab.splice(loca,1);
        tab.push(' ');
        document.getElementById("result").innerHTML = "Le nouveau tableau est composé de : <br>" + tab;
    }
}
deleted();