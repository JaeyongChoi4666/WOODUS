import React from "react";
import Menubar from "../../components/Menubar";
import { useLocation } from "react-router-dom";
import Secondmenu from "../../components/Secondmenu";
import Class from "../../components/class/Class";
import Footer from "../../components/Footer";

const Hiringprogram = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <Class />
            <Footer />
        </div>
    );
};

export default Hiringprogram;
