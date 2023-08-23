const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function() {
        
        let totalDeItens = 0;
        for (let itens of carrinho.produtos) {
            totalDeItens += itens.qtd;
        }

        return totalDeItens;

    },
    calcularTotalAPagar: function() {

        let totalAPagar = 0;
        for (let itens of carrinho.produtos) {
            let parcialValorAPagar = itens.qtd * itens.precoUnit;
            totalAPagar += parcialValorAPagar;
        }

        return (totalAPagar/100)
    },
    imprimirResumo: function () {
        
        console.log(`Cliente: ${this.nomeDoCliente}
Total de itens: ${this.calcularTotalDeItens()} itens
Total a pagar: R$ ${(this.calcularTotalAPagar()).toFixed(2)}
Total a pagar com desconto: R$ ${(this.calcularDesconto()).toFixed(2)}`);
    },
    addProduto: function (produto) {
            let produtoEncontrado = false;
            let index;
            for (let i = 0; i < carrinho.produtos.length; i++) {
                if (carrinho.produtos[i].id === produto.id) {
                    produtoEncontrado = true;
                    index = i;
                } 
            }
            if ( produtoEncontrado) {
                this.produtos[index].qtd += produto.qtd;
            } else {
                this.produtos.push(produto);
            }
        },
        imprimirDetalhes: function () {
            let totalDeItens = 0;
            totalAPagar = 0;
            console.log(`Cliente: ${this.nomeDoCliente}
            `);
            
            for (let i = 0; i < carrinho.produtos.length; i++) {

                totalDeItens += carrinho.produtos[i].qtd;
                let parcialValorAPagar = carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit;
                totalAPagar += parcialValorAPagar;
                console.log(`Item ${i + 1} - ${carrinho.produtos[i].nome} - ${carrinho.produtos[i].qtd} und - R$ ${(parcialValorAPagar/100).toFixed(2)}`)

            }
            console.log(`
Total de itens: ${totalDeItens} itens
Total a pagar: R$ ${(totalAPagar / 100).toFixed(2)}
Total a pagar com desconto: R$ ${(this.calcularDesconto()).toFixed(2)}
            `)
        },
        calcularDesconto: function() {

            let descontoNoTotalDeItens;
            let descontoEmPorcentagem;
            totalDeItens = this.calcularTotalDeItens();
            let totalAPagar = this.calcularTotalAPagar();
            if (totalDeItens > 4) {

                let comparador = this.produtos[0].precoUnit;
                for (let itens of this.produtos) {
                    if (itens.precoUnit < comparador) {
                        comparador = itens.precoUnit;
                    }
                }

                descontoNoTotalDeItens = comparador/100;
            }
            
            if (totalAPagar> 100) {
                descontoEmPorcentagem = (totalAPagar * 0.1);
            }

            if (descontoNoTotalDeItens > descontoEmPorcentagem) {
                totalAPagar -= descontoNoTotalDeItens;
            } else {
                totalAPagar -= descontoEmPorcentagem;
            }
            return totalAPagar;
        } 
        }
    


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}



const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.addProduto(novaBermuda);
carrinho.imprimirDetalhes();
carrinho.calcularDesconto();
//carrinho.imprimirResumo()
