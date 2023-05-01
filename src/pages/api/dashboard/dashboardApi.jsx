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

// // fetch data from the api

// async function apiData() {
//   const apiLink = "http://dummy.restapiexample.com/api/v1/employees-${key}";

//   const response = await fetch(apiLink);
//   const datapoints = await response.json();
//   console.log(datapoints);

//   const salary = datapoints.data.map((amount) => amount.employee_salary);
//   console.log(salary);
//   employeeSalaryData = salary;

//   const fullname = datapoints.data.map((name) => amount.employee_name);
//   console.log(fullname);
//   employeeFullName = salary;
// }
