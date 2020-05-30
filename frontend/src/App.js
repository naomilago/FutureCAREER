import React from 'react';

import Header from "./components/header";
import Presentation from "./components/presentation";
import OurData from "./components/ourData";
import OurDetails from './components/ourDetails';
import JobList from './components/jobList';
import WeAreChangingLives from './components/weAreChangingLives';
import TrustedBy from './components/trustedBy';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <OurData />
      <OurDetails />
      <JobList />
      <WeAreChangingLives />
      <TrustedBy />
      <Footer />
    </div>
  );
}

export default App;
