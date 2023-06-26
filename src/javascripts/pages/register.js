import { countDownClock } from '../helpers/countDownClock';
/* const gotoNextForm = (prev, next, stepPrev, stepNext) => {
  // Get form through the button
  const prevForm = prev.closest('.form');
  const nextForm = next.closest('.form');
  const nextStep = document.querySelector(`.step--${stepNext}`);
  const prevStep = document.querySelector(`.step--${stepPrev}`);
  // Add active/inactive classes to both previous and next form
  nextForm.classList.add('form-active');
  nextForm.classList.add('form-active-animate');
  prevForm.classList.add('form-inactive');
  // Change the active step element
  prevStep.classList.remove('step-active');
  nextStep.classList.add('step-active');
  // Remove active/inactive classes to both previous an next form
  setTimeout(() => {
    prevForm.classList.remove('form-active');
    prevForm.classList.remove('form-inactive');
    nextForm.classList.remove('form-active-animate');
  }, 1000);
}; */

const cpfChange = (cpfValue) => {
  const numeric = cpfValue.replace(/[^0-9]+/g, '');
  const cpfLength = numeric.length;

  const partOne = `${numeric.slice(0, 3)}.`;
  const partTwo = `${numeric.slice(3, 6)}.`;
  const partThree = `${numeric.slice(6, 9)}-`;

  const cpfInput = document.getElementById('cpfInput'); // here is the CPF ID of the input

  if (cpfLength < 4) {
    cpfInput.value = numeric;
  } else if (cpfLength >= 4 && cpfLength < 7) {
    const formatCPF = partOne
                     + numeric.slice(3);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 7 && cpfLength < 10) {
    const formatCPF = partOne
                     + partTwo
                     + numeric.slice(6);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 10 && cpfLength < 12) {
    const formatCPF = partOne
                     + partTwo
                     + partThree
                     + numeric.slice(9);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 12) {
    const formatCPF = partOne
                     + partTwo
                     + partThree
                     + numeric.slice(9, 11);
    cpfInput.value = formatCPF;
  }
};

export const init = () => {
  const registerCounterBtn = document.getElementById('register-counter');
  const cpfInput = document.getElementById('cpfInput');

  // eslint-disable-next-line no-undef
  $('#tel').mask('(00) 00000-0000');

  if (!registerCounterBtn) return;

  const btnIsVisible = registerCounterBtn.classList.contains('d-block');

  if (btnIsVisible) {
    countDownClock(5, 'minutes');
  }

  cpfInput.addEventListener('input', (e) => cpfChange(e.target.value));
  /* const formBtn1 = document.querySelector('#btn-1');
  const formBtnPrev2 = document.querySelector('#btn-2-prev');
  const formBtnNext2 = document.querySelector('#btn-2-next');
  const formBtn3 = document.querySelector('#btn-3');

  // Button listener of form 1
  formBtn1.addEventListener('click', (e) => {
    gotoNextForm(formBtn1, formBtnNext2, 1, 2);
    e.preventDefault();
  });

  // Next button listener of form 2
  formBtnNext2.addEventListener('click', (e) => {
    gotoNextForm(formBtnNext2, formBtn3, 2, 3);
    e.preventDefault();
  });

  // Previous button listener of form 2
  formBtnPrev2.addEventListener('click', (e) => {
    gotoNextForm(formBtnNext2, formBtn1, 2, 1);
    e.preventDefault();
  });

  // Button listener of form 3
  formBtn3.addEventListener('click', (e) => {
    document.querySelector('.step--3').classList.remove('step-active');
    document.querySelector('.step--4').classList.add('step-active');
    formBtn3.parentElement.style.display = 'none';
    document.querySelector('.form--message').innerHTML = `
   <h1 class="form--message-text">Your account is successfully created </h1>
   `;
    e.preventDefault();
  }); */
};
