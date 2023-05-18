import styled from "@emotion/styled";
import React, { useState, useEffect, useCallback } from "react";
import DeviceModal from "./DeviceModal";
// import { useRecoilState } from "recoil";
// import { defaultDeviceIdState } from "../../store/atoms";
import { axiosInstance } from "@/api/base";
import { useRouter } from "next/router";
import { tokenState, userAtom } from "@/store/atoms";
import { useRecoilValue, useRecoilState } from "recoil";

export default function MyPageBailsList() {
  const token = useRecoilValue(tokenState);
  const [isModalOpen, setModalOpen] = useState(false);
  // const [id, setId] = useState("");
  const [picture, setPicture] = useState("");
  const [device_id, setDeviceId] = useState("");
  const [device_name, setFullName] = useState("");
  const [devices, setDevices] = useState([]);

  const [user_info, setUserInfo] = useRecoilState(userAtom);

  const addDevice = useCallback((device) => {
    setDevices((prevDevices) => [...prevDevices, device]);
  }, []);

  const router = useRouter();

  useEffect(() => {
    console.log(user_info);
    // 여기서 기본 device id를 가져오는 로직을 구현
    const { id } = user_info;

    const fetchDefaultDeviceId = async () => {
      try {
        const response = await axiosInstance.get(`device/info`, { id });
        const { picture, device_id, device_name } = response.data;
        setDeviceId(device_id);
        setPicture(picture);
        setFullName(device_name);

        console.log(response);

        addDevice({
          device_id: device_id,
          picture: picture,
          device_name: device_name,
        });
      } catch (error) {
        console.error("디바이스 목록 : 🚀디바이스 목록을 가져오는데 실패했습니다.", error);
      }
    };

    fetchDefaultDeviceId();
  }, [token, addDevice, user_info]);

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
      <h2>🪴 {device_name}님의 바질목록 🪴</h2>
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

  @media screen and (max-width: 428px) {
    width: 100%;
    margin: 20px;

    & h2 {
      font-size: 25px;
    }
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

  @media screen and (max-width: 428px) {
    flex-direction: column;
    align-items: center;
    margin: 30px;

    font-size: 16px;

    & button {
      font-size: 14px;
      margin: 7px;
    }
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

  @media screen and (max-width: 428px) {
    margin: 10px;
  }
`;
