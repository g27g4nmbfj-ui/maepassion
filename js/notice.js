// Eenvoudige "in aanbouw"-melding. Puur informatief: geen cookies, geen tracking,
// geen toestemming die wordt gevraagd of rechten die worden verleend.
(function () {
  if (sessionStorage.getItem('mp-notice-dismissed') === '1') return;

  var overlay = document.createElement('div');
  overlay.className = 'mp-notice-overlay';
  overlay.innerHTML =
    '<div class="mp-notice" role="dialog" aria-modal="true" aria-label="Melding">' +
      '<p>Deze website is nog in aanbouw. Inhoud, prijzen en gegevens kunnen nog wijzigen.</p>' +
      '<button type="button" class="btn mp-notice-close">Doorgaan naar de site</button>' +
    '</div>';
  document.body.appendChild(overlay);

  overlay.querySelector('.mp-notice-close').addEventListener('click', function () {
    sessionStorage.setItem('mp-notice-dismissed', '1');
    overlay.remove();
  });
})();
