function clickVinicius() {

    alert("Após um evento que aconteceu em seu trabalho, Vinicius conseguiu alguns dias de folga e finalmente vai conseguir viajar para visitar sua família! Arrumou suas coisas e partiu rumo a sua viagem!")
    var rodoviaria = prompt("Pegar o atalho para rodiaviária?")

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
            alert("Enquanto Vinicius aguardava o horário de seu ônibus, percebeu que havia uma loja de presentes na rodoviária")
            var presente = prompt("Deseja comprar um presente?")
            if (presente.toLowerCase() == "sim") {
                alert("sofre um assalto e perde tudo. FIM DE JOGO!")
            }
            else {
                alert("Embarca no ônibus e vai feliz ver sua familia. VOCÊ VENCEU!!!")
            }
        }

    }
}

function back() {
    return location.href = "http://127.0.0.1:5500/Menu/index.html"
}
