import menuActionsTypes from "./menu-types";


const INITIAL_STATE = {
    menuOpen: false,

};

const menuReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case menuActionsTypes.OPEN_MENU:
            return {...state, isOpen:true}
        case menuActionsTypes.CLOSE_MENU:
            return {...state, isOpen:false}
        default: return state;
    }
};

export default menuReducer;