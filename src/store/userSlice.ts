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
    picture: string
}

const initialState: userInterface = {
  cart: [{ id: "1", cant: 2 },
  { id: "2", cant: 1 },
  { id: "3", cant: 3 },
  { id: "4", cant: 1 },],
  auth: false,
  loading: false,
  errorL: false,
  name: '',
  picture: ''
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState, // *estado inicial*
  reducers: { // cada *tipo* de acción con su codigo
    changeQuantityCart: (state, action) => {
        state.cart[state.cart.findIndex(x => {x === action.payload.idObjeto })].cant += action.payload.nuevaCant
        console.log('Funcionando')
        // payload es objeto con la nueva cantidad (+1 o -1) y el id del objeto
    },
    removeFromCart: (state, action) => {
        state.cart.splice(state.cart.findIndex(x => {x === action.payload }),1) // payload es solo el id
    },
    removeAllFromCart: (state) => {
        state.cart = []
    },
    addToCart: (state, action) => {
        if (state.cart.some(x => {x === action.payload.id})){
        }
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
    authError, changePic} = userSlice.actions // exportamos todas las acciones\
