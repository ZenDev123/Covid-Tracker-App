import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Table from "./Table";
import { prettyPrintStat, sortData } from "./util";
import Map from './Map'
import "leaflet/dist/leaflet.css"

const TrackedDATA = () => {

  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng:0 });
  const [mapZoom, setMapZoom] = useState(3); 
  const [casesType, setCasesType] = useState("cases");




  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
          console.log(data);
        });
    };

    getCountriesData();
  }, []);



  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div>
      <div className="app">
        <div className="app__left">
          <div className="app__header">
            <h1>COVID-19 Tracker</h1>
            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="app__countContinentInfo">
            {/* <img src={countryInfo.flag} target='_blank' style={{width: '10%'}} /> */}
            <p>Country Name: {countryInfo.country}</p>
            <p>Continent Name: {countryInfo.continent}</p>
          </div>

          <div className="app__stats">
            <InfoBox
              onClick={(e) => setCasesType('cases')}
              title="Coronavirus Cases"
              cases={prettyPrintStat(countryInfo.todayCases)}
              total={countryInfo.todayCases}
              className="infoStatsbx"
            />
            <InfoBox
              onClick={(e) => setCasesType('recovered')}
              title="Recovered"
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={countryInfo.todayRecovered }
              className="infoStatsbx"
            />
            <InfoBox
              onClick={(e) => setCasesType('deaths')}
              title="Deaths"
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              total={countryInfo.todayDeaths}
              className="infoStatsbx"
            />
          </div>
          <Map casesType={casesType} center={mapCenter} zoom={mapZoom} countries={mapCountries} />
        </div>
        <Card className="app__right" style={{marginTop: '10px'}}>
          <CardContent>
            <div className="app__information">
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
};

export default TrackedDATA