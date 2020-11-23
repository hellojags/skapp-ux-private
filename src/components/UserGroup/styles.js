import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    cardgroup: {
        display: 'flex',
        borderRadius: 'unset',
        padding: '0px 10px',
        width: '16.67%'
    },
    cardtitle: {
        color: '#131523',
        font: 'normal normal bold 20px/28px Aileron',
        marginBottom: '5px'
    },
    cardsbutitle: {
        color: '#5A607F',
        font: 'normal normal normal 14px/20px Aileron',
        marginTop: '5px',
        marginBottom: '5px'
    },
    statusdetails: {
        display: 'flex',
        color: '#06A561',
        font: 'normal normal normal 14px/20px Aileron',
        marginTop: '5px'
    },
    statusdetails1: {
        display: 'flex',
        color: '#F0142F',
        font: 'normal normal normal 14px/20px Aileron',
        marginTop: '5px'
    },
    cardimage: {
        width: '15%',
        margin: 'auto',
        padding: '5px',
        borderRadius: '50%',
        backgroundColor: '#e8f8f1',
    },
    cardstatus: {
        marginRight: '10px'
    }
}))