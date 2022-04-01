/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("quer iniciar uma nova jogada?")) {
      let carta1Usuario = comprarCarta()
      let carta2Usuario = comprarCarta(); 
      let cartaComputador1 = comprarCarta();
      let cartaComputador2 = comprarCarta();


      let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
      let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor 
         console.log(`Usuario - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
         console.log(`O COmputador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${pontuacaoComputador}`)
        
         if(pontuacaoUsuario > pontuacaoComputador) {
            console.log("O usuário ganhou!")
         }     else if (pontuacaoComputador > pontuacaoUsuario){
               console.log("O computador ganhou!")
            }  else if(pontuacaoUsuario === pontuacaoComputador)
            console.log("Empate!")
         
     
      } else {
      console.log("O jogo acabou")
   }
