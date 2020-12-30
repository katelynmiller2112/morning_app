import React, { Component } from 'react';
import { CardContent,CardHeader ,Card, Typography } from '@material-ui/core';

const moonphase = null;
class moonCard extends Component {
    render() {
        return (
            <Card>
                <CardHeader>Moon Phase</CardHeader>
                <CardContent>
                    <Typography>{ }</Typography>
                </CardContent>
           </Card>
       );
   }

}

export default moonCard;