const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push(
            {
                tipo: "Depósito",
                valor: valor
            }
        )
        return `Depósito de R$ ${(valor/100).toFixed(2)} realizado para o cliente: ${this.nome}`;
    
} ,
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        } else {
            
            this.saldo -= valor
        }

        this.historicos.push(
            {
                tipo: "Saque",
                valor: valor
            }
        )
        return `Saque de R$ ${(valor/100).toFixed(2)} realizado para o cliente: ${this.nome}`       
    },
    extrato: function () {

        let tipoDeOperacao = ""
        for (let operacao of this.historicos) {
            tipoDeOperacao +=  operacao.tipo + " de R$" + (operacao.valor/100).toFixed(2) + "\n"
        }

    return `Extrato de ${this.nome} - Saldo: R$ ${(this.saldo/100).toFixed(2)}
Histórico: 
${tipoDeOperacao}`

    }
    
}


console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
