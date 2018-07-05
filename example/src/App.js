import React from "react";

import { DeviceSizeListener, DeviceSwitch } from "../../src";

import logo from "./logo.svg";
import "./App.css";

const BREAKPOINT = "min-width: 600px";

const App = () => (
  <DeviceSizeListener breakpoint={BREAKPOINT}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React Device Switch example</h1>
      </header>
      <h2>
        <DeviceSwitch mobileRender="Mobile!" desktopRender="Not a Mobile!" />
      </h2>
      <h3>Resize this window under/above 600px wide to toggle the content.</h3>
    </div>
  </DeviceSizeListener>
);

export default App;
