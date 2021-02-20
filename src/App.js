import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectCountry from "./selectCountry";
import Rate from "./rate";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Rate} />
          <Route path="/rate" component={Rate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
