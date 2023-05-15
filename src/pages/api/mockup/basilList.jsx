// pages/api/mockup/basilList.js

export default function handler(req, res) {
  const data = {
    defaultDeviceId: "unit01",
  };

  res.status(200).json(data);
}
