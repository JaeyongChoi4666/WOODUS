import React from "react";
import { Container } from "react-bootstrap";
import "./Facility.css";

const Facility = () => {
    const facility = [
        { id: 1, name: "교육장소", image: "/pictures/facilities1.jpg" },
        { id: 2, name: "공구1", image: "/pictures/facilities2.jpg" },
        { id: 3, name: "공구2", image: "/pictures/facilities3.jpg" },
        { id: 4, name: "Table saw", image: "/pictures/facilities4.jpg" },
        { id: 5, name: "Band saw", image: "/pictures/facilities5.jpg" },
    ];
    return (
        <div className="facilityBox">
            <Container>
                <div className="facilityTitle">시설현황</div>
                {facility.map((item) => (
                    <div key={item.id}>
                        <div className="facilityImage">
                            <img src={item.image} width="80%" />
                        </div>
                        <div className="facilityName">{item.name}</div>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Facility;
