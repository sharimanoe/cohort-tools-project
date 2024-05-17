// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

//create student schema
const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedinUrl: {
      type: String,
      default: "",
    },
    languages: [
      "English",
      "Spanish",
      "French",
      "German",
      "Portuguese",
      "Dutch",
      "Other",
    ],
    background: {
      type: String,
      default: "",
    },
    program: {
      type: String,
      enum: ["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"],
    },
    image: {
      type: String,
      default: "https://i.imgur.com/r8bo8u7.png",
    },
    cohort: {
      type: Schema.Types.ObjectId,
      ref: "Cohort",
    },
    projects: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

//create model
// const Students = mongoose.model("Students", studentSchema);

//createand export the model
// module.exports = Students;
module.exports = model("Students", studentSchema);
