// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stage: 'dev',
  'environmentName': 'Local Environment',
  'classAPIEndpoint': 'http://localhost:8080/class/',
  'studentAPIEndpoint': 'http://localhost:8080/student/',
  'getClassTime': 15000,
  'aws_cognito_region': 'ap-southeast-2',
  'aws_user_pools_id': 'ap-southeast-2_xwJzu6o5o',
  'aws_user_pools_web_client_id': '1kjv0a3rm18od63enl28q9smj2',
  'feature_toggle': {
    'cognito_login': true
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
