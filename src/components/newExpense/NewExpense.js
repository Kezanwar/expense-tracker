import React from 'react'
import './NewExpense.css'


function NewExpense(props) {



    const titleChangeHandler = (event) => {
        props.setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        props.setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        props.setEnteredDate(event.target.value);
    };

    const submitFormHandler = (event) => {

        event.preventDefault();
        const uniq = 'id' + (new Date()).getTime()

        props.updateExpenses((prev) => {
            prev.push({
                title: props.enteredTitle,
                amount: parseFloat(props.enteredAmount),
                date: new Date(props.enteredDate),
                id: uniq
            })
            return prev
        });

        props.setEnteredAmount('');
        // props.setEnteredDate('');
        props.setEnteredTitle('');
        // Two-way binding
    };

    return (
        <div className="new-expense">
            <form onSubmit={submitFormHandler}>
                <div className="new-expense__controls">

                    <div className="new-expense__control">
                        <label className="text-gradient">Expense Title</label>
                        <input type='text' value={props.enteredTitle} onChange={titleChangeHandler} />
                    </div>

                    <div className="new-expense__control">
                        <label className="text-gradient">Expense Amount</label>
                        <input type='number' value={props.enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
                    </div>

                    <div className="new-expense__control">
                        <label className="text-gradient">Expense Date</label>
                        <input type='date' value={props.enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
                    </div>

                    <div className="new-expense__control btn">
                        <button className="custom-btn btn-6 background-gradient" type='submit'>Track Expense <i class="fas fa-pencil-alt"></i></button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default NewExpense
