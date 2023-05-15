import React, { useState } from "react";
import Modal from "react-modal";

const DeviceModal = ({ isOpen, closeModal }) => {
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
    // 디바이스 추가 처리를 여기에 구현합니다.
    // deviceName과 selectedImage를 사용하여 디바이스를 추가하거나 서버로 전송할 수 있습니다.
    closeModal(); // 모달 닫기
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Device Modal">
      <h2>Add Device</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Device Name:
          <input type="text" value={deviceName} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Device Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default DeviceModal;
