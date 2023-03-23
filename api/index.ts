import { CommentData } from "@/types/quiz";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";

const useGetTotal = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/quiz`, {
    auth: {
      username: process.env.NEXT_PUBLIC_BASIC_USERNAME!,
      password: process.env.NEXT_PUBLIC_BASIC_PASSWORD!,
    },
  });
};

export const useGetTotalQuery = () => {
  return useQuery(["quizTotal"], () => useGetTotal(), {
    select(data) {
      return data?.data?.data;
    },
    keepPreviousData: true,
  });
};

const usePostComment = (data: CommentData) => {
  return axios.post(
    `/api/quiz/comment`,
    {
      ...data,
    },
    {
      auth: {
        username: process.env.NEXT_PUBLIC_BASIC_USERNAME!,
        password: process.env.NEXT_PUBLIC_BASIC_PASSWORD!,
      },
    }
  );
};

export const useCommentMutation = () => {
  return useMutation<AxiosResponse, AxiosError, CommentData>((data) => usePostComment(data));
};

const useGetComment = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/quiz/comment`, {
    auth: {
      username: process.env.NEXT_PUBLIC_BASIC_USERNAME!,
      password: process.env.NEXT_PUBLIC_BASIC_PASSWORD!,
    },
  });
};

export const useGetCommentQuery = () => {
  return useQuery(["useGetComment"], () => useGetComment(), {
    select(data) {
      return data?.data?.data?.commentList;
    },
    keepPreviousData: true,
  });
};
