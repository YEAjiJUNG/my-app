import React from "react";
import { withRouter } from "react-router-dom";

function CountryRate({ rate }) {
  return (
    <div>
      <h4 className="country">{rate}</h4>
    </div>
  );
}

export default withRouter(CountryRate);
