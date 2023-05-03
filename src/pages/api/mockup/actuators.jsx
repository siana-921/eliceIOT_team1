export default function handler(req, res) {
  const productId = req.query.idx;
  const data = [
    {
      idx: productId,
      device_id: "unit001",
      led: 0,
      pump: 100,
      created_at: 1682658179,
    },
    {
      idx: productId,
      device_id: "unit002",
      led: 0,
      pump: 100,
      created_at: 1682658180,
    },
  ];
  res.status(200).json(data);
}
