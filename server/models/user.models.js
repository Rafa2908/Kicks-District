import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

const PASSWORD_REGEX = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      minLength: [2, "First name must be at least 2 characters long."],
      maxLength: [30, "First name cannot be longer than 30 characters."],
      required: [true, "First name is required."],
    },
    last_name: {
      type: String,
      minLength: [2, "Last name must be at least 2 characters long."],
      maxLength: [30, "Last name cannot be longer than 30 characters."],
      required: [true, "Last name is required."],
    },
    email: {
      type: String,
      required: [true, "Email Address is required."],
      validate: {
        validator: (validEmail) => EMAIL_REGEX.test(validEmail),
        message: "Please enter a valid email.",
      },
    },
    password: {
      type: String,
      minLength: [8, "Password must be at least 8 characters long."],
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirm_password")
  .get(function () {
    return this._confirm_password;
  })
  .set(function (value) {
    this._confirm_password = value;
  });

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirm_password) {
    this.invalidate("confirm_password", "Passwords must match.");
  }
  next();
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt
    .hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch(next);
});

const User = model("User", UserSchema);

export default User;
