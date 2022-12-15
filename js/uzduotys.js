//task 1
let vardas = "Lukas",
    pavarde = "Bočkus",
    kursas = 1,
    istaiga = "Code academy";
let pazymiai = [8, 7, 9, 6];

//task 2

console.log(vardas + " " + pavarde + " mokosi" + istaiga + kursas + " kurse, jo pazymiai: " + pazymiai);

// task 3

console.log("Parametro vardas tipas: " + typeof(vardas));
console.log("Parametro pavarde tipas: " + typeof(pavarde));
console.log("Parametro kursas tipas: " + typeof(kursas));
console.log("Parametro istaiga tipas: " + typeof(istaiga));
console.log("Parametro pazymiai tipas: " + typeof(pazymiai));

// task 4

let studentas = {
    vardas: "Lukas",
    pavarde: "Bočkus",
    kursas: 1,
    istaiga: "Code academy",
    pazymiai: [8, 7, 9, 6, 10, 4]
};

// task 5

let studentuMasyvas = [
    {
        vardas: "Lukas",
        pavarde: "Bočkus",
        kursas: 1,
        istaiga: "Code academy",
        pazymiai: [8, 7, 9, 6, 10, 4]
    },
    {
        vardas: "Lukas",
        pavarde: "Bočkus",
        kursas: 1,
        istaiga: "Code academy",
        pazymiai: [8, 7, 9, 6, 10, 4]
    },
    {
        vardas: "Lukas",
        pavarde: "Bočkus",
        kursas: 1,
        istaiga: "Code academy",
        pazymiai: [8, 7, 9, 6, 10, 4]
    },
    {
        vardas: "Lukas",
        pavarde: "Bočkus",
        kursas: 1,
        istaiga: "Code academy",
        pazymiai: [8, 7, 9, 6, 10, 4]
    },
    {
        vardas: "Lukas",
        pavarde: "Bočkus",
        kursas: 1,
        istaiga: "Code academy",
        pazymiai: [8, 7, 9, 6, 10, 4]
    },
    {
        vardas: "Lukas",
        pavarde: "Bočkus",
        kursas: 1,
        istaiga: "Code academy",
        pazymiai: [8, 7, 9, 6, 10, 4]
    },

];

//task 6

console.log(studentuMasyvas[4]);

//task 7

console.log(studentuMasyvas[4].vardas + " " + studentuMasyvas[4].pavarde + " mokosi" + studentuMasyvas[4].istaiga + ' ' + studentuMasyvas[4].kursas + " kurse, jo pazymiai: " + studentuMasyvas[4].pazymiai);

//task 8

console.log('Studento pazymiai:')
for(let i = 0; i < studentas.pazymiai.length; i++) {
    console.log(studentas.pazymiai[i]);
}

//task 9
let suma = 0;

for(let i = 0; i < studentas.pazymiai.length;i++)
{
    if(studentas.pazymiai[i] <= 8 && studentas.pazymiai[i] < 10) {
        studentas.pazymiai[i]++;

//task 10

        suma += studentas.pazymiai[i];
    }
}
console.log('Pasirinktu pazymiu suma: ' + suma);

//task 11

function randomNumber() {
    return Math.floor(Math.random() * studentas.pazymiai.length);
}

console.log('Dvieju atsitiktiniu pazymiu sandauga: ' + studentas.pazymiai[randomNumber()] * studentas.pazymiai[randomNumber()]);

//task 12

let tikrinimas = (typeof kursas === 'number');
if(tikrinimas) {
    console.log('Kursas yra number');
}
else {
    console.log('Kursas nera number');
}

//task 13
function kursoTikrinimas(studentas) {
    if(studentas.kursas === 4 && typeof studentas.kursas === 'number') {
        return ('Studentas ' + studentas.vardas + ' ' + studentas.pavarde + ' yra abiturientas.');
    }
    else {
        return('Studentui ' + studentas.vardas + ' ' + studentas.pavarde + ' dar toli iki mokslu baigimo.');
    }
}
console.log(kursoTikrinimas(studentuMasyvas[0]));

//task 14


