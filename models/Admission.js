// Backend/models/Admission.js

import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  studentName: String,
  studentClass: String,
  studentAddress: String,
  studentContact: String,
  schoolName: String,
  schoolTime: String,
  submittedBy: String, // ✅ email of student
});

export default mongoose.model("Admission", admissionSchema);




