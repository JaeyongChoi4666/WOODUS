import api from "../api";

function getContribution() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_CONTRIBUTION_REQUEST" });
            const getContributionApi = api.get("/contribution");

            let [contribution] = await Promise.all([getContributionApi]);

            dispatch({
                type: "GET_CONTRIBUTION_SUCCESS",
                payload: { contribution: contribution.data },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_CONTRIBUTION_FAILURE" });
        }
    };
}

function getContributionDetail(con_id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_CONDETAIL_REQUEST" });
            const conDetailApi = api.get(`/contribution/${con_id}`);

            let [conDetail] = await Promise.all([conDetailApi]);
            dispatch({
                type: "GET_CONDETAIL_SUCCESS",
                payload: { conDetail: conDetail.data },
            });
        } catch (error) {
            //에러 핸들링
            dispatch("GET_CONDETAIL_FAILURE");
        }
    };
}

export const contributionAction = { getContribution, getContributionDetail };
