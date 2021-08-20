import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cars: ["Model S", "Model X", "Model 3", "Model Y"],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
