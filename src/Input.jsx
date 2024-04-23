import { useEffect, useState} from "react"
import './Input.css'
import { useAppContextValue } from "./AppContextProvider";

const Input = () => {
    const [inputValue, setInputValue] = useState({ name: '', age: '',  emailAddress: '', country: '' });
    const {addData}= useAppContextValue()

   
    const handleChange=(e)=>{
      console.log({...inputValue,[e.target.name]:e.target.value});
    const updatedValue= {...inputValue,[e.target.name]:e.target.value}
    setInputValue(updatedValue)
      
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      addData(inputValue)
      setInputValue({ name: '', age: '',  emailAddress: '', country: '' })
    }

    useEffect(()=>{
      localStorage.setItem('inputs', JSON.stringify(inputValue))
    },[inputValue])
  return (
    <div className ="input-container">
  <form onSubmit={handleSubmit}>
 
  <div className="mb-3">
    <label htmlFor="name-input" className="form-label">Name</label> 
    <input type="text" name='name' className="form-control" id="name-input" placeholder="John Doe" value={inputValue.name} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="age-input" className="form-label">Age</label>
    <input type="number" name='age' className="form-control" id="age-input" placeholder="18" min={17} max={25} value={inputValue.age} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email-input" className="form-label">Email address</label>
    <input type="email" name='emailAddress' className="form-control" id="email-input" placeholder="name@example.com" value={inputValue.emailAddress} onChange={handleChange} />
  </div>
  <div className="mb-3">
         <label htmlFor="country-input" className="form-label">Country</label>
         <input type="text" name='country' className="form-control" id="country-input" placeholder="India" value={inputValue.country} onChange={handleChange} />
      </div>
  <div className="button">
  <button type="submit" className="btn">Add</button>
  </div>
  </form>
    </div>
  )
}

export default Input
