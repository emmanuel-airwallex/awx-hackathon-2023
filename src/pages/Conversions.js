import React from "react"
import {TimeseriesChart} from '../components/charts/TimeseriesChart'
import tradeData from "../data/tradeData"
import Container from '../chat/Container'

export const Conversions = () => {

    for (var i = 0; i < tradeData.length; i++) {
        for(var j = 0; j < tradeData[i].data.length; j++) {
            var date = new Date(tradeData[i].data[j].x); // create Date object
            var options = {
                year: 'numeric', month: 'numeric', day: 'numeric',
            };
            tradeData[i].data[j].x = date.toLocaleDateString('en', options);
        }
    }

    console.log(tradeData);

    const testData = [
        {
            "id": "AUDUSD",
            "color": "hsl(144, 70%, 50%)",
            "data": [
                {
                    "x": "6/7/2023",
                    "y": 0.66318
                },
                {
                    "x": "6/8/2023",
                    "y": 0.66318
                },
                {
                    "x": "6/9/2023",
                    "y": 0.656272
                }
            ]
        }
    ]

    return (
        <div className='background-conversions'>
            <Container />
        </div>
    )
}