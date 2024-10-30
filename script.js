// Função para cadastrar um novo usuário
function registerUser() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerMessage = document.getElementById('registerMessage');

    if (newPassword !== confirmPassword) {
        registerMessage.style.color = "red";
        registerMessage.textContent = "As senhas não coincidem!";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(user => user.username === newUsername)) {
        registerMessage.style.color = "red";
        registerMessage.textContent = "Usuário já existe!";
        return;
    }

    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));

    registerMessage.style.color = "green";
    registerMessage.textContent = "Usuário cadastrado com sucesso!";
    setTimeout(() => {
        window.location.href = 'index.html'; // Redireciona para a página de login
    }, 2000);
}

// Função de login com redirecionamento para home.html
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Obtém a lista de usuários armazenada no localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Verifica se o usuário existe e se a senha está correta
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        message.style.color = "green";
        message.textContent = "Login bem-sucedido!";
        setTimeout(() => {
            window.location.href = 'home.html'; // Redireciona para a página inicial
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha incorretos.";
    }
}
