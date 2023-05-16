import React, { useState } from "react";
import Modal from "react-modal";

// 모달 수정 시자그
const DeviceModal = ({ isOpen, closeModal, addDevice }) => {
  const [deviceName, setDeviceName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNameChange = (e) => {
    setDeviceName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const device = {
      name: deviceName,
      image: selectedImage,

      /*
device_id,
name,
owner_id,
photo,
*/
    };
    addDevice(device); // 디바이스 추가
    closeModal(); // 모달 닫기
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Device Modal">
      <h2>디바이스 추가</h2>
      <form onSubmit={handleSubmit}>
        <label>
          디바이스 이름 :
          <input type="text" value={deviceName} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          디바이스 이미지 :
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">등록</button>
        <button type="button" onClick={closeModal}>
          취소
        </button>
      </form>
    </Modal>
  );
};

export default DeviceModal;
