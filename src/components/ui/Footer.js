import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom"

import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/">Home</Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/services">Services</Grid>
                        <Grid item className={classes.link} component={Link} to="/customsoftware">Custom Software Development</Grid>
                        <Grid item className={classes.link} component={Link} to="/mobileapp">Mobile App Development</Grid>
                        <Grid item className={classes.link} component={Link} to="/website">Website Development</Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} to="/revolution">The Revolution</Grid>
                        <Grid item className={classes.link} to="/revolution">Vision</Grid>
                        <Grid item className={classes.link} to="/revolution">Technology</Grid>
                        <Grid item className={classes.link} to="/revolution">Process</Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} to="/about">About Us</Grid>
                        <Grid item className={classes.link} to="/history" >History</Grid>
                        <Grid item className={classes.link} to="/team">Team</Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>Contact Us</Grid>
                    </Grid>
                </Grid>

            </Grid>

            <img
                src={footerAdornment}
                alt="black decorative img"
                className={classes.adornment}
            />
        </footer>
    )

}