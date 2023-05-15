import styled from "@emotion/styled";
import React, { useState } from "react";
import DeviceModal from "./DeviceModal";
import { allDeviceSensorAtom } from "@/store/atoms";

export default function MyPageBailsList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [devices, setDevices] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addDevice = (device) => {
    setDevices([...devices, device]);
  };

  return (
    <BasilsListMain>
      <h3>김정연님의 바질</h3>
      <BasilListDiv>
        <p>새로운 바질이 추가되었나요?</p>
        <button onClick={openModal}>등록하러 가기</button>
        <DeviceModal isOpen={isModalOpen} closeModal={closeModal} addDevice={addDevice} />
        <ul>
          {devices.map((device, index) => {
            <li key={index}>{device.name}</li>;
          })}
        </ul>
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
