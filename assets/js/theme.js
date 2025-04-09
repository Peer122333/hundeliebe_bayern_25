document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeOptions = document.querySelector('.theme-options');
    const themeOptionsList = document.querySelectorAll('.theme-option');

    // Theme aus dem Local Storage laden
    const savedTheme = localStorage.getItem('theme') || 'default';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateActiveTheme(savedTheme);

    // Theme Toggle Click Handler
    themeToggle.addEventListener('click', () => {
        themeOptions.classList.toggle('active');
    });

    // Theme Option Click Handler
    themeOptionsList.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateActiveTheme(theme);
            themeOptions.classList.remove('active');
        });
    });

    // Click außerhalb des Theme-Switchers schließt das Menü
    document.addEventListener('click', (e) => {
        if (!themeSwitcher.contains(e.target)) {
            themeOptions.classList.remove('active');
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