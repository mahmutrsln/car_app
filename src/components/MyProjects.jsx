import React from 'react'
import { Card } from 'react-bootstrap';
import myProjectData from '../data/myproject.json'


function MyProjects(props) {

    const myproject = myProjectData.projects.map((data, index) =>
        <Card key={index} className="mt-3">
            <Card.Header>{data.name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        <a className="btn btn-default" href={data.projecturl} target="_blank">
                            {data.projecturl}
                        </a>
                    </p>
                    <footer className="blockquote-footer">
                        {data.technologies}
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );



    return (
        <>
            { myproject}
        </>
    );
}

export default MyProjects
