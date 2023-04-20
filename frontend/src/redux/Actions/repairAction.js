import api from "../api";

function getRepairList() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_REPAIRLIST_REQUEST" });
            const getRepairListeApi = api.get(`/repair`); //가구수리소 목록 조회

            let [repairList] = await Promise.all([getRepairListeApi]);

            dispatch({
                type: "GET_REPAIRLIST_SUCCESS",
                payload: {
                    repairList: repairList.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_REPAIRLIST_FAILURE" });
        }
    };
}

function getRepairDetail(repair_id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_REPAIRDETAIL_REQUEST" });
            const getRepairDetaileApi = api.get(`/repair/${repair_id}`); //가구수리소 목록 조회

            let [repairDetail] = await Promise.all([getRepairDetaileApi]);

            dispatch({
                type: "GET_REPAIRDETAIL_SUCCESS",
                payload: {
                    repairDetail: repairDetail.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_REPAIRDETAIL_FAILURE" });
        }
    };
}

export const repairAction = { getRepairList, getRepairDetail };
