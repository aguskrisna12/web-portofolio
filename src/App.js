import Home from './Components/Pages/Home'
import Cafe from './Components/App/Cafe-Menu/cafe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormRegister from './Components/App/HTML-Forms-by-Building-a-Registration-Form/form-register';
import Calculator from './Components/App/Calculator/Calculator';
import Flexbox from './Components/App/CSS-Flexbox-by-Building-a-Photo-Gallery/Flexbox';
import Blog from './Components/App/Tribute-Page/Blog';
import BalanceSheet from './Components/App/Building-A-Balance-Sheet/BalanceSheet';
import Tiktaktoe from './Components/App/Tik-Tak-Toe/Tiktaktoe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
        <Route path='/cafe' element={<Cafe />}></Route>
        <Route path='/register-form' element={<FormRegister />}></Route>
        <Route path='/flexbox' element={<Flexbox />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/balance-sheet' element={<BalanceSheet />}></Route>
        <Route path='/tiktaktoe' element={<Tiktaktoe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;