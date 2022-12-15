import React from 'react';
import ProjectCards from '../../components/ProjectCards';
import portfolio from '../../portfolio.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {

    return (
        <section>
            <div  className="project">
                <h1 className='title'> Projects Portfolio: brianthoang </h1>
                <hr></hr>
            </div>

            <Wrapper id="card-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} images={project.images} title={project.title} github={project.github} deployed={project.deployed} />
                ))}
            </Wrapper>
        </section>
    )
}

export default Portfolio;