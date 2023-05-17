import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import DeviceModal from "./DeviceModal";
import { useRecoilState } from "recoil";
import { defaultDeviceIdState } from "../../store/atoms";
import { axiosInstance } from "@/api/base";
import { useRouter } from "next/router";

export default function MyPageBailsList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [picture, setPicture] = useState("");
  const [device_id, setDeviceId] = useState("");

  const router = useRouter();

  useEffect(() => {
    // 여기서 기본 device id를 가져오는 로직을 구현
    const fetchDefaultDeviceId = async () => {
      try {
        const response = await axiosInstance.get(`/user/sign_in/my_page`);
        const { picture, device_id } = response.data;
        setDeviceId(device_id);
        setPicture(picture);
      } catch (error) {
        console.error("🚀디바이스 목록을 가져오는데 실패했습니다.", error);
      }
    };

    fetchDefaultDeviceId();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeviceClick = (deviceId) => {
    router.push(`/dashboard/${deviceId}`);
  };

  return (
    <BasilsListMain>
      <h2>김정연님의 바질목록</h2>
      <BasilListDiv>
        <p>새로운 바질이 추가되었나요?</p>
        <button onClick={openModal}> 등록하러 가기</button>
      </BasilListDiv>
      <DeviceModal isOpen={isModalOpen} closeModal={closeModal} addDevice={addDevice} />
      {devices.length === 0 ? (
        <p>No devices added.</p>
      ) : (
        <BasilDeviceLists>
          {devices.map((device, index) => (
            <li key={index} onClick={() => handleDeviceClick(device.id)}>
              <div className="device-item">
                <div className="device-image" style={{ backgroundImage: `url(${device.image})` }} />
                <span>{device.name}</span>
              </div>
            </li>
          ))}
        </BasilDeviceLists>
      )}
    </BasilsListMain>
  );
}

const BasilsListMain = styled.main`
  width: 70%;
  margin: 60px;

  text-align: center;

  & h2 {
    font-size: 40px;
    font-weight: 400;
  }
`;

const BasilListDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  margin: 20px;
  font-size: 18px;

  & button {
    margin-left: 10px;
    color: #107d8e;
    font-weight: 700;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 16px;
  }
`;

const BasilDeviceLists = styled.ul`
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  .device-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .device-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin-bottom: 10px;
    border: 10px solid transparent;
    border-color: rgba(0, 168, 107);
  }
`;
