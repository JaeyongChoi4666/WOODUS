import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import LocationInfo from "./LocationInfo";
import "./Map.css";

const { kakao } = window;
const Map = () => {
    useEffect(() => {
        let container = document.getElementById("map");
        let options = {
            center: new window.kakao.maps.LatLng(37.566162, 127.051819),
            level: 3,
        };

        let map = new window.kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(37.566162, 127.051819);

        // 마커를 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    }, []);
    return (
        <div className="mapBox">
            <Container>
                <div id="map" />
                <LocationInfo />
            </Container>
        </div>
    );
};

export default Map;
