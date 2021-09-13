/**
 * Toast reducer
 * @param {*} state
 * @param {*} action 
 * @returns 
 */
const reducer = (state = [], action) => {
    switch(action.type) {
        case 'show-toast-notification':
            return [...state, action.payload];
        case 'close-toast-notification':
            const toasts = [];
            state.map(toast => {
                if(toast.id !== action.payload) {
                    toasts.push(toast);
                }
            })
            return toasts;
        default:
            return state;
    }
}

export default reducer;