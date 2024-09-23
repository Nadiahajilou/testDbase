import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true, // فیلد ایمیل اجباری
  
  },
});

//AGE User to models vojod dasht ono mide age nadasht model jadid misaze
const User = models.User || model("User", userSchema);
export default User;
// age: {
//   type: Number,
//   max: 50,
//   min: 10,
// },
// email: {
//   type: String,
//   required: true,
// },
