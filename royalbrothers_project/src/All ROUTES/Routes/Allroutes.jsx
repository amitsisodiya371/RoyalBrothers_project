import { Route, Routes } from "react-router-dom";
import Partner from "../../COMPONENTS/Partner/Partner";
import Tarrif from "../../COMPONENTS/Tarrief page/Tarrief";
function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="//" element={<Home />} /> */}
        <Route path="/tarrif" element={<Tarrif/>}></Route>
        <Route path="/partner with us" element={<Partner/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;