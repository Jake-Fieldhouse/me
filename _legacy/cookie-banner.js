window.addEventListener('DOMContentLoaded', function () {
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;
  if (!localStorage.getItem('cookieConsent')) {
    banner.style.display = 'flex';
  }
  var btn = document.getElementById('cookie-accept');
  if (btn) {
    btn.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'true');
      banner.style.display = 'none';
    });
  }
});
