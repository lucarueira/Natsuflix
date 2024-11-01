// Defina as credenciais diretamente no código
const validUsername = "admin";
const validPassword = "1234";

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se as credenciais correspondem
    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});
