import React, { useState, useEffect } from 'react';
import Experience from './components/Experience';
import Header from './components/Header';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data loading process
    setTimeout(() => {
      // Assume data is fetched and loading is complete
      setLoading(false);
    }, 3000); // Simulating a 3-second loading time
  }, []);

  return (
    <div className="App">

      {loading ? (
        <Loader /> // Display the loader component while loading
      ) : (
        <>
        <Header />
           <Nav />
        <div className="main-content">
          <Intro />
          <Experience />
          <Projects />
          <Contact />
        </div>
        </>
      )}

     
    </div>
  );
};

export default App;
