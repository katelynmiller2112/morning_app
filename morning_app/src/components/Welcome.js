import React, { Component }from 'react';
import sun from './sun.svg';
import Container  from '@material-ui/core/Container';
import styles from '../styles/welcome_styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core/Box';
import { Fade } from 'react-awesome-reveal';
import LandingScreen from './LandingScreen';
import { gotToLanding } from '../routes/toLanding.js';
 

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.gotToLanding = this.gotToLanding.bind(this);
    }

    render() {
        return (
            <Container maxwidth="xl" className={styles.Welcome}>
            
                <img src={sun} className={ styles.SunSVG}/>
                <p className={styles.p}></p>
                <Button onClick={this.gotToLanding }>Start your day 🌞🌞🌞</Button>
            </Container>
        );
    }
}

export default Welcome;