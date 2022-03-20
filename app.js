var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 10";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML =
      "Errou, O numero sorteado e maior que " + chute;
  } else {
    elementoResultado.innerHTML =
      "Errou, O numero sorteado e menor que " + chute;
  }
}
