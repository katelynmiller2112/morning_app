import React, { Component }from 'react';
import sun from './sun.svg';
import styles  from '../styles/welcome_styles.module.css'

class Welcome extends Component {
    render() {
        return (
            <body className={styles.Welcome }>
                <img src={sun} className="sun_logo" alt="sun" />
                <p className = {styles.p}>
                    Good Morning
                </p>
                </body>
        );
    }
}

export default Welcome;