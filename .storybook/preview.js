/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { previewTheme } from './gardenTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: previewTheme
  },
  backgrounds: { disable: true }
};

const withBedrock = (story, context) => {
  if (context.globals.bedrock === 'enabled') {
    document.querySelector('link[href$="bedrock/index.css"]').removeAttribute('disabled');
  } else {
    document.querySelector('link[href$="bedrock/index.css"]').setAttribute('disabled', true);
  }

  return story();
};

export const decorators = [withBedrock];

export const globalTypes = {
  bedrock: {
    name: 'bedrock',
    description: 'CSS Bedrock',
    defaultValue: 'enabled',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'disabled', title: 'Bedrock disabled' },
        { value: 'enabled', title: 'Bedrock enabled' }
      ]
    }
  }
};
