import React, { Component } from 'react';
 

class tropicalTransistsApi extends Component {







    async componentDidMount() {
    
        const transistsURl = "https://json.astrologyapi.com/v1/tropical_transits/daily";
        const transitResponse = await fetch(transistsURl);
        
        return transitResponse;
    }
}
export default tropicalTransistsApi;