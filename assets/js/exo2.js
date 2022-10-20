number = parseInt(prompt('Saisissez la table que vous souhaitez'));

function multiplication(number) {
    let i;
    for (i = 0; i <= 10; i++) {
        result = number * i;
        document.write(number+"x"+i+"="+number*i+"<br>");
    }
}
multiplication(number);