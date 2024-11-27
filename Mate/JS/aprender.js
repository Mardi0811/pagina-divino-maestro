function contar() {
    const lista = document.getElementById('numeros');
    lista.innerHTML = ''; // Limpiar la lista antes de contar
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = i; // Añadir el número a la lista
        lista.appendChild(item); // Añadir el elemento a la lista
    }
}