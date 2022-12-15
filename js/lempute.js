var lemputesBusena = true;
function toggle_lempute() {
    let img = document.getElementById("lempute");
    img.src = "../img/lempute_on.jpg";
    if (lemputesBusena) {
        keistiAtributus(img, 'off');
    }
    else {
        keistiAtributus(img, 'on');
    }
    lemputesBusena = !lemputesBusena;
}

function keistiAtributus(img, param) {
    img.src = '../img/lempute_' + param + '.jpg';
    let alt = 'lempute ' + param;
    img.setAttribute("alt", alt);
}