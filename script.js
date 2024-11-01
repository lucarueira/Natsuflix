// Defina as credenciais diretamente no código
const validUsername = "natsumi";
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

// Lista de URLs das imagens de fundo
const backgroundImages = [
    'https://images.alphacoders.com/101/thumb-1920-1010799.png',
    'https://wallpapercg.com/download/lelouch-lamperouge-5782x3816-11234.jpg',
    'https://wallpapers.com/images/hd/blue-themed-yuyu-hakusho-lb88p89u45oz29ks.jpg',
    'https://images8.alphacoders.com/136/thumb-1920-1369308.png'
];

// Escolhe uma imagem aleatória
const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

// Define a imagem como fundo da página
document.body.style.backgroundImage = `url('${randomImage}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
