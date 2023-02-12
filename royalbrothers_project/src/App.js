import Cities from "./landing/Cities";
import Home from "./landing/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";



import Navbar from './COMPONENTS/Navbar/Navbar';

import AllRoutes from './All ROUTES/Routes/Allroutes';
import Footer from './COMPONENTS/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <AllRoutes/>
    <Footer/>
      </BrowserRouter>
        
        
      
      {/* <Home/> */}

    
   
    </div>
  );
}


export default App;
