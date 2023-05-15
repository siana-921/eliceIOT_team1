/// pages/api/mockup/basilList.jsx

export default function handler(req, res) {
  const data = {
    defaultDeviceId: "unit01",
    devices: [
      {
        id: "unit01",
        name: "Unit 1",
        image: "/images/404error.png",
      },
      {
        id: "unit02",
        name: "Unit 2",
        image: "/images/404error.png",
      },
      {
        id: "unit03",
        name: "Unit 3",
        image: "/images/404error.png",
      },
    ],
  };

  res.status(200).json(data);
}
