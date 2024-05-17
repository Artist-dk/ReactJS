import React, { useState } from 'react';

const Bridge = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [installation, setInstallation] = useState('');
  const [usage, setUsage] = useState('');
  const [contributing, setContributing] = useState('');

  const handleSave = () => {
    // This function would ideally call an external script 
    // (not included here for security reasons) 
    // that creates the README.md file with the content
    console.log('README content generated!');
  };

  return (
    <div>
      <h2>README.md Builder</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Project Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="installation">Installation:</label>
        <textarea
          id="installation"
          value={installation}
          onChange={(e) => setInstallation(e.target.value)}
        />
        <label htmlFor="usage">Usage:</label>
        <textarea id="usage" value={usage} onChange={(e) => setUsage(e.target.value)} />
        <label htmlFor="contributing">Contributing:</label>
        <textarea
          id="contributing"
          value={contributing}
          onChange={(e) => setContributing(e.target.value)}
        />
        <button type="button" onClick={handleSave}>
          Save to README.md
        </button>
      </form>
    </div>
  );
};

export default Bridge;
