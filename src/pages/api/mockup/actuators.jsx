export default function handler(req, res) {
  const productId = req.query.idx;
  const data = [
    {
      idx: productId,
      device_id: "unit001",
      led: 255,
      pump: 10,
      created_at: 1682658179,
    },
    {
      idx: productId,
      device_id: "unit002",
      led: 12,
      pump: 30,
      created_at: 168266000,
    },
  ];
  res.status(200).json(data);
}
