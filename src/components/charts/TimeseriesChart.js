import { ResponsiveLine } from '@nivo/line'
import { Bar } from '@nivo/bar'
import React from "react";
const barColor = "#bd7a0f";

const data = [
    { x: "0", v: 2.7 },
    { x: "1", v: 3.3 },
    { x: "2", v: 3.8 },
    { x: "3", v: 4.3 },
    { x: "4", v: 1.7 },
    { x: "5", v: 2.2 },
    { x: "6", v: 5.5 },
    { x: "7", v: 6.0 }
];

const Scatter = ({ bars, xScale, yScale }) => {
    console.log("printing");
    console.log(bars[0].data.data.x);
    console.log(bars[0].data.data.v);
    return (
        <>
            {bars.map((bar) => (
                <circle
                    key={`point-${bar.data.data.x}`}
                    cx={xScale(bar.data.index) + bar.width / 2}
                    cy={yScale(bar.data.data.v + 0.2)}
                    r={3}
                    fill="black"
                    stroke="black"
                    style={{ pointerEvents: "none" }}
                />
            ))}
        </>
    );
};

export const TimeseriesChart = ({ data }) => {
  return (
    <div style={{ height: 600 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}

        // layers={["grid", "axes", "lines", "points", "markers", "legends"]}
      />
        {/*<Bar*/}
        {/*    width={500}*/}
        {/*    height={400}*/}
        {/*    data={data}*/}
        {/*    keys={["y"]}*/}
        {/*    maxValue={6.6}*/}
        {/*    padding={0.6}*/}
        {/*    margin={{*/}
        {/*        top: 10,*/}
        {/*        right: 10,*/}
        {/*        bottom: 36,*/}
        {/*        left: 36*/}
        {/*    }}*/}
        {/*    indexBy="x"*/}
        {/*    enableLabel={false}*/}
        {/*    colors={[barColor]}*/}
        {/*    borderRadius={2}*/}
        {/*    axisLeft={{*/}
        {/*        tickValues: 7*/}
        {/*    }}*/}
        {/*    layers={["grid", "axes", "bars", Scatter]}*/}
        {/*/>*/}
    </div>
  )
}