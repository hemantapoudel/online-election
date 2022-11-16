const Election = require("../models/election.model")

const addElection = (req:any,res:any,next:any) => {
    let data = req.body
    try{
        let election = new Election(data)
        election.save()
        res.json({msg:"election added successfully",result:election})
    } catch(error){
        res.status(500).json({msg:"Error adding Election"})
    }
}

export{}
module.exports = {addElection}