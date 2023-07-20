const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        required:true,
      },
    ],
  },
  { timestamps: true }
);
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.statics.comparePassword = async function (email, password) {
  let user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return;
    }
    throw Error("incorrect password or email. Please try again");
  }
  throw Error("incorrect email");
};
const user = mongoose.model("User", userSchema);

module.exports = user;
