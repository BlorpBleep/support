---
id: helpers-aliases-helpers
title: Aliases
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts)

We have created a lot of helpful aliases that you can use in your project.

## eightshiftBlocksWhatwgFetch

Alias providing [Whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch).

```js
import 'eightshiftBlocksWhatwgFetch';
```

## eightshiftBlocksSwiper

Alias providing [Swiper](https://www.npmjs.com/package/swiper).

```js
import 'eightshiftBlocksSwiper';
```

## eightshiftBlocksSwiperIE

Alias providing [Swiper](https://www.npmjs.com/package/swiper) but for IE11 version.

```js
import 'eightshiftBlocksSwiperIE';
```

## eightshiftBlocksBabelPolyfill

Alias providing [Babel Polyfill](https://babeljs.io/docs/en/babel-polyfill).

```js
import 'eightshiftBlocksBabelPolyfill';
```

## eightshiftBlocksAutoprefixer

Alias providing [Autoprefixer](https://github.com/postcss/autoprefixer).

```js
import 'eightshiftBlocksAutoprefixer';
```

## eightshiftBlocksNormalize

Alias providing [Normalize](https://www.npmjs.com/package/normalize-scss). Check documentation for more details.

```scss
@import 'eightshiftBlocksNormalize';
@include normalize(); // stylelint-disable-line at-rule-empty-line-before
```

## eightshiftBlocksMediaBlender

Alias providing [Media Blender](https://github.com/infinum/media-blender). Check documentation for more details.

```scss
@import 'eightshiftBlocksMediaBlender';
```

## eightshiftBlocksSwiperStyle

Alias providing [Swiper](https://www.npmjs.com/package/swiper).

```scss
@import 'eightshiftBlocksSwiperStyle';
```

## eightshiftBlocksDynamicImport

To get (require) all the files using the `require.context` method, we created a helper located [here](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts/helpers/dynamic-import.js).

It will find all files recursively in the folder using a regex. The following example will require all `assets/index.js` files inside the `custom` folder, so there is no need to add the files to the build manually.

```js
import { dynamicImport } from 'eightshiftBlocksDynamicImport';

dynamicImport(require.context('./../../custom', true, /assets\/index.js$/));
```

## eightshiftBlocksRegisterBlocks

Alias providing blocks registration. For more details check [here](/docs/legacy/v4/guides/blocks-registration).

## eightshiftBlocksUcfirst

Converts the first letter of a string to uppercase.

```js
import { ucfirst } from 'eightshiftBlocksUcfirst';

ucfirst('custom string');
```

## eightshiftBlocksGetActions

Alias providing blocks actions helper. For more details check [here](/docs/legacy/v4/guides/blocks-get-actions-helper).

## eightshiftBlocksUtilityHelpersPath

We have also created a bunch of JavaScript helpers located in the [helpers folder](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts/helpers).

This alias provides only path to the helpers folder.

```js
import { media } from 'eightshiftBlocksUtilityHelpersPath/media';
```

## eightshiftFrontendLibs

Alias providing [eightshift Frontend Libs](https://infinum.github.io/eightshift-frontend-libs/sassdocs/).

```scss
@import 'eightshiftFrontendLibs';
```

## eightshiftEditorStyleOverride

It provides the Block Editor overrides on some styles to give better UX for our block.

```scss
@import 'eightshiftEditorStyleOverride';
```


## eightshiftComponentColorPalette

Alias providing custom React component. For more details check [here](components-color-palette.md).

## eightshiftComponentHeadingLevel

Alias providing custom React component. For more details check [here](components-heading-level.md).
