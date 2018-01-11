import AuthenticationContext from 'adal-angular';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import adalConfig from './adalConfig';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// tslint:disable:no-submodule-imports CSS Files
// Styles Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css';
// tslint:enable:no-submodule-imports

const authContext = new AuthenticationContext(adalConfig);

authContext.handleWindowCallback();

if (window === window.parent) {
    // this prevents double app render for the ADAL iFrame requests
    ReactDOM.render(
        <App />,
        document.getElementById('root') as HTMLElement
    );
}

registerServiceWorker();
