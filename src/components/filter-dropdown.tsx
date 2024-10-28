import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setSelectedState } from "../redux/covidslice";

const FilterDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const covidData = useSelector((state: RootState) => state.covid.data);
  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedState(event.target.value));
  };

  return (
    <select onChange={handleStateChange}>
      <option value="All">All States</option>
      {covidData?.regional?.map((state: any) => (
        <option key={state.loc} value={state.loc}>
          {state.loc}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
