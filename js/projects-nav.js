document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-tabs button');
    const cards = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Masquer toutes les cartes
            cards.forEach(c => c.classList.remove('active'));
            // Afficher la carte correspondante
            document.getElementById(btn.dataset.project).classList.add('active');
        });
    });
});
