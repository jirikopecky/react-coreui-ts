import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Full from './components/Full';

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Full}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
