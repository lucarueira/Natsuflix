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
    { title: "Episódio 11", link: "episodio11.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 12", link: "episodio12.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 13", link: "episodio13.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 14", link: "episodio14.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 15", link: "episodio15.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 16", link: "episodio16.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 17", link: "episodio17.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 18", link: "episodio18.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 19", link: "episodio19.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 20", link: "episodio20.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 21", link: "episodio21.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 22", link: "episodio22.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 23", link: "episodio23.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 24", link: "episodio24.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
    { title: "Episódio 25", link: "episodio24.html", img: "https://images.nonsensebb.com/uploads/2008/03/7222.jpg" },
   
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
