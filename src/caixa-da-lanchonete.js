import { verificaQueijoChantily,verificaQuantidadeInvalida,verificaSeCarrinhoVazinho,calculaPagamento,verificaPreco } from "./validacoes.js";

class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {

        let tipoPagamento = String(metodoDePagamento); 
        let arrayItens = []
        let somaTotal = 0

    
        for (const item of itens) {
            let array = item.split(",")
            let nomeDoItem = array[0]
            let quantidade = array[1]

            try {
                verificaQuantidadeInvalida(quantidade)
            } catch (error) {
                return error.message
            }
            arrayItens.push({ nomeDoItem, quantidade })
        }

        try {
            verificaSeCarrinhoVazinho(arrayItens)
        } catch (error) {
            return error.message
        }
        

        try {
            verificaQueijoChantily(arrayItens)
        } catch (error) {
            return error.message
        }

        for (const itemCarrinho of arrayItens) {

            try {
                somaTotal += verificaPreco(itemCarrinho.nomeDoItem) * Number(itemCarrinho.quantidade)
            } catch (error) {
                return error.message
            }
    
        
        }

        try {
            somaTotal = calculaPagamento(tipoPagamento,somaTotal)
        } catch (error) {
            return error.message
        }

    
        const totalFormatado = somaTotal.toFixed(2).replace('.',',')
    
        return `R$ ${totalFormatado}`;
    }


}



export { CaixaDaLanchonete };
