import './seasondisplay.css';
import React from 'react';

const seasonConfig = {
    summer:{
        text:'Bora pra praia!',
        iconName:'massive sun icon'
    },
    winter:{
        text:'Bora pra praia!',
        iconName:'massive snowflake icon'
    }
}

const getSeason = (lat,month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const{text,iconName} = seasonConfig[season]
    
    return (
        <div className='container' style={{margin:'20px'}}>
            <i className={`icon-left ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName}`} />
        </div>
        
        )
}

export default SeasonDisplay;