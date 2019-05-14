"use strict";
module.exports = (router) => {
const  auth = require("../helpers/api-auth"),
 validateor = require("../helpers/validateor"),
 tutor = require("../controllers/tutors");
router.post('/login',auth.isAuthenticated,validateor.login,tutor.login);
router.post('/upload-image',auth.isAuthenticated,tutor.uploadImage);
router.patch('/setup-profile-first',auth.isAuthenticated,tutor.setupProfileFirst);
router.patch('/tutor-save-interests',auth.isAuthenticated,tutor.tutorSaveInterests);
router.patch('/setup-education',auth.isAuthenticated,tutor.setupEducation);
router.patch('/setup-certification',auth.isAuthenticated,tutor.setupCertification);
router.patch('/work-experience',auth.isAuthenticated,tutor.workExperience);
router.patch('/setup-introduction',auth.isAuthenticated,tutor.introduction);
router.patch('/set-available-time',auth.isAuthenticated,tutor.setAvailableTime);
router.get('/view-tutor-info',auth.isAuthenticated,tutor.viewTutorInfo);
router.get('/tutor-interests',auth.isAuthenticated,tutor.tutorInterests);
router.get('/toptutors',tutor.topTutor);
return router;
}