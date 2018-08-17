var canvas = document.querySelector("#meu_canvas");
var context = canvas.getContext('2d');

context.beginPath();

context.moveTo(75, 250);
context.lineTo(150, 50);
context.lineTo(225, 250);
context.lineTo(50, 120);
context.lineTo(250, 120);
context.lineTo(75, 250);

context.lineWidth = 2;
context.strokeStyle = 'red';
context.stroke();

//preenchido em vermelho
// context.fillStyle = 'red';
// context.fillRect(50, 50, 100, 100);
//contorno azul, com largura de 3px
// context.lineWidth = 3;
// context.strokeStyle = 'blue';
// context.strokeRect(50,50,100,100);