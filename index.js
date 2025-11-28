const images = ["images/image1big.jpg", "images/image2big.jpg", "images/image3big.jpg", "images/image4big.jpg", "images/image5big.jpg", "images/image6big.jpg"];
let imagesIndexNoLoop = 0;
let imagesIndexLoop = 0;

// preload Images for better performance
images.forEach(img => {
    new Image().src = img;
});

function changeBigPicture(url) {
    let bigPicture = document.getElementById("bigPicture");
    bigPicture.style.backgroundImage = "url('" + url + "')";
}

function changeIndex_noLoop(byValue) {
    imagesIndexNoLoop = imagesIndexNoLoop + byValue;
    document.getElementById("noLoop").style.backgroundImage = "url('" + images[imagesIndexNoLoop] + "')";

    if (imagesIndexNoLoop === 0) {
        document.getElementById("subtractNoLoop").disabled = true;
    } else if (imagesIndexNoLoop === images.length - 1) {
        document.getElementById("addNoLoop").disabled = true;
    } else {
        document.getElementById("subtractNoLoop").disabled = false;
        document.getElementById("addNoLoop").disabled = false;
    }
}

function changeIndex_loop(byValue) {
    imagesIndexLoop = imagesIndexLoop + byValue;

    if (imagesIndexLoop > images.length - 1) {
        imagesIndexLoop = 0;
    } else if (imagesIndexLoop < 0) {
        imagesIndexLoop = images.length - 1;
    }

    document.getElementById("loop").style.backgroundImage = "url('" + images[imagesIndexLoop] + "')";
}
