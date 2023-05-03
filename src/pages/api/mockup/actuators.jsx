export default function handler(req, res) {
  const productId = req.query.idx;
  const data = [
    {
      idx: productId,
      device_id: "unit001",
      led: 15,
      pump: 100,
      created_at: 1682658179,
    },
  ];
  res.status(200).json(data);
}
