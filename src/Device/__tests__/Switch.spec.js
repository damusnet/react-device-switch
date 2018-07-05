import React from "react";
import { render, cleanup } from "react-testing-library";

import { DeviceTypeContext, MOBILE, DESKTOP } from "../SizeListener";
import DeviceSwitch from "../Switch";

describe("<DeviceSwitch />", () => {
  afterEach(cleanup);

  it("renders mobile content correctly on MOBILE", () => {
    const { container } = render(
      <DeviceTypeContext.Provider value={MOBILE}>
        <DeviceSwitch
          desktopRender="Desktop Content"
          mobileRender="Mobile Content"
        />
      </DeviceTypeContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders desktop content correctly on DESKTOP", () => {
    const { container } = render(
      <DeviceTypeContext.Provider value={DESKTOP}>
        <DeviceSwitch
          desktopRender="Desktop Content"
          mobileRender="Mobile Content"
        />
      </DeviceTypeContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
