let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


document.getElementById("array").innerHTML = "Les prénoms sont : <br>" + tab;

let firstname = prompt("Entrez le prénom souhaitez");

let index = tab.indexOf(firstname);
if (index > -1) {
    tab.splice(index ,1);
    tab.push(' ');

}
document.getElementById("result").innerHTML = "Le nouveau tableau est composé de : <br>" + tab;
