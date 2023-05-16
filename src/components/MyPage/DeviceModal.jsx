import React, { useState } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";

const DeviceModal = ({ isOpen, closeModal, addDevice }) => {
  const [deviceName, setDeviceName] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [deviceId, setDeviceId] = useState("");
  const [ownerId, setOwnerId] = useState("");

  const handleNameChange = (e) => {
    setDeviceName(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedPhoto(imageUrl); // 선택 이미지 미리보기
    }
  };

  const handleDeviceIdChange = (e) => {
    setDeviceId(e.target.value);
  };

  const handleOwnerIdChange = (e) => {
    setOwnerId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const device = {
      device_id: deviceId,
      name: deviceName,
      owner_id: ownerId,
      photo: selectedPhoto,
    };
    addDevice(device); // 디바이스 추가
    closeModal(); // 모달 닫기
  };

  return (
    <DeviceModalMain>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Device Modal"
        style={{
          overlay: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "400px",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            borderRadius: "4px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <DeviceModalH2>디바이스 추가</DeviceModalH2>
        <DeviceModalForm onSubmit={handleSubmit}>
          <label>
            디바이스 이름 :
            <input
              type="text"
              value={deviceName}
              onChange={handleNameChange}
              placeholder="귀여운 바질씨"
            />
          </label>
          <label>
            디바이스 이미지 :
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </label>
          <label>
            디바이스 아이디 :
            <input type="text" value={deviceId} onChange={handleDeviceIdChange} />
          </label>
          <label>
            회원 아이디 :
            <input type="text" value={ownerId} onChange={handleOwnerIdChange} />
          </label>
          <DeviceModalButtonDiv>
            <button type="submit">등록</button>
            <button type="button" onClick={closeModal}>
              취소
            </button>
          </DeviceModalButtonDiv>
        </DeviceModalForm>
      </Modal>
    </DeviceModalMain>
  );
};

export default DeviceModal;

const DeviceModalMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DeviceModalH2 = styled.h2`
  text-align: center;
`;

const DeviceModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeviceModalButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
