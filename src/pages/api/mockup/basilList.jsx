// pages/api/mockup/basilList.jsx

export default function handler(req, res) {
  const data = {
    defaultDeviceId: "unit01",
    devices: [
      {
        id: "unit01",
        name: "Unit 1",
        image: "path/to/device1.jpg",
      },
      {
        id: "unit02",
        name: "Unit 2",
        image: "path/to/device1.jpg",
      },
      {
        id: "unit02",
        name: "Unit 2",
        image: "path/to/device1.jpg",
      },
    ],
  };

  res.status(200).json(data);
}
