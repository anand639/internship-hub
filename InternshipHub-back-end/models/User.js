import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Opportunity" }],
});

UserSchema.pre("save", async function (next) {
  if (!this?.password) {
    next();
  }
  if (this.password.startsWith("$2b$") && this.password.length === 60) {
    console.log("Password is already hashed:", this.password);
    return next(); // Proceed with saving the document
  }
  const salt = await bcrypt.genSaltSync(10);
  console.log(salt, "salt", this?.password);
  const hashPassword = await bcrypt.hashSync(this.password, salt);

  this.password = hashPassword;
});

export default mongoose.model("User", UserSchema);
