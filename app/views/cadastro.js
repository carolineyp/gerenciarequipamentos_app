//cadastro.js
function register() {
// Obtém os valores dos campos
    const user = document.getElementById('newUser').value;
    const email = document.getElementById('newEmail').value;
    const pass = document.getElementById('newPass').value;
// Verifica se os campos estão preenchidos
    if (user === "" || email === "" || pass === "") { 
      alert("Preencha todos os campos!");// Alerta se algum campo estiver vazio
      return;// Sai da função se algum campo estiver vazio
    }
// Aqui poderia validar com backend. Por enquanto libera acesso:
    alert("Usuário cadastrado com sucesso!");// Mensagem de sucesso
    window.location.href = "saudaçoes.html"; // Redireciona para a página de saudações
  }
  