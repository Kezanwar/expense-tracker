import React from 'react';
import { ExportToCsv } from 'export-to-csv';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    // --- filtered amount block ---

    //  filter objects by state of year dropdown in expense filter

    const filteredObjects = props.expenses.filter(object => {

        // if (object.date.type)
        return object.date.split('-')[0] === props.filterDate

    });

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

    // --- filtered amount block end ---

    // --- CSV block ---

    const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: true,
        title: props.filterDate + ': £' + filteredAmount,
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        filename: `${props.filterDate}__expenseTrackerKez`
    };

    const csvExporter = new ExportToCsv(options);

    const csvData = filteredObjects.map(obj => {
        return {
            Expense: obj.title,
            Amount: '£' + obj.amount,
            Date: obj.date
        }
    });

    // --- CSV block end ---

    const expenseFilterHandler = (event) => {
        props.setFilterDate(event.target.value);
    }

    const chartStateHandler = (e) => {
        props.liftChartState();
    }

    const csvHandler = () => {
        if (csvData.length === 0) {
            return
        }
        else {
            csvExporter.generateCsv(csvData);
        }

    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <div className='expense-filter__control-box'>
                    <select className='text-gradient' value={props.filterDate} onChange={expenseFilterHandler}>
                        <option value='2022'>2022 &#8600; </option>
                        <option value='2021'>2021 &#8600;</option>
                        <option value='2020'>2020 &#8600;</option>
                        <option value='2019'>2019 &#8600;</option>
                    </select>
                    <div className="expensesTotal">{filteredAmount > 0 ? 'Year Total:' : ''} <span className='text-gradient' >{filteredAmount > 0 ? '£' + filteredAmount.toFixed(2) : ''}</span></div>
                </div>
                <div className='expense-filter__control-box' >
                    <div onClick={csvHandler} className="csv-div text-gradient">
                        <p className='text-gradient'>Download</p>
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