/**
 * Alert notification reducer
 * @param {*} state
 * @param {*} action 
 * @returns 
 */
 const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'show-alert':
            return action.payload;
        case 'close-alert':
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
}

export default reducer;