
const verificaQueijoChantily = (array) => {
 

    let temChantily = array.find((item) => {
        return item.nomeDoItem === 'chantily'
    })

    let temQueijo = array.find((item) => {
        return item.nomeDoItem === "queijo"
    })

    if (temChantily) {
        let temCafe = array.find((item) => { return item.nomeDoItem === "cafe" })
        if (temCafe) {
            return ;
        } else {
            throw new Error("Item extra não pode ser pedido sem o principal")     
        }
        
    }

    if (temQueijo) {
        let temSanduiche = array.find((item) => { return item.nomeDoItem === "sanduiche" })
        if (temSanduiche) {
            return ;
        } else {
            throw new Error("Item extra não pode ser pedido sem o principal")        }
 
    }
    return ;
}

const verificaQuantidadeInvalida = (valor) => {
    if(Number(valor) === 0 ) {
        throw new Error("Quantidade inválida!")
    }
}


const verificaSeCarrinhoVazinho = (arrayItens) => {

    if (arrayItens.length === 0) {
        throw new Error("Não há itens no carrinho de compra!");  
    }
}

const calculaPagamento = (tipoPagamento,somaTotal) => {
  
    if (tipoPagamento === 'dinheiro') {
       return somaTotal * 0.95
    
    } else if ( tipoPagamento === "credito") {
        return somaTotal * 1.03

    } else if (tipoPagamento === "debito") {
        return  somaTotal * 1

    } else {
        throw new Error("Forma de pagamento inválida!")
    }
}

const verificaPreco = (item) => {

    switch (item) {
        case "cafe":
            return 3.0;
        case "chantily":
            return 1.5
        case "suco":
            return 6.2
        case "sanduiche":
            return 6.5
        case "queijo":
            return 2;
        case "salgado":
            return 7.25
        case "combo1":
            return 9.5
        case "combo2":
            return 7.5
        default:
             throw new Error("Item inválido!")
    }



}

export {verificaQueijoChantily, verificaQuantidadeInvalida, verificaSeCarrinhoVazinho, calculaPagamento,verificaPreco}