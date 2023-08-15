import { temQueijoOuChantily,verificaQuantidadeInvalida,verificaCodigoInvalido } from "./validacoes.js";
import { precoItem  } from "./bancodedados/tabelaDePreco.js";



class CaixaDaLanchonete {
    
    
    calcularValorDaCompra(metodoDePagamento, itens) {

        let tipoPagamento = String(metodoDePagamento); 
        let quantidadeInvalida = false
        let arrayItens = []
        let somaTotal = 0
        let codigoInvalido = false
        let validaQueijoEChantily;
    
        for (const item of itens) {
            let array = item.split(",")
            let nomeDoItem = array[0]
            let quantidade = array[1]
            quantidadeInvalida =  verificaQuantidadeInvalida(quantidade)
    
            arrayItens.push({ nomeDoItem, quantidade })
        }

        // verifica se a quantidade que foi passada é 0

        if (quantidadeInvalida) {
            return "Quantidade inválida!"
        }

        // Verificando se o carrinho está vazio

        if (arrayItens.length === 0) {
            return "Não há itens no carrinho de compra!"
        }

 
        // verifica se tem queijo ou chantily e se tiver valida se tem o prato principal

        validaQueijoEChantily = temQueijoOuChantily(arrayItens)

        if (!validaQueijoEChantily) {
             return "Item extra não pode ser pedido sem o principal"
        }
    
        
        for (const itemCarrinho of arrayItens) {

            // verifica se o codigo passado é válido.
            
            codigoInvalido = verificaCodigoInvalido(itemCarrinho.nomeDoItem);


            somaTotal += precoItem(itemCarrinho.nomeDoItem) * Number(itemCarrinho.quantidade)
        
        }

        // se for invalido o programa encerra
        if (codigoInvalido) {
            return "Item inválido!"
        }

        // Aplicando Descontos e Taxas

        if (tipoPagamento === 'dinheiro') {
            somaTotal = somaTotal * 0.95
        
        } else if( tipoPagamento === "credito") {
            somaTotal = somaTotal * 1.03

        } else if(tipoPagamento === "debito") {
            somaTotal = somaTotal * 1
        } else {
            return "Forma de pagamento inválida!"
        }

    
        let totalFormatado = somaTotal.toFixed(2).replace('.',',')
    
        return `R$ ${totalFormatado}`;
    }


}



export { CaixaDaLanchonete };
