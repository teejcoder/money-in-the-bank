const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String, set: formatPhoneNumber },
  basiqUserId: { String },
  email: { type: String, unique: true },
  password: String,
});

// FORMAT PHONE NUMBER FUNCTION
function formatPhoneNumber(phoneNumber) {
  // Remove any non-digit characters from the input
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  // Format the phone number into "+61 400 000 000" pattern
  const formattedPhoneNumber = `+61 ${digitsOnly.slice(1, 4)} ${digitsOnly.slice(4, 7)} ${digitsOnly.slice(7)}`;

  return formattedPhoneNumber;
}

// Password hash middleware.
UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
