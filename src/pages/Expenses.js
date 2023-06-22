import React from 'react'
import { MyResponsiveCirclePacking } from '../components/charts/CirclePacking'
import { expenseData } from '../data/expenseData'

export const Expenses = () => {
    return (
        <div>
            <h1>
                Expenses page
            </h1>
            <div style={{height: "800px"}}>
                <MyResponsiveCirclePacking data={expenseData}/>
            </div>
        </div>
    )
}