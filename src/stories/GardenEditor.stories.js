/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';

/**
 * CKEditor content
 */
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

export default {
  title: 'Examples'
};

export const Default = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        plugins: [Essentials, Paragraph, Bold, Italic, Underline],
        toolbar: ['bold', 'italic', 'underline']
      }}
      onChange={(event, editor) => {
        action('onChange')(editor.getData());
      }}
    />
  );
};
