import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";

const Article = () => {
  return (
    <div className="article-container" id="article">
      <h1 className="title">Введение в JavaScript: что это и зачем нужен</h1>
      <p>
        Программирование предлагает широкий спектр тем для изучения. Существует множество языков, ориентированных либо на клиентскую часть (frontend), либо на серверную (backend). <strong>JavaScript</strong> в основном используют для работы с клиентской частью веб-приложений. Он обеспечивает взаимодействие с пользователем, обработку событий, динамическое изменение контента и хранение данных.
      </p>
      <ul>
        <li>Обрабатывать формы</li>
        <li>Реагировать на клики и другие действия пользователя</li>
        <li>Хранить данные для товаров, услуг или любой другой информации на стороне клиента</li>
      </ul>
      <h2>1. Переменные</h2>
      <p>Переменные позволяют хранить данные в программе. Существует несколько видов переменных:</p>      
      <div className="code-block">
        <p><strong>const</strong> — значение переменной нельзя изменить после присвоения:</p>
        <pre>
            {
                `const name = "Natalia";
                const age = 32;`
            }
        </pre>

        <p><strong>let</strong> — значение переменной можно изменять:</p>
        <pre>
        {
            `let favouriteFood = "pizza";
            favouriteFood = "ice cream";`
        }
        </pre>
      </div>
      <h2>2. Массивы и объекты</h2>
      <p>Массивы позволяют хранить коллекцию однотипных данных:</p>
      <pre>
        {
        `const food = ["apple", "orange"];`
        }
      </pre>

      <p>Объекты позволяют хранить несколько связанных данных с ключами:</p>
      <pre>
        {
            `const food = {
            fruits: ["apple", "orange"],
            vegetables: ["potatoes", "tomatoes"]
            };`
        }
      </pre>

      <h2>3. Функции</h2>
      <p>Функции — это блоки кода, которые выполняют определённые действия. Пример функции, добавляющей число в массив:</p>
      <pre>
        {
            `const array = [];
            function addNumber(number) {
            array.push(number);
            }
            addNumber(888);
            console.log(array);`
        }
      </pre>
      <h2>Зачем это нужно</h2>
      <ul>
        <li>Хранить данные и работать с ними</li>
        <li>Создавать интерактивные веб-страницы</li>
        <li>Делать интерфейс удобным и динамичным для пользователя</li>
      </ul>
      <div className="infographic">
        <div className="icon">💻</div>
        <p>JavaScript — основной инструмент для разработки современных сайтов и приложений.</p>
      </div>
      <Link to="/" className="back-link">← Назад к навыкам</Link>
    </div>
  );
};

export default Article;