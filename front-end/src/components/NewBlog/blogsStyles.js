import { makeStyles } from '@material-ui/core';

export default makeStyles(theme =>({
    font1: {
        paddingTop: 16,
        fontFamily: "Girassol",
        letterSpacing: 2
    },

    // Blog Form
    form : {
        padding: 24,
    },
    closeBtn: {
        position: "absolute",
        right: 10,
        height: 25,
        width: 25,
        top: 10,
        fontSize: "1em"
    },

    // BLOGS
    blogContainer: {
        height: 580,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            flexWrap: "wrap"
        }
    },

    // Main Feature
    leftFeature: {
        width: "100%",
        height: "100%",
        marginLeft: 220,
        marginRight: 20,
        [theme.breakpoints.down('md')] : {
            margin: "0px 50px",
        }
    },
    media:{
        height: 475,
        cursor: "pointer"
    },

    rightFeature: {
        display: "flex",
        width: "100%",
        height: 120,
        [theme.breakpoints.down('md')]: {
            margin: "9px 50px",
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    cover: {
        width: 130,
        height: 120
    },
    paper: {
        height: "100%",
        padding: 16,
        marginRight: 250,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            margin: "9px 50px",
        }
    }
}))