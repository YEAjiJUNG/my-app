import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import CountryRate from "./countryRate";
import SelectCountry from "./selectCountry";

function Rate() {
  const [ratesdata, setRatesdata] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("Rate function", ratesdata);

  useEffect(() => {
    getRate();
  }, []);

  const getRate = async () => {
    const {
      data: { rates },
    } = await axios.get("https://api.exchangeratesapi.io/latest");
    setRatesdata(rates);
    setLoading(false);
  };
  const arr = Object.entries(ratesdata);

  console.log("OutRate", loading);
  console.log("OutRate", ratesdata);
  console.log("arr", arr);
  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="country">
            <h1>Country</h1>
          </div>
          <div>
            {arr.map((rate, index) => (
              <SelectCountry key={index} rate={rate}></SelectCountry>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default withRouter(Rate);
