import React from 'react';
import AceEditor from 'react-ace';
import "brace/mode/markdown";
import "brace/theme/github";
import "brace/keybinding/vim";

export default () => (
  <div>
    <AceEditor
      mode="markdown"
      theme="github"
      name="editor"
      keyboardHandler="vim"
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  </div>
);
