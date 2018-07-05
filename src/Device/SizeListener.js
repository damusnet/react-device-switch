import React, { createContext, Component } from "react";
import PropTypes from "prop-types";

export const MOBILE = "MOBILE";
export const DESKTOP = "DESKTOP";

export const DeviceTypeContext = createContext(MOBILE);

class DeviceSizeListener extends Component {
  constructor(props) {
    super(props);
    this.state = { deviceType: MOBILE };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    const { breakpoint } = this.props;
    if (typeof window !== "undefined" && window.matchMedia) {
      this.media = window.matchMedia(`(${breakpoint})`);
      this.media.addListener(this.resize);
      this.resize();
    }
  }

  componentWillUnmount() {
    if (this.media) {
      this.media.removeListener(this.resize);
    }
  }

  resize() {
    const { deviceType } = this.state;

    const realDeviceType = this.media.matches ? DESKTOP : MOBILE;

    if (deviceType !== realDeviceType) {
      this.setState({ deviceType: realDeviceType });
    }
  }

  render() {
    const { children } = this.props;
    const { deviceType } = this.state;
    return (
      <DeviceTypeContext.Provider value={deviceType}>
        {children}
      </DeviceTypeContext.Provider>
    );
  }
}

DeviceSizeListener.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default DeviceSizeListener;
