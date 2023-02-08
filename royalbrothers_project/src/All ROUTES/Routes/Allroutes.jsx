import { Route, Routes } from "react-router-dom";
import Tarrif from "../../COMPONENTS/Tarrief page/Tarrief";
function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/tarrif" element={<Tarrif/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;