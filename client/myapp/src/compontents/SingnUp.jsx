import {useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { SIGNUP_USER } from '../GQLoperations/mutation'




const SingnUp = () => {

const [formData, setFormData] = useState({}) 

// Applo client work 
const [signupUser,{data,loading,error}] =  useMutation(SIGNUP_USER)

if(loading) return <h1 style={{textAlign : 'center'}}> Loading.... </h1>


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
signupUser({
  variables:{
    userNew:formData
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
      {/* After successfully  SingUp  */}
      {
        data && data.user &&
        <div className='green card-panel'>{data.user.firstName} is SignUp. 
        You can login now!  </div>
      }
        <h5>SingnUp!!</h5>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="FirstName"
        name='firstName'
        onChange={handleChange}
        required
        ></input>
        <input
        type="text"
        placeholder="LastName"
        name='LastName'
        onChange={handleChange}
        required
        ></input>
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
      <Link to="/login" className='#673ab7 deep-purple'> <p>Already Have a Account?</p></Link> <br />
        <button className="btn #673ab7 deep-purple"
        type='submit'>Submit</button>

        </form>

      </div>
      </>
    );
  }
  
  export default SingnUp;
  