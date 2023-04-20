import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import Secondmenu from "../../components/Secondmenu";
import Facility from "../../components/woodus/Facility";

const Facilities = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <Facility />
            <Footer />
        </div>
    );
};

export default Facilities;
