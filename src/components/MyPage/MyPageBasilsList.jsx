import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import DeviceModal from "./DeviceModal";
import { useRecoilState } from "recoil";
import { devicesState, defaultDeviceIdState } from "../../store/atoms";
import { AxiosInstance } from "axios";
import { axiosInstance } from "@/api/base";

export default function MyPageBailsList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [devices, setDevices] = useState([]);

  const [defaultDeviceId, setDefaultDeviceId] = useRecoilState(defaultDeviceIdState);

  useEffect(() => {
    // 여기서 기본 device id를 가져오는 로직을 구현
    const fetchDefaultDeviceId = async () => {
      try {
        // 서버로부터 유저의 기본 device id를 가져온다고 가정(unit01)
        const response = await axiosInstance.get(`/user/sign_in/my_page`);
        const data = await response.json();
        setDefaultDeviceId(data.defaultDeviceId);
      } catch (error) {
        console.error("Failed to fetch default device id:", error);
      }
    };

    fetchDefaultDeviceId();
  }, [setDefaultDeviceId]); // 값이 변경될 때마다 useEffect 콜백 함수가 실행되도록 의존성 배열 추가

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
            <li key={index}>
              <div className="device-item">
                <div
                  className="device-image"
                  style={{ backgroundImage: `url(${URL.createObjectURL(device.image)})` }}
                />
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
