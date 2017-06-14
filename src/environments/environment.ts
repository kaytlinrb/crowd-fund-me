// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCiCT0mQVDO4URrT5HN7mGpaXTZ4aR0tDc",
    authDomain: "crowd-fund-me.firebaseapp.com",
    databaseURL: "https://crowd-fund-me.firebaseio.com",
    projectId: "crowd-fund-me",
    storageBucket: "crowd-fund-me.appspot.com",
    messagingSenderId: "889493198359"
  }
};
