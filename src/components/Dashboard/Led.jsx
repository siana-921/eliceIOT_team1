import { useRecoilValue } from "recoil";
import { dashboardDataAtom } from "../../store/Dashboard/atoms";

// 식물LED
export default function Led() {
  const dashboardData = useRecoilValue(dashboardDataAtom);

  return (
    <div>
      <h2>{dashboardData.led}</h2>
      <p>{dashboardData.led === 0 ? "꺼짐" : "켜짐"}</p>
      <p>식물 LED</p>
    </div>
  );
}

// fetchData().then(datapoints => {
//   const month = datapoints.financialreport.financials.map(function(index){
//     return index.date;

//   })
//   console.log(month);
// })
