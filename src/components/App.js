import React from 'react';
import Nav from "./Nav"
import ContentContainer from "./ContentContainer"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <Nav />
      <ContentContainer />
    </React.Fragment>
  );
}

export default App;