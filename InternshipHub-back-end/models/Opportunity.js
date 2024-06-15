import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const OpportunitySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  employment_type: { type: String, required: true },
  company_name: { type: String, required: true },
  company_url: { type: String, default: "" },
  company_logo: { type: String, default: "" },
  employer_name: { type: String, default: "" },
  is_premium: { type: Boolean, default: false },
  url: { type: String, required: true },
  expires_at: { type: Date, required: true },
  start_date: { type: String, required: true }, 
  duration: { type: String, required: true }, 
  stipend: {
    salary: { type: String, required: true },
    salaryValue1: { type: Number, required: true }, 
    currency: { type: String, required: true }, 
  },
  location_names: { type: [String], required: true }, 
  is_active: { type: Boolean, default: true },
  profile_name: { type: String, required: true },
  posted_on: { type: String, required: true },
  application_deadline: { type: String, required: true },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model("Opportunity", OpportunitySchema);
