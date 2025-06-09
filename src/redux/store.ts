import { configureStore } from "@reduxjs/toolkit";
import  fetchReducer  from "./fetchigSlice";
import creditsReducer from './creditsSlice';

const store= configureStore(

    {
      reducer:{
        
          fetch:fetchReducer,
          credits: creditsReducer

      }


    }


)

export default store;