document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-tabs button');
    const cards = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            cards.forEach(c => c.classList.remove('active'));

            document.getElementById(btn.dataset.project).classList.add('active');
        });
    });
});
