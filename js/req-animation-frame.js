var canvas = document.querySelector("#meu_canvas");
var context = canvas.getContext('2d');

var bola = {
    x: 30,
    y: 100,
    raio: 5
}
//pegando momento anterior a chamada do primeiro ciclo
var anterior = new Date().getTime();

requestAnimationFrame(mexerBola);

function mexerBola() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2);
    context.fill();
    //pegando o momento exato do ciclo
    var agora = new Date().getTime();
    //descobrindo o tempo decorrido
    var decorrido = agora - anterior;
    //setando o tempo exato anterior
    anterior = agora;
    var velocidade = 10;

    bola.x += velocidade * decorrido / 1000;
    requestAnimationFrame(mexerBola);
}

requestAnimationFrame(mexerBola);