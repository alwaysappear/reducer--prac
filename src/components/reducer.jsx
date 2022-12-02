const reducer = (state, action) => {
    const newItem = [...state.items, action.payload]
    if (action.type === "ADD") {
        return {
            ...state,
            items: newItem,
            modal: true,
            modalContent: 'Item Added successfully.'
        }
    }
    return state
}

export default reducer