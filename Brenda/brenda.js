function clickBrenda() {
    alert("Durante sua caminhada noturna, Brenda nota que está sentindo muita fome, pois ela não havia tirado seu horário de almoço no trabalho, logo ela se lembra que existe um restaurante muito bom dentro da rodoviária...")
    var comer = prompt("Seria uma boa ideia parar para comer?")

    if (comer.toLowerCase() == "sim") {
        alert("Enquanto come, Brenda nota que acontece uma briga no interior da rodoviária, seu instinto diz que ela deveria intervir, mas como?")
    }
    else {
        return alert("Continou a sua caminhada, porém por não ter se alimentado durante o dia inteiro, acabou desmaiando de fome na rua e foi atropelada por um carro que vinha logo atrás... FIM DE JOGO! VOCÊ PERDEU!")
    }
    var briga = prompt("Tentar parar a briga sozinha?")
    if (briga.toLowerCase() == "sim") {
        alert("Mesmo em desvantagem, Brenda saca a sua arma e seu distintivo e tenta fazer com que a briga pare. Porém foi agredida, teve sua arma roubada e foi baleada gravemente.  FIM DE JOGO! VOCÊ PERDEU!!!")
    }
    else {
        alert("Aguarda na lanchonete a chegada de reforços...  Após pedir reforço, Brenda nota que um dos suspeitos que iniciou a briga vai para longe da multidão se dirigindo ao banheiro...")

        var suspeito = prompt("Seu instinto diz que tem algo de errado com esse cara... Deseja seguir o suspeito?");
        if (suspeito.toLowerCase() == "sim") {
            alert("Brenda escuta gritos de socorro e arromba a porta para entrar, chegando lá, ela se depara com um homem tentando esfaquear outro e imediatamente prende o assassino. Brenda é parabenizada por todos seus colegas de equipe e enfim promovida. PARABÉNS! VOCÊ VENCEU!!!")
        }
        else {
            alert("Por não seguir sua intuição, uma pessoa morreu no banheiro. Brenda foi punida e perdeu seu cargo de policial. VOCÊ PERDEU! FIM DE JOGO!!!")
        }
    }
}

function back() {
    return location.href = "../index.html"
}
