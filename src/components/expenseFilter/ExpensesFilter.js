
import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const expenseFilterHandler = (event) => {

        props.setFilterDate(event.target.value);

    }



    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <div className='expense-filter__control-box'>
                    <select value={props.filterDate} onChange={expenseFilterHandler}>
                        <option value='2022'>2022 &#8600; </option>
                        <option value='2021'>2021 &#8600;</option>
                        <option value='2020'>2020 &#8600;</option>
                        <option value='2019'>2019 &#8600;</option>
                    </select>
                    <div className="expensesTotal">{props.filteredAmount > 0 ? 'Year Total:' : ''} <span className='text-gradient' >{props.filteredAmount > 0 ? '£' + props.filteredAmount.toFixed(2) : ''}</span></div>
                </div>
                <div className='expense-filter__control-box' ></div>
                <div className="csv-div text-gradient">
                    <p>Download</p>
                    <i class="fas fa-file-csv"></i>
                </div>
            </div>
        </div>
    );
};

export default ExpensesFilter;