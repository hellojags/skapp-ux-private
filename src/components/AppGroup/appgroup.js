import React from 'react';
import { Card,
         CardContent,
         Typography,
         Icon } 
from '@material-ui/core';

// styles
import useStyles from "./styles";

export default function AppGroup(props) {
    var classes = useStyles();
    
    return (
        <Card className={classes.cardgroup}>
            <div className={classes.details}>
                <CardContent>
                    <Typography className={classes.cardtitle}>{props.title}</Typography>
                    <Typography className={classes.cardsbutitle}>{props.subtitle}</Typography>
                    <div className={classes.statusdetails}>
                        <Typography className={classes.cardstatus}>{props.status}</Typography>
                        <Icon className={classes.iconbtn}>{props.icon}</Icon>
                    </div>
                </CardContent>
            </div>
            { props.cardimage && (
                <img src={props.cardimage} alt={props.title} className={classes.cardimage}></img>
            )}
        </Card>
    );
}