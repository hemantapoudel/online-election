const Voter = require("../models/voter.model")

const generateVoterId = () => {
    return Math.floor(100000 + Math.random() * 900000);
}

const addVoter = async (req:any,res:any,next:any) => {
    let data = req.body
    if(req.file){
        data.photo = req.file.filename
       }
    try{
        let voter_idd = await Voter.findOne({voter_id:data.voter_id})
        if(voter_idd){
            res.status(401).json({msg:`Voter with voter id ${data.voter_idd} already registered`})
        } else{
            let voter_details = {voter_id:generateVoterId(),full_name:data.full_name,phone:data.phone,dob:data.dob,gender:data.gender,photo:data.photo}
            let voter = new Voter(voter_details)
            voter.save()
            res.json({msg:"Voter Added",result:voter})
        }

    } catch(error){
        res.status(500).json({msg:"Error adding voter"})
    }

}

export{}
module.exports = {addVoter}