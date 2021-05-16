import { makeStyles } from '@material-ui/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles(theme =>({
    logo: {
        fontSize: '3em',
        marginTop: 12
    },
    loginBtn: {
        fontFamily: 'Newsreader',
    },
    font2: {
        fontFamily: 'Josefin Sans'
    },
    font3: {
        fontFamily: 'Lato'
    },
    navbar: {
        backgroundColor: '#262220',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        color: "#FFF"
    },
    avatar: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));