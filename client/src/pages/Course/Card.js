import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: theme.spacing(2),
    height: 200,
    maxHeight: 200,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    // justifyContent: "space-around",
  },
  button: {
    padding: `${theme.spacing(1.6)}px ${theme.spacing(2.2)}px`,
    fontSize: theme.spacing(1.6),
    borderRadius: theme.spacing(2),
    textTransform: "none",
  },
  actionArea: {
    borderRadius: theme.spacing(2),
  },
}));

export default function SimpleCard({ title, subtitle, loading, url, credit }) {
  const classes = useStyles();

  return loading ? (
    <Skeleton variant="rect" className={classes.card} height={275} />
  ) : (
    <CardActionArea component={Link} to={url} className={classes.actionArea}>
      <Card className={classes.card}>
        <Typography variant="h4" color="textSecondary">
          <b>{title}</b>
        </Typography>

        <Typography variant="body1" gutterBottom>
          <b>{subtitle}</b>
        </Typography>

        <Typography variant="body1" color="textSecondary">
          <b>{credit} credits</b>
        </Typography>
      </Card>
    </CardActionArea>
  );
}
