import React from "react";
import { render, cleanup } from "react-testing-library";

import DeviceSizeListener from "../SizeListener";
import DeviceSwitch from "../Switch";

const BREAKPOINT = "min-width: 600px";

describe("<DeviceSizeListener />", () => {
  afterEach(cleanup);

  it("creates a provider correctly on the server", () => {
    const { container } = render(
      <DeviceSizeListener breakpoint={BREAKPOINT}>
        <DeviceSwitch
          desktopRender="Desktop Content"
          mobileRender="Mobile Content"
        />
      </DeviceSizeListener>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("creates a provider correctly on the client for a desktop", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn(() => ({
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn()
      }))
    });

    const { container } = render(
      <DeviceSizeListener breakpoint={BREAKPOINT}>
        <DeviceSwitch
          desktopRender="Desktop Content"
          mobileRender="Mobile Content"
        />
      </DeviceSizeListener>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("creates a provider correctly on the client for a mobile", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn()
      }))
    });

    const { container } = render(
      <DeviceSizeListener breakpoint={BREAKPOINT}>
        <DeviceSwitch
          desktopRender="Desktop Content"
          mobileRender="Mobile Content"
        />
      </DeviceSizeListener>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("removes the matchMedia listener on componentWillUnmount", () => {
    const removeListener = jest.fn();

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener
      }))
    });

    const { unmount } = render(
      <DeviceSizeListener breakpoint={BREAKPOINT}>content</DeviceSizeListener>
    );

    unmount();

    expect(removeListener).toHaveBeenCalled();
  });
});
