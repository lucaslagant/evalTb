let jeune =0; 
let adulte =0; 
let vieux =0; 

do {
    age = Number(parseInt(prompt("Quelle est votre âge ?")));
    if (age < 20) {
        jeune++;
    }
    else if (age >= 20 && age <= 40 ) {
        adulte++;
    }
    else if (age > 40 && age < 100) {
        vieux++;
    }
    
} while (age < 100){
    document.write ("jeunes" + jeune + "<br>adulte" + adulte + "<br> vieux" + vieux);
}

