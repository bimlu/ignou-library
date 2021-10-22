import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  warning: {
    marginTop: theme.spacing(4),
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    borderRadius: theme.spacing(2),
  },
  error: {
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    borderRadius: theme.spacing(2),
  },
}));

const NoInternet = ({ message }) => {
  const classes = useStyles();

  return (
    <>
      <Alert severity="warning" className={classes.warning}>
        Sorry, there was an error!
      </Alert>
      <Alert severity="error" className={classes.error}>
        {message}
      </Alert>
    </>
  );
};

export default NoInternet;
