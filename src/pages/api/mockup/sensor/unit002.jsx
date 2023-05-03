export default function testapi(req, res) {
  const productId = req.body;
  console.log(req);

  const data = {
    idx: 121,
    device_id: "unit002",
    temp: 27,
    humidity: 58,
    light: 1206,
    water_level: 20,
    moisture: 1203,
    created_at: 1682658179,
  };

  res.status(200).json(data);
}
