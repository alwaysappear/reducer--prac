const reducer = (state, action) => {
    const newItems = [...state.items, action.payload]
    if (action.type === "ADD") {
        return {
            ...state,
            items: newItems,
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

    if (action.type === "DELETE") {
        return {
            ...state,
            items: action.payload,
            modal: true,
            modalContent: 'Item removed'
        }
    }

    return state
}

export default reducer