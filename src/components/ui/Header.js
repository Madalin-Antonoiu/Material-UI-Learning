import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


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

export default function Header(props) {
    return (
        <ElevationScroll>
            <AppBar>
                <Toolbar>Arc Development</Toolbar> {/* horizontal stacking */}
            </AppBar>
        </ElevationScroll>
    )
}