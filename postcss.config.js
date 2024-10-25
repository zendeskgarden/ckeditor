/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('node:path');
const postcssImport = require('postcss-import');
const postcssInlineSsvg = require('postcss-inline-svg');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss({ config: path.join(__dirname, 'tailwind.config.js') }),
    postcssPresetEnv({
      stage: 3,
      features: {
        'custom-properties': { preserve: false },
        'nesting-rules': true,
        'system-ui-font-family': false
      }
    }),
    postcssInlineSsvg({
      paths: [path.join(__dirname, 'node_modules', '@zendeskgarden', 'svg-icons', 'src')]
    })
  ]
};
