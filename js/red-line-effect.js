export function displayHeroLine() {
    const line = document.querySelector('.hero-line');
    if (!line) return;

    // Étirement
    line.classList.add('active');

    // Rétractation immédiate après la fin de l'étirement
    setTimeout(() => {
        line.classList.remove('active');
        line.classList.add('retract');
    }, 1000); // exactement la durée de l'étirement
}

