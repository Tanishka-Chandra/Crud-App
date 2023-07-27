import mongoose from 'mongoose';
import autoIncrement from 'mongoose-plugin-autoinc';

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    phone : String
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,{
    model: 'user',
    field: 'userId',
    startAt: 1,
});

const user = mongoose.model('user',userSchema);

export default user;