import React from 'react';
import '../blocktwo/blocktwo.css';

const BlockFour = () => {
  return (
    <div className="block-two-container"> 
      <div className="image-container">
        <img style={{height:'100%' ,width:'90%'}}src={process.env.PUBLIC_URL + '/four.png'} alt="Uber" /> 
      </div>
      <div className={"textcontaniner"}>

      <div className="text-container">
        <h1>Make money by renting out your car</h1>
        <p>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p> 
        <button style={{borderRadius:'10px'}}>Get started</button>
      </div>
      </div>
    </div>
  );
};

export default BlockFour;
