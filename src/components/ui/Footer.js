import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "12em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "9.25em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "7.25em"
        }
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <img
                src={footerAdornment}
                alt="black decorative img"
                className={classes.adornment}
            />
        </footer>
    )

}