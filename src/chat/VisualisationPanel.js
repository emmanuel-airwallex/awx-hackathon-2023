import { TimeseriesChart } from '../components/charts/TimeseriesChart'
import tradeData from "../data/tradeData"
import BarChartBreakdown from '../components/charts/BarChartBreakdown'
import expensesBreakdownData from '../data/expensesBreakdownByEmployeeData'


function VisualisationPanel(params) {
    const isOpen = params.isOpen
    return <>
        <div className={"fixed bottom-36 right-0 m-4 p-8 h-2/3 max-w-5xl w-full m-8 transition-all duration-300 " + (isOpen ? "-translate-x-[450px] opacity-100" : "-translate-x-[300px] opacity-0")} >
            <div className="bg-gray-50 m-4 p-8 ring-2 rounded ring-gray-100 w-full h-full min-h-full flex flex-col shadow-xl">
                <h1 className="text-2xl font-bold mb-4 text-gray-700">{params.visualisation.title}</h1>
                <hr />
                <TimeseriesChart data={tradeData} height={"100%"}/>
            </div>
        </div>
    </>
}

export default VisualisationPanel