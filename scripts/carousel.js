let cont = 1;

// starts with the first one selected
document.querySelector('#radio1').checked = true;

setInterval(() => {
    nextImg()
}, 4000)

function nextImg() {
    cont++

    if (cont > 3) {
        cont = 1;
    }

    document.querySelector('#radio' + cont).checked = true;
}
