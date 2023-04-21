import { createSlice } from "@reduxjs/toolkit";

interface cartInterface {
    cant:number,
    id:string
}

interface userInterface {
    cart: cartInterface[],
    auth: boolean,
    loading: boolean,
    errorL: boolean,
    name: string,
    picture: string,
    tipo: string // USER o VET
}

const initialState: userInterface = {
    cart: [],
    auth: true,
    loading: false,
    errorL: false,
    name: 'Apri',
    picture: '/placeholders/profile-photo.jpg',
    tipo: 'USER'
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeQuantityCart: (state, action) => {
            state.cart[state.cart.findIndex(x => {x === action.payload.idObjeto })].cant += action.payload.nuevaCant
            // payload es objeto con la nueva cantidad (+1 o -1) y el id del objeto
        },
        removeFromCart: (state, action) => {
            state.cart.splice(state.cart.findIndex(x => {x === action.payload }),1) // payload es solo el id
        },
        removeAllFromCart: (state) => {
            state.cart = []
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload) // payload es un nuevo item (objeto con cant=1 e id)
        },
        waitAuth: (state) => {
            state.loading = true
        },
        authComplete: (state) => {
            state.auth = true
            state.loading = false
        },
        authError: (state) => {
            state.loading = false
            state.errorL = !(state.errorL)
        },
        changePic: (state, action) => {
            state.picture = action.payload // payload es url de la nueva imagen
        }
    }
})

export const {changeQuantityCart,
    removeFromCart, removeAllFromCart,
    addToCart, waitAuth, authComplete,
    authError, changePic} = userSlice.actions
