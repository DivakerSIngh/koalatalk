"use strict";
module.exports = (router) => {
const  auth = require("../helpers/api-auth"),
 validateor = require("../helpers/validateor"),
  admin = require("../controllers/admin");
  router.post('/admin-login',admin.adminLogin);
  router.get('/admin-get-users',admin.adminGetUsers);
  router.get('/admin-get-teacher',admin.adminGetTeachers);
  router.get('/admin-new-application',admin.adminNewApplication);
  router.patch('/admin-update-user-status',admin.adminUserStatus);
  router.patch('/admin-update-teacher-status',admin.adminTeacherStatus);
  router.post('/admin-reject-application',admin.adminRejectApplication);
  router.patch('/admin-approve-application',admin.adminApproveApplication);
  router.get('/get-user-info',admin.getUserInfo);
  router.get('/get-teacher-info',admin.getTeacherInfo);
  router.get('/get-teacher-application-info',admin.getTeacherApplicationInfo);
  router.patch('/admin-update-info',admin.adminUpdateInfo);
  router.patch('/admin-change-password',admin.adminUpdatePassword);
  router.get('/bulletins',admin.Bulletins);
  router.get('/get-bulletin',admin.Bulletin);
  router.post('/admin-delete-bulletin',admin.deleteBulletin);
  router.get('/admin-study-groups',admin.AdminFindStudyGroups);
  router.get('/admin-study-group',admin.AdminFindStudyGroup);
  router.post('/delete-study-group',admin.DeleteStudyGroup);
  return router;
}