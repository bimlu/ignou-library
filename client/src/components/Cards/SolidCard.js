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
import { useEffect, useRef, useState } from "react";
import PLACEHOLDER_IMAGE from "assets/images/card_placeholder.png";

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
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
    },
  }),
  cardLoading: {
    minWidth: 256,
    borderRadius: 16,
  },
  content: () => {
    return {
      minHeight: 110,
      background: theme.palette.background.paper,
      padding: theme.spacing(1),
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
  const [imageSrc, setImageSrc] = useState(PLACEHOLDER_IMAGE);
  const [loadingImage, setLoadingImage] = useState(true);
  const isMounted = useRef(false);
  const [wait, setWait] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    const timerId = setTimeout(() => setWait(false), [1]);
    return () => {
      isMounted.current = false;
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const imageToLoad = new Image();
    imageToLoad.src = image;
    imageToLoad.onload = () => {
      setImageSrc(image);
      setLoadingImage(false);
    };

    return () => {
      if (!imageToLoad) return;
      imageToLoad.onload = () => {};
    };
  }, [isMounted]);

  return loading || wait ? (
    <Skeleton variant="rect" className={classes.cardLoading} height={272} />
  ) : (
    <CardActionArea component={Link} to={url} className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          image={imageSrc}
          component="img"
          alt={title}
          style={{
            opacity: loadingImage ? 0.5 : 1,
            transition: "opacity .15s linear",
          }}
        />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="span" gutterBottom={true}>
            <b>{title}</b>
          </Typography>

          <CheckCircleIcon color="primary" className={classes.checkIcon} />

          <Typography variant="body1" gutterBottom={true} noWrap={true}>
            <b>{subtitle}</b>
          </Typography>

          <Typography variant="body1" noWrap={true}>
            <b>
              {totalCredits} Credits{" │ "}
              {termsCount} {TermType2[termType]}
            </b>
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default SolidCard;
