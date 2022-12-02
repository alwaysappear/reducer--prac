const reducer = (state, action) => {
    const newItem = [...state.items, action.payload]
    if (action.type === "ADD") {
        return {
            ...state,
            items: newItem,
            modal: true,
            modalContent: 'Item added successfully.'
        }
    }
    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            mdoal: false,
            modalContent: ''
        }
    }

    return state
}

export default reducer