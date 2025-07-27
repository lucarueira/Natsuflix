// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1  ", link: "https://drive.google.com/file/d/1cSOzhuGCYuFAft5KbFOS49_VMzA0sNC1/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 2 ", link: "https://drive.google.com/file/d/1kqug7vzfyhMKtVx3VLmXOqTbDS-t6MXe/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 3 ", link: "https://drive.google.com/file/d/1xT8mS4c7wx6rY8whrjnkwf8yGCt_VpzO/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 4 ", link: "https://drive.google.com/file/d/1yhPseoJkVvIivpvvo3Mle__NzZer9Aci/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 5 ", link: "https://drive.google.com/file/d/14ZBHnjX9lhUDwAViNDi6Bg_AAHQpxsBk/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 6 ", link: "https://drive.google.com/file/d/19aDOCeGXEQAa471aQhChXeZSz-S6iYuZ/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 7 ", link: "https://drive.google.com/file/d/1brgfkoSvB4LXyZab8Y1om4KjGywhCFSo/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 8 ", link: "https://drive.google.com/file/d/17gkoN2w0z6GpVnvW7Xd96eZ-vNIsFDq7/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 9 ", link: "https://drive.google.com/file/d/11IRXq_34m0pvrcoKZIKJLIeOcczzDopx/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 10 ", link: "https://drive.google.com/file/d/188w18wnfeVq6wgZc97YWRTnkb3BOSZm5/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 11 ", link: "https://drive.google.com/file/d/1ioKuEA_QwR7vCvMRRkW6E6XmAQhYDW4V/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
    { title: "Episódio 12 ", link: "https://drive.google.com/file/d/1aKniZYJtgEtMG5fsp0_DL1RoLS6z7-sb/preview", img: "https://images-cdn.ubuy.com.br/647c74cb8b50bb3054599c43-bocchi-the-rock-vol-1-5-japanese-version.jpg" },
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
