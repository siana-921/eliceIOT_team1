import styled from "@emotion/styled";
import React, { useState } from "react";
import DeviceModal from "./DeviceMojal";

export default function MyPageBailsList() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <BasilsListMain>
      <h3>김정연님의 바질</h3>
      <BasilListDiv>
        <p>새로운 바질이 추가되었나요?</p>
        <button onClick={openModal}>추가하러 가기</button>
        <DeviceModal isOpen={isModalOpen} closeModal={closeModal} />
      </BasilListDiv>
    </BasilsListMain>
  );
}

const BasilsListMain = styled.main`
  width: 70%;

  text-align: center;
`;

const BasilListDiv = styled.div`
  display: flex;
  justify-content: center;

  margin: 10px;
  font-size: 20px;
`;
