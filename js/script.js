const connectButton = document.querySelector('#connect');
const brainVisual = document.querySelector('.brain-visual');

brainVisual.addEventListener('pointermove', (event) => {
  const bounds = brainVisual.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;

  brainVisual.style.setProperty('--pointer-x', `${x}%`);
  brainVisual.style.setProperty('--pointer-y', `${y}%`);
  brainVisual.classList.add('is-active');
});

brainVisual.addEventListener('pointerleave', () => {
  brainVisual.classList.remove('is-active');
});

connectButton.addEventListener('click', () => {
  const isConnecting = connectButton.textContent === 'CONNECT';
  const status = document.querySelector('.statusline span');

  connectButton.textContent = isConnecting ? 'CONNECTED' : 'CONNECT';
  connectButton.classList.toggle('active', isConnecting);
  status.innerHTML = isConnecting
    ? '<i class="led"></i>UPLINK ESTABLISHED'
    : '<i class="led"></i>UPLINK STABLE';
});

document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', () => {
    key.classList.toggle('active');
  });
});
