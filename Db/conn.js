
import { Mongoose } from 'mongoose'

// Database Connection 
const DB = process.env.DATABASE;

const conn = Mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true 
})

Mongoose.connection.on("connect",()=>{
    console.log("connected on mongoDb");
})

Mongoose.connection.on("error",(err)=>{
    console.log("Error Conntecting" , err);
})


export default conn;
