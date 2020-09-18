


export const startLogin = (email, password) => { 

    return async (dispatch) => {
        
        console.log(email, password);
        console.log("______________");

    }
}


// export const startRegister = (email, password, name) => {

//     return (dispatch) => {

//         dispatch(
//             // login(user.uid, user.displayName)
//         )
           
//     }

    
// }

// export const login = (uid, displayName) => ({
//     type: types.login,
//     payload: {
//         uid,
//         displayName 
//     }
// });

// export const startLogout = () => {
//     return async (dispatch) => {

//         dispatch(logout());
//         dispatch(notesLogout());
//     }
// }


// export const logout = () => ({
//     type: types.logout
// }) 