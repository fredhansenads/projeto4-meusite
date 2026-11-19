const botaoMenu = document.querySelector('.botao-menu');
const menuPrincipal = document.querySelector('#menu-principal');

if (botaoMenu && menuPrincipal) {
  function atualizarMenu(aberto) {
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    botaoMenu.textContent = aberto ? 'Fechar menu' : 'Abrir menu';
  }

  botaoMenu.addEventListener('click', function () {
    const estaAberto = botaoMenu.getAttribute('aria-expanded') === 'true';
    atualizarMenu(!estaAberto);
  });

  menuPrincipal.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && botaoMenu.offsetWidth > 0) {
      atualizarMenu(false);
      botaoMenu.focus();
    }
  });

  botaoMenu.closest('header').classList.add('menu-pronto');
}
