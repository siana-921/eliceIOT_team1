import { useRecoilValue } from "recoil";
import { actuatorDataAtom } from "../../store/Dashboard/atoms";

// 식물LED
export default function Led() {
  const actuatorData = useRecoilValue(actuatorDataAtom);

  return (
    <div>
      <h2>{actuatorData[0].led}</h2>
      {console.log(actuatorData[0].led)}
      {console.log(actuatorData[1].led)}
      <p>{actuatorData[1]?.led ? "켜짐" : "꺼짐"}</p>
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
