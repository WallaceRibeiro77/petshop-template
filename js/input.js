document.querySelectorAll('.input-calendar img.open-calendar, .input-date-modal img:last-child')
    .forEach(icon => {
    icon.addEventListener('click', function () {
        // Encontra o input que está antes do ícone dentro do mesmo contêiner
        const input = this.parentElement.querySelector('input');

        if (!input) return;

        if (typeof input.showPicker === 'function') {
        input.showPicker();
        } else {
        input.focus();
        }
    });
    });