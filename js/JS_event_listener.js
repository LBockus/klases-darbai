//task 1

document.querySelector('#task1 > button').addEventListener('click', function(){
    document.querySelector('#task1 > input').value = 'Labas pasauli!';
})

//task 2

let form = document.querySelector('#task2 > form');
let button = document.querySelector('#task2 > button')
form.style.display = 'none';
button.addEventListener('click', function(){
    if (button.innerHTML === 'Rodyti forma') {
        form.style.display = 'block';
        button.innerHTML = 'Slepti forma';
    }
    else if(button.innerHTML === 'Slepti forma') {
        form.style.display = 'none';
        button.innerHTML = 'Rodyti forma';
    }
})

//task 3

document.querySelector('#task3 > button').addEventListener('click', function(){
    document.querySelector('#task3 > table').innerHTML += '<tr><th>' + document.getElementById('fname').value +
        '</th><th>' + document.getElementById('lname').value + '</th><th>' +
        document.getElementById('profession').value + '</th></tr>';
})