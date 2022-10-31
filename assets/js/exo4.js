let pu = Number(prompt("Saisissez le prix unitaire"));
let qtecom = Number(parseInt(prompt("Saisissez la quantité commandé")));
let tot = pu * qtecom;
let pourcentage;
let sndprct;
let rem;
let pap;
let port;
let portrem;
let result;
// - de 100
if (tot < 100) {
    pourcentage = 2;
    port = tot * pourcentage /100;
    if(port < 6)
    {
        port = 6;        
    }
    pap = tot + port;
    document.write("Le prix à payer est de :" + pap + "€");   
}
// de 100 à 200
if (tot >= 100 && tot <= 200) {
    tot = tot * (95/100); 
    port = tot * (2/100);
    if(port < 6)
    {
        port = 6;
    }
    pap = tot += port;
    document.write("Le prix à payer est de :" + pap +"€");
    
}
// prix à payer inférieur à 500
if (tot > 500) {
    tot = tot * (90 / 100)
    if (tot < 500) {
        port = tot * (2/100);;
        pap = tot += port;
        document.write("Le prix à payer est de :" + pap + "€");       
    }
    else{
        document.write("Le prix à payer est de :" +tot + "€");
    }
}