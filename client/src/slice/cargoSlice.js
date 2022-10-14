import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cargoService from "./cargoService";

export const createCargo = createAsyncThunk(
  "cargo/createCargo",
  async (userData, thunkAPI) => {
    try {
      return await cargoService.createCargo(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAll = createAsyncThunk("cargo/getAll", async (_, thunkAPI) => {
  console.log("hfhgkjfgkjb");
  try {
    return await cargoService.getAll();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
const cargoSlice = createSlice({
  name: "cargo",
  initialState: {
    orders: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCargo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createCargo.fulfilled, (state, action) => {
        state.orders.push(action?.payload);
        state.loading = false;
        state.isError = undefined;
        state.serverErr = undefined;
      })
      .addCase(createCargo.rejected, (state, action) => {
        state.loading = false;
        state.isError = action?.payload;
        state.serverErr = action?.error?.message;
      })
      .addCase(getAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.orders = action?.payload;
        state.loading = false;
        state.isError = undefined;
        state.serverErr = undefined;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.isError = action?.payload;
        state.serverErr = action?.error?.message;
      });
  },
});
export default cargoSlice.reducer;
