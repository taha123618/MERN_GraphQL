import {Mongoose} from 'mongoose'

const UserSchema = new Mongoose.Schema({

    firtName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    

})

// Models collection creation
const User = Mongoose.model('USER', UserSchema);

module.exports = User;