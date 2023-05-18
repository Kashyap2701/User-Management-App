import {createSlice } from "@reduxjs/toolkit";


const userAuthSlice = createSlice(
    {
        name:'user',
        initialState:{
            currentUser: JSON.parse(localStorage.getItem('user')) || {},
            isLoggedIn:false
        },
        reducers : {
            signup(state,action){
                state.currentUser = action.payload;
                state.isLoggedIn = true;
                localStorage.setItem('user',JSON.stringify(state.currentUser));
            },
            logout(state){
                state.isLoggedIn = false;
                state.currentUser = {};
                localStorage.removeItem('user');
            }
        }
    }
)



export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice;