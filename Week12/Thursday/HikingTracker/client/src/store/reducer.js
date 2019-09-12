const initialState = {
    locations: []
}

const reducer = (state = initialState, action) => {
    if(action.type == 'VIEW_LOC') {
        return {
            ...state,
            locations: action.payload
        }
    }
    return state
}

export default reducer