import React from 'react'
import { MyResponsiveCirclePacking } from '../components/charts/CirclePacking'
import BarChartBreakdown from '../components/charts/BarChartBreakdown'
import { expenseData } from '../data/expenseData'
import expensesBreakdownData from '../data/expensesBreakdownByEmployeeData'
import Container from '../chat/Container'

export const Expenses = () => {
    return (
        <div className='background-expenses'>
            <div style={{height: "800px"}}>
                <MyResponsiveCirclePacking data={expenseData}/>
            </div>
            <div style={{height: "800px"}}>
                <BarChartBreakdown data={expensesBreakdownData} />
            </div>
            <Container />
        </div>
    )
}
