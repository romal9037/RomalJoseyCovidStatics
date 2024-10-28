import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CovidTable: React.FC = () => {
  const { data, selectedState } = useSelector(
    (state: RootState) => state.covid
  );

  if (!data) return <p>Loading...</p>;

  const filteredData =
    selectedState === "All"
      ? data.regional
      : data.regional.filter((state) => state.loc === selectedState);

  return (
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed Cases</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((state) => (
          <tr key={state.loc}>
            <td>{state.loc}</td>
            <td>{state.totalConfirmed}</td>
            <td>{state.discharged}</td>
            <td>{state.deaths}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CovidTable;
