import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "expenseCategory": "Transportation",
      "Mark": 121,
      "MarkColor": "hsl(303, 70%, 50%)",
      "Jane": 46,
      "JaneColor": "hsl(152, 70%, 50%)",
      "Daniel": 14,
      "DanielColor": "hsl(89, 70%, 50%)",
      "Michael": 126,
      "MichaelColor": "hsl(84, 70%, 50%)",
      "Sarah": 125,
      "SarahColor": "hsl(168, 70%, 50%)",
      "Jimmy": 23,
      "JimmyColor": "hsl(52, 70%, 50%)"
    },
    {
      "expenseCategory": "Retail Outlet Services",
      "Mark": 64,
      "MarkColor": "hsl(316, 70%, 50%)",
      "Jane": 168,
      "JaneColor": "hsl(242, 70%, 50%)",
      "Daniel": 158,
      "DanielColor": "hsl(230, 70%, 50%)",
      "Michael": 41,
      "MichaelColor": "hsl(51, 70%, 50%)",
      "Sarah": 82,
      "SarahColor": "hsl(1, 70%, 50%)",
      "Jimmy": 109,
      "JimmyColor": "hsl(158, 70%, 50%)"
    },
    {
      "expenseCategory": "Health Services",
      "Mark": 155,
      "MarkColor": "hsl(257, 70%, 50%)",
      "Jane": 151,
      "JaneColor": "hsl(353, 70%, 50%)",
      "Daniel": 99,
      "DanielColor": "hsl(297, 70%, 50%)",
      "Michael": 34,
      "MichaelColor": "hsl(112, 70%, 50%)",
      "Sarah": 190,
      "SarahColor": "hsl(231, 70%, 50%)",
      "Jimmy": 42,
      "JimmyColor": "hsl(193, 70%, 50%)"
    },
    {
      "expenseCategory": "Eating Out",
      "Mark": 165,
      "MarkColor": "hsl(122, 70%, 50%)",
      "Jane": 63,
      "JaneColor": "hsl(59, 70%, 50%)",
      "Daniel": 73,
      "DanielColor": "hsl(28, 70%, 50%)",
      "Michael": 108,
      "MichaelColor": "hsl(119, 70%, 50%)",
      "Sarah": 200,
      "SarahColor": "hsl(98, 70%, 50%)",
      "Jimmy": 75,
      "JimmyColor": "hsl(158, 70%, 50%)"
    },
    {
      "expenseCategory": "Utilities",
      "Mark": 98,
      "MarkColor": "hsl(337, 70%, 50%)",
      "Jane": 147,
      "JaneColor": "hsl(298, 70%, 50%)",
      "Daniel": 65,
      "DanielColor": "hsl(237, 70%, 50%)",
      "Michael": 94,
      "MichaelColor": "hsl(242, 70%, 50%)",
      "Sarah": 105,
      "SarahColor": "hsl(103, 70%, 50%)",
      "Jimmy": 69,
      "JimmyColor": "hsl(107, 70%, 50%)"
    }
  ]

const BarChartBreakdown = () => {
    return (
        <ResponsiveBar
        data={data}
        keys={[
            'Mark',
            'Jane',
            'Daniel',
            'Michael',
            'Sarah',
            'Jimmy'
        ]}
        indexBy="expenseCategory"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        pTransportationding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                pTransportationding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Sarah'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Daniel'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPTransportationding: 5,
            tickRotation: 0,
            legend: 'Expense Category',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPTransportationding: 5,
            tickRotation: 0,
            legend: 'Employee Spend',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in expenseCategory: "+e.indexValue}
    />
    )
}


export default BarChartBreakdown;