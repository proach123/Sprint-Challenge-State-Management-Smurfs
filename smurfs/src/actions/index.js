import axios from 'axios';

export const POSTING_SMURF_START = 'POSTING_SMURF_START';
export const POSTING_SMURF_SUCCESS = 'POSTING_SMURF_SUCCESS';
export const POSTING_SMURF_FAILURE = 'POSTING_SMURF_FAILURE';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';
export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log(res.data)
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response });
    });
};



export const postSmurf = (values) => dispatch => {
    
    dispatch({type: POSTING_SMURF_START, values});
    console.log(values, 'the values?')
    axios
    .post(`http://localhost:3333/smurfs`, {
        name: values.name,
        age: values.age,
        height: values.height
    })
    .then(res =>{
        
        console.log(res)
        dispatch({type: POSTING_SMURF_SUCCESS})
    })
    .catch(error => {
        console.log(error)
        dispatch({type: POSTING_SMURF_FAILURE})
    })
}


// postSmurf = (data) => (dispatch) => {
//     serverRequest (dispatch) ('post', 'SIGN_IN', server.ends.postSmurf.POST (), data)
//   }