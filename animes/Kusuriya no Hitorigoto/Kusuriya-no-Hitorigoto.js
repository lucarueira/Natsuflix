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
    { title: "Episódio 13 ", link: "https://drive.google.com/file/d/131d9WBHxB3OUdjeN-XeBZu1xwI_6c0pp/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 14 ", link: "https://drive.google.com/file/d/1tuoUh9CONNnLCQonQNCn5X0b4F3RI4K0/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 15 ", link: "https://drive.google.com/file/d/1Ouzq1ATlbgAXp1ZXHRUjK2_UgOKpLcCY/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 16 ", link: "https://drive.google.com/file/d/1iM5OF83b5eEXe7p6WC9Sb87G28FyjN8p/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 17 ", link: "https://drive.google.com/file/d/1AcS-p5qvuFBdpWpvuZJ4l_58hpmaAd77/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 18 ", link: "https://drive.google.com/file/d/1BYPj4HhDMfa5JQjW9kdHuzfMED8YFqNE/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 19 ", link: "https://drive.google.com/file/d/1sn-7YRsmnlbRKS8fCDqMGOBlcGGFgVfs/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 20 ", link: "https://drive.google.com/file/d/1_e9R5YDm74ic88mjGNlGfJA9BeiQxFi_/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 21 ", link: "https://drive.google.com/file/d/1YK8-uoj3VqUQPPp5Di8wRDzENxNlpFqf/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 22 ", link: "https://drive.google.com/file/d/1vWFr1nxPSDvsEV0-h3hLmLd_Sj9rg6ji/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 23 ", link: "https://drive.google.com/file/d/1maoeTMd25knNIsP39ChX_TIfX2T8v9P7/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 24 ", link: "https://drive.google.com/file/d/1EW8yjwMZc76HZS9JK2XdUQuqR_rEBGPl/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    

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
