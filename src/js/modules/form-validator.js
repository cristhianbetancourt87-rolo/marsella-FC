const WHATSAPP_NUMBER = '573000000000';

function buildMessage(data) {
  const name = data.get('parentName');
  const whatsapp = data.get('whatsappNumber');
  const age = data.get('childAge');
  const category = data.get('category');
  return [
    'Hola, quiero reclamar el Pase de 2 Clases Gratis.',
    `Nombre: ${name}`,
    `WhatsApp: ${whatsapp}`,
    `Edad: ${age}`,
    `Categoría: ${category}`,
  ].join('\n');
}

export function initFormValidator() {
  const form = document.getElementById('lead-form');
  const errorEl = document.getElementById('form-error');
  if (!form || !errorEl) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      errorEl.textContent = 'Por favor completa todos los campos correctamente.';
      errorEl.hidden = false;
      form.reportValidity();
      return;
    }

    errorEl.hidden = true;
    const message = buildMessage(new FormData(form));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    form.reset();
  });
}
