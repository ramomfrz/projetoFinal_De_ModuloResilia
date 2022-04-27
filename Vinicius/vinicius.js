function clickVinicius() {
    alert("Após trabalhar por um longo período, Vinicius conseguiu tirar alguns dias de folga e irá aproveitar esses dias de folga para visitar sua família. Com isso, Vinicius arrumou suas coisas e partiu rumo a sua esperada viagem!")
    var rodoviaria = prompt("Pegar o atalho para rodiaviária?")

    if (rodoviaria.toLowerCase() == "sim") {
        alert("O atalho costuma ser muito perigo... Vinicius se deparou em meio a um tiroteio, foi atingido e morreu. FIM DE JOGO!!!")
    }
    else {
        alert("Após chegar na rodoviária, Vinicius compra um lanche para se alimentar, enquanto come, Vinicius se lembra de que fará uma longa viagem...")

        var banheiro = prompt("Deseja ir no banheiro da rodoviária?")
        if (banheiro.toLowerCase() == "sim") {
            alert("O banheiro não parecia muito seguro, e a intuição de Vinicius estava certa... Após alguns minutos um homem entra no banheiro, tranca a porta e o mata. FIM DE JOGO! VOCÊ PERDEU!")
        }
        else {
            alert("Aguarda o horário do ônibus na plataforma. Enquanto aguarda o horário de saída do ônibus, Vinicius avista uma loja de presentes...")

            var presente = prompt("Deseja comprar um presente?")
            if (presente.toLowerCase() == "sim") {
                alert("A loja da rodoviária sofre um assalto e Vinicius tem todos os seus pertences levado junto e não conseguirá viajar. FIM DE JOGO!!!")
            }
            else {
                alert("Vinicius chega muito feliz e cansado na casa de sua família e mata a saudade de todos os seus famíliares! PARABÉNS! VOCÊ VENCEU!!!")
            }
        }

    }
}

function back() {
    return location.href = "../index.html"
}

