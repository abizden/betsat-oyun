const hamburgerToggle = () => {
  const hamburger = document.querySelector('.header-switch');

  hamburger.onclick = () => document.body.classList.toggle('menu-show');
};

export const init = () => {
  hamburgerToggle();
};
