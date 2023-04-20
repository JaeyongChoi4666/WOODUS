import React from "react";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import Introduction from "../../components/woodus/Introduction";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

const About = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <Introduction />
            <Footer />
        </div>
    );
};

export default About;
