document.addEventListener("DOMContentLoaded", (event) => {
  mainPage();
});

const subtitle1 = window.document.getElementById("subtitle1");
const subtitle2 = window.document.getElementById("subtitle2");
const main = window.document.getElementById("conteudo");
const divButtons = window.document.getElementById("buttons");

function mainPage() {
  subtitle1.innerHTML = "Bem Vindo!";
  subtitle2.innerHTML = "Qual ação gostaria de realizar?";

  const buttons = [
    { text: "Realizar Venda", id: "button1" },
    { text: "Ir para o menu cliente", id: "button2" },
    { text: "Ir para o menu atendente", id: "button3" },
    { text: "Consultar o histórico de compras e vendas", id: "button4" },
    { text: "Gerenciamento de estoque", id: "button5" },
    { text: "Pedidos de compra", id: "button6" },
    { text: "Sair do Programa", id: "button7" },
  ];

  buttons.forEach((button) => {
    let btn = document.createElement("button");
    btn.textContent = button.text;
    btn.id = button.id;
    divButtons.appendChild(btn);
  });
}
