import { useState, useRef } from 'react';
import { Hi } from './Hi';
import { ApiCall } from './ApiCall';
import './App.css';

function App() {

  // ***************************************************************************************************
  //            useRef Hook
  // ***************************************************************************************************
// Forms
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Use case - for storing a reference to a component say input field or div and then being able to reference that node in your application
  // so we will make a button and whenever we click that button it will focus the input field. So we will get reference to them

  const inputRef = useRef(); // create a new variable and use useRef() here
  // we can pass this to what ever component we want to get reference of (first email input here)
  // So we want a reference to the input field now, so we pass it to the input field. So we console.log(inputRef.current) and we have refernce to the input DOM node and we can do what ever we want. Like call any methods on there or read the values of the stuff
  // we say inputRef.current.focus()

  //--------------------------------------------------------------
  
  // Usecase - Store number of times a component has rendered

  // useRef() can be used with anything you want to store the reference for. It doesnt have to be necessarily a DOM node. It can be an integer also
  // Lets create another component 
  
  const [showHi, setShowHi] = useState(true);

  // type in the email input, the 'Hi renders 0' prints to the console with increased number.
  // toggle the Hi component off, the typing in email input does not print to the console.
  //--------------------------------------------------------------

  // Another usecase is with useFetch. 
  
  // So its helpful to know whether a component has unmounted, so we can prevent an error when we are trying setting state on our component that has been unmounted.
  // So we cause an error here

  // we create another component ApiCall.js
  // We will unmount ApiCall when the data is loading. And we will try to update the state and that will cause the problem

  const [showApiCall, setShowApiCall] = useState(true);


  // If we increment the counter, the apicall takes some time to return (because of setTimeout), If we toggle the component off at this time, its gonna try to update the state when the component is gone and we get this error
  /*
  Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at ApiCall (http://localhost:3000/static/js/main.chunk.js:43:85)
  */
  // We try caling setState() when the component is gone
  // So we can use reference ot help solve this problem. In useFetch.js hook

  // So now if we increment and we toggle the component off, when the data loads its not longer going to cal setState because the current value is false.

  //-------------------------------------------------
  // lets use useRef() with functions

  const helloUseRef = useRef(() => {
      console.log('hello from useRef')
  })
  // lets put this hello reference on the focus button we made earlier.
  // So now when we click focus button, it focuses the email input and logs 'hello' to the console.

  return (
    <div className="App">
    <h2 style={{color: "blue"}}>useRef</h2>

    <input ref={inputRef} type="email" placeholder="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br/>

      <button onClick={() => {
        // console.log(inputRef.current);
        inputRef.current.focus();
        helloUseRef.current();
      }}>Focus</button>

      <hr/>
      {/* conditionally render Hi component */}
      {showHi && <Hi />}
      {/* button to toggle it on and off */}
      <button onClick={() => setShowHi(!showHi)}>toggle</button>
      <hr/>

      <div style={{color:"blue"}}>ApiCall output</div>
      {showApiCall && <ApiCall />}
      <button onClick={() => setShowApiCall(!showApiCall)}>Toggle ApiCall</button>

    </div>
  );
}

export default App;
