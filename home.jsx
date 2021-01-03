// import './App.css';
import React, {useState} from 'react'

// function Lol(){
//     return <h1>Hello LOL</h1>
// }

function Greet(props){
  return <div> 
    <h1>Hello {props.name}</h1>
    <h1>Hello {props.children}</h1>
  </div>
}

const arr = [{
    name: 'Divya',
    rollnumber:1
},{
    name: 'Kalyani',
    rollnumber:2
},{
    name: 'Anurag',
    rollnumber:3
}]

function App() {
  // const [counter, setCount] = useState(0)
  
  // function count (){
  //   setCount(counter + 1)
  // }
  // function Greet(){
  //   alert("I was Clicked")
  // }

  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  
  let message = ''
  if(name==='admin' && password==='admin')
    message = 'Hello admin'
  else  message = 'Who are you?'
  return (
    <>
      <>
        <span>{name==='admin' && password==='admin' && 'Yes He is back'}</span><br/>
        <span>{message}</span><br/>
        <input type="text" value={name} onChange={updateTextFields}/><br/>
        <input type="password" value={password} onChange={updatePassword}/><br/>
        <button onClick={display}>Submit</button><br/>
        <Greet name="Ajay">Omkar</Greet>
        <ul>
          {[1,2,3].map(ele => <li>{ele}</li>)}
        </ul>
        <ul>
          {arr.map(elem => <li key={elem.rollnumber}>
              {elem.rollnumber} - {elem.name}
          </li>)}
        </ul>
      </>
    </>
  );

  function updateTextFields(event){
      setname(event.target.value)  
  }

  function updatePassword(event){
      setpassword(event.target.value)
  }

  function display(){
    console.log(name,password)
  }
}

export default App;
