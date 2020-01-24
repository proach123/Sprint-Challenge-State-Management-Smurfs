import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    POSTING_SMURF_START,
    POSTING_SMURF_SUCCESS
  } from '../actions';
  
 export const initialState = {
    isLoading: false,
    smurf: [{
        name: 'myname',
        age: '',
        height: '0',
        id: 100
    }],
    smurfSubmit: {
        name: '',
        age: '',
        height: '',
        id: Date.now()
    },
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF_START:
          console.log(state,'fetch state')
        return {
          ...state,
          isLoading: true
        };
      case FETCHING_SMURF_SUCCESS:
          console.log(state, 'success state')
        return {
          ...state,
          isLoading: false,
          smurf: action.payload
        };
        case POSTING_SMURF_START:
            return {
                ...state
            }
        case POSTING_SMURF_SUCCESS:
            console.log(action.payload)
            return {
                ...state,

            }
      default:
        return state;
    }
  };
  