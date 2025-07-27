// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1 T1 ", link: "https://drive.google.com/file/d/1lKZPWyZjXlsrLPLif7snyp9-5Kwb1pBo/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 2 T1 ", link: "https://drive.google.com/file/d/1ElK3SBNCtTRgwGtHub_9uNjH7rC5UsaB/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 3 T1 ", link: "https://drive.google.com/file/d/1euNkLkyVb4MujmtRBZiUFCrfj8we5H6f/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 4 T1 ", link: "https://drive.google.com/file/d/12ZYyM9KbL1pGvNa-9RSAPvGBWH4zXBWI/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 5 T1 ", link: "https://drive.google.com/file/d/1eUBBRrmo2fcX-g2eFOjeYIzu4GU1nzLC/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 6 T1 ", link: "https://drive.google.com/file/d/1jF-LsLdQSUvb9uI7c3I0jcsnCJwcbjpX/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 7 T1 ", link: "https://drive.google.com/file/d/1kuqhoAox3cmQFLGjZb4WBACMJm4-7Rwf/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 8 T1 ", link: "https://drive.google.com/file/d/1JlJ4OEEqVslt3-8MxgNDbX5AqX9Pp_YJ/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 9 T1 ", link: "https://drive.google.com/file/d/1avPlxWQCB7O1TTYZiHnfJKsgW5XV7mlK/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 10 T1 ", link: "https://drive.google.com/file/d/1B4c4QaSUhtQbEE7pHNzbETSZ7edeNzpi/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 11 T1 ", link: "https://drive.google.com/file/d/16ElLgrWeJisgu-X9Z1QwkSQRfiWPTYkw/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 12 T1 ", link: "https://drive.google.com/file/d/1IuEnUbWLo7OU1swChpfQPidqHGKKCh21/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 13 T1 ", link: "https://drive.google.com/file/d/131d9WBHxB3OUdjeN-XeBZu1xwI_6c0pp/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 14 T1 ", link: "https://drive.google.com/file/d/1tuoUh9CONNnLCQonQNCn5X0b4F3RI4K0/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 15 T1 ", link: "https://drive.google.com/file/d/1Ouzq1ATlbgAXp1ZXHRUjK2_UgOKpLcCY/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 16 T1 ", link: "https://drive.google.com/file/d/1iM5OF83b5eEXe7p6WC9Sb87G28FyjN8p/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 17 T1 ", link: "https://drive.google.com/file/d/1AcS-p5qvuFBdpWpvuZJ4l_58hpmaAd77/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 18 T1 ", link: "https://drive.google.com/file/d/1BYPj4HhDMfa5JQjW9kdHuzfMED8YFqNE/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 19 T1 ", link: "https://drive.google.com/file/d/1sn-7YRsmnlbRKS8fCDqMGOBlcGGFgVfs/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 20 T1 ", link: "https://drive.google.com/file/d/1_e9R5YDm74ic88mjGNlGfJA9BeiQxFi_/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 21 T1 ", link: "https://drive.google.com/file/d/1YK8-uoj3VqUQPPp5Di8wRDzENxNlpFqf/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 22 T1 ", link: "https://drive.google.com/file/d/1vWFr1nxPSDvsEV0-h3hLmLd_Sj9rg6ji/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 23 T1 ", link: "https://drive.google.com/file/d/1maoeTMd25knNIsP39ChX_TIfX2T8v9P7/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 24 T1 ", link: "https://drive.google.com/file/d/1EW8yjwMZc76HZS9JK2XdUQuqR_rEBGPl/preview", img: "https://blacknerdproblems.com/wp-content/uploads/2023/10/TheApothecaryDiaries_16x9_1920x1080.png" },
    { title: "Episódio 1 T2 ", link: "https://drive.google.com/file/d/1GRCKV_ChCouTbAUUrncPPLZHEHvmkzA_/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 2 T2 ", link: "https://drive.google.com/file/d/10FeR8uuI6T4NxYGPIDQeYCqvuvsd9NpP/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 3 T2 ", link: "https://drive.google.com/file/d/1KCogEdK8HeGJ-jCB7Ei0bWtTlJkV3dq8/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 4 T2 ", link: "https://drive.google.com/file/d/1jFUP7OFWFSMG2gUGPr2Ffrdc5s7RSsTS/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 5 T2 ", link: "https://drive.google.com/file/d/1KQN0aomDwW80qgIrlsPQzHvTvdDFMhTM/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 6 T2 ", link: "https://drive.google.com/file/d/1C9QSWpCL6JhGB5vRpg9UbG3HwarT0veK/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 7 T2 ", link: "https://drive.google.com/file/d/17bVJfNWVXPjVnh3wQbXc-FzD-nWaLsYD/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 8 T2 ", link: "https://drive.google.com/file/d/1BMOti0Z5cAGJdhQWWTuE8XFrFD-3FXtP/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 9 T2 ", link: "https://drive.google.com/file/d/1tIz68oGHWChV-dxxWuGwKTF0fC1xniM3/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 10 T2 ", link: "https://drive.google.com/file/d/1cgV1fpCBlM5AD_8hyk-mDXjf1qJ2qJFK/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 11 T2 ", link: "https://drive.google.com/file/d/1TsMP6mBy8QhtySPcO_hmfwro24aM_aO5/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 12 T2 ", link: "https://drive.google.com/file/d/1aPqkmx7gkfA-3xBGAxKzU3bMaRuVxSw0/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 13 T2 ", link: "https://drive.google.com/file/d/15QgGHdIPZoKVygMn-cFEw9SYAiPhODcR/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 14 T2 ", link: "https://drive.google.com/file/d/1aUYduMKy9KGRT8w3CzHVzMUrdRFekv3c/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 15 T2 ", link: "https://drive.google.com/file/d/1pfC9SakzjNxH7z1GaIPmfHtolwYhWtea/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 16 T2 ", link: "https://drive.google.com/file/d/1sBtB1nECwCMjCdfZhyp4HFL2chsqfaVy/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 17 T2 ", link: "https://drive.google.com/file/d/1Fj3N_WEZoYV9hhkWxSV_pJThjpc-jfSB/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 18 T2 ", link: "https://drive.google.com/file/d/1JkAsRvVj3pGirpVXVBne5MtI-8g3Ca1O/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 19 T2 ", link: "https://drive.google.com/file/d/1om3UzIXMqxEZ08tq0mumykJz1HAYSJTw/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 20 T2 ", link: "https://drive.google.com/file/d/1LtsIvLMVCJYNYBTALkE8Wdy_ErSapl0L/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 21 T2 ", link: "https://drive.google.com/file/d/1OQuXB7ZyqZUcSts_5JMZEYqsqkB2O1CR/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 22 T2 ", link: "https://drive.google.com/file/d/11tBM6wbF6RAxA84JLtXz0hm7BEgXx8gW/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 23 T2 ", link: "https://drive.google.com/file/d/1FJA5qe2oyMydiITmYPm4zQ_GmW5gtU6i/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },
    { title: "Episódio 24 T2 ", link: "https://drive.google.com/file/d/188neI2FlhFtOmG6KaQBFT7CM7Bo62vhM/preview", img: "https://animenew.com.br/wp-content/uploads/2024/11/Gc5CS_vakAAlU_x-1018x720.webp" },

   
    
    
    

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
