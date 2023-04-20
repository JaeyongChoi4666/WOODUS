import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import BoardList from "../../components/board/BoardList";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { repairAction } from "../../redux/Actions/repairAction";

const RepairFeedback = () => {
    const dispatch = useDispatch();
    const feedbackData = useSelector((state) => state.repair.repairList);

    useEffect(() => {
        dispatch(repairAction.getRepairList());
    }, []);

    return (
        <div className="FeedbackBox">
            <Container>
                <div className="FeedbackTitle">가구수리소 이용후기</div>
            </Container>
            <BoardList props={feedbackData} />
            <Footer />
        </div>
    );
};

export default RepairFeedback;
