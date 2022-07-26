'use strict'

//MINIMUM

// task #1 -  - Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.



function checkAge() {
  let age = Number(document.querySelector(`.age`).value);
  let group;
  if ((age > 0) && (age <= 11)) {
    group = 'child';
  }
  else if ((age >= 12) && (age <= 17)) {
    group = 'teenager';
  }
  else if ((age >= 18) && (age <= 59)) {
    group = 'adult';
  }
  else if ((age >= 60) && (age <= 120)) {
    group = 'an elderly person';
  }
  else if (age >= 120) {
    group = 'the oldest person in the world!';
  }
  document.querySelector(`.task1Answer`).innerHTML = group;
}


//task #2 - Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

document.querySelector(`.task2 button`).onclick = checkSymbol;

function checkSymbol(e) {
  e.preventDefault();

  let c = document.querySelector(`[name='num']`).value;
  let d;

  switch (c) {
    case 0:
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
  document.querySelector(`.task2Answer`).innerHTML = d;
}

// task 3 - Підрахуй суму всіх ЦІЛИХ (УТОЧНИЛ УСЛОВИЕ ЗАДАЧИ ИНАЧЕ ОТВЕТ БУДЕТ - БЕСКОНЕЧНОСТЬ) чисел в заданому користувачем діапазоні.

function sumRange() {
  let num1 = Number(document.querySelector(`[name="rangeNum1"]`).value);
  let num2 = Number(document.querySelector(`[name="rangeNum2"]`).value);
  let sum;
  if (num1 === num2) {
    sum = num1
  }
  else if (num1 > num2) {
    sum = num2;
    for (let i = num2; i < num1; i++) { sum = sum + i + 1; }
  }
  else if (num2 > num1) {
    sum = num1;
    for (let i = num1; i < num2; i++) { sum = sum + i + 1; }
  }
  document.querySelector(`.task3Answer`).innerHTML = sum;
}

// task 4 - Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function gcd() {
  let num1 = Number(document.querySelector(`[name="num1"]`).value);
  let num2 = Number(document.querySelector(`[name="num2"]`).value);
  if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0) {

    //для упростоты пока без проверок, просто считаем, что num1>num2
    if (num1 == num2) {
      document.querySelector(`.task4Answer`).innerHTML = num2;
    }

    else {

      if (num1 < num2) {
        [num1, num2] = [num2, num1];
      }

      while ((num1 - num2) !== num2) {
        if ((num1 - num2) > num2) {
          num1 = (num1 - num2)
        } else {
          let t = num1 - num2;
          num1 = num2;
          num2 = t;
        }
      }

      document.querySelector(`.task4Answer`).innerHTML = num2;
    }

  } else {
    document.querySelector(`.task4Answer`).innerHTML = 'ERROR! Please enter positive integer numbers';
  }
}