/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable require-unicode-regexp */

const webpack = require('webpack');

module.exports.iconPlugins = [
  new webpack.NormalModuleReplacementPlugin(
    /bold\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/bold-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /italic\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/italic-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /underline\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/underline-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /code\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/markup-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /horizontalline\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/horizontal-rule-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /link\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/link-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /pencil\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/pencil-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /dropdown-arrow\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /numberedlist\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/list-number-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /bulletedlist\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/list-bullet-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /quote\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/quote-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /indent\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/indent-increase-stroke.svg')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /outdent\.svg/,
    require.resolve('@zendeskgarden/svg-icons/src/16/indent-decrease-stroke.svg')
  )
];
