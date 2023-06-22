import React from "react"
import { TimeseriesChart } from '../components/charts/TimeseriesChart'
import tradeData from "../data/tradeData"

export const Conversions = () => {
    return (
        <div>
            <h1>
                Conversions page
            </h1>
            <div style={{height: "800px"}}>
                <TimeseriesChart data={tradeData}/>
            </div>
        </div>
    )
}