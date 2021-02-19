import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import CountryRate from "./countryRate";

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
    //console.log("InRate", loading);
    //console.log("InRate", ratesdata);
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
          {arr.map((rate, index) => {
            <CountryRate key={index} rate={rate}></CountryRate>;
          })}
        </div>
      )}
    </section>
  );
}

export default withRouter(Rate);
