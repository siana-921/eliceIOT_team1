// pages/api/mockup/sign_in.jsx

export default function handler(req, res) {
  const data = {
    id: "yeon",
    password: "qwer1234!",
  };

  res.status(200).json(data);
}
