'use strict'

//MINIMUM

// task #1 -  - Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let a = Number(document.querySelector(`.age`).value);

function checkAge(a) {

  let b;
  if ((a > 0) && (a <= 11)) {
    b = 'child';
  }
  else if ((a >= 12) && (a <= 17)) {
    b = 'teenager';
  }
  else if ((a >= 18) && (a <= 59)) {
    b = 'adult';
  }
  else if ((a >= 60) && (a <= 120)) {
    b = 'an elderly person';
  }
  else if (a >= 120) {
    b = 'the oldest person in the world!';
  }

  document.querySelector(`.task1Answer`).innerHTML = b;
}

// Алгоритм работает, но вывод кривой. Обсудить с Мишей




