document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-gallery').forEach(gallery => {
        const mainImg = gallery.querySelector('.main-img');
        const thumbs = gallery.querySelectorAll('.thumb');

        thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // animation fade
            mainImg.style.opacity = 0;

            setTimeout(() => {
            mainImg.src = thumb.src;
            mainImg.style.opacity = 1;
            }, 200); // durée intermédiaire pour le fade

            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        });
    });
});
