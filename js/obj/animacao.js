function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}
Animacao.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
        sprite.animacao = this;
    },
    ligar: function () {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function () {
        this.ligado = false;
    },
    proximoFrame: function () {
        if (!this.ligado) {
            return;
        }
        //limpa a tela a cada ciclo
        this.limparTela();
        //atualiza os sprites
        for (var sprite in this.sprites) {
            this.sprites[sprite].atualizar();
        }
        //desenha os sprites
        for (var sprite in this.sprites) {
            this.sprites[sprite].desenhar();
        }
        var animacao = this;
        requestAnimationFrame(function () {
            animacao.proximoFrame();
        });
    },
    limparTela: function () {
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}