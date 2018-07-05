import React from "react";
import { render, cleanup } from "react-testing-library";

import { DeviceTypeContext, MOBILE, DESKTOP } from "../SizeListener";
import DeviceMobile from "../Mobile";

describe("<DeviceMobile />", () => {
  afterEach(cleanup);

  it("renders mobile content correctly on MOBILE", () => {
    const { container } = render(
      <DeviceTypeContext.Provider value={MOBILE}>
        <DeviceMobile>Mobile Content</DeviceMobile>
      </DeviceTypeContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders no mobile content on DESKTOP", () => {
    const { container } = render(
      <DeviceTypeContext.Provider value={DESKTOP}>
        <DeviceMobile>Mobile Content</DeviceMobile>
      </DeviceTypeContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
