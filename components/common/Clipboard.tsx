import React from "react";
import styled from "styled-components";
import { IoLink } from "react-icons/io5";

interface IProps {
  onClickUrl: React.MouseEventHandler<HTMLDivElement>;
}

export default function Clipboard({ onClickUrl }: IProps) {
  return (
    <LinkWrap>
      <span onClick={onClickUrl}>
        <i>
          <IoLink />
        </i>
      </span>
    </LinkWrap>
  );
}

const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  span {
    border-radius: 50%;
    display: inline-block;
    justify-content: center;
    align-items: center;
    padding: 13px;
    background: #ececec;
    cursor: pointer;
  }
  i {
    color: #aaaaaa;
  }
`;
