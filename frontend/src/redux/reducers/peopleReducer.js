let initialState = {
    peopleList: null,
};

function peopleReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_PEOPLELIST_REQUEST":
            return { ...state };
        case "GET_PEOPLE_SUCCESS":
            return { ...state, peopleList: payload.peopleList };
        case "GET_PEOPLE_LIST_FAILURE":
            return { ...state };
        default:
            return { ...state };
    }
}

export default peopleReducer;
