import Cities from "./landing/Cities";
import Home from "./landing/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>         
          <Route path="/" element={<Cities/>} />
          <Route path="/Home" element={<Home />} />

        </Routes>
      </BrowserRouter>
        
        
      
      {/* <Home/> */}

    </div>
  );
}


export default App;
