import { createContext } from "react";

const initialState = {
    text: "",
    check: false,
}

export const StepperContext = createContext(initialState);