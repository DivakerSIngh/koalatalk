"use strict";
module.exports = (router) => {
const  auth = require("../helpers/api-auth"),
 validateor = require("../helpers/validateor"),
 studyGroups = require("../controllers/studyGroups");
router.get('/categorys',auth.isAuthenticated,studyGroups.categoryAndSubCategory);
router.post('/create-study-group',auth.isAuthenticated,studyGroups.createStudyGroup);
router.get('/find-study-group',auth.isAuthenticated,studyGroups.findStudyGroup);
router.get('/study-group',auth.isAuthenticated,studyGroups.studyGroup);
router.post('/create-comment-single',auth.isAuthenticated,studyGroups.CreateComment);
router.post('/create-comment-nested',auth.isAuthenticated,studyGroups.CreateCommentNested);
router.post('/comment-single',auth.isAuthenticated,studyGroups.DeleteComment);
router.post('/comment-nested',auth.isAuthenticated,studyGroups.DeleteNestedComment);
router.post('/add-request-study-group',auth.isAuthenticated,studyGroups.AddRequestToStudyGroup);
router.get('/study-group-internal',auth.isAuthenticated,studyGroups.studyGroup);
router.post('/create-comment-single-internal',auth.isAuthenticated,studyGroups.CreateCommentInternal);
router.post('/create-comment-nested-internal',auth.isAuthenticated,studyGroups.CreateCommentNestedInternal);
router.post('/comment-single-internal',auth.isAuthenticated,studyGroups.DeleteCommentInternal);
router.post('/comment-nested-internal',auth.isAuthenticated,studyGroups.DeleteNestedCommentInternal);
router.patch('/edit-comment-single',auth.isAuthenticated,studyGroups.EditComment);
router.patch('/edit-comment-internal',auth.isAuthenticated,studyGroups.EditCommentInternal);
router.post('/leave-group',auth.isAuthenticated,studyGroups.LeaveGroup);
router.post('/pinned-comment',auth.isAuthenticated,studyGroups.PinnedComment);
router.post('/demo-test',studyGroups.demotest);

return router;
}