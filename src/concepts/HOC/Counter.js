import React from "react";

import WithCounter from "./WithCounter";
import PropTypes from "prop-types";

function ClickCounter(props) {
  return <button onClick={props.counter}>Clicked {props.count} times</button>;
}

export default WithCounter(ClickCounter);

ClickCounter.propTypes = {
  name: PropTypes.string.isRequired,
};
