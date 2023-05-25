import { createSlice } from "@reduxjs/toolkit";

export interface cartInterface {
  cant:number,
  id:string
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
  cart: [
    { id: "1", cant: 2 },
    { id: "2", cant: 3 },
    { id: "3", cant: 9 },
    { id: "4", cant: 6 }
  ],
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
      const { id, aumenta } = action.payload;
      const productoID = state.cart.findIndex((product) => product.id === id);
    
      if (productoID !== -1) {
        if (aumenta) {
          state.cart[productoID].cant += 1;
        } else if (state.cart[productoID].cant > 1) {
          state.cart[productoID].cant -= 1;
        }
      }
      // payload es objeto con un boolean sobre si aumenta el valor, y el id del objeto
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.cart.filter((product) => product.id !== action.payload);
      state.cart = [...updatedCart];
    },
    removeAllFromCart: (state) => {
      state.cart = []
    },
    addToCart: (state, action) => {
      if (!( state.cart.some(x => {x.id === action.payload.id}) )){
        state.cart.push(action.payload) // payload es un nuevo item (objeto con cant=1 e id)
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
  addToCart, waitAuth, authComplete, authError, changePic
} = userSlice.actions
