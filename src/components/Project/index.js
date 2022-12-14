import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img src={props.images} alt={props.title} />
            </div>
            <div className="content">
                <p className="project-title" id="card-title"> {props.title} </p>
                <p>
                   <a href={props.github}> <img src="https://img.icons8.com/ios/50/000000/github.png" alt="Repository"/> </a>
                   <a href={props.deploy}> <img src="https://img.icons8.com/ios/50/000000/external-link.png" alt="Deployed"/> </a>
                </p>
                <p id="topics">
                    ({props.topics})
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;