// app/views/login.js
function login() {

// Obtém os valores dos campos
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
  
// Verifica se os campos estão preenchidos
    if (user === "" || pass === "") {
      alert("Preencha todos os campos!");
      return;
    }
  
// Aqui poderia validar com backend. Por enquanto libera acesso:
    window.location.href = "home.html"; // Redireciona para a página principal";
  }
  