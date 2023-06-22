import React from "react"
import { TimeseriesChart } from '../components/charts/TimeseriesChart'
import tradeData from "../data/tradeData"
import Container from '../chat/Container'

export const Conversions = () => {
    return (
        <div className='background-conversions'>
            <TimeseriesChart data={tradeData} height={"200px"}/>
            <Container />
        </div>
    )
}