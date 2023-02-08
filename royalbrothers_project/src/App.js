
import './App.css';
import Navbar from './COMPONENTS/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './All ROUTES/Routes/Allroutes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    <AllRoutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
