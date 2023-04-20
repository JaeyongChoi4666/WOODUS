let initialstate = {
    repairList: {},
    repairDetail: null,
};

function repairReducer(state = initialstate, action) {
    let { type, payload } = action;
    switch (type) {
        // 가구수리소 조회
        case "GET_REPAIRLIST_REQUEST":
            return [{ ...state }];
        case "GET_REPAIRLIST_SUCCESS":
            return {
                ...state,
                repairList: payload.repairList,
            };
        case "GET_REPAIRLIST_FAILURE":
            return { ...state };

        //가구수리소 디테일 조회
        case "GET_REPAIRDETAIL_REQUEST":
            return { ...state };
        case "GET_REPAIRDETAIL_SUCCESS":
            return {
                ...state,
                repairDetail: payload.repairDetail,
            };
        case "GET_REPAIRDETAIL_FAILURE":
            return { ...state };
        default:
            return { ...state };
    }
}

export default repairReducer;
