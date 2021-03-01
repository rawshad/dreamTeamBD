import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
import './Camplist.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Camplist = (props) => {
    const {image, name, salary} = props.information;
    const addPlayer = props.selection;
    return (
        <div className="team-campaign">
                <Card className="players-card">
                    <Card.Img className="players-image" src={image}/>
                    <Card.Body className="players-info">
                        <Card.Title>Name : {name}</Card.Title>
                        <Card.Text><strong>Salary : {salary}</strong></Card.Text>
                        <Button variant="primary" onClick = {()=>addPlayer(props.information)}><FontAwesomeIcon icon={faCoffee} />Add to Team</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Camplist;