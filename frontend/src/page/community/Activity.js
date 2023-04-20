import React from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import Secondmenu from "../../components/Secondmenu";
import BoardList from "../../components/board/BoardList";
import ActivityDetail from "../../components/community/ActivityDetail";

const Activity = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <ActivityDetail />
            <Footer />
        </div>
    );
};

export default Activity;
