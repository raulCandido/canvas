var canvas = document.querySelector("#meu_canvas");
var context = canvas.getContext('2d');

var bola = {
    x: 30,
    y: 100,
    raio: 5
}

requestAnimationFrame(mexerBola);

function mexerBola() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2);
    context.fill();

    bola.x += 10;
    bola.y += 45;

    requestAnimationFrame(mexerBola);
}