function recover() {
    const email = document.getElementById('recoverEmail').value;

    if (email === ''){
        alert('Por favor, insira seu email!');
        return;
    }
    alert('link de recuperação enviado para ' + email);
    window.location.href = "login.html"; // Redireciona para a página de login
}