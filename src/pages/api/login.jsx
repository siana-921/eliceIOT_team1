export default function handler(req, res) {
  if (req.method === "POST") {
    const { id, password } = req.body;

    if (id === "sando" && password === "sdwwwe1234!w") {
      res.status(200).json({ message: "로그인 성공!" });
    } else {
      res.status(401).json({ message: "유효하지 않은 계정입니다. " });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
