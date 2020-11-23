import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(5),
  },
  d_flex: {
      display: 'flex'
  },
  title: {
    color: '#131523',
    fontSize: '28px !important',
    fontWeight: 'bold !important',
    marginTop: 'auto'
  },
  subtitle: {
    color: '#5A607F',
    fontSize: '16px !important',
    fontWeight: 'normal !important',
    marginTop: 'auto',
    marginLeft: '10px'
  },
  filter: {
    display: 'flex',
  },
}));
