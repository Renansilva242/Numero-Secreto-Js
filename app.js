let listaNumerosSorteados=[]; 
let numeroLimite = 100; 
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute(){
    let chute =  document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'Tentativas': 'Tentantiva'; 
    let mensagemTentativas = ` Parabéns ! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; 
   
   
   
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou Jovem !');
        exibirTextoNaTela('p',mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled'); 
     

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p','O número secreto é menor');
    } else{
        exibirTextoNaTela('p', 'O número secreto é maior'); 
    }

    tentativas++; 
    LimparCampo();
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 100'); 
}

exibirMensagemInicial(); 


function gerarNumeroAleatorio(){
      let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1); 
      let quantidadeElementos = listaNumerosSorteados.length;

      if(quantidadeElementos == 100){
        listaNumerosSorteados = []; 
      }
      if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
      } else {
        listaNumerosSorteados.push(numeroEscolhido); 
        console.log(listaNumerosSorteados);
        return numeroEscolhido; 
      }
}


function LimparCampo(){
    chute = document.querySelector('Input');
    chute.value = ''; 
}

function reiniciarJogo(){
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial(); 
    numeroSecreto=gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

