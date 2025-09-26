// app/views/home.js
// Funções para adicionar, editar e remover equipamentos
function addEquip() {
// Obtém os valores dos campos
    const name = document.getElementById('equipNome').value;
    const info = document.getElementById('equipInfo').value;//adiciona o campo info
// Verifica se os campos estão preenchidos
    if (name === "" || info === "") {
      alert("Preencha todos os campos!");
      return;
    }
// Adiciona uma nova linha na tabela
    const table = document.getElementById('equipTable').querySelector('tbody');// Seleciona o corpo da tabela
    const row = document.createElement('tr');// Cria uma nova linha
// Preenche a linha com os dados e botões de ação
    row.innerHTML = `
      <td>${name}</td>
      <td>${info}</td>
      <td>
        <button onclick="editEquip(this)">Editar</button>
        <button onclick="removeEquip(this)">Excluir</button>
      </td>
    `;
// Adiciona a linha na tabela e limpa os campos
    table.appendChild(row);
    document.getElementById('equipNome').value = "";
    document.getElementById('equipInfo').value = "";
  }
  
  function editEquip(btn) {
    const row = btn.parentNode.parentNode;
    const name = prompt("Editar nome:", row.cells[0].innerText);
    const info = prompt("Editar informações:", row.cells[1].innerText);
  
    if (name && info) {
      row.cells[0].innerText = name;
      row.cells[1].innerText = info;
    }
  }
  
  function removeEquip(btn) {
    btn.parentNode.parentNode.remove();
  }
  