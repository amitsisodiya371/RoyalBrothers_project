import "./App.css";
import PaymentDetails from "./Components/PaymentDetails";
import Payment from "./Components/Payment";
import { Route, Routes } from "react-router";
// import { BrowserRouter } from "react-router-dom";
// import PaymentPage from "./Components/PaymentPage"
// import PaymentConfirm from "./Components/PaymentConfirm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaymentDetails />} />
        <Route path="/Payment" element={<Payment />} />

        {/* <PaymentPage/>
      
      <PaymentConfirm/> */}
        {/* <PaymentConfirm/> */}
        {/* <Payment/>
          <PaymentDetails/> */}
      </Routes>
    </div>
  );
}

export default App;
