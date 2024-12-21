const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName : {
        type : String
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    purchasedCourse : {
       type: mongoose.Schema.Types.ObjectId ,
       ref: 'Course'
    }
})

module.exports = mongoose.model("User",userSchema);