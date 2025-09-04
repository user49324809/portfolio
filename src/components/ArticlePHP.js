import React from "react";
import "./ArticlePHP.css";

const ArticlePHP = () => {
  return (
    <div className="article-container" id="articlephp">
      <h1 className="title">Основные возможности PHP</h1>
      <p>
        Для создания сайтов обычно используют <strong>клиентскую и серверную часть</strong>. 
        Серверная часть обрабатывает данные, хранит информацию на базе данных или через API, и отвечает клиенту. 
        <strong>PHP</strong> — один из самых популярных языков для разработки серверной логики.
      </p>
      <h2>1. Хранение данных</h2>
      <p>
        PHP взаимодействует с различными типами хранилищ:
      </p>
      <ul>
        <li><strong>SQL:</strong> MySQL, PostgreSQL — таблицы, строки, реляционные связи</li>
        <li><strong>NoSQL:</strong> MongoDB, хранение данных в формате JSON или объектах</li>
      </ul>
      <p>Преимущество хранения данных на сервере — долговременность и структурированность информации. Можно хранить:</p>
      <ul>
        <li>Данные пользователей</li>
        <li>Обращения к администрации</li>
        <li>Комментарии и сообщения</li>
      </ul>
      <div className="infographic">
        <div className="icon">💾</div>
        <p>Серверная часть отвечает за хранение и обработку данных, клиентская — за отображение и взаимодействие.</p>
      </div>
      <h2>2. Работа с конфиденциальными данными</h2>
      <p>
        Для паролей и другой чувствительной информации используют:
      </p>
      <ul>
        <li><strong>Сессии и куки:</strong> позволяют хранить данные о пользователе между запросами</li>
        <li><strong>Хэширование:</strong> безопасное хранение паролей в базе данных</li>
      </ul>
      <div className="code-block">
        <p>Пример хэширования пароля в PHP:</p>
        <pre>
{`<?php
$password = "mySecretPassword";
$hashed = password_hash($password, PASSWORD_DEFAULT);
echo $hashed;
?>`}
        </pre>
      </div>
      <h2>3. Примеры работы с данными</h2>
      <p>Пример подключения к MySQL через PDO:</p>
      <div className="code-block">
        <pre>
{`<?php
$host = 'localhost';
$db = 'users';
$user = 'root';
$pass = '';
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    echo "Соединение установлено!";
} catch (PDOException $e) {
    echo "Ошибка: " . $e->getMessage();
}
?>`}
        </pre>
      </div>
      <div className="infographic">
        <div className="icon">🔒</div>
        <p>Используя сессии, куки и хэширование, вы защищаете данные пользователей.</p>
      </div>
    </div>
  );
};

export default ArticlePHP;