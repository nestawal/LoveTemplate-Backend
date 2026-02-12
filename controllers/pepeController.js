const pepeModel = require('../models/pepeModel');
const IdModel = require('../models/identityModel');

const createPepe = async(req,res) =>{
    try{
        
        const newPepe = await pepeModel.create(req.body)

        const written = await IdModel.findOneAndUpdate(
            {_id : req.body.letterId},
            {written : true}
        )

        res.json({
            user: newPepe,
            message : "written changed"
        })
        
    }
    catch(err){  res.status(500).json({ error: err.message });}
};

const updateQuesAns = async(req,res)=>{
    try{
        const{letterId} = req.params;
        const {quesAns} = req.body;

        const updatedAns = await pepeModel.findOneAndUpdate(
            {letterId : letterId},
            {quesAns : quesAns}
        );

        res.status(200).json(updatedAns);
    }
    catch(error){
        res.status(500).json({ message: "Update failed", error });
    }

};

const viewLetter = async(req,res) => {
    try{
        const {letterId} = req.params;
        const {viewed} = req.body;

        const pepe = await pepeModel.findOneAndUpdate(
            {letterId : letterId},
            {viewed : viewed}
        )

        res.status(200).json(pepe)
    }
    catch(error){
        res.status(500).json({message: "Update failed", error})
    }
}

module.exports = {
    createPepe,
    updateQuesAns,
    viewLetter
}

