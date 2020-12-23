import React  from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { astrologyCard } from './astrologyCard';
import { moonCard } from './moonCard';


class LandingScreen extends Component {

    render() {
        return (
            <Container>
            <moonCard>

            </moonCard>
            <astrologyCard>

                </astrologyCard>
                </Container>
        );
    }
}

export default LandingScreen;