let clickCount = 0;

document.getElementById('roundButton').addEventListener('click', () => {
  clickCount++;

  if (clickCount === 15) {
    // Redirecionar para o link após 15 cliques
    window.location.href = 'https://youtu.be/itJ_DJVKAW0?si=QunSw7xSrK34CuGF';
  } else {
    // Alternar a classe 'clicked' para mudar a posição do botão
    document.getElementById('roundButton').classList.toggle('clicked');
  }
});

document.getElementById('roundButton').addEventListener('mouseover', () => {
  // Mudar a cor ao passar o mouse
  document.getElementById('roundButton').style.backgroundColor = 'deepskyblue';
});

document.getElementById('roundButton').addEventListener('mouseout', () => {
  // Restaurar a cor ao retirar o mouse
  document.getElementById('roundButton').style.backgroundColor = 'lightblue';
});


document.getElementById('roundButton').addEventListener('click', () => {
  clickCount++;

  // Ajusta a nova posição do botão
  const newPosition = `calc(50% + ${clickCount * 10}px)`;
  
  // Aplica a classe 'clicked' e ajusta a posição
  document.getElementById('roundButton').classList.toggle('clicked');
  document.getElementById('roundButton').style.top = newPosition;
  document.getElementById('roundButton').style.left = newPosition;
});

document.getElementById('roundButton').addEventListener('mouseover', () => {
  // Muda a cor ao passar o mouse
  document.getElementById('roundButton').style.backgroundColor = 'lightgreen';
});

document.getElementById('roundButton').addEventListener('mouseout', () => {
  // Restaura a cor ao retirar o mouse
  document.getElementById('roundButton').style.backgroundColor = 'lightblue';
});

