

function calcularValorDaCompra(metodoDePagamento, itens) {
    let tipoPagamento = metodoDePagamento;

    console.log(itens)

    console.log(tipoPagamento)
    let arrayItens = []


    for (const item of itens) {
        let array = item.split(",")
        let nomeDoItem = array[0]
        let quantidade = array[1]
        arrayItens.push({ nomeDoItem, quantidade })
    }

    console.log(arrayItens)


    return "";
}

calcularValorDaCompra('dinheiro', ['cafe,1', 'chantily,1'])




