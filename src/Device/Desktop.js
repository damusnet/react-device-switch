import React from "react";
import PropTypes from "prop-types";

import DeviceSwitch from "./Switch";

const DeviceDesktop = ({ children }) => (
  <DeviceSwitch desktopRender={children} />
);

DeviceDesktop.propTypes = { children: PropTypes.node.isRequired };

export default DeviceDesktop;
