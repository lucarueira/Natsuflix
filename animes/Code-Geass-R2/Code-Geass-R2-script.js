// Lista de links dos episódios
const episodios = [
    { title: "Episódio 1", link: "https://drive.google.com/file/d/1t1v1FZvbTj1337uEohdVwx8RazU6dkCN/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 2", link: "https://drive.google.com/file/d/19HIGE9L6zuooOnuJRykke0NMbKtF7l2C/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 3", link: "https://drive.google.com/file/d/1P43w_1iFZXdU4R_cwUvmrW0gHpa-1s6o/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 4", link: " https://drive.google.com/file/d/1rlfJLy9mUPjJBgPUtJ-MqrrBRAVslFiv/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 5", link: "https://drive.google.com/file/d/15p-QORlXmql5ejaYydCyn9cZYeBWR0CP/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 6", link: "https://drive.google.com/file/d/1ftrlbAz3CoA86SiTfV8k_GuIAcowMMOU/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 7", link: "https://drive.google.com/file/d/1lBgCX5iLz6-8xwxhhelZzyiEd_7QWgzb/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 8", link: "https://drive.google.com/file/d/1akQYebyCz-K37qsBe0t08lYDCDi3QZUH/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 9", link: "https://drive.google.com/file/d/12S1vuKAPJit0nbXthD-ggs77QJMBAcLQ/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 10", link: "https://drive.google.com/file/d/1aApATEyiRrVlGTyMjRNoCAPgzXPWp_z-/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 11", link: "https://drive.google.com/file/d/1Yz3CNHc7YFRMl-v2y32MaR0RJ4K6tu1W/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 12", link: "https://drive.google.com/file/d/1brP8SlmcJoHRCyoObWhAOMMxZ8g_F5OI/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 13", link: "https://drive.google.com/file/d/15y5_59hiAUnk6XVhOVyAn-qPc_5ogDdF/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 14", link: "https://drive.google.com/file/d/1hGin48nN-7LstTFy7sMtfpJ40OYanzSk/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 15", link: "https://drive.google.com/file/d/1JR8DaB_2HZfE10vYsHOE2FGODQA7QF-k/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 16", link: "https://drive.google.com/file/d/1OzNAxjLzMSctvBtFf_DMsDuVIWonkoma/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 17", link: "https://drive.google.com/file/d/1U3wa2henIO-GGJV4wmkWbZd2V6ThzWBA/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 18", link: "https://drive.google.com/file/d/1rh7DxPQQBdLCfR7utfL6wzL_sAjyUPHT/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 19", link: "https://drive.google.com/file/d/1bzVS6DCpNDP0NtjGJNe5YzXSaLBhRqmr/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 20", link: "https://drive.google.com/file/d/1LtoHwU3H2WBUJR4qtPouOe_-Y-f_6_5y/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 21", link: "https://drive.google.com/file/d/1dLmPtwUaERhzSDonSviIWDyP-CfLj5n_/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 22", link: "https://drive.google.com/file/d/1KreYyx8NISNwmDMOUhej-8DHbv4fJGSS/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 23", link: "https://drive.google.com/file/d/1rQ3dAhI0E1sjqEv9H-cTopDDUHLF-vjy/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 24", link: "https://drive.google.com/file/d/1EeD3C9huyI2LJsDfA2u6UbOXMCTjhSY-/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 25", link: "https://drive.google.com/file/d/1K65omzTYQhUoBZAu-5tWeG-lzPWN5EHx/preview", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
   
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
