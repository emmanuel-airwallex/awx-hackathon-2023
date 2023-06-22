import React from 'react'
import { MyResponsiveCirclePacking } from '../components/charts/CirclePacking'
import { expenseData } from '../data/expenseData'

export const Expenses = () => {
    return (
        <div className='background-expenses'>
            <div style={{height: "800px"}}>
                <MyResponsiveCirclePacking data={expenseData}/>
            </div>
        </div>
    )
}