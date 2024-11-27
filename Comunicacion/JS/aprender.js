function reproducirAudio(vocal) {
    const audio = document.getElementById(`audio-${vocal}`);
    audio.play();
    document.getElementById('mensaje').innerText = `Has hecho clic en la vocal: ${vocal.toUpperCase()}`;
}
