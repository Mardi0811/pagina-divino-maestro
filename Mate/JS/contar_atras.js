function contarHaciaAtras() {
    const lista = document.getElementById('numeros');
    lista.innerHTML = ''; // Limpiar la lista
    for (let i = 10; i >= 1; i--) {
        const item = document.createElement('li');
        item.textContent = i; // Añadir el número a la lista
        lista.appendChild(item); // Añadir el elemento a la lista
    }
}