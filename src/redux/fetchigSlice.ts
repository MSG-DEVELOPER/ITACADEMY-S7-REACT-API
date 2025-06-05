import { createSlice } from "@reduxjs/toolkit";

interface initialState{
    loading:boolean;
    data:null | object;
    error:boolean;
}

const initialState : initialState={

loading:false,
data:null,
error:false

};

export const fetchSlice = createSlice(
 
    {
        name:"fetch",
        initialState,
        reducers:{
            fetchData:(state,action) =>{
                

            }
        }
    }





);

