import React, {Component} from 'react';
import { CardContent, CardHeader, Card, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import tropicalTransistsApi from '../api/tropicalTransitsApi';

class astrologyCard extends Component {

    render() {
        return (
            <Card>
                <CardHeader>
                    <CardContent>
                        <FormGroup>
                            <List dense={dense}>
                                <ListItem>
                                    Moon is in : 
                                </ListItem>
                            </List>
                                
                        </FormGroup>
                    </CardContent>
            </CardHeader>
            </Card>
    );
}
}

export default astrologyCard;