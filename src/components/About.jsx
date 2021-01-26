import React from 'react';
import { Card } from 'react-bootstrap';

function About(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://scontent.fist6-1.fna.fbcdn.net/v/t1.0-9/14639624_577569209117273_3218123923664232577_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=8EBqD__KGwUAX-nbR62&_nc_ht=scontent.fist6-1.fna&oh=057a7afdc2c18337f9c4c36e715cd557&oe=603453FA" />
            <Card.Body>
                <Card.Title>Software Developer</Card.Title>
                <Card.Text>
                    Hello I am Mahmut ARSLAN.  I am a web software developer. I mainly develop web applications.
                    I am a responsible person who never gets tired of trying and applying all kinds of new technologies open to development, who thinks that success is just about trying and applying
              </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About