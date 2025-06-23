import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = {
    React: [
      { title: 'Магазин чашек', link: 'https://user49324809.github.io/cup_store/' },
      { title: 'Магазин цветов', link: 'https://user49324809.github.io/bike_flowers/' },
      { title: 'График исторических событий', link: 'https://user49324809.github.io/wdb/' },
      { title: 'Расписание врачей', link: 'https://user49324809.github.io/shedule/' }
    ],
    JavaScript: [
      { title: 'Курсы английского', link: 'https://user49324809.github.io/cours/' },
    ],
    PHP: [
      { title: 'Магазин кружек', link: 'https://github.com/user49324809/cup_shop' },
      { title: 'Магазин велосипедов', link: 'https://github.com/user49324809/bicycle/tree/master'},
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
                        Перейти к проекту
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