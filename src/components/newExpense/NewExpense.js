import React, { useState } from 'react'
import './NewExpense.css'


function NewExpense(props) {


    const [enteredTitle, setEnteredTitle] = useState('')

    const [enteredAmount, setEnteredAmount] = useState('')

    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value)
        setEnteredDate(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        const formArray = [enteredAmount, enteredTitle, enteredDate];

        if (formArray.some(el => el === '')) {
            return
        }

        else {
            const uniq = 'id' + (new Date()).getTime()

            const newExpense = {
                title: enteredTitle,
                amount: parseFloat(enteredAmount),
                date: enteredDate,
                id: uniq
            };

            props.liftNewExpense(newExpense);

            setEnteredAmount('');
            // setEnteredDate('');
            setEnteredTitle('');
            // Two-way binding

        }


    };

    return (
        <div className="new-expense">
            <form onSubmit={submitFormHandler}>
                <div className="new-expense__controls">

                    <div className="new-expense__control">
                        <label className="text-gradient">Expense Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>

                    <div className="new-expense__control">
                        <label className="text-gradient">Expense Amount</label>
                        <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
                    </div>

                    <div className="new-expense__control">
                        <label className="text-gradient">Expense Date</label>
                        <input type='date' value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
                    </div>

                    <div className="new-expense__control btn">
                        <button className="background-gradient" type='submit'>Track Expense <i class="fas fa-pencil-alt"></i></button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default NewExpense
