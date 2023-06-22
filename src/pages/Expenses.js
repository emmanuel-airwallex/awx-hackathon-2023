import React from 'react'
import { MyResponsiveCirclePacking } from '../components/charts/CirclePacking'
import BarChartBreakdown from '../components/charts/BarChartBreakdown'
import { expenseData } from '../data/expenseData'
import expensesBreakdownData from '../data/expensesBreakdownByEmployeeData'

export const Expenses = () => {
    const keys = [
        'Mark',
        'Jane',
        'Daniel',
        'Michael',
        'Sarah',
        'Jimmy'
    ]
    return (
        <div>
            <h1>
                Expenses page
            </h1>
            <div style={{height: "800px"}}>
                <MyResponsiveCirclePacking data={expenseData}/>
            </div>
            <div style={{height: "800px"}}>
                <BarChartBreakdown data={expensesBreakdownData} />
            </div>
        </div>
    )
}
