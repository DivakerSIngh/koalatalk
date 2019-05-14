"use strict";
module.exports = (router) => {
const  auth = require("../helpers/api-auth"),
 validateor = require("../helpers/validateor"),
 bulletins = require("../controllers/bulletins");
router.post('/create-bulletin',auth.isAuthenticated,bulletins.createBulletinGroup);
router.get('/bulletin',auth.isAuthenticated,bulletins.GetBulletin);
router.get('/view-bulletin',auth.isAuthenticated,bulletins.ViewBulletin);
router.post('/create-comment',auth.isAuthenticated,bulletins.CreateComment);
router.post('/create-bulletin-url',auth.isAuthenticated,bulletins.createBulletinURL);
router.post('/bulletin-edit-comment',auth.isAuthenticated,bulletins.EditComment);
router.post('/bulletin-delete-comment',auth.isAuthenticated,bulletins.DeleteComment);
router.post('/bulletin-create-comment-nested',auth.isAuthenticated,bulletins.CreateCommentNested);
router.post('/bulletin-delete-comment-nested',auth.isAuthenticated,bulletins.DeleteNestedComment);
router.get('/url-fetch',auth.isAuthenticated,bulletins.UrlFtch);
return router;
}