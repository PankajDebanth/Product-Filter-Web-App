import Starting_page from "./Componemts/Starting_page";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View_product from "./Componemts/View_product";

const App = ()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Starting_page/>}/>
        <Route path="/View_product" element={<View_product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
