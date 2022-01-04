import {useState} from 'react'
import '../App.css'
import { Link , useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../GQLoperations/mutation'

const Login = () => {

// navaigate to home page 
const navaigate = useNavigate()  

const [formData, setFormData] = useState({}) 

// for appllo client 
const [loginUser ,{data , loading , error} ] = useMutation(LOGIN_USER)

if(loading) return 
<h1 style={{textAlign : 'center'}}> Loading.... </h1>
if(data){
  localStorage.setItem("token",data.user.token)
  navaigate('/')
}

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
// console.log(formData);
loginUser({
  variables:{
    userSignin:formData
  }
})
}
    
    return (
      <>
      <div className="container my_container">
      {/* for showing any error to realeated to appllo client  */}
      {
        error && 
        <div className='red card-panel'>{error.message}</div>
      }
        <h5>Login!!</h5>
        <form onSubmit={handleSubmit}>
        <input
        type="email"
        placeholder="Email"
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
        <Link to="/singnup" className='#673ab7 deep-purple'> <p>Dont have a Acoount?</p></Link>
        <br />
        <button className="btn #673ab7 deep-purple"
        type='submit'>Login</button>

        </form>

      </div>
      </>
    );
  }
  
  export default Login;
  