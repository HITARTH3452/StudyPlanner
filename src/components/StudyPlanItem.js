import React from 'react';

const StudyPlanItem = ({ index, subject, hours, increaseHours, decreaseHours }) => {
    return (
        <div className="study-plan-item">
            <p>{subject}</p>
            <p>{hours} hours</p>
            <div className="button-group">
                <button onClick={() => increaseHours(index)}>+</button>
                <button onClick={() => decreaseHours(index)}>-</button>
            </div>
        </div>
    );
};

export default StudyPlanItem;
