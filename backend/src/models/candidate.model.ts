const mongoose = require("mongoose")
const CandidateSchema = mongoose.Schema({
    candidate_id : {
        type:String
    },
    full_name : {
        type:String
    },
    gender : {
        type:String
    },
    photo : {
        type:String
    },
    candidate_symbol : {
        type:String
    },
    voting_area_code : {
        type:String
    },
    election_id : {
        type:String
    },
    party_id : {
        type:String
    },

},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
})

const Candidate = mongoose.model("candidate",CandidateSchema)
module.exports = Candidate
export{}