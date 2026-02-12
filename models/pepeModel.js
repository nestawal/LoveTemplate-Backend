const mongoose = require('mongoose');


const pepeSchema = mongoose.Schema({
    letterId:{
        type : mongoose.Schema.Types.ObjectId
    },
    letter:{
        type : String
    },
    firstImpression:{
        type : String
    },
    tenThings:{
        type : [String]
    },
    future:{
        type : String
    },
    questionnaire:{
        type : String
    },
    quesAns : {
        type : Boolean
    },
    viewed:{
        type : String
        //will include name of person who viewed
    }
});

const pepeModel = mongoose.model('Pepe',pepeSchema);

module.exports = pepeModel;