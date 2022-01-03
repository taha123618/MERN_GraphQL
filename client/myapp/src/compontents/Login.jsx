import {useState} from 'react'
import '../App.css'

const Login = () => {

const [formData, setFormData] = useState({}) 

// for advance trick to handle multiple form 
const handleChange = (e)=>{
    setFormData({
        ...formData,
         [e.target.name]:e.target.value
    })
}


const handleSubmit = (e) =>{
// page refresh na ho form submit krne ke bad is lye ye ha 
e.preventDefault()
console.log(formData);
}
    
    return (
      <>
      <div className="container my_container">
        <h5>Login!!</h5>
        <form onSubmit={handleSubmit}>
        <input
        type="email"
        placeholder="email"
        name='email'
        onChange={handleChange}
        required
        ></input>
        <input
        type="password"
        placeholder="Password"
        name='password'
        onChange={handleChange}
        required
        ></input>
        <button className="btn #673ab7 deep-purple"
        type='submit'>Login</button>

        </form>

      </div>
      </>
    );
  }
  
  export default Login;
  