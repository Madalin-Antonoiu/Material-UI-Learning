import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    }
}))

export default function Header() {
    const classes = useStyles();

    return <>
        <AppBar>
            <Toolbar>
                <Typography variant="h3">
                    Arc Development
                </Typography>
            </Toolbar>
        </AppBar>

        {/* Putting invisible cushion beneath AppBar to push content below it :)*/}
        <div className={classes.toolbarMargin} />
    </>
}