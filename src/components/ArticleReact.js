import React from "react";
import "./ArticleReact.css";
import { Link } from "react-router-dom";

const ArticleReact = () => {
  return (
    <div className="article-container" id="articlereact">
      <h1 className="title">Введение в React</h1>
      <p>
        <strong>JavaScript</strong> — это клиенториентированный язык программирования, который 
        используется для создания интерактивных веб-страниц. Однако при разработке сложных проектов 
        написание кода «с нуля» становится неудобным. Для упрощения работы существует библиотека{" "}
        <strong>React</strong>.
      </p>
      <div className="infographic">
        <div className="icon">⚛️</div>
        <p>
          React — это JavaScript-библиотека для создания пользовательских интерфейсов, разработанная
          Facebook.
        </p>
      </div>
      <h2>1. Установка</h2>
      <p>
        React можно установить через <code>npm</code> (Node Package Manager).  
        Например, установка Bootstrap для стилизации:
      </p>
      <div className="code-block">
        <pre>
{`npm install bootstrap
npm install react`}
        </pre>
      </div>
      <h2>2. Компоненты</h2>
      <p>
        React делится на <strong>компоненты</strong> — небольшие части кода, которые можно многократно использовать.  
        Это упрощает поддержку и масштабирование проектов.
      </p>
      <div className="code-block">
        <pre>
{`// Создание простого компонента
function Hello() {
  return <h1>Привет, мир!</h1>;
}
export default Hello;`}
        </pre>
      </div>
      <h2>3. Подключение компонента</h2>
      <p>
        После создания компонента его можно подключить к главной странице или любому другому месту в приложении:
      </p>

      <div className="code-block">
        <pre>
{`import Hello from "./Hello";
function App() {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  );
}
export default App;`}
        </pre>
      </div>
      <h2>Зачем использовать React?</h2>
      <ul>
        <li>Многократное использование компонентов</li>
        <li>Быстрая разработка с использованием сторонних библиотек</li>
        <li>Гибкая настройка интерфейсов</li>
        <li>Большое сообщество и множество готовых решений</li>
      </ul>
      <div className="infographic">
        <div className="icon">🚀</div>
        <p>React ускоряет процесс разработки и делает код более структурированным.</p>
      </div>
      <Link to="/" className="back-link">← Назад к навыкам</Link>
    </div>
  );
};

export default ArticleReact;