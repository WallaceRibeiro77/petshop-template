document.querySelector('.open-calendar').addEventListener('click', function () {
    const input = document.querySelector('#data-agenda');
    if (input.showPicker) {
      input.showPicker(); // <-- Isso é permitido porque estamos dentro de um evento de clique
    } else {
      input.focus(); // fallback para navegadores sem suporte
    }
  });
  