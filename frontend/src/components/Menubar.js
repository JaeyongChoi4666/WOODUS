import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menubar.css";

const Menubar = () => {
    const [menuList, setMenuList] = useState([
        {
            id: 1,
            name: "WOODUS소개",
            link: "/woodus",
            dropdown: [
                { id: 1, name: "WOODUS 는?", link: "/woodus" },
                { id: 2, name: "연혁", link: "/woodus/history" },
                { id: 3, name: "시설소개", link: "/woodus/facilities" },
                { id: 4, name: "오시는길", link: "/woodus/location" },
            ],
        },
        {
            id: 2,
            name: "가구수리소",
            link: "/repair",
            dropdown: [
                { id: 1, name: "서비스 소개", link: "/repair" },
                { id: 2, name: "이용 후기", link: "/repair/feedback" },
            ],
        },
        {
            id: 3,
            name: "프로그램",
            link: "/class",
            dropdown: [
                { id: 1, name: "모집중", link: "/class" },
                { id: 2, name: "모집종료", link: "/class/end" },
            ],
        },
        {
            id: 4,
            name: "기업사회공헌",
            link: "/contribution",
            dropdown: [{ id: 1, name: "상세내용", link: "/contribution" }],
        },
        {
            id: 5,
            name: "커뮤니티",
            dropdown: [
                { id: 1, name: "우리의 활동", link: "/community" },
                { id: 2, name: "공지사항", link: "/community/notice" },
                { id: 4, name: "문의하기", link: "/community/ask" },
            ],
        },
    ]);

    const [activeMenu, setActiveMenu] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setActiveDropdown(null);
            setActiveMenu(null);
        }
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu.id);
        setActiveDropdown(null);
    };

    const handleDropdownClick = (dropdown) => {
        setActiveDropdown(dropdown.id);
    };

    return (
        <div className="menubarBox">
            <Container>
                <div className="menubarContentsBox">
                    <div className="logo">
                        <Link to="/">
                            <img
                                src="/pictures/woodus-logo.png"
                                width="100px"
                            />
                        </Link>
                    </div>
                    <div className="menubarContents">
                        <ul className="menu">
                            {menuList.map((menu) => (
                                <li
                                    key={menu.id}
                                    className={`menu-item ${
                                        activeMenu === menu.id ? "active" : ""
                                    }`}
                                    onClick={() => {
                                        if (menu.dropdown) {
                                            handleMenuClick(menu);
                                        } else {
                                            window.location.href = menu.link;
                                        }
                                    }}
                                >
                                    {menu.name}
                                    {activeMenu === menu.id && (
                                        <div
                                            className="dropdown"
                                            ref={dropdownRef}
                                        >
                                            {menu.dropdown.map((dropdown) => (
                                                <div
                                                    key={dropdown.id}
                                                    className={`dropdown-item ${
                                                        activeDropdown ===
                                                        dropdown.id
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleDropdownClick(
                                                            dropdown
                                                        )
                                                    }
                                                >
                                                    <Link
                                                        to={{
                                                            pathname:
                                                                dropdown.link,
                                                        }}
                                                        className="linktag"
                                                    >
                                                        <div>
                                                            {dropdown.name}
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Menubar;
