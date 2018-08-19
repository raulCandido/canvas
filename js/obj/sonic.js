var SONIC_DIRETA = 1;
var SONIC_ESQUERDA = 2;

function Sonic(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.velocidade = 2;
    this.x = 0;
    this.y = 0;

    this.sheet = new SpriteSheet(context, imagem, 3, 8);
    this.sheet.intervalo = 60;

    this.andando = false;
    this.direcao = SONIC_DIRETA;
}
Sonic.prototype = {
    atualizar: function () {
        if (this.teclado.pressionada(SETA_DIREITA)) {
            if (!this.andando || this.direcao != SONIC_DIRETA) {
                this.sheet.linha = 1; //1 ele corre para a direita
                this.sheet.coluna = 0;
            }
            this.andando = true;
            this.direcao = SONIC_DIRETA;
            this.sheet.proximoQuadro();
            this.x += this.velocidade;
        } else if (this.teclado.pressionada(SETA_ESQUERDA)) {
            if (!this.andando || this.direcao != SONIC_ESQUERDA) {
                this.sheet.linha = 2; //2 ele corre para a esquerda
                this.sheet.coluna = 0;
            }
            this.andando = true;
            this.direcao = SONIC_ESQUERDA;
            this.sheet.proximoQuadro();
            this.x -= this.velocidade;
        } else {
            if (this.direcao == SONIC_DIRETA) {
                this.sheet.coluna = 0;
            } else if (this.direcao == SONIC_ESQUERDA) {
                this.sheet.coluna = 1;
            }
            this.sheet.linha = 0;
            this.andando = false;
        }
    },
    desenhar: function () {
        this.sheet.desenhar(this.x, this.y);
    }
}