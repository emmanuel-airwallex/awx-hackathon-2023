import { ResponsiveLine } from '@nivo/line'
import React from "react";

const Scatter = ({ data, xScale, yScale }) => {
    console.log(data[0].data[0])
    return (
        <>
            <circle
                cx={xScale(data[0].data[5].x)}
                cy={yScale(data[0].data[5].y)}
                r={10}
                fill="black"
                stroke="black"
                style={{ pointerEvents: "none" }}
            />
            {/*<rect*/}
            {/*    x={xScale("6/4")}*/}
            {/*    y={yScale(0.678)}*/}
            {/*    width={113}*/}
            {/*    height={30}*/}
            {/*    fill="white"*/}
            {/*    stroke="black"*/}
            {/*    style={{ pointerEvents: "none" }}*/}
            {/*/>*/}
            {/*<text x={xScale("6/4")} y={yScale(0.676)} font-family="Verdana" font-size="15" fill="black">Sell $150 USD</text>*/}
            <circle
                cx={xScale(data[0].data[10].x)}
                cy={yScale(data[0].data[10].y)}
                r={10}
                fill="black"
                stroke="black"
                style={{ pointerEvents: "none" }}
            />
            {/*<rect*/}
            {/*    x={xScale("6/8")}*/}
            {/*    y={yScale(0.66)}*/}
            {/*    width={113}*/}
            {/*    height={30}*/}
            {/*    fill="white"*/}
            {/*    stroke="black"*/}
            {/*    style={{ pointerEvents: "none" }}*/}
            {/*/>*/}
            {/*<text x={xScale("6/8")} y={yScale(0.658)} font-family="Verdana" font-size="15" fill="black">Buy $170 AUD</text>*/}
            <circle
                cx={xScale(data[0].data[22].x)}
                cy={yScale(data[0].data[22].y)}
                r={10}
                fill="black"
                stroke="black"
                style={{ pointerEvents: "none" }}
            />
            {/*<rect*/}
            {/*    x={xScale("6/16")}*/}
            {/*    y={yScale(0.678)}*/}
            {/*    width={115}*/}
            {/*    height={30}*/}
            {/*    fill="white"*/}
            {/*    stroke="black"*/}
            {/*    style={{ pointerEvents: "none" }}*/}
            {/*/>*/}
            {/*<text x={xScale("6/16")} y={yScale(0.676)} font-family="Verdana" font-size="15" fill="black">Buy $200 AUD</text>*/}
        </>
    );
};

export const TimeseriesChart = ({ data, height, hasHistoricalConversions }) => {
    const layers = hasHistoricalConversions 
    ? [
        'grid',
        'markers',
        'areas',
        'lines',
        'slices',
        'axes',
        'points',
        Scatter,
        'legends'
    ]
    : [
        'grid',
        'markers',
        'areas',
        'lines',
        'slices',
        'axes',
        'points',
        'legends'
    ]
  return (
    <div style={{ height: height }}>
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
        animate={true}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Conversion Date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
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

        layers={layers}
      />
    </div>
  )
}