import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Full from './Full';

const App: React.SFC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Full}/>
      </Switch>
    </HashRouter>
  );
};

export default App;
