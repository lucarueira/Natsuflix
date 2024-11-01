const images = [
    'https://wallpapers.com/images/hd/hunter-x-hunter-laptop-4e7rztpx4j4lpngy.jpg',
    'https://images2.alphacoders.com/839/thumb-1920-839449.jpg',
    'https://i.pinimg.com/originals/29/e7/a9/29e7a9c0aac67dafb758cf35b20c8bef.jpg',
    'https://images5.alphacoders.com/136/thumb-1920-1368870.png'
];

let currentIndex = 0;
const imgElement = document.getElementById('featured-img');

function changeImage() {
    imgElement.classList.remove('visible'); // Remove a classe que mostra a imagem

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Atualiza o índice para a próxima imagem
        imgElement.src = images[currentIndex]; // Troca a imagem
        imgElement.classList.add('visible'); // Adiciona a classe para mostrar a nova imagem
    }, 1000); // Aguarda 1 segundo antes de trocar a imagem
}

// Inicializa a primeira imagem como visível
imgElement.classList.add('visible');

// Troca a imagem a cada 5 segundos (5000 milissegundos)
setInterval(changeImage, 5000);