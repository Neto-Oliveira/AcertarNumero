var contadorErro = 1
var ContadorAcerto = 1

var senhaPrincipal = Math.floor(1* Math.random() * 100);
console.log(senhaPrincipal) // aqui onde revela a senha 

function compararSenha(){
   senhaCorreta = 1
   const input = document.getElementById('numberPassword').value
   const erros = document.getElementById('Falhas');
   const acertos = document.getElementById('correto');

   if (input.value != senhaPrincipal) {
      erros.innerHTML = contadorErro++
   } 
   if (input == senhaPrincipal ) {
      acertos.innerHTML = ContadorAcerto++
   }

}