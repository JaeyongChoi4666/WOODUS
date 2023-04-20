import React from "react";
import Menubar from "../Menubar";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Response from "./Response";
import "./Enroll.css";
import Footer from "../Footer";

const CompleteSubmit = () => {
    const location = useLocation();
    console.log("로케이션", location.state.data);
    const data = location.state.data;
    return (
        <div>
            <Menubar />
            <div className="CompleSubmitBox">
                <Container>
                    {Array.isArray(data)
                        ? data.map((resdata) => (
                              <Response key={resdata.stu_id} data={resdata} />
                          ))
                        : []}
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default CompleteSubmit;
