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
let pazymiuSuma = 0;

for(let i = 0; i < studentas.pazymiai.length;i++)
{
    if(studentas.pazymiai[i] <= 8 && studentas.pazymiai[i] < 10) {
        studentas.pazymiai[i]++;

//task 10

        pazymiuSuma += studentas.pazymiai[i];
    }
}
console.log('Pasirinktu pazymiu suma: ' + pazymiuSuma);

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

//task 13 and 14
function kursoTikrinimas(studentas) {
    if(studentas.kursas === 4 && typeof studentas.kursas === 'number') {
        return ('Studentas ' + studentas.vardas + ' ' + studentas.pavarde + ' yra abiturientas.');
    }
    else {
        return('Studentui ' + studentas.vardas + ' ' + studentas.pavarde + ' dar toli iki mokslu baigimo.');
    }
}
console.log(kursoTikrinimas(studentuMasyvas[0]));

//task 15

function suma(x, y) {
    return (x + y);
}

//task 16

let skaiciuSuma = 0;
for(let i = 1; i <= 100; i++) {
    skaiciuSuma = suma(skaiciuSuma, i);
}
console.log('Skaiciu suma nuo 1 iki 100: ' + skaiciuSuma);

//task 17.1

let A = [1, 3, 6, 5, 7, 2, 2, 4, 4, 8];
function sudeti(A, evenOrOdd) {
    let sumEvenOrOdd = 0;
    if(evenOrOdd === 'even') {
        for(let i = 0; i < A.length; i++) {
            if(A[i] % 2 === 0) {
                sumEvenOrOdd += A[i];
            }
        }
    }
    else if(evenOrOdd === 'odd') {
        for(let i = 0; i < A.length; i++) {
            if(A[i] % 2 === 1) {
                sumEvenOrOdd += A[i];
            }
        }
    }
    else  {
        sumEvenOrOdd = 'Ivedete neteisingus parametrus';
    }
    return sumEvenOrOdd;
}
let x = sudeti(A, 'odd');

//task 17.2

function masyvoGeneratorius(sk) {
    let masyvas = [];
    for(let i = 0; i < sk; i++) {
        masyvas[i] = Math.floor(Math.random * 10);
    }
    return masyvas;
}

//task 17.3

function raidziuMasyvoGeneratorius(sk) {
    let masyvas = [];
    for(let i = 0; i < sk; i++) {
        masyvas[i] = String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));
    }
    return masyvas;
}
