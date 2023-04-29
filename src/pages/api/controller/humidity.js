import axios from "axios";

export function handleLedOnOff(value) {
  //value 는 "on" 또는 "off" 로 해도 되고 true or false로 해도 될듯?
  axios
    .post("/api/actuators", { value })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
