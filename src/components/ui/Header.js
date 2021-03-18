import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        // marginBottom: "1em" // if we add more to height
    },
    logo: {
        height: "4em",
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    }
}))

export default function Header(props) {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
        setValue(value);
    }

    return <>
        <ElevationScroll>
            <AppBar>
                <Toolbar disableGutters>
                    <img className={classes.logo} alt="company logo" src={logo} />

                    <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                        <Tab className={classes.tab} component={Link} to="/" label="Home" />
                        <Tab className={classes.tab} component={Link} to="/services" label="Services" />
                        <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                        <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                        <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                    </Tabs>

                    <Button variant="contained" color="secondary" className={classes.button}>
                        Free Estimate
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
    </>
}