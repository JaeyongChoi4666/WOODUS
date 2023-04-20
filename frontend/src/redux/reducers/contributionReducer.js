let initialState = {
    contribution: {},
    conDetail: null,
};

function contributionReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        //기업사회공헌 게시물 목록 조회
        case "GET_CONTRIBUTION_REQUEST":
            return { ...state };
        case "GET_CONTRIBUTION_SUCCESS":
            return { ...state, contribution: payload.contribution };
        //기업사회공헌 개별항목 조회
        case "GET_CONDETAIL_REQUEST":
            return { ...state };
        case "GET_CONDETAIL_SUCCESS":
            return { ...state, conDetail: payload.conDetail };
        default:
            return { ...state };
    }
}

export default contributionReducer;
