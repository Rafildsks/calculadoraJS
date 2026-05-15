// Manipulaçao DOM = DOCUMENT OBJECT MODEL

// arvore DOM

function calcular() {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);
  const operador = document.getElementById("operador").value;
  const resultado = document.getElementById("resultado");

  console.log(numero1);
  console.log(numero2);
  console.log(operador);

  let resposta;

  if (operador == "+") {
    resposta = numero1 + numero2;
  } else if (operador == "-") {
    resposta = numero1 - numero2;
  } else if (operador == "*") {
    respost = numero1 * numero2;
  } else if ((operador = "/")) {
    resposta = numero1 / numero2;
  }

  console.log(resposta);

  resultado.innerHTML = `0 resultado de ${numero1} ${operador} ${numero2} = ${resposta}`;
}
