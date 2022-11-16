const Party = require("../models/party.model")

const addParty = (req:any,res:any,next:any) => {
    let data = req.body
    if(req.file){
        data.party_symbol = req.file.filename
       }
    try{
        let party = new Party(data)
        party.save()
        res.json({msg:"Party added",result:party})
    } catch(error){
        res.status(500).json({msg:"Error adding party"})
    }

}

export{}
module.exports = {addParty}