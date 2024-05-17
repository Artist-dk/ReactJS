// MarkdownRenderer.js

import React from 'react';
import {marked} from 'marked';


const MarkdownRenderer = ({ content }) => {
    
  const parsedContent =  marked(content);

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: parsedContent}}></div>
    </div>
  );
};

export default MarkdownRenderer;
