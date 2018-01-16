import React from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native";
const ckeditor = require("./ckeditor.html");

const Button = props => <WebView source={ckeditor} 
onMessage={(data)=>console.warn(data)}
style={{ flex: 1 }} />;

Button.propTypes = {
  // children: PropTypes.node.isRequired,
  onPress: PropTypes.func
};
Button.defaultProps = {
  onPress: () => {}
};

export { Button as default };
