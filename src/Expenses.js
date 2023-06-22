import React from 'react'
import { MyResponsiveCirclePacking } from './CirclePacking'
import { data } from './data'

export const Expenses = () => {
    return (
        <div>
            <h1>
                Expenses page
            </h1>
            <div style={{height: "800px"}}>
                <MyResponsiveCirclePacking data={data}/>
            </div>
        </div>
    )
}