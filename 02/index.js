const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {

        if (this.ligado) {
            console.log('Este carro já está ligado.');

        } else {
            this.ligado = true;
            console.log(`Carro desligado. Velocidade: ${this.velocidade}`);
        }
    },
    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade: ${this.velocidade}`);

        } else {
            console.log('Este carro já está desligado.');
        }
    },
    acelerar: function () {
        if (this.ligado) {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);

        } else {
            console.log('Não é possível acelerar um carro desligado.');
        }
    },
    desacelerar: function () {
        if (this.ligado) {
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);

        } else {
            console.log('Não é possível desacelerar um carro desligado.');
        }
    }
}

// 1. Desligar o carro
// 2. Ligar o carro
// 3. Ligar o carro
// 4. Acelerar o carro
// 5. Acelerar o carro
// 6. Desacelerar o carro
// 7. Desligar o carro
// 8. Acelerar o carro
// 9. Desacelerar o carro

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
