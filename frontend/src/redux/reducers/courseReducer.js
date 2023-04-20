let initialState = {
    presentCourses: {},
    overCourses: {},
    courseDetail: null,
};

function courseReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        // 모집중,완료 코스 조회
        case "GET_COURSES_REQUEST":
            return [{ ...state }];
        case "GET_COURSES_SUCCESS":
            return {
                ...state,
                presentCourses: payload.presentCourses,
                overCourses: payload.overCourses,
            };
        case "GET_COURSES_FAILURE":
            return { ...state };

        //과정 디테일 조회
        case "GET_DETAIL_REQUEST":
            return { ...state };
        case "GET_DETAIL_SUCCESS":
            return {
                ...state,
                courseDetail: payload.courseDetail,
            };
        case "GET_DETAIL_FAILURE":
            return { ...state };
        default:
            return { ...state };
    }
}

export default courseReducer;
