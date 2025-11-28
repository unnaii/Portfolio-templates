const openMenuButton = document.getElementById('open-menu');
const menuImage = document.querySelector('img[src*="start-menu.jpg"]');

openMenuButton.addEventListener('click', () => {
    if (menuImage.style.display === 'none' || menuImage.style.display === '') {
        menuImage.style.display = 'block';
    } else {
        menuImage.style.display = 'none';
    }
});