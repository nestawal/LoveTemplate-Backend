const mongoose = require('mongoose');

const IdentitySchema = mongoose.Schema({
    name:{
        type : String,
        required : false
    },
    email:{
        type : String,
        required : true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type : String,
        required : true
    },
    written:{
        type : Boolean,
        default : false
    }
});

const IdentityModel =  mongoose.model('Identity',IdentitySchema);

module.exports= IdentityModel;
