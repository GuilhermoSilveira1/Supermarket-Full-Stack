function paginaCliente() {
  subtitle1.innerHTML = "Página Cliente";
  subtitle2.innerHTML = "Qual operação gostaria de realizar?";
  removeButtons();

  // Criação de botões
  let clientButton = document.createElement("button");
  clientButton.textContent = "Cadastrar Cliente";
  clientButton.addEventListener("click", () => {
    loadContent("cadastro-cliente");
  });

  let attendantButton = document.createElement("button");
  attendantButton.textContent = "Cadastrar Atendente";
  attendantButton.addEventListener("click", () => {
    loadContent("cadastro-atendente");
  });

  divButtons.appendChild(clientButton);
  divButtons.appendChild(attendantButton);
}

function loadContent(page) {
  const contentDiv = document.getElementById("content");

  if (page === "cadastro-cliente") {
    contentDiv.innerHTML = `
      <h3>Cadastro de Cliente</h3>
      <form id="clientForm">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <label for="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="sobrenome">
      </form>
      <button id="submitClient">Enviar Cliente</button>
    `;
    document
      .getElementById("submitClient")
      .addEventListener("click", handleClientSubmit);
  } else if (page === "cadastro-atendente") {
    contentDiv.innerHTML = `
      <h3>Cadastro de Atendente</h3>
      <form id="attendantForm">
        <label for="atendente">Atendente:</label>
        <input type="text" id="atendente" name="atendente">
      </form>
      <button id="submitAttendant">Enviar Atendente</button>
    `;
    document
      .getElementById("submitAttendant")
      .addEventListener("click", handleAttendantSubmit);
  }
}

async function handleClientSubmit() {
  let clientForm = document.getElementById("clientForm");
  let clientData = new FormData(clientForm);

  try {
    let response = await fetch("/seu-endpoint-java", {
      method: "POST",
      body: JSON.stringify({
        client: Object.fromEntries(clientData),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Dados do cliente enviados com sucesso!");
      location.reload();
    } else {
      alert("Falha ao enviar dados do cliente.");
    }
  } catch (error) {
    console.error("Erro ao enviar dados do cliente:", error);
    alert("Erro ao enviar dados do cliente.");
  }
}

async function handleAttendantSubmit() {
  let attendantForm = document.getElementById("attendantForm");
  let attendantData = new FormData(attendantForm);

  try {
    let response = await fetch("/seu-endpoint-java", {
      method: "POST",
      body: JSON.stringify({
        attendant: Object.fromEntries(attendantData),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Dados do atendente enviados com sucesso!");
      location.reload();
    } else {
      alert("Falha ao enviar dados do atendente.");
    }
  } catch (error) {
    console.error("Erro ao enviar dados do atendente:", error);
    alert("Erro ao enviar dados do atendente.");
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  mainPage();
});

//Função que carrega a página principal
function mainPage() {
  const subtitle1 = document.getElementById("subtitle1");
  const subtitle2 = document.getElementById("subtitle2");
  const divButtons = document.getElementById("buttons");

  // Atualiza os subtítulos
  subtitle1.innerHTML = "Bem Vindo!";
  subtitle2.innerHTML = "Qual ação gostaria de realizar?";

  // Limpa os botões existentes
  divButtons.innerHTML = "";

  // Cria e adiciona novos botões
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
