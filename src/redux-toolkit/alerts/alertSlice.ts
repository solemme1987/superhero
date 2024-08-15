import { createSlice } from '@reduxjs/toolkit'

export interface AlertState {
  isOpen: boolean,
  title: string,
  message: string
}

const initialState: AlertState = {
  isOpen: false,
  title: '',
  message: ''
}

export const alertSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title
      state.message = action.payload.message
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = '';
      state.message = '';
    },
  },
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = alertSlice.actions

export default alertSlice.reducer