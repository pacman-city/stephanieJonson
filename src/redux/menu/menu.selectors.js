import { createSelector } from 'reselect';


const selectMenu = state => state.menu;

export const selectMenuisOpen = createSelector(
    [selectMenu],
    menu => menu.isOpen
)