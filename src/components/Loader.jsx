import React from 'react';
import loader from "/src/assets/dp.jpg"
const Loader = () => {
  return (
    <>
    <h2>Loading...</h2>
      <img className="dp loader" src={loader} alt="Profile pix" />
    </>
  )
}

export default Loader;
