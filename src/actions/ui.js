import { types } from "../types/types";


export const startOpenModal = () => ({
    type: types.uiOpenModal
})

export const startCloseModal = () => ({
    type: types.uiCloseModal
})

export const startLoading = () => ({
    type: types.uiStartLoading
})


export const finishLoading = () => ({
    type: types.uiFinishLoading
})