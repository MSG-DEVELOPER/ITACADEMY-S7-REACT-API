import { configureStore } from "@reduxjs/toolkit";
import  fetchReducer  from "./fetchigSlice";
import creditsReducer from './creditsSlice';
import userReducer from './userSlice';

const store= configureStore(

    {
      reducer:{
        
          fetch:fetchReducer,
          credits: creditsReducer,
          user:userReducer

      }


    }


)

export default store;