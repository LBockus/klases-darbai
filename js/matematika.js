function add(x, y) {
    let suma = x + y;
    return suma;
}

function sub(x, y) {
    return (x - y);
}

function div(x, y) {
    return (x / y);
}

function mult(x, y) {
    return(x * y);
}

let arr1 = [1, 2, 3 ,4 ,5];
let arr2 = [6, 7, 8, 9, 10];

for(let i = 0; i < arr1.length; i++) {
    console.log('Skaiciaus ' + arr1[i] + ' ir skaiciaus ' + arr2[i] + ' suma:');
    console.log(add(arr1[i], arr2[i]));
    console.log('Skaiciaus ' + arr1[i] + ' ir skaiciaus ' + arr2[i] + ' atimtis:');
    console.log(sub(arr1[i], arr2[i]))
    console.log('Skaiciaus ' + arr1[i] + ' ir skaiciaus ' + arr2[i] + ' dalyba:');
    console.log(div(arr1[i], arr2[i]))
    console.log('Skaiciaus ' + arr1[i] + ' ir skaiciaus ' + arr2[i] + ' daugyba:');
    console.log(mult(arr1[i], arr2[i]))
    for(let j = 0; j < arr2.length; j++) {
        console.log('Skaiciaus ' + arr2[i] + ' ir skaiciaus ' + arr2[j] + ' suma:');
        console.log(add(arr2[i], arr2[j]));
        console.log('Skaiciaus ' + arr2[i] + ' ir skaiciaus ' + arr2[j] + ' atimtis:');
        console.log(sub(arr2[i], arr2[j]));
        console.log('Skaiciaus ' + arr2[i] + ' ir skaiciaus ' + arr2[j] + ' dalyba:');
        console.log(div(arr2[i], arr2[j]));
        console.log('Skaiciaus ' + arr2[i] + ' ir skaiciaus ' + arr2[j] + ' daugyba:');
        console.log(mult(arr2[i], arr2[j]));
    }
}