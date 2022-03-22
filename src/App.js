import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from './Components/Pages/Homepage/Homepage';
import Login from './Components/Pages/Login/Login';
import Page404 from './Components/Pages/Error/404/404';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            <Route path='*' element={<Page404></Page404>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
