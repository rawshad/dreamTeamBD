import React from 'react';
import './Budget.css';
const Budget = (props) => {
    const total = props.total;
    let totalBudget = 0;
    for (let i = 0; i < total.length; i++) {
        const price = total[i];
        totalBudget = totalBudget + price.salary; 
    }
    return (
        <div className="mb-5 pt-5">
            <h1>Total Budget : {totalBudget}</h1>
            <h2>Total Selected Player : {total.length}</h2>
        </div>
    );
};

export default Budget;