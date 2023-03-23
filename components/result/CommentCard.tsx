import React from "react";

interface List {
  no: number;
  writer: string;
  comment: string;
  regDate: string;
  score: string;
}
interface IProps {
  list: List;
}

export default function CommentCard({ list }: IProps) {
  return (
    <li className="commentBox">
      <div className="commentInfo">
        <em>{list.writer}</em>
        <span>{list.regDate}</span>
        <span>점수: {list.score}</span>
      </div>
      <p className="commentTxt">{list.comment.replaceAll("<br>", "\r\n")}</p>
    </li>
  );
}
