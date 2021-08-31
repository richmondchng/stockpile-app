
export const showInfo = (message) => {
    return {
        type: "show-info",
        payload: {
            message: message
        }
    }
}