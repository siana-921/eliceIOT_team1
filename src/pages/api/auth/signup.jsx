// next auth용 회원가입 폼
// 에러나서 주석처리해뒀습니당..

// import { hashPassword } from "../../../../lib/auth";
// import { PrismaClient } from "@prisma/client";

// async function handler(req, res) {
//   let prisma = new PrismaClient();

//   if (req.method !== "POST") {
//     return;
//   }

//   const data = req.body;

//   const { id, fullname, email, password, phone } = data;
//   const passwordRegex =
//     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

//   if (
//     !id ||
//     !fullname ||
//     !email ||
//     !email.includes("@") ||
//     !password ||
//     !phone ||
//     !passwordRegex.test(password.trim())
//   ) {
//     res.status(422).json({
//       message:
//         "비밀번호는 숫자,영어대소문자,특수문자를 포함한 8자 이상 16자로 작성해주세요.",
//       error: true,
//     });
//     return;
//   }

//   const existingUser = await prisma.user.findUnique({
//     where: { id: id }, //{user model의 id : request body에서 유저가 보낸 id}
//     select: {
//       id: true,
//       fullname: true,
//       email: true,
//       phone: true,
//     },
//   });

//   if (existingUser) {
//     res.status(422).json({ message: "이미 로그아웃 되어써오!", error: true });
//     return;
//   }

//   const hashedPassword = await hashPassword(password);

//   const result = await prisma.user.create({
//     data: {
//       id: id,
//       fullname: fullname,
//       email: email,
//       phone: phone,
//       password: hashedPassword,
//     },
//   });

//   if (result) {
//     res.status(201).json({ message: "Created user!", error: false });
//     // 201 : Created, 새로운 리소스가 생성되었음
//   } else {
//     res.status(422).json({ message: "Error occured", error: true });
//     // 422 : Unprocessable Entity, 클라이언트 요청의 내용이 유효하지 않아서 요청을 처리할 수 없음
//   }
// }

// export default handler;
