import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Sachin")
  const [form, setForm] = useState({})
  


  const handleclick = ()=>{
    alert("Hey I am clicked")
  }
  const handleMouseOver = () =>{
    alert("Hey  I am a mouse over")
  }
  const handleChange = (e) =>{
    // setname(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
    
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>Sachin</div> */}

      {/* <input type="text" value={name} onChange={handleChange} /> */}
      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} />
    </>
  )
}

export default App
