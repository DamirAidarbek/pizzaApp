import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 0,
    activeSort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
    sortOrder: true,
    toggleSortList: false
}

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setActiveSort: (state, action) => {
            state.activeSort = action.payload
            state.toggleSortList = !state.toggleSortList
        },
        setSortOrder: state => {
            state.sortOrder = !state.sortOrder
        },
        setToggleSortList: state => {
            state.toggleSortList = !state.toggleSortList
        }
    }
})

export const {
    setActiveCategory,
    setActiveSort,
    setSortOrder,
    setToggleSortList
} = filterSlice.actions

export default filterSlice.reducer
