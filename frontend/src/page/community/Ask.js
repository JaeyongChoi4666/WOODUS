import React from "react";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import AskInfo from "../../components/community/AskInfo";

const Ask = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <AskInfo />
            <Footer />
        </div>
    );
};

export default Ask;
