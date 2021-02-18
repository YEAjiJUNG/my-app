import React from 'react';
import {withRouter} from 'react-router-dom';
import selectCountry from './selectCountry';


function countryPage(){
    return(
        <div>
            <selectCountry></selectCountry>
        </div>
    )
}

export default withRouter(countryPage);

