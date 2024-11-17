let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-70px'; // Ocultar header
    } else {
        header.style.top = '0'; // Mostrar header
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evitar valores negativos
});

document.getElementById('toggleMenu').addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        navMenu.classList.remove('slide-in');
        navMenu.classList.add('slide-out');
        
    } else {
        navMenu.style.display = 'block';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navMenu.classList.remove('slide-out');
        navMenu.classList.add('slide-in');
        
    }
});
    




