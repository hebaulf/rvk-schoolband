import { createContext } from "react";

const initialState = {
    text: "",
}

export const StepperContext = createContext(initialState);