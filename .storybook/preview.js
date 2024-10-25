/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, ThemeProvider, getColor } from '@zendeskgarden/react-theming';
import React from 'react';
import { create } from '@storybook/theming/create';

const DARK_THEME = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' } };
const DARK = getColor({ theme: DARK_THEME, variable: 'background.subtle' });
const LIGHT = getColor({ theme: DEFAULT_THEME, variable: 'background.subtle' });

export const parameters = {
  backgrounds: {
    grid: { disable: true },
    values: [
      { name: 'light', value: LIGHT },
      { name: 'dark', value: DARK }
    ]
  },
  controls: { hideNoControlsWarning: true },
  docs: {
    theme: create({
      base: DEFAULT_THEME.colors.base
    })
  },
  options: {
    storySort: {
      order: ['README']
    }
  }
};

const withBedrock = (story, context) => {
  if (context.globals.bedrock === 'enabled') {
    document.querySelector('link[href$="bedrock/dist/index.css"]').removeAttribute('disabled');
  } else {
    document.querySelector('link[href$="bedrock/dist/index.css"]').setAttribute('disabled', true);
  }

  return story();
};

const withThemeProvider = (story, context) => {
  const colors = {
    ...DEFAULT_THEME.colors,
    primaryHue: context.globals.primaryHue,
    variables: {
      ...DEFAULT_THEME.colors.variables,
      dark: context.args['colors.dark'],
      light: context.args['colors.light']
    }
  };

  if (
    context.globals.backgrounds && context.globals.backgrounds.value !== 'transparent'
      ? context.globals.backgrounds.value === DARK
      : context.parameters.backgrounds.default === 'dark'
  ) {
    colors.base = 'dark';
  }

  const rtl = context.globals.locale === 'rtl';
  const theme = { ...DEFAULT_THEME, colors, rtl };

  return (
    <ThemeProvider theme={theme}>
      <div data-ck-color-scheme={theme.colors.base}>{story()}</div>
    </ThemeProvider>
  );
};

export const decorators = [withBedrock, withThemeProvider];

export const globalTypes = {
  locale: {
    name: 'direction',
    description: 'Locale direction',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ltr', title: 'LTR' },
        { value: 'rtl', title: 'RTL' }
      ]
    }
  },
  bedrock: {
    name: 'bedrock',
    description: 'CSS Bedrock',
    defaultValue: 'enabled',
    toolbar: {
      icon: 'link',
      items: [
        { value: 'enabled', title: 'Bedrock enabled' },
        { value: 'disabled', title: 'Bedrock disabled' }
      ]
    }
  }
};
