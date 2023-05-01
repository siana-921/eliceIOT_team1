export default function handler(req, res) {
  const productId = req.query.id;
  res.status(200).json({
    idx: productId,
    device_id: "basil01",
    temp: 9,
    humidity: 23,
    light: 100,
    moisture: 50,
    pump_term: 17,
    created_at: "2023-04-25",
  });
}
