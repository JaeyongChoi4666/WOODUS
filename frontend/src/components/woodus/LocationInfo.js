import { faBus, faTrainSubway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./LocationInfo.css";

const LocationInfo = () => {
    return (
        <div className="locationInfoBox">
            <div>
                주소 : 서울특별시 성동구 용답중앙11길 13 어울림빌딩 지하1층
            </div>
            <div>- 주차공간이 협소하오니 대중교통 이용바랍니다.</div>
            <div className="locationInfoDetail">
                <div className="locationInfoDetailTitle">
                    <FontAwesomeIcon
                        icon={faTrainSubway}
                        style={{ paddingTop: "4px" }}
                    />
                    <div>지하철</div>
                </div>
                <div>
                    <div>5호선 : 답십리역 6번출구 도보1분</div>
                    <div>2호선 : 신답역 도보10분, 용답역 1번출구 도보8분</div>
                </div>
            </div>
            <div className="locationInfoDetail">
                <div className="locationInfoDetailTitle">
                    <FontAwesomeIcon
                        icon={faBus}
                        style={{ paddingTop: "4px" }}
                    />
                    <div>버스</div>
                </div>
                <div>
                    <div>지선버스 : 2015</div>
                    <div>간선버스 : 145,420,303,370,721</div>
                    <div>광역버스 : 9301</div>
                    <div>심야버스 : N30</div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;
