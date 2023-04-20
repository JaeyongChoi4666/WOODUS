import React from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import Contribution from "../../components/contribution/Contribution";
import Secondmenu from "../../components/Secondmenu";

const Contrib = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <Contribution />
            <Footer />
        </div>
    );
};

export default Contrib;
