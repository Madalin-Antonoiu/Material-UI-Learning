import React, { useEffect, useState } from 'react';
import {
    AppBar, Toolbar, Tabs, Tab, Button, Menu,
    MenuItem, SwipeableDrawer, IconButton,
    List, ListItem, ListItemText
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu"


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
    },
    drawerIcon: {
        height: "40px",
        width: "40px",
        [theme.breakpoints.down("xs")]: {
            height: "30px",
            width: "30px",
        },
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemEstimate: {
        background: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    }
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i)
    }
    const menuOptions = [
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
        { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
        { name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
        { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 },
    ]
    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Services", link: "/services", activeIndex: 1 },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 }
    ]

    useEffect(() => {
        // Active Tab Refresh Fix - refactor
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                    }
                    if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                        setSelectedIndex(route.selectedIndex)
                    }
                    break;
                default:
                    break;
            }
        })
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [value])

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

            <Menu id="simple-menu" classes={{ paper: classes.menu }} anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }} elevation={0}>
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

    const drawer = (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)}
                classes={{ paper: classes.drawer }}
            >

                <List disablePadding>
                    <ListItem selected={value === 0} onClick={() => { setOpenDrawer(false); setValue(0) }} divider button component={Link} to="/">
                        <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 1} onClick={() => { setOpenDrawer(false); setValue(1) }} divider button component={Link} to="/services">
                        <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 2} onClick={() => { setOpenDrawer(false); setValue(2) }} divider button component={Link} to="/revolution">
                        <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 3} onClick={() => { setOpenDrawer(false); setValue(3) }} divider button component={Link} to="/about">
                        <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 4} onClick={() => { setOpenDrawer(false); setValue(4) }} divider button component={Link} to="/contact">
                        <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Contact Us</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 5} className={classes.drawerItemEstimate} onClick={() => { setOpenDrawer(false); setValue(5) }} divider button component={Link} to="/estimate">
                        <ListItemText className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>

            </SwipeableDrawer>

            <IconButton className={classes.drawerIconContainer}>
                <MenuIcon
                    onClick={() => setOpenDrawer(!openDrawer)}
                    disableRipple
                    className={classes.drawerIcon}
                />
            </IconButton>
        </>
    )

    return <>
        <ElevationScroll>
            <AppBar>
                <Toolbar disableGutters>
                    <Button className={classes.logoContainer} component={Link} to="/" onClick={() => setValue(0)} disableRipple>
                        <img className={classes.logo} alt="company logo" src={logo} />
                    </Button>

                    {matches ? drawer : tabs}

                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
    </>
}