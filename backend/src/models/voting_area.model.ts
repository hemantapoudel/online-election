const mongoose = require("mongoose")
const VotingAreaSchema = mongoose.Schema({
    area_id : {
        type:String
    },
    area_name : {
        type:String
    },
    area_province : {
        type:String
    },
    area_district : {
        type:String
    }
},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
})

const VotingArea = mongoose.model("Voting Area",VotingAreaSchema)
module.exports = VotingArea
export{}