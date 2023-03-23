import { Inputs } from "@/pages/api/quiz/types";
import React from "react";
import styled from "styled-components";

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: Inputs;
  score: string;
  writerRef: any;
  commentRef: any;
}

export default function Comment({ commentRef, writerRef, onChange, handleSubmit, inputs, score }: IProps) {
  const { writer, comment } = inputs;

  return (
    <FormWrap>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="writer">닉네임</label>
          <input
            ref={writerRef}
            placeholder="닉네임을 입력해주세요."
            maxLength={16}
            type="text"
            value={writer}
            onChange={onChange}
            name="writer"
            id="writer"
          />
        </div>
        <div>
          <label htmlFor="comment">댓글</label>
          <textarea
            ref={commentRef}
            placeholder="댓글을 입력해주세요."
            rows={5}
            maxLength={256}
            value={comment}
            onChange={onChange}
            name="comment"
            id="comment"
          />
        </div>
        <div>
          <label htmlFor="score">당신의 점수</label>
          <input type="text" disabled={true} value={score} name="score" id="score" />
        </div>
        <button type="submit">작성</button>
      </form>
    </FormWrap>
  );
}

const FormWrap = styled.div`
  > form {
    padding: 10px 0;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin: 15px 0;
      label {
        display: inline-block;
        width: 120px;
        flex-grow: 1;
        text-align: left;
        font-weight: bold;
        font-size: 18px;
      }
      input {
        flex-grow: 2;
        padding: 10px;
        height: 35px;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
      }
      textarea {
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 10px;
        outline: none;
        resize: none;
        width: 100%;
      }
      input:disabled {
        font-weight: bold;
        text-align: center;
      }
    }

    button {
      width: 100%;
      padding: 15px 0;
      background: #0099d9;
      border-radius: 8px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }

    @media (max-width: 450px) {
      div {
        flex-direction: column;
        gap: 10px;

        label {
          width: 100%;
          text-align: center;
        }

        input {
          width: 100%;
        }
        textarea {
          width: 100%;
        }
      }
    }
  }
`;
