import React, { Component }from 'react';
import sun from './sun.svg';
import Container  from '@material-ui/core/Container';
import styles from '../styles/welcome_styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core/Box';
import { Fade } from 'react-awesome-reveal';
import LandingScreen from './LandingScreen';

 

class Welcome extends Component {
    render() {
        return (
            <Container maxwidth="xl" className={styles.Welcome}>
                
                <img src={sun} className={ styles.SunSVG}/>
                <p className = {styles.p}></p>
                <Fade direction="bottom">
                    <LandingScreen/>
                </Fade>
            </Container>
        );
    }
}

export default Welcome;