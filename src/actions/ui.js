import { types } from "../types/types";


export const uiOpenModal = () => ({
    type: types.uiOpenModal
})

export const uiCloseModal = () => ({
    type: types.uiCloseModal
})

export const uiStartLoading = () => ({
    type: types.uiStartLoading
})


export const uiFinishLoading = () => ({
    type: types.uiFinishLoading
})