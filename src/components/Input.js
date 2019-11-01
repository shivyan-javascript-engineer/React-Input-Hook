import { useState } from 'react';

export default inputsSkeletion => {
  const [inputs, setInputs] = useState(inputsSkeletion);
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };
  const handleInputChange = event => {
    event.persist();
    let value = '';

    switch (event.target.type) {
      case 'text':
        value = event.target.value;
        break;
      case 'textarea':
        value = event.target.value;
        break;
      case 'checkbox':
        value = event.target.checked;
        break;
      case 'select-one':
        value = event.target.value;
        break;
      case 'password':
        value = event.target.value;
        break;
      case 'file': {
        const [file] = event.target.files;
        value = file;
        break;
      }
      default:
    }

    setInputs(prevInputs => ({
      ...prevInputs,
      [event.target.name]: value
    }));
  };

  const handleEditorChange = (editorState, inputName) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [inputName]: editorState
    }));
  };

  const resetInputs = () => setInputs(inputsSkeletion);
  return {
    handleSubmit,
    handleInputChange,
    handleEditorChange,
    inputs,
    setInputs,
    resetInputs
  };
};
