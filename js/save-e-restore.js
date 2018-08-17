var canvas = document.querySelector("#meu_canvas");
var context = canvas.getContext('2d');

context.fillStyle = 'green';
context.fillRect(50, 50, 25, 25);
context.save();

context.fillStyle = 'purple';
context.fillRect(100, 50, 25, 25);

context.restore();

context.fillRect(150, 50, 25, 25);