import React, { Component }from 'react';
import sun from './sun.svg';
import  Container  from '@material-ui/core/Container';
import styles from '../styles/welcome_styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core/Box';

class Welcome extends Component {
    render() {
        return (
            <Container  maxwidth= "xl" className={styles.Welcome}>
                <img src={sun} className="sun_logo" alt="sun" />
                <p className = {styles.p}>
                    Good Morning
                </p>
            </Container>
        );
    }
}

export default Welcome;