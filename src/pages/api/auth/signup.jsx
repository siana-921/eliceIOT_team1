async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { fullname, email, password, phone } = data;
  const result = {
    id: 1,
    fullname: fullname,
    email: email,
    phone: phone,
  };

  if (result) {
    res.status(201).json({ message: "Created user!", error: false });
    // 201 : Created, 새로운 리소스가 생성되었음
  } else {
    res.status(422).json({ message: "Error occured", error: true });
    // 422 : Unprocessable Entity, 클라이언트 요청의 내용이 유효하지 않아서 요청을 처리할 수 없음
  }
}

export default handler;
