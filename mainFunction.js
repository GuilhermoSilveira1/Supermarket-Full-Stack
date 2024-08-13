const subtitle1 = window.document.getElementById("subtitle1");
const subtitle2 = window.document.getElementById("subtitle2");
const main = window.document.getElementById("conteudo");
const divButtons = window.document.getElementById("buttons");

function mainPage() {
  subtitle1.innerHTML = "Bem Vindo!";
  subtitle2.innerHTML =
    "Qual ação gostaria de realizarQual ação gostaria de realizar?";
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  let button3 = document.createElement("button");
  let button4 = document.createElement("button");
  let button5 = document.createElement("button");
  let button6 = document.createElement("button");
  let button7 = document.createElement("button");

  button1.textContent = "Realizar Venda";
  button2.textContent = "Ir para o menu cliente";
  button3.textContent = "ir para o menu cliente";
  button4.textContent = "Consultar o histórico de compras e vendas";
  button5.textContent = "Gerenciamento de estoque";
  button6.textContent = "Pedidos de compra";
  button7.textContent = "Sair do Programa";

  divButtons.appendChild(button1);
  divButtons.appendChild(button2);
  divButtons.appendChild(button3);
  divButtons.appendChild(button4);
  divButtons.appendChild(button5);
  divButtons.appendChild(button6);
  divButtons.appendChild(button7);
}
