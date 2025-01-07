function gerarCorAleatoria() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  
  const botao = document.getElementById('color-generator');

  botao.addEventListener('click', () => {
    const newColor = gerarCorAleatoria();
    document.body.style.backgroundColor = newColor;
  });