import React from 'react'
import './ExpenseChart.css'
import { ResponsiveCalendar } from '@nivo/calendar'


function ExpenseCalendar(props) {

    // filter objects by state of year dropdown in expense filter

    const filteredObjects = props.expenses.filter(object => {

        return object.date.split('-')[0] === props.filterDate
    });
    // sort by date helper function

    let data = []

    filteredObjects.forEach(filteredObject => {

        const existsArray = data.filter(dataObject => dataObject.day === filteredObject.date)

        if (existsArray.length > 0) {

            data.forEach(dataObject => {
                if (dataObject.day === filteredObject.date) {
                    dataObject.value = dataObject.value + filteredObject.amount
                }
                else {
                    return
                }
            })
        }

        else {
            data.push({
                value: filteredObject.amount,
                day: filteredObject.date
            });
        }
    });

    return (

        <div className='calendarSection'>
            <ResponsiveCalendar
                data={data}
                from={props.filterDate + '-01-01'}
                to={props.filterDate + '-12-12'}
                emptyColor="#eeeeee"
                colors={['##10b1bd', '##10b1bd75', '#6215dd75', '#6215dd']}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                yearSpacing={0}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'row',
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 70,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: 'right-to-left'
                    }
                ]}
            />
        </div>
    )
}

export default ExpenseCalendar
