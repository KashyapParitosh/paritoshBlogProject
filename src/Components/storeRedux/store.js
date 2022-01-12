import { createStore } from 'redux';

const isLoggedIn = false;
const rootReducer = ( state = isLoggedIn, action )=> {
    switch (action.type) {
        case "login":
            if(action.data == null ){
               return state;
            } else {
                let loggedIn = !state;
                return loggedIn;
            }
        
        case "logOut":
            if(action.data == null){
                let logOut = !state;
                return logOut;
                
            } else{
                return state;
            }

    
        default:
           return state;
    }
}

export const store = createStore(rootReducer)

