import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MemberCard = props => {
   
    return (
        <Card>
        { props.members.map(member => (
            <Card className="text-center" key={member.id}>
                    <Card.Header>{member.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{member.email}</Card.Title>
                        <Card.Text>{member.role}</Card.Text>
                        <Button variant="primary">GitHub</Button>
                    </Card.Body>
            </Card>
            ))}
        </Card>
    )
}

export default MemberCard;