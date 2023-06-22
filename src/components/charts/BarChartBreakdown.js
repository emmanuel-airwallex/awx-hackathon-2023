import { ResponsiveBar } from '@nivo/bar'

const BarChartBreakdown = ({ data, height }) => {
    const colors = [
        "#775CFF",
        "#0BEA82",
        "#FF4F42",
        "#FF8E3C",
        "#FFD014"
    ]
    return (
        <div style={{height: height}}>
        <ResponsiveBar
        data={data}
        keys={[
            'Mark',
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
        colors={colors}
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
    </div>
    )
}


export default BarChartBreakdown;