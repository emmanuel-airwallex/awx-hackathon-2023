export const conversionPrompt = [
    {
        "user": "operator",
        "prompt": "Hi there, how can I help you with your conversions today?"
    },
    {
        "user": "client",
        "prompt": "What is my most commonly traded currency?"
    },
    {
        "user": "operator",
        "prompt": "AUDUSD. The current rate is 0.67… "
    },
    {
        "user": "client",
        "prompt": "Can you show me the historical rates?"
    },
    {
        "user": "operator",
        "prompt": "[T+7 rate chart]"
    },
    {
        "user": "client",
        "prompt": "What about the past 30 days?"
    },
    {
        "user": "operator",
        "prompt": "[T+30 rate chart]"
    },
    {
        "user": "client",
        "prompt": "[T+30 rate chart with trades]"
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
        "prompt": "[Volume chart breakdown by MCC]"
    },
    {
        "user": "client",
        "prompt": "Can you break this down by employee?"
    },
    {
        "user": "operator",
        "prompt": "[Volume chart breakdown by MCC by employee]"
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