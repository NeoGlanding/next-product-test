import { postHandler } from "../../../lib/controllers/products";

async function handler(req, res) {
  const { method } = req;
  if (method === "POST") postHandler(req, res);
  else res.status(500).json({ message: "Internal Server Error" });
}

export default handler;
