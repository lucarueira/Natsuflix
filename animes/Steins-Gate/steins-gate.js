// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 ", link: "https://drive.google.com/file/d/1ToT63ECwowG2BqRGdnzweoQg6XoJh0cR/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 2 ", link: "https://drive.google.com/file/d/14faPJCPq5YdOAHflCzkzipZ-teN5RAtC/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 3 ", link: "https://drive.google.com/file/d/1Emo_P647RjjYM3Yg_4BR_1GkLnUHXAH6/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 4 ", link: "https://drive.google.com/file/d/1S_7z-otH-GNJwEjZo2-FJfQEwA5gWNtf/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 5 ", link: "https://drive.google.com/file/d/1pXwOMdVGp5GZpAAI-xR5ArvDXcycJTuv/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 6 ", link: "https://drive.google.com/file/d/1RxZ4_nPN7-r8Q9gwj2kxP5CamQNvq7RR/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 7 ", link: "https://drive.google.com/file/d/1O7v7L0Px9FtDbC6A3LmL_0Y0Q_WO0PoI/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 8 ", link: "https://drive.google.com/file/d/1if0cNWHuwSsMS081NycpQQb4OijlVGGP/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 9 ", link: "https://drive.google.com/file/d/1npZufR8NSVLfwxdkzzDa-1U7X8MxoFn3/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 10 ", link: "https://drive.google.com/file/d/1hb_6zcXm3HJmW4CA8gMSmL5qe79hiPyB/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 11 ", link: "https://drive.google.com/file/d/1vJA5MsH-FWjWZZdplnnQ74SUo6jhb6Qk/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 12 ", link: "https://drive.google.com/file/d/18QB6ic-XDOyAR-_3ed7UwEt-u3vPETbS/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 13 ", link: "https://drive.google.com/file/d/1_OWgqu5R3orLrcMOFFdC8q8xUL-qQRh2/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 14 ", link: "https://drive.google.com/file/d/1ALHlPS8rWFKJAm6OpU6-768nwiFwgPmq/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 15 ", link: "https://drive.google.com/file/d/1ly2_GYCPtdQuuQlwNms8vOYqEaSDjkRg/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 16 ", link: "https://drive.google.com/file/d/1Y18W0LyjSA01wN9rzRBsZnGU7ECGpR_U/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 17 ", link: "https://drive.google.com/file/d/1bwGngTEbk_3JQDeQPwM5qgEEf0AAT6Fp/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 18 ", link: "https://drive.google.com/file/d/12QrXpjB53G-GyVQ8OkTqcAZWr3-ahUKu/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 19", link: "https://drive.google.com/file/d/11yoeRohrtZTYpkdW4d8lOWvDkaJtd3vH/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 20 ", link: "https://drive.google.com/file/d/1M8z66-uPi_NUg20jwco_6ios_NS8d-fT/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 21 ", link: "https://drive.google.com/file/d/1anOBrRsesauguD4fE9FZYhOP53TtZKiU/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 22 ", link: "https://drive.google.com/file/d/1WXoYB8UWICjVphxrsC1mh9Z3jVECNVBv/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 23 ", link: "https://drive.google.com/file/d/19xNuz3n1d-hXZ-fwE16vvdA-xYmyFYMM/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 24", link: "https://drive.google.com/file/d/1biqnv8vr-BzNFTpy9lQ8xnDFZj9azf3w/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "Episódio 25 ", link: "https://drive.google.com/file/d/1xIutRNcdmIXtVUYINhElLyRz45sVcRN2/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
 
   
];

// Função para gerar os episódios
function gerarEpisodios() {
    const episodiosList = document.getElementById('episodios-list');
    episodios.forEach(episodio => {
        const episodioDiv = document.createElement('div');
        episodioDiv.className = 'episodio';
        episodioDiv.onclick = () => window.location.href = episodio.link;

        const img = document.createElement('img');
        img.src = episodio.img;
        img.alt = episodio.title;

        const p = document.createElement('p');
        p.textContent = episodio.title;

        episodioDiv.appendChild(img);
        episodioDiv.appendChild(p);
        episodiosList.appendChild(episodioDiv);
    });
}

// Chama a função para gerar os episódios quando a página carregar
window.onload = gerarEpisodios;
