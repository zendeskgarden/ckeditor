/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable require-unicode-regexp */

const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const dotenv = require('dotenv');
const { iconPlugins } = require('./iconPlugins');
const { plugins } = require('../postcss.config');

dotenv.config();

function isCssRule(rule) {
  return rule.test?.toString().indexOf('css') > -1;
}

function isSvgRule(rule) {
  return rule.test?.toString().indexOf('svg') > -1;
}

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  addons: [
    { name: '@storybook/addon-essentials', options: { actions: false, controls: false } },
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  webpackFinal: config => {
    config.module.rules.forEach(rule => {
      if (isCssRule(rule)) {
        rule.exclude = [/ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/, /theme\/[\w-/]+\.css$/];
      } else if (isSvgRule(rule)) {
        rule.exclude = [/ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/, /@zendeskgarden\/svg-icons/];
      }
    });

    const postCssConfig = styles.getPostCssConfig({
      themeImporter: {
        themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
      },
      minify: true
    });

    postCssConfig.plugins.push(...plugins);

    config.module.rules.unshift(
      {
        test: [
          /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
          /@zendeskgarden\/svg-icons/
        ],
        use: ['raw-loader']
      },
      {
        test: [/ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/, /theme\/[\w-/]+\.css$/],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: postCssConfig }
          }
        ]
      }
    );

    config.plugins.unshift(
      new CKEditorWebpackPlugin({
        language: 'en',
        buildAllTranslationsToSeparateFiles: true
      }),
      ...iconPlugins
    );

    return config;
  },

  docs: {
    autodocs: true
  }
};
