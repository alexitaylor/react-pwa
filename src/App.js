import React from 'react';
import Hello from './components/Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="React Startkit w/ Parcel" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

export default App;
