import React, { useEffect } from "react";
import Menubar from "../Menubar";
import Secondmenu from "../Secondmenu";
import FeedbackCard from "./FeedbackCard";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { repairAction } from "../../redux/Actions/repairAction";

const FeedbackDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const repairDetail = useSelector((state) => state.repair.repairDetail);
    const getRepairDetail = async () => {
        dispatch(repairAction.getRepairDetail(id));
    };
    useEffect(() => {
        getRepairDetail();
    }, []);

    return (
        <div>
            <Menubar />
            <Secondmenu />
            <div className="RepairDetailBox">
                <Container>
                    <FeedbackCard props={repairDetail} />
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default FeedbackDetail;
