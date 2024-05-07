import React from 'react';
import './blocktwo.css';

const BlockTwo = () => {
  return (
    <div className="block-two-container">
      <div className="image-container">
        <img style={{height:'100%' ,width:'90%',margin:'auto'}} src={process.env.PUBLIC_URL + '/three.png'}alt="Uber" />
      </div>
      <div className={"textcontainer"}>

      <div className="text-container" style={{width:'100%'}}>
        <h1>Drive when you want, make what you need</h1>
        <p>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
        <div style={{display:'flex'}}>

        <button style={{marginRight:'5%'}}>Get started</button>
        <span>Already have an account? <a href="#">Sign in</a></span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlockTwo;
