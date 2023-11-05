import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../img/DDanglog.png";
import NavSearch from "./NavSearch";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  border-bottom: 0.7px solid black;
`;
const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
`;
const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
const Logo = styled.img`
  display: flex;
  cursor: pointer;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

const Menu = styled.div`
  display: flex;
  padding-right: 10%;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;

export default function Nav() {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };
  const handleCommunityClick = () => {
    navigate("/community");
  };
  const handleGalleryClick = () => {
    navigate("/gallery");
  };
  return (
    <Div>
      <Wrap>
        <LogoWrap onClick={handleMainClick}>
          <Logo src={logo} alt="로고" />
        </LogoWrap>
        <MenuWrap>
          <Menu onClick={handleCommunityClick}>커뮤니티</Menu>
          <Menu onClick={handleGalleryClick}>갤러리</Menu>
        </MenuWrap>
        <NavSearch />
        {/* 
        로그인 X=> 로그인
        로그인 O => 글쓰기 버튼, 알림, 홈 버튼  */}
      </Wrap>
    </Div>
  );
}
