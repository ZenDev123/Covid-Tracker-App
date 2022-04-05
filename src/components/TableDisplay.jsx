import { Card, CardContent } from '@material-ui/core'
import Table from './Table'
import { useState, useEffect } from 'react'
import { prettyPrintStat, sortData } from "./util";

const TableDisplay = () => {
  const [tableData, setTableData] = useState([]);

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
          setTableData(sortedData);
          console.log(data);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div style={{padding: '10px'}}>
        <Card className="app__right" style={{marginTop: '10px'}}>
          <CardContent>
            <div className="app__information">
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
            </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default TableDisplay;