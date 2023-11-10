const mongoose = require("mongoose");
const TestresSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
    },
    vision: {
      type: String,
      require: true,
      min: 3,
    },
    spherical: {
      type: String,
      require: true,
      min: 3,
    },
    astigmatic: {
      type: String,
      require: true,
      min: 3,
    },
    remark: {
      type: String,
      require: true,
      min: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testres", TestresSchema);
