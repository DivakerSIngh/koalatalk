"use strict";
module.exports = (router) => {
const  auth = require("../helpers/api-auth"),
 validateor = require("../helpers/validateor"),
 users = require("../controllers/users");
router.post('/login',auth.isAuthenticated,validateor.login,users.login);
router.post('/registration',validateor.registration,users.registration);
router.post('/reset-password',auth.isAuthenticated,validateor.resetPassword,users.resetPassword);
router.post('/forgot-password',validateor.forgotPassword,users.forgotPassword);
router.post('/image-upload',auth.isAuthenticated,users.imageUpload);
router.post('/google-image-url',auth.isAuthenticated,users.socialImageFetch);
router.get('/view-user-info',auth.isAuthenticated,users.viewUserInfo);
router.patch('/edit-language',auth.isAuthenticated,users.editLanguage);
router.patch('/main-language',auth.isAuthenticated,users.mainLanguage);
router.patch('/save-interests',auth.isAuthenticated,users.saveInterests);
router.post('/social-login',auth.isAuthenticated,users.socialLogin);
router.get('/my-interests',auth.isAuthenticated,users.interests);
router.get('/header-check',auth.isAuthenticated,users.headerCheck);
router.get('/country-with-time-zone',users.countryWithTimeZone);
router.get('/country-language',users.countryLanguage);
router.get('/search-friends',auth.isAuthenticated,users.searchFriends);
router.post('/resend-link',users.reSendLink);
router.get('/test',users.test);
return router;
}