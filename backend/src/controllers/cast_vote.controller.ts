const CastVote = require("../models/cast_vote.model")

const addCastVoteByAdmin = (req:any,res:any,next:any) => {
    let data = req.body;
    try{
        let cast_vote_data = {candidate:data.candidate}
        let cast_vote = new CastVote(cast_vote_data)
        cast_vote.save()
        res.json({msg:"Cast Vote added",result:cast_vote})

    } catch(error){
        res.status(500).json({msg:"Error adding cast vote"})
    }
}

const listCastVoteByVotingArea = async (req:any,res:any,next:any) => {
    let data = req.body
    let voter = req.auth_user
    try{
        
        let cast_vote = await CastVote.find({}).populate({
            path : 'candidate',
            populate : {
              path : 'voting_area',
            }
          }).populate({
            path:'candidate',
            populate:{
                path:'election'
            }
          }).populate({
            path:'candidate',
            populate:{
                path:'party'
            }
          })

          let newArr = []


          for(let i=0; i<cast_vote.length; i++){
            if(voter.voting_area._id.toString() === cast_vote[i].candidate.voting_area._id.toString()){
                newArr.push(cast_vote[i])
            }
          }
        //console.log(voter.voting_area._id.toString())
        //console.log(cast_vote[2].candidate.voting_area._id.toString())
        res.json({result:newArr})


    } catch(error){
        res.status(500).json({msg:"Error while showing cast vote"})
    }

}







export{}
module.exports = {addCastVoteByAdmin,listCastVoteByVotingArea}