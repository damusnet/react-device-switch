import React from "react";
import PropTypes from "prop-types";

import { DeviceTypeContext, MOBILE, DESKTOP } from "./SizeListener";

const DeviceSwitch = ({ desktopRender, mobileRender }) => (
  <DeviceTypeContext.Consumer>
    {deviceType => {
      if (deviceType === DESKTOP && desktopRender) {
        return desktopRender;
      }

      if (deviceType === MOBILE && mobileRender) {
        return mobileRender;
      }

      return null;
    }}
  </DeviceTypeContext.Consumer>
);

DeviceSwitch.propTypes = {
  mobileRender: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  desktopRender: PropTypes.oneOfType([PropTypes.bool, PropTypes.node])
};

DeviceSwitch.defaultProps = {
  mobileRender: false,
  desktopRender: false
};

export default DeviceSwitch;
