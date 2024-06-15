import Opportunity from "../models/Opportunity.js";
import User from "../models/User.js";
import internshipData from "../config/data.json" assert { type: "json" };

export const getAllOpportunites = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.status(200).json({ data: opportunities, msg: "Successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
export const applyToOpportunity = async (req, res) => {
  try {
    const { opportunityId } = req.body;
    const opportunity = await Opportunity.findById(opportunityId);
    if (!opportunity) {
      return res.status(404).json({ msg: "Opportunity not found" });
    }
    if (opportunity.applicants.includes(req.user.id)) {
      return res
        .status(400)
        .json({ msg: "You have already applied to this opportunity" });
    }

     opportunity.applicants.push(req.user.id);
    await opportunity.save();
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User is not found" });
    if (user.applicants.includes(opportunityId)) {
      return res
        .status(400)
        .json({ msg: "You have already applied to this opportunity" });
    }
    user.applicants.push(opportunityId);
    await user.save();
    // Remove password from user object before sending in response
    const { password, ...userDataWithoutPassword } = user.toObject();
    res
      .status(200)
      .json({ data: userDataWithoutPassword, msg: "Applied Successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
export const getUserApplications = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("applicants");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    // Remove password from user object before sending in response
    const { password, ...userDataWithoutPassword } = user.toObject();
    res
      .status(200)
      .json({ data: userDataWithoutPassword, msg: "Successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
export const fetchOpportunitesStoreDb = async (req, res) => {
  try {
    const internshipMetaValues = Object.values(internshipData.internships_meta);
    const savePromises = internshipMetaValues.map(async (data) => {
      const opportunity = new Opportunity(data);
      try {
        await opportunity.save();
      } catch (err) {
        console.error(err.message);
        if (err.code === 11000 || err.code === 11001) {
          // MongoDB duplicate key error
          throw new Error("Duplicate key error");
        }
        throw err; // Rethrow other errors
      }
    });

    await Promise.all(savePromises);

    // If we reach here, all saves were successful
    res.status(200).json({ msg: "Successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
