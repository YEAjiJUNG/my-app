import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import selectCountry from './selectCountry';

function App() {
  return (
    
        <Router>
          <div className="App"> 
        <Switch>
          <Route path="/" component={selectCountry} />
        </Switch>
        </div>
        </Router>
        
      );
    }

export default App;
