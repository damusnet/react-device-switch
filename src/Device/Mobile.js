import React from "react";
import PropTypes from "prop-types";

import DeviceSwitch from "./Switch";

const DeviceMobile = ({ children }) => <DeviceSwitch mobileRender={children} />;

DeviceMobile.propTypes = { children: PropTypes.node.isRequired };

export default DeviceMobile;
