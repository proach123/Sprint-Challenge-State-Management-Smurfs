
import { connect } from "react-redux";
import React,{ useState, useReducer } from "react";
import {postSmurf} from '../actions'
import { reducer, initialState } from "../reducers";
import axios from "axios";

// import React, { useReducer } from 'react'
// import { withFormik, Form, Field } from 'formik'
// import * as Yup from 'yup'
// import { postSmurf } from '../actions';

// export default withFormik({
//     mapPropsToValues() {
//         return {
//             name: '',
//             age: 0,
//             height: '',
//         }
//     },
//     handleSubmit(values, {props}) {
//         props.dispatch(postSmurf(values))
//         // dispatch({type: POSTING_SMURF_START, payload: values})
//     },
//     validationSchema: Yup.object().shape({
//         name: Yup.string()
//             .required('This field is required'),
//         age: Yup.string().required('this field is required'),
//         height: Yup.string()
//             .required('This field is required'),
//     })
// })(({ errors, touched }) => {
//     return (
//         <div>

//             <Form className='sign-in-form'>

//                 <div>
//                     <label className='sign-in-label'>Name:
//                     <Field type='text' name='name' className='form-input' />
//                         {touched.name && errors.name && (<p>{errors.name}</p>)}
//                     </label>
//                 </div>
//                 <div>
//                 <label className='sign-in-label'>Age:
//                     <Field type='text' name='age' className='form-input' />
//                     {touched.age && errors.age && (<p>{errors.age}</p>)}
//                 </label>
//                 </div>
//                 <div>
//                 <label className='sign-in-label'>Height:
//                     <Field type='height' name='height' className='form-input' />
//                     {touched.height && errors.height && (<p>{errors.height}</p>)}
//                     </label>
//                 </div>
//                 <button type='submit'>Submit</button>


//             </Form>

//         </div>
//     );
// });


const SmurfForm = (props) =>{

    // const [state, dispatch] = useReducer(reducer, initialState);

    const [formState, setFormState] = useState(props.smurfSubmit.name)

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log(event)
        axios
    .post(`http://localhost:3333/smurfs`, {
        
    })
    .then(res =>{
        
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
    }

    const handelChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }
    const handleAge = (event) => {
        setFormState({...formState,[event.target.age]: event.target.value})
    }
    const handleH = (event) => {
        setFormState({...formState,[event.target.height]: event.target.value})
    }
// console.log(state)
    return(
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input type="text" value={formState.name} onChange={event =>handelChange(event)}/>
                </label>
                <label>
                    Age:
                    <input type="text" value={formState.age} onChange={event => handleAge(event)}/>
                </label>
                <label>
                    Height:
                    <input type="text" value={formState.height} onChange={event => handleH(event)}/>
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
    )

}

const mapStateToProps = state =>{
    return {
        smurf: state.smurf,
        smurfSubmit: state.smurfSubmit
    }
}

export default connect(
    mapStateToProps,
    {postSmurf}
)(SmurfForm)