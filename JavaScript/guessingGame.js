const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log('Número Secreto:', numeroSecreto);


const entrada = document.getElementById('input');
const botao = document.getElementById('guess');
const mensagem = document.getElementById('message');


botao.addEventListener('click', () => {
  const chute = parseInt(entrada.value, 10);

  if (isNaN(chute) || chute < 1 || chute > 100) {
    mensagem.textContent = 'Por favor, insira um número entre 1 e 100.';
    mensagem.style.color = 'red';
    return;
  }

  if (chute === numeroSecreto) {
    mensagem.textContent = 'Acertou! Parabéns!';
    mensagem.style.color = 'green';
  } else if (chute < numeroSecreto) {
    mensagem.textContent = 'Muito baixo! Tente novamente.';
    mensagem.style.color = 'orange';
  } else {
    mensagem.textContent = 'Muito alto! Tente novamente.';
    mensagem.style.color = 'orange';
  }

  entrada.value = '';
  entrada.focus();
});


// Gerar cor de fundo aleatoria
function randomColorGenerator() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  
  const changeColor = document.getElementById('color-generator');

  changeColor.addEventListener('click', () => {
    const newColor = randomColorGenerator();
    document.body.style.backgroundColor = newColor;
  });