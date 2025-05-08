import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Проект 1',
            description: 'Описание проекта 1.',
            link: '#'
        },
        {
            title: 'Проект 2',
            description: 'Описание проекта 2.',
            link: '#'
        },
        {
            title: 'Проект 3',
            description: 'Описание проекта 3.',
            link: '#'
        }
    ];

    return (
        <section id="projects">
            <h2>Проекты</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.title}
                        </a>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
