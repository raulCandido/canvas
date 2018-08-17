var canvas = document.querySelector("#meu_canvas");
var context = canvas.getContext('2d');

//cores e espessura da linha;
context.fillStyle = 'gray';
context.strokeStyle = 'black';
context.lineWidth = 2;

//primeiro arco
//novo path
context.beginPath();

//desenho
context.arc(50, 50, 40, 90 * Math.PI / 180, 270 * Math.PI / 180, false);

//preenchimento
context.fill();

//contorno
context.stroke();

//segundo arco
//segundo path
context.beginPath();

context.arc(150, 50, 40, 90 * Math.PI / 180, 270 * Math.PI / 180, true);
context.fill();
context.stroke();

//terceiro arco
//terceiro path

context.beginPath();
context.arc(250,50,40,0,2*Math.PI);
context.fill();
context.stroke();