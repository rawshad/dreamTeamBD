import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teamlist.css'
const Teamlist = (props) => {
    return (
        <div className="team-selection">
            <h1>Team List for Selected Eleven</h1>
            <div className="profile-summary">
                <h1>Selected Player : {props.name}</h1>
                <h3>Salary : {props.salary} Taka</h3>
            </div>
        </div>
    );
};

export default Teamlist;