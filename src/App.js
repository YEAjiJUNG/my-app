import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectCountry from "./selectCountry";
import Rate from "./rate";
import Calendar from "react-calendar";
import CalendarPage from "./calendarPage";
import "react-date-range/dist/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Rate} />
          <Route path="/rate" component={Rate} />
          <Route path="/date" component={CalendarPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
