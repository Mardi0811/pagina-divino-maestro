// Interactividad de las estrellas
document.querySelectorAll('.estrella').forEach((estrella, index) => {
    estrella.addEventListener('click', () => {
        alert('¡Estrella ' + (index + 1) + ' activada! Algo mágico está por suceder.');
        estrella.style.backgroundColor = '#ff6347'; // Cambia el color de la estrella al hacer clic
    });
});
document.getElementById('musicaFondo').volume = 0.5;