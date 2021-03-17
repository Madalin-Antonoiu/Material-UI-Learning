import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles"

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
        ...theme.mixins.toolbar
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return <>
        <ElevationScroll>
            <AppBar>
                <Toolbar>
                    <Typography variant="h3">
                        Arc Development
                    </Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />  {/* Putting invisible cushion beneath AppBar to push content below it :)*/}
    </>
}