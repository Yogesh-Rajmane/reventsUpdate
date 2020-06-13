import React, { Component,Fragment } from 'react'
import NavBar from '../../features/Nav/NavBar/NavBar';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          
          <EventDashboard />
       </Container>
    </Fragment>
      
    )
  }
}
export default App;