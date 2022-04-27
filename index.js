var bemvindo = prompt("Seja bem vindo à rodoviária da BR 106. As respostas são computadas com 'SIM' ou 'NÃO'. Para começar digite 'JOGAR'")
while (true) {
    if (bemvindo.toLowerCase() == "jogar") {
        break;

    }
    else {
        alert("Comando inválido! Digite 'JOGAR' para começar.")
        bemvindo = prompt("Seja bem vindo à rodoviária da BR 106. As respostas são computadas com 'SIM' ou 'NÃO'. Para começar digite 'jogar'")
    }
}

function clickMarcos() {
    var vinicius = prompt("Vinicius tem 32 anos e seu hobby favorito é viajar. Costuma ir para longe de sua pequena cidade do interior para visitar sua família na capital sempre que pode.  Deseja jogar com o Vinicius?  Digite 'SIM' para selecionar, ou 'NÃO' para voltar a seleção de personagens.")
    if (vinicius.toLowerCase() == "sim") {
        return location.href = "./Vinicius/vinicius.html"
    }
}

function clickVinicius() {
    var marcos = prompt("Marcos tem 45 anos, e possui um temperamento forte. Por morar proximo a uma rodoviária. Sempre em seu tempo livre costuma receber os novos visitantes que chegam a sua pequena cidade.  Deseja jogar com o Marcos?  Digite 'SIM' para selecionar, ou 'NÃO' para voltar a seleção de personagens.")

    if (marcos.toLowerCase() == "sim") {
        return location.href = "./Marcos/marcos.html"
    }
}


function clickBrenda() {
    var brenda = prompt("Brenda tem 36 anos, e ama caminhar. Durante suas caminhadas sempre que passa em frente a antiga rodoviária da cidade, entra para comer o seu sanduíche favorito.  Deseja jogar com a Brenda?  Digite 'SIM' para selecionar, ou 'NÃO' para voltar a seleção de personagens.")

    if (brenda.toLowerCase() == "sim")
        return location.href = "./Brenda/brenda.html"
}


