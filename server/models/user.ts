import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: true,
      index: { unique: true, sparse: true }
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required:true
    },
    userType:{
      type:String,
      required:true,
      default:'user'
    }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
userSchema.statics = {
  /**
   * Get User
   * @param {ObjectId} id - The objectId of user.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((user: any) => {
        if (user) {
          return user;
        }
      });
  }
};

// Create Admin User

// const newUser = new mongoose.model(userSchema({
//   _id: new mongoose.Types.ObjectId(),
//   email: process.env.ADMIN_EMAIL,
//   name: process.env.ADMIN_NAME,
//   password: process.env.ADMIN_PASSWORD
// }));
// newUser.save();

export default mongoose.model('User', userSchema);