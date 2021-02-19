import React from "react";
import { withRouter } from "react-router-dom";

function CountryRate({ rate }) {
  console.log("dkdkdkdkkd", rate);
  return (
    <div>
      <h3>ddd</h3>
      <h4 className="country">{rate}</h4>
    </div>
  );
}

export default withRouter(CountryRate);
