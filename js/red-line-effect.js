export function displayHeroLine() {
    const line = document.querySelector('.hero-line');
    if (!line) return;

    // Étirement
    line.classList.add('active');

    // Rétractation 
    setTimeout(() => {
        line.classList.remove('active');
        line.classList.add('retract');
    }, 1000); // exactement la durée de l'étirement
}

