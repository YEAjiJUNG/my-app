import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import rate from "./rate";
import "./selectCountry.css";

function SelectCountry({ rate }) {
  console.log({ rate });
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    if (checked == true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <div className="box">
      <div className="inner_box">
        <input
          type="checkbox"
          value={rate[0]}
          name="country"
          onChange={onChange}
        />
        {rate[0]}
        <div>{checked ? <div>{rate[1]}</div> : <div></div>}</div>
      </div>
    </div>
  );
}

export default withRouter(SelectCountry);
