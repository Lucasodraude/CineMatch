window.onload = function() {
    const resultadoFilme = localStorage.getItem('resultadoFilme');
    if (resultadoFilme) {
        document.getElementById('resultado').innerText = `Você deveria assistir: ${resultadoFilme}`;
    } else {
        document.getElementById('resultado').innerText = "Nenhum resultado disponível.";
    }
    localStorage.removeItem('resultadoFilme');
};
