import { ResponsiveLine } from '@nivo/line'
import React from "react";

const Scatter = ({ xScale, yScale }) => {
    return (
        <>
            <circle
                cx={xScale("6/8/2023")}
                cy={yScale(0.665)}
                r={10}
                fill="black"
                stroke="black"
                style={{ pointerEvents: "none" }}
            />
            <circle
                cx={xScale("6/11/2023")}
                cy={yScale(0.676325)}
                r={10}
                fill="black"
                stroke="black"
                style={{ pointerEvents: "none" }}
            />
            <circle
                cx={xScale("6/18/2023")}
                cy={yScale(0.69)}
                r={10}
                fill="black"
                stroke="black"
                style={{ pointerEvents: "none" }}
            />
        </>
    );
};

export const TimeseriesChart = ({ data, height, hasHistoricalConversions }) => {
    console.log(hasHistoricalConversions)
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
    console.log(layers)
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

        layers={layers}
      />
    </div>
  )
}