import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      return state.filter(product => product.id !== action.payload);
    },
    updateProduct(state, action) {
      const { id, updatedProduct } = action.payload;
      const index = state.findIndex(product => product.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedProduct };
      }
    },
    toggleAvailability(state, action) {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

// Экспорт действий и редьюсера
export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productSlice.actions;
export default productSlice.reducer;