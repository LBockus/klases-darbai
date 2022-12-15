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

let studentoMasyvas = ["Lukas", "Bockus", 1, "Code academy", [8, 7, 9, 6]];

//task 6

console.log(studentoMasyvas[4]);

//task 7

console.log(studentoMasyvas[0] + " " + studentas.pavarde + " mokosi" + studentoMasyvas[3] + ' ' + studentas.kursas + " kurse, jo pazymiai: " + studentoMasyvas[4]);

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