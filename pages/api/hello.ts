// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse): void => {
  if (request.method === "POST") {
    response.status(405).end();
  } else {
    response.status(200).json({ body: request.body });
  }
};
