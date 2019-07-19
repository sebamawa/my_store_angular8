// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // agregado para firebase
  firebaseConfig: {
    apiKey: "AIzaSyAQD-eLZ3czZeOHah6DTN3BmIGKJJk3Tk8",
    authDomain: "lavaderoapp.firebaseapp.com",
    databaseURL: "https://lavaderoapp.firebaseio.com",
    projectId: "lavaderoapp",
    storageBucket: "lavaderoapp.appspot.com",
    messagingSenderId: "637744671689",
    appId: "1:637744671689:web:96f114691cc3c98d"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
