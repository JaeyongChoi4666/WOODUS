import api from "../api";

function getBoardList() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_BOARD_REQUEST" });
            const getNoticeApi = api.get(`/notice/list`); //공지사항 목록 조회
            const getActivityApi = api.get(`/activity`); //우리의활동 조회

            let [noticeList, activityList] = await Promise.all([
                getNoticeApi,
                getActivityApi,
            ]);

            dispatch({
                type: "GET_BOARD_SUCCESS",
                payload: {
                    noticeList: noticeList.data,
                    activityList: activityList.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_BOARD_FAILURE" });
        }
    };
}

function getBoardDetail(board_id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_BOARD_DETAIL_REQUEST" });
            const getNoticeDetailApi = api.get(`/notice/${board_id}`); //공지사항 목록 조회
            const getActivityeDetailApi = api.get(`/activity/${board_id}`); //공지사항 목록 조회

            let [noticeDetail, activityDetail] = await Promise.all([
                getNoticeDetailApi,
                getActivityeDetailApi,
            ]);

            dispatch({
                type: "GET_BOARD_DETAIL_SUCCESS",
                payload: {
                    noticeDetail: noticeDetail.data,
                    activityDetail: activityDetail.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_BOARD_DETAIL_FAILURE" });
        }
    };
}

export const boardAction = { getBoardList, getBoardDetail };
