import { precoItem } from "./bancodedados/tabelaDePreco"

const temQueijoOuChantily = (array) => {
    let resposta = true

    let ehChantily = array.find((item) => {
        return item.nomeDoItem === 'chantily'
    })

    let ehQueijo = array.find((item) => {
        return item.nomeDoItem === "queijo"
    })

    if (ehChantily) {
        let temCafe = array.find((item) => { return item.nomeDoItem === "cafe" })
        if (temCafe) {
            return resposta
        } else {
            resposta = false
        }
        
    }

    if (ehQueijo) {
        let temSanduiche = array.find((item) => { return item.nomeDoItem === "sanduiche" })
        if (temSanduiche) {
            return resposta
        } else {
            resposta = false
        }
 
    }



    return resposta


}

const verificaQuantidadeInvalida = (valor) => {
    if (Number(valor) === 0) {
        return true
    } else {
        return false
    }
}

const verificaCodigoInvalido = (codigo) => {
    if (precoItem(codigo) === -1) {
        return true;
 
    } else {
        return false
    }
}



export {temQueijoOuChantily, verificaQuantidadeInvalida,verificaCodigoInvalido}