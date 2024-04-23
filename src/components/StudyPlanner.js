import React, { useState } from 'react';
import StudyPlanForm from './StudyPlanForm';
import StudyPlanItem from './StudyPlanItem';
import '../App.css';

const StudyPlanner = () => {
    const [studyPlan, setStudyPlan] = useState([]);

    const addStudyPlanItem = (subject, hours) => {
        setStudyPlan([...studyPlan, { subject, hours }]);
    };

    const increaseHours = (index) => {
        const updatedPlan = [...studyPlan];
        updatedPlan[index].hours += 1;
        setStudyPlan(updatedPlan);
    };

    const decreaseHours = (index) => {
        const updatedPlan = [...studyPlan];
        if (updatedPlan[index].hours > 0) {
            updatedPlan[index].hours -= 1;
            setStudyPlan(updatedPlan);
        }
    };

    return (
        <div className="study-planner">
            <h1>My Study Plan</h1>
            <StudyPlanForm addStudyPlanItem={addStudyPlanItem} />
            {studyPlan.map((item, index) => (
                <StudyPlanItem
                    key={index}
                    index={index}
                    subject={item.subject}
                    hours={item.hours}
                    increaseHours={increaseHours}
                    decreaseHours={decreaseHours}
                />
            ))}
        </div>
    );
};

export default StudyPlanner;
