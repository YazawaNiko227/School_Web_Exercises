let timer = null; 
let images = [
    "../IMG/b1.jpg", "../IMG/b2.jpg", "../IMG/b3.jpg", "../IMG/b4.jpg", "../IMG/b5.jpg",
    "../IMG/b6.jpg", "../IMG/b7.jpg", "../IMG/b8.jpg", "../IMG/b9.jpg", "../IMG/b10.jpg"
];
function play() {
    if (timer !== null) return; 
    changeImage();
}

function changeImage() {
    let i = Math.floor(Math.random() * images.length);
    document.getElementById("hinh").src = images[i];
    timer = setTimeout(changeImage, 1000);
}

function stop() {
    clearTimeout(timer);
    timer = null;
}