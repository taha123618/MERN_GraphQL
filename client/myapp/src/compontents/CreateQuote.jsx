import { useMutation } from '@apollo/client'
import {useState} from 'react'
import { CREATE_QUOTE } from '../GQLoperations/mutation'

export default function CreateQuote() {
const [quote,setQuote] = useState("")

// for appllo client 
const [createQuote, {data,error,loading}] = useMutation(CREATE_QUOTE , {
    // foe use muiltiple network-Access 
    refetchQueries:[
        'getAllQuotes',
        'getMyProfile'
    ]
})



const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(quote)
    createQuote({
        variables:{
            name:quote 
        }
    })

    if(loading) return 
    <h1 style={{textAlign : 'center'}}> Loading.... </h1>
    
    // if (error) {
    //    console.log(error.message); 
    // }
    
    if (data) {
    console.log(data);
    }


    }
    return (
        <div className="container my-container">
        {/* for showing any error to realeated to appllo client  */}
      {
        error && 
        <div className='red card-panel'>{error.message}</div>
      }
      {
        data && 
        <div className='green card-panel'>{data.quote}</div>
      }
        <br />
            <form onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    value={quote}
                    onChange={e=>setQuote(e.target.value)}
                    placeholder="Write your quote here :"
                    />
                 <button className="btn green">create</button>
            </form>
            
        </div>
    )
}