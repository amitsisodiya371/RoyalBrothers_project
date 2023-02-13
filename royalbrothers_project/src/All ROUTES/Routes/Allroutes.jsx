import { Route, Routes } from "react-router-dom";
import Partner from "../../amit/Partner/Partner";
import Tarrif from "../../amit/Tarrief page/Tarrief";
import Product from "../../components/Product";
function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="//" element={<Home />} /> */}
        {/* <Route path="/tarrif" element={<Tarrif/>}></Route>
        <Route path="/partner with us" element={<Partner/>}></Route> */}
        
        {/* <Route path="/Home/Product" element={<Product/>}></Route> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;