// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

//create schema
const cohortSchema = new Schema({
  cohortSlug: {
    type: String,
    unique: true,
    required: true,
  },
  cohortName: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    enum: ["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"],
  },
  format: {
    type: String,
    enum: ['Full Time,"Part Time'],
  },
  campus: {
    type: String,
    enum: [
      "Madrid",
      "Barcelona",
      "Miami",
      "Paris",
      "Berlin",
      "Amsterdam",
      "Lisbon",
      "Remote",
    ],
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: Date,
  inProgress: {
    type: Boolean,
    default: false,
  },
  programManager: {
    type: String,
    required: true,
  },
  leadTeacher: {
    type: String,
    required: true,
  },
  totalHours: Number,
});

//create model
// const Cohort = mongoose.model("Cohort", cohortSchema);

//export the model
// module.exports = Cohort;
module.exports = model("Cohort", cohortSchema);
