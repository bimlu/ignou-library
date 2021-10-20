import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Skeleton from "@material-ui/lab/Skeleton";
import PLACEHOLDER_IMAGE from "assets/images/card_placeholder.png";
import { TermType2 } from "constants/TermType";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  actionArea: {
    borderRadius: 16,
  },
  card: {
    minWidth: 256,
    borderRadius: 16,
  },
  cardLoading: {
    minWidth: 256,
    borderRadius: 16,
  },
  content: {
    minHeight: 110,
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
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

const ProgrammeCard = ({ title, subtitle, image, url, loading, termType, termsCount, totalCredits }) => {
  const classes = useStyles();
  const [imageSrc, setImageSrc] = useState(PLACEHOLDER_IMAGE);
  const [loadingImage, setLoadingImage] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
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

  return (
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
            {loading ? <Skeleton style={{ display: "inline-block" }} width="15%" /> : <b>{title}</b>}
          </Typography>

          {loading ? (
            <Skeleton style={{ display: "inline-block", marginLeft: 8 }} variant="circle">
              <CheckCircleIcon color="primary" className={classes.checkIcon} />
            </Skeleton>
          ) : (
            <CheckCircleIcon color="primary" className={classes.checkIcon} />
          )}

          <Typography variant="body1" gutterBottom={true} noWrap={true}>
            {loading ? <Skeleton width="80%" /> : <b>{subtitle}</b>}
          </Typography>

          <Typography variant="body1" noWrap={true}>
            {loading ? (
              <Skeleton width="50%" />
            ) : (
              <b>
                {totalCredits} Credits{" │ "}
                {termsCount} {TermType2[termType]}
              </b>
            )}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ProgrammeCard;
