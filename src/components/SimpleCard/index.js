import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '90vw',
        minHeight: '15vh',
        maxHeight: '23vh',
        marginRight: '5vw',
        marginLeft: '5vw',
        backgroundColor: 'rgb(34, 125, 91)',
        color: '#ffffff',
        padding: '4px'
    },
    slogan: {
        fontSize: '1.3em',
        paddingBottom: '6px'
    },
    tag: {
        fontSize: '1em',
        color: '#29272b'

    }
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardContent>
                <Typography className={classes.slogan} variant="h5" component="h2">
                    I actualize intuative and engaging experiences ~
                </Typography>

                <Typography className={classes.tag} color="textSecondary">
                    Software Developer
                    <br></br>
                    Philadelphia, PA
                </Typography>

            </CardContent>

        </Card>
    );
}