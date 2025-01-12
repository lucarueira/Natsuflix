// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 ", link: "https://drive.google.com/file/d/1abmMJS5DOVWB-yuUERBED4P-GnKkf9PM/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 2 ", link: "https://drive.google.com/file/d/185X2skRYe0q54vbAUFr-j8oHrwwaz6TV/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 3 ", link: "https://drive.google.com/file/d/1GkDOWs9jiOC7Nz7RNyUzJ6_3bWzXR_6L/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 4 ", link: "https://drive.google.com/file/d/1Z6wY8i_afhtqmZ-w-q7wgFtPPIkQCIiz/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 5 ", link: "https://drive.google.com/file/d/1-O7YHZ8EgbFXOxU3T9OgYmPBFOqaGl5h/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 6 ", link: "https://drive.google.com/file/d/1FBrIV62xmD668li-aSbP4gBu7UqNqetG/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 7 ", link: "https://drive.google.com/file/d/10oU2uPucXyaGOmOVej8gjR8Z5a0er9Ye/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 8 ", link: "https://drive.google.com/file/d/1vD9saUY9u5FZiIHwexVfzzxZBf7VgBys/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
    { title: "Episódio 9 ", link: "https://drive.google.com/file/d/1CS2LsPsTeYlEJ-W3Wtq8SxT8Vb-41LO9/preview", img: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWYbJxRGKn7lYQ4imm4Wt6qKb0ve2E5AHZyrsVWOBoz_RqFzNZ9uHGbdy6R-WBHseAoyMH5D5JP0KYt1Eof6Gj5NLreQtx5LYA4djI9_CR2_EBFtz_afj2OaocSW9DYtxG0g.jpg?r=eeb" },
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
