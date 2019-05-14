// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = { 
  production: false,
  //serverUrl: "http://52.8.169.78:7112/api/",
  serverUrl:"https://koalatalkstage.appnationz.com/api/", //staging server
 // serverUrl:"https://koalatalk.appnationz.com/api/",  //development server
  api:{
    registration:'api/users/registration'
  }
};
