
// npm install react-markdown
import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReadmeRenderer = ({ content }) => {
  return <ReactMarkdown children={content} />;
};

export default ReadmeRenderer;