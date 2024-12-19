// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 T1 ", link: "https://drive.google.com/file/d/10X9sRj88cMABHdMl2TXlc5swKMuXJayZ/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    { title: "Episódio 2 T1 ", link: "https://drive.google.com/file/d/10XJKYwQbnafVgG_Un8Rq2NVdiarbvaUK/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    { title: "Episódio 3 T1 ", link: "https://drive.google.com/file/d/10ia9z2HJ54xCJ0fbg_YtSFGgmEacsFYv/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    { title: "Episódio 4 T1", link: "https://drive.google.com/file/d/10pFDpb3r_7oz_MoMcn886n_Iby4ffVa9/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    { title: "Episódio 5 T1", link: "https://drive.google.com/file/d/10phcHG7B0ltKCfCLq5jmFZRF6FQ4RB_Q/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    { title: "Episódio 6 T1", link: "https://drive.google.com/file/d/10rhmCajOBp2vsUsv2wXom_qjzTLv2bl8/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    { title: "Episódio 7 T1", link: "https://drive.google.com/file/d/10xO9Aaatmgp1eR9qKMsDwNpEJ6pdeUSP/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    { title: "Episódio 8 T1", link: "https://drive.google.com/file/d/110pWKvJBMKmJKHpb12PHfPBG2Hi1ZnIt/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740.jpg" },
    
 
 
 
   
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
