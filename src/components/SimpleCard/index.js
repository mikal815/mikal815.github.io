import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: '13.5rem',
        maxWidth: '13.5rem',
        height: '9.5rem',
        backgroundColor: 'rgb(34, 125, 91)',
        color: '#ffffff'
    },
    slogan: {
        fontSize: 20,
    },
    tag: {
        fontSize: 16,
        color: '#29272b'

    }
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardContent>
                <Typography className={classes.slogan} variant="h5" component="h2">
                    I actualize intuative and engaging web experiences ~
                </Typography>

                <Typography className={classes.tag} color="textSecondary">
                    Web Developer
                    <br></br>
                    Philadelphia, PA
                </Typography>

            </CardContent>

        </Card>
    );
}