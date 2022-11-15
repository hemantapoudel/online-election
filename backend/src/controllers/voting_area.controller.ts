const VotingArea = require('../models/voting_area.model')

const addVotingArea = (req:any,res:any,next:any) => {
    let data = req.body
    try{
        let area = new VotingArea(data)
        area.save()
        res.json({msg:"Voting area added",result:area})

    } catch(error){
        res.status(500).json({msg:"Error adding voting area"})
    }


}

export{}
module.exports = {addVotingArea}