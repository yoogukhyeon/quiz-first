import CryptoJS from "crypto-js";
const SECRET_KEY = process.env.NEXT_PUBLIC_API_AES_SECRET_KEY!;

export const erypto = (data: any[] | any) => {
  const jsonData = JSON.stringify(data);

  const cipher = CryptoJS.AES.encrypt(jsonData, SECRET_KEY);
  return cipher.toString();
};

export const decrypt = (data: any[] | any) => {
  const dataBytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
  let chiper = dataBytes.toString(CryptoJS.enc.Utf8);
  chiper = JSON.parse(chiper);

  return chiper;
};
