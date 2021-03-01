import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teamlist.css'
const Teamlist = (props) => {
    return (
        <div className="team-selection mb-5">
            <div className="profile-summary">
                <h3>Selected Player :<br></br> {props.name}</h3>
                <br></br>
                <h4>Salary : {props.salary} Taka</h4>
            </div>
        </div>
    );
};

export default Teamlist;