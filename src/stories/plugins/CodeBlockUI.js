/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import codeBlockIcon from '@zendeskgarden/svg-icons/src/16/terminal-window-stroke.svg';
import { getNormalizedAndLocalizedLanguageDefinitions } from '@ckeditor/ckeditor5-code-block/src/utils';

export class CodeBlockUI extends Plugin {
  init() {
    const editor = this.editor;
    const t = editor.t;
    const componentFactory = editor.ui.componentFactory;
    const normalizedLanguageDefs = getNormalizedAndLocalizedLanguageDefinitions(editor);
    const defaultLanguageDefinition = normalizedLanguageDefs[0];

    componentFactory.add('codeBlock', locale => {
      const command = editor.commands.get('codeBlock');

      const buttonView = new ButtonView(locale);

      buttonView.set({
        label: t('Insert code block'),
        tooltip: true,
        keystroke: 'CTRL+SHIFT+6',
        icon: codeBlockIcon,
        isToggleable: true
      });

      buttonView.bind('isEnabled').to(command);

      buttonView.on('execute', () => {
        editor.execute('codeBlock', {
          language: defaultLanguageDefinition.language
        });

        editor.editing.view.focus();
      });

      return buttonView;
    });
  }
}
