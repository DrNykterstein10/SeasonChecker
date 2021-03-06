import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = {
    summer : {
        text : "We gotta go for a swim!",
        iconName : "sun"
    },
    winter : {
        text : "Goddamn, it is freezing",
        iconName : "snowflake"
    }
}

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9){
        return (latitude > 0) ? 'summer' : 'winter';
    } else{
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season];

    return (
        <div className={`season-display ${season}`}> 
          <i className = {`icon-left massive ${iconName} icon`}></i>
          <h1>{text}</h1>
          <i className = {`icon-right massive ${iconName} icon`}></i>
        </div>
        );
}

export default SeasonDisplay;