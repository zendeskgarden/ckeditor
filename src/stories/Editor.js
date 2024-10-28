/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlockEditing from '@ckeditor/ckeditor5-code-block/src/codeblockediting';
import { CodeBlockUI } from './plugins/CodeBlockUI';
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import { add } from '@ckeditor/ckeditor5-utils/src/translation-service';
import { getEnvKeystrokeText } from '@ckeditor/ckeditor5-utils/src/keyboard';

/**
 * Garden theme customizations
 */
import '../theme/theme.css';

/**
 * Add custom tooltip values
 */
add('en', {
  'Bulleted List': `Bulleted list (${getEnvKeystrokeText('CTRL+SHIFT+8')})`,
  'Numbered List': `Numbered list (${getEnvKeystrokeText('CTRL+SHIFT+7')})`,
  'Decrease indent': `Decrease indent (${getEnvKeystrokeText('CTRL+[')})`,
  'Increase indent': `Increase indent (${getEnvKeystrokeText('CTRL+]')})`,
  'Block quote': `Blockquote (${getEnvKeystrokeText('CTRL+SHIFT+9')})`,
  Code: `Code (${getEnvKeystrokeText('CTRL+SHIFT+5')})`,
  'Horizontal line': `Horizontal rule (${getEnvKeystrokeText('CTRL+SHIFT+L')})`
});

const plugins = [
  Essentials,
  Bold,
  Italic,
  Paragraph,
  Underline,
  Code,
  HorizontalLine,
  Link,
  Indent,
  IndentBlock,
  List,
  BlockQuote,
  Heading,
  CodeBlockEditing,
  CodeBlockUI,
  Widget
];

const toolbar = [
  'heading',
  'bold',
  'italic',
  'underline',
  'code',
  '|',
  'bulletedList',
  'numberedList',
  'outdent',
  'indent',
  '|',
  'blockquote',
  'codeBlock',
  'link',
  'horizontalLine'
];

const codeBlock = {
  languages: [{ language: 'plaintext', label: 'Plain text' }]
};

export const Editor = ({ data, onChange, toolbarClassName }) => {
  const theme = useTheme();
  const language = theme.rtl ? 'ar' : 'en';

  const onReady = editor => {
    /**
     * Apply custom keyboard shortcuts
     */
    editor.keystrokes.set('CTRL+SHIFT+8', 'bulletedList');
    editor.keystrokes.set('CTRL+SHIFT+7', 'numberedList');
    editor.keystrokes.set(['ctrl', 219], 'outdent'); // CTRL+[
    editor.keystrokes.set(['ctrl', 221], 'indent'); // CTRL+]
    editor.keystrokes.set('CTRL+SHIFT+9', 'blockQuote');
    editor.keystrokes.set('CTRL+SHIFT+5', 'code');
    editor.keystrokes.set('CTRL+SHIFT+L', 'horizontalLine');

    /**
     * Attach decoupled toolbar
     */
    const toolbarElement = document.querySelector(`.${toolbarClassName}`);

    if (toolbarElement.hasChildNodes()) {
      toolbarElement.innerHTML = '';
    }

    toolbarElement.appendChild(editor.ui.view.toolbar.element);

    /**
     * Reset tooltip placement
     */
    const toolbarItems = editor.ui.view.toolbar.items;

    for (const toolbarItem of toolbarItems) {
      if (toolbarItem.buttonView) {
        toolbarItem.buttonView.set('tooltipPosition', 'n');
      } else {
        toolbarItem.set('tooltipPosition', 'n');
      }
    }

    /**
     * Reset overflow dropdown placement
     */
    if (!editor.config.get('toolbar').shouldNotGroupWhenFull) {
      const overflowDropdown = editor.ui.view.toolbar._behavior.groupedItemsDropdown;

      overflowDropdown.set('panelPosition', 'nw');
      overflowDropdown.buttonView.set('tooltipPosition', 'n');
    }

    /**
     * Disable spell checker for demo content
     */
    editor.editing.view.change(writer => {
      writer.setAttribute('spellcheck', 'false', editor.editing.view.document.getRoot());
    });
  };

  useEffect(() => {
    document.body.dataset.ckColorScheme = theme.colors.base;
  }, [theme]);

  return (
    <CKEditor
      key={language} // HACK https://github.com/ckeditor/ckeditor5-react/issues/233#issuecomment-1569448103
      editor={DecoupledEditor}
      data={data}
      config={{ language, plugins, toolbar, codeBlock }}
      onChange={onChange}
      onReady={onReady}
    />
  );
};

Editor.propTypes = {
  data: PropTypes.string,
  onChange: PropTypes.func,
  toolbarClassName: PropTypes.string.isRequired
};
