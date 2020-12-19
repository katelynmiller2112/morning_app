import React, { Component }from 'react';
import sun from './sun';
import styles  from '../styles/welcom_styles'

class Welcome extends Component {
    render() {
        return (
            <header className="Welcome">
                <img src={sun} className="sun_logo" alt="sun" />
                <p className = {styles}>
                    Good Morning
                </p>
            </header>
        );
    }
}

export default Welcome;