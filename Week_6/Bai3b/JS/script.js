let timer = null;

function play() {
    if (timer !== null) return;
    changeImage();
}

function changeImage() {
    let i = Math.floor(Math.random() * 10) + 1;
    document.getElementById("hinh").src = `../IMG/b${i}.jpg`;

    timer = setTimeout(changeImage, 1000);
}

function stop() {
    clearTimeout(timer);
    timer = null; 
}