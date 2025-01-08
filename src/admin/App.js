
import './App.css';
import Baja from './projecttt';
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Cheat from './cheatRecord';
import Violation from './voilationRecord';
import Violatorrecord from './violatorRecord';
import Login from './login';


function App() {
  return (  <>
    <BrowserRouter> 
    
<Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path="home" element={<Baja />}></Route>
          <Route path="cheatRecord" element={<Cheat />}></Route>
          <Route path="voilation" element={<Violation />}></Route>
          <Route path="record" element={<Violatorrecord />}></Route>
</Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
