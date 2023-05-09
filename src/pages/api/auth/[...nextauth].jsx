import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Hi",
      credentials: {
        id: {
          label: "Id",
          type: "id",
          placeholder: "아이디를 입력해주세요.",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "패스워드를 입력해주세요.",
        },
      },
      async authorize(credentials, req) {
        if (credentials.id === "testuser" && credentials.password === "test") {
          const user = {
            id: "testid",
            email: "testuser@example.com",
            number: "01012345678",
            fullname: "testname",
          };
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
});
