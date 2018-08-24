import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Base from 'terra-base';
import 'fhirclient';

import messages from './utils/translations/message-translations';
import App from './containers/App';
import configureStore from './store/configureStore';
import log from './utils/logger';
import { loadPatient } from './actions/patientActions';
import { loadMedications } from './actions/medicationStatementActions';

/**
 * Landing page for the user after successful authorization.
 */
FHIR.oauth2.ready((smart) => {
  log.info('Authorized user successfully.');
  const store = configureStore();
  store.dispatch(loadPatient(smart));
  store.dispatch(loadMedications(smart));

  // Define user's language. Different browsers have the user locale defined
  // on different fields on the `navigator` object.
  const locale = (navigator.languages && navigator.languages[0])
                  || navigator.language
                  || navigator.userLanguage
                  || 'en-US';

  render(
    <Base locale={locale} customMessages={messages[locale]}>
      <Provider store={store}>
        <App />
      </Provider>
    </Base>,
    document.getElementById('app'));
});
