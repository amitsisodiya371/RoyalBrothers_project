import NavRoutes from './All ROUTES/Routes/Allroutes';
import './App.css';
import Navbar from './COMPONENTS/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    {/* <NavRoutes/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
