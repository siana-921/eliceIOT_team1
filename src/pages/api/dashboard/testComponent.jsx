let employeeFullName = [];
let employeeSalaryData = [];

async function drawChart() {
  await apiData();

  const data = {
    labels: employeeFullName, //["습도"],
    datasets: [
      {
        label: "습도",
        data: employeeSalaryData, //[12, 19],
        backgroundColor: ["rgba(0, 168, 107, 0.2)", "rgba(228,228,228, 0.2)"],
        borderColor: ["rgba(0, 168, 107, 1)", "rgba(228,228,228, 1)"],
        borderWidth: 1,
      },
    ],
  };
}

drawChart();
