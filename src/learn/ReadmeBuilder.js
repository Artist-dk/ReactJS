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

const ReadmeBuilderSection = styled.div`
  margin-bottom: 1rem;
`;

const ReadmeBuilderSectionTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ReadmeBuilderSectionInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 0.5rem;
`;

const ReadmeBuilder = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sections, setSections] = useState([
    { title: 'Installation', content: '' },
    { title: 'Usage', content: '' },
  ]);

  const handleAddSection = () => {
    setSections([...sections, { title: '', content: '' }]);
  };

  const handleRemoveSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const handleChangeSectionTitle = (index, event) => {
    const newSections = [...sections];
    newSections[index].title = event.target.value;
    setSections(newSections);
  };

  const handleChangeSectionContent = (index, event) => {
    const newSections = [...sections];
    newSections[index].content = event.target.value;
    setSections(newSections);
  };


  const handleSave = () => {
    // const title = ...; // Get content from component state
    // const description = ...;
    // const sections = ...; // Get sections array from component state
  
    const readmeContent = `# ${title}
  
    ${description}
  
    ${sections.map((section) => `## ${section.title}
  
    ${section.content}`).join('\n\n')}
    `;
  
    const blob = new Blob([readmeContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    link.click();
  
    URL.revokeObjectURL(url); // Clean up memory leak
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

        {sections.map((section, index) => (
          <ReadmeBuilderSection key={index}>
            <ReadmeBuilderSectionTitle>
              {index + 1}. {section.title}
            </ReadmeBuilderSectionTitle>
            <ReadmeBuilderSectionInput
              type="text"
              placeholder="Section Title"
              value={section.title}
              onChange={(e) => handleChangeSectionTitle(index, e)}
            />
            <ReadmeBuilderTextarea
              value={section.content}
              onChange={(e) => handleChangeSectionContent(index, e)}
            />
            {sections.length > 1 && (
              <button type="button" onClick={() => handleRemoveSection(index)}>
                Remove Section
              </button>
            )}
          </ReadmeBuilderSection>
        ))}

        <button type="button" onClick={handleAddSection}>
          Add Section
        </button>

        <ReadmeBuilderButton type="button" onClick={handleSave}>
          Save to README.md
        </ReadmeBuilderButton>
      </ReadmeBuilderForm>
    </ReadmeBuilderContainer>
  );
};

export default ReadmeBuilder;
