const mongoose = require("mongoose")
const castVoteSchema = mongoose.Schema({ 
    candidate : {
        type:mongoose.Types.ObjectId,
        ref:"candidate"
    },
    vote_count : {
        type:Number,
        default:0
    },
},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
})

const CastVote = mongoose.model("castVote",castVoteSchema)
module.exports = CastVote
export{}