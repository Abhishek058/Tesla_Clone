import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"],
    url: ["https://www.tesla.com/models", "https://www.tesla.com/model3", "https://www.tesla.com/modelx", "https://www.tesla.com/modely", "https://www.tesla.com/solarroof", "https://www.tesla.com/solarpanels"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer