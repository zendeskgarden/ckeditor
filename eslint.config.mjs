/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import prettierConfig from 'eslint-config-prettier';
import config from '@zendeskgarden/eslint-config';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import reactPlugin from '@zendeskgarden/eslint-config/plugins/react.js';

export default [
  ...config,
  noticePlugin,
  reactPlugin,
  prettierConfig,
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/public/**', '**/.cache/**', '**/.github/**']
  },
  {
    rules: {
      'sort-imports': ['error', { allowSeparatedGroups: true }]
    }
  }
];
