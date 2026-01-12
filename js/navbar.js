export function projectsButton() {
    const elementProjectsButton = document.getElementById('projectsBtn');
    if (!elementProjectsButton) return;

    elementProjectsButton.style.cursor = 'pointer';
    elementProjectsButton.addEventListener('click', () => {
        document.querySelector('.home-section').style.display = 'none';
        document.querySelector('.projects-section').style.display = 'block';
        document.querySelector('.about-section').style.display = 'none';
        document.querySelector('.skills-section').style.display = 'none';
        document.querySelector('.contact-section').style.display = 'none';
    });
}

export function aboutButton() {
    const elementAboutButton = document.getElementById('aboutBtn');
    if (!elementAboutButton) return;

    elementAboutButton.style.cursor = 'pointer';
    elementAboutButton.addEventListener('click', () => {
        document.querySelector('.home-section').style.display = 'none';
        document.querySelector('.projects-section').style.display = 'none';
        document.querySelector('.about-section').style.display = 'block';
        document.querySelector('.skills-section').style.display = 'none';
        document.querySelector('.contact-section').style.display = 'none';
    });
}

export function skillsButton() {
    const elementSkillsButton = document.getElementById('skillsBtn');
    if (!elementSkillsButton) return;

    elementSkillsButton.style.cursor = 'pointer';
    elementSkillsButton.addEventListener('click', () => {
        document.querySelector('.home-section').style.display = 'none';
        document.querySelector('.projects-section').style.display = 'none';
        document.querySelector('.about-section').style.display = 'none';
        document.querySelector('.skills-section').style.display = 'block';
        document.querySelector('.contact-section').style.display = 'none';
    });
}

export function contactButton() {
    const elementContactButton = document.getElementById('contactBtn');
    if (!elementContactButton) return;

    elementContactButton.style.cursor = 'pointer';
    elementContactButton.addEventListener('click', () => {
        document.querySelector('.home-section').style.display = 'none';
        document.querySelector('.projects-section').style.display = 'none';
        document.querySelector('.about-section').style.display = 'none';
        document.querySelector('.skills-section').style.display = 'none';
        document.querySelector('.contact-section').style.display = 'block';
    });
}

export function homeButton() {
    const homeButtons = document.querySelectorAll('.return');
    if (!homeButtons.length) return;

    homeButtons.forEach((button) => {
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            document.querySelector('.home-section').style.display = 'block';
            document.querySelector('.projects-section').style.display = 'none';
            document.querySelector('.about-section').style.display = 'none';
            document.querySelector('.skills-section').style.display = 'none';
            document.querySelector('.contact-section').style.display = 'none';
        });
    });
}

