import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = {
    "HTML, CSS, JavaScript": [
      {title: 'Список дел', link: 'https://user49324809.github.io/todolist/'},
      {title: 'Математический калькулятор', link: 'https://user49324809.github.io/calculatormath/'},
      {title: 'Галлерея-слайдер', link: 'https://user49324809.github.io/gallery/'},
      {title: 'Крестики-нолики', link: 'https://user49324809.github.io/tic-tac-toe/'},
      {title: 'Мини-блог', link: 'https://user49324809.github.io/mini-blog/'},
      {title: 'Резюме', link: 'https://user49324809.github.io/portfolio_java/'},
      {title: 'Калькулятор пенсий', link: 'https://user49324809.github.io/portfolio_java/'},
      {title: 'Курсы английского', link: 'https://user49324809.github.io/cours/' },
    ],
    PHP: [
      { title: 'Курсы литературы', link: 'https://user49324809.github.io/litcourse/' },
      { title: 'Магазин кружек', link: 'https://github.com/user49324809/cup_shop' },
      { title: 'Магазин велосипедов', link: 'https://github.com/user49324809/bicycle/tree/master'},
    ],
    DateBase: [
      { title: 'Базы данных', link: 'https://github.com/user49324809/portfolio-databases' }
    ],
    Python: [
      { title: 'Список дел', link: 'https://github.com/user49324809/todo-python' }
    ],
    Java: [
      { title: 'Погода', link: 'https://github.com/user49324809/weather' }
    ],
    React: [
      { title: 'Таск-менеджер', link: 'https://user49324809.github.io/task_manager/'},
      { title: 'Контакт-лист', link: 'https://user49324809.github.io/contact_list/'},
      { title: 'Портфолио фотографа', link: 'https://user49324809.github.io/photograph_portfolio/'},
      { title: 'Лента новостей', link: 'https://user49324809.github.io/news-feed/'},
      { title: 'Трэкер расходов', link: 'https://user49324809.github.io/tracker/'},
      { title: 'Магазин чашек', link: 'https://user49324809.github.io/cup_store/'},
      { title: 'Магазин цветов', link: 'https://user49324809.github.io/bike_flowers/'},
      { title: 'График исторических событий', link: 'https://user49324809.github.io/wdb/'},
      { title: 'Расписание врачей', link: 'https://user49324809.github.io/shedule/'}
    ],
    Vue:[
      { title: 'Лист покупок', link: 'https://user49324809.github.io/shoplist/'},
    ]
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-center">О себе</h2>
        <p className="text-center mb-5">Это мои проекты и ссылки на них</p>

        {Object.entries(projects).map(([category, items]) => (
          <div key={category} className="mb-5">
            <h3 className="mb-3">{category} проекты</h3>
            <div className="row">
              {items.map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{project.title}</h5>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-auto"
                      >
                        Перейти к проекту!
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;