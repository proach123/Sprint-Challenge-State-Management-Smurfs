import React from "react";
import "./App.css";
import { connect } from 'react-redux';

import { fetchSmurf } from '../actions/index';




const SmurfCard = props => {
  console.log(props.smurf, 'this is Smurf Card props')
  return (
    <div>
      {props.smurf.map((item)=>{
          
          return(
        <div>
            <div>{item.name}</div>
            <div>{item.age}</div>
        </div>
          )
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(
mapStateToProps,
{fetchSmurf}
)(SmurfCard);
