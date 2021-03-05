import React from 'react';
import './App.css'

import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap'
import {HomePage} from '../pages'
import {TopnavComponent, FooterComponent} from '../components'

function App() {
  return (
    <React.Fragment>
      <TopnavComponent />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Container>
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
