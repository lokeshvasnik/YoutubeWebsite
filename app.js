const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

// Hamburger menu
hamBtn.addEventListener('click', () => {
    const section = document.getElementById('section');
    section.classList.toggle('hide');
    if (section.classList.contains('hide')) {
        console.log('class is toggled to true');
        document.getElementById('HamNav').classList.remove('hide');
    } else {
        console.log('class is toggled to false');
        document.getElementById('HamNav').classList.add('hide');
    }
});

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
});
