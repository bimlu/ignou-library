import Slide from "@material-ui/core/Slide";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return matches ? (
    children
  ) : (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
