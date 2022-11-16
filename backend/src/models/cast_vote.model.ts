const mongoose = require("mongoose")
const castVoteSchema = mongoose.Schema({ 
    election : {
        type:mongoose.Types.ObjectId,
        ref:"Election"
    },
    candidate : {
        type:mongoose.Types.ObjectId,
        ref:"candidate"
    },
    voting_area : {
        type:mongoose.Types.ObjectId,
        ref:"VotingArea"
    },
    vote_count : {
        type:Date
    },
},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
})

const CastVote = mongoose.model("castVote",castVoteSchema)
module.exports = CastVote
export{}