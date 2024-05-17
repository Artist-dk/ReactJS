import React, { useState } from 'react';
import styled from 'styled-components';

const ReadmeBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 4px;
  background-color: #eee;
  margin: 1rem;
`;

const ReadmeBuilderTitle = styled.h2`
  margin: 0 0 1rem 0;
`;

const ReadmeBuilderForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ReadmeBuilderLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const ReadmeBuilderInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 1rem;
`;

const ReadmeBuilderTextarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 1rem;
  height: 10rem;
`;

const ReadmeBuilderButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: 1px solid #007bff;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 1rem;
`;

const ReadmeBuilder = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [installation, setInstallation] = useState('');
  const [usage, setUsage] = useState('');
  const [contributing, setContributing] = useState('');

  const handleSave = () => {
  
    const readmeContent = `# ${title}
  
    ${description}
  
    ## Installation
  
    ${installation}
  
    ## Usage
  
    ${usage}
  
    ## Contributing
  
    ${contributing}
    `;
  
    const blob = new Blob([readmeContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    link.click();
  
    URL.revokeObjectURL(url); // Clean up memory leak
    console.log('README content generated!');
  };

  return (
    <ReadmeBuilderContainer>
      <ReadmeBuilderTitle>README.md Builder</ReadmeBuilderTitle>
      <ReadmeBuilderForm onSubmit={(e) => e.preventDefault()}>
        <ReadmeBuilderLabel htmlFor="title">Project Title:</ReadmeBuilderLabel>
        <ReadmeBuilderInput
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReadmeBuilderLabel htmlFor="description">Description:</ReadmeBuilderLabel>
        <ReadmeBuilderTextarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ReadmeBuilderLabel htmlFor="installation">Installation:</ReadmeBuilderLabel>
        <ReadmeBuilderTextarea
          id="installation"
          value={installation}
          onChange={(e) => setInstallation(e.target.value)}
        />
        <ReadmeBuilderLabel htmlFor="usage">Usage:</ReadmeBuilderLabel>
        <ReadmeBuilderTextarea id="usage" value={usage} onChange={(e) => setUsage(e.target.value)} />
        <ReadmeBuilderLabel htmlFor="contributing">Contributing:</ReadmeBuilderLabel>
        <ReadmeBuilderTextarea
          id="contributing"
          value={contributing}
          onChange={(e) => setContributing(e.target.value)}
        />
        <ReadmeBuilderButton type="button" onClick={handleSave}>
          Save to README.md
        </ReadmeBuilderButton>
      </ReadmeBuilderForm>
    </ReadmeBuilderContainer>
  );
};

export default ReadmeBuilder;
