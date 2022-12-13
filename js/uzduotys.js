//task 1

let r = 15;
let ilgis, plotas;
ilgis = 2 * Math.PI * r;
plotas = Math.PI * Math.pow(r, 2);

console.log("Apskritimo ilgis: " + Math.round(ilgis));
console.log("Apskritimo plotas: " + Math.round(plotas));

//task 2

let a = -5,
    b = 0,
    c = -4,
    d = 4;
let x, y;
    x = c;
    y = b;

/* task 2 with if
let a = 0,
    b = 0,
    c = 0,
    d = 0;
let x, y;
if (a <= c) // salygos tikrinimas
{
    if (a <= b) // pirmas intervalas didejantis
    {
        if (c <= d) // antras intervalas didejantis
        {
            if (c <= b)
            {
                x = c;
                if (b <= d)
                {
                    y = b;
                }
                else
                {
                    y = d;
                }
                console.log("X: " + x + " Y: " + y);
            }
            else
            {
                console.log("Intervalu nera.");
            }
        }
        else // antras intervalas mazejantis
        {
            x = a;
            y = c;
            console.log("X: " + x + " Y: " + y);
        }
    }
    else // pirmas intervalas mazejantis
    {
        if (c <= d) // antras intervalas didejantis
        {
            console.log("Intervalu nera.");
        }
        else // antras intervalas mazejantis
        {
            if (a >= d)
            {
                y = a;
                if(b <= d)
                {
                    x = d;
                }
                else
                {
                    x = b;
                }
                console.log("X: " + x + " Y: " + y);
            }
            else
            {
                console.log("Intervalu nera.");
            }
        }
    }
}
else
{
    console.log("Ivesti neteisingi parametrai.");
}
*/

//task 3

let vardas = "Lukas",
    pavarde = "Bočkus",
    kursas = 1,
    istaiga = "Code academy";
let pazymiai = [8, 7, 9, 6];

//task 4
let ats;
console.log(vardas + " " + pavarde + " mokosi" + istaiga + kursas + " kurse, jo pazymiai: " + pazymiai);
console.log("Parametro vardas tipas: " + typeof(vardas));
console.log("Parametro pavarde tipas: " + typeof(pavarde));
console.log("Parametro kursas tipas: " + typeof(kursas));
console.log("Parametro istaiga tipas: " + typeof(istaiga));
console.log("Parametro pazymiai tipas: " + typeof(pazymiai));
// isvedimas i html
ats = "Parametro vardas tipas: " + typeof(vardas) + "\n" +
    "Parametro pavarde tipas: " + typeof(pavarde) + "\n" +
    "Parametro kursas tipas: " + typeof(kursas) + "\n" +
    "Parametro istaiga tipas: " + typeof(istaiga) + "\n" +
    "Parametro pazymiai tipas: " + typeof(pazymiai);


document.getElementById("ats").innerHTML = ats;

