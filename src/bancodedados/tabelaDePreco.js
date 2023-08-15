const precoItem = (item) => {

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
            return -1
    }



}



export { precoItem };