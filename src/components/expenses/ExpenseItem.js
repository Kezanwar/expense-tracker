import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

    const date = props.expense.date.toDateString();

    const dateArray = date.split(" ");
    const dateDay = dateArray[0];
    const dateNumber = dateArray[2];
    const dateMonth = dateArray[1];
    const dateYear = dateArray[3];
    const thisId = props.expense.id;

    const [vis, setVis] = useState(true);


    const removeExpense = () => {
        setVis(prev => !prev);
        setTimeout(() => {

            // props.liftingIDup(thisId)

            props.updateExpenses((prev) => prev.filter(expense => expense.id !== thisId))

        }, 350);

    }

    return (
        <div className={vis ? "expense-item" : "expense-item hide"}>
            <button onClick={removeExpense} className="backspace">x</button>
            <ExpenseDate year={dateYear} day={dateDay} number={dateNumber} month={dateMonth} />
            <div className="expense-item__description">
                <h2 >{props.expense.title}</h2>
                <div className="expense-item__price">£{props.expense.amount.toFixed(2)}</div>
            </div>
        </div >
    )
}

export default ExpenseItem;