var bemvindo = prompt("Seja bem vindo ao jogo de escolhas. As respostas são computadas com 'SIM' ou 'NÃO'. Para começar digite 'JOGAR'")
while (true) {
    if (bemvindo.toLowerCase() == "jogar") {
        break;

    }
    else {
        alert("Comando inválido! Digite 'JOGAR' para começar.")
        bemvindo = prompt("Seja bem vindo ao jogo de escolhas. As respostas são computadas com 'SIM' ou 'NÃO'. Para começar digite 'jogar'")
    }
}

function clickVictim() {
    var vinicius = prompt("Vinicius tem 32 anos e seu hobby favorito é viajar. Costuma ir para longe de sua pequena cidade do interior para visitar sua família na capital sempre que pode. Deseja escolher esse personagem? Digite 'SIM' para selecionar, ou 'NÃO' para voltar a seleção de personagens.")
    if (vinicius.toLowerCase() == "sim") {
        alert("Após um evento que aconteceu em seu trabalho, Vinicius conseguiu alguns dias de folga e finalmente vai conseguir viajar para visitar sua família! Arrumou suas coisas e partiu rumo a sua viagem!")
        var rodoviaria = prompt("Pegar o atalho para rodiaviaria?")

        if (rodoviaria.toLowerCase() == "sim") {
            alert("Se depara em meio a um tiroteio, é atingido e morre. FIM DE JOGO!")
        }
        else {
            alert("Chega na rodoviária com sucesso!")
            var banheiro = prompt("Deseja ir no banheiro da rodoviaria?")

            if (banheiro.toLowerCase() == "sim") {
                alert("Encontra um assassino e morre. FIM DE JOGO!")
            }
            else {
                alert("Aguarda o horário do ônibus na plataforma.")
                alert("Enquanto Vinicius aguardava o horário de seu ônibus, percebeu que havia uma loja de presentes na rodoviária.")
                var presente = prompt("Deseja comprar um presente?")
                if (presente.toLowerCase() == "sim") {
                    alert("É vítima de um assalto e perde todos os seus pertences. FIM DE JOGO!")
                }
                else {
                    alert("Embarca no ônibus e vai feliz ver sua familia. VOCÊ VENCEU!!!")
                }
            }

        }
    }
}


function clickKiller() {
    var marcos = prompt("Marcos tem 45 anos, e possui um temperamento forte. Mora proximo a uma rodoviária. Sempre em seu tempo livre costuma receber os novos visitantes que chegam a sua pequena cidade. Deseja escolher esse personagem? Digite 'SIM' para selecionar, ou 'NÃO' para voltar a seleção de personagens.")
    if (marcos.toLowerCase() == "sim") {
        alert("")
        var briga = prompt("Interferir na briga que está acontecendo?")

        if (briga.toLowerCase() == "sim") {
            alert("Brigou com uma pessoa e acabou sendo preso. FIM DE JOGO!")
        }
        else {
            alert("Fica observando a confusão de longe.")
            var seguir = prompt("Seguir um dos participantes da briga?")

            if (seguir.toLowerCase() == "sim") {
                alert("Seguiu seu alvo até o banheiro.")
            }
            else {
                alert("Foi levado como testemunha para a delegacia e sua vítima fugiu. FIM DE JOGO!")
            }

            var porta = prompt("Trancou a porta?")
            if (porta.toLowerCase() == "sim") {
                alert("Consegue matar a vítima e foge pela janela. VOCÊ VENCEU!")
            }
            else {
                alert("A policia entra e vê a tentativa de assassinato. Você foi pego em flagrante e foi preso. FIM DE JOGO!")
            }
        }

    }
}











function clickCop() {
    prompt("Brenda tem 36 anos, e ama caminhar. Durante suas caminhadas sempre que passa em frente a antiga rodoviária da cidade, entra para comer o seu sanduíche favorito. Deseja escolher esse personagem? Digite 'SIM' para selecionar, ou 'NÃO' para voltar a seleção de personagens.")


}


