import { NextApiRequest, NextApiResponse } from "next";

async function handler(req, res) {
  req = NextApiRequest;
  res = NextApiResponse;

  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { name, email, password, id, phoneNumber } = data;
  const result = {
    id: 1,
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
  };

  if (result) {
    res.status(200).json({ message: "Created user!", error: false });
  } else {
    res.status(400).json({ message: "Error occured", error: true });
  }
}

export default handler;
