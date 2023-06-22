import { TimeseriesChart } from '../components/charts/TimeseriesChart'
import tradeData from "../data/tradeData"
import BarChartBreakdown from '../components/charts/BarChartBreakdown'
import expensesBreakdownData from '../data/expensesBreakdownByEmployeeData'

export const conversionPrompt = [
    {
        "user": "operator",
        "prompt": "Hi there, how can I help you with your conversions today?"
    },
    {
        "user": "client",
        "prompt": "What is my most commonly traded currency?" // show me a graph. now fx forecasts. now a useful graph.
    },
    {
        "user": "operator",
        // "prompt": "AUDUSD. The current rate is 0.67… "
        "prompt": "Sure. Here's a graph showing absolutely nonsense data!"
    },
    {
        "user": "client",
        "prompt": "Can you show me the historical rates?"
    },
    {
        "user": "operator",
        "prompt": "Hmm, no, I don't think I will tell you that."
        // "prompt": <TimeseriesChart data={tradeData} height={"200px"}/>
    },
    {
        "user": "client",
        "prompt": "What about the past 30 days?"
    },
    {
        "user": "operator",
        "prompt": "Here's the same graph I gave you last time, lol."
        // "prompt": <TimeseriesChart data={tradeData} height={"200px"}/>
    },
    {
        "user": "client",
        "prompt": <TimeseriesChart data={tradeData} height={"200px"}/>
    },
]

export const expensesPrompt = [
    {
        "user": "operator",
        "prompt": "Hi there, what would you like to know about your expenses?"
    },
    {
        "user": "client",
        "prompt": "What are my top 5 expenses in the past year?"
    },
    {
        "user": "operator",
        "prompt": <BarChartBreakdown data={expensesBreakdownData} height={"200px"} />
    },
    {
        "user": "client",
        "prompt": "Can you break this down by employee?"
    },
    {
        "user": "operator",
        "prompt": <BarChartBreakdown data={expensesBreakdownData} height={"200px"} />
    },
    {
        "user": "client",
        "prompt": "How can I reduce my travel expenses?"
    },
    {
        "user": "operator",
        "prompt": "Based on your transaction history, you spend 55% more on travel than a comparable eCommerce business of a similar size. We recommend you take a look at this blog article for more information."
    },
]