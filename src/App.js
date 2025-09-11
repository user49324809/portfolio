import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Task from './components/Task';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Article from './components/Article';
import ArticlePHP from './components/ArticlePHP';
import ArticleReact from './components/ArticleReact';
import './App.css';
import TaskJS from './components/TaskJS';

function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={
        <div>
          <header>
            <h1>Портфолио программиста</h1>
            <h2>
              <a href='https://docs.google.com/document/d/1JuitnXXA9yRL1rOu5ExqaMP1adcXURYteoUq5GGphUw/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                Резюме/
              </a>
            </h2>
          </header>
          <main>
            <About />
            <Skills />
            <Task />
            <Projects />
            <Contact />
          </main>
        </div>
      }/>
      {/* Страницы статей */}
      <Route path="/javascript" element={<Article />} />
      <Route path="/articlephp" element={<ArticlePHP />} />
      <Route path="/articlereact" element={<ArticleReact />} />
      <Route path="/taskjs" element={<TaskJS />} />
    </Routes>
  );
}

export default App;

