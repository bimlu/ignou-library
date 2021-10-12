import Fade from "@material-ui/core/Fade";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const HideSpeedDialOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return <Fade in={!trigger}>{children}</Fade>;
};

export default HideSpeedDialOnScroll;
