import {createSlice } from "@reduxjs/toolkit";


const userAuthSlice = createSlice(
    {
        name:'user',
        initialState:{
            currentUser: JSON.parse(localStorage.getItem('currentUser')),
            isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
            hasError:false,
            loginError:'',
            signupError:''
        },
        reducers : {
            signup(state,action){
                const { email } = action.payload;
                const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
                const isUserExist = storedUsers.filter((user) => user.email === email)[0];
                if (isUserExist) {
                    state.hasError = true;
                    state.signupError = "User already exists";
                } else {
                    state.currentUser = action.payload;
                    state.isLoggedIn = true;
                    state.signupError = "";
                    storedUsers.push(action.payload);
                    localStorage.setItem("users", JSON.stringify(storedUsers));
                    localStorage.setItem("currentUser", JSON.stringify(action.payload));
                    localStorage.setItem("isLoggedIn", true);
                }
            },
            logout(state){
                state.isLoggedIn = false;
                state.currentUser = {};
                localStorage.setItem('isLoggedIn',JSON.stringify(false));
                localStorage.removeItem('currentUser');
            },
            login(state,action){
                const {email,password} = action.payload;
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const foundUser = users.filter(user => user.email === email)[0];

                if (foundUser) {
                    if (foundUser.password === password) {
                        state.currentUser = foundUser;
                        state.hasError = false;
                        state.isLoggedIn = true;
                        state.loginError = '';
                        localStorage.setItem('currentUser',JSON.stringify(foundUser));
                        localStorage.setItem('isLoggedIn',JSON.stringify(true));
                    } else {
                        state.hasError = true;
                        state.loginError = 'Invalid Credentials';
                    }
                }
                else {
                    state.hasError = true;
                    state.loginError = 'Email not Found';
                }
            },
            resetError(state){
                state.hasError = false;
                state.loginError = '';
                state.signupError = '';
            }
        }
    }
)



export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice;