import React, { useEffect } from "react";
import BoardList from "../board/BoardList";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../../redux/Actions/boardAction";

const ActivityDetail = () => {
    const dispatch = useDispatch();
    const activityList = useSelector((state) => state.board.activityList);
    useEffect(() => {
        dispatch(boardAction.getBoardList());
    }, []);

    return (
        <div className="ActivityBox">
            <Container>
                <div className="ActivityTitle">우리의 활동</div>
            </Container>
            <BoardList props={activityList} />
        </div>
    );
};

export default ActivityDetail;
