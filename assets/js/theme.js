document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeOptions = document.querySelector('.theme-options');
    const themeOptionsList = document.querySelectorAll('.theme-option');

    // Theme aus dem Local Storage laden
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.classList.toggle('active', savedTheme === 'dark');

    // Theme Toggle Click Handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.classList.toggle('active');
        
        // Animation für die Pfoten
        const paws = themeToggle.querySelectorAll('.theme-icon');
        paws.forEach(paw => {
            paw.style.animation = 'none';
            paw.offsetHeight; // Trigger reflow
            paw.style.animation = null;
        });
    });

    // Theme Option Click Handler
    themeOptionsList.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateActiveTheme(theme);
            themeOptions.classList.remove('active');
            themeToggle.classList.remove('active');
        });
    });

    // Click außerhalb schließt das Menü
    document.addEventListener('click', (e) => {
        if (!themeSwitcher.contains(e.target)) {
            themeOptions.classList.remove('active');
            themeToggle.classList.remove('active');
        }
    });

    // Aktives Theme aktualisieren
    function updateActiveTheme(theme) {
        themeOptionsList.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            }
        });
    }
}); 