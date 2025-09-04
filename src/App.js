import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Article from './components/Article';
import './App.css';
import ArticlePHP from './components/ArticlePHP';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <header>
            <h1>Портфолио программиста</h1>
            <h2>
              <a href='https://docs.google.com/document/d/1JuitnXXA9yRL1rOu5ExqaMP1adcXURYteoUq5GGphUw/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                Резюме
              </a>
            </h2>
          </header>
          <main>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      }/>
      <Route path="/javascript" element={<Article />} />
      <Route path="/articlephp" element={<ArticlePHP />} />
    </Routes>
  );
}

export default App;

