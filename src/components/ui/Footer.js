import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from "@material-ui/core"
import { Link } from "react-router-dom"

import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

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
    },
    socialIcon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
        }
    }
}))

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/" onClick={() => props.setValue(0)} >Home </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/services" onClick={() => { props.setValue(1); props.setSelectedIndex(0) }}>Services</Grid>
                            <Grid item className={classes.link} component={Link} to="/customsoftware" onClick={() => { props.setValue(1); props.setSelectedIndex(1) }} >Custom Software Development</Grid>
                            <Grid item className={classes.link} component={Link} to="/mobileapp" onClick={() => { props.setValue(1); props.setSelectedIndex(2) }} >Mobile App Development</Grid>
                            <Grid item className={classes.link} component={Link} to="/website" onClick={() => { props.setValue(1); props.setSelectedIndex(3) }} >Website Development</Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)} >The Revolution</Grid>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)} >Vision</Grid>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)} >Technology</Grid>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)} >Process</Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setValue(3)} >About Us</Grid>
                            <Grid item className={classes.link} component={Link} to="/history" onClick={() => props.setValue(3)} >History</Grid>
                            <Grid item className={classes.link} component={Link} to="/team" onClick={() => props.setValue(3)} >Team</Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/contact" onClick={() => props.setValue(4)} >Contact Us</Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Hidden>

            <img
                src={footerAdornment}
                alt="black decorative img"
                className={classes.adornment}
            />

            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} alt="facebook logo" className={classes.socialIcon} />
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} alt="twitter logo" className={classes.socialIcon} />
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} alt="instagram logo" className={classes.socialIcon} />
                </Grid>
            </Grid>
        </footer>
    )

}