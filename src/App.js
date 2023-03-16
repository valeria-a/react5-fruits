import './App.css';
import SearchBox from './SearchBox/SearchBox';
import ResultBox from './ResultBox/ResultBox';
import { useState } from 'react';
import { FRUITS, VEGS } from './data';

function App() {

  console.log(FRUITS, VEGS)

  // let title="Hello"
  
  // state / props / context
  const [title, setTitle] = useState('Hello')
  const [resultMsg, setResultMsg] = useState('')


  // setTitle('Bye')
  // elem = document.getElementById()
  // h5.htmlText = 'bye'

  const handleUserSearchSubmit = (userInput) => {
    if (FRUITS.includes(userInput)) {
      setResultMsg(`${userInput} is a fruit!`)
    } else if (VEGS.includes(userInput)) {
      setResultMsg(`${userInput} is a vegetable!`)
    } else {
      setResultMsg(`We don't have this item!`)
    }
  }

  return (
    <>
      <h5>{title}</h5>
      {/* <button onClick={() => title='Bye'}>Change title</button> */}
      <button onClick={() => setTitle('Bye')}>Change title</button> 
      <SearchBox myTitle={title} onUserSearchSubmit={handleUserSearchSubmit}/>
      <ResultBox msg={resultMsg}/>
    </>
  );
}

export default App;
