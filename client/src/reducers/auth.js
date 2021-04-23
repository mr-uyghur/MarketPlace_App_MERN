let userState;

//login below grabs user from local storage and adds to Redux
//because Data inside redux disappears after each refresh
if(window.localStorage.getItem('auth')){
    userState = JSON.parse(window.localStorage.getItem('auth'))
} else {
    //if no user found in the local storage then set state to null
    userState = null
}


export const authReducer = (state = userState,action) => { //
    switch(action.type) {
        case "LOGGED_IN_USER":
            return { ...state,...action.payload }
        case "LOGGED_OUT":
            return action.payload
        default:
            return state
    }
}