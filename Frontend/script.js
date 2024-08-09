// Variáveis que interagem com o DOM
const buttons = {
  button1: document.getElementById("button1"),
  button2: document.getElementById("button2"),
  button3: document.getElementById("button3"),
  button4: document.getElementById("button4"),
  button5: document.getElementById("button5"),
  button6: document.getElementById("button6"),
  button7: document.getElementById("button7"),
};
const subtitle1 = document.getElementById("subtitle1");
const subtitle2 = document.getElementById("subtitle2");
const divButtons = document.getElementById("buttons");

// Eventos de clique em cada botão
buttons.button1.addEventListener("click", paginaVenda);
buttons.button2.addEventListener("click", paginaCliente);
buttons.button3.addEventListener("click", paginaAtendente);
buttons.button4.addEventListener("click", paginaHistorico);
buttons.button5.addEventListener("click", paginaEstoque);
buttons.button6.addEventListener("click", paginaCompra);

// Função para remover todos os botões
function removeButtons() {
  for (let key in buttons) {
    if (buttons[key]) {
      buttons[key].remove();
    }
  }
}

// Função auxiliar para criar formulários
function createForm(labelText, inputNames) {
  let form = document.createElement("form");
  form.innerHTML = `<label>${labelText}</label><br>`;

  inputNames.forEach((name) => {
    let input = document.createElement("input");
    input.name = name;
    input.placeholder = name;
    input.required = true; // Adiciona o atributo required para validação básica
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
  });

  return form;
}

// Transforma o DOM na Página de Vendas
function paginaVenda() {
  subtitle1.innerHTML = "Página de Vendas";
  subtitle2.innerHTML = "Realizando venda";
  removeButtons();

  let clientForm = createForm("Escreva o nome e sobrenome do cliente", [
    "Nome",
    "Sobrenome",
  ]);
  let attendantForm = createForm("Escreva o nome do atendente", ["Atendente"]);

  // Cria botão de envio
  let submitButton = document.createElement("button");
  submitButton.textContent = "Enviar";
  submitButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    let clientData = new FormData(clientForm);
    let attendantData = new FormData(attendantForm);

    // Exemplo de envio de dados ao backend
    try {
      let response = await fetch("/seu-endpoint-java", {
        method: "POST",
        body: JSON.stringify({
          client: Object.fromEntries(clientData),
          attendant: Object.fromEntries(attendantData),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Sucesso, volte à página original
        alert("Dados enviados com sucesso!");
        location.reload(); // Recarrega a página para o estado original
      } else {
        alert("Falha ao enviar dados.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar dados.");
    }
  });

  divButtons.appendChild(clientForm);
  divButtons.appendChild(attendantForm);
  divButtons.appendChild(submitButton);
}

// Funções para outras páginas
function paginaCliente() {
  subtitle1.innerHTML = "Página do Cliente";
  subtitle2.innerHTML = "Aqui você pode gerenciar informações de clientes.";
  updateButtonTexts("Cliente");
}

function paginaAtendente() {
  subtitle1.innerHTML = "Página do Atendente";
  subtitle2.innerHTML =
    "Aqui você pode gerenciar as atividades dos atendentes.";
  updateButtonTexts("Atendente");
}

function paginaHistorico() {
  subtitle1.innerHTML = "Página do Histórico";
  subtitle2.innerHTML =
    "Aqui você pode consultar o histórico de compras e vendas.";
  updateButtonTexts("Histórico");
}

function paginaEstoque() {
  subtitle1.innerHTML = "Página de Estoque";
  subtitle2.innerHTML = "Aqui você pode gerenciar o estoque de produtos.";
  updateButtonTexts("Estoque");
}

function paginaCompra() {
  subtitle1.innerHTML = "Página de Compras";
  subtitle2.innerHTML = "Aqui você pode gerenciar pedidos de compra.";
  updateButtonTexts("Compra");
}

// Função auxiliar para atualizar textos dos botões (se necessário)
function updateButtonTexts(page) {
  // Lógica para atualizar textos dos botões se necessário
}
