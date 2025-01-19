// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1", link: "https://drive.google.com/file/d/1aQY8pDfHfUPWLsgsuGqn2E5MKtue6TeG/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 2", link: "https://drive.google.com/file/d/1ozlDQtECxSkxIgeEwsBijsLZMPIr2nK2/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 3", link: "https://drive.google.com/file/d/10udqqwHVrd2eAatwXf5gklD1fwWqQQzr/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 4", link: "https://drive.google.com/file/d/1nc6C0IR_oY0CjBDTdj2pj-tPHHSRru-d/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 5", link: "https://drive.google.com/file/d/126VQkbvl1mG_Zdh-Pz_raOP2nAnM9cA-/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 6", link: "https://drive.google.com/file/d/1F1pFayvl6RLZcR6oqksMUFqsn2ZZnRsw/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 7", link: "https://drive.google.com/file/d/1RefjQ0H2nM0zfS-PF49uBTGC6Cr89MHT/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 8", link: "https://drive.google.com/file/d/129qR9dGgoW3nZ31dgiRBVGs_ESGW_hce/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 9", link: "https://drive.google.com/file/d/15gFyiyKJgev3xlQ0_FPfuKnWjKRBtBTJ/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 10", link: "https://drive.google.com/file/d/1QWJnKttqVC5-pREnxkmcQaZR4MtTBJtC/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 11", link: "https://drive.google.com/file/d/1Tq3Ic3ET0PK_1dWFNK8qFU4su4XXEFWZ/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 12", link: "https://drive.google.com/file/d/1ACKq9JIBHAvUZSq8eu2Kf4o9UWOlaTQy/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 13", link: "https://drive.google.com/file/d/1ZtzHC5rgrpi7EKQuAHSdMCepuUuSpq8x/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 14", link: "https://drive.google.com/file/d/1XksZjl4EZ7xd7oN0gTqQigfesdFGycgR/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 15", link: "https://drive.google.com/file/d/17dEyxZB-iAAqLAY4KyYwyrWGCi7yWFmI/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 16", link: "https://drive.google.com/file/d/13ms-XHdGa7qkbfkhT1OVH34KJ9zLAcnr/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 17", link: "https://drive.google.com/file/d/1S8rbK1SkSoy02NOHAYCV8ac9W-vsz1Up/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 18", link: "https://drive.google.com/file/d/1DUQzFqowGWPh6v6KR4D8TWF5QekMLlsh/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 19", link: "https://drive.google.com/file/d/1HBMsTI8LpIJL3iRugDvs_wCbLGP2La9W/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 20", link: "https://drive.google.com/file/d/1mF5Anguq4y9jg6rkKShUAPqQ0vnQVwEj/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 21", link: "https://drive.google.com/file/d/1dDaVYFyNqGTLeDBJHk9qDrUc9j0VAASV/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 22", link: "https://drive.google.com/file/d/1yx0VzzwfSqPrh6NBd-dB1JpU_6bupd9d/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 23", link: "https://drive.google.com/file/d/1J-KETTkdwmuRkOTooMugUm10dYy2lWB7/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 24", link: "https://drive.google.com/file/d/1Iz7kiEGIccDu0NQO_DxPao5lR1jSsMeY/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 25", link: "https://drive.google.com/file/d/1valdZhLtbZT_-9_ChpkhnIeBk94DfkTm/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 26", link: "https://drive.google.com/file/d/1spYNgPJejqtVR8gbLslvyr8OKoeWCLUt/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 27", link: "https://drive.google.com/file/d/1-vgSpITHHKcWco8vdIOPLKRjw-Ns9H72/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 28", link: "https://drive.google.com/file/d/1J6qCAHobtLYTcWuKbuJDBg_oBkTz5opM/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 29", link: "https://drive.google.com/file/d/1CyG_beFeetT4CDfAU1779eNhRbuMm5Ap/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    { title: "Episódio 30", link: "https://drive.google.com/file/d/1uDhsjFF0zzuUePAEeTgJuE06mc3EuSUF/preview", img: "https://noticias.animeonegai.com/wp-content/uploads/2022/09/Katekyo-Hitman-Reborn-anime-min-2.jpg" },
    

    
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
