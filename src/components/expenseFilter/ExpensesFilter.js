
import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


    // filter objects by state of year dropdown in expense filter

    const filteredObjects = props.expenses.filter(object =>
        object.date.toDateString().split(" ")[3] === props.filterDate);

    // sort by date helper function

    function byDate(a, b) {
        return a.date.valueOf() - b.date.valueOf();
    }

    filteredObjects.sort(byDate);

    function simpleArraySum(ar) {
        var sum = 0;
        for (var i = 0; i < ar.length; i++) {
            sum += ar[i];
        }
        return sum;
    }

    const arr = filteredObjects.map(obj => obj.amount);

    const filteredAmount = simpleArraySum(arr);


    const expenseFilterHandler = (event) => {

        props.setFilterDate(event.target.value);

    }

    const chartStateHandler = (e) => {
        props.liftChartState();
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
                    <div className="expensesTotal">{filteredAmount > 0 ? 'Year Total:' : ''} <span className='text-gradient' >{filteredAmount > 0 ? '£' + filteredAmount.toFixed(2) : ''}</span></div>
                </div>
                <div className='expense-filter__control-box' >
                    <div className="csv-div text-gradient">
                        <p>Download</p>
                        <i class="fas fa-file-csv"></i>
                    </div>
                    <div>
                        <i onClick={chartStateHandler} class={props.chart === false ? 'far fa-chart-bar' : 'far fa-chart-bar active'}></i>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ExpensesFilter;