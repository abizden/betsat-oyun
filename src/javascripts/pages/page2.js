function handleBtn(btn) {
  const elem = document.querySelector(`#${btn.dataset.for}`);
  const nwValue = +elem.value + (btn.value === '-' ? -1 : 1);
  elem.value = nwValue >= +elem.min ? nwValue : elem.min;
}

function handle(evt) {
  if (evt.target.type === 'button') {
    return handleBtn(evt.target);
  }

  return null;
}

export const init = () => {
  document.addEventListener('click', handle);
};
