import "./Sidebar.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(
      "component will mount is executed before component is rendered"
    );
  }

  componentDidMount() {
    console.log("component did mount is executed after component is rendered");
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("component should update");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update");
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <div class="sidebar-container">{this.props.content}</div>;
  }
}

Sidebar.propTypes = {};

export default Sidebar;
