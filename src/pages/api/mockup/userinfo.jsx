// pages/api/mockup/userinfo.jsx

export default function handler(req, res) {
  const data = {
    id: "yeon",
    email: "test@example.com",
    fullname: "김정연",
    phone: "01012345678",
  };

  res.status(200).json(data);
}
