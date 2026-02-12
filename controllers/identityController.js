const Identitymodel = require('../models/identityModel')

const createIdentity = async(req,res) =>{
    try{
        //create new identity
        const newId = await Identitymodel.create(req.body)

        res.json({
            user: newId
        })
        
    }
    catch(err){  res.status(500).json({ error: err.message });}
};

const checkIdentity =(req,res)=>{
    const{email,password}= req.body
    Identitymodel.findOne({email: email})
    .then(person=>{
       if(person){
        if(person.password === password){
            res.json({status:"found",person})
        }else{
            res.json("wrong password")
        }
       }else{
        res.json("nowhere to be found")
       }
    })
    .catch(err => res.json(err))
};

module.exports = {
    createIdentity,
    checkIdentity
};