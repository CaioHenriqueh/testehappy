const nameUser = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const button = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
const functionIMC = (peso, altura) => {
    return peso / (altura * altura)
}
button.addEventListener("click", () => {
    functionIMC(peso.value, altura.value).toFixed(2);
   // mensagem.innerHTML = functionIMC(peso.value, altura.value).toFixed(2);
   if(functionIMC(peso.value, altura.value).toFixed(2)){
    mensagem.innerHTML = `${nameUser.value} tem o imc ${functionIMC(peso.value, altura.value).toFixed(2)}`;
    nameUser.value = '';
    peso.value = '';
    altura.value = '';
    }else {
        console.log('error');
    }
})