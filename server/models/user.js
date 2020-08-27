let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
    username:{
        type: String,
        default: '',
        trim: true,
        required: 'username is required'
    },
    // password taken out from schema because it will be encrypted by passport-local-mongoose
    email:{
        type: String,
        default: '',
        trim: true,
        required: 'email is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display name is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    update:{
        type: Date,
        default: Date.now
    }
},
{
    collection: "users"
});

// configure options for the UserSchema

let options = ({
    missingPasswordError: "Wrong/ Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);