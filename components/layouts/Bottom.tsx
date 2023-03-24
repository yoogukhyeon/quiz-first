import React, { useRef, useState } from "react";
import styled from "styled-components";

interface IProps {
  progress: number;
}

export const Bottom = ({ progress }: IProps) => {
  return (
    <BottomWrap>
      <div className="progress">
        <div>
          <span style={{ width: `${progress}%` }}></span>
        </div>
        <p>{progress}%</p>
      </div>
    </BottomWrap>
  );
};

const BottomWrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #222;
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: center;

  .progress {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    max-width: 320px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    div {
      position: relative;
      width: 100%;
      height: 4px;
      background: #ececec;
      color: #fff;

      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: #09a334;
        transition: all ease 0.3s 0s;
      }
    }
    p {
      width: 5px;
      min-width: 5px;
      margin-left: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
