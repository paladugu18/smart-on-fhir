import 'fhirclient';

import log from './utils/logger';

log.info('Authorizing User...');

/**
 * Authorizes the user using SMART authorization flow. 
 */
FHIR.oauth2.authorize({
  client_id: process.env.CLIENT_ID,
  scope: 'patient/*.*',
  redirect_uri: 'http://localhost:3000/index.html',
});
