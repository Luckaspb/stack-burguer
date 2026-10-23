
// Reinicia a montagem ao voltar para a aba

document.addEventListener('visibilitychange', () => {
  if (document.hidden) return;

  const layers = document.querySelectorAll('.layer');

  layers.forEach(layer => {
    layer.style.animation = 'none';

    // Força o navegador a reiniciar a animação
    void layer.offsetWidth;

    layer.style.animation = '';
  });
});

const menuTabs = document.querySelectorAll('.menu-tab');
const menuCards = document.querySelectorAll('.menu-card');

function showCategory(category) {
  menuCards.forEach(card => {
    card.hidden = card.dataset.category !== category;
  });

  menuTabs.forEach(tab => {
    const active = tab.dataset.category === category;

    tab.classList.toggle('active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
}

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    showCategory(tab.dataset.category);
  });
});

showCategory('burgers');

const abrirMaionese = document.getElementById('abrir-maionese');
const fecharMaionese = document.getElementById('fechar-maionese');
const popupMaionese = document.getElementById('maionese-popup');
const confirmarMaionese = document.getElementById('confirmar-maionese');

abrirMaionese.addEventListener('click', () => {
  popupMaionese.hidden = !popupMaionese.hidden;
  abrirMaionese.setAttribute(
    'aria-expanded',
    String(!popupMaionese.hidden)
  );
});

fecharMaionese.addEventListener('click', () => {
  popupMaionese.hidden = true;
  abrirMaionese.setAttribute('aria-expanded', 'false');
});

confirmarMaionese.addEventListener('click', () => {
  const selecionada = document.querySelector(
    'input[name="tipo-maionese"]:checked'
  );

  if (!selecionada) return;

  console.log('Maionese escolhida:', selecionada.value);

  popupMaionese.hidden = true;
  abrirMaionese.setAttribute('aria-expanded', 'false');

  // Futuramente, adicionaremos ao carrinho.
});
