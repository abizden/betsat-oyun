// https://codepen.io/timjackleus/pen/rjmxpW

export const countDownClock = (number = 100, format = 'seconds') => {
  const d = document;
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');
  let countdown;

  function displayTimeLeft(seconds) {
    if (daysElement !== null) {
      daysElement.textContent = Math.floor(seconds / 86400);
    }
    if (hoursElement !== null) {
      hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    }
    if (minutesElement !== null) {
      minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    }
    if (secondsElement !== null) {
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function convertFormat(prmFormat) {
    switch (prmFormat) {
      case 'seconds':
        return timer(number);
      case 'minutes':
        return timer(number * 60);
      case 'hours':
        return timer(number * 60 * 60);
      case 'days':
        return timer(number * 60 * 60 * 24);
      default:
        return timer(number);
    }

    return null;
  }

  convertFormat(format);
};
