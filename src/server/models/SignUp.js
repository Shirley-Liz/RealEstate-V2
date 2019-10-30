import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LoginSchema = new Schema({
  id: ObjectId,
  fullName:{
    type: String,
    required: true
  },
  Email:{
    type: String,
    required: true
  },
  NationalIdNIN:{
    type: String,
    required: true
  },
  PhoneNumber:{
    type: String,
      required: [true, 'User phone number required']
  },
  Password:{
    type: String,
    required: true
  },
  RetypePassword:{
    type: String,
    required: true
  },
});
const registerUser = mongoose.model('realestateusers', LoginSchema);

export { registerUser };
