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

// task 5 - Запитай у користувача (ЦІЛЕ ПОЗИТИВНЕ) число і виведи всі дільники цього числа.

document.querySelector(`.task5 button`).onclick = getDividers;

function getDividers(e) {
  e.preventDefault();

  let num = Number(document.querySelector(`[name="numTask5"]`).value);

  if (Number.isInteger(num) && num > 0) {
    let arrDiv = [];
    for (let i = 0; i <= num; i++) {
      if ((num % i) == 0) {
        arrDiv.push(i);
      }
      document.querySelector(`.task5Answer`).innerHTML = arrDiv;
    }
  } else {
    document.querySelector(`.task5Answer`).innerHTML = 'ERROR! Please enter positive integer number';
  }
}

// task 6 - Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

document.querySelector(`.task6 button`).onclick = checkPalindrome;

function checkPalindrome(e) {
  e.preventDefault();

  let num = document.querySelector(`[name='numTask6']`).value;
  let check = Number(document.querySelector(`[name='numTask6']`).value);

  if (Number.isInteger(check) && (check % 10000 >= 1) && (check < 100000)) {
    let arr = [];
    for (let i = 1; i <= (num.length); i++) {
      arr.push(num[num.length - i]);
    }
    document.querySelector(`.task6Answer`).innerHTML = (num == arr.join(''));
  } else {
    document.querySelector(`.task6Answer`).innerHTML = 'ERROR! Please enter positive integer 5 digit number';
  }
}

/* task 7 - Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    від 200 до 300 - знижка буде 3%; 
    від 300 до 500 - 5%;
    від 500 і вище - 7%.*/

document.querySelector(`.task7 button`).onclick = discountSum;

function discountSum(e) {
  e.preventDefault();

  let sum = Number(document.querySelector(`[name='numTask7']`).value);
  document.querySelector(`.task7Answer`).style.backgroundColor = 'white';

  if (sum > 0) {

    let sumDiscounted = sum;

    if ((sum >= 200) && (sum < 300)) {

      sumDiscounted = Math.round((sum * (0.97)), -2); //неправильно работает!!! ОБСУДИТЬ с МИШЕЙ!
      document.querySelector(`.task7Discount`).innerHTML = `3%`;
      document.querySelector(`.task7Answer`).innerHTML = sumDiscounted;

    } else if ((sum >= 300) && (sum < 500)) {

      sumDiscounted = Math.round((sum * (0.95)), -2); //неправильно работает!!! ОБСУДИТЬ с МИШЕЙ!
      document.querySelector(`.task7Discount`).innerHTML = `5%`;
      document.querySelector(`.task7Answer`).innerHTML = sumDiscounted;

    } else if ((sum >= 500)) {

      sumDiscounted = Math.round((sum * (0.93)), -2); //неправильно работает!!! ОБСУДИТЬ с МИШЕЙ!
      document.querySelector(`.task7Discount`).innerHTML = `7%`;
      document.querySelector(`.task7Answer`).innerHTML = sumDiscounted;

    } else if ((sum < 200)) {
      document.querySelector(`.task7Discount`).innerHTML = `NO DISCOUNT`;
      document.querySelector(`.task7Answer`).innerHTML = sumDiscounted;
    }

  } else {
    document.querySelector(`.task7Answer`).style.backgroundColor = 'red';
    document.querySelector(`.task7Answer`).innerHTML = 'ERROR! Please enter positive number';
  }

}

// task 8 - Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// решил не делать проверку чисел

document.querySelector(`.task8 button`).onclick = getStatistics;

function getStatistics(e) {
  e.preventDefault();

  let nums = document.querySelector(`.numsTask8`).value; // не понимаю почему не работает
  console.log(`nums = `,  nums )
}
