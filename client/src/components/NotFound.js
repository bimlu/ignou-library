import { Link } from "@material-ui/core";
import { NotFoundIcon } from "components/icons";
import { Spacing } from "components/Layout";
import PropTypes from "prop-types";
import React from "react";
import * as Routes from "routes";

/**
 * Component for displaying when we couldn't find the page
 */
const NotFound = ({ message, showHomePageLink }) => (
  <div>
    <h3>Oops!</h3>

    <Spacing top="sm" bottom="md">
      <h5>{message}</h5>
    </Spacing>

    <NotFoundIcon width="100" />

    <Spacing bottom="md" />

    {showHomePageLink && <Link href={Routes.HOME}>Go back to Home Page</Link>}
  </div>
);

NotFound.propTypes = {
  message: PropTypes.string,
  showHomePageLink: PropTypes.bool,
};

NotFound.defaultProps = {
  message: "We can't seem to find the page you're looking for.",
  showHomePageLink: true,
};

export default NotFound;
