// import { axiosInstance } from "@/api/base";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyPageUser() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullName] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //My Page 불러오는 useEffect
    const fetchMyPageInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/mockup/userinfo`);
        const { id, email, phone, fullname } = response.data;
        setId(id);
        setEmail(email);
        setPhone(phone);
        setFullName(fullname);
        setLoading(false);
      } catch (err) {
        console.log(err);
        console.log("API 호출에 실패했습니다.");
        setLoading(false);
      }
    };

    fetchMyPageInfo();
  }, []);

  return (
    <>
      <MyPageUserMain>
        <MyPageTitle>👋 {fullname}님, 반가워요!</MyPageTitle>
        <MyPageDiv>
          <MyPageInfoList>
            <MyPageInfoItem>🪴 아이디 : {id}</MyPageInfoItem>
            <MyPageInfoItem>✉️ 이메일 : {email}</MyPageInfoItem>
            <MyPageInfoItem>📱 휴대폰번호 : {phone}</MyPageInfoItem>
          </MyPageInfoList>
        </MyPageDiv>
      </MyPageUserMain>
    </>
  );
}

const MyPageUserMain = styled.main`
  width: 75%;

  border-radius: 20px;
  background-color: rgba(217, 217, 217, 0.3);

  text-align: center;
`;

const MyPageTitle = styled.h1`
  font-size: 50px;
  font-weight: 400;

  margin: 20px;
`;

const MyPageDiv = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
`;

const MyPageInfoList = styled.ul``;

const MyPageInfoItem = styled.li`
  font-size: 21px;
  margin: 10px;
`;
