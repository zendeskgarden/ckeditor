/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  panelPosition: 'bottom',
  theme: create({
    brandTitle: 'Zendesk Garden CKEditor',
    brandUrl: 'https://github.com/zendeskgarden/ckeditor',
    brandImage: null,
    colorSecondary: DEFAULT_THEME.palette.blue[700],
    fontBase: DEFAULT_THEME.fonts.system,
    fontCode: DEFAULT_THEME.fonts.mono
  })
});
