const { Schema, model } = require("mongoose");

const entrySchema = new Schema(
  {
    title: String,
    description: String,
    programType: String,
    images: Object,
    releaseYear: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Entry", entrySchema);
