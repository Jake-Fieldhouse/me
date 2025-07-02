(function() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const THEME_KEY = 'theme';
    const body = document.body;
    const apply = theme => body.setAttribute('data-theme', theme);
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) apply(saved);
    btn.addEventListener('click', () => {
        const current = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        apply(current);
        localStorage.setItem(THEME_KEY, current);
    });
})();
