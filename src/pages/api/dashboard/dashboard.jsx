export default function handler(req, res) {
  const productId = req.query.idx;
  const data = [
    {
      idx: productId,
      device_id: "basil01",
      temp: 9,
      humidity: 23,
      light: 100,
      moisture: 50,
      pump_term: 17,
      created_at: "2023-04-25",
    },
    {
      idx: 2,
      device_id: "basil02",
      temp: 11,
      humidity: 26,
      light: 80,
      moisture: 60,
      pump_term: 15,
      created_at: "2023-04-26",
    },
  ];
  res.status(200).json(data);
}
