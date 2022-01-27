import React, { useState } from 'react'
import { InputField } from './InputField'
import './App.css';

function App() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (

    <InputField value={name} handleChange={handleChange} />

  );
}

export default App;
