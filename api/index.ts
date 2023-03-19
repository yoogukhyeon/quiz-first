import axios, { AxiosError, AxiosResponse } from "axios";

export const quizTotal = async () => {
  const result = await axios.get(`http://localhost:3000/api/quiz`, {
    auth: {
      username: process.env.NEXT_PUBLIC_BASIC_USERNAME!,
      password: process.env.NEXT_PUBLIC_BASIC_PASSWORD!,
    },
  });

  return result?.data?.data;
};
