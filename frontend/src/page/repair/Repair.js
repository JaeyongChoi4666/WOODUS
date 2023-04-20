import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import RepairMain from "../../components/repair/RepairMain";
import Footer from "../../components/Footer";

const Repair = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <RepairMain />
            <Footer />
        </div>
    );
};

export default Repair;
