import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Plot from "react-plotly.js";

const CovidPieChart: React.FC = () => {
  const { data, selectedState } = useSelector(
    (state: RootState) => state.covid
  );

  const stateData = data?.regional.find((s: any) => s.loc === selectedState);

  return (
    <Plot
      data={[
        {
          values: [
            stateData?.totalConfirmed,
            stateData?.discharged,
            stateData?.deaths,
          ],
          labels: ["Confirmed", "Recovered", "Deaths"],
          type: "pie",
        },
      ]}
      layout={{ title: `${selectedState} COVID-19 Cases` }}
    />
  );
};

export default CovidPieChart;
