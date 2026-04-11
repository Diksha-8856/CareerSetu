const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    comName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    empEmail: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: Number, required: true },
    postedDate: { type: Date },
    comAddress: { type: String, required: true },
    jobDesc: { type: String, required: true },
    jobType:{type:String,},
    workMode:{type:String},
    department:{type:String}
  },
  { timestamps: true },
);

module.exports = mongoose.model("job", jobSchema);
