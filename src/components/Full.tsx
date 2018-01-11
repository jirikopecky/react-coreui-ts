import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Aside from './coreui/Aside';
import Breadcrumb from './coreui/Breadcrumb';
import Footer from './coreui/Footer';
import Header from './coreui/Header';
import Sidebar from './coreui/Sidebar';

import Dashboard from './Dashboard';

type FullProps = RouteComponentProps<{}>;

class Full extends React.Component<FullProps> {
  public render(): React.ReactNode {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid={true}>
              <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
