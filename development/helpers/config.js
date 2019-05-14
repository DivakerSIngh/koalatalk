module.exports=function(){
       var env = "devEnv";
       var devEnv={
           'PORT':7111,
           'DB_URL':'mongodb://koalaweb_usr:Ud7e8Z&6e^fd@52.8.169.78:27017/koalaweb_db?authMechanism=SCRAM-SHA-1',
           'authUsername':'admin@kaolawebapp.com',
           'authPassword':'123456',
           'secret':'ilovenode',
           'user_profile_image_path': '/var/www/html/koalaweb_dev/development/public/',
           'userProfilePathView': '/var/koalaweb_dev/development/public/images/'

       };

       return env=="devEnv"?devEnv:prodEnv;
}
