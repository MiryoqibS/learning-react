export const initialState = {
    count: 0,
};

export const counterReducer = (state, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return { count: action.payload };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "INCREMENT":
            return { count: state.count + 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    };
};