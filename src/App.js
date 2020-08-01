import React from 'react';
import FaqDisplay from './components/FaqDisplay';
import InputFaq from './components/InputFaq';
import { BrowserRouter as Router , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path='/' exact component={FaqDisplay}/>
      <Route path='/input' exact component={InputFaq}/>
    </Router>
  );
}

export default App;
