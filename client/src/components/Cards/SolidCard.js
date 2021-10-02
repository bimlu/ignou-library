import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Color from "color";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { TermType2 } from "constants/TermType";

const useStyles = makeStyles((theme) => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    // boxShadow: 'none',
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
    },
  }),
  content: () => {
    return {
      minHeight: 110,
      // backgroundColor: color,
      background: theme.palette.background.paper,
      padding: theme.spacing(1),
      // "& > *": {
      //   whiteSpace: "nowrap",
      //   overflow: "hidden",
      //   textOverflow: "ellipsis",
      //   marginLeft: theme.spacing(1),
      // },
    };
  },
  image: {
    component: "img",
    height: 150,
  },
  checkIcon: {
    fontSize: theme.spacing(2.2),
    marginLeft: theme.spacing(0.6),
  },
}));

const SolidCard = ({ title, subtitle, image, color, url, loading, termType, termsCount, totalCredits }) => {
  const classes = useStyles({ color: color });

  return loading ? (
    <Skeleton variant="rect" className={classes.card} height={272} />
  ) : (
    <CardActionArea component={Link} to={url} className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia className={classes.image} image={image} alt={title} />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="span" gutterBottom={true}>
            <b>{title}</b>
          </Typography>

          <CheckCircleIcon color="primary" className={classes.checkIcon} />

          <Typography variant="body1" gutterBottom={true} noWrap={true}>
            <b>{subtitle}</b>
          </Typography>

          {/* <Typography variant="caption">{studentData}</Typography>
          {", "}
          <Typography variant="caption">{otherData}</Typography> */}

          <Typography variant="body1" noWrap={true}>
            <b>
              {totalCredits} Credits{" │ "}
              {termsCount} {TermType2[termType]}
            </b>
          </Typography>

          {/* <Typography>
            <b>SOH</b>(School of Humanities)
          </Typography> */}
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default SolidCard;
