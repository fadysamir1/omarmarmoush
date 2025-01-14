document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti i link della barra di navigazione
    const navLinks = document.querySelectorAll('nav a');

    // Aggiungi un evento per il passaggio del mouse su ogni link
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#ff0000'; // Colore rosso
        });

        // Ripristina il colore di sfondo quando il mouse esce
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = ''; // Ripristina il colore originale
        });
    });
});
