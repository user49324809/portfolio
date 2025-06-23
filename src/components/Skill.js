import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skill = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-center">О себе</h2>
        <div className="row align-items-center">
            <div className="col-md-8">
                <p className="lead">
                Привет! Я программист с опытом работы в веб-разработке.
                Мои навыки включают <strong>React</strong>, <strong>JavaScript</strong> и другие современные технологии.
                Училась на курсах <em>ЦЗН</em> и <em>Академии ТОП</em> по направлению <strong>Fullstack-разработки</strong>.
                Делала сайты как на фронтенде, так и на бэкенде, подключала базы данных <strong>MySQL</strong>.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;