// Lista de links dos episódios
const episodios = [
    { title: "T1 Episódio 1 ", link: "https://drive.google.com/file/d/1ToT63ECwowG2BqRGdnzweoQg6XoJh0cR/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 2 ", link: "https://drive.google.com/file/d/14faPJCPq5YdOAHflCzkzipZ-teN5RAtC/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 3 ", link: "https://drive.google.com/file/d/1Emo_P647RjjYM3Yg_4BR_1GkLnUHXAH6/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 4 ", link: "https://drive.google.com/file/d/1S_7z-otH-GNJwEjZo2-FJfQEwA5gWNtf/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 5 ", link: "https://drive.google.com/file/d/1pXwOMdVGp5GZpAAI-xR5ArvDXcycJTuv/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 6 ", link: "https://drive.google.com/file/d/1RxZ4_nPN7-r8Q9gwj2kxP5CamQNvq7RR/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 7 ", link: "https://drive.google.com/file/d/1O7v7L0Px9FtDbC6A3LmL_0Y0Q_WO0PoI/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 8 ", link: "https://drive.google.com/file/d/1if0cNWHuwSsMS081NycpQQb4OijlVGGP/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 9 ", link: "https://drive.google.com/file/d/1npZufR8NSVLfwxdkzzDa-1U7X8MxoFn3/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 10 ", link: "https://drive.google.com/file/d/1hb_6zcXm3HJmW4CA8gMSmL5qe79hiPyB/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 11 ", link: "https://drive.google.com/file/d/1vJA5MsH-FWjWZZdplnnQ74SUo6jhb6Qk/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 12 ", link: "https://drive.google.com/file/d/18QB6ic-XDOyAR-_3ed7UwEt-u3vPETbS/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 13 ", link: "https://drive.google.com/file/d/1_OWgqu5R3orLrcMOFFdC8q8xUL-qQRh2/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 14 ", link: "https://drive.google.com/file/d/1ALHlPS8rWFKJAm6OpU6-768nwiFwgPmq/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 15 ", link: "https://drive.google.com/file/d/1ly2_GYCPtdQuuQlwNms8vOYqEaSDjkRg/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 16 ", link: "https://drive.google.com/file/d/1Y18W0LyjSA01wN9rzRBsZnGU7ECGpR_U/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 17 ", link: "https://drive.google.com/file/d/1bwGngTEbk_3JQDeQPwM5qgEEf0AAT6Fp/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 18 ", link: "https://drive.google.com/file/d/12QrXpjB53G-GyVQ8OkTqcAZWr3-ahUKu/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 19", link: "https://drive.google.com/file/d/11yoeRohrtZTYpkdW4d8lOWvDkaJtd3vH/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 20 ", link: "https://drive.google.com/file/d/1M8z66-uPi_NUg20jwco_6ios_NS8d-fT/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 21 ", link: "https://drive.google.com/file/d/1anOBrRsesauguD4fE9FZYhOP53TtZKiU/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 22 ", link: "https://drive.google.com/file/d/1WXoYB8UWICjVphxrsC1mh9Z3jVECNVBv/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 ESPECIAL 22 ", link: "https://drive.google.com/file/d/1R75k1Zo32UNm5FaofdGyOZ3tULdx0YrE/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 23 ", link: "https://drive.google.com/file/d/19xNuz3n1d-hXZ-fwE16vvdA-xYmyFYMM/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 24", link: "https://drive.google.com/file/d/1biqnv8vr-BzNFTpy9lQ8xnDFZj9azf3w/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T1 Episódio 25 ", link: "https://drive.google.com/file/d/1xIutRNcdmIXtVUYINhElLyRz45sVcRN2/preview", img: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45.jpg" },
    { title: "T2 Episódio 01 ", link: "https://drive.google.com/file/d/1teEPU8fxOuA8988IkAl8KHiZfsxlO5-S/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 02 ", link: "https://drive.google.com/file/d/1pmB6O0ScAYSLJXeRcJ3pnX4ftavOeoHy/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 03 ", link: "https://drive.google.com/file/d/1zIMRMfyPK7-QvR-GoDKVB4PT0uL9x72P/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" }, 
    { title: "T2 Episódio 04 ", link: "https://drive.google.com/file/d/1XlE-g4-313N3to3eK14-KXUGBx6TTaUr/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 05 ", link: "https://drive.google.com/file/d/1AcX854fPR1HFiBLrLfWHH_qtsHarPdPc/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 06 ", link: "https://drive.google.com/file/d/1bknnV0nMdtf-97KSMl6ac6X_pyWczRy7/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 07 ", link: "https://drive.google.com/file/d/109Zhv59On4uw0T_HBiGTADEWvoHi9254/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 08 ", link: "https://drive.google.com/file/d/18iG2tiG5Cnhc0kgFQIqjRiUTNaFgo14y/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 09 ", link: "https://drive.google.com/file/d/16ZNERJotIWvakYMQr0mkGdOVlSRbyKhP/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    { title: "T2 Episódio 10 ", link: "https://drive.google.com/file/d/1Om0UHLtUqPBn58wlefDRnsQL8Yp7bnkK/preview", img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpg" },
    








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
