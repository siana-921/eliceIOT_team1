import styled from "@emotion/styled";

const UserProfile = () => {
  return (
    <div>
      <ProfileImageWrapper></ProfileImageWrapper>
      <h3>UserName</h3>
      <p>가입일: 2023. 04. 23</p>
      <p>식물 수: 3</p>
      <div>비밀번호 변경 | 회원탈퇴</div>
    </div>
  );
};

export default UserProfile;
