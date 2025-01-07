const inputSaque = document.getElementById('valor-saque');
const btnSacar = document.getElementById('btn-sacar');
const resultado = document.getElementById('resultado');

const cedulas = [100, 50, 20, 10, 5, 2, 1];

function calcularCedulas(valor) {
  const distribuicao = {};
  
  cedulas.forEach(cedula => {
    if (valor >= cedula) {
      distribuicao[cedula] = Math.floor(valor / cedula);
      valor %= cedula;
    }
  });

  return distribuicao;
}

function realizarSaque() {
  const valor = parseInt(inputSaque.value);

  if (isNaN(valor) || valor <= 0) {
    resultado.innerHTML = '<p style="color: red;">Digite um valor válido para o saque.</p>';
    return;
  }

  const distribuicao = calcularCedulas(valor);
  
  resultado.innerHTML = '<h2>Resultado:</h2>';
  for (const cedula in distribuicao) {
    if (distribuicao[cedula] > 0) {
      resultado.innerHTML += `<p>${distribuicao[cedula]} cédula(s) de R$${cedula},00</p>`;
    }
  }
}

btnSacar.addEventListener('click', realizarSaque);

inputSaque.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    realizarSaque();
  }
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