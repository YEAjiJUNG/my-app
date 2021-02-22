import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Calendar } from "react-date-range";

function CalenderPage() {
  return <Calendar></Calendar>;
}

export default withRouter(CalenderPage);
