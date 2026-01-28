import Admission from '../models/Admission.js';

export const createAdmission = async (req, res) => {
  try {
    const newAdmission = new Admission(req.body);
    await newAdmission.save();
    res.status(201).json(newAdmission);
  } catch (error) {
    res.status(500).json({ error: "Failed to create admission" });
  }
};

export const getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({ error: "Failed to get admissions" });
  }
};

export const deleteAdmission = async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Admission deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete admission" });
  }
};

