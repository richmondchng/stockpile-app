const reducer = (state = [], action) => {
    switch(action.type) {
        case "show-info":
            // const payload = action.payload;
            // console.log(JSON.stringify(payload));
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;