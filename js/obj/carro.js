//funçao para criar classes
function Carro(cor, velocidadeMaxima) {
    this.cor = cor;
    this.velocidadeMaxima = velocidadeMaxima;
    this.velocidadeAtual = 0;

}
Carro.prototype = {
    acelerar: function(){
        this.velocidadeAtual = 0;
    }

}
var meuCarro = new Carro("Preto", 250);
meuCarro.acelerar();
console.log(meuCarro);

var OponenteCarro = new Carro("Vermelho", 220);
console.log(OponenteCarro);

document.write(meuCarro.cor + ": " + meuCarro.velocidadeAtual);
document.write("<br>")
document.write(OponenteCarro.cor + ": " + OponenteCarro.velocidadeAtual);

//criando o objeto direto
var carroTeste = {
    cor: "azul",
    velocidadeAtual: 0,
    acelerar: function(){
        this.velocidadeAtual +=10;
    } 
}
