import Temperature from "./temperature";
import Moisture from "./moisture";

export default function DashBoard() {
  return (
    <BrowserRouter>
      <Routes>
        <p>대시보드입니당</p>
        <Temperature />
        <Moisture />
      </Routes>
    </BrowserRouter>
  );
}
