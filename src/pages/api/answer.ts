import type { NextApiRequest, NextApiResponse } from "next";
import Question from "../question/[id]";

function genAnswerInfp(reqBody: any) {
  const answerList: any = [];
  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({ componentId: key, value: reqBody[key] });
  });
  return {
    questionId: reqBody.questionId || "",
    answerList,
  };
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    // 不是POST请求抛出错误
    res.status(200).json({ error: -1, msg: "Method Error" });
  }
  const answerInfo = genAnswerInfp(req.body);
  console.log(answerInfo);
  res.status(200).json({ error: 0 });
}
