import { createSlice } from '@reduxjs/toolkit'

export interface ToggleState {
  isOpenMenu: boolean,
  isOpenFilter: boolean
}

const initialState: ToggleState = {
  isOpenMenu: false,
  isOpenFilter: false
}

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    openMenu: ( state ) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
    openFilter: ( state ) => {
      state.isOpenFilter = !state.isOpenFilter;
    },
  },
})

// Action creators are generated for each case reducer function

export const { openFilter, openMenu } = toggleSlice.actions

export default toggleSlice.reducer