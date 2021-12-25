import {Mongoose} from 'mongoose'

const QoutesSchema = new Mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    by:{
        type:Mongoose.Schema.type.objectId,
        ref:"USER"
    },

})

// Models collection creation
const Qoutes = Mongoose.model('Quotes', QoutesSchema);

module.exports = Qoutes;