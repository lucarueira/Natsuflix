// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 ", link: "https://drive.google.com/file/d/1lKZPWyZjXlsrLPLif7snyp9-5Kwb1pBo/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 2 ", link: "https://drive.google.com/file/d/1ElK3SBNCtTRgwGtHub_9uNjH7rC5UsaB/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 3 ", link: "https://drive.google.com/file/d/1euNkLkyVb4MujmtRBZiUFCrfj8we5H6f/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 4 ", link: "https://drive.google.com/file/d/12ZYyM9KbL1pGvNa-9RSAPvGBWH4zXBWI/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 5 ", link: "https://drive.google.com/file/d/1eUBBRrmo2fcX-g2eFOjeYIzu4GU1nzLC/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 6 ", link: "https://drive.google.com/file/d/1jF-LsLdQSUvb9uI7c3I0jcsnCJwcbjpX/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 7 ", link: "https://drive.google.com/file/d/1kuqhoAox3cmQFLGjZb4WBACMJm4-7Rwf/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 8 ", link: "https://drive.google.com/file/d/1JlJ4OEEqVslt3-8MxgNDbX5AqX9Pp_YJ/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 9 ", link: "https://drive.google.com/file/d/1avPlxWQCB7O1TTYZiHnfJKsgW5XV7mlK/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 10 ", link: "https://drive.google.com/file/d/1B4c4QaSUhtQbEE7pHNzbETSZ7edeNzpi/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 11 ", link: "https://drive.google.com/file/d/16ElLgrWeJisgu-X9Z1QwkSQRfiWPTYkw/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 12 ", link: "https://drive.google.com/file/d/1IuEnUbWLo7OU1swChpfQPidqHGKKCh21/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
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
