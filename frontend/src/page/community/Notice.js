import React from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import Secondmenu from "../../components/Secondmenu";
import NoticePage from "../../components/community/NoticePage";

const Notice = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <NoticePage />
            <Footer />
        </div>
    );
};

export default Notice;
