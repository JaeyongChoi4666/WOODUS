import React, { useEffect } from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import ConDetail from "../../components/contribution/ConDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { contributionAction } from "../../redux/Actions/contributionAction";
import Secondmenu from "../../components/Secondmenu";

const ContribDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const conDetail = useSelector((state) => state.con.conDetail);
    const getconDetail = async () => {
        dispatch(contributionAction.getContributionDetail(id));
    };
    useEffect(() => {
        getconDetail();
    }, []);

    const detail = conDetail?.[0];
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <ConDetail detail={detail} />
            <Footer />
        </div>
    );
};

export default ContribDetail;
