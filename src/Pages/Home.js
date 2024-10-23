import React from 'react';
import HomeComponent from './pages_components/home';
import Head from './pages_components/Head';

const Home = () => {
  return (
    <div>
       <Head />
      <HomeComponent /> {/* Use the HomeComponent here */}
    </div>
  );
};

export default Home;
