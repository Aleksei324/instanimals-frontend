import { createSlice } from "@reduxjs/toolkit";
import { adsParams } from "../helpers";

export interface cartInterface {
  cant: number,
  ad: adsParams
}

interface userInterface {
  cart: cartInterface[],
  auth: boolean ,
  loading: boolean,
  errorL: boolean,
  userID: string,
  name: string,
  picture: string,
  tipo: string // USER o VET
}

const initialState: userInterface = {
  cart: JSON.parse(localStorage.getItem('cart') || JSON.stringify([])),
  auth: localStorage.getItem('auth') === '1' || false, // '1'=true, '0'=false
  loading: false,
  errorL: false,
  userID: localStorage.getItem('userID') || '',
  name: localStorage.getItem('name') || '',
  picture: localStorage.getItem('picture') || '',
  tipo: localStorage.getItem('tipo') || '' // USER o VET
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    changeQuantityCart: (state, action) => {
      const { id, aumenta } = action.payload
      const productoID = state.cart.findIndex((product) => product.ad.postID === id)
    
      if (productoID !== -1) {
        if (aumenta) {
          state.cart[productoID].cant += 1;
        } else if (state.cart[productoID].cant > 1) {
          state.cart[productoID].cant -= 1;
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
      // payload es objeto con un boolean sobre si aumenta el valor, y el id del objeto
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.cart.filter((product) => product.ad.postID !== action.payload);
      state.cart = [...updatedCart]
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeAllFromCart: (state) => {
      state.cart = []
      localStorage.setItem('cart', JSON.stringify([]))
    },
    addToCart: (state, action) => {
      if (!( state.cart.some(x => {x.ad.postID === action.payload.id}) )){
        state.cart.push(action.payload) // payload es un nuevo item (objeto con cant=1 y todos los datos)
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    waitAuth: (state) => {
      state.loading = true
    },
    authComplete: (state, action) => {
      state.userID = action.payload.userID
      state.name = action.payload.name
      state.picture = action.payload.picture
      state.tipo = action.payload.tipo
      state.auth = true
      state.loading = false
    },
    logout: (state) => {
      state.userID = ''
      state.name = ''
      state.picture = ''
      state.tipo = ''
      state.auth = false
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

export const {
  changeQuantityCart, removeFromCart, removeAllFromCart,
  addToCart, waitAuth, authComplete, authError, changePic, logout
} = userSlice.actions
