const themeCheckbox = document.getElementById('theme');
const html = document.documentElement;
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

sun.addEventListener('click', toggleTheme);
moon.addEventListener('click', toggleTheme);

function toggleTheme() {
  const isDark = html.classList.toggle('dark');
  themeCheckbox.checked = isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateImages(isDark);
}

function updateImages(isDark) {
  const imageMap = {
    'texto.png': 'textoW.png',
    'social.png': 'socialW.png',
    'projects.png': 'projectsW.png'
  };

  document.querySelectorAll('img').forEach(img => {
    const currentSrc = img.src;
    const fileName = currentSrc.split('/').pop();
    
    if (isDark && imageMap[fileName]) {
      img.src = currentSrc.replace(fileName, imageMap[fileName]);
    } else if (!isDark && Object.values(imageMap).includes(fileName)) {
      const originalName = Object.keys(imageMap).find(key => imageMap[key] === fileName);
      img.src = currentSrc.replace(fileName, originalName);
    }
  });
}

// Mantener el tema guardado al recargar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    themeCheckbox.checked = true;
    updateImages(true);
  }
});
