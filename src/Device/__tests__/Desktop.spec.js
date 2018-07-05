import React from "react";
import { render, cleanup } from "react-testing-library";

import { DeviceTypeContext, MOBILE, DESKTOP } from "../SizeListener";
import DeviceDesktop from "../Desktop";

describe("<DeviceDesktop />", () => {
  afterEach(cleanup);

  it("renders desktop content correctly on DESKTOP", () => {
    const { container } = render(
      <DeviceTypeContext.Provider value={DESKTOP}>
        <DeviceDesktop>Desktop Content</DeviceDesktop>
      </DeviceTypeContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders no desktop content on MOBILE", () => {
    const { container } = render(
      <DeviceTypeContext.Provider value={MOBILE}>
        <DeviceDesktop>Desktop Content</DeviceDesktop>
      </DeviceTypeContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
