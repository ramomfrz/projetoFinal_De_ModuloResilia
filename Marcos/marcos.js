function clickMarcos() {
    alert("Marcos é um guia turístico que trabalha na rodoviária local. Todos os dias de manhã ele vai até a rodoviária para receber os visitantes que chegam em sua pequena cidade. Normalmente, é um trabalho bem calmo, mas nessa manhã ele observou uma briga entre dois amigos que chegaram no último ônibus do dia...")

    var briga = prompt("Deseja interferir na briga que está acontecendo?")

    if (briga.toLowerCase() == "sim") {
        alert("Acaba sendo agredido enquanto tenta separar a briga e quando foi revidar a polícia chega ao local e acaba o levando preso...  FIM DE JOGO!")
    }
    else {
        alert("Achou melhor não se meter e decidiu ficar observando a confusão de longe. Porém observou que um dos caras que haviam brigado foi em direção ao banheiro, provavelmente para limpar seus machucados...")

        var seguir = prompt("Deseja seguir um dos participantes da briga?")

        if (seguir.toLowerCase() == "sim") {
            alert("Marcos segue um dos caras e nota que a porta do banheiro possui uma tranca...")
        }
        else {
            alert("Foi levado como testemunha pra delegacia.  FIM DE JOGO!")
        }

        var porta = prompt("Seria uma boa ideia trancar a porta?")
        if (porta.toLowerCase() == "sim") {
            alert("Após trancar a porta, Marcos mata seu alvo e pega uma muda de roupa da mochila de sua vítima. Troca de roupa e joga sua roupa suja no lixo. Em seguida, ele foge pela janela e na manhã seguinte retorna ao seu trabalho para escolher uma nova vítima...  PARABÉNS! VOCÊ VENCEU!!!")
        }
        else {
            alert("A policia entra e flagra a tentativa de assassinato. Você foi preso. FIM DE JOGO!! ")
        }
    }
}

function back() {
    return location.href = "../index.html"
}




















