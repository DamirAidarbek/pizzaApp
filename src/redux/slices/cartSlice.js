import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    totalItems: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find(
                obj =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size &&
                    obj.type === action.payload.type
            )

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalPrice = state.items.reduce((sum, item) => {
                return item.price * item.count + sum
            }, 0)
        },
        plusItem: (state, action) => {},
        minusItem: (state, action) => {
            const findItem = state.items.find(
                obj =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size &&
                    obj.type === action.payload.type
            )

            if (findItem) {
                findItem.count--
            }

            state.totalPrice = state.totalPrice - findItem.price
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                obj =>
                    obj.id !== action.payload.id ||
                    obj.size !== action.payload.size ||
                    obj.type !== action.payload.type
            )
            state.totalPrice = state.items.reduce((sum, item) => {
                return item.price * item.count + sum
            }, 0)
        },
        clearCart: state => {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const { addItem, clearCart, removeItem, minusItem } = cartSlice.actions

export default cartSlice.reducer
