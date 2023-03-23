import { useGetCommentQuery } from "@/api";
import React from "react";
import styled from "styled-components";
import Loading from "../common/Loading";
import CommentCard from "./CommentCard";

export default function CommentList() {
  const { data: commentList, status } = useGetCommentQuery();

  if (status === "loading") {
    return <Loading />;
  }
  return (
    <CommentListWrap>
      <h3>댓글 작성 목록</h3>
      <ul>
        {commentList?.map((val: any) => (
          <CommentCard key={val.no} list={val} />
        ))}
      </ul>
    </CommentListWrap>
  );
}

const CommentListWrap = styled.div`
  padding: 15px 0;
  h3 {
    left: 0;
    color: #00a7e1;
    font-weight: bold;
    position: relative;
    display: inline-block;

    ::after {
      z-index: -1;
      position: absolute;
      bottom: -3px;
      left: 0px;
      content: "";
      display: block;
      width: 100%;
      height: 12px;
      background: #acd6f2;
      opacity: 0.2;
    }
  }
  .commentBox {
    border-bottom: 1px solid #eee;
    padding: 15px 0;
  }
  .commentInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > em {
      font-size: 16px;
      line-height: 21px;
      font-weight: bold;
    }

    > span {
      color: rgb(178, 178, 178);
      font-size: 13px;
      line-height: 19px;
    }
  }

  .commentTxt {
    text-align: left;
    word-break: break-all;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0;
  }
`;
