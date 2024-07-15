document.getElementById('slider-input').addEventListener('input', function(e) {
  const val = e.target.value;
  e.target.style.setProperty('--value', val);
  document.documentElement.style.setProperty('--thumb-pos', `${val}%`);
  const tooltip = e.target.nextElementSibling;
  tooltip.setAttribute('value', val);
  tooltip.style.setProperty('--thumb-pos', `${val}%`);
});