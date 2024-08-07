// Variáveis que interagem com o DOM
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const subtitle1 = document.getElementById("subtitle1");
const subtitle2 = document.getElementById("subtitle2");

// Eventos de clique em cada botão
button1.addEventListener("click", paginaVenda);
button2.addEventListener("click", paginaCliente);
button3.addEventListener("click", paginaAtendente);
button4.addEventListener("click", paginaHistorico);
button5.addEventListener("click", paginaEstoque);
button6.addEventListener("click", paginaCompra);

// Funções de cada evento

// Transforma o DOM na Página de Vendas
function paginaVenda() {
  subtitle1.innerHTML = "Página de Vendas";
  subtitle2.innerHTML = "Aqui você pode realizar e gerenciar vendas.";
  updateButtonTexts("Venda");
}

// Atualiza o texto dos botões
function updateButtonTexts(currentPage) {
  venda.innerHTML = currentPage + " (Ativo)";
  cliente.innerHTML = "Ir para o menu cliente";
  atendente.innerHTML = "Ir para o menu atendente";
  historico.innerHTML = "Consultar o histórico de compras e de vendas";
  estoque.innerHTML = "Gerenciamento de Estoque";
  compra.innerHTML = "Pedidos de Compra";
}

// Exemplos de funções para outras páginas
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
