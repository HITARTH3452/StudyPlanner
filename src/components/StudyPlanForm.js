import React, { useState } from 'react';

const StudyPlanForm = ({ addStudyPlanItem }) => {
    const [subject, setSubject] = useState('');
    const [hours, setHours] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subject.trim() !== '') {
            addStudyPlanItem(subject, hours);
            setSubject('');
            setHours(0);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter Hours"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default StudyPlanForm;
