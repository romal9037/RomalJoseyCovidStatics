import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TrendLineChart: React.FC = () => {
  const { data, selectedState } = useSelector(
    (state: RootState) => state.covid
  );

  const stateData = data?.regional.find((s: any) => s.loc === selectedState);

  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [stateData?.totalConfirmed],
          type: "scatter",
          mode: "lines",
          name: "Confirmed",
        },
        {
          x: [1, 2, 3],
          y: [stateData?.discharged],
          type: "scatter",
          mode: "lines",
          name: "Recovered",
        },
        {
          x: [1, 2, 3],
          y: [stateData?.deaths],
          type: "scatter",
          mode: "lines",
          name: "Deaths",
        },
      ]}
      layout={{ title: `${selectedState} COVID-19 Cases Over Time` }}
    />
  );
};

export default TrendLineChart;
