import api from "../api";

function getPeople(course_id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_PEOPLELIST_REQUEST" });
            const peopleListApi = api.get(`/student/${course_id}`);

            let [peopleList] = await Promise.all([peopleListApi]);

            dispatch({
                type: "GET_PEOPLE_SUCCESS",
                payload: { peopleList: peopleList.data },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_PEOPLE_LIST_FAILURE" });
        }
    };
}

export const peopleAction = { getPeople };
