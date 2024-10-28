import axios from "axios";

const API_URL = "https://api.rootnet.in/covid19-in/stats/latest";

export const fetchCovidData = async () => {
  console.log("eneter into the function");
  const response = await axios.get(API_URL);
  console.log("my resposne", response);
  return response.data.data;
};
