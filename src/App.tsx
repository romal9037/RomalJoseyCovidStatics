import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getCovidData } from "./redux/covidslice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import FilterDropdown from "./components/filter-dropdown";
import CovidTable from "./components/covid-table";
import CovidPieChart from "./components/pie-chart";
import IndiaMap from "./components/india-map";
import TrendLineChart from "./components/trendline-chart";
import "leaflet/dist/leaflet.css";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>COVID-19 Tracker for India</h1>
      <FilterDropdown />
      <CovidTable />
      <CovidPieChart />

      <div className="map-container">{/* <IndiaMap /> */}</div>

      <div className="chart-container">
        <TrendLineChart />
      </div>
    </div>
  );
};

export default App;
