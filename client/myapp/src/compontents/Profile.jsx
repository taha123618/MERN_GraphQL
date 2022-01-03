import { useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { GET_MY_PROFILE } from "../GQLoperations/Queries"

const Profile = () => {

const navigate =  useNavigate()
const {loading , error , data} = useQuery(GET_MY_PROFILE)

// for error accers se bhichne ke lye 
if (!localStorage.getItem("token")) {
    navigate('/login')
    return <h2 style={{textAlign : 'center' , 
    color:'red'}}>Unauthorized User</h2>
} 
 if(loading) return 
<h1 style={{textAlign : 'center'}}> Profile is Loading.... </h1>
   


if (error) {
    console.log(error);
}
    
    return (
        <>
          <div className="container my-container">
            <div className="center-align">
                <img className="circle" 
                style={{border:"2px solid",marginTop:"10px"}} 
                src={`https://robohash.org/${data.user.firstName}.png?size=200x200`} alt="profile_Picture" />
                <h5>{data.user.firstName} {data.user.lastName}</h5>
                <h6>Email - {data.user.email}</h6>
            </div>
             <h3>Your quotes</h3>
             {
                 data.user.quotes.map(quote=>{
                     return(
            <blockquote>
                <h6>{quote.name}</h6>
            </blockquote>

                     )
                 })
             }
        </div>
        </>
    )
}

export default Profile
