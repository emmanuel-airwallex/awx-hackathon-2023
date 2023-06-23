import { useState, useEffect } from "react";
import { TimeseriesChart } from '../components/charts/TimeseriesChart'
import tradeData from "../data/tradeData"
import BarChartBreakdown from '../components/charts/BarChartBreakdown'
import expensesBreakdownData from '../data/expensesBreakdownByEmployeeData'
import IconButton from '../components/IconButton'
import BarChart from '../components/charts/BarChart';
import expensesBreakdownByCategoryData from '../data/expensesBreakdownByCategoryData'

function VisualisationPanel(params) {
    const isOpen = params.isOpen
    const [data, setData] = useState([]);

    const transformData = (data) => {
        return data.map(pt => {
            var date = new Date(pt.rateDate); // create Date object
                    var options = {
                        month: 'numeric', day: 'numeric',
                    };

            return {x: date.toLocaleDateString('en', options), y: pt.rate}
        })
    }
    const getRates = (sellCcy, buyCcy) => {
        fetch(`https://www.airwallex.com/api/fx/fxRate/30days?buyCcy=${buyCcy}&sellCcy=${sellCcy}`)
        .then(r =>  r.json().then(data => setData([
            {
              "id": data[0].ccyPair,
              "color": "hsl(144, 70%, 50%)",
              "data": transformData(data)
            }
          ])))
        .catch(err => console.log(err));

        return data
    }

    useEffect(() => {
        if (params.visualisation.currency) {
            getRates('AUD', params.visualisation.currency)
        }
    }, [params.visualisation.currency])

    var visualisation
    if (params.visualisation.visualisation == "visualisation.currency") {
        visualisation =
            <TimeseriesChart data={data} height={"100%"} hasHistoricalConversions={params.visualisation.showingConversions}/>
    }
    if (params.visualisation.visualisation == "visualisation.expense") {
        if (!params.visualisation.brokenDown) {
            visualisation =
                <BarChart data={expensesBreakdownByCategoryData} height={"100%"} />
        }else{
            visualisation =
                <BarChartBreakdown data={expensesBreakdownData} height={"100%"} />
        }
    }
    return <>
        <div className={"fixed bottom-36 right-0 m-4 p-8 h-2/3 max-w-5xl w-full m-8 transition-all duration-300 " + (isOpen ? "-translate-x-[450px] opacity-100" : "-translate-x-[300px] opacity-0")} >
            <div className="bg-gray-50 m-4 p-8 ring-2 rounded ring-gray-100 w-full h-full min-h-full flex flex-col shadow-xl">
                <div className="flex flex-row">
                    <h1 className="text-2xl font-bold mb-4 text-gray-700 flex-grow">{params.visualisation.title}</h1>
                    <IconButton>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M200.66 352H144a96 96 0 010-192h55.41M312.59 160H368a96 96 0 010 192h-56.66M169.07 256h175.86" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"/></svg>
                    </IconButton>
                    <IconButton>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg>
                    </IconButton>
                </div>
                <hr className='mt-4' />
                {
                    visualisation
                }
            </div>
        </div>
    </>
}

export default VisualisationPanel