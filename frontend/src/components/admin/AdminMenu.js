import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminMenu = ({ onClick }) => {
    const navigate = useNavigate();
    const [button, setButton] = useState();
    const handleButtonClick = (event) => {
        const buttonId = event.target.id;
        setButton(buttonId);
        onClick(buttonId);
    };
    const showAdmin = (id) => {
        navigate(`/admin/${id}`);
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">홈으로</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => showAdmin("peoplelist")}>
                                프로그램 신청자목록
                            </Nav.Link>
                            <Nav.Link onClick={() => showAdmin("addcourse")}>
                                프로그램 내용등록
                            </Nav.Link>
                            <Nav.Link onClick={() => showAdmin("addposter")}>
                                프로그램 포스터등록
                            </Nav.Link>
                            <Nav.Link onClick={() => showAdmin("addrepair")}>
                                가구수리소후기 등록
                            </Nav.Link>
                            <Nav.Link onClick={() => showAdmin("addnotice")}>
                                공지사항 등록
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => showAdmin("addcontribution")}
                            >
                                기업사회공헌 등록
                            </Nav.Link>
                            <Nav.Link onClick={() => showAdmin("addactivity")}>
                                우리의활동 등록
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AdminMenu;
