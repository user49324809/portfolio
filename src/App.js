import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; 

function App() {
    return (
        <div>
            <header>
                <h1>Портфолио программиста</h1>
                <h2>
                    <a href='https://docs.google.com/document/d/1JuitnXXA9yRL1rOu5ExqaMP1adcXURYteoUq5GGphUw/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                        Резюме
                    </a>
                </h2>
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
                <p>&copy; {new Date().getFullYear()} Наталья</p>
            </footer>
        </div>
    );
}

export default App;

