import { createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FireBase";


const FirebaseSignupSlices = createSlice({

    name: 'Signup',
    initialState: {
      name: "",
      email: "",
      password: "",
      confirmPassword:"",
     
    },
 
    reducers: {
        SignUpHandler: (state, action) => {
            state.name =action.payload.name
            state.email =action.payload.email
            state.password =action.payload.password

            createUserWithEmailAndPassword(auth, state.email, state.password)
            console.log(state.email, state.password,state.name)
          },
    },
  });
  
  export const { SignUpHandler } = FirebaseSignupSlices.actions;
  export default FirebaseSignupSlices.reducer;
  