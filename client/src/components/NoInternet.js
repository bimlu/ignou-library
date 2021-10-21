import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  alert: {
    margin: `${theme.spacing(4)}px ${theme.spacing(0)}px`,
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
}));

const NoInternet = () => {
  const classes = useStyles();

  return (
    <Alert severity="warning" className={classes.alert}>
      Please check your internet connection
    </Alert>
  );
};

export default NoInternet;
