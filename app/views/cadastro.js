  function register() {
    const user = document.getElementById('newUser').value;
    const email = document.getElementById('newEmail').value;
    const pass = document.getElementById('newPass').value;
  
    if (user === "" || email === "" || pass === "") {
      alert("Preencha todos os campos!");
      return;
    }
  
    // Salva o nome no localStorage
    localStorage.setItem("nmuser", user);
  // Mensagem de sucesso
    alert("Usuário cadastrado com sucesso!");
    // Redireciona para a tela de boas-vindas
    window.location.href = "saudaçoes.html";
  }
  