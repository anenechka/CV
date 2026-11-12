(() => {
  const key = 'anna-revva-theme';
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem(key);
  const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
  toggle.textContent = dark ? '☾' : '☼';
  toggle.addEventListener('click', () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem(key, next ? 'dark' : 'light');
    toggle.textContent = next ? '☾' : '☼';
  });
})();
