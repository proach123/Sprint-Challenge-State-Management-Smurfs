import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard'

import { fetchSmurf } from '../actions/index';
import SmurfForm from "./SmurfForm";




const App = props => {
  console.log(props.smurf, 'this is APP props')
  return (
    <div>
      <button onClick={props.fetchSmurf}>Get Smurf</button>
      {!props.activity && !props.isLoading && (
        <h2>Get those smurfs</h2>
      )}
      {props.isLoading && (
        <div>
          LOADING
        </div>
        
      )}
      {props.smurf && !props.isLoading && <SmurfCard key={Date.now()} smurf={props.smurf}/>}
      <div>
        Add a Smurf
        <SmurfForm  />
      </div>
    </div>
  );  
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurf: state.smurf,
    error: state.error
  };
};

export default connect(
mapStateToProps,
{fetchSmurf}
)(App);
