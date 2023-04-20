import React from "react";
import Category from "../components/home/Category";
import Menubar from "../components/Menubar";
import Summary from "../components/home/Summary";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <div>
            <Menubar />
            <Category />
            <Summary />
            <Footer />
        </div>
    );
};

export default Homepage;
