import React from "react";
import { Link } from "react-router-dom";
import './Task.css';
const TaskJS = () => {
  return (
    <div className="article-container" id="taskjs">
      <h1 className="title">JavaScript: Примеры задач</h1>
      {/* Раздел: Массивы */}
      <h2>Алгоритмы с массивами</h2>
      <div className="task-block">
        <h3>1. Найти дубликаты</h3>
        <p>Дан массив чисел. Найди и выведи все элементы, которые встречаются больше одного раза.</p>
        <div className="code-block">
          <pre>{`const numbers = [1, 1, 2, 2, 3, 4, 5, 6];
const counts = numbers.reduce((acc, item) => {
  if (acc[item]) acc[item]++;
  else acc[item] = 1;
  return acc;
}, {});
const duplicates = Object.keys(counts).filter(key => counts[key] > 1);
console.log(duplicates);`}</pre>
        </div>
      </div>
      {/* Раздел: Строки */}
      <h2>Работа со строками</h2>
      <div className="task-block">
        <h3>2. Развернуть строку</h3>
        <p>Напиши функцию, которая принимает строку и возвращает её в обратном порядке.</p>
        <div className="code-block">
          <pre>{`const str = "Good morning!";
const reverse = str.split('').reverse().join('');
console.log(reverse);`}</pre>
        </div>
        <h3>3. Проверка палиндрома</h3>
        <p>Функция принимает строку и возвращает true, если это палиндром, и false — если нет.</p>
        <div className="code-block">
          <pre>{`function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j]) return false;
    j--;
  }
  return true;
}
console.log(isPalindrome("шалаш")); 
console.log(isPalindrome("дом"));`}</pre>
        </div>
      </div>
      {/* Раздел: Функции */}
      <h2>Функции и числа</h2>
      <div className="task-block">
        <h3>4. Подсчет гласных</h3>
        <p>Напиши функцию, которая принимает строку и возвращает количество гласных букв в ней.</p>
        <div className="code-block">
          <pre>{`function wordVowels(str) {
  const vowels = "аоуыэеяию";
  return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(wordVowels("Гласные"));`}</pre>
        </div>

        <h3>5. Факториал числа</h3>
        <p>Напиши функцию, которая принимает число n и возвращает n! (произведение всех чисел от 1 до n).</p>
        <div className="code-block">
          <pre>{`function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`}</pre>
        </div>
      </div>

      <Link to="/" className="back-link">← Назад к задачам</Link>
    </div>
  );
};

export default TaskJS;