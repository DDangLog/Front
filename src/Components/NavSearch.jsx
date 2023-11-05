import React from "react";
import styled from "styled-components";
import search from "../img/search.png";

const Wrap = styled.div`
  display: flex;
  width: 13%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;
const SearchInput = styled.input`
display: flex;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none; /* 커서 갔다댔을 때 외곽선 없애기
`;
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 80%;
  cursor: pointer;
`;

const SearchImg = styled.img`
  display: flex;
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

export default function NavSearch() {
  return (
    <Wrap>
      <SearchInput />
      <ImgWrap>
        <SearchImg src={search} alt="search" />
      </ImgWrap>
    </Wrap>
  );
}
