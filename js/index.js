import { projectsButton, aboutButton, skillsButton, contactButton, homeButton } from './navbar.js';
import { displayHeroLine } from './red-line-effect.js';

document.addEventListener('DOMContentLoaded', () => {
    homeButton();
    projectsButton();
    aboutButton();
    skillsButton();
    contactButton();
    displayHeroLine();
});
