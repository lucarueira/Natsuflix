// Simulando um banco de dados com logins e senhas pré-definidos
const users = [
    { username: "usuario1", password: "senha1" },
    { username: "usuario2", password: "senha2" },
    { username: "usuario3", password: "senha3" }
];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Verifica se o usuário e senha existem no "banco de dados"
    const user = users.find(
        (user) => user.username === usernameInput && user.password === passwordInput
    );

    if (user) {
        window.location.href = "home.html"; // Redireciona para a página inicial
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha incorretos.";
    }
}
