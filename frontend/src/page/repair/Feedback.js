import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import RepairFeedback from "../../components/repair/RepairFeedback";

const Feedback = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <RepairFeedback />
        </div>
    );
};

export default Feedback;
