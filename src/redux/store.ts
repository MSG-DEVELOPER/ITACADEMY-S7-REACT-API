import { configureStore } from "@reduxjs/toolkit";
import  fetchReducer  from "./fetchigSlice";

const store= configureStore(

    {
      reducer:{
        
          fetch:fetchReducer

      }


    }


)

export default store;