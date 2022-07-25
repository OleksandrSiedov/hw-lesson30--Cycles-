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

//task #2 - Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let c = Number(document.querySelector(`.num`).value);

function checkSymboll(c) {

  let d;
  switch (c) {
    case '0':
      d = ')';
      break;
    case '1':
      d = '!';
      break;
    case '2':
      d = '@';
      break;
    case '3':
      d = '#';
      break;
    case '4':
      d = '$';
      break;
    case '5':
      d = '%';
      break;
    case '6':
      d = 'ˆ';
      break;
    case '7':
      d = '&';
      break;
    case '8':
      d = '*';
      break;
    case '9':
      d = '(';
      break;
    default:
      d = 'Incorrect data. Please enter number from 0 to 9';
      break;
  }
}
  document.querySelector(`.task2Answer`).innerHTML = d;

  