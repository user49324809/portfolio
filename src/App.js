import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Добавьте собственные стили сюда

function App() {
    return (
        <div>
            <header>
                <h1>Портфолио программиста</h1>
                <nav>
                    <ul>
                        <li><a href="#about">О себе</a></li>
                        <li><a href="#skills">Навыки</a></li>
                        <li><a href="#projects">Проекты</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Ваше Имя</p>
            </footer>
        </div>
    );
}

export default App;

