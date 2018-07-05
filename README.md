<div align="center">
<h1>react-device-switch</h1>
 
<strong>A react component to render different content on mobile and desktop</strong>
</div>
 
<hr />
 
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![downloads][downloads-badge]][npmcharts]
[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]

[![size][size-badge]][unpkg-dist]
[![gzip size][gzip-badge]][unpkg-dist]
[![module formats: umd, cjs, and es][module-formats-badge]][unpkg-dist]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

Split your components by device target and do responsive JavaScript!

## This solution

A tiny react library, with no dependencies, that accepts a single breakpoint and uses `window.matchMedia`.

![device-switch](https://user-images.githubusercontent.com/433409/42350453-81f6176e-8065-11e8-98b1-f7a6bc89a4ff.gif)

## Installation

This module is distributed via [npm][npm], which is bundled with [node][node], and should be installed as one of your project's `dependencies`:

```
npm install --save react-device-switch
```

> This package also depends on `react` and `prop-types`. Please make sure you have those installed as well.

## Usage

See the complete [example](./example).

`react-device-switch` uses the react Context API. You need to import the `<DeviceSizeListener />` provider at the top level of your app, and the `<DeviceSwitch />` consumer wherever you want to render content specific to a device size.

```jsx
import React from "react";

import { DeviceSizeListener, DeviceSwitch } from "react-device-switch";

const BREAKPOINT = "min-width: 600px";

const App = () => (
  <DeviceSizeListener breakpoint={BREAKPOINT}>
    <DeviceSwitch mobileRender="Mobile!" desktopRender="Not a Mobile!" />
  </DeviceSizeListener>
);

export default App;
```

Alternatively, you can use `<DeviceMobile />` and `<DeviceDesktop />`:

```jsx
import React from "react";

import {
  DeviceSizeListener,
  DeviceMobile,
  DeviceDesktop
} from "react-device-switch";

const BREAKPOINT = "min-width: 600px";

const App = () => (
  <DeviceSizeListener breakpoint={BREAKPOINT}>
    <DeviceMobile>Mobile!</DeviceMobile>
    <DeviceDesktop>Not a Mobile!</DeviceDesktop>
  </DeviceSizeListener>
);

export default App;
```

## Other Solutions

- [`react-responsive`](https://github.com/contra/react-responsive)
- [`react-media`](https://github.com/ReactTraining/react-media)
- [`react-responsive-decorator`](https://github.com/damassi/react-responsive-decorator)

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/damusnet/react-device-switch.svg?style=plastic
[build]: https://travis-ci.org/damusnet/react-device-switch
[coverage-badge]: https://img.shields.io/codecov/c/github/damusnet/react-device-switch.svg?style=plastic
[coverage]: https://codecov.io/github/damusnet/react-device-switch
[greenkeeper-badge]: https://badges.greenkeeper.io/damusnet/react-device-switch.svg
[version-badge]: https://img.shields.io/npm/v/react-device-switch.svg?style=plastic
[package]: https://www.npmjs.com/package/react-device-switch
[downloads-badge]: https://img.shields.io/npm/dm/react-device-switch.svg?style=plastic
[npmcharts]: http://npmcharts.com/compare/react-device-switch
[license-badge]: https://img.shields.io/npm/l/react-device-switch.svg?style=plastic
[license]: https://github.com/damusnet/react-device-switch/blob/master/LICENSE
[github-watch-badge]: https://img.shields.io/github/watchers/damusnet/react-device-switch.svg?style=social
[github-watch]: https://github.com/damusnet/react-device-switch/watchers
[github-star-badge]: https://img.shields.io/github/stars/damusnet/react-device-switch.svg?style=social
[github-star]: https://github.com/damusnet/react-device-switch/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-device-switch!%20https://github.com/damusnet/react-device-switch%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/damusnet/react-device-switch.svg?style=social
[gzip-badge]: https://img.badgesize.io/https://unpkg.com/react-device-switch/dist/index.umd.js?compression=gzip&label=gzip%20size&style=plastic
[size-badge]: https://img.badgesize.io/https://unpkg.com/react-device-switch/dist/index.umd.js?label=size&style=plastic
[unpkg-dist]: https://unpkg.com/react-device-switch/dist/
[module-formats-badge]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg?style=plastic
