document.addEventListener('DOMContentLoaded', function () {
    function handleScrollAnimation() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.75) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });

        const images = document.querySelectorAll('.image');
        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;
            if (imageTop < window.innerHeight * 0.75) {
                image.classList.add('show');
            } else {
                image.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);

    handleScrollAnimation();
});
