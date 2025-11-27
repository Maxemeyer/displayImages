const colors = ["red", "blue", "green", "yellow", "pink", "purple"];
let colorIndexNoLoop = 0;
let colorIndexLoop = 0;

function changeBigPicture(color) {
    let bigPicture = document.getElementById("bigPicture");
    bigPicture.style.background = color;
}

function changeIndex_noLoop(byValue) {
    colorIndexNoLoop = colorIndexNoLoop + byValue;
    document.getElementById("noLoop").style.backgroundColor = colors[colorIndexNoLoop];

    if (colorIndexNoLoop === 0) {
        document.getElementById("subtractNoLoop").disabled = true;
    } else if (colorIndexNoLoop === colors.length - 1) {
        document.getElementById("addNoLoop").disabled = true;
    } else {
        document.getElementById("subtractNoLoop").disabled = false;
        document.getElementById("addNoLoop").disabled = false;
    }
}

function changeIndex_loop(byValue) {
    colorIndexLoop = colorIndexLoop + byValue;

    if (colorIndexLoop > colors.length - 1) {
        colorIndexLoop = 0;
    } else if (colorIndexLoop < 0) {
        colorIndexLoop = colors.length - 1;
    }

    document.getElementById("loop").style.backgroundColor = colors[colorIndexLoop];
}
