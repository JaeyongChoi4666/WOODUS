import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Secondmenu.css";

const Secondmenu = () => {
    const location = useLocation();
    const [list, setList] = useState([]);
    const [title, setTitle] = useState();
    const [selectTitle, setSelectTitle] = useState();
    const [openlist, setOpenlist] = useState(false);

    useEffect(() => {
        const nowPath = location.pathname;
        const slicePath = nowPath.split("/").filter(Boolean);
        if (slicePath[0] === "woodus") {
            setTitle("WOODUS소개");
            setList([
                { id: 1, name: "WOODUS 는?", link: "/woodus" },
                { id: 2, name: "연혁", link: "/woodus/history" },
                { id: 3, name: "시설소개", link: "/woodus/facilities" },
                { id: 4, name: "오시는길", link: "/woodus/location" },
            ]);
            if (slicePath[1] === "history") {
                setSelectTitle("연혁");
            } else if (slicePath[1] === "facilitis") {
                setSelectTitle("시설소개");
            } else if (slicePath[1] === "location") {
                setSelectTitle("오시는길");
            } else {
                setSelectTitle("WOODUS 는?");
            }
        } else if (slicePath[0] === "repair") {
            setTitle("가구수리소");
            setList([
                { id: 1, name: "서비스 소개", link: "/repair" },
                { id: 2, name: "이용 후기", link: "/repair/feedback" },
            ]);
            if (slicePath[1] === "feedback") {
                setSelectTitle("이용 후기");
            } else {
                setSelectTitle("서비스 소개");
            }
        } else if (slicePath[0] === "class") {
            setTitle("프로그램");
            setList([
                { id: 1, name: "모집중", link: "/class" },
                { id: 2, name: "모집종료", link: "/class/end" },
            ]);
            if (slicePath[1] === "end") {
                setSelectTitle("모집종료");
            } else {
                setSelectTitle("모집중");
            }
        } else if (slicePath[0] === "contribution") {
            setTitle("기업사회공헌");
            setSelectTitle("상세내용");
        } else if (slicePath[0] === "community") {
            setTitle("커뮤니티");
            setList([
                { id: 1, name: "우리의 활동", link: "/community" },
                { id: 2, name: "공지사항", link: "/community/notice" },
                { id: 4, name: "문의하기", link: "/community/ask" },
            ]);
            if (slicePath[1] === "notice") {
                setSelectTitle("공지사항");
            } else if (slicePath[1] === "qna") {
                setSelectTitle("QnA");
            } else if (slicePath[1] === "ask") {
                setSelectTitle("문의하기");
            } else {
                setSelectTitle("우리의 활동");
            }
        }
    }, [location]);

    const clickList = () => {
        setOpenlist(!openlist);
    };
    console.log(list);

    // 클릭 이벤트가 발생할 때 document에 이벤트를 등록하여 클릭된 요소가 드롭다운 내부 요소가 아닌 경우 드롭다운을 닫습니다.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openlist && !event.target.closest(".seconMenuSecondTitle")) {
                setOpenlist(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        // 이펙트 함수가 반환하는 함수는 컴포넌트가 언마운트될 때 이벤트 리스너를 삭제합니다.
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [openlist]);

    return (
        <div className="secondMenuBox">
            <Container className="secondMenuInBox">
                <div className="secondMenuTitle">{title}</div>
                <div className="seconMenuSecondTitle">
                    <div className="selectName" onClick={clickList}>
                        {selectTitle}
                        {list.length != "0" ? (
                            <div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        ) : null}
                    </div>
                    {list.length != "0" ? (
                        <ul
                            className={
                                openlist
                                    ? "secondMenulistbox open"
                                    : "secondMenulistbox"
                            }
                        >
                            {list.map((item) => (
                                <li key={item.id} className="secondMenulist">
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </Container>
        </div>
    );
};

export default Secondmenu;
