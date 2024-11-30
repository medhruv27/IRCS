import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();
//patient
router.post("/patient/register", patientRegister);
router.post("/login", login);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
//hospital
router.post("/hospital/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/hospitals", getAllDoctors);
//admin
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;
