// Navegació entre pantalles
function anarA(pantalla) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + pantalla).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navBtn = document.querySelector('.nav-item[data-nav="' + pantalla + '"]');
  if (navBtn) navBtn.classList.add('active');

  window.scrollTo(0, 0);
}

document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', () => anarA(el.dataset.nav));
});

// Dades d'exemple temporals (les substituirem per dades reals al PAS 7)
document.getElementById('sum-cost').textContent = '0,00 €';
document.getElementById('sum-litres').textContent = '0,0 L';
document.getElementById('sum-km').textContent = '0 km';
document.getElementById('sum-consum').textContent = '— L/100km';
