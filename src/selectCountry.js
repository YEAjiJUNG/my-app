import React from 'react';
import {withRouter} from 'react-router-dom';
import './selectCountry.css';

function selectCountry(){
    return(
        <div className="box">
            <div className="title">Country</div>
            <div className="inner_box">
                <input type="checkbox" value="CAD" name="country" />CAD
                <input type="checkbox" value="CHF" name="country" />CHF
                <input type="checkbox" value="GBP" name="country" />GBP
                <input type="checkbox" value="SEK" name="country" />SEK
                <input type="checkbox" value="EUR" name="country" />EUR
                <input type="checkbox" value="USD" name="country" />USD
            </div>

        </div>
    )
}

export default withRouter(selectCountry);