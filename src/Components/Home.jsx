import React from 'react';
import cricketImage from './cricket3.jpeg'; 

const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img src={cricketImage} alt="Cricket" className="object-cover h-full w-full" />
    </div>
  );
};

export default Home;
