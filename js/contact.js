document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');
  const data = Object.fromEntries(new FormData(form).entries());

  status.textContent = 'Bezig met versturen...';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error('Verzenden mislukt');

    status.textContent = 'Bedankt! Je bericht is verstuurd.';
    form.reset();
  } catch (err) {
    status.textContent = 'Er ging iets mis. Probeer het later opnieuw of mail direct naar info@maepassion.nl.';
  }
});
