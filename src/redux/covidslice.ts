// redux/covidSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCovidData } from "../services/api";

interface RegionalData {
  loc: string;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  totalConfirmed: number;
}

interface CovidData {
  summary: {
    total: number;
    confirmedCasesIndian: number;
    confirmedCasesForeign: number;
    discharged: number;
    deaths: number;
    confirmedButLocationUnidentified: number;
  };
  regional: RegionalData[];
}

export const getCovidData = createAsyncThunk(
  "covid/fetchCovidData",
  fetchCovidData
);

interface CovidState {
  data: CovidData | null;
  selectedState: string;
}

const initialState: CovidState = {
  data: null,
  selectedState: "All",
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCovidData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSelectedState } = covidSlice.actions;
export default covidSlice.reducer;
