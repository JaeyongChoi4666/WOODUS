import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import Secondmenu from "../../components/Secondmenu";
import Map from "../../components/woodus/Map";

const Location = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <Map />
            <Footer />
        </div>
    );
};

export default Location;
