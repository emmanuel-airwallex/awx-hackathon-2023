import React from "react"
import {TimeseriesChart} from '../components/charts/TimeseriesChart'
import tradeData from "../data/tradeData"

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