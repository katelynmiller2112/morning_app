import React, {Component} from 'react';
import { CardContent,CardHeader ,Card, Typography } from '@material-ui/core';
import tropicalTransistsApi from '../api/tropicalTransitsApi';

class astrologyCard extends Component {

    render() {
        return (
            <Card>
                <CardHeader>
                    <CardContent>
                        <Typography>

                        </Typography>
                    </CardContent>
            </CardHeader>
            </Card>
    );
}
}

export default astrologyCard;