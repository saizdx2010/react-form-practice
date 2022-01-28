import React, { useState } from 'react'
import { InputField } from './InputField'
import { NameList } from './NameList';
import { Submit } from './Submit'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState(['halo', "halo"])

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const listNames = nameList.map(names => (
    <li>{names}</li>
  ))


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || name === NaN) {
      alert("name must be an string")
    } else {
      setNameList(prevState => [...prevState, name])
    }
  }
  return (
    <div className='App'>
      <h1>List your friends names</h1>
      <InputField value={name} handleChange={handleChange} />
      <NameList listNames={listNames} />

      <Submit onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
