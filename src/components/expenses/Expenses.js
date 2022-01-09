import React from 'react'
import ExpenseItem from './ExpenseItem';
import { byDate } from '../Utility/Utility';
import './Expenses.css';

const Expenses = (props) => {
    // filter objects by state of year dropdown in expense filter
    const filteredObjects = props.expenses.filter(object => {
        // if (object.date.type)
        return object.date.split('-')[0] === props.filterDate
    });
    // sort filtered object by date for UI rendering
    filteredObjects.sort(byDate);

    return (
        <div className="expenses">
            {filteredObjects.length > 0 ?
                filteredObjects.map(object => {
                    return <ExpenseItem key={object.id} updateExpenses={props.updateExpenses} expense={object} />
                })
                :
                <div className="expenses__msg"><p>No expenses tracked for <span className="text-gradient">{props.filterDate}</span>...</p></div>}
        </div>
    )
}

export default Expenses;