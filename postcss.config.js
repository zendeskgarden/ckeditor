/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('node:path');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssInlineSsvg = require('postcss-inline-svg');
const { DEFAULT_THEME } = require('@zendeskgarden/react-theming');

function generateVariables(prefix, value, variables = {}) {
  if (typeof value === 'string' || typeof value === 'number') {
    return {
      ...variables,
      [prefix]: value
    };
  }

  if (typeof value === 'object') {
    return Object.keys(value)
      .filter(key => {
        if (key === 'rtl' || key === 'colors' || key === 'components' || key === 'shadows') {
          return false;
        }

        return true;
      })
      .map(key => generateVariables(`${prefix}-${key.toUpperCase()}`, value[key], variables))
      .reduce((retVal, values) => {
        return {
          ...retVal,
          ...values
        };
      }, variables);
  }

  throw new Error(`Invalid theme type ${typeof value} for ${prefix}`);
}

const variables = generateVariables('ZD', DEFAULT_THEME);

module.exports = {
  plugins: [
    postcssSimpleVars({
      variables
    }),
    postcssInlineSsvg({
      paths: [path.join(__dirname, 'node_modules', '@zendeskgarden', 'svg-icons', 'src')]
    })
  ]
};
