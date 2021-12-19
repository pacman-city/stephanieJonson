import menuActionsTypes from "./menu-types";


export const openMenu = () => ({
    type: menuActionsTypes.OPEN_MENU
});

export const closeMenu = () => ({
    type: menuActionsTypes.CLOSE_MENU
})