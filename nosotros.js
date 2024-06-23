// SCROLL

const images = document.querySelectorAll(".heroFigure");

function triggerAnimation(entries) {
    entries.forEach(entry => {
        const image = entry.target.querySelector('img');
        if (entry.isIntersecting) {
            image.classList.add('unset');
        } else {
            image.classList.remove('unset');
        }
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image => {
    observer.observe(image);
});

