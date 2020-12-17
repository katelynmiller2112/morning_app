import React from 'react'


const stationID = 'ca0101';
var currentTime = 'latest';
const baseUrl = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=ca0101&interval=hilo&units=english&time_zone=gmt&application=ports_screen&format=json"

    

class Tides extends React.Component {

    state = {
        high: null,
        low: null,

    }

    async componentDidMount() {
        const tidesResponse = await fetch(baseUrl).then(res => res.json())
        const high = tidesResponse.results;
        this.setState({high})
    }
  
    render: function(){
        return (
            <p>My name is {high}.</p>
        );
} 
}
