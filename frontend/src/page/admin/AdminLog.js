import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminLog = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const [adminCode, setAdminCode] = useState("");
    const ADMIN_PW = process.env.REACT_APP_ADMIN_PW;

    const handleChange = (event) => {
        setAdminCode(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (adminCode === ADMIN_PW) {
            setAuthenticate(true);
            navigate("/admin");
        } else {
            alert("잘못된 코드입니다.");
        }
        setAdminCode("");
    };
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="modal show adminModal">
                    <Form onSubmit={handleSubmit}>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>
                                    관리자코드를 입력해주세요
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <input
                                    type="password"
                                    value={adminCode}
                                    onChange={handleChange}
                                />
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="warning" type="submit">
                                    입력
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Form>
                </div>
                <div className="modal-backdrop show"></div>
            </div>
        </div>
    );
};

export default AdminLog;
