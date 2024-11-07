/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useMemo } from 'react';
import { action } from '@storybook/addon-actions';

import { Editor } from './Editor';
import { INITIAL_DATA } from './initialData';

/**
 * Storybook layout customizations
 */
import './custom.css';

const EDITOR_LOCAL_STORAGE_KEY = 'ckeditor5-demo-1';
const TOOLBAR_CLASS_NAME = 'toolbar-element';

export default {
  title: 'Demo'
};

export const Default = () => {
  /* eslint-disable n/no-unsupported-features/node-builtins */
  const data = useMemo(() => {
    const storedData = window.localStorage.getItem(EDITOR_LOCAL_STORAGE_KEY);

    return storedData || INITIAL_DATA;
  }, []);

  const onValueChange = useCallback(value => {
    window.localStorage.setItem(EDITOR_LOCAL_STORAGE_KEY, value);
  }, []);

  return (
    <>
      <Editor
        data={data}
        onChange={(event, editor) => {
          const editorData = editor.getData();

          action('onChange')(editorData);

          onValueChange(editorData);
        }}
        toolbarClassName={TOOLBAR_CLASS_NAME}
      />
      <div className="toolbar-container">
        <div className={TOOLBAR_CLASS_NAME} />
      </div>
    </>
  );
};
