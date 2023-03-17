import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.url?.startsWith("/api-docs")) {
    //페이지 및 기타 리소스에 대한 인증 메커니즘 헤더
    res.setHeader("WWW-authenticate", 'Basic realm="Secure Area"');
    res.statusCode = 401;
    res.end(`Auth Required.`);
  } else {
    res.status(401).json({ message: "Auth Required." });
  }
}
