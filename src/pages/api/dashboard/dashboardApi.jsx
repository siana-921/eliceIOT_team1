export default function handler(req, res) {
  const productId = req.query.id;
  res.status(200).json({
    id: productId,
    device_id: "basil01",
    temp: 9,
    humidity: "45%",
    light: "100lx",
    moisture: "50%",
    created_at: "2023-04-25",
    pump_term: "24시간",
  });
}
