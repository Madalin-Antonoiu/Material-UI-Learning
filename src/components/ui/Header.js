import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles";

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
        marginBottom: "1.25em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "0.25em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "0.25em",
        },
    },
    logo: {
        height: "6em",
        [theme.breakpoints.down("md")]: {
            height: "5em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "4em"
        },

    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
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
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i)
    }
    const menuOptions = [
        { name: "Services", link: "/services" },
        { name: "Custom Software Development", link: "/customsoftware" },
        { name: "Mobile App Development", link: "/mobileapps" },
        { name: "Website Development", link: "/websites" },
    ]

    const activeTabRefreshFix = (value) => {
        switch (window.location.pathname) {
            default:
                break;
            case "/":
                if (value !== 0) { setValue(0) } break;
            case "/services":
                if (value !== 1) { setValue(1); setSelectedIndex(0); } break;
            case "/customsoftware":
                if (value !== 1) { setValue(1); setSelectedIndex(1); } break;
            case "/mobileapps":
                if (value !== 1) { setValue(1); setSelectedIndex(2); } break;
            case "/websites":
                if (value !== 1) { setValue(1); setSelectedIndex(3); } break;
            case "/revolution":
                if (value !== 2) { setValue(2); } break;
            case "/about":
                if (value !== 3) { setValue(3); } break;
            case "/contact":
                if (value !== 4) { setValue(4); } break;
            case "/estimate":
                if (value !== 5) { setValue(5); } break;
        }
    }

    useEffect(() => {
        activeTabRefreshFix(value);
    }, [value])

    const tabs = (
        <>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                <Tab className={classes.tab} component={Link} to="/" label="Home" />
                <Tab
                    className={classes.tab}
                    component={Link}
                    to="/services"
                    label="Services"
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={anchorEl ? "true" : undefined}
                    onMouseOver={event => handleClick(event)}
                />
                <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.button}>
                Free Estimate
                    </Button>

            <Menu id="simple-menu" classes={{ paper: classes.menu }} anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }} elevation={0}>
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={option}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={ev => { handleMenuItemClick(ev, i); setValue(1); handleClose() }}
                        selected={i === selectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )

    return <>
        <ElevationScroll>
            <AppBar>
                <Toolbar disableGutters>
                    <Button className={classes.logoContainer} component={Link} to="/" onClick={() => setValue(0)} disableRipple>
                        <img className={classes.logo} alt="company logo" src={logo} />
                    </Button>

                    {matches ? null : tabs}

                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
    </>
}