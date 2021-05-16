import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    paper: {
        margin: "12px 0px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        just: 'center',
        padding: theme.spacing(2),
        width: "100%",
        height: "100%",
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '50%',
        margin: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: "#333",
        padding: 50,
        [theme.breakpoints.down('sm')] : {
            width: "80%"
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
    font2: {
        color: "#FFF",
        paddingRight: 8,
        marginTop: 12,
        fontFamily: "lato",
    }
}));