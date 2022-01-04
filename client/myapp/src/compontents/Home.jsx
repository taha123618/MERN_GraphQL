import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom";
import { GET_ALL_QUOTES } from "../GQLoperations/Queries"
export default function Home() {
// useEffect is used to network request

    /*/ traditional fetch se first code 
      bhayt bara hota or second Bar bar Network call hote ha 
    /*/
    // for appllo client
 const {loading,error,data} =  useQuery(GET_ALL_QUOTES,{
  /*/  is ko use is lye kia h take appllo 
    cache ko first time or network dono ma 
    data fetch kr ke rahkhe /*/
    fetchPolicy:"cache-and-network"
 })
 
 if(loading) return <h1 style={{textAlign : 'center',
 color:'green'}}> Loading.... </h1>
 if(error){
    //  console.log(error.message); //sir ke line
    console.log(error);
 }
 if(data.quotes.length === 0){
 return <h2 style={{textAlign : 'center'}}>No Quotes are Available</h2>
 }

    return (
        <div className="container">
        {
            data.quotes.map(quote=>{
                return(
            <blockquote>
                <h6>{quote.name}</h6>
                <Link to={`/profile/${quote.by._id}`}>
               <p className="right-align">{quote.by.firstName}</p>
                </Link>
            </blockquote>

                )
            })
        }
        </div>
    )
}