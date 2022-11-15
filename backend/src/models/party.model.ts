const mongoose = require("mongoose")
const PartySchema = mongoose.Schema({
    full_name : {
        type:String
    },
    party_symbol : {
        type:String
    }

},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
})

const Party = mongoose.model("party",PartySchema)
module.exports = Candidate
export{}