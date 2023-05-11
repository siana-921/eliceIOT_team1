export default function handler(req, res) {
  if (req.method === "POST") {
    const { id, password, fullname, email, phone } = req.body;

    if (
      id === "yeon" &&
      password === "qwer1234!" &&
      fullname === "김정연" &&
      email === "test@example.com" &&
      phone === "01012345678"
    ) {
      res.status(200).json({ message: "로그인 성공!" });
    } else {
      res.status(401).json({ message: "유효하지 않은 계정입니다. " });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
