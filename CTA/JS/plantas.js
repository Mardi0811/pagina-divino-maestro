function mostrarInfo(part) {
    const infoText = document.getElementById('info-text');
    
    switch(part) {
        case 'root':
            infoText.textContent = 'Las raíces anclan la planta en el suelo y absorben agua y nutrientes.';
            break;
        case 'stem':
            infoText.textContent = 'El tallo sostiene la planta y transporta agua y nutrientes entre las raíces y las hojas.';
            break;
        case 'leaf':
            infoText.textContent = 'Las hojas son responsables de la fotosíntesis, donde las plantas convierten la luz solar en energía.';
            break;
        case 'flower':
            infoText.textContent = 'Las flores son la parte reproductiva de la planta y son responsables de la producción de seeds.';
            break;
        default:
            infoText.textContent = 'Haz clic en una parte de la planta para ver la información aquí.';
    }
}