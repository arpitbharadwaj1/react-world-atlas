import axios from "axios";
// This file contains the API calls to fetch country data from the REST Countries API 
// Read more about the API here: https://restcountries.com/


const API = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = () => {
  return API.get("/all?fields=name,population,region,capital,flags");
};

export const getCountryDetailsByName = (name) => {
  return API.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,flags,languages,currencies,borders`
  );
};
