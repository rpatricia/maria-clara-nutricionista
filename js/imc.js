let calcular = document.querySelector("#calcular");
function imc() {
  let altura = document.querySelector("#altura").value;
  let peso = document.querySelector("#peso").value;
  let resultado = document.querySelector("#resultado");

  if (altura !== "" && peso !== "") {
    let IMC = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";
    if (IMC < 16) {
      classificacao = "IMC Inválido";
    } else if (IMC < 17) {
      classificacao = "Muito abaixo do peso";
    } else if (IMC < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (IMC < 25) {
      classificacao = "Peso normal";
    } else if (IMC < 30) {
      classificacao = "Acima do peso";
    } else if (IMC < 35) {
      classificacao = "Obesidade grau I";
    } else if (IMC < 40) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }

    resultado.textContent = `Seu IMC é ${IMC} e você está com ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos!!!";
  }
}

calcular.addEventListener("click", imc);

function trocar(elemento) {
  //Primeira forma de fazer o evento do clique do botão

  // document.getElementById("evento").innerHTML =
  //   "Obrigadao por passar o mause";
  elemento.innerHTML = "obrigado por passar o mouse"
  elemento.style.backgroundColor = "green"
  elemento.style.cursor = "pointer"
  elemento.style.color = "white"
}

function voltar(elemento) {
  // document.getElementById("evento").innerHTML = "Obrigado por sair";
  elemento.innerHTML = "Obrigadao por sair"
  elemento.style.backgroundColor = "grey"
  elemento.style.color ="white"
}

function corNormal(elemento) {
  // document.getElementById("evento").innerHTML = "Passe o mause aqui"
  elemento.innerHTML = "Passe o mouse aqui"
  elemento.style.backgroundColor = "#191c2c"
  elemento.style.color = "#fff"
}